// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBigbv-KFfuK_B3o6YQaQOxjPTifwRnYFk",
  authDomain: "assignment10-authentication.firebaseapp.com",
  projectId: "assignment10-authentication",
  storageBucket: "assignment10-authentication.appspot.com",
  messagingSenderId: "379352179320",
  appId: "1:379352179320:web:f403440f65f7161c99838d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export default auth;