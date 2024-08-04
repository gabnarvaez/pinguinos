// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIRLSEVOBlieZJCa5twRsXVB2gHeabLSA",
  authDomain: "pinguinos-1979e.firebaseapp.com",
  projectId: "pinguinos-1979e",
  storageBucket: "pinguinos-1979e.appspot.com",
  messagingSenderId: "692893645080",
  appId: "1:692893645080:web:910486086b8f4ee59b466d",
  measurementId: "G-XTN8DTLKGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);