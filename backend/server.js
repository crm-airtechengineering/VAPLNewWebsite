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

// 4. Final Optimized Email Setup
// Added debug: true and logger: true to help identify the exact timeout point
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Must be false for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false, // Essential for cloud hosting environments
    minVersion: 'TLSv1.2'
  },
  debug: true,   // Show SMTP traffic in logs
  logger: true,  // Log information to console
  connectionTimeout: 40000, // 40 seconds
  greetingTimeout: 30000,   // 30 seconds
  socketTimeout: 60000      // 60 seconds
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

      // Save to MongoDB First (This is working)
      const newApp = new Application({ 
        fullName, email, position, message,
        resumeName: file ? file.originalname : 'No CV'
      });
      await newApp.save();
      console.log("💾 Application saved to Database");

      // Attempt Email Sending
      try {
        // We do not 'await' this if we want the user response to be instant,
        // but here we await to confirm success/fail in logs.
        await transporter.sendMail({
          from: `"VAPL Web Portal" <${process.env.EMAIL_USER}>`,
          to: 'crm@vakhariaairtech.com',
          replyTo: email,
          subject: `New Application: ${fullName}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; border: 1px solid #eee;">
              <h2 style="color: #1d4ed8;">New Career Application</h2>
              <p><strong>Name:</strong> ${fullName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Position:</strong> ${position}</p>
              <p><strong>Message:</strong></p>
              <div style="background: #f9fafb; padding: 15px; border-radius: 5px;">${message}</div>
              <br />
              <p style="font-size: 12px; color: #9ca3af;">Sent from Vakharia Airtech Website</p>
            </div>
          `,
          attachments: file ? [{ filename: file.originalname, content: file.buffer }] : []
        });
        console.log("📧 Email sent successfully");
      } catch (emailErr) {
        console.error("❌ Nodemailer Error Detail:", emailErr.message);
      }

      // Return success because data is already in DB
      res.status(200).json({ success: true, message: "Application received!" });
    } catch (error) {
      console.error("❌ Route Error:", error);
      res.status(500).json({ success: false, message: "Internal Server Error", details: error.message });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`🚀 Server running on port ${PORT}`));