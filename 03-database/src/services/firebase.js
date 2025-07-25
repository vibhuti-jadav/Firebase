// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBePYKBo9dCUhB2SabxOdKPPl6VZZUWPOA",
  authDomain: "demoauth-16f49.firebaseapp.com",
  projectId: "demoauth-16f49",
  storageBucket: "demoauth-16f49.firebasestorage.app",
  messagingSenderId: "644945079898",
  appId: "1:644945079898:web:2e245b02021a5806793263",
  measurementId: "G-DP5WVZ0P6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const auth = getAuth(app);