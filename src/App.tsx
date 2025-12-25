import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageLoader } from './components/PageLoader';

// Import your page components
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/ContactUs';
import Solutions from './pages/Solutions';
import { Industries } from './pages/Industries';
import DiscoverUs from './pages/DiscoverUs';
import CareerPage from './pages/CareerPage';

// --- HELPER COMPONENT: Handles auto-scrolling to sections (#id) ---
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is no hash (like #openings), scroll to the very top
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // If there is a hash, wait a tiny bit for the page to render, then scroll to the ID
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
    <Router>
      {/* ScrollToTop must be inside the Router */}
      <ScrollToTop />
      
      <div className="min-h-screen bg-gray-50 flex flex-col relative">
        {/* Loader Overlay */}
        {isLoading && <PageLoader />}

        {/* Navbar stays here - it will show on all pages */}
        <Navbar />

        {/* Routing Logic */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/industries" element={<Industries/>} />
            <Route path="/discover" element={<DiscoverUs/>} />
            <Route path="/career" element={<CareerPage/>} />
          </Routes>
        </main>

        {/* Footer stays here - it will show on all pages */}
        <Footer />
      </div>
    </Router>
  );
}