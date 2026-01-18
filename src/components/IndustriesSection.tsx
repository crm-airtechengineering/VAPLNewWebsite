import React from 'react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from "framer-motion";

// Import your assets
import foodImage from '../assets/industriesimages/Food.png';
import showroomImage from '../assets/industriesimages/Showroom.jpg';
import buildingImage from '../assets/industriesimages/Building.jpg';
import officeindustriesImage from '../assets/industriesimages/Officeindustries.PNG';
import healthcareImage from '../assets/healthcare.jpg'
import ManufacturingImage from '../assets/manufacturing.jpg';
import EducationImage from '../assets/Education.jpg';
import BankingImage from '../assets/Banking.jpg';

interface IndustryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ 
  title, 
  description, 
  imageUrl,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered UX effect
    >
      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group border-none shadow-md bg-white">
        <div className="relative h-40 overflow-hidden">
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <CardContent className="p-5">
          {/* text-lg fits better than text-xl in a 4-column grid */}
          <h3 className="mb-2 text-lg font-bold text-[#4A3F35] group-hover:text-[#f8be4c] transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-4">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const IndustriesSection: React.FC = () => {
  const industries = [
    { 
      title: 'High Rise Buildings', 
      description: 'Sophisticated HVAC integration for luxury high-rises. Silent operation and smart temperature zoning for premium comfort.', 
      imageUrl: buildingImage 
    },
    { 
      title: 'Luxurious Bunglows', 
      description: 'Hygiene-centric climate control solutions adhering to strict FDA/FSSAI standards. Specialized ventilation to prevent contamination.', 
      imageUrl: foodImage 
    },
    {
      title: 'Healthcare',
      description: 'Critical air filtration and contamination control for hospitals. Ensuring sterile environments with HEPA filtration.',
      imageUrl: healthcareImage 
    },
    {
      title: 'Education',
      description: 'Optimizing learning environments with quiet, efficient air conditioning and healthy indoor air quality.',
      imageUrl: EducationImage 
    },
    {
      title: 'Finance & Banking',
      description: 'Reliable climate control for data centers and banking hubs ensuring servers remain at optimal temperatures.',
      imageUrl: BankingImage 
    },
    {
      title: 'Manufacturing',
      description: 'Heavy-duty industrial air solutions for factories focusing on heat extraction and process cooling.',
      imageUrl: ManufacturingImage 
    },
    {
      title: 'Food Industries',
      description: 'Hygiene-centric climate control solutions adhering to strict FDA/FSSAI standards for processing and packaging units.',
      imageUrl: foodImage 
    },
    { 
      title: 'Office Industries', 
      description: 'Comprehensive workspace climate management using intelligent IAQ sensors and energy-efficient VRV systems.', 
      imageUrl: officeindustriesImage 
    },
  ];

  return (
    <section id="industries" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            className="text-[#4A3F35] mb-4 md:text-4xl text-3xl font-bold tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Industries We Serve
          </motion.h2>

          <div className="w-20 h-1 bg-[#f8be4c] mx-auto mb-6"></div>

          <motion.p 
            className="text-gray-700 max-w-3xl text-lg font-medium mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Delivering precision-engineered HVAC solutions across diverse sectors.
          </motion.p>
        </div>

        {/* Responsive Grid Breakdown:
          - grid-cols-1: Mobile (1 card)
          - sm:grid-cols-2: Tablet (2 cards)
          - lg:grid-cols-4: Desktop (4 cards) 
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              index={index}
              title={industry.title}
              description={industry.description}
              imageUrl={industry.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;