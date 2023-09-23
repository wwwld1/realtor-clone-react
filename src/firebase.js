// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8DhyvmfevZFTD-moFiZZhkWvJuRrB7dg",
  authDomain: "react-realtor-a24e2.firebaseapp.com",
  projectId: "react-realtor-a24e2",
  storageBucket: "react-realtor-a24e2.appspot.com",
  messagingSenderId: "181728461990",
  appId: "1:181728461990:web:013971515c0cb306cee067"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()