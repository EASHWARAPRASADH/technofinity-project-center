import React, { useState } from 'react';
import { 
  Search, 
  ArrowRight, 
  CheckCircle, 
  Award, 
  BookOpen, 
  Users, 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  Download,
  MessageCircle,
  Building2
} from 'lucide-react';
import { contactConfig } from '../data/contactConfig';

export const Hero = ({ onSearchSubmit, onOpenBookingModal, onOpenCustomIdeaModal }) => {
  const [selectedDept, setSelectedDept] = useState('all');
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [keyword, setKeyword] = useState('');

  const handleQuickFind = (e) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit({ dept: selectedDept, domain: selectedDomain, query: keyword });
    }
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-white via-slate-50 to-blue-50/40">
      
      {/* Decorative Subtle Corporate Circuit Lines in Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 0 40 L 40 40 M 40 0 L 40 80 M 40 40 L 80 80" stroke="#001554" strokeWidth="1.5" fill="none" />
              <circle cx="40" cy="40" r="3" fill="#0050CD" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      {/* Ambient Gradient Glows */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Trust Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200/80 shadow-sm text-xs font-semibold text-[#001554]">
            <span className="w-2 h-2 rounded-full bg-[#0188FE] animate-ping" />
            <span className="text-[#0050CD]">Technofinity.com</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600">Powered by TIS Engineering Heritage</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>IEEE 2025–2026 Real-Time Implementation</span>
          </div>
        </div>

        {/* Hero Title & Value Proposition */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#001554] tracking-tight leading-[1.15]">
            Transforming Academic Potential Into{' '}
            <span className="bg-gradient-to-r from-[#0050CD] via-[#0188FE] to-cyan-500 bg-clip-text text-transparent">
              Engineering Excellence
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
            South India's leading project center for <span className="font-semibold text-slate-900">B.E / B.Tech, M.E / M.Tech, MCA & Diploma</span> engineers. Complete turnkey source code, authentic IEEE base papers, Anna University / VTU compliant reports, and 1-on-1 viva voice mastery.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#001554] via-[#0050CD] to-[#0188FE] hover:from-[#000f3d] hover:to-[#0050cd] rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore 500+ IEEE Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenBookingModal({ title: "Free Abstract & Base Paper Request" })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#001554] bg-white hover:bg-slate-50 border border-slate-300 hover:border-blue-400 rounded-xl shadow-sm transition-all duration-200"
            >
              <Download className="w-4 h-4 text-[#0050CD]" />
              <span>Get Free Base Paper & Abstract</span>
            </button>

            <a
              href={`https://wa.me/${contactConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(contactConfig.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl shadow-sm transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Priyadarshini</span>
            </a>
          </div>
        </div>

        {/* Interactive Quick Project Finder Card */}
        <div className="mt-12 max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-xl shadow-slate-200/60 border border-slate-200">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-[#0050CD]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#001554]">
                Instant Project Finder & Topic Recommender
              </span>
            </div>
            <span className="text-[11px] font-semibold text-slate-500 hidden sm:inline">
              Filtered from 30+ Live IEEE 2025–2026 Repositories
            </span>
          </div>

          <form onSubmit={handleQuickFind} className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            {/* Department Selector */}
            <div className="sm:col-span-3">
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Department</label>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full px-3 py-2.5 text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0050CD] focus:bg-white transition-all"
              >
                <option value="all">All Departments</option>
                <option value="CSE / IT / AI&DS">CSE / IT / AI&DS</option>
                <option value="ECE / EEE">ECE / Embedded</option>
                <option value="EEE / ECE">EEE / Power Systems</option>
                <option value="Mech / Mechatronics">Mech / Mechatronics</option>
                <option value="CSE / IT / MCA">MCA / Web & Cloud</option>
              </select>
            </div>

            {/* Domain Selector */}
            <div className="sm:col-span-3">
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Technology Domain</label>
              <select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                className="w-full px-3 py-2.5 text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0050CD] focus:bg-white transition-all"
              >
                <option value="all">All Domains</option>
                <option value="ai-ml">AI, ML & Deep Learning</option>
                <option value="cloud-devops">Cloud & Cybersecurity</option>
                <option value="iot-embedded">IoT & Embedded Systems</option>
                <option value="blockchain-web3">Blockchain & Web3</option>
                <option value="fullstack-mobile">Full Stack Web & Mobile</option>
                <option value="vlsi-dsp">VLSI & DSP (ECE)</option>
                <option value="power-ev">Power Systems & EV (EEE)</option>
                <option value="robotics-mechatronics">Robotics & Automation</option>
              </select>
            </div>

            {/* Keyword Input */}
            <div className="sm:col-span-4">
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Keywords / Topic Ideas</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. Swin-Transformer, EV, LoRaWAN, eBPF..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="w-full pl-3 pr-3 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0050CD] focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2 flex items-end">
              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#0050CD] hover:bg-[#001554] rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search</span>
              </button>
            </div>
          </form>

          {/* Quick Filter Suggestion Chips */}
          <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-[11px] font-semibold text-slate-500">Popular Searches:</span>
            {['Medical AI', 'Deepfake Detection', 'Smart Grid EV', 'IoT Precision Agriculture', 'FPGA AES Accelerator', 'Kubernetes Zero-Trust'].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => {
                  setKeyword(tag);
                  if (onSearchSubmit) onSearchSubmit({ dept: 'all', domain: 'all', query: tag });
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-2 py-0.5 text-[11px] font-medium text-slate-600 bg-slate-100 hover:bg-blue-50 hover:text-[#0050CD] rounded-md transition-colors"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Corporate Trust Statistics Banner */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0050CD] shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-black text-[#001554]">15,000+</p>
              <p className="text-xs font-semibold text-slate-500">Engineers Guided</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#0188FE] shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-black text-[#001554]">500+</p>
              <p className="text-xs font-semibold text-slate-500">IEEE 2025–26 Titles</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-black text-[#001554]">100%</p>
              <p className="text-xs font-semibold text-slate-500">Viva Voce Success Rate</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-black text-[#001554]">12+ Years</p>
              <p className="text-xs font-semibold text-slate-500">TIS Academic Heritage</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
