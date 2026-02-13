// Firebase Import
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1h3IIRC9la-kXyYnVEfwxzzoyBIL70Js",
  authDomain: "my-website-a0545.firebaseapp.com",
  projectId: "my-website-a0545",
  storageBucket: "my-website-a0545.firebasestorage.app",
  messagingSenderId: "103602694974",
  appId: "1:103602694974:web:12f890844e6ad6a513da6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up Function
window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signup Successful 🎉");
      window.location.href = "home.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};

// Login Function
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login Successful 🔥");
      window.location.href = "home.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};
