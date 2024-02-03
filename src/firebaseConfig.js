// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi04bjUku5PaBB-IiXL0UCi27MNfw0gtA",
  authDomain: "laptop-vue.firebaseapp.com",
  projectId: "laptop-vue",
  storageBucket: "laptop-vue.appspot.com",
  messagingSenderId: "97804139586",
  appId: "1:97804139586:web:87d2a12427fa9b3f5a41db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app }