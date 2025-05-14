import { 
    auth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    GithubAuthProvider, 
    signInWithPopup 
} from "./firebase-config.js";

// 🔹 User Login with Email & Password
document.getElementById("loginBtn")?.addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please fill in both fields.");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login successful!");
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});

// 🔹 User Registration with Email & Password
document.getElementById("registerBtn")?.addEventListener("click", function () {
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    if (!email || !password) {
        alert("Please fill in both fields.");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Registration successful!");
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});

// 🔹 Google Login/Register
const googleProvider = new GoogleAuthProvider();
document.getElementById("googleLogin")?.addEventListener("click", function () {
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            alert("Google Login Successful!");
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});

document.getElementById("googleRegister")?.addEventListener("click", function () {
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            alert("Google Registration Successful!");
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});

// 🔹 GitHub Login/Register
const githubProvider = new GithubAuthProvider();
document.getElementById("githubLogin")?.addEventListener("click", function () {
    signInWithPopup(auth, githubProvider)
        .then((result) => {
            alert("GitHub Login Successful!");
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});

document.getElementById("githubRegister")?.addEventListener("click", function () {
    signInWithPopup(auth, githubProvider)
        .then((result) => {
            alert("GitHub Registration Successful!");
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});
