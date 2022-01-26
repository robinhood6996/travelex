// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_ZCSTh2woXGESKCX4KMAhdF9wMjhMiig",
    authDomain: "travelex-e9e81.firebaseapp.com",
    projectId: "travelex-e9e81",
    storageBucket: "travelex-e9e81.appspot.com",
    messagingSenderId: "213781237637",
    appId: "1:213781237637:web:783a444e97ccf4b362feec",
    measurementId: "G-YE4XXFD248"
};

// Initialize Firebase
const initializeFirebase = () => {
    initializeApp(firebaseConfig)
};

export default initializeFirebase;