// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzjuaKES9P2v4vBnAOH0i2ezKekwP6Goo",
  authDomain: "task-managment-5e586.firebaseapp.com",
  projectId: "task-managment-5e586",
  storageBucket: "task-managment-5e586.appspot.com",
  messagingSenderId: "473327407392",
  appId: "1:473327407392:web:4f2316a47340081da20745",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
