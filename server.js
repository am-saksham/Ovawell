const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // Middleware to parse JSON requests
const mongoose = require('mongoose'); // MongoDB library
const { v4: uuidv4 } = require('uuid'); // UUID library
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Serve static files
app.use(express.static(__dirname));

// Serve index.html when accessing the root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pcodTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Define a schema for the profile data with default values
const profileSchema = new mongoose.Schema({
  userId: { type: String, default: () => uuidv4() }, // Automatically generate UUID
  name: { type: String, default: "Unknown" }, // Default name
  email: { type: String, default: "unknown@example.com" }, // Default email
  cycleRegularity: { type: String, default: "Irregular" }, // Default cycle regularity
  menstrualCycleLength: { type: String, default: "28 Days" }, // Default cycle length
  symptomsTracked: { type: [String], default: [] }, // Default empty array for symptoms
  lastPeriodDate: { type: Date, default: Date.now }, // Default to current date
  nextExpectedPeriod: { type: Date, default: () => new Date(Date.now() + 28 * 24 * 60 * 60 * 1000) }, // Default to 28 days from now
  consultationStatus: { type: String, default: "Not Scheduled" }, // Default consultation status
  dailyWaterIntake: { type: String, default: "2 Liters" }, // Default water intake
  physicalActivity: { type: [String], default: [] }, // Default empty array for physical activities
  healthNotes: { type: String, default: "No notes available" }, // Default health notes
});

// Create a model for the profile data
const Profile = mongoose.model('Profile', profileSchema);

// API endpoint to save user data
app.post('/save-user', async (req, res) => {
  const userData = req.body;

  try {
    // Check if the user already exists
    let profile = await Profile.findOne({ userId: userData.userId });

    if (profile) {
      // Update existing profile
      profile = await Profile.findOneAndUpdate({ userId: userData.userId }, userData, { new: true });
    } else {
      // Create a new profile with default values for missing fields
      profile = new Profile(userData);
      await profile.save();
    }

    res.status(200).json({ message: 'User data saved successfully', profile });
  } catch (error) {
    console.error('Error saving user data:', error);
    res.status(500).json({ message: 'Error saving user data' });
  }
});

app.get('/get-profile/:email', async (req, res) => {
  const email = req.params.email;

  try {
    // Find the profile by userId
    const profile = await Profile.findOne({ email });

    if (profile) {
      res.status(200).json({ message: 'Profile retrieved successfully', profile });
    } else {
      res.status(404).json({ message: 'Profile not found' });
    }
  } catch (error) {
    console.error('Error retrieving profile:', error);
    res.status(500).json({ message: 'Error retrieving profile' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});