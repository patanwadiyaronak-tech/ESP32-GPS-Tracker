import { database } from "./firebase.js";
import {
  ref,
  onValue
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const map = L.map("map").setView([20.5937, 78.9629], 5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap"
}).addTo(map);

const marker = L.marker([20.5937, 78.9629]).addTo(map);

const gpsRef = ref(database, "gps");

onValue(gpsRef, (snapshot) => {
  const data = snapshot.val();

  if (!data) return;

  const lat = data.lat;
  const lng = data.lng;

  document.getElementById("lat").innerText = lat;
  document.getElementById("lng").innerText = lng;
  document.getElementById("status").innerText = "Live";

  marker.setLatLng([lat, lng]);
  map.setView([lat, lng], 16);
});
