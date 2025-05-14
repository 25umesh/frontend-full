// Import Firebase functions
import { auth, db, provider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, doc, setDoc } from "./firebase-config.js";

// Register User
window.register = function () {
    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    if (!username || !email || !password) {
        alert("Please fill all fields!");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            return setDoc(doc(db, "users", userCredential.user.uid), {
                username: username,
                email: email
            });
        })
        .then(() => {
            alert("Registration Successful!");
            window.location.href = "index.html"; // Redirect to login
        })
        .catch((error) => alert(error.message));
};

// Login User
window.login = function () {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (!email || !password) {
        alert("Please enter both email and password!");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login Successful!");
            window.location.href = "dashboard.html"; // Redirect to dashboard
        })
        .catch((error) => alert(error.message));
};

// Google Login
window.googleLogin = function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            alert("Google Login Successful!");
            window.location.href = "dashboard.html";
        })
        .catch((error) => alert(error.message));
};
