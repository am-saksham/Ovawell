// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBax_NP18sj_3MHm5ZpGYqPIZ4VrJ5e40k",
  authDomain: "login-form-d3d6d.firebaseapp.com",
  projectId: "login-form-d3d6d",
  storageBucket: "login-form-d3d6d.appspot.com",
  messagingSenderId: "187007259292",
  appId: "1:187007259292:web:8446af8dd21edc489fd359"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

// Function to Show Messages
function showMessage(message, divId) {
  const messageDiv = document.getElementById(divId);
  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  setTimeout(() => {
    messageDiv.style.opacity = 0;
  }, 5000);
}

// 🔹 Sign-Up Function
const signUp = document.getElementById('submitSignUp');
signUp.addEventListener('click', async (event) => {
  event.preventDefault();
  const email = document.getElementById('rEmail').value;
  const password = document.getElementById('rPassword').value;
  const firstName = document.getElementById('fName').value;
  const lastName = document.getElementById('lName').value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store user data in Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: email,
      firstName: firstName,
      lastName: lastName
    });

    showMessage('Account Created Successfully', 'signUpMessage');
    window.location.href = 'homepage.html'; // Redirect after sign-up
  } catch (error) {
    console.error("Firebase Error:", error);
    const errorCode = error.code;
    if (errorCode === 'auth/email-already-in-use') {
      showMessage('Email Address Already Exists', 'signUpMessage');
    } else {
      showMessage('Unable to create User', 'signUpMessage');
    }
  }
});

// 🔹 Sign-In Function
const signIn = document.getElementById('submitSignIn');
signIn.addEventListener('click', async (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    localStorage.setItem('loggedInUserId', user.uid); // Store user info in localStorage
    showMessage('Login Successful', 'signInMessage');
    window.location.href = 'homepage.html'; // Redirect after sign-in
  } catch (error) {
    console.error("Firebase Error:", error);
    const errorCode = error.code;
    if (errorCode === 'auth/invalid-credential' || errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
      showMessage('Incorrect Email or Password', 'signInMessage');
    } else {
      showMessage('Account does not Exist', 'signInMessage');
    }
  }
});

// 🔹 Logout Function
const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', async () => {
  try {
    await signOut(auth); // Sign out the user
    localStorage.removeItem('loggedInUserId'); // Clear session storage

    showMessage('You have successfully logged out', 'signInMessage');
    window.location.href = 'index.html'; // Redirect to login page
  } catch (error) {
    console.error("Firebase Error:", error);
    showMessage('An error occurred while logging out', 'signInMessage');
  }
});
