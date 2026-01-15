import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui';
import { Target, Users, ShieldCheck, Factory, Camera } from 'lucide-react';

import ProfileImg from '../assets/profile.jpg';
import Industrial from '../assets/IndustrialHVAC.jpg';
import TeamCollab from '../assets/aitech-team.jpg';
import BondingImg from '../assets/eventsimages/cricket.jpg'

export function About() {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide high-performance, energy-efficient HVAC and Cleanroom solutions that ensure technical precision and environmental safety.',
    },
    {
      icon: Factory, // Changed to Factory for History context
      title: 'Our Legacy',
      description: 'Established in 2004, we have nearly two decades of experience in executing complex turnkey air technology projects across India.',
    },
    {
      icon: ShieldCheck,
      title: 'Our Commitment',
      description: 'We adhere to global standards like ISO and WHO-GMP, ensuring every installation meets the highest quality benchmarks.',
    },
  ];

  const stats = [
    { label: 'Years of Experience', value: '21+' },
    { label: 'Projects Completed', value: '10,000+' },
    { label: 'Inhouse Experts', value: '120+' },
    { label: 'Industries Served', value: '12+' },
  ];

  const leadership = [
    { name: 'Piyush Vakharia', role: 'Managing Partner', desc: 'Expertise in industrial HVAC design.' },
    { name: 'Dipesh Vakharia', role: 'Managing Partner', desc: 'Specializing in turnkey project management.' },
    { name: 'Rakesh Vakharia', role: 'Managing Partner', desc: 'Focused on cleanroom standards and compliance.' },
    { name: 'Harshal Vakharia', role: 'Managing Partner', desc: 'Driving growth through sustainable air technology solutions.' },
    { name: 'Bhagatsingh Powar', role: 'Project Manager', desc: 'Focused on resource optimization and quality-driven site supervision.' },
    { name: 'Nischal Jadhav', role: 'QA Lead', desc: 'Ensuring rigorous safety protocols across every technical phase.' },
    { name: 'Pramod Patil', role: 'HVAC Consultant', desc: 'Specializing in energy-efficient climate control solutions.' },
    { name: 'Omkar Bhesare', role: 'Account Head', desc: 'Managing financial operations and long-term reliability.' },
    { name: 'Yuvraj Nerkar', role: 'Sales & Estimation', desc: 'Expert in project feasibility and cost-efficient air solutions.' },
    { name: 'Jitendra Desale', role: 'Design Head', desc: 'Leading technical drafts and advanced airflow modeling.' },
    { name: 'Dadasaheb Adsare', role: 'Project Head', desc: 'Overseeing large-scale execution and industrial delivery.' }
  ];

  const events = [
    { title: "Technical Workshop", desc: "Sharpening our skills.", img:BondingImg },
    { title: "Annual Meet", desc: "Celebrating milestones.", img: BondingImg },
    { title: "Festival Joy", desc: "Embracing diversity.", img: BondingImg },
    { title: "Team Bonding", desc: "Strengthening connections.", img: BondingImg }
  ];

  return (
    <section id="about" className="min-h-screen bg-gray-50 overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <div className="bg-[#f6ac72] py-24 text-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
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

      {/* Main Container - Reduced Padding */}
      <div className="max-w-[95%] xl:max-w-7xl mx-auto px-2 md:px-4 -mt-12">
        
        {/* 2. Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white shadow-xl rounded-2xl p-6 mb-20 border border-gray-100">
          {stats.map((stat, index) => (
            <div key={index} className="text-center border-r last:border-none border-gray-100 px-1">
              <div className="text-2xl md:text-3xl font-bold text-[#E53935]">{stat.value}</div>
              <div className="text-[10px] md:text-sm text-gray-500 uppercase tracking-wider font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 3. Detailed Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-24 px-1 md:px-0">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Vakharia Airtech?</h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Based in Pune, we have evolved from a specialized HVAC contractor into a 
              full-service engineering partner. Our in-house design team uses advanced thermal modeling to ensure peak efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
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
            <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border-4 md:border-8 border-white">
                <img src={Industrial} alt="HVAC" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#f8be4c] rounded-full -z-10"></div>
          </motion.div>
        </div>

        {/* 4. Leadership Team Section */}
        <section id="team" className="w-full py-12 mb-20 bg-white rounded-[40px] shadow-sm px-4 md:px-6 border border-gray-100">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-[#483630] mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Our Leadership Team
            </motion.h2>
            <div className="w-20 h-1 bg-[#f8be4c] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((member, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-3xl border border-gray-100 text-center group hover:shadow-xl hover:border-[#f8be4c] transition-all">
                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img 
                    src={ProfileImg} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1a2c6d]">{member.name}</h3>
                <p className="text-[#f8be4c] font-semibold mb-2 text-[10px] uppercase tracking-widest">{member.role}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Pillars Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 px-1">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg bg-white h-full rounded-3xl">
              <CardHeader className="p-6 pb-2">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 6. Life at Vakharia Airtech */}
        <section id="life" className="w-full py-8 mb-24 overflow-hidden px-1 md:px-0">
          <motion.div 
            className="relative w-full h-[300px] md:h-[450px] rounded-[30px] md:rounded-[40px] overflow-hidden mb-16 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src={TeamCollab} alt="Team" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-6 md:p-10">
              <h2 className="text-white text-3xl md:text-5xl font-bold mb-2">Life at Vakharia Airtech</h2>
              <div className="w-16 h-1 bg-[#f8be4c]"></div>
            </div>
          </motion.div>

          {/* Culture Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 items-center">
            <motion.div className="space-y-4 px-1" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
              <div className="flex items-center gap-2 text-[#f8be4c] font-bold tracking-widest uppercase text-xs">
                <Camera className="w-4 h-4" />
                <span>Inside Our Culture</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#483630]">Engineering a Better Workplace</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                At Vakharia Airtech, we believe that great engineering begins with great people. 
                Our culture thrives on collaboration, continuous learning, and shared success.
              </p>
            </motion.div>

            <motion.div className="rounded-[24px] overflow-hidden h-[300px] shadow-xl" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}>
              <img src={Industrial} alt="Environment" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Updated Event Cards with Different Images */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {events.map((event, idx) => (
              <motion.div 
                key={idx}
                className="bg-white rounded-[20px] overflow-hidden shadow-md group border border-gray-100"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="h-32 md:h-44 overflow-hidden relative">
                  <img 
                    src={event.img} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <div className="p-3 text-center">
                  <h4 className="font-bold text-[#483630] text-xs md:text-sm leading-tight">{event.title}</h4>
                  <p className="text-[9px] md:text-[10px] text-gray-500 mt-1">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}