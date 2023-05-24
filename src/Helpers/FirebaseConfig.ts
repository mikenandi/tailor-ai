import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBTeQDLQ1woPSdVQxLI33YWCrcRTv2TaS8",
    authDomain: "rentalfeed-9e397.firebaseapp.com",
    projectId: "rentalfeed-9e397",
    storageBucket: "rentalfeed-9e397.appspot.com",
    messagingSenderId: "785709387681",
    appId: "1:785709387681:web:3a7d842818b1502c8645e0",
    measurementId: "G-SGHZ8P3N9D",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
