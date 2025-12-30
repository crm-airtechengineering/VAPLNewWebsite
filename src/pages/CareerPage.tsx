import React, { useState } from 'react';
import { Plus, MapPin, X, Clock, Briefcase, FileText, Heart, Zap, Award, Globe } from 'lucide-react';
import careerHero from '../assets/career.jpg'
import teamBanner from '../assets/team.jpg'

interface Job {
  role: string;
  loc: string;
  dept: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  time: string;
}

const CareerPage: React.FC = () => {
  const jobs: Job[] = [
    { 
      role: "Purchase Head", 
      loc: "Pune", 
      dept: "Purchase",
      time: "09:30 am - 06:30 pm",
      description: "We help transform the world's most important businesses into vigorous, agile organizations that anticipate the unpredictable.",
      responsibilities: [
        "Develop and implement global procurement strategies.",
        "Manage vendor relationships and negotiate contracts.",
        "Oversee supply chain logistics for HVAC projects."
      ],
      requirements: [
        "5+ years in industrial procurement.",
        "Strong negotiation and sourcing skills.",
        "Knowledge of HVAC systems."
      ]
    },
    { 
      role: "Technical Sales Manager", 
      loc: "Pune", 
      dept: "Marketing",
      time: "09:30 am - 06:30 pm",
      description: "Transform our business reach by identifying new opportunities and helping clients define their future with world-class solutions.",
      responsibilities: [
        "Identify new market opportunities.",
        "Define technical requirements with clients.",
        "Lead the sales lifecycle for air technology."
      ],
      requirements: [
        "Experience in technical sales (HVAC preferred).",
        "Strong presentation skills.",
        "Engineering background."
      ]
    },
    { 
      role: "Quality Control Lead", 
      loc: "Pune", 
      dept: "Operations",
      time: "09:30 am - 06:30 pm",
      description: "Lead our quality assurance protocols to achieve unprecedented levels of value and engineering standards.",
      responsibilities: [
        "Establish rigorous QA/QC protocols.",
        "Conduct site audits and safety inspections.",
        "Analyze failure data for improvements."
      ],
      requirements: [
        "3+ years in QC leadership.",
        "Knowledge of ISO certifications.",
        "Detail-oriented mindset."
      ]
    },
  ];

  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showApplyModal, setShowApplyModal] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    position: 'Select Position',
    message: '',
    resume: null as File | null
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      const fileInput = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: fileInput.files ? fileInput.files[0] : null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('position', formData.position);
    data.append('message', formData.message);
    if (formData.resume) data.append('resume', formData.resume);

    try {
      const response = await fetch('http://localhost:5000/api/apply', { method: 'POST', body: data });
      if (response.ok) {
        setStatus('✅ Application sent successfully!');
        setFormData({ fullName: '', email: '', position: 'Select Position', message: '', resume: null });
        setTimeout(() => { setShowApplyModal(false); setStatus(''); }, 3000);
      } else {
        setStatus('❌ Failed to send application.');
      }
    } catch (error) {
      setStatus('❌ Error connecting to server.');
    }
  };

  return (
    <div className="bg-white min-h-screen w-full font-sans text-slate-900">

      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[60vh] min-h-[550px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${careerHero})` }}
        />
        <div className="absolute inset-0 bg-[#1a2c6d]/75" />
        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
          <div className="text-center lg:text-left max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Build the Future of <br />
              <span className="text-[#f8be4c]">Air Technology.</span>
            </h1>
            <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-2xl">
              Join Vakharia Airtech and work on world-class HVAC and industrial
              engineering projects that make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* --- CURRENT OPENINGS SECTION --- */}
      <section id="openings" className="py-24 bg-[#f8faff] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 border-l-4 border-[#1a2c6d] pl-6">
            <h2 className="text-4xl font-bold text-[#1f1f1f]">Current Openings</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2 border border-gray-200 px-3 py-1 rounded-full text-sm font-medium text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Full time
                    </div>
                    <div className="flex items-center gap-1 text-[#1a2c6d] font-semibold">
                      <MapPin size={18} /> {job.loc}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{job.role}</h3>
                  <p className="text-gray-500 leading-relaxed mb-8 line-clamp-3">{job.description}</p>
                </div>

                <button 
                  onClick={() => setSelectedJob(job)}
                  className="flex items-center gap-4 group w-fit outline-none bg-[#1a2c6d] hover:bg-[#f8be4c] p-1.5 pr-6 rounded-2xl transition-all duration-300"
                >
                  <div className="bg-white/10 p-2.5 rounded-xl text-white group-hover:bg-[#1a2c6d]/20 transition-all duration-300">
                    <Plus size={20} strokeWidth={3} />
                  </div>
                  <span className="text-base font-bold text-white group-hover:text-[#1a2c6d] transition-colors duration-300">
                    Learn More
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LIFE AT VAKHARIA SECTION --- */}
      <section id="life-at-vakharia" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6 border-l-4 border-[#1a2c6d] pl-6">
                <h2 className="text-4xl font-bold text-[#1f1f1f]">Life at Vakharia</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We believe that engineering excellence is driven by a culture of collaboration and constant learning. 
                At Vakharia Airtech, you're not just an employee; you're a vital part of an innovative team 
                shaping the future of industrial air technology.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-[#f8faff] rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-[#1a2c6d] mb-2">Collaborative Environment</h4>
                  <p className="text-sm text-gray-500">Work across departments to solve complex engineering challenges.</p>
                </div>
                <div className="p-6 bg-[#f8faff] rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-[#1a2c6d] mb-2">Innovation First</h4>
                  <p className="text-sm text-gray-500">Access to world-class tools and the latest HVAC technologies.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                <img src={teamBanner} alt="Team" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f8be4c]/20 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENEFITS SECTION --- */}
      <section id="benefits" className="py-24 bg-[#1a2c6d] text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Employee Benefits</h2>
          <div className="w-24 h-1 bg-[#f8be4c] mx-auto mb-8"></div>
          <p className="text-blue-100 max-w-2xl mx-auto mb-16">
            We are committed to providing a supportive environment that rewards hard work and encourages personal growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Heart size={28}/>, title: "Healthcare", desc: "Comprehensive medical insurance plans for you and your family." },
              { icon: <Zap size={28}/>, title: "Growth", desc: "Paid certifications and clear pathways for internal career advancement." },
              { icon: <Award size={28}/>, title: "Recognition", desc: "Performance-based bonuses and awards for engineering excellence." },
              { icon: <Globe size={28}/>, title: "Work-Life", desc: "Flexible timing options and generous paid time off to recharge." }
            ].map((benefit, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-left group">
                <div className="text-[#f8be4c] mb-6 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-blue-100/70 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* --- JOB DETAIL MODAL --- */}
      {selectedJob && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2rem] overflow-hidden relative shadow-2xl flex flex-col">
            <button onClick={() => setSelectedJob(null)} className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 z-20">
              <X size={24} className="text-gray-400" />
            </button>
            <div className="overflow-y-auto p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="flex-1">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{selectedJob.role}</h2>
                  <p className="text-gray-600 mb-10 leading-relaxed">{selectedJob.description}</p>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Key Responsibilities</h4>
                  <ul className="space-y-3 mb-8">
                    {selectedJob.responsibilities.map((r, i) => (
                      <li key={i} className="flex gap-3 text-gray-600"><span className="text-blue-600 font-bold">•</span> {r}</li>
                    ))}
                  </ul>

                  <h4 className="text-xl font-bold text-gray-900 mb-4">Requirements</h4>
                  <ul className="space-y-3">
                    {selectedJob.requirements.map((r, i) => (
                      <li key={i} className="flex gap-3 text-gray-600"><span className="text-blue-600 font-bold">•</span> {r}</li>
                    ))}
                  </ul>
                </div>

                <div className="md:w-64 space-y-8">
                  <div className="space-y-5 pt-10">
                    <div className="flex items-center gap-3 text-gray-700 font-semibold"><Briefcase size={20} className="text-blue-600"/> Full time</div>
                    <div className="flex items-center gap-3 text-gray-700 font-semibold"><Clock size={20} className="text-blue-600"/> {selectedJob.time}</div>
                    <div className="flex items-center gap-3 text-gray-700 font-semibold"><MapPin size={20} className="text-blue-600"/> {selectedJob.loc}</div>
                  </div>
                  
                  <button 
                    onClick={() => { setSelectedJob(null); setShowApplyModal(true); }}
                    className="flex items-center gap-4 group w-full outline-none bg-[#1a2c6d] hover:bg-[#f8be4c] p-1.5 pr-6 rounded-2xl transition-all duration-300"
                  >
                    <div className="bg-white/10 p-2.5 rounded-xl text-white group-hover:bg-[#1a2c6d]/20 transition-all duration-300">
                      <Plus size={20} strokeWidth={3} />
                    </div>
                    <span className="text-base font-bold text-white group-hover:text-[#1a2c6d] transition-colors duration-300">
                      Apply Now
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- APPLY NOW POPUP MODAL --- */}
      {showApplyModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#121212] w-full max-w-lg p-10 rounded-[3rem] shadow-2xl relative">
            <button onClick={() => setShowApplyModal(false)} className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-800">
              <X size={24} className="text-gray-400" />
            </button>

            <h2 className="text-2xl font-semibold text-white mb-2 text-center">Apply Now</h2>

            <form onSubmit={handleSubmit} className="space-y-3 mt-5">
              <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required className="w-full p-4 rounded-xl bg-white/10 text-white border border-white/20 focus:border-[#f8be4c] outline-none text-sm" />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full p-4 rounded-xl bg-white/10 text-white border border-white/20 focus:border-[#f8be4c] outline-none text-sm" />
              <select name="position" value={formData.position} onChange={handleChange} required className="w-full p-4 rounded-xl bg-white/10 text-white border border-white/20 focus:border-[#f8be4c] outline-none text-sm">
                <option className="text-black" value="Select Position" disabled>Select Position</option>
                {jobs.map((job, i) => <option key={i} className="text-black" value={job.role}>{job.role}</option>)}
              </select>
              <div className="relative flex items-center bg-white/5 border border-dashed border-white/20 rounded-xl p-4 hover:border-[#f8be4c] transition-colors cursor-pointer group">
                <FileText className="text-gray-500 mr-3 group-hover:text-[#f8be4c]" size={20} />
                <input type="file" name="resume" accept=".pdf" onChange={handleChange} required className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
                <span className="text-sm text-gray-400">{formData.resume ? formData.resume.name : "Upload Resume (PDF)"}</span>
              </div>
              <textarea name="message" rows={3} placeholder="Experience Summary..." value={formData.message} onChange={handleChange} required className="w-full p-4 rounded-xl bg-white/10 text-white border border-white/20 focus:border-[#f8be4c] outline-none text-sm"></textarea>
              <button type="submit" className="w-full bg-[#f8be4c] text-[#1a2c6d] font-black py-5 rounded-2xl hover:brightness-110 active:scale-[0.98] transition-all text-base">
                {status === 'Sending...' ? 'Processing...' : 'Submit Application'}
              </button>
              {status && <p className="text-center text-sm text-white mt-4 font-bold">{status}</p>}
            </form>
          </div>
        </div>
      )}

      {/* --- JOIN OUR TEAM CTA --- */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden relative flex flex-col lg:flex-row items-center p-10 lg:p-16" style={{ backgroundColor: "#f4b6a5" }}>
          <div className="flex-1 relative z-10">
            <h2 className="text-4xl font-bold text-[#1f1f1f] mb-4">Join our innovative team</h2>
            <p className="text-gray-700 max-w-lg leading-relaxed mb-8">
              If you are unable to find a suitable opening, please do not worry. 
              We are always looking for new talents. Kindly mail us your resume.
            </p>
            <a href="/contact" className="inline-block bg-blue-600 text-white font-bold px-10 py-4 rounded-xl hover:scale-105 transition-transform">
              Contact Now
            </a>
          </div>
          <div className="flex-1 mt-10 lg:mt-0 relative">
            <img src={teamBanner} alt="Team" className="w-full object-cover opacity-60 rounded-2xl" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default CareerPage;