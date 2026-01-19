import React, { useState, useEffect, useRef } from 'react';
import { Card, Button } from "../components/ui";
import { Mail, Phone, MapPin, Send, Loader2, Paperclip } from 'lucide-react';

interface BackendResponse {
  success: boolean;
  message: string;
}

export function Contact() {
  const API_BASE_URL = (import.meta.env.VITE_API_URL as string) || "http://localhost:5000";

  const [formData, setFormData] = useState({ fullName: '', email: '', subject: '', message: '' });
  const [resume, setResume] = useState<File | null>(null);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/health`)
      .then(() => console.log("🚀 Backend is awake and ready"))
      .catch(() => console.log("⏳ Backend is warming up..."));
  }, [API_BASE_URL]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (status) setStatus('');
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
    setStatus('Sending...');

    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('position', formData.subject); // Matches backend 'position'
    data.append('message', formData.message);
    if (resume) data.append('resume', resume); // Matches backend upload.single('resume')

    try {
      const response = await fetch(`${API_BASE_URL}/api/apply`, { method: 'POST', body: data });
      const result: BackendResponse = await response.json();

      if (response.ok) {
        setStatus('✅ Application sent successfully!');
        setFormData({ fullName: '', email: '', subject: '', message: '' });
        setResume(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
      } else {
        setStatus(`❌ Error: ${result.message}`);
      }
    } catch (error) {
      setStatus('❌ Connection Error. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16"><h2 className="text-4xl font-bold">Get In Touch</h2></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
             <h3 className="text-2xl font-bold">Contact Information</h3>
             <div className="flex items-center gap-4"><Mail className="text-blue-600"/><p>crm@vakhariaairtech.com</p></div>
             <div className="flex items-center gap-4"><Phone className="text-blue-600"/><p>+91 9049002037</p></div>
             <div className="flex items-start gap-4"><MapPin className="text-blue-600"/><p>Vakharia Airtech Pvt. Ltd., Pune</p></div>
          </div>
          <Card className="p-8 bg-white border-none shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="fullName" autoComplete="name" aria-label="Full Name" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required className="w-full p-3 border rounded-md outline-none" />
              <input type="email" name="email" autoComplete="email" aria-label="Email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded-md outline-none" />
              <input type="text" name="subject" placeholder="Subject / Position" aria-label="Position" value={formData.subject} onChange={handleChange} required className="w-full p-3 border rounded-md outline-none" />
              <textarea name="message" placeholder="Message" aria-label="Message" value={formData.message} onChange={handleChange} rows={4} required className="w-full p-3 border rounded-md outline-none" />
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Attach Resume (Optional)</label>
                <div className="flex items-center gap-2 border p-3 rounded-md border-dashed">
                  <Paperclip className="w-4 h-4 text-gray-400" />
                  <input type="file" ref={fileInputRef} accept=".pdf,.doc,.docx" onChange={handleFileChange} className="text-sm" />
                </div>
              </div>
              <Button type="submit" disabled={loading} className={`w-full py-6 text-white font-bold rounded-md ${loading ? 'bg-gray-400' : 'bg-blue-600'}`}>
                {loading ? <Loader2 className="animate-spin" /> : <Send size={18} />} {loading ? 'Sending...' : 'Send Message'}
              </Button>
              {status && <div className={`text-center mt-4 p-3 rounded-md text-sm font-semibold ${status.includes('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>{status}</div>}
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}