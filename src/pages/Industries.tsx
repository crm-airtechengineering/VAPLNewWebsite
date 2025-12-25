import { 
  Building2, 
  ShoppingBag, 
  Stethoscope, 
  GraduationCap, 
  Landmark, 
  Factory,
  ChevronRight
} from 'lucide-react';

export function Industries() {
  const industries = [
    {
      id: 'real-estate',
      icon: Building2,
      name: 'Real Estate',
      description: 'Innovative HVAC and climate control solutions for luxury residential complexes, commercial towers, and smart townships. We focus on energy efficiency and seamless integration with building management systems.',
      stats: '500+ Projects Completed',
      features: ['Centralized Cooling', 'Smart Automation', 'Energy Audits']
    },
    {
      id: 'retail-ecommerce',
      icon: ShoppingBag,
      name: 'Retail & E-commerce',
      description: 'Creating comfortable shopping experiences through precise temperature control. We provide specialized ventilation for large warehouses and high-traffic retail outlets to ensure product longevity and customer comfort.',
      stats: '200+ Retail Hubs',
      features: ['Warehouse Ventilation', 'Comfort Cooling', '24/7 Monitoring']
    },
    {
      id: 'healthcare',
      icon: Stethoscope,
      name: 'Healthcare',
      description: 'Critical air filtration and contamination control for hospitals and laboratories. Our systems adhere to strict medical standards, ensuring sterile environments for operating theaters and patient wards.',
      stats: '50+ Hospitals Served',
      features: ['HEPA Filtration', 'Negative Pressure Rooms', 'Cleanroom Tech']
    },
    {
      id: 'education',
      icon: GraduationCap,
      name: 'Education',
      description: 'Optimizing learning environments with quiet, efficient air conditioning and fresh air systems. We help schools and universities maintain healthy indoor air quality to improve student focus.',
      stats: '100+ Institutions',
      features: ['Low-Noise Systems', 'Fresh Air Units', 'Multi-zone Control']
    },
    {
      id: 'finance-banking',
      icon: Landmark,
      name: 'Finance & Banking',
      description: 'Reliable climate control for data centers and banking hubs. We ensure your servers and critical financial infrastructure remain at optimal temperatures to prevent downtime.',
      stats: '75+ Banking Hubs',
      features: ['Precision Cooling', 'Redundant Systems', 'Data Center HVAC']
    },
    {
      id: 'manufacturing',
      icon: Factory,
      name: 'Manufacturing',
      description: 'Heavy-duty industrial air solutions for factories and assembly lines. We specialize in heat extraction, dust collection, and process cooling for large-scale manufacturing units.',
      stats: '150+ Industrial Facilities',
      features: ['Process Cooling', 'Exhaust Systems', 'Dust Collection']
    },
  ];

  return (
    <div className="bg-white">
      {/* --- HERO / HEADER --- */}
      <section className="bg-[#1a2c6d] py-24 text-center text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Specialized engineering expertise tailored to the unique climate and 
            ventilation requirements of every sector.
          </p>
        </div>
      </section>

      {/* --- DETAILED SECTIONS --- */}
      {industries.map((industry, index) => {
        const Icon = industry.icon;
        // Alternate background colors and layout direction
        const isEven = index % 2 === 0;

        return (
          <section 
            key={industry.id} 
            id={industry.id} 
            className={`py-24 scroll-mt-20 ${isEven ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                
                {/* Visual Side */}
                <div className="flex-1 w-full">
                  <div className={`aspect-video rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl ${isEven ? 'bg-blue-600' : 'bg-[#f8be4c]'}`}>
                    <Icon className="w-32 h-32 text-white/20 absolute transform -rotate-12 -right-4" />
                    <Icon className="w-24 h-24 text-white relative z-10" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-1 bg-[#f8be4c]"></div>
                    <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Industrial Expertise</span>
                  </div>
                  
                  <h2 className="text-4xl font-bold text-[#1a2c6d]">{industry.name}</h2>
                  
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
                      <span className="text-3xl font-black text-[#1a2c6d]">{industry.stats}</span>
                      <span className="text-gray-500 font-medium">Delivering excellence across the sector</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        );
      })}

      {/* --- CALL TO ACTION --- */}
      <section className="py-20 bg-[#1a2c6d] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Need a specialized solution for your industry?</h2>
          <a 
            href="/contact" 
            className="inline-block bg-[#f8be4c] text-[#1a2c6d] font-bold px-10 py-4 rounded-xl hover:scale-105 transition-transform"
          >
            Consult Our Experts
          </a>
        </div>
      </section>
    </div>
  );
}