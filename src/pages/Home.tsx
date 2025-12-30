import { VideoHero } from "../components/VideoHero"
import { LogoMarquee } from "../components/LogoMarquee"; // Import the new marquee
import { WhyChooseSection } from '../components/WhyChooseSection';
import { IndustriesSection } from '../components/IndustriesSection';
import { HistorySection } from '../components/HistorySection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import BuildingTrustSection from '../components/BuildingTrustSection';

export function Home() {
  return (
    <div id="home" className="min-h-screen bg-gray-50 flex flex-col relative">
        {/* Hero Section */}
        <VideoHero />
        
        {/* Marquee Section as shown in the video */}
        <LogoMarquee />

        {/* Building Trust Section */}
        <BuildingTrustSection/>

        {/* Why Choose Us Section */}
        <WhyChooseSection />

        {/* Industries Section */}
        <IndustriesSection />

        {/* History Section */}
        <HistorySection />

        <TestimonialsSection/>
    </div>
  );
}