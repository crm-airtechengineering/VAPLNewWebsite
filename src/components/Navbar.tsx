import { useState } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Vakharia-Airtech-Logo.png';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' }, 
    { 
      name: 'Solutions', 
      to: '/solutions',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Clean and Controlled Rooms', to: '/solutions#cleanroom' },
        { name: 'Chillers', to: '/solutions#chillers' },
        { name: 'Cold Room and Storage Solutions', to: '/solutions#cold-storage' },
        { name: 'Fresh Air', to: '/solutions#fresh-air' },
        { name: 'VRV and Centralized Air Conditioning', to: '/solutions#vrv' },
      ]
    },
    { 
      name: 'Industries', 
      to: '/industries',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Real Estate', to: '/industries#real-estate' },
        { name: 'Retail & E-commerce', to: '/industries#retail-ecommerce' },
        { name: 'Healthcare', to: '/industries#healthcare' },
        { name: 'Education', to: '/industries#education' },
        { name: 'Finance & Banking', to: '/industries#finance-banking' },
        { name: 'Manufacturing', to: '/industries#manufacturing' },
      ]
    },
    // { 
    //   name: 'Discover Us', 
    //   to: '/discover',
    //   hasDropdown: true,
    //   dropdownItems: [
    //     { name: 'Our History', to: '/discover#history' },
    //     { name: 'Why Choose Us', to: '/discover#why-choose' },
    //     { name: 'Our Team', to: '/discover#team' },
    //     { name: 'Certifications', to: '/discover#certifications' },
    //     { name: 'Testimonials', to: '/discover#testimonials' },
    //   ]
    // },
    // { 
    //   name: 'Career', 
    //   to: '/career',
    //   hasDropdown: true,
    //   dropdownItems: [
    //     { name: 'Current Openings', to: '/career#openings' },
    //     { name: 'Life at Vakharia', to: '/career#life-at-vakharia' },
    //     { name: 'Benefits', to: '/career#benefits' },
    //     { name: 'Apply Now', to: '/career#apply-now' },
    //   ]
    // },
    { name: 'Contact Us', to: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-[98%] xl:max-w-[95%] mx-auto px-2 sm:px-2 lg:px-4">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <Link to="/">
              <img 
                src={Logo} 
                alt="Vakharia Airtech Logo" 
                className="h-12 md:h-18 lg:h-20 w-auto object-contain transition-all" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-x-4 lg:gap-x-6 xl:gap-x-16">
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
                  
                  {openDropdown === link.name && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 bg-white rounded-md shadow-xl border border-gray-100 py-3 animate-in fade-in slide-in-from-top-2">
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          className="block px-6 py-2.5 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.to}
                  className="text-gray-800 text-sm lg:text-[15px] xl:text-base font-semibold hover:text-blue-700 transition-colors duration-200 whitespace-nowrap py-2"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 lg:gap-4">
            <button 
                className="p-2 text-gray-700 hover:text-blue-700 transition-colors"
                aria-label="Search technical products"
            >
              <Search className="w-5 h-5 lg:w-5 lg:h-5" />
            </button>
            
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
                        <Link
                          key={item.name}
                          to={item.to}
                          className="block py-2.5 text-sm text-gray-600 active:text-blue-700"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.to}
                  className="block py-4 text-gray-800 font-medium border-b border-gray-50 last:border-none"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}