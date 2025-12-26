const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer'); // Added Multer
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 1. Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Success: Connected to MongoDB"))
  .catch(err => console.log("❌ MongoDB Error:", err.message));

// 2. Data Schema (Updated to include resume info)
const applicationSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  position: String,
  message: String,
  resumeName: String, // Store the filename in DB
  date: { type: Date, default: Date.now }
});
const Application = mongoose.model('Application', applicationSchema);

// 3. Multer Config (Memory Storage for easy emailing)
const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB Limit
});

// 4. Email Config
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// 5. Updated Route
// 'resume' must match the key name in your React FormData
app.post('/api/apply', upload.single('resume'), async (req, res) => {
  try {
    // With Multer, text fields are in req.body, file is in req.file
    const { fullName, email, position, message } = req.body;
    const file = req.file;

    if (!fullName || !email) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }

    // Save to Database
    const newApp = new Application({ 
      fullName, 
      email, 
      position, 
      message,
      resumeName: file ? file.originalname : 'No CV attached'
    });
    await newApp.save();

    // Prepare Email Content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'crm@vakhariaairtech.com',
      subject: `New Application: ${fullName} for ${position}`,
      html: `
        <h3>New Job Application Received</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>CV Attached:</strong> ${file ? 'Yes' : 'No'}</p>
      `,
      // Attach the file if it exists
      attachments: file ? [
        {
          filename: file.originalname,
          content: file.buffer // Sending the file directly from memory
        }
      ] : []
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Backend Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));