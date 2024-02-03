/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiwiDhGx0iTFifZ__njbCxIoADsmi6UhY",
  authDomain: "reactlab-5741c.firebaseapp.com",
  projectId: "reactlab-5741c",
  storageBucket: "reactlab-5741c.appspot.com",
  messagingSenderId: "850899890651",
  appId: "1:850899890651:web:d1176ebf1d90b61b6db7fe",
  measurementId: "G-TGR76MWNPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);