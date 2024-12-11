import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7Tn4PQCtIDe3WP1oBpZYduVpFUozx0BM",
  authDomain: "react-mobile-app-6cb3d.firebaseapp.com",
  projectId: "react-mobile-app-6cb3d",
  storageBucket: "react-mobile-app-6cb3d.firebasestorage.app",
  messagingSenderId: "932871700296",
  appId: "1:932871700296:web:ce94f23f018c1237acbd7d"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app)
export const auth = getAuth(app)
