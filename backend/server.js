const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config();

const app = express();

// 1. Enhanced CORS Configuration
// This allows your Vercel frontend to communicate with your Render backend
app.use(cors({
  origin: 'https://vakhariaairtech.vercel.app',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

// 2. Health Check Route (UX improvement)
// Calling this from React useEffect wakes up the Render server immediately
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: "Server is awake and healthy" });
});

// 3. Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Success: Connected to MongoDB"))
  .catch(err => console.log("❌ MongoDB Error:", err.message));

// 4. Data Schema
const applicationSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  position: String,
  message: String,
  resumeName: String,
  date: { type: Date, default: Date.now }
});
const Application = mongoose.model('Application', applicationSchema);

// 5. Multer Config (5MB Limit)
const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 } 
});

// 6. Email Config
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // Use Google App Password here
  }
});

// 7. Main Application Route
app.post('/api/apply', upload.single('resume'), async (req, res) => {
  try {
    const { fullName, email, position, message } = req.body;
    const file = req.file;

    if (!fullName || !email) {
      return res.status(400).json({ success: false, message: "Required fields are missing." });
    }

    // Save to MongoDB
    const newApp = new Application({ 
      fullName, 
      email, 
      position, 
      message,
      resumeName: file ? file.originalname : 'No CV attached'
    });
    await newApp.save();

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'crm@vakhariaairtech.com',
      subject: `Job Application: ${fullName} - ${position}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New Application Received</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Position:</strong> ${position}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Attachment:</strong> ${file ? file.originalname : 'None'}</p>
        </div>
      `,
      attachments: file ? [{
        filename: file.originalname,
        content: file.buffer
      }] : []
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Application sent successfully!" });

  } catch (error) {
    console.error("Backend Error:", error);
    res.status(500).json({ success: false, message: "Server error occurred.", error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));