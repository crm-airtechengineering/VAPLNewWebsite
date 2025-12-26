import { Card, CardHeader, CardTitle, CardContent } from '../components/ui';
import { Target, Users, Award, ShieldCheck, Factory, History } from 'lucide-react';
import Industrial from '../assets/IndustrialHVAC.jpg';

export function About() {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide high-performance, energy-efficient HVAC and Cleanroom solutions that ensure technical precision and environmental safety for industrial growth.',
    },
    {
      icon: History,
      title: 'Our Legacy',
      description: 'Established in 2004, we have nearly two decades of experience in executing complex turnkey air technology projects across India.',
    },
    {
      icon: ShieldCheck,
      title: 'Our Commitment',
      description: 'We adhere to global standards like ISO and WHO-GMP, ensuring every installation meets the highest safety and quality benchmarks.',
    },
  ];

  const stats = [
    { label: 'Years of Experience', value: '28+' },
    { label: 'Projects Completed', value: '200+' },
    { label: 'Expert Engineers', value: '50+' },
    { label: 'Industries Served', value: '12+' },
  ];

  return (
    <section id="about" className="min-h-screen bg-gray-200">
      {/* 1. Header Section */}
      <div className="bg-[#f6ac72] py-20 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pioneering Air Technology Since 2004
          </h2>
          <p className="text-xl text-[#1f1f1f] max-w-3xl mx-auto leading-relaxed">
            Vakharia Airtech is a premier engineering firm specializing in total turnkey solutions 
            for Cleanrooms, Industrial HVAC, and specialized Air Handling systems.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        {/* 2. Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white shadow-xl rounded-2xl p-8 mb-20 border border-gray-100">
          {stats.map((stat, index) => (
            <div key={index} className="text-center border-r last:border-none border-gray-100">
              <div className="text-3xl font-bold text-[#E53935]">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 3. Detailed Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Vakharia Airtech?</h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Based in Pune, we have evolved from a specialized HVAC contractor into a 
              full-service engineering partner. We understand that in industries like 
              Pharmaceuticals and Electronics, air quality isn't just about comfort—it's 
              about compliance and precision.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our in-house design team uses advanced thermal modeling and airflow simulations 
              to ensure that every Chiller, AHU, and Cold Room we install operates at peak 
              efficiency with minimal downtime.
            </p>
            <div className="flex gap-4">
               <div className="flex items-center gap-2 text-blue-800 font-bold">
                 <Factory className="w-5 h-5" /> In-House Fabrication
               </div>
               <div className="flex items-center gap-2 text-blue-800 font-bold">
                 <Users className="w-5 h-5" /> Expert Support
               </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium italic">
                  

                <img 
                  src={Industrial} 
                  alt="Industrial HVAC Installation" 
                  className="w-full h-full object-cover"
                />

                </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f8be4c] rounded-full -z-10"></div>
          </div>
        </div>

        {/* 4. Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-none shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
                <CardHeader>
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-gray-500" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}