// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzWHHgSJmcPqDlDDLbovU4YQKmriukvHE",
  authDomain: "ecommerce-kaleem-e0718.firebaseapp.com",
  projectId: "ecommerce-kaleem-e0718",
  storageBucket: "ecommerce-kaleem-e0718.firebasestorage.app",
  messagingSenderId: "316646613978",
  appId: "1:316646613978:web:e8943cfdd50ddaa58f96e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
