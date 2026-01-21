import React, { useState, useEffect } from 'react';
import { Card, Button } from "../components/ui";
import { Mail, Phone, MapPin, Send, Loader2, ChevronDown } from 'lucide-react';

interface BackendResponse {
  success: boolean;
  message: string;
}

export function Contact() {
  const API_BASE_URL = (import.meta.env.VITE_API_URL as string) || "http://localhost:5000";

  const [formData, setFormData] = useState({ 
    fullName: '', 
    email: '', 
    contactno: '', 
    message: '',
    solution: '' 
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/health`)
      .then(() => console.log("🚀 Backend is awake"))
      .catch(() => console.log("⏳ Backend is warming up..."));
  }, [API_BASE_URL]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (status) setStatus('');
    
    const { name, value } = e.target;

    // Strict Numeric Validation for Contact No
    if (name === 'contactno') {
      const onlyNums = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({ ...prev, [name]: onlyNums }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setLoading(true);
    setStatus('Sending...');

    try {
      // Since we removed the file, we can send a simple JSON instead of FormData
      const response = await fetch(`${API_BASE_URL}/api/apply`, { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          contact: formData.contactno,
          solution: formData.solution,
          message: formData.message
        })
      });
      
      const result: BackendResponse = await response.json();

      if (response.ok) {
        setStatus('✅ Message sent successfully!');
        setFormData({ fullName: '', email: '', contactno: '', message: '', solution: '' });
      } else {
        setStatus(`❌ Error: ${result.message}`);
      }
    } catch (error) {
      setStatus('❌ Connection Error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16"><h2 className="text-4xl font-bold">Get In Touch</h2></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-[#f8be4c] shrink-0" />
              <a href="mailto:crm@vakhariaairtech.com" className="hover:text-[#f8be4c] transition-colors">crm@vakhariaairtech.com</a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-[#f8be4c] shrink-0" />
              <a href="tel:+919049002037" className="hover:text-[#f8be4c] transition-colors">+91 9049002037</a>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-[#f8be4c] shrink-0 mt-1" />
              <p>Vakharia Airtech Pvt. Ltd., Pune</p>
            </div>
          </div>

          {/* Right Side: Form */}
          <Card className="p-8 bg-white border-none shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <input 
                type="text" name="fullName" placeholder="Full Name *" 
                value={formData.fullName} onChange={handleChange} 
                required className="w-full p-3 border rounded-md outline-none focus:border-[#f8be4c]" 
              />

              <input 
                type="email" name="email" placeholder="Email Address" 
                value={formData.email} onChange={handleChange} 
                className="w-full p-3 border rounded-md outline-none focus:border-[#f8be4c]" 
              />

              <input 
                type="text" name="contactno" placeholder="Contact No (Numbers Only) *" 
                value={formData.contactno} onChange={handleChange} 
                required className="w-full p-3 border rounded-md outline-none focus:border-[#f8be4c]" 
              />

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Solution Required</label>
                <div className="relative">
                  <select 
                    name="solution" 
                    value={formData.solution} 
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md outline-none appearance-none bg-white focus:border-[#f8be4c]"
                  >
                    <option value="">Select a Solution</option>
                    <option value="air-pollution">Air Pollution Control</option>
                    <option value="industrial-fans">Industrial Fans</option>
                    <option value="pneumatic-conveying">Pneumatic Conveying</option>
                    <option value="dust-collection">Dust Collection Systems</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <textarea 
                name="message" placeholder="Your Message" 
                value={formData.message} onChange={handleChange} 
                rows={4} required className="w-full p-3 border rounded-md outline-none focus:border-[#f8be4c]" 
              />

              <Button 
                type="submit" 
                disabled={loading} 
                className={`w-full py-6 text-white font-bold rounded-md transition-all ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700 shadow-md'}`}
              >
                {loading ? <Loader2 className="animate-spin" /> : <Send size={18} className="mr-2" />} 
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