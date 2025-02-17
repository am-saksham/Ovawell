// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3CJSzUaUNwoxm9Ho8LjdH2BBjrp2D8jY",
  authDomain: "pcod-hackathon.firebaseapp.com",
  projectId: "pcod-hackathon",
  storageBucket: "pcod-hackathon.firebasestorage.app",
  messagingSenderId: "366998464817",
  appId: "1:366998464817:web:e131678b08cf138892a810"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM Elements
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

// Switch between Sign In and Sign Up forms
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Sign Up with Email/Password
const signUpForm = document.querySelector(".sign-up-form");
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signUpForm.querySelector('input[type="email"]').value;
  const password = signUpForm.querySelector('input[type="password"]').value;
  const name = signUpForm.querySelector('input[type="text"]').value; // Get name from the form

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up successfully
      const user = userCredential.user;

      // Save user data to MongoDB
      saveUserToMongoDB(user.uid, email, name);

      alert("Signed up successfully!");
      window.location.href = "../../index.html"; // Redirect to homepage
    })
    .catch((error) => {
      alert(error.message); // Handle errors
    });
});

// Google Sign-In
const googleSignInButtons = document.querySelectorAll(".google-sign-in-btn");
googleSignInButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Signed in with Google
        const user = result.user;

        // Save user data to MongoDB
        saveUserToMongoDB(user.uid, user.email, user.displayName || "Unknown");

        alert("Signed in with Google!");
        window.location.href = "../../index.html"; // Redirect to homepage
      })
      .catch((error) => {
        alert(error.message); // Handle errors
      });
  });
});

// Function to save user data to MongoDB
function saveUserToMongoDB(userId, email, name) {
  const userData = {
    userId,
    email,
    name,
  };

  fetch("/save-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("User data saved to MongoDB:", data);
    })
    .catch((error) => {
      console.error("Error saving user data to MongoDB:", error);
    });
}

// Check if user is already logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, redirect to homepage
    window.location.href = "../../index.html";
  }
});