const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://users:asdFGH123%21%40%23@cluster0.7adyo.mongodb.net/pcodTrackerDB?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const profileSchema = new mongoose.Schema({
  userId: { type: String, default: () => uuidv4() },
  name: { type: String, default: "Unknown" },
  email: { type: String, default: "unknown@example.com" },
  cycleRegularity: { type: String, default: "Irregular" },
  menstrualCycleLength: { type: String, default: "28 Days" },
  symptomsTracked: { type: [String], default: [] },
  lastPeriodDate: { type: Date, default: Date.now },
  nextExpectedPeriod: { type: Date, default: () => new Date(Date.now() + 28 * 24 * 60 * 60 * 1000) },
  consultationStatus: { type: String, default: "Not Scheduled" },
  dailyWaterIntake: { type: String, default: "2 Liters" },
  physicalActivity: { type: [String], default: [] },
  healthNotes: { type: String, default: "No notes available" },
});

const Profile = mongoose.model('Profile', profileSchema);

app.post('/save-user', async (req, res) => {
  const userData = req.body;

  try {
    let profile = await Profile.findOne({ userId: userData.userId });

    if (profile) {
      profile = await Profile.findOneAndUpdate({ userId: userData.userId }, userData, { new: true });
    } else {
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

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});