import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { VideoHero } from './components/VideoHero';
import { WhyChooseSection } from './components/WhyChooseSection';
import { IndustriesSection } from './components/IndustriesSection';
import { HistorySection } from './components/HistorySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PageLoader } from './components/PageLoader';

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
      {/* Video Carousel Section */}
      {/* <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white py-20">
        <VideoCarousel />
      </section> */}

      <section className="w-full py-20 bg-gradient-to-b from-[#c8f7ff] to-white" id="about">
        <div className="max-w-7xl mx-auto px-6 text-center">
    
    {/* Section Title */}
    <h2 className="text-3xl md:text-4xl font-sans-serif font-bold text-[#4A3F35] mb-4">
      Building Trust Through Excellence
    </h2>

    {/* Subtitle */}
    <p className="text-gray-700 max-w-2xl mx-auto mb-16 text-lg font-semibold">
      Our commitment to excellence has earned us the trust of hundreds of clients
      across various industries.
    </p>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
      
      {/* Card 1 */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-[#f8be4c] rounded-full flex items-center justify-center shadow-lg">
          <img 
            src={`${import.meta.env.BASE_URL}icons/projects.svg`}
            className="w-10 h-10 object-contain" 
            alt="Projects Icon"
          />
        </div>
        <h3 className="text-4xl font-bold text-[#1a2c6d] mt-4">1000+</h3>
        <p className="text-gray-600 mt-1">Projects Delivered</p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-[#f8be4c] rounded-full flex items-center justify-center shadow-lg">
          <img 
            src={`${import.meta.env.BASE_URL}icons/bag.svg`}
            className="w-10 h-10 object-contain" 
            alt="Experience Icon"
          />
        </div>
        <h3 className="text-4xl font-bold text-[#1a2c6d] mt-4">28+</h3>
        <p className="text-gray-600 mt-1">Years of Expertise</p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-[#f8be4c] rounded-full flex items-center justify-center shadow-lg">
          <img 
            src={`${import.meta.env.BASE_URL}icons/repeat.svg`}
            className="w-10 h-10 object-contain" 
            alt="Repeat Orders Icon"
          />
        </div>
        <h3 className="text-4xl font-bold text-[#1a2c6d] mt-4">65%</h3>
        <p className="text-gray-600 mt-1">Repeat Orders</p>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-[#f8be4c] rounded-full flex items-center justify-center shadow-lg">
          <img 
            src={`${import.meta.env.BASE_URL}icons/clock.svg`}
            className="w-10 h-10 object-contain" 
            alt="Safe Man Hours Icon"
          />
        </div>
        <h3 className="text-4xl font-bold text-[#1a2c6d] mt-4">60M+</h3>
        <p className="text-gray-600 mt-1">Safe Working Hours</p>
      </div>

    </div>
  </div>
</section>

      {/* Why Choose Us Section */}
      <WhyChooseSection />

      {/* Industries Section */}
      <IndustriesSection />

      {/* History Section */}
      <HistorySection />

     <TestimonialsSection/>

      {/* <section id="portfolio" className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center px-4">
          <h2 className="text-gray-900 mb-4">Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our latest projects and see the results we've achieved for our clients.
          </p>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <h2 className="text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with us to discuss how we can help you achieve your goals.
          </p>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}