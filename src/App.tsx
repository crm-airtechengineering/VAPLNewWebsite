import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { VideoHero } from './components/VideoHero';
import { WhyChooseSection } from './components/WhyChooseSection';
import { IndustriesSection } from './components/IndustriesSection';
import { HistorySection } from './components/HistorySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PageLoader } from './components/PageLoader';
import BuildingTrustSection from './components/BuildingTrustSection';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page loading; you can adjust the timeout as needed
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {isLoading && <PageLoader />}

      <Navbar />
      
      {/* Video Hero Section */}
      <VideoHero />
 
      {/* second Section */}
      <BuildingTrustSection/>

      {/* Why Choose Us Section */}
      <WhyChooseSection />

      {/* Industries Section */}
      <IndustriesSection />

      {/* History Section */}
      <HistorySection />

     <TestimonialsSection/>

      <Footer />
    </div>
  );
}