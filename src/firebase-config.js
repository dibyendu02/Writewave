// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvwG76cGONwrxZre53gRC2aJPXVaBLDXg",
  authDomain: "blog-website-e82d0.firebaseapp.com",
  projectId: "blog-website-e82d0",
  storageBucket: "blog-website-e82d0.appspot.com",
  messagingSenderId: "323858845538",
  appId: "1:323858845538:web:5ae3e9888529095c69263b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);