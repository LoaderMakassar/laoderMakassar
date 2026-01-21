// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // ✅ ganti dari /lite

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCEsj7UBVRJ5FUWfxQlqcsUAqPeP4UL5U0",
  authDomain: "nekoride-cf176.firebaseapp.com",
  projectId: "nekoride-cf176",
  storageBucket: "nekoride-cf176.firebasestorage.app",
  messagingSenderId: "695899911539",
  appId: "1:695899911539:web:e6cab1329a2b8d71fe4106",
  measurementId: "G-Z52Y1Z58ZE"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Optional: Analytics (jalan hanya di browser)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app); // ✅ sekarang benar
export default app;
