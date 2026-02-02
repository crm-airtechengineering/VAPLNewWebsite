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
      {/* Abstract Background SVG */}
      <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none hidden sm:block">
        <svg width="400" height="200" viewBox="0 0 500 300" fill="none">
          <path d="M250 150L400 75L400 225L250 150Z" fill="currentColor" className="text-teal-500" />
          <path d="M400 75L550 0L550 150L400 75Z" fill="currentColor" className="text-teal-600" />
          <path d="M400 225L550 150L550 300L400 225Z" fill="currentColor" className="text-teal-700" />
        </svg>
      </div>

      {/* Main Container */}
      <div className="relative max-w-8xl mx-auto px-6 py-10 lg:py-16">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
          
          {/* 1. Company Info */}
          <div className="flex flex-col">
            <div className="mb-4">
              <img src={Logo} alt="Logo" className="h-14 lg:h-16 w-auto object-contain mb-4" />
              <h3 className="text-lg text-white font-bold leading-tight">Vakharia Airtech Pvt Ltd.</h3>
              <p className="text-sm text-[#f8be4c] mt-1">HVAC Engineering Experts</p>
            </div>
            <p className="text-[11px] leading-relaxed mb-6 max-w-xs text-white">
              With 21+ years of expertise, Vakharia Airtech delivers turnkey HVAC solutions that blend innovation and efficiency.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a key={index} href={social.href} target="_blank" rel="noopener noreferrer"
                    className={`w-8 h-8 ${social.brandColor} rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-lg`}>
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-white text-lg mb-6 font-bold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.to} className="text-sm text-white hover:text-[#f8be4c] transition-colors flex items-center gap-2 group">
                    <span className="text-[#f8be4c] text-[10px] group-hover:translate-x-1 transition-transform">✦</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Head Office (Pune) */}
          <div>
            <h3 className="text-white text-lg mb-6 font-bold uppercase tracking-wider">Head Office</h3>
            <div className="flex flex-col gap-5">
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group ">
                <MapPin className="w-5 h-5 text-[#f8be4c] shrink-0 mt-0.5" />
                <p className="text-sm leading-snug text-white group-hover:text-[#f8be4c] transition-colors">
                  S. No. 53/6, Bavdhan, Pune - 411 021
                </p>
              </a>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#f8be4c] shrink-0 " />
                <a href="mailto:airtech@airtechpune.com" className="text-sm text-white hover:text-[#f8be4c] break-all">
                  airtech@airtechpune.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#f8be4c] shrink-0" />
                <a href="tel:+919049002037" className="text-sm text-white hover:text-[#f8be4c] font-semibold">
                  +91 9049002037
                </a>
              </div>
              <div className='md:pt-10'>
              <Link to="/contact" className="mt-2">
                <Button className="bg-[#E53935] hover:bg-[#C62828] text-white md:w-full w-fit py-3 text-xs font-bold shadow-md">
                  Connect
                </Button>
              </Link>
              </div>
            </div>
          </div>

          {/* 4. Associate Branch 1 */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white text-lg mb-1 font-bold leading-tight uppercase tracking-wider">Be Cool-(CR) Associates</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#f8be4c] shrink-0 mt-0.5" />
              <p className="text-sm text-white group-hover:text-[#f8be4c]">Borivali West, Mumbai - 400092</p>
            </div>
            <a href="tel:9773300527" className="text-sm text-white hover:text-[#f8be4c] flex items-center gap-3 transition-colors">
              <Phone className="w-5 h-5 text-[#f8be4c] shrink-0" /> +91 9773300527
            </a>
            <a href="mailto:becoolac60@gmail.com" className="text-sm text-white hover:text-[#f8be4c] flex items-center gap-3 break-all transition-colors">
              <Mail className="w-5 h-5 text-[#f8be4c] shrink-0" /> becoolac60@gmail.com
            </a>
          </div>

          {/* 5. Associate Branch 2 */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white text-lg mb-1 font-bold leading-tight uppercase tracking-wider">Vakharia Associates</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#f8be4c] shrink-0 mt-0.5" />
              <p className="text-sm leading-snug text-white group-hover:text-[#f8be4c]">Borivali West, Mumbai - 400092</p>
            </div>
            <a href="tel:9168633501" className="text-sm text-white hover:text-[#f8be4c] flex items-center gap-3 transition-colors">
              <Phone className="w-5 h-5 text-[#f8be4c] shrink-0" /> +91 9168633501
            </a>
            <a href="mailto:vakharia.ac@gmail.com" className="text-sm text-white hover:text-[#f8be4c] flex items-center gap-3 break-all transition-colors">
              <Mail className="w-5 h-5 text-[#f8be4c] shrink-0" /> vakharia.ac@gmail.com
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-[10px] text-white text-center md:text-left">
              © {new Date().getFullYear()} Vakharia Airtech Pvt. Ltd. | All Rights Reserved |
              <Link to="/privacy" className="text-[10px] ml-1 text-white hover:text-[#f8be4c] ">Privacy Policy</Link>
            </p>
               
          </div>
        </div>
      </div>
    </footer>
  );
}