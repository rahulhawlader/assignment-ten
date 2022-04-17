// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from '/firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_2t8Bzl29BSaduzhTKG4gat8BNCjLMlA",
    authDomain: "assignment-ten-bf51b.firebaseapp.com",
    projectId: "assignment-ten-bf51b",
    storageBucket: "assignment-ten-bf51b.appspot.com",
    messagingSenderId: "754651920873",
    appId: "1:754651920873:web:efd130afc20c567de93378"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;