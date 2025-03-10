// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";  // ✅ Correct import for auth
import { getFirestore } from "firebase/firestore";  // ✅ Correct import for Firestore

const firebaseConfig = {
  apiKey: "AIzaSyCc7qErbbQe_eM9hXtSIY9jogGzv-Es9bM",
  authDomain: "treasurehunt2000.firebaseapp.com",
  projectId: "treasurehunt2000",
  storageBucket: "treasurehunt2000.firebasestorage.app",
  messagingSenderId: "652802067810",
  appId: "1:472071776506:web:a9b4fa983af1ab90514143",
  measurementId: "G-MLGXLB5EXX",
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // ✅ Ensure auth is initialized properly
const db = getFirestore(app); // ✅ Ensure Firestore is initialized properly

// 🔹 Export modules correctly
export { app, analytics, auth, db };
