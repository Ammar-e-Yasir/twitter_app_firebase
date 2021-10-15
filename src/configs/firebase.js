import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query,where } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDeUSsXA3Mikbc_lDZeYfNf-EgQp-yXVns",
    authDomain: "react-app-firebase1.firebaseapp.com",
    projectId: "react-app-firebase1",
    storageBucket: "react-app-firebase1.appspot.com",
    messagingSenderId: "895555046264",
    appId: "1:895555046264:web:6e14b79d38e16d223c568d",
    measurementId: "G-1C39GZ8DE0"
});

const auth = getAuth();
const db = getFirestore();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,

    db,
    doc,
    setDoc,
    getDoc,
    addDoc,
    collection,
    getDocs,
    query,
    where
};
