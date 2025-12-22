import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../assets/Vakharia-Airtech-Logo.png';
import { Search } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);

  const navLinks = [
    { 
      name: 'About Us', 
      href: 'aboutus', 
    },
    { 
      name: 'Solutions', 
      href: 'solutions',
      hasDropdown: true,
      dropdownItems: [
        { name: 'VRV X', href: '#rotary-screw' },
        { name: 'VRV Home Series', href: '#reciprocating' },
        { name: 'VRVX III Water Cooled System', href: '#oil-free' },
        { name: 'Ductable Split AC', href: '#refrigerated-dryers' },
        { name: 'High Wall Split AC', href: '#desiccant-dryers' },
        { name: 'Cassette Split AC', href: '#filtration' },
        { name: 'Floor Standing AC', href: '#filtration' },
      ]
    },
    { 
      name: 'Industries', 
      href: 'industries',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Automotive', href: '#automotive' },
        { name: 'Pharmaceutical', href: '#pharmaceutical' },
        { name: 'Food & Beverage', href: '#food-beverage' },
        { name: 'Textile', href: '#textile' },
        { name: 'Manufacturing', href: '#manufacturing' },
        { name: 'Chemical', href: '#chemical' },
      ]
    },
    { 
      name: 'Discover Us', 
      href: 'discoverus',
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Us', href: '#about' },
        { name: 'Our History', href: '#history' },
        { name: 'Why Choose Us', href: '#why-choose' },
        { name: 'Our Team', href: '#team' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Testimonials', href: '#testimonials' },
      ]
    },
    { 
      name: 'Career', 
      href: 'career',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Current Openings', href: '#openings' },
        { name: 'Life at Vakharia', href: '#life' },
        { name: 'Benefits', href: '#benefits' },
        { name: 'Apply Now', href: '#apply' },
      ]
    },
    { 
      name: 'Contact Us', 
      href: 'contactus',
    },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            {/* <a href="#home" className="text-blue-600"> */}
              <img src={Logo} alt="Logo" className="h-16 w-auto" />
            {/* </a> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-16">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="text-black md:text-lg text-base hover:text-blue-600 transition-colors duration-200 flex items-center gap-1">
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {openDropdown === link.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      {link.dropdownItems?.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-black md:text-lg text-base hover:text-blue-600 transition-colors duration-200"
                >
                  {link.name}
                </a>
              )
            ))}
            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
             <button className="w-full text-black px-6 py-2 rounded-lg transition-colors duration-200 mt-2 flex items-center justify-center">
               <Search className="w-6 h-6 hover:text-blue-600" />
             </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.name}>
                  <button
                    onClick={() => setMobileOpenDropdown(mobileOpenDropdown === link.name ? null : link.name)}
                    className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileOpenDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Mobile Dropdown */}
                  {mobileOpenDropdown === link.name && (
                    <div className="pl-4 mt-1 space-y-1">
                      {link.dropdownItems?.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setMobileOpenDropdown(null);
                          }}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            ))}
            
          </div>
        </div>
      )}
    </nav>
  );
}