
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'




const firebaseConfig = {
    apiKey: "AIzaSyBYIqdz8hYh8sERQTKzqVr_14CKxqzTC3o",
    authDomain: "miniblog-3b987.firebaseapp.com",
    projectId: "miniblog-3b987",
    storageBucket: "miniblog-3b987.firebasestorage.app",
    messagingSenderId: "222528174170",
    appId: "1:222528174170:web:f91fd0276f11ca783cc063"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const auth = getAuth(app)

export { db, auth };