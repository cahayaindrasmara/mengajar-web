// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIcjv_mZ2jaeGZbPjGz02Dt08QJrQBs_A",
    authDomain: "mengajar-8e4e0.firebaseapp.com",
    projectId: "mengajar-8e4e0",
    storageBucket: "mengajar-8e4e0.firebasestorage.app",
    messagingSenderId: "776735377027",
    appId: "1:776735377027:web:df840c8f977bbce0b13db6",
    measurementId: "G-L2ERQX6HYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const auth = getAuth(app)
export const db = getFirestore(app);

export default firebaseConfig;