import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import foodImage from '/src/assets/Food.png';
import showroomImage from '/src/assets/Showroom.jpg';
import buildingImage from '/src/assets/Building.jpg';
import warehouseImage from '/src/assets/Warehouse.png';
import datacentreImage from '/src/assets/Datacenter.png';
import officeindustriesImage from '/src/assets/Officeindustries.png';
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
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-3 text-blue-900">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 min-h-[60px]">
          {description}
        </p>
        <Button 
          variant="outline" 
          className="w-full group-hover:bg-blue-600 group-hover:text-black group-hover:border-blue-600 transition-all"
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
      description: 'Precision-engineered climate control for food processing and storage, ensuring strict adherence to hygiene standards and preserving product freshness.',
      imageUrl: foodImage,
      buttonText: 'Learn More'
    },
    {
      title: 'Residential Buildings',
      description: 'Advanced HVAC solutions for luxury apartments and residential complexes, focusing on silent operation, energy efficiency, and smart air purification.',
      imageUrl: buildingImage,
      buttonText: 'Learn More'
    },
    {
      title: 'Data Centers & Servers',
      description: 'Mission-critical precision cooling designed for 24/7 reliability, preventing equipment overheating and optimizing Power Usage Effectiveness (PUE).',
      imageUrl: datacentreImage,
      buttonText: 'Learn More'
    },
    {
      title: 'Showrooms',
      description: 'Elegant climate solutions for high-end retail and showrooms that prioritize aesthetic integration while maintaining a comfortable experience for customers.',
      imageUrl: showroomImage,
      buttonText: 'Learn More'
    },
    {
      title: 'Warehouses',
      description: 'Large-scale ventilation and cooling systems engineered for massive logistical spaces, ensuring stable temperatures for inventory and staff productivity.',
      imageUrl: warehouseImage,
      buttonText: 'Learn More'
    },
    {
      title: 'Office Industries',
      description: 'Scalable VRV and VRF systems for modern workspaces, optimizing zone-based cooling to reduce energy costs and improve employee comfort.',
      imageUrl: officeindustriesImage,
      buttonText: 'Learn More'
    }
  ];

  return (
    <section id="industries" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#4A3F35] mb-4 md:text-4xl text-3xl font-bold">
            Delivering Excellence Through Expertise
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto md:text-lg ">
            Customized HVAC systems built to address the unique needs of various industries through advanced engineering and proven performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              title={industry.title}
              description={industry.description}
              imageUrl={industry.imageUrl}
              buttonText={industry.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
