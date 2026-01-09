import React from 'react';
import { Card, CardContent } from '../components/ui';
import { CheckCircle2, MapPin } from 'lucide-react';

// Import images
import Project1 from '../assets/IndustrialHVAC.jpg'; 
import HeroBg from '../assets/projectsectionimage.jpg'; // Import your hero background

export function OurWork() {
  const projects = [
    {
      title: 'Pharmaceutical Cleanroom ISO 7',
      category: 'Cleanroom',
      location: 'Pune, Maharashtra',
      description: 'Design and installation of a 5,000 sq. ft. cleanroom facility with advanced HEPA filtration and pressure control.',
      image: Project1,
      highlights: ['ISO 7 Certified', 'Temperature Control', 'WHO-GMP Compliant']
    },
    {
      title: 'Automotive Paint Shop HVAC',
      category: 'Industrial HVAC',
      location: 'Chakan Industrial Area',
      description: 'High-capacity Air Handling Units (AHU) installed for a leading automobile manufacturer to maintain humidity.',
      image: Project1,
      highlights: ['Custom AHU', 'Humidity Control', 'Energy Efficient']
    },
    {
      title: 'Food Processing Turnkey Plant',
      category: 'Turnkey Solutions',
      location: 'Ahmedabad, Gujarat',
      description: 'End-to-end air technology solution from design to execution including cold storage and ventilation.',
      image: Project1,
      highlights: ['Turnkey Execution', 'Cold Storage', 'In-house Design']
    },
    {
      title: 'Luxury Hotel Centralized VRV',
      category: 'Turnkey Solutions',
      location: 'Mahabaleshwar, Maharashtra',
      description: 'Comprehensive VRV/VRF system installation for a 120-room luxury resort focusing on silent operation and energy savings.',
      image: Project1,
      highlights: ['Silent Operation', 'Centralized Control', '20% Energy Savings']
    },
    {
      title: 'Electronic SMT Line Cleanroom',
      category: 'Cleanroom',
      location: 'Bangalore, Karnataka',
      description: 'Specialized ESD-safe cleanroom environment designed for high-precision SMT electronic assembly lines.',
      image: Project1,
      highlights: ['ESD Protection', 'Class 10,000', '24/7 Monitoring']
    },
    {
      title: 'High-Rise Residential Ventilation',
      category: 'Industrial HVAC',
      location: 'Mumbai, Maharashtra',
      description: 'Advanced staircase pressurization and basement smoke extraction systems for a 40-story residential tower.',
      image: Project1,
      highlights: ['Fire Safety Compliant', 'Automated Dampers', 'High Static Fans']
    }
  ];

  return (
    <section id="work" className="min-h-screen bg-gray-200">
      
      {/* 1. Header Section with Background Image */}
      <div className="relative py-32 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HeroBg} 
            alt="Engineering Hero" 
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay - using a gradient for a professional look */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2c6d]/90 to-[#1a2c6d]/70"></div>
        </div>

        {/* Text Content Layer */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Our Engineering Excellence
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Showcasing our most challenging and successful projects across various industrial sectors in India.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        
        {/* 2. Simplified Title Bar */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mb-16 border border-gray-100 text-center">
          <h3 className="text-3xl font-bold text-red-400">Our Projects</h3>
          <div className="w-20 h-1.5 bg-[#f8be4c] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 3. Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 group bg-white rounded-3xl">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-[#f8be4c] text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {project.category}
                </div>
              </div>

              <CardContent className="p-8">
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                  <MapPin className="w-4 h-4 text-[#E53935]" />
                  {project.location}
                </div>
                <h3 className="text-xl font-bold text-[#1a2c6d] mb-4 group-hover:text-[#E53935] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="space-y-2 border-t pt-6">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#4A3F35]">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}