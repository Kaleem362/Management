// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQuKLnONNOSVVRw1jyMhUgB1nnmBTSuJI",
  authDomain: "ecommerce-kaleem.firebaseapp.com",
  projectId: "ecommerce-kaleem",
  storageBucket: "ecommerce-kaleem.firebasestorage.app",
  messagingSenderId: "943278382223",
  appId: "1:943278382223:web:34be49c8b27cd7e846e4fa",
  measurementId: "G-4V8WHCJLWN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
