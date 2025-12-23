import { useState } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import Logo from '../assets/Vakharia-Airtech-Logo.png';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/' },
    
    { 
      name: 'Solutions', 
      href: '/solutions',
      hasDropdown: true,
      dropdownItems: [
        { name: 'VRV X', href: '#vrv-x' },
        { name: 'VRV Home Series', href: '#vrv-home' },
        { name: 'VRVX III Water Cooled', href: '#water-cooled' },
        { name: 'Ductable Split AC', href: '#ductable' },
        { name: 'High Wall Split AC', href: '#high-wall' },
        { name: 'Cassette Split AC', href: '#cassette' },
        { name: 'Floor Standing AC', href: '#floor-standing' },
      ]
    },
    { 
      name: 'Industries', 
      href: '/industries',
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
      href: '/discover',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Our History', href: '#history' },
        { name: 'Why Choose Us', href: '#why-choose' },
        { name: 'Our Team', href: '#team' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Testimonials', href: '#testimonials' },
      ]
    },
    { 
      name: 'Career', 
      href: '/career',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Current Openings', href: '#openings' },
        { name: 'Life at Vakharia', href: '#life' },
        { name: 'Benefits', href: '#benefits' },
        { name: 'Apply Now', href: '#apply' },
      ]
    },
    { name: 'Contact Us', href: '/' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      {/* UX Rationale: max-w-[95%] reduces the large white side-gutters. 
          px-2 ensures content doesn't touch the very edge on mobile. 
      */}
      <div className="max-w-[98%] xl:max-w-[95%] mx-auto px-2 sm:px-4 lg:px-10">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/">
              <img 
                src={Logo} 
                alt="Vakharia Airtech Logo" 
                className="h-12 md:h-14 lg:h-16 w-auto object-contain transition-all" 
              />
            </a>
          </div>

          {/* Desktop Navigation Section 
              - flex-1 and justify-center centers the links.
              - gap-x-4 to gap-x-8 ensures equal spacing that scales.
          */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-x-4 lg:gap-x-10 xl:gap-x-20">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative group py-2"
                  onMouseEnter={() => setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="text-gray-800 text-sm lg:text-[15px] xl:text-lg font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center gap-1 whitespace-nowrap">
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Dropdown Menu - Centered logic */}
                  {openDropdown === link.name && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 bg-white rounded-md shadow-xl border border-gray-100 py-3 animate-in fade-in slide-in-from-top-2">
                      {link.dropdownItems?.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-6 py-2.5 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-colors duration-200"
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
                  className="text-gray-800 text-sm lg:text-[15px] xl:text-base font-semibold hover:text-blue-700 transition-colors duration-200 whitespace-nowrap py-2"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 lg:gap-4">
            <button 
                className="p-2 text-gray-700 hover:text-blue-700 transition-colors"
                aria-label="Search technical products"
            >
              <Search className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-800 hover:text-blue-700 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-inner max-h-[85vh] overflow-y-auto">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.name} className="border-b border-gray-50 last:border-none">
                  <button
                    onClick={() => setMobileOpenDropdown(mobileOpenDropdown === link.name ? null : link.name)}
                    className="w-full flex items-center justify-between py-3 text-gray-800 font-medium"
                  >
                    {link.name}
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileOpenDropdown === link.name ? 'rotate-180 text-blue-700' : ''}`} />
                  </button>
                  
                  {mobileOpenDropdown === link.name && (
                    <div className="pl-4 pb-3 space-y-1">
                      {link.dropdownItems?.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block py-2.5 text-sm text-gray-600 active:text-blue-700"
                          onClick={() => setIsMenuOpen(false)}
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
                  className="block py-4 text-gray-800 font-medium border-b border-gray-50 last:border-none"
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