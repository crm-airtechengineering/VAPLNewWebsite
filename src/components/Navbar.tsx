import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Vakharia-Airtech-Logo.png';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about' }, 
  { 
    name: 'Solutions', 
    to: '/solutions',
    hasDropdown: true,
    dropdownItems: [
      { name: 'VRV and Centralized AC', to: '/solutions#vrv' },
      { name: 'Clean & Controlled Rooms', to: '/solutions#cleanroom' },
      { name: 'Chillers', to: '/solutions#chillers' },
      { name: 'Cold Storage Solutions', to: '/solutions#cold-storage' },
      { name: 'Fresh Air Systems', to: '/solutions#fresh-air' },
      { name: 'Basement Ventilation', to: '/solutions#basement-ventilation' },
    ]
  },
  { 
    name: 'Industries', 
    to: '/industries',
    hasDropdown: true,
    dropdownItems: [
      { name: 'High Rise Buildings', to: '/industries#high-rise-buildings' },
      { name: 'Healthcare', to: '/industries#healthcare' }, // Fixed space typo here
      { name: 'Manufacturing', to: '/industries#manufacturing' },
      { name: 'Finance & Banking', to: '/industries#finance-banking' },
    ]
  },
  { name: 'Our Work', to: '/ourwork' },
  { name: 'Contact Us', to: '/contact' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isTransparent = location.pathname === '/' && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close mobile menu when path changes
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-500 ${
      isTransparent ? 'bg-transparent py-4' : 'bg-white shadow-md py-0'
    }`}>
      <div className="max-w-[98%] xl:max-w-[95%] mx-auto px-2 lg:px-4">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={Logo} 
              alt="VAPL Logo" 
              className={`h-12 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300 ${
                isTransparent ? 'brightness-0 invert' : ''
              }`} 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-x-4 lg:gap-x-8 xl:gap-x-12">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div 
                  key={link.name} 
                  className="relative group py-2" 
                  onMouseEnter={() => setOpenDropdown(link.name)} 
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link 
                    to={link.to}
                    className={`text-sm lg:text-[15px] xl:text-lg font-semibold flex items-center gap-1 transition-colors ${
                      isTransparent ? 'text-white hover:text-blue-200' : 'text-gray-800 hover:text-blue-700'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                  </Link>

                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 bg-white rounded-md shadow-xl border border-gray-100 py-3 transition-all duration-300 ${
                    openDropdown === link.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}>
                    {link.dropdownItems?.map((item) => (
                      <Link 
                        key={item.name} 
                        to={item.to} 
                        className="block px-6 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.to} 
                  className={`text-sm lg:text-[15px] xl:text-lg font-semibold transition-colors ${
                    isTransparent ? 'text-white hover:text-blue-200' : 'text-gray-800 hover:text-blue-700'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 transition-colors ${isTransparent ? 'text-white' : 'text-gray-800'}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className={`md:hidden bg-white border-t overflow-hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-screen py-4 px-6 shadow-lg' : 'max-h-0'
      }`}>
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col gap-2">
              <Link 
                to={link.to} 
                className="text-gray-800 font-bold text-lg"
              >
                {link.name}
              </Link>
              {link.hasDropdown && (
                <div className="pl-4 flex flex-col gap-2 border-l-2 border-blue-100">
                  {link.dropdownItems?.map((item) => (
                    <Link key={item.name} to={item.to} className="text-gray-500 text-sm">
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}