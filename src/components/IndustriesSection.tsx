import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from "framer-motion"; // 1. Import Framer Motion


import foodImage from '../assets/industriesimages/Food.png';
import showroomImage from '../assets/industriesimages/Showroom.jpg';
import buildingImage from '../assets/industriesimages/Building.jpg';
import warehouseImage from '../assets/industriesimages/Warehouse.png';
import datacentreImage from '../assets/industriesimages/Datacenter.png';
import officeindustriesImage from '../assets/industriesimages/Officeindustries.png';

interface IndustryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText?: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ 
  title, 
  description, 
  imageUrl,
  buttonText = 'Case Study'
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-none shadow-md">
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-3 text-xl font-bold text-blue-900">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 min-h-[80px]">
          {description}
        </p>
        <Button 
          variant="outline" 
          className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all flex items-center justify-center"
        >
          {buttonText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export const IndustriesSection: React.FC = () => {
  const industries = [
    { 
      title: 'Food Industries', 
      description: 'Hygiene-centric climate control solutions that adhere to strict FDA/FSSAI standards. We provide specialized ventilation to prevent contamination and maintain food freshness across processing units.', 
      imageUrl: foodImage 
    },
    { 
      title: 'Residential Buildings', 
      description: 'Sophisticated HVAC integration for luxury high-rises and townships. Our systems prioritize silent operation, aesthetic integration, and smart temperature zoning for premium living comfort.', 
      imageUrl: buildingImage 
    },
    { 
      title: 'Data Centers & Servers', 
      description: 'High-precision cooling systems designed for 100% uptime. We implement advanced hot/cold aisle containment and redundant cooling loads to safeguard sensitive hardware from thermal stress.', 
      imageUrl: datacentreImage 
    },
    { 
      title: 'Showrooms', 
      description: 'Creating inviting retail experiences through optimized air distribution. Our VRF systems offer modular control, ensuring consistent comfort for customers while maintaining high energy efficiency.', 
      imageUrl: showroomImage 
    },
    { 
      title: 'Warehouses', 
      description: 'Heavy-duty ventilation and large-scale temperature management for industrial storage. We focus on high air-exchange rates and humidity control to protect inventory integrity.', 
      imageUrl: warehouseImage 
    },
    { 
      title: 'Office Industries', 
      description: 'Comprehensive workspace climate management that boosts productivity. We deploy intelligent IAQ sensors and energy-efficient VRV systems tailored for modern corporate infrastructure.', 
      imageUrl: officeindustriesImage 
    }
  ];

  return (
    <section id="industries" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
          className="text-[#4A3F35] mb-4 md:text-4xl text-3xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Industries We Serve
          </motion.h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>

          <motion.p 
          className="text-gray-600 max-w-3xl mx-auto md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} // Continuous effect
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Delivering precision-engineered HVAC solutions across diverse sectors. From mission-critical cooling to sustainable climate comfort, we adapt to the unique engineering requirements of your industry.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
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