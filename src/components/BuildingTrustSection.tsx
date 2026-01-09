import React from 'react';
import { motion } from 'framer-motion'; // 1. Import Framer Motion

interface StatItem {
  id: number;
  icon: string;
  value: string;
  label: string;
  alt: string;
}

const BuildingTrustSection: React.FC = () => {
  const stats: StatItem[] = [
    { id: 1, icon: 'bag.svg', value: '21+', label: 'Years of Experience', alt: 'Experience Icon' },
    { id: 2, icon: 'repeat.svg', value: '65,000+', label: 'HP Delivered', alt: 'Repeat Orders Icon' },
    { id: 3, icon: 'projects.svg', value: '10,000+', label: 'Projects Completed', alt: 'Projects Icon' },
    { id: 4, icon: 'clock.svg', value: '120+', label: 'Inhouse Experts', alt: 'Safe Man Hours Icon' },
  ];

  const getIconPath = (iconName: string) => {
    const base = import.meta.env.BASE_URL;
    const cleanBase = base.endsWith('/') ? base : `${base}/`;
    return `${cleanBase}icons/${iconName}`;
  };

  // 2. Define animation variants for cleaner code
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section className="w-full py-20 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Section Title: Slides up */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-[#4A3F35] mb-4"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, amount: 0.5 }} // Trigger every time it's 50% visible
        >
          Building Trust Through Excellence
        </motion.h2>

        {/* Subtitle: Slides up with a small delay */}
        <motion.p 
          className="text-gray-700 max-w-2xl mx-auto mb-16 text-lg font-semibold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our commitment to excellence has earned us the trust of hundreds of clients
          across various industries.
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id} 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              // Staggered effect based on index (0.1s, 0.2s, 0.3s, 0.4s)
              transition={{ duration: 0.6, delay: index * 0.1 }} 
            >
              {/* Icon Container */}
              <div className="w-20 h-20 bg-[#f8be4c] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 duration-300">
                <img
                  src={getIconPath(stat.icon)}
                  className="w-10 h-10 object-contain"
                  alt={stat.alt}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildingTrustSection;