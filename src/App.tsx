import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageLoader } from './components/PageLoader';

// Import your page components
import { Home } from './pages/Home';
import { About } from './pages/About'; // Ensure this is exported from your About page
import { Contact } from './pages/ContactUs';
import Solutions from './pages/Solutions';
import { Industries } from './pages/Industries';
import DiscoverUs from './pages/DiscoverUs';


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
            

          </Routes>
        </main>

        {/* Footer stays here - it will show on all pages */}
        <Footer />
      </div>
    </Router>
  );
}