require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');

const app = express();

// Middleware
app.use(cors({
  origin: ['https://vakhariaairtech.vercel.app', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(express.json());

// 1. Health Check (Wakes up Render)
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: "Server is awake" });
});

// 2. Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Success: Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB Error:", err.message));

const Application = mongoose.model('Application', new mongoose.Schema({
  fullName: String,
  email: String,
  position: String,
  message: String,
  resumeName: String,
  date: { type: Date, default: Date.now }
}));

// 3. Multer Setup
const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 } 
}).single('resume');

// 4. Email Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS 
  }
});

// 5. Submit Route
app.post('/api/apply', (req, res) => {
  upload(req, res, async (err) => {
    if (err) return res.status(400).json({ success: false, message: "File too large (Max 5MB)" });

    try {
      const { fullName, email, position, message } = req.body;
      const file = req.file;

      const newApp = new Application({ 
        fullName, email, position, message,
        resumeName: file ? file.originalname : 'No CV'
      });
      await newApp.save();

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'crm@vakhariaairtech.com',
        subject: `New Application: ${fullName}`,
        html: `<p><strong>Name:</strong> ${fullName}</p><p><strong>Position:</strong> ${position}</p><p><strong>Message:</strong> ${message}</p>`,
        attachments: file ? [{ filename: file.originalname, content: file.buffer }] : []
      });

      res.status(200).json({ success: true, message: "Sent successfully!" });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`🚀 Server on port ${PORT}`));