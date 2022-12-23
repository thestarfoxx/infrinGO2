// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB650SwgiFvHrA0kSDeVU0l8zDiWAXofxU",
  authDomain: "infringo-368718.firebaseapp.com",
  databaseURL: "https://infringo-368718-default-rtdb.firebaseio.com",
  projectId: "infringo-368718",
  storageBucket: "infringo-368718.appspot.com",
  messagingSenderId: "1002057151036",
  appId: "1:1002057151036:web:f79d2bf6ea0a8ee1814939",
  measurementId: "G-WVNP26SG4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();
export default db;