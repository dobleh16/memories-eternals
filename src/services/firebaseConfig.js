// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import.meta.env.VITE_API_KEY
// Tu configuración personalizada
const firebaseConfig = {
  apiKey: "AIzaSyDZ2hQJT3ubBzLb-3Nhps76vUpYpmy7_7Y",
  authDomain: "memoriesethernals.firebaseapp.com",
  projectId: "memoriesethernals",
  storageBucket: "memoriesethernals.firebasestorage.app",
  messagingSenderId: "651636263430",
  appId: "1:651636263430:web:d3c5342653e3cc2c611187",
  measurementId: "G-XX7EDZ04T6",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exportamos servicios que usaremos
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
