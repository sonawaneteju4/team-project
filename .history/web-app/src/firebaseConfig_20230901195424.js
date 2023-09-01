// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {}from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYUYRvw7FHo7mQg1wzvLoOVH6Kh4CfzQc",
  authDomain: "bloodbankums.firebaseapp.com",
  databaseURL: "https://bloodbankums-default-rtdb.firebaseio.com",
  projectId: "bloodbankums",
  storageBucket: "bloodbankums.appspot.com",
  messagingSenderId: "128330346430",
  appId: "1:128330346430:web:d62ff9f4643bc81fd9d3ef",
  measurementId: "G-GFLG6JLME7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
const db = getFirestore()