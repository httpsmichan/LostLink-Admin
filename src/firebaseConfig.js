// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config (already customized for your project)
const firebaseConfig = {
  apiKey: "AIzaSyA0f0e9v_1XvDxzppLwEUJVwYEAy_MpdjY",
  authDomain: "lostlink-5755a.firebaseapp.com",
  databaseURL: "https://lostlink-5755a-default-rtdb.firebaseio.com",
  projectId: "lostlink-5755a",
  storageBucket: "lostlink-5755a.appspot.com", // Fixed .app to .com
  messagingSenderId: "482436667222",
  appId: "1:482436667222:web:375380a83040e83d1aa8f7",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Init services
const auth = getAuth(app);
const db = getFirestore(app);

// Export services
export { auth, db };
