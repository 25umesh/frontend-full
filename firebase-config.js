// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signInWithPopup, 
    GoogleAuthProvider, 
    GithubAuthProvider, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGhRnf2-GZDl_Wrt3k2P9DguDaFmq9-0A",
    authDomain: "fixforge-a614b.firebaseapp.com",
    projectId: "fixforge-a614b",
    storageBucket: "fixforge-a614b.appspot.com",
    messagingSenderId: "523752653048",
    appId: "1:523752653048:web:cfa626d94ee0054e98fb0d",
    measurementId: "G-TLYD2QYPQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged };