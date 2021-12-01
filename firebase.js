// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-ev-82sq8YYKyKJHR4SnVqu0sH9TNlkw",
  authDomain: "instaclone-81398.firebaseapp.com",
  projectId: "instaclone-81398",
  storageBucket: "instaclone-81398.appspot.com",
  messagingSenderId: "94447268071",
  appId: "1:94447268071:web:365b29baf0e1a783317242"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage };