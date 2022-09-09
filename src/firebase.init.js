// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2xCU4ycY-uzmaAszybyuZ99la5TZGeMM",
  authDomain: "perts-store.firebaseapp.com",
  projectId: "perts-store",
  storageBucket: "perts-store.appspot.com",
  messagingSenderId: "483339733988",
  appId: "1:483339733988:web:692b3e0b38a0f3f93f55f1",
  measurementId: "G-WS34K0E7FD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;