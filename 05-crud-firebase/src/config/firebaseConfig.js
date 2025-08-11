// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FB_APIKEY,
  authDomain: import.meta.env.VITE_FB_authDomain,
  projectId: import.meta.env.VITE_FB_projectId,
  storageBucket: import.meta.env.VITE_FB_storageBucket,
  messagingSenderId: import.meta.env.VITE_FB_messagingSenderId,
  appId: import.meta.env.VITE_FB_appId
};

// console.log("apikey",import.meta.env.VITE_FB_APIKEY)
// console.log("apikey",import.meta.env.VITE_FB_authDomain)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)