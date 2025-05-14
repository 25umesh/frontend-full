import { auth, googleProvider, githubProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut } from "./firebase-config.js";

// Login with Email & Password
document.getElementById("loginBtn")?.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (!email || !password) return alert("Please fill in all fields.");

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = "dashboard.html";
        })
        .catch((error) => alert(error.message));
});

// Register with Email & Password
document.getElementById("registerBtn")?.addEventListener("click", () => {
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    if (!email || !password) return alert("Please fill in all fields.");

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = "dashboard.html";
        })
        .catch((error) => alert(error.message));
});

// Google Login
document.getElementById("googleLogin")?.addEventListener("click", () => {
    signInWithPopup(auth, googleProvider)
        .then(() => {
            window.location.href = "dashboard.html";
        })
        .catch((error) => alert(error.message));
});

// Google Register
document.getElementById("googleRegister")?.addEventListener("click", () => {
    signInWithPopup(auth, googleProvider)
        .then(() => {
            window.location.href = "dashboard.html";
        })
        .catch((error) => alert(error.message));
});

// GitHub Login
document.getElementById("githubLogin")?.addEventListener("click", () => {
    signInWithPopup(auth, githubProvider)
        .then(() => {
            window.location.href = "dashboard.html";
        })
        .catch((error) => alert(error.message));
});

// GitHub Register
document.getElementById("githubRegister")?.addEventListener("click", () => {
    signInWithPopup(auth, githubProvider)
        .then(() => {
            window.location.href = "dashboard.html";
        })
        .catch((error) => alert(error.message));
});
