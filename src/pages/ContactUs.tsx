import React, { useState, useEffect, useRef } from 'react';
import { Card, Button } from "../components/ui";
import { Mail, Phone, MapPin, Send, Loader2, Paperclip } from 'lucide-react';

// Define the shape of our backend response for better TS safety
interface BackendResponse {
  success: boolean;
  message: string;
}

export function Contact() {
  // Vite-specific environment variable access
  const API_BASE_URL = (import.meta.env.VITE_API_URL as string) || "http://localhost:5000";

  const [formData, setFormData] = useState({ fullName: '', email: '', subject: '', message: '' });
  const [resume, setResume] = useState<File | null>(null);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Ref to manually clear the file input field after submission
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Pre-wake server on component mount (UX improvement for Render free tier)
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/health`)
      .then(() => console.log("🚀 Backend is awake and ready"))
      .catch(() => console.log("⏳ Backend is warming up..."));
  }, [API_BASE_URL]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (status) setStatus(''); // Clear status when user starts typing
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size > 5 * 1024 * 1024) {
      setStatus('❌ File too large (Max 5MB)');
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }
    setResume(file || null);
    setStatus('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('Sending... (May take 30s if server was asleep)');

    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('position', formData.subject); // Matches backend 'position' field
    data.append('message', formData.message);
    
    if (resume) {
      data.append('resume', resume); // Matches backend upload.single('resume')
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/apply`, { 
        method: 'POST', 
        body: data 
      });

      const result: BackendResponse = await response.json();

      if (response.ok) {
        setStatus('✅ Application sent successfully!');
        // Reset Form
        setFormData({ fullName: '', email: '', subject: '', message: '' });
        setResume(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
      } else {
        setStatus(`❌ Error: ${result.message || 'Failed to send'}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('❌ Connection Error. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-full"><Mail className="text-blue-600"/></div>
              <p className="text-gray-700">crm@vakhariaairtech.com</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-full"><Phone className="text-blue-600"/></div>
              <p className="text-gray-700">+91 9049002037</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-full"><MapPin className="text-blue-600"/></div>
              <p className="text-gray-700">Vakharia Airtech Pvt. Ltd., Bavdhan, Pune</p>
            </div>
          </div>

          {/* Right: The Form */}
          <Card className="p-8 shadow-lg bg-white border-none">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />
              <input type="text" name="subject" placeholder="Subject / Position" value={formData.subject} onChange={handleChange} required className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />
              <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} rows={4} required className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />
              
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Attach Resume (Optional)</label>
                <div className="flex items-center gap-2 border p-3 rounded-md bg-gray-50 border-dashed border-gray-300">
                  <Paperclip className="w-4 h-4 text-gray-400" />
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    accept=".pdf,.doc,.docx" 
                    onChange={handleFileChange} 
                    className="text-sm cursor-pointer" 
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={loading} 
                className={`w-full py-6 flex justify-center items-center gap-2 text-white font-bold rounded-md transition-all ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
              >
                {loading ? <Loader2 className="animate-spin" /> : <Send size={18} />}
                {loading ? 'Sending...' : 'Send Message'}
              </Button>

              {status && (
                <div className={`text-center mt-4 p-3 rounded-md text-sm font-semibold ${status.includes('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {status}
                </div>
              )}
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}