// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtWCWL73Oe8Xp-mVb-7BVjgEBj-orSPxg",
  authDomain: "projectdacs-b1d7e.firebaseapp.com",
  projectId: "projectdacs-b1d7e",
  storageBucket: "projectdacs-b1d7e.firebasestorage.app",
  messagingSenderId: "721877261598",
  appId: "1:721877261598:web:e41d8445de88aaf6153d0f"
};

// Initialize Firebase
const firebaseAcademia = initializeApp(firebaseConfig);
export default firebaseAcademia;