// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKP_tmiQ-8DewL9S7y34eHnudTDJPuBT0",
    authDomain: "bedentis-2e27f.firebaseapp.com",
    projectId: "bedentis-2e27f",
    storageBucket: "bedentis-2e27f.appspot.com",
    messagingSenderId: "1078398783591",
    appId: "1:1078398783591:web:dc7ada7038439a5feac4c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;