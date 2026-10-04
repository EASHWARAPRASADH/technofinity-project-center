import React from 'react';
import { 
  Cpu, 
  Brain, 
  Cloud, 
  Radio, 
  Layers, 
  Zap, 
  Bot, 
  Code2, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { domainsData } from '../data/domainsData';

export const DomainExplorer = ({ onSelectDomain, onOpenCustomIdeaModal }) => {
  // Domain icon map
  const getIcon = (id) => {
    switch (id) {
      case 'ai-ml':
        return <Brain className="w-6 h-6 text-[#0050CD]" />;
      case 'cloud-devops':
        return <Cloud className="w-6 h-6 text-indigo-600" />;
      case 'iot-embedded':
        return <Radio className="w-6 h-6 text-[#0188FE]" />;
      case 'blockchain-web3':
        return <Layers className="w-6 h-6 text-blue-700" />;
      case 'fullstack-mobile':
        return <Code2 className="w-6 h-6 text-sky-600" />;
      case 'vlsi-dsp':
        return <Cpu className="w-6 h-6 text-blue-800" />;
      case 'power-ev':
        return <Zap className="w-6 h-6 text-teal-600" />;
      case 'robotics-mechatronics':
        return <Bot className="w-6 h-6 text-slate-800" />;
      default:
        return <Cpu className="w-6 h-6 text-[#0050CD]" />;
    }
  };

  return (
    <section id="domains" className="py-20 bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0050CD] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Multi-Disciplinary Engineering Spectrum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001554] tracking-tight">
            Comprehensive Project Domains & Tech Stacks
          </h2>
          <p className="mt-3 text-base text-slate-600">
            From modern generative AI models and cloud microservices to VLSI FPGA accelerators and electric vehicle drivetrains, explore curated specializations designed for Anna University, VTU, JNTU, and autonomous college syllabi.
          </p>
        </div>

        {/* 8 Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domainsData.map((domain) => (
            <div 
              key={domain.id}
              className="group bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {getIcon(domain.id)}
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-blue-100 text-[#0050CD] border border-blue-200">
                    {domain.badge}
                  </span>
                </div>

                {/* Domain Title & Dept */}
                <div className="mb-2">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                    {domain.department}
                  </span>
                  <h3 className="text-lg font-bold text-[#001554] group-hover:text-[#0050CD] transition-colors leading-snug">
                    {domain.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                  {domain.description}
                </p>

                {/* Tech Stack Chips */}
                <div className="mb-4">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Key Frameworks:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {domain.keyTech.slice(0, 4).map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-0.5 text-[11px] font-medium text-slate-700 bg-white border border-slate-200/80 rounded-md shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {domain.keyTech.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-semibold text-slate-500 bg-slate-200/60 rounded-md">
                        +{domain.keyTech.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Sample Topics Preview */}
                <div className="space-y-1.5 pt-3 border-t border-slate-200/60 mb-5">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Sample IEEE Topics:</p>
                  {domain.popularTopics.slice(0, 2).map((topic, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-tight line-clamp-1">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    if (onSelectDomain) onSelectDomain(domain.id);
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 px-3 text-xs font-bold text-[#001554] group-hover:text-white bg-white group-hover:bg-[#0050CD] border border-slate-200 group-hover:border-[#0050CD] rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-2xs"
                >
                  <span>Explore {domain.projectCount}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Custom Idea CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-slate-50 to-cyan-50/50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#001554] text-white flex items-center justify-center shrink-0 shadow-md">
              <Sparkles className="w-6 h-6 text-cyan-300" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#001554]">
                Have a Custom Project Concept or College Guide Specification?
              </h4>
              <p className="text-xs text-slate-600">
                Our technical architects will evaluate your custom problem statement and design an end-to-end implementation architecture.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenCustomIdeaModal}
            className="shrink-0 px-5 py-3 text-xs font-bold text-white bg-[#001554] hover:bg-[#0050CD] rounded-xl transition-colors shadow-sm"
          >
            Submit Custom Idea for Approval
          </button>
        </div>

      </div>
    </section>
  );
};

export default DomainExplorer;
