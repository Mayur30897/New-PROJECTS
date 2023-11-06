// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFBNN-72EfOJnx6KZTbY7F0qjKaZuyzsY",
  authDomain: "mayur123-c5a03.firebaseapp.com",
  projectId: "mayur123-c5a03",
  storageBucket: "mayur123-c5a03.appspot.com",
  messagingSenderId: "443804109065",
  appId: "1:443804109065:web:cd6f420ea03308873eebd8",
  measurementId: "G-Q79EHW8RRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()
export {app,auth}