import { auth, db, createUserWithEmailAndPassword, setDoc, doc } from "./firebase-config.js";

// Register Button Event
document.getElementById("register-btn").addEventListener("click", function() {
    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            await setDoc(doc(db, "users", user.uid), { username, email });

            alert("Registration Successful");
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});
