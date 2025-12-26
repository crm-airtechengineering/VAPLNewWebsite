//import React from 'react';
import { HistorySection } from "../components/HistorySection";
import TestimonialsSection from "../components/TestimonialsSection";
import { WhyChooseSection } from "../components/WhyChooseSection";

const DiscoverUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen w-full">
      
      {/* Hero Section */}
      <section className="w-full bg-[#CA9584] pt-24 pb-12 text-black text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Vakharia Airtech</h1>
          <p className="text-blue-100 max-w-3xl mx-auto text-lg px-6 leading-relaxed">
            A legacy of engineering excellence, built on a foundation of trust and technical innovation since 1996.
          </p>
        </div>
      </section>

      {/* REMOVED space-y-24 from the wrapper below to allow 
          individual sections to control their own tighter spacing.
      */}
      <div className="max-w-full mx-auto">
        
        {/* History Section */}
        <div id="history" className="w-full scroll-mt-28 bg-white">
            <HistorySection />
        </div>

        {/* Why Choose Us Section - Reduced vertical padding if possible inside component */}
        <div id="why-choose" className="w-full scroll-mt-28 bg-gray-50">
            <WhyChooseSection />
        </div>

        {/* Our Team Section - Changed py-24 to py-12 */}
        <section id="team" className="w-full py-12 scroll-mt-28 bg-white">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2c6d] mb-4">Our Leadership Team</h2>
              <div className="w-20 h-1 bg-[#f8be4c] mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Driven by experts with decades of experience in HVAC and industrial air technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((member) => (
                <div 
                  key={member} 
                  className="bg-white p-6 rounded-3xl border-2 border-gray-100 text-center group hover:shadow-xl hover:border-[#f8be4c] transition-all duration-300"
                >
                  <div className="w-24 h-24 bg-gray-50 rounded-full mx-auto mb-4 overflow-hidden border-2 border-gray-100 group-hover:border-[#f8be4c]/30">
                  </div>
                  <h3 className="text-lg font-bold text-[#4A3F35]">Executive Director {member}</h3>
                  <p className="text-blue-700 font-semibold mb-2 text-xs uppercase tracking-wider">Technical Leadership</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Expertise in industrial HVAC design and project execution excellence.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section - Changed py-24 to py-12 */}
        <section id="certifications" className="w-full py-12 scroll-mt-28 bg-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-200">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-[#1a2c6d] mb-4">Quality & Compliance</h2>
                  <p className="text-gray-600 mb-6 text-base leading-relaxed">
                    We adhere to the highest international standards, ensuring safety and quality across all industrial projects.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['ISO 9001:2015 Certified', 'MSME Registered Unit', 'NSIC Compliance', 'Safety Excellence Awards'].map((cert) => (
                      <div key={cert} className="flex items-center text-gray-700 text-sm font-semibold">
                        <div className="w-6 h-6 bg-[#f8be4c] rounded-md flex items-center justify-center mr-3 shadow-sm">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex-1 w-full grid grid-cols-2 gap-4">
                  <div className="aspect-video bg-gray-50 border border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400">
                    <span className="font-bold">ISO 9001</span>
                  </div>
                  <div className="aspect-video bg-gray-50 border border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400">
                    <span className="font-bold">OHSAS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - Removed extra padding around component */}
        <div id="testimonials" className="w-full scroll-mt-28 bg-white">
            <TestimonialsSection />
        </div>

      </div>
    </div>
  );
};

export default DiscoverUs;