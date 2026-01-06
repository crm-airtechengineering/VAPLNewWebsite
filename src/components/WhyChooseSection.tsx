import React from 'react';
import { Card, CardContent } from './ui/card';
import { 
  Settings, 
  Award, 
  Target, 
  TrendingUp, 
  Hammer, 
  CheckCircle, 
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="bg-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl cursor-default border-base">
      <CardContent className="flex flex-col items-center text-center p-8">
        {/* Icon Container with slight pulse effect on hover */}
        <div className="w-16 h-16 rounded-full bg-[#766b68] flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#4A3F35]">
          <div className="text-white">
            {icon}
          </div>
        </div>
        <h3 className="mb-3 text-xl font-bold text-[#4A3F35]">{title}</h3>
        
        <p className="text-gray-600 text-base leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export const WhyChooseSection: React.FC = () => {
  const features = [
    {
      icon: <Settings size={28} />,
      title: 'Precision-Engineered Systems',
      description: 'We design unique air pollution control and ventilation solutions tailored to the specific process requirements of your facility, ensuring optimal performance and energy efficiency.'
    },
    {
      icon: <Award size={28} />,
      title: 'Domain Expertise',
      description: 'With 37+ years in industrial HVAC, AHU, we bring deep technical knowledge and proven experience across industries, from pharmaceuticals to large-scale cooling applications.'
    },
    {
      icon: <Target size={28} />,
      title: 'Industry-Focused Approach',
      description: 'Customized solutions built for industries to address critical parameters such as temperature, humidity, air quality and cleanliness for any process.'
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'End-to-End Lifecycle Support',
      description: 'Our commitment extends beyond installation. We provide proactive maintenance, genuine spares, and expert technical support to ensure your systems operate at peak performance for years.'
    },
    {
      icon: <Hammer size={28} />,
      title: 'Design & Build Capability',
      description: 'Aqua Chill offers complete in-house design and turnkey execution, eliminating coordination gaps, ensuring with seamless project delivery under one roof.'
    },
    {
      icon: <CheckCircle size={28} />,
      title: 'Approved by Leading Consultants & Architects',
      description: 'Trusted and recommended by top MEP and HVAC consultants, architects, and engineers for quality of quality, safety, and technical compliance.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[#4A3F35] mb-4 text-3xl md:text-5xl font-bold">
            Why Choose Vakharia Airtech?
          </h2>
          <div className="w-24 h-1 bg-[#766b68] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-700 max-w-3xl text-lg font-medium mx-auto">
            Discover what sets us apart as the preferred HVAC solutions provider across diverse industries.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};