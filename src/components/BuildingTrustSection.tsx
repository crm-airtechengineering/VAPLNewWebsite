import React from 'react';

interface StatItem {
  id: number;
  icon: string;
  value: string;
  label: string;
  alt: string;
}

const BuildingTrustSection: React.FC = () => {
  // Data array for the stats cards
  const stats: StatItem[] = [
    {
      id: 1,
      icon: 'bag.svg',
      value: '21+',
      label: 'Years of Experience',
      alt: 'Experience Icon',
    },
    {
      id: 2,
      icon: 'repeat.svg',
      value: '65,000+',
      label: 'HP Delivered',
      alt: 'Repeat Orders Icon',
    },
    {
      id: 3,
      icon: 'projects.svg',
      value: '10,000+',
      label: 'Projects Completed',
      alt: 'Projects Icon',
    },
    {
      id: 4,
      icon: 'clock.svg',
      value: '120+',
      label: 'Inhouse Experts',
      alt: 'Safe Man Hours Icon',
    },
  ];

  // Helper to resolve the correct path for Vite
  const getIconPath = (iconName: string) => {
    const base = import.meta.env.BASE_URL;
    // Cleans up the path to ensure no double slashes //
    const cleanBase = base.endsWith('/') ? base : `${base}/`;
    return `${cleanBase}icons/${iconName}`;
  };

  return (
    <section 
      className="w-full py-20 " 
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#4A3F35] mb-4">
          Building Trust Through Excellence
        </h2>

        {/* Subtitle */}
        <p className="text-gray-700 max-w-2xl mx-auto mb-16 text-lg font-semibold">
          Our commitment to excellence has earned us the trust of hundreds of clients
          across various industries.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              {/* Icon Container */}
              <div className="w-20 h-20 bg-[#f8be4c] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 duration-300">
                <img
                  src={getIconPath(stat.icon)}
                  className="w-10 h-10 object-contain"
                  alt={stat.alt}
                  onError={(e) => {
                    // This helps debug if the path is still wrong
                    console.error(`Failed to load icon: ${stat.icon}`);
                  }}
                />
              </div>

              {/* Stat Value */}
              <h3 className="text-4xl font-bold text-[#1a2c6d] mt-4">
                {stat.value}
              </h3>

              {/* Stat Label */}
              <p className="text-gray-600 mt-1 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildingTrustSection;