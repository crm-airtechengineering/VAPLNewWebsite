import React from 'react';

interface Job {
  role: string;
  loc: string;
  dept: string;
}

const CareerPage: React.FC = () => {
  const jobs: Job[] = [
    { role: "Puchase Head", loc: "Pune", dept: "Purchase" },
    { role: "Technical Sales Manager", loc: "Pune", dept: "Marketing" },
    { role: "Quality Control Lead", loc: "Gujarat", dept: "Operations" },
  ];

  return (
    <div className="bg-white min-h-screen w-full font-sans text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full bg-[#1a2c6d] pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Build the Future of <br />
            <span className="text-[#f8be4c]">Air Technology.</span>
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl leading-relaxed">
            Join Vakharia Airtech and work on world-class HVAC and industrial engineering projects.
          </p>
        </div>
      </section>

      {/* --- 1. CURRENT OPENINGS SECTION --- */}
      {/* scroll-mt-28 ensures the navbar doesn't cover the heading */}
      <section id="openings" className="py-24 bg-gray-50 scroll-mt-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12 border-l-4 border-[#f8be4c] pl-6">
            <h2 className="text-4xl font-bold text-[#1a2c6d]">Current Openings</h2>
            <p className="text-gray-500 mt-2">Find your next challenge with us.</p>
          </div>

          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-8 bg-white rounded-2xl border border-gray-100 hover:border-[#f8be4c] transition-all group shadow-sm hover:shadow-md">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded mb-2 inline-block">
                    {job.dept}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#1a2c6d]">{job.role}</h3>
                  <p className="text-sm text-gray-500 mt-1">📍 {job.loc} Office</p>
                </div>
                <a href="#apply-now" className="mt-6 md:mt-0 px-8 py-3 bg-[#1a2c6d] text-white font-bold rounded-xl hover:bg-[#f8be4c] hover:text-[#1a2c6d] transition-all text-center">
                  Apply for this Role
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 2. LIFE AT VAKHARIA (Bento Style) --- */}
      <section id="life-at-vakharia" className="py-24 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#1a2c6d] mb-12">Life at Vakharia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-[#1a2c6d] rounded-3xl p-10 text-white min-h-[300px] flex flex-col justify-end">
              <h3 className="text-2xl font-bold mb-2">Our Work Culture</h3>
              <p className="text-blue-100">Collaborative, innovative, and safety-first. We believe in empowering our engineers with the latest technology.</p>
            </div>
            <div className="bg-[#f8be4c] rounded-3xl p-10 flex flex-col justify-center items-center text-center">
              <span className="text-5xl font-black text-[#1a2c6d]">25+</span>
              <p className="font-bold text-[#1a2c6d] mt-2">Years of Excellence</p>
            </div>
            <div className="bg-gray-100 rounded-3xl p-10 md:col-span-3 flex items-center gap-6">
              <div className="text-4xl">🚀</div>
              <p className="text-gray-700 font-medium text-lg">We provide clear career paths from Junior Engineer to Senior Project Lead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. BENEFITS SECTION --- */}
      <section id="benefits" className="py-24 bg-gray-50 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a2c6d]">Why Work With Us?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Global Travel", d: "Work on international sites.", i: "✈️" },
              { t: "Health Cover", d: "Comprehensive insurance for you.", i: "🏥" },
              { t: "Flexible Hours", d: "Maintain work-life balance.", i: "⏰" },
              { t: "Paid PTO", d: "Annual leave and holidays.", i: "🌴" }
            ].map((b, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all text-center">
                <div className="text-4xl mb-4">{b.i}</div>
                <h3 className="font-bold text-[#1a2c6d] mb-2">{b.t}</h3>
                <p className="text-gray-500 text-sm">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. APPLY NOW SECTION --- */}
      <section id="apply-now" className="py-24 bg-white scroll-mt-28">
        <div className="max-w-3xl mx-auto px-6 bg-[#1a2c6d] p-10 md:p-16 rounded-[3rem] shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Apply Now</h2>
          <p className="text-blue-100 text-center mb-10">Submit your resume and our HR team will contact you.</p>
          
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-4 rounded-xl bg-white/10 text-white border border-white/20 focus:border-[#f8be4c] outline-none" />
            <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl bg-white/10 text-white border border-white/20 focus:border-[#f8be4c] outline-none" />
            <select className="w-full p-4 rounded-xl bg-white/10 text-gray-300 border border-white/20 focus:border-[#f8be4c] outline-none">
              <option className="text-black">Select Position</option>
              <option className="text-black">Engineering</option>
              <option className="text-black">Operations</option>
              <option className="text-black">Marketing</option>
            </select>
            <textarea rows={4} placeholder="Your message" className="w-full p-4 rounded-xl bg-white/10 text-white border border-white/20 focus:border-[#f8be4c] outline-none"></textarea>
            <button className="w-full bg-[#f8be4c] text-[#1a2c6d] font-black py-5 rounded-xl hover:scale-[1.02] transition-transform">
              Send Application
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default CareerPage;