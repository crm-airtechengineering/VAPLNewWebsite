import { Card, CardHeader, CardTitle, CardContent } from '../components/ui';
import { Target, Users, Award, ShieldCheck, Factory, History, Camera } from 'lucide-react';
import Industrial from '../assets/IndustrialHVAC.jpg';
import TeamCollab from '../assets/aitech-team.jpg';

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
                <img 
                  src={Industrial} 
                  alt="Industrial HVAC Installation" 
                  className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f8be4c] rounded-full -z-10"></div>
          </div>
        </div>

        {/* 4. Leadership Team Section */}
        <section id="team" className="w-full py-12 mb-20 scroll-mt-28 bg-white rounded-3xl shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#483630] mb-4">Our Leadership Team</h2>
              <div className="w-20 h-1 bg-[#f8be4c] mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Driven by experts with decades of experience in HVAC and industrial air technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((member) => (
                <div 
                  key={member} 
                  className="bg-white p-6 rounded-3xl border-2 border-gray-100 text-center group hover:shadow-xl hover:border-[#f8be4c] transition-all duration-300"
                >
                  <div className="w-24 h-24 bg-gray-50 rounded-full mx-auto mb-4 overflow-hidden border-2 border-gray-100 group-hover:border-[#f8be4c]/30">
                  </div>
                  <h3 className="text-lg font-bold text-[#4A3F35]">Executive Director {member}</h3>
                  <p className="text-blue-700 font-semibold mb-2 text-xs uppercase tracking-wider">Technical Leadership</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Expertise in industrial HVAC design and project execution excellence.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
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

        {/* 6. Life at Vakharia Airtech Section */}
        <section id="life" className="w-full py-16 mb-20 bg-white rounded-3xl shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-[#483630] mb-4">Life at Vakharia Airtech</h2>
                <div className="w-20 h-1 bg-[#f8be4c] mb-6"></div>
                <p className="text-gray-600 text-lg">
                  Beyond engineering excellence, we are a community of innovators. Our culture 
                  thrives on collaboration, continuous learning, and shared success.
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2 text-gray-400 font-medium">
                <Camera className="w-5 h-5" />
                <span>Our Moments</span>
              </div>
            </div>

            {/* UPDATED GRID: Removed auto-rows to prevent cutting and used object-contain */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="sm:col-span-2 lg:col-span-2 bg-gray-50 rounded-2xl overflow-hidden relative group border border-gray-100">
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={TeamCollab} 
                    alt="Vakharia Airtech Team Collaboration" 
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Subtle overlay appearing only on hover to keep image clear by default */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-10" />
                <div className="absolute bottom-4 left-4 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 p-2 rounded-lg backdrop-blur-sm">
                  <p className="font-bold text-sm">Team Collaboration</p>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-2xl min-h-[200px] flex items-center justify-center italic text-gray-400 border border-gray-100 text-center p-4">
                Workshop Session
              </div>
              <div className="bg-gray-100 rounded-2xl min-h-[200px] flex items-center justify-center italic text-gray-400 border border-gray-100 text-center p-4">
                Annual Meet
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}