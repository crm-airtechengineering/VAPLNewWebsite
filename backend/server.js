// 1. Initialize environment variables immediately
require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');

const app = express();

// 2. Middleware & CORS
app.use(cors({
  origin: ['https://vakhariaairtech.vercel.app', 'http://localhost:3000'], // Added localhost for testing
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(express.json());

// 3. Health Check Route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: "Server is awake and healthy" });
});

// 4. Database Connection
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error("❌ Critical Error: MONGO_URI is not defined in the .env file!");
  process.exit(1); // Stop the server if DB connection is impossible
}

mongoose.connect(mongoURI)
  .then(() => console.log("✅ Success: Connected to MongoDB"))
  .catch(err => console.log("❌ MongoDB Connection Error:", err.message));

// 5. Data Schema
const applicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  position: String,
  message: String,
  resumeName: String,
  date: { type: Date, default: Date.now }
});
const Application = mongoose.model('Application', applicationSchema);

// 6. Multer Config (5MB Limit)
const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 } 
}).single('resume'); // Changed to handle the error locally in the route

// 7. Email Config
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS 
  }
});

// 8. Main Application Route
app.post('/api/apply', (req, res) => {
  upload(req, res, async (err) => {
    // Check for Multer specific errors (like file size)
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ success: false, message: "File too large. Max limit is 5MB." });
    } else if (err) {
      return res.status(500).json({ success: false, message: "Upload error occurred." });
    }

    try {
      const { fullName, email, position, message } = req.body;
      const file = req.file;

      if (!fullName || !email) {
        return res.status(400).json({ success: false, message: "Full Name and Email are required." });
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
          <div style="font-family: sans-serif; line-height: 1.6; border: 1px solid #eee; padding: 20px;">
            <h2 style="color: #2c3e50;">New Application Received</h2>
            <hr>
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
      res.status(500).json({ success: false, message: "Internal server error.", error: error.message });
    }
  });
});

// 9. Start Server
const PORT = process.env.PORT || 5000; 
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server is officially live on port ${PORT}`);
    console.log(`📡 Use http://localhost:${PORT}/api/health to test connectivity`);
});