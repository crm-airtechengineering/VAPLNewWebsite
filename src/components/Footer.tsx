import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import Logo from '../assets/Vakharia-Airtech-Logo.png';

export function Footer() {
  
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
    { name: 'Lift and Staircase Pressurization', to: '/solutions#staircase-pressurization' },
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/share/1GBKFysrRD/?mibextid=wwXIfr', 
      brandColor: 'bg-[#1877F2]' 
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/company/vakharia-airtech-pvt-ltd/', 
      brandColor: 'bg-[#0A66C2]' 
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/vakharia_airtech?igsh=MXR2eXN3d2l2c3VsMQ==', 
      brandColor: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]' 
    },
  ];

  return (
    <footer className="bg-[#1F1F1F] text-gray-400 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
        <svg width="400" height="200" viewBox="0 0 500 300" fill="none">
          <path d="M250 150L400 75L400 225L250 150Z" fill="currentColor" className="text-teal-500" />
          <path d="M400 75L550 0L550 150L400 75Z" fill="currentColor" className="text-teal-600" />
          <path d="M400 225L550 150L550 300L400 225Z" fill="currentColor" className="text-teal-700" />
        </svg>
      </div>

      {/* Reduced vertical padding from py-12 to py-8 */}
      <div className="relative max-w-full mx-6 px-4 sm:px-6 lg:px-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          
          {/* 1. Company Info - Column Span 2 */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="flex flex-col gap-2 mb-2">
                <img src={Logo} alt="Logo" className="h-20 w-auto object-contain self-start" />
                <h3 className="text-base text-white font-bold">Vakharia Airtech Pvt Ltd.</h3>
              </div>
              <p className="text-xs text-[#f8be4c]">HVAC Engineering Experts</p>
            </div>
            <p className="text-xs mb-4 leading-relaxed max-w-sm">
              With 21+ years of expertise, Vakharia Airtech delivers turnkey HVAC solutions that blend innovation and energy efficiency.
            </p>

            {/* Branded Social Icons - Slightly smaller (w-9 h-9) */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-7 h-7 ${social.brandColor} rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-md`}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-sm mb-4 font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.to} className="text-xs hover:text-[#f8be4c] transition-colors flex items-center gap-2">
                    <span className="text-[#f8be4c] text-[10px]">✦</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Company Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-sm mb-4 font-semibold uppercase tracking-wider">Contact</h3>
            
            <div className="mb-4">
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 group">
                <MapPin className="w-4 h-4 text-[#f8be4c] shrink-0 mt-0.5" />
                <p className="text-xs leading-normal group-hover:text-white transition-colors">
                  S. No. 53/6, 'Saffron Avenue', Bavdhan, Pune - 411 021
                </p>
              </a>
            </div>

            <div className="mb-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#f8be4c] shrink-0" />
                <a href="mailto:airtech@airtechpune.com" className="text-xs hover:text-[#f8be4c] truncate">
                  airtech@airtechpune.com
                </a>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#f8be4c] shrink-0" />
                <a href="tel:+919049002037" className="text-xs text-white hover:text-[#f8be4c] font-semibold">
                  +91 9049002037
                </a>
              </div>
            </div>

            <Link to="/contact"> 
              <Button className="bg-[#E53935] hover:bg-[#C62828] text-white w-full py-1 h-8 text-[10px] font-bold uppercase tracking-wider">
                Connect
              </Button>
            </Link>
          </div>
          {/* 4. Associate Branch 1 (Mumbai) */}
          <div className="lg:col-span-1 lg:pl-4">
            <h3 className="text-white text-xs mb-3 font-semibold uppercase tracking-wider text-[#f8be4c]">Mumbai Associate</h3>
            <div className="space-y-1.5">
              <p className="text-[11px] font-bold text-white uppercase">Be Cool-(CR)</p>
              <p className="text-[10px] leading-tight text-gray-500">Borivali West, Mumbai - 400092</p>
              <div className="pt-1 flex flex-col gap-1">
                <a href="tel:9773300527" className="text-[10px] hover:text-white flex items-center gap-1">
                  <Phone className="w-2.5 h-2.5 text-[#f8be4c]" /> 9773300527
                </a>
                <a href="mailto:becoolac60@gmail.com" className="text-[10px] hover:text-white flex items-center gap-1 truncate">
                  <Mail className="w-2.5 h-2.5 text-[#f8be4c]" /> becoolac60@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* 5. Associate Branch 2 (Amravati) */}
          <div className="lg:col-span-1  lg:pl-4">
            <h3 className="text-white text-lg mb-3 font-semibold uppercase tracking-wider text-[#f8be4c]">Amravati Associate</h3>
            <div className="space-y-3">
              <p className="text-[13px] font-bold text-white uppercase">Vakharia Associates</p>
              <p className="text-[12px] leading-tight text-gray-500">Opp. Hotel Ramgiri, Amravati - 444601</p>
              <div className="pt-1 flex flex-col gap-1">
                <a href="tel:9168633501" className="text-[12px] hover:text-white flex items-center gap-1">
                  <Phone className="w-2.5 h-2.5 text-[#f8be4c]" /> 9168633501
                </a>
                <a href="mailto:vakharia.ac@gmail.com" className="text-[10px] hover:text-white flex items-center gap-1 truncate">
                  <Mail className="w-2.5 h-2.5 text-[#f8be4c]" /> vakharia.ac@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Reduced margin */}
        <div className="border-t border-gray-800 mt-8 pt-4">
          <p className="text-[10px] text-gray-500 text-center">
            © {new Date().getFullYear()} Vakharia Airtech Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}