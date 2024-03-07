// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "wadmini-a7ac0.firebaseapp.com",
  projectId: "wadmini-a7ac0",
  storageBucket: "wadmini-a7ac0.appspot.com",
  messagingSenderId: "592662601782",
  appId: "1:592662601782:web:bee331bf3b4349dc8a7897",
  measurementId: "G-MDMHZHML37"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);