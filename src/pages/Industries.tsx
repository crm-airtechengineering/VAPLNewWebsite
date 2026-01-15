import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

// Relative path imports
import HighRiseImage from '../assets/real-estate.jpg'; 
import BungalowImage from '../assets/retail1.jpg'; 
import EducationImage from '../assets/Education.jpg';
import BankingImage from '../assets/Banking.jpg';
import ManufacturingImage from '../assets/manufacturing.jpg';
import HealthcareImage from '../assets/healthcare.jpg';

export function Industries() {
  const industries = [
    {
      id: 'high-rise-buildings',
      image: HighRiseImage,
      name: 'High Rise Buildings',
      description: 'Engineering high-performance HVAC systems for vertical landscapes. We specialize in staircase and lift-well pressurization, basement ventilation, and centralized cooling solutions.',
      stats: '300+ Towers Ventilated',
      features: ['Staircase Pressurization', 'Basement Smoke Exhaust', 'Energy-Efficient VRV']
    },
    {
      id: 'luxurious-bungalows',
      image: BungalowImage,
      name: 'Luxurious Bungalows',
      description: 'Bespoke climate control for high-end residential estates. Our solutions focus on ultra-quiet operation, architectural aesthetics, and smart automation.',
      stats: '150+ Premium Homes',
      features: ['Silent VRF Systems', 'Smart App Integration', 'Aesthetic Grill Designs']
    },
    {
      id: 'healthcare',
      image: HealthcareImage,
      name: 'Healthcare',
      description: 'Critical air filtration and contamination control for hospitals and laboratories. Our systems adhere to strict medical standards, ensuring sterile environments.',
      stats: '50+ Hospitals Served',
      features: ['HEPA Filtration', 'Negative Pressure Rooms', 'Cleanroom Tech']
    },
    {
      id: 'education',
      image: EducationImage,
      name: 'Education',
      description: 'Optimizing learning environments with quiet, efficient air conditioning and fresh air systems. We help institutions maintain healthy indoor air quality.',
      stats: '100+ Institutions',
      features: ['Low-Noise Systems', 'Fresh Air Units', 'Multi-zone Control']
    },
    {
      id: 'finance-banking',
      image: BankingImage,
      name: 'Finance & Banking',
      description: 'Reliable climate control for data centers and banking hubs. We ensure your servers and critical financial infrastructure remain at optimal temperatures.',
      stats: '75+ Banking Hubs',
      features: ['Precision Cooling', 'Redundant Systems', 'Data Center HVAC']
    },
    {
      id: 'manufacturing',
      image: ManufacturingImage,
      name: 'Manufacturing',
      description: 'Heavy-duty industrial air solutions for factories and assembly lines. We specialize in heat extraction, dust collection, and process cooling.',
      stats: '150+ Industrial Facilities',
      features: ['Process Cooling', 'Exhaust Systems', 'Dust Collection']
    },
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      {/* --- HERO / HEADER (Continuous Down to Up) --- */}
      <section className="bg-[#1a2c6d] py-24 text-center text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }} // Continuous
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Industries We Serve
          </motion.h1>
          
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }} // Continuous
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Specialized engineering expertise tailored to the unique climate and 
            ventilation requirements of every sector.
          </motion.p>
        </div>
      </section>

      {/* --- DETAILED SECTIONS (Continuous Side to Side) --- */}
      {industries.map((industry, index) => {
        const isEven = index % 2 === 0;

        return (
          <section 
            key={industry.id} 
            id={industry.id} 
            className={`py-24 scroll-mt-20 overflow-hidden ${isEven ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                
                {/* Visual Side: Comes from left if even, right if odd */}
                <motion.div 
                  className="flex-1 w-full"
                  initial={{ opacity: 0, x: isEven ? -150 : 150 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }} // Continuous
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className={`aspect-video rounded-3xl relative overflow-hidden shadow-2xl flex items-center justify-center ${isEven ? 'bg-blue-600' : 'bg-[#f8be4c]'}`}>
                    <img 
                      src={industry.image} 
                      alt={industry.name} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                    />
                  </div>
                </motion.div>

                {/* Content Side: Comes from right if even, left if odd */}
                <motion.div 
                  className="flex-1 space-y-6"
                  initial={{ opacity: 0, x: isEven ? 150 : -150 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }} // Continuous
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-1 bg-[#f8be4c]"></div>
                    <span className="text-red-500 font-bold uppercase tracking-widest text-sm">Expert Solutions</span>
                  </div>
                  
                  <h2 className="text-4xl font-bold text-[#483630]">{industry.name}</h2>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {industry.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-gray-700">
                        <ChevronRight className="w-5 h-5 text-[#f8be4c]" />
                        <span className="font-semibold">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                    <div className="inline-flex flex-col">
                      <span className="text-3xl font-black text-[#f0ad33]">{industry.stats}</span>
                      <span className="text-gray-500 font-medium">Delivering excellence across the sector</span>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </section>
        );
      })}

      {/* --- CALL TO ACTION (Continuous Up) --- */}
      <motion.section 
        className="pb-20 pt-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }} // Continuous
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-8">Need a specialized solution for your industry?</h2>
          <a 
            href="/contact" 
            className="inline-block bg-[#f8be4c] text-[#483730] font-bold px-10 py-4 rounded-xl hover:bg-[#eab308] transition-colors"
          >
            Consult Our Experts
          </a>
        </div>
      </motion.section>
    </div>
  );
}