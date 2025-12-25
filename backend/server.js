const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 1. Database Connection
// We are using the MONGO_URI from the .env file
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Success: Connected to MongoDB as 'vakharia'"))
  .catch(err => {
    console.log("❌ MongoDB Connection Error:");
    console.log(err.message);
  });

// 2. Data Schema
const applicationSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  position: String,
  message: String,
  date: { type: Date, default: Date.now }
});
const Application = mongoose.model('Application', applicationSchema);

// 3. Email Config
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// 4. The Route
app.post('/api/apply', async (req, res) => {
  try {
    const { fullName, email, position, message } = req.body;
    const newApp = new Application({ fullName, email, position, message });
    await newApp.save();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'crm@vakhariaairtech.com',
      subject: `New Application: ${fullName}`,
      html: `<h3>New Job Application</h3>
             <p><strong>Name:</strong> ${fullName}</p>
             <p><strong>Position:</strong> ${position}</p>
             <p><strong>Message:</strong> ${message}</p>`
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));