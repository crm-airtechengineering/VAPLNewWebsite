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
      { name: 'Luxurious Bungalows', to: '/industries#luxurious-bungalows' },
      { name: 'Finance & Banking', to: '/industries#finance-banking' },
      { name: 'Manufacturing', to: '/industries#manufacturing' },
      { name: 'Healthcare', to: '/industries#healthcare' },
      { name: 'Education', to: '/industries#education' },
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

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-500 ${isTransparent ? 'bg-transparent py-4' : 'bg-white shadow-md py-0'}`}>
      <div className="max-w-[98%] xl:max-w-[95%] mx-auto px-2 lg:px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/">
            <img 
              src={Logo} 
              alt="Logo" 
              className={`h-12 md:h-18 lg:h-20 w-auto object-contain transition-all duration-300 ${isTransparent ? 'brightness-0 invert' : ''}`} 
            />
          </Link>

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
                  {/* CHANGED: Now a Link instead of a button */}
                  <Link 
                    to={link.to}
                    onClick={() => setOpenDropdown(null)}
                    className={`text-sm lg:text-[15px] xl:text-lg font-semibold flex items-center gap-1 transition-colors ${
                      isTransparent ? 'text-white hover:text-gray-200' : 'text-gray-800 hover:text-blue-700'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                  </Link>

                  {/* Dropdown Menu */}
                  {openDropdown === link.name && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 bg-white rounded-md shadow-xl border border-gray-100 py-3">
                      {link.dropdownItems?.map((item) => (
                        <Link 
                          key={item.name} 
                          to={item.to} 
                          onClick={() => setOpenDropdown(null)}
                          className="block px-6 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
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
                  className={`text-sm lg:text-[15px] xl:text-lg font-semibold transition-colors ${
                    isTransparent ? 'text-white hover:text-gray-200' : 'text-gray-800 hover:text-blue-700'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button 
              className={`md:hidden p-2 transition-colors ${isTransparent ? 'text-white' : 'text-gray-800'}`} 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-6 flex flex-col gap-4 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link 
                to={link.to} 
                onClick={() => setIsMenuOpen(false)} 
                className="text-gray-800 font-bold text-lg block"
              >
                {link.name}
              </Link>
              {/* Optional: Add small sub-links in mobile menu if desired */}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}