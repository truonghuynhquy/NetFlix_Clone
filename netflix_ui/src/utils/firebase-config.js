// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAH7bjfAnTa1SvVEPzkYfWBj7RietifhJo",
    authDomain: "react-netflix-clone-7f713.firebaseapp.com",
    projectId: "react-netflix-clone-7f713",
    storageBucket: "react-netflix-clone-7f713.appspot.com",
    messagingSenderId: "484645829860",
    appId: "1:484645829860:web:d91351fd217f7e30e540f1",
    measurementId: "G-7TYGZHLYJJ",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
