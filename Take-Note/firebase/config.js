// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUOPiQHyxJuW6zsUQIHoHtmU-PrSvEUiQ",
  authDomain: "takenote-dbea0.firebaseapp.com",
  projectId: "takenote-dbea0",
  storageBucket: "takenote-dbea0.appspot.com",
  messagingSenderId: "719818880756",
  appId: "1:719818880756:web:06425dbd0a3e4a173d10a1",
  measurementId: "G-G2D4V3999X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);

export default firebaseAuth;