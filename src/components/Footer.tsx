import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import Logo from '../assets/Vakharia-Airtech-Logo.png';

export function Footer() {
  // Google Maps URL for your specific Bavdhan office
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Vakharia+Airtech+Pvt+Ltd+Bavdhan+Pune";

  const quickLinks = [
    { name: 'About Us', to: '/about' },
    { name: 'Solutions', to: '/solutions' },
    { name: 'Industries', to: '/industries' },
    { name: 'Our Work', to: '/ourwork' },
    { name: 'Contact Us', to: '/contact' },
  ];

  const solutions = [
    { name: 'VRV and Centralized Air Conditioning', to: '/solutions#vrv' },
    { name: 'Clean and Controlled Rooms', to: '/solutions#cleanroom' },
    { name: 'Chillers', to: '/solutions#chillers' },
    { name: 'Cold Room and Storage Solutions', to: '/solutions#cold-storage' },
    { name: 'Fresh Air', to: '/solutions#fresh-air' },
    { name: 'Basement Ventilation', to: '/solutions#basement-ventilation' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/vakharia-airtech-pvt-ltd/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/vakharia_airtech?igsh=MXR2eXN3d2l2c3VsMQ==', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/share/1GBKFysrRD/?mibextid=wwXIfr', label: 'Facebook' },
  ];

  return (
    <footer className="bg-[#1F1F1F] text-gray-300 relative overflow-hidden">
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
                <div className="flex-shrink-0">
                  <img src={Logo} alt="Logo" className="h-16 w-auto" />
                </div>
                <h3 className="text-lg text-white font-bold">Vakharia Airtech Pvt Ltd.</h3>
              </div>
              <p className="text-base text-[#f8be4c] mb-4">HVAC Engineering Experts</p>
            </div>
            <p className="text-sm mb-6 leading-relaxed">
              With 21+ years of expertise, Vakharia Airtech delivers turnkey HVAC solutions that blend innovation and energy efficiency.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
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
                  <Link to={link.to} className="text-sm hover:text-[#f8be4c] transition-colors flex items-center gap-2">
                    <span className="text-[#f8be4c]">✦</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white text-lg mb-6 font-semibold">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((item, index) => (
                <li key={index}>
                  <Link to={item.to} className="text-sm hover:text-[#f8be4c] transition-colors flex items-center gap-2">
                    <span className="text-[#f8be4c]">✦</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white text-lg mb-6 font-semibold">Company Info</h3>
            
           
            <div className="mb-6">
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-2 group cursor-pointer"
              >
                <MapPin className="w-5 h-5 text-[#f8be4c] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="text-white text-base mb-1 group-hover:text-[#f8be4c] transition-colors">Office Location</h4>
                  <p className="text-sm leading-relaxed group-hover:text-white transition-colors">
                    Vakharia Airtech Pvt. Ltd.<br />
                    S. No. 53/6, 'Saffron Avenue', Bavdhan, Pune - 411 021
                  </p>
                </div>
              </a>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#f8be4c]" />
                <div>
                  <h4 className="text-white text-sm mb-1">Email</h4>
                  <a href="mailto:airtech@airtechpune.com" className="text-sm hover:text-[#f8be4c] transition-colors">
                    airtech@airtechpune.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#f8be4c]" />
                <a href="tel:+919049002037" className="text-white hover:text-[#f8be4c] transition-colors font-semibold">
                  +91 9049002037
                </a>
              </div>
            </div>

            <Link to="/contact"> 
              <Button className="bg-[#E53935] hover:bg-[#C62828] text-white w-full py-6 font-bold uppercase tracking-wider">
                Connect with Us
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6">
          <p className="text-xs text-gray-400 text-center">
            © {new Date().getFullYear()} Vakharia Airtech Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}