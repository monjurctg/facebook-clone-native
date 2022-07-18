// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZ2W_NeK94PSS7ofq6v31us7LDs3OMn3M",
    authDomain: "fir-chat-app-566f4.firebaseapp.com",
    projectId: "fir-chat-app-566f4",
    storageBucket: "fir-chat-app-566f4.appspot.com",
    messagingSenderId: "106236576773",
    appId: "1:106236576773:web:5e3d41c757ae4f83c7886c"
};

// Initialize Firebase
export const firebaseInitalApp = initializeApp(firebaseConfig);