import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageLoader } from './components/PageLoader';

// Page imports
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/ContactUs';
import Solutions from './pages/Solutions';
import { Industries } from './pages/Industries';
import { OurWork } from './pages/OurWork'; // Ensure this matches your file name
import DiscoverUs from './pages/DiscoverUs';
import CareerPage from './pages/CareerPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1900);
    return () => clearTimeout(timer);
  }, []);

  return (
    // ADD THE BASENAME HERE
    <Router basename="/VAPLNewWebsite"> 
      <ScrollToTop />
      
      <div className="min-h-screen bg-gray-50 flex flex-col relative">
        {isLoading && <PageLoader />}
  
        <Navbar />
  
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/industries" element={<Industries/>} />
            <Route path="/discover" element={<DiscoverUs/>} />
            <Route path="/career" element={<CareerPage/>} />
            <Route path="/ourwork" element={<OurWork/>} />
          </Routes>
        </main>
  
        <Footer />
      </div>
    </Router>
  );
}