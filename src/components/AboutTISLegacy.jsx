import React from 'react';
import { 
  Building2, 
  Cpu, 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles,
  Server,
  Layers,
  ArrowRight
} from 'lucide-react';

export const AboutTISLegacy = ({ onOpenBookingModal }) => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Narrative */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0050CD] mb-4">
              <Building2 className="w-3.5 h-3.5" />
              <span>The TIS Heritage & Evolution</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001554] tracking-tight leading-tight">
              Rooted in TIS Enterprise Heritage, Designed for Tomorrow's Engineers
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <span className="font-bold text-[#001554]">Technofinity</span> was founded as the specialized academic innovation arm of <span className="font-bold text-[#0050CD]">TIS (Techno IT Solutions)</span>. For over a decade, TIS has delivered enterprise software, embedded hardware, and IT consulting to clients globally.
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Recognizing the growing disconnect between traditional college syllabi and fast-evolving industry requirements, Technofinity was born to empower final-year engineering students with authentic, high-impact IEEE research and hands-on production code.
            </p>

            {/* Emblem Philosophy */}
            <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200/90">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#001554] mb-2 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#0188FE]" />
                The Meaning Behind Our Brand Identity:
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                The Technofinity emblem seamlessly evolves the TIS geometry: the <span className="font-semibold text-[#001554]">Infinity Loop</span> denotes limitless technological possibilities; the <span className="font-semibold text-[#0188FE]">Circuit Board Traces</span> represent foundational hardware & software engineering; and the <span className="font-semibold text-[#0050CD]">Graduation Cap</span> symbolizes our mission to graduate students with distinction into dream tech careers.
              </p>
            </div>

            {/* Four Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                { title: "NVIDIA GPU Computing Labs", desc: "Dedicated RTX 4090 workstations for rapid AI/ML and Deep Learning training." },
                { title: "Core Hardware Test Benches", desc: "DSO oscilloscopes, FPGA boards, and IoT sensor suites for hands-on validation." },
                { title: "Zero Plagiarism Standards", desc: "Institutional Turnitin & DrillBit verification ensuring strictly <10% similarity." },
                { title: "Veteran M.Tech/PhD Mentors", desc: "Domain specialists with extensive university review panel experience." }
              ].map((pillar, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0050CD] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-[#001554]">{pillar.title}</h5>
                    <p className="text-[11px] text-slate-500 leading-tight">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button
                onClick={() => onOpenBookingModal({ title: "Schedule a Center Visit & Lab Tour" })}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-white bg-[#001554] hover:bg-[#0050CD] rounded-xl transition-colors shadow-sm"
              >
                <span>Schedule a Center Visit & Lab Walkthrough</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-blue-50/60 p-6 sm:p-8 rounded-3xl border border-blue-200/80 shadow-md">
            
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto mb-3 rounded-2xl bg-white border border-slate-200 p-2 shadow-sm flex items-center justify-center">
                <img 
                  src="/assets/images/technofinity-logo.jpg" 
                  alt="Technofinity Official Emblem" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-black text-[#001554]">Technofinity Project Center</h3>
              <p className="text-xs font-semibold text-[#0050CD]">An Initiative Powered by TIS Engineering</p>
            </div>

            <div className="space-y-3">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#001554]">Engineering Colleges Served</p>
                  <p className="text-[11px] text-slate-500">Anna Univ, SRM, VIT, PSG Tech, VTU, JNTU</p>
                </div>
                <span className="text-lg font-black text-[#0050CD]">250+</span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#001554]">Success Rate in Final Viva</p>
                  <p className="text-[11px] text-slate-500">Across 15,000+ past student candidates</p>
                </div>
                <span className="text-lg font-black text-emerald-600">100%</span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#001554]">Average Google Student Rating</p>
                  <p className="text-[11px] text-slate-500">Based on 1,400+ verified student reviews</p>
                </div>
                <span className="text-lg font-black text-amber-500">4.9 / 5.0</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-center">
              <p className="text-[11px] text-slate-500 font-medium">
                ISO 9001:2015 Certified Academic Research & Training Center
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutTISLegacy;
