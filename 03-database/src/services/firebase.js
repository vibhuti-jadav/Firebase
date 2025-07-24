// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD87pFBTmKbwUr6ecENusgX_nM9AV9bd68",
  authDomain: "demoauth-8a929.firebaseapp.com",
  projectId: "demoauth-8a929",
  storageBucket: "demoauth-8a929.firebasestorage.app",
  messagingSenderId: "35170754794",
  appId: "1:35170754794:web:377447974eec730c647793",
  measurementId: "G-V7115DVY32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
