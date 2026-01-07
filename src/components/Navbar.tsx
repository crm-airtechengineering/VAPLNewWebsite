import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Vakharia-Airtech-Logo.png';

// 1. Define navLinks OUTSIDE the component so it's globally accessible in this file
const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about' }, 
  { 
    name: 'Solutions', 
    to: '/solutions',
    hasDropdown: true,
    dropdownItems: [
      { name: 'VRV and Centralized Air Conditioning', to: '/solutions#vrv' },
      { name: 'Clean and Controlled Rooms', to: '/solutions#cleanroom' },
      { name: 'Chillers', to: '/solutions#chillers' },
      { name: 'Cold Room and Storage Solutions', to: '/solutions#cold-storage' },
      { name: 'Fresh Air', to: '/solutions#fresh-air' },
      { name: 'Basement Ventilation', to: '/solutions#basement-ventilation' },
      { name: 'Staircase and Lift Pressurization', to: '/solutions#staircase-and-lift-pressurization' },
    ]
  },
  { 
    name: 'Industries', 
    to: '/industries',
    hasDropdown: true,
    dropdownItems: [
      { name: 'High Rise Buildings', to: '/industries#high-rise-buildings' },
      { name: 'Luxurious Bunglows', to: '/industries#luxurious-bungalow' },
      { name: 'Finance & Banking', to: '/industries#finance-banking' },
      { name: 'Manufacturing', to: '/industries#manufacturing' },
      { name: 'Healthcare', to: '/industries#healthcare' },
      { name: 'Education', to: '/industries#education' },
    ]
  },
  {name:'Our Work', to:'/our-work'},
  { name: 'Contact Us', to: '/contact' },
 
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const location = useLocation();

  // Transparent only on Home Page ('/') and when not scrolled
  const hasHeroSection = location.pathname === '/';
  const isTransparent = hasHeroSection && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isTransparent ? 'bg-transparent py-4' : 'bg-white shadow-md py-0'
      }`}
    >
      <div className="max-w-[98%] xl:max-w-[95%] mx-auto px-2 lg:px-4">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img 
                src={Logo} 
                alt="Vakharia Airtech Logo" 
                className={`h-12 md:h-18 lg:h-20 w-auto object-contain transition-all duration-500 ${
                  isTransparent ? 'brightness-0 invert' : ''
                }`} 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-x-4 lg:gap-x-12 xl:gap-x-16">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative group py-2"
                  onMouseEnter={() => setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className={`text-sm lg:text-[15px] xl:text-lg font-semibold transition-colors duration-300 flex items-center gap-1 whitespace-nowrap ${
                    isTransparent ? 'text-white hover:text-blue-200' : 'text-gray-800 hover:text-blue-700'
                  }`}>
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {openDropdown === link.name && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 bg-white rounded-md shadow-xl border border-gray-100 py-3">
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          className="block px-6 py-2.5 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
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
                  className={`text-sm lg:text-[15px] xl:text-lg font-semibold transition-colors duration-300 whitespace-nowrap py-2 ${
                    isTransparent ? 'text-white hover:text-blue-200' : 'text-gray-800 hover:text-blue-700'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 lg:gap-4">
            <button className={`p-2 transition-colors ${isTransparent ? 'text-white' : 'text-gray-700'}`}>
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 transition-colors ${isTransparent ? 'text-white' : 'text-gray-800'}`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}