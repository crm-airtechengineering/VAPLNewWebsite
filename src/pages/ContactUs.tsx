import React, { useState } from 'react';
import { Card, Button } from "../components/ui";
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  // 1. State to hold form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  // 2. Handle input changes
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Handle Form Submission
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:5000/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          position: formData.subject, // Mapping subject to 'position' for your backend
          message: formData.message
        }),
      });

      if (response.ok) {
        setStatus('✅ Message sent successfully!');
        setFormData({ fullName: '', email: '', subject: '', message: '' });
      } else {
        setStatus('❌ Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('❌ Error connecting to server.');
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>
            
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                <p className="text-gray-600">crm@vakhariaairtech.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                <p className="text-gray-600">+91  9049002037</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                <p className="text-gray-600">
                Vakharia Airtech Pvt. Ltd.<br />
                S. No. 53/6, 'Saffron Avenue',A Building, Showroom No 1 & 2,Off Mumbai-Bangalore Highway,Opp. CNG Pump, Bavdhan, Pune - 411 021 Maharashtra
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Your name"
                  required 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="your@email.com"
                  required 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="How can we help?"
                  required 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  rows={4}
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>

              {/* SPACING FIX: Center the button with px-12 for horizontal space */}
              <div className="flex justify-center pt-4">
                <Button type="submit" className="px-12 py-3 flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </div>

              {status && (
                <p className={`text-center mt-4 font-medium ${status.includes('✅') ? 'text-green-600' : 'text-blue-600'}`}>
                  {status}
                </p>
              )}
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}