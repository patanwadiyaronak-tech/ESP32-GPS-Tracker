import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAmNTvAyRLbIO4pFW8PGklhRAMIBSgOdIw",
  authDomain: "esp32-gps-tracker-964a4.firebaseapp.com",
  databaseURL: "https://esp32-gps-tracker-964a4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "esp32-gps-tracker-964a4",
  storageBucket: "esp32-gps-tracker-964a4.firebasestorage.app",
  messagingSenderId: "2462153686",
  appId: "1:2462153686:web:6bf752eedac5fca23c0277"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
