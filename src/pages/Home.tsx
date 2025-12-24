import { VideoHero } from "../components/VideoHero"
import { WhyChooseSection } from '../components/WhyChooseSection';
import { IndustriesSection } from '../components/IndustriesSection';
import { HistorySection } from '../components/HistorySection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import BuildingTrustSection from '../components/BuildingTrustSection';

export function Home() {
  return (
    // Removed <Router> from here
    <div id="home" className="min-h-screen bg-gray-50 flex flex-col relative">
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
    </div>
    // Removed </Router> from here
  );
}