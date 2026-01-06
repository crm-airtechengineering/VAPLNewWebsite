import { Link } from 'react-router-dom'; // Import Link
import { Linkedin, Instagram, Facebook, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import Logo from '../assets/Vakharia-Airtech-Logo.png';

export function Footer() {
  const quickLinks = [
    { name: 'About Us', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Leadership', href: 'leadership' },
    { name: 'Blog', href: 'blog' },
    { name: 'Apply for Job', href: 'careers' },
    { name: 'Downloads', href: 'downloads' },
  ];

  const solutions = [
    'Central Air Conditioning',
    'Industrial Ventilation',
    'Process Cooling',
    'Process Heating (Heat Pump)',
    'Gas Turbine Inlet Air Cooling',
    'CHPC Architecture/ Trigeneration',
    'Sustainable Dehumidification',
    'Cleanroom Solutions',
    'SFN for Liquid Cooled Data Centres',
    'Heat Recovery Based Absorption Chilling',
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.instagram.com/airtech_vakharia?igsh=MXR2eXN3d2l2c3VsMQ==', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/airtech_vakharia?igsh=MXR2eXN3d2l2c3VsMQ==', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.instagram.com/airtech_vakharia?igsh=MXR2eXN3d2l2c3VsMQ==', label: 'Facebook' },
  ];

  return (
    <footer className="bg-[#1F1F1F] text-gray-300 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute bottom-0 right-0 opacity-10">
        <svg width="500" height="300" viewBox="0 0 500 300" fill="none">
          <path d="M250 150L400 75L400 225L250 150Z" fill="currentColor" className="text-teal-500" />
          <path d="M400 75L550 0L550 150L400 75Z" fill="currentColor" className="text-teal-600" />
          <path d="M400 225L550 150L550 300L400 225Z" fill="currentColor" className="text-teal-700" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                {/* <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                    <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div> */}
                <div className="flex-shrink-0">
            {/* <a href="#home" className="text-blue-600"> */}
              <img src={Logo} alt="Logo" className="h-12 w-auto" />
            {/* </a> */}
          </div>
                <h3 className="text-lg text-white">Vakharia Airtech Pvt. Ltd</h3>
              </div>
              <p className="text-base text-[#f8be4c] mb-4">We are HVAC Engineering Company</p>
            </div>

            <p className="text-sm mb-6 leading-relaxed">
              With nearly 30 years of expertise and 400+ projects across India, Aqua Chill delivers 
              turnkey HVAC and process cooling solutions that blend innovation, energy efficiency, and 
              reliability. Trusted by leading industries, we specialize in designing and executing 
              sustainable, high-performance systems that ensure quality, compliance, and long-term value.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-[#f8be4c] hover:bg-[#ee454b] rounded flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg mb-6 font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-[#f8be4c] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#f8be4c]">✦</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white text-lg mb-6 font-semibold">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm hover:text-[#f8be4c] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#f8be4c]">✦</span>
                    {solution}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg mb-6 font-semibold">Company Info</h3>
            
            {/* Office Location */}
            <div className="mb-6">
              <div className="flex items-start gap-2 mb-2">
                <MapPin className="w-5 h-5 text-[#f8be4c] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white text-base mb-2">Office Location</h4>
                  <p className="text-sm leading-relaxed">
                    <span className="block">Vakharia Airtech Pvt. Ltd</span>
                    <span className="block mt-1">
                      S. No. 53/6, 'Saffron Avenue',A Building, Showroom No 1 & 2,Off Mumbai-Bangalore Highway,Opp. CNG Pump, Bavdhan,
                      Pune - 411 021 Maharashtra
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#f8be4c]" />
                <div>
                  <h4 className="text-white text-sm mb-1">Send a Message</h4>
                  <a href="mailto:info@aquachill.co.in" className="text-sm hover:text-teal-400 transition-colors">
                    airtech@airtechpune.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#f8be4c]" />
                <a href="tel:+919049002037" className="text-white hover:text-teal-400 transition-colors">
                  +91 9049002037
                </a>
              </div>
            </div>

            {/* Connect Button */}
            <Link to="/contact"> 
              <Button className="bg-[#E53935] hover:bg-[#C62828] text-white w-full">
                Connect with Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-6">
          <p className="text-xs text-gray-400 text-center">
            © Vakharia Airtech Pvt. Ltd., Pune. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}