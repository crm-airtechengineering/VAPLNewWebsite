import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui';
import { Target, Users, Award, ShieldCheck, Factory, History, Camera } from 'lucide-react';
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
    { label: 'Years of Experience', value: '28+' },
    { label: 'Projects Completed', value: '200+' },
    { label: 'Expert Engineers', value: '50+' },
    { label: 'Industries Served', value: '12+' },
  ];
  const leadership = [
    { name: 'Executive Director 1', role: 'Technical Leadership', desc: 'Expertise in industrial HVAC design.' },
    { name: 'Executive Director 2', role: 'Strategic Operations', desc: 'Specializing in turnkey project management.' },
    { name: 'Executive Director 3', role: 'Engineering Excellence', desc: 'Focused on cleanroom standards and compliance.' },
  ];

  return (
    <section id="about" className="min-h-screen bg-gray-200 overflow-x-hidden">
      
      {/* 1. Header Section: Continuous slide-up effect for text */}
      <div className="bg-[#f6ac72] py-20 text-black">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        
        {/* 2. Stats Bar: NO EFFECTS APPLIED */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white shadow-xl rounded-2xl p-8 mb-20 border border-gray-100">
          {stats.map((stat, index) => (
            <div key={index} className="text-center border-r last:border-none border-gray-100">
              <div className="text-3xl font-bold text-[#E53935]">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 3. Detailed Story Section: Split entry effect */}
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
            <div className="flex gap-6">
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

        {/* 4. Leadership Team Section: Header animates, Cards remain static */}
        <section id="team" className="w-full py-12 mb-20 bg-white rounded-3xl shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Header: Slides up continuously */}
    <div className="text-center mb-10">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-[#483630] mb-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        Our Leadership Team
      </motion.h2>
      <div className="w-20 h-1 bg-[#f8be4c] mx-auto mb-4"></div>
    </div>
    
    {/* Cards Grid: No Entrance Effects */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {leadership.map((member, index) => (
        <div key={index} className="bg-white p-6 rounded-3xl border-2 border-gray-100 text-center group hover:shadow-xl hover:border-[#f8be4c] transition-all">
          
          {/* Profile Image above Title */}
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-50 shadow-inner bg-gray-100">
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
  </div>
</section>

        {/* 5. Pillars Grid: NO EFFECTS APPLIED TO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg bg-white h-full">
              <CardHeader>
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-gray-500" />
                </div>
                <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

       
        {/* 6. Life at Vakharia Airtech Section */}
        <section id="life" className="w-full py-16 mb-20 bg-white rounded-3xl shadow-sm overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              
              {/* LEFT SIDE: Text slides in from the left every time it enters view */}
              <motion.div 
                className="max-w-2xl"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }} // once: false makes it continuous
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#483630] mb-4">Life at Vakharia Airtech</h2>
                <div className="w-20 h-1 bg-[#f8be4c] mb-6"></div>
                <p className="text-gray-600 text-lg">
                  Beyond engineering excellence, we are a community of innovators. Our culture 
                  thrives on collaboration, continuous learning, and shared success.
                </p>
              </motion.div>

              {/* RIGHT SIDE: "Our Moments" label slides in from the right */}
              <motion.div 
                className="hidden md:flex items-center gap-2 text-gray-400 font-medium"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Camera className="w-5 h-5" />
                <span>Our Moments</span>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* LEFT SIDE IMAGE: Slides in from the left */}
              <motion.div 
                className="sm:col-span-2 lg:col-span-2 bg-gray-50 rounded-2xl overflow-hidden relative group border border-gray-100 shadow-md hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ y: -5 }} // Adds a subtle lift on hover
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={TeamCollab} 
                    alt="Vakharia Airtech Team Collaboration" 
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-10" />
                <div className="absolute bottom-4 left-4 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 p-2 rounded-lg backdrop-blur-sm">
                  <p className="font-bold text-sm">Team Collaboration</p>
                </div>
              </motion.div>
              
              
              <motion.div 
                className="bg-gray-100 rounded-2xl min-h-[200px] flex items-center justify-center italic text-gray-400 border border-gray-100 text-center p-4 shadow-md"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                Workshop Session
              </motion.div>

              <motion.div 
                className="bg-gray-100 rounded-2xl min-h-[200px] flex items-center justify-center italic text-gray-400 border border-gray-100 text-center p-4 shadow-md"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                Annual Meet
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}