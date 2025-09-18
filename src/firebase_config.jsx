import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDLO-NA970nW-QA59pZsDdwoSPlVt5dUlY",
    authDomain: "hds-training-fa4f8.firebaseapp.com",
    projectId: "hds-training-fa4f8",
    storageBucket: "hds-training-fa4f8.firebasestorage.app",
    messagingSenderId: "563609067184",
    appId: "1:563609067184:web:70d4c56ec4901fed0ca575",
    measurementId: "G-HFVR1RN682"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);    