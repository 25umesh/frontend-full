import { auth, signInWithEmailAndPassword, sendPasswordResetEmail } from "./firebase-config.js";

// Login Function
document.getElementById("loginBtn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please fill in both fields.");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login successful!");
            window.location.href = "dashboard.html"; // Redirect to dashboard
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});

// Forgot Password Function
document.getElementById("forgotPassword").addEventListener("click", () => {
    const email = prompt("Enter your email for password reset:");
    if (email) {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Password reset email sent!");
            })
            .catch((error) => {
                alert("Error: " + error.message);
            });
    }
});

// VS Code Direct Integration
document.getElementById("vscodeBtn").addEventListener("click", () => {
    window.location.href = "vscode://file/C:/Users/YourUserName/Desktop/fixforge-project";
});
