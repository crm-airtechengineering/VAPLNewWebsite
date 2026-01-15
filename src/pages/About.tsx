import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui';
import { Target, Users, Award, ShieldCheck, Factory, History, Camera, Send } from 'lucide-react';

// Asset imports
import ProfileImg from '../assets/profile.jpg';
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
    { label: 'Years of Experience', value: '21+' },
    { label: 'Projects Completed', value: '10,000+' },
    { label: 'Inhouse Experts', value: '120+' },
    { label: 'Industries Served', value: '12+' },
  ];

  const leadership = [
    { name: 'Executive Director 1', role: 'Technical Leadership', desc: 'Expertise in industrial HVAC design.' },
    { name: 'Executive Director 2', role: 'Strategic Operations', desc: 'Specializing in turnkey project management.' },
    { name: 'Executive Director 3', role: 'Engineering Excellence', desc: 'Focused on cleanroom standards and compliance.' },
    { name: 'Executive Director 4',role: 'Business Strategy',desc: 'Driving growth through client partnerships and sustainable air technology solutions.'}
  ];

  return (
    <section id="about" className="min-h-screen bg-gray-50 overflow-x-hidden">
      
      {/* 1. Header Section */}
      <div className="bg-[#f6ac72] py-24 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            Pioneering Air Technology Since 2004
          </motion.h2>
          <motion.p 
            className="text-xl text-[#1f1f1f] max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Vakharia Airtech is a premier engineering firm specializing in total turnkey solutions 
            for Cleanrooms, Industrial HVAC, and specialized Air Handling systems.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        
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
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Vakharia Airtech?</h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Based in Pune, we have evolved from a specialized HVAC contractor into a 
              full-service engineering partner.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our in-house design team uses advanced thermal modeling to ensure peak efficiency.
            </p>
            <div className="flex flex-wrap gap-6">
               <div className="flex items-center gap-2 text-blue-800 font-bold"><Factory className="w-5 h-5" /> In-House Fabrication</div>
               <div className="flex items-center gap-2 text-blue-800 font-bold"><Users className="w-5 h-5" /> Expert Support</div>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img src={Industrial} alt="HVAC" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f8be4c] rounded-full -z-10"></div>
          </motion.div>
        </div>

        {/* 4. Leadership Team Section */}
        <section id="team" className="w-full py-12 mb-20 bg-white rounded-[40px] shadow-sm p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-[#483630] mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
            >
              Our Leadership Team
            </motion.h2>
            <div className="w-20 h-1 bg-[#f8be4c] mx-auto mb-4"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center group hover:shadow-xl hover:border-[#f8be4c] transition-all">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img 
                    src={ProfileImg} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1a2c6d]">{member.name}</h3>
                <p className="text-[#f8be4c] font-semibold mb-3 text-xs uppercase tracking-widest">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Pillars Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg bg-white h-full rounded-3xl">
              <CardHeader>
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 6. Life at Vakharia Airtech Section */}
        <section id="life" className="w-full py-8 mb-24 overflow-hidden">
         
          <motion.div 
            className="relative w-full h-[300px] md:h-[450px] rounded-[40px] overflow-hidden mb-16 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={TeamCollab} 
              alt="Vakharia Airtech Team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
              <h2 className="text-white text-4xl md:text-5xl font-bold mb-2">Life at Vakharia Airtech</h2>
              <div className="w-20 h-1.5 bg-[#f8be4c]"></div>
            </div>
          </motion.div>

         
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
            >
               <div className="flex items-center gap-2 text-[#f8be4c] font-bold tracking-widest uppercase text-sm">
                <Camera className="w-5 h-5" />
                <span>Inside Our Culture</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#483630]">Engineering a Better Workplace</h3>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  At Vakharia Airtech, we believe that great engineering begins with great people. 
                  Our culture thrives on collaboration, continuous learning, and shared success.
                </p>
                <p>
                  We nurture a culture where individuality is celebrated and ideas are welcomed. 
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="rounded-[32px] overflow-hidden h-[350px] shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
            >
              <img 
                src={Industrial} 
                alt="Work Environment" 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          </div>

         
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold text-[#483630] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
            >
              Recent Events
            </motion.h2>
            <div className="w-16 h-1 bg-[#f8be4c] mx-auto"></div>
          </div>

         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Technical Workshop", desc: "Sharpening our engineering skills." },
              { title: "Annual Meet", desc: "Celebrating milestones and shared goals." },
              { title: "Festival Joy", desc: "Embracing cultural diversity at work." },
              { title: "Team Bonding", desc: "Strengthening our connections off-site." }
            ].map((event, idx) => (
              <motion.div 
                key={idx}
                className="bg-white rounded-[24px] overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-44 overflow-hidden relative">
                  <img 
                    src={TeamCollab} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <div className="p-5 text-center">
                  <h4 className="font-bold text-[#483630] mb-1 text-sm md:text-base">{event.title}</h4>
                  <p className="text-[10px] md:text-xs text-gray-500 leading-tight">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}