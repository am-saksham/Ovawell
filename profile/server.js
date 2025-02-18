const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 5000;

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB3CJSzUaUNwoxm9Ho8LjdH2BBjrp2D8jY",
  authDomain: "pcod-hackathon.firebaseapp.com",
  projectId: "pcod-hackathon",
  storageBucket: "pcod-hackathon.firebasestorage.app",
  messagingSenderId: "366998464817",
  appId: "1:366998464817:web:e131678b08cf138892a810"
};

// Initialize Firebase
const firebase = require("firebase/app");
require("firebase/auth");

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();  // Get Firebase Auth instance


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MongoDB Connection
mongoose.connect("mongodb+srv://pcodTracker:asdFGH123%21%40%23@cluster0.7adyo.mongodb.net/pcodTracker?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected successfully");
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
});


const userSchema = new mongoose.Schema({
  _id: String, // User UID
  email: String,
  profilePhoto: String,
  menstrualCycleLength: Number,  // Add this line
  symptomsTracked: [String],     // Add this line
});

const User = mongoose.model("User", userSchema);

// Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${req.params.uid}-${file.originalname}`);
  },
});

// Backend: save profile photo locally (server)
const upload = multer({ storage });

app.post("/update-profile", upload.single("profilePhoto"), async (req, res) => {
  const { email, menstrualCycleLength, symptomsTracked } = req.body;
  const profilePhoto = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    const user = await User.findOne({ email });

    if (user) {
      // Update existing user
      user.menstrualCycleLength = menstrualCycleLength;
      user.symptomsTracked = symptomsTracked.split(',').map(item => item.trim());
      user.profilePhoto = profilePhoto || user.profilePhoto;
    } else {
      // Create new user if not found
      const newUser = new User({ email, menstrualCycleLength, symptomsTracked, profilePhoto });
      await newUser.save();
    }

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to update profile" });
  }
});


// Get user profile
app.get("/api/users/:uid", async (req, res) => {
  const { uid } = req.params;
  try {
    const user = await User.findById(uid);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user profile" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// Add Save button functionality
document.getElementById("save-profile-btn").addEventListener("click", () => {
  // Get updated values from the inputs
  const updatedCycleLength = document.getElementById("menstrual-cycle-input").value;
  const updatedSymptoms = document.getElementById("symptoms-input").value;

  // Update the UI with the new values
  document.getElementById("menstrual-cycle-length").textContent = updatedCycleLength;
  document.getElementById("symptoms-tracked").textContent = updatedSymptoms;

  // Get current user email (Firebase)
  const auth = getAuth();
  const user = auth.currentUser;
  const email = user.email;

  // Prepare data to be sent to the backend (MongoDB update)
  const updatedProfileData = {
      email: email,
      menstrualCycleLength: updatedCycleLength,
      symptomsTracked: updatedSymptoms.split(',').map(item => item.trim()) // Assuming symptoms are separated by commas
  };

  // Handle the profile photo upload
  const profilePhotoInput = document.getElementById("profile-photo-input");
  const profilePhotoFile = profilePhotoInput.files[0];

  if (profilePhotoFile) {
    const formData = new FormData();
    formData.append("profilePhoto", profilePhotoFile);
    formData.append("email", email);
    formData.append("menstrualCycleLength", updatedCycleLength);
    formData.append("symptomsTracked", updatedSymptoms.split(',').map(item => item.trim()).join(','));
    
    fetch('/update-profile', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Profile updated successfully!');
      } else {
        alert('Error updating profile');
      }
    })
    .catch(error => {
      console.error("Error saving profile:", error);
      alert('There was an error updating the profile');
    });
    
  } else {
      // If no photo was selected, just update the text data
      fetch('/update-profile', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedProfileData)
      })
      .then((response) => response.json())
      .then((data) => {
          if (data.success) {
              alert('Profile updated successfully!');
          } else {
              alert('Error updating profile');
          }
      })
      .catch((error) => {
          console.error("Error saving profile:", error);
          alert('There was an error updating the profile');
      });
  }
});

// To enable profile editing
document.getElementById("edit-profile-btn").addEventListener("click", () => {
  // Toggle visibility of inputs and text for editing
  document.getElementById("menstrual-cycle-length").style.display = "none";
  document.getElementById("menstrual-cycle-input").style.display = "inline";
  
  document.getElementById("symptoms-tracked").style.display = "none";
  document.getElementById("symptoms-input").style.display = "inline";

  // Allow the profile photo to be edited
  document.getElementById("profile-photo-input").style.display = "inline";
});