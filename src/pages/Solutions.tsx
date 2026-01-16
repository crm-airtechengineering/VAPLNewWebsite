import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import HeroImage from '../assets/solutionshero.jpg';

interface Solution {
  id: string;
  title: string;
  description: string;
  features: string[];
}

const Solutions: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const solutionData: Solution[] = [
    {
      id: "vrv",
      title: "VRV and Centralized Air Conditioning",
      description: "Variable Refrigerant Volume (VRV) systems offer unparalleled flexibility for multi-zone cooling. Perfect for modern offices and hotels, these systems provide individual control to different rooms from a single outdoor unit.",
      features: ["Independent Zone Control", "Space-Saving Outdoor Units", "Inverter Technology", "Quiet Indoor Operation"]
    },
    {
      id: "cleanroom",
      title: "Clean and Controlled Rooms",
      description: "We design and execute turnkey cleanroom environments tailored for high-precision industries. Our solutions focus on maintaining strict particulate control, pressure differentials, and sterile conditions to meet global standards.",
      features: ["ISO 14644-1 Compliance", "Modular Wall & Ceiling Panels", "HEPA/ULPA Filtration Systems", "Pressure & Humidity Monitoring"]
    },
    {
      id: "chillers",
      title: "Chillers",
      description: "Our industrial chilling solutions are engineered for heavy-duty process cooling and large-scale comfort cooling. We provide energy-efficient systems that ensure consistent temperature management for critical machinery and buildings.",
      features: ["Air-Cooled & Water-Cooled Variants", "Screw and Scroll Compressors", "Low Noise Operations", "Custom Heat Exchangers"]
    },
    {
      id: "cold-storage",
      title: "Cold Room and Storage Solutions",
      description: "From walk-in freezers to large-scale refrigerated warehouses, we provide specialized cold storage solutions. Our systems are designed to maintain integrity for perishable goods, pharmaceuticals, and chemical storage.",
      features: ["PUF Insulated Panels", "-40°C to +15°C Range", "Remote Monitoring", "Blast Freezing"]
    },
    {
      id: "fresh-air",
      title: "Fresh Air Systems",
      description: "Ensuring Indoor Air Quality (IAQ) is vital for health and productivity. Our Fresh Air systems (TFA/FAHU) introduce filtered outside air while recovering energy from exhaust air to minimize operational costs.",
      features: ["Treated Fresh Air Units (TFA)", "Energy Recovery Ventilators (ERV)", "Multi-stage Air Filtration", "CO2 Sensor Integration"]
    },
    {
      id: "staircase-pressurization", 
      title: "Lift and Staircase Pressurization",
      description: "Critical life-safety systems designed to keep escape routes free of smoke during fire emergencies. We engineer high-pressure air systems that prevent smoke ingress into stairwells and lift shafts, ensuring safe evacuation in high-rise structures.",
      features: ["Automated Pressure Sensors", "High-Static Blowers", "Fire Alarm Integration", "NBC & Local Fire Norms Compliance"]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen overflow-x-hidden">
      
      {/* Updated Header Section with Background Image */}
      {/* Header Section with Natural Image Colors */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat pt-40 pb-24 text-white"
        style={{ 
          // Uses a neutral black gradient instead of blue to maintain image colors
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url(${HeroImage})` 
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl text-left">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Engineering Precision <br className="hidden md:block" /> Environments
            </motion.h1>

            <motion.p 
              className="text-gray-100 text-lg md:text-xl max-w-2xl drop-shadow-md"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Advanced HVAC and Airtech solutions tailored to meet the rigorous demands of modern industry.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {solutionData.map((solution, index) => {
            const fromLeft = index % 2 === 0;

            return (
              <motion.section 
                key={solution.id} 
                id={solution.id}
                initial={{ opacity: 0, x: fromLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row transition-all hover:shadow-xl hover:border-blue-200 scroll-mt-32"
              >
                {/* Left Design Stripe */}
                <div className="w-full md:w-3 bg-[#f8be4c] transition-all group-hover:w-5"></div>
                
                <div className="p-8 md:p-12 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <h2 className="text-3xl font-bold text-[#1a2c6d]">{solution.title}</h2>
                    <span className="mt-2 md:mt-0 text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                      Expert Solution
                    </span>
                  </div>

                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {solution.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3 text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100">
                        <div className="w-2 h-2 bg-[#f8be4c] rounded-full"></div>
                        <span className="font-medium text-[15px]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-[#1a2c6d] font-bold hover:text-blue-800 transition-colors group/btn"
                  >
                    Enquire about this solution
                    <svg className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Solutions;