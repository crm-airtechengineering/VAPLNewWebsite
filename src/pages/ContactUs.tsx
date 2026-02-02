import React, { useState, useEffect } from 'react';
import { Card, Button } from "../components/ui";
import { Mail, Phone, MapPin, Send, Loader2, ChevronDown } from 'lucide-react';

export function Contact() {
  const API_BASE_URL = (import.meta.env.VITE_API_URL as string) || "http://localhost:5000";
  const [formData, setFormData] = useState({ fullName: '', email: '', contactno: '', message: '', solution: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
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
      const response = await fetch(`${API_BASE_URL}/api/apply`, { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, contact: formData.contactno })
      });
      if (response.ok) {
        setStatus('✅ Message sent successfully!');
        setFormData({ fullName: '', email: '', contactno: '', message: '', solution: '' });
      } else {
        setStatus(`❌ Error sending message.`);
      }
    } catch (error) {
      setStatus('❌ Connection Error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SECTION 1: HEADER HERO */}
      <div className="relative h-[350px] bg-[#001f3f] flex items-center justify-center text-white">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-[#f8be4c] uppercase tracking-widest font-semibold">Get in touch with our experts</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-20 -mt-20">
        {/* SECTION 2: CONTACT INFORMATION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card className="p-8 border-none shadow-2xl bg-white flex flex-start gap-6">
            <div className="bg-green-50 p-4 rounded-full h-fit">
              <MapPin className="w-6 h-6 text-[#f8be4c]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#001f3f] mb-3">Head Office</h3>
              <p className="text-gray-600 leading-relaxed">
                Vakharia Airtech Pvt. Ltd.<br />
                S. No. 53/6, 'Saffron Avenue', Bavdhan,<br />
                Pune - 411 021, Maharashtra.
              </p>
            </div>
          </Card>

          <Card className="p-8 border-none shadow-2xl bg-white flex flex-start gap-6">
            <div className="bg-blue-50 p-4 rounded-full h-fit">
              <Phone className="w-6 h-6 text-[#f8be4c]" />
            </div>
            <div className="w-full">
              <h3 className="text-xl font-bold text-[#001f3f] mb-3">Contact Details</h3>
              <div className="space-y-2">
                <a href="tel:+919049999081" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold text-lg">
                   +91 9049999081
                </a>
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-sm font-bold text-[#001f3f]">Email Us:</p>
                  <a href="mailto:airtech@airtechpune.com" className="text-blue-600 hover:underline block">airtech@airtechpune.com</a>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* SECTION 3: FORM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-[#001f3f] mb-6">Partner With Engineering Excellence</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you need industrial HVAC, cleanroom solutions, or specialized air handling systems, our team is ready to assist you. Fill out the form, and we will respond within 24 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                <div className="h-px w-8 bg-[#f8be4c]"></div>
                Our Solutions
              </div>
              <ul className="grid grid-cols-1 gap-2 text-gray-700 font-medium">
                <li>• VRV and Centralized AC</li>
                <li>• Clean and Controlled Rooms</li>
                <li>• Chillers</li>
                <li>• Cold Storage Solutions</li>
                <li>• Fresh Air Systems</li>
                <li>• Lift and Staircase Pressurization</li>
              </ul>
            </div>
          </div>

          <Card className="lg:col-span-3 p-6 bg-white border-none shadow-xl max-w-xl mx-auto lg:mx-0">
  <form onSubmit={handleSubmit} className="space-y-4">
    {/* Name and Contact Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-1.5">
        <label className="text-[11px] font-bold uppercase text-gray-500 ml-1">Full Name *</label>
        <input 
          type="text" 
          name="fullName" 
          value={formData.fullName} 
          onChange={handleChange} 
          required 
          className="w-full p-2.5 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" 
          placeholder="Name" 
        />
      </div>
      <div className="space-y-1.5">
        <label className="text-[11px] font-bold uppercase text-gray-500 ml-1">Contact No *</label>
        <input 
          type="text" 
          name="contactno" 
          value={formData.contactno} 
          onChange={handleChange} 
          required 
          className="w-full p-2.5 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" 
          placeholder="Numbers only" 
        />
      </div>
    </div>
    
    {/* Email Field */}
    <div className="space-y-1.5">
      <label className="text-[11px] font-bold uppercase text-gray-500 ml-1">Email Address</label>
      <input 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        className="w-full p-2.5 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" 
        placeholder="email@company.com" 
      />
    </div>

    {/* Solution Dropdown */}
    <div className="space-y-1.5">
      <label className="text-[11px] font-bold uppercase text-gray-500 ml-1">Solution Required</label>
      <div className="relative">
        <select 
          name="solution" 
          value={formData.solution} 
          onChange={handleChange} 
          className="w-full p-2.5 text-sm border border-gray-200 rounded-md appearance-none bg-white outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a Solution</option>
          <option value="vrv-and-centralizedac">VRV and Centralized AC</option>
          <option value="clean-and-controlled-rooms">Clean and Controlled Rooms</option>
          <option value="chillers">Chillers</option>
          <option value="cold-storage-solutions">Cold Storage Solutions</option>
          <option value="fresh-air-systems">Fresh Air Systems</option>
          <option value="lift-and-staircase-pressurization">Lift and Staircase Pressurization</option>
        </select>
        <ChevronDown className="absolute right-3 top-3.5 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
      </div>
    </div>

    {/* Message Field */}
    <div className="space-y-1.5">
      <label className="text-[11px] font-bold uppercase text-gray-500 ml-1">Message</label>
      <textarea 
        name="message" 
        value={formData.message} 
        onChange={handleChange} 
        rows={3} 
        required 
        className="w-full p-2.5 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 outline-none resize-none" 
        placeholder="Tell us about your project..." 
      />
    </div>

    {/* Submit Button */}
    <Button 
      type="submit" 
      disabled={loading} 
      className="w-50% py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md text-base flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 mt-2"
    >
      {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <Send size={16} />}
      {loading ? 'Processing...' : 'Submit Inquiry'}
    </Button>

    {status && (
      <div className={`text-center p-2 rounded text-xs font-bold mt-2 ${status.includes('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
        {status}
      </div>
    )}
  </form>
</Card>
        </div>

        {/* SECTION 4: MAP SECTION (Matching Reference) */}
        {/* <div className="mb-20">
          <Card className="overflow-hidden border-none shadow-2xl h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.504286161838!2d73.77490287519129!3d18.50611418258327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bec0939e6a0b%3A0x6a2a5f4c47b59e5e!2sBavdhan%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1705850000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Card>
        </div> */}
      </div>
    </div>
  );
}