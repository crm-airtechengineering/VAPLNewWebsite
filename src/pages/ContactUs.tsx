import React, { useState, useEffect } from 'react';
import { Card, Button } from "../components/ui";
import { Mail, Phone, MapPin, Send, Loader2, Paperclip } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [resume, setResume] = useState<File | null>(null);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  // UX Improvement: Pre-wake the Render server when the component mounts
  useEffect(() => {
    fetch('https://vaplbackend.onrender.com/api/health')
      .then(() => console.log("Backend is awake"))
      .catch(() => console.log("Backend is warming up..."));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) { // 5MB limit check
        setStatus('❌ File is too large (Max 5MB)');
        return;
      }
      setResume(file);
      setStatus(''); // Clear error if file is valid
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('Sending... (Render server may take 30s to wake up)');

    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('position', formData.subject);
    data.append('message', formData.message);
    if (resume) {
      data.append('resume', resume);
    }

    try {
      const response = await fetch('https://vaplbackend.onrender.com/api/apply', {
        method: 'POST',
        // Note: Don't set Content-Type header manually when sending FormData
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('✅ Message sent successfully!');
        setFormData({ fullName: '', email: '', subject: '', message: '' });
        setResume(null);
      } else {
        setStatus(`❌ Error: ${result.message || 'Failed to send'}`);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus('❌ Connection Error: Is the backend running? Check your console.');
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
          {/* Info Side */}
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

          {/* Form Side */}
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
                  <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="text-sm cursor-pointer" />
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