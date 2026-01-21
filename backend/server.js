const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Resend } = require('resend');
const mongoose = require('mongoose');
const multer = require('multer');

// 1. You MUST run config() before creating the Resend instance
dotenv.config(); 

const app = express();
app.use(cors());
app.use(express.json());

// 2. Now initialize Resend - it will now find the key in process.env
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
// app.use(cors({
//   origin: ['https://vakhariaairtech.vercel.app', 'http://localhost:3000'],
//   methods: ['GET', 'POST', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true
// }));
app.use(cors({
  origin: [
    'https://www.vakhariaairtech.com', 
    'https://vakhariaairtech.com', 
    'https://vakhariaairtech.vercel.app', 
    'http://localhost:3000'
  ],
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
  .then(() => console.log("✅ Connected to MongoDB"))
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

// 4. Submit Route
app.post('/api/apply', (req, res) => {
  upload(req, res, async (err) => {
    if (err) return res.status(400).json({ success: false, message: "File too large" });

    try {
      const { fullName, email, position, message } = req.body;
      const file = req.file;

      // Save to MongoDB
      const newApp = new Application({ 
        fullName, email, position, message,
        resumeName: file ? file.originalname : 'No CV'
      });
      await newApp.save();
      console.log("💾 Saved to DB");

      // Send Email via API (Not SMTP)
      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>', // You can verify your domain later to change this
        to: 'crm@vakhariaairtech.com',
        subject: `New Enquiry: ${fullName}`,
        html: `<h3>New Enquiry</h3><p><strong>Name:</strong> ${fullName}</p><p><strong>Position:</strong> ${position}</p><p><strong>Message:</strong> ${message}</p>`,
        attachments: file ? [{ filename: file.originalname, content: file.buffer }] : []
      });

      if (error) {
        console.error("❌ Resend API Error:", error);
      } else {
        console.log("📧 Email sent via API!");
      }

      res.status(200).json({ success: true, message: "Application received!" });
    } catch (error) {
      console.error("❌ Route Error:", error);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`🚀 API Server on port ${PORT}`));