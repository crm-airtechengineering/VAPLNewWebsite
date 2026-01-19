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

// 1. Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: "Server is awake" });
});

// 2. Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Success: Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err.message));

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

// 4. Enhanced Email Setup (Fixes Timeout)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // Use SSL for Port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // Use 16-character App Password (no spaces)
  },
  connectionTimeout: 10000, // Wait 10 seconds for connection
  greetingTimeout: 5000,
  socketTimeout: 15000
});

// 5. Submit Route
app.post('/api/apply', (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error("❌ Multer Error:", err);
      return res.status(400).json({ success: false, message: "File upload error or file too large" });
    }

    try {
      const { fullName, email, position, message } = req.body;
      const file = req.file;

      // Save to MongoDB
      const newApp = new Application({ 
        fullName, email, position, message,
        resumeName: file ? file.originalname : 'No CV'
      });
      await newApp.save();
      console.log("💾 Application saved to Database");

      // Send Email
      try {
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: 'crm@vakhariaairtech.com',
          replyTo: email, // Allows you to click 'Reply' in Gmail to reach the applicant
          subject: `New Application: ${fullName}`,
          html: `
            <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
              <h2 style="color: #2563eb;">New Job Application Received</h2>
              <hr />
              <p><strong>Name:</strong> ${fullName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Position Applied For:</strong> ${position}</p>
              <p><strong>Message:</strong><br />${message}</p>
              <hr />
              <p style="font-size: 0.8em; color: #666;">This application was sent via the Vakharia Airtech website portal.</p>
            </div>
          `,
          attachments: file ? [{ filename: file.originalname, content: file.buffer }] : []
        });
        console.log("📧 Email sent successfully");
      } catch (emailErr) {
        // Log the exact error for debugging but don't stop the success response
        console.error("❌ Nodemailer Error Detail:", emailErr.message);
      }

      res.status(200).json({ success: true, message: "Sent successfully!" });
    } catch (error) {
      console.error("❌ Route Error:", error);
      res.status(500).json({ success: false, message: "Internal Server Error", details: error.message });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`🚀 Server running on port ${PORT}`));