import React from 'react';
import { 
  FileCheck, 
  Workflow, 
  Code2, 
  MonitorPlay, 
  Award, 
  ArrowRight, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const ProcessWorkflow = ({ onOpenBookingModal }) => {
  const steps = [
    {
      step: "01",
      icon: <FileCheck className="w-6 h-6 text-[#0050CD]" />,
      title: "Topic Consultation & Abstract Approval",
      description: "Discuss with Priyadarshini and our academic counselors. Select from curated IEEE 2025–2026 titles or propose your own idea. We provide the base paper and abstract to get your guide's formal approval."
    },
    {
      step: "02",
      icon: <Workflow className="w-6 h-6 text-indigo-600" />,
      title: "System Architecture & Base Paper Analysis",
      description: "Our technical architects walk you through the system block diagram, module division, mathematical formulations, and dataset characteristics so you understand the foundation."
    },
    {
      step: "03",
      icon: <Code2 className="w-6 h-6 text-[#0188FE]" />,
      title: "Milestone Coding & Review 1 Deck",
      description: "Development begins with clean, modular code. We provide your Review 1 PPT, problem formulation, and literature review chapters to present confidently in college."
    },
    {
      step: "04",
      icon: <MonitorPlay className="w-6 h-6 text-emerald-600" />,
      title: "Live Laptop Execution & Review 2 Progress",
      description: "We remotely connect via AnyDesk or invite you to our Chennai lab to run the full code on your personal system, generate test outputs, and record the demo video."
    },
    {
      step: "05",
      icon: <Award className="w-6 h-6 text-purple-600" />,
      title: "Turnitin Report & 1-on-1 Viva Mock Drill",
      description: "Receive your final Anna University / VTU formatted report (<10% plagiarism), final review slides, and complete mock viva voce sessions with our 50+ question guide."
    }
  ];

  return (
    <section id="process" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0050CD] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Academic Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001554] tracking-tight">
            The 5-Step Technofinity Project Lifecycle
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A clear, milestone-driven process designed to synchronize seamlessly with your semester review schedules and college deadlines.
          </p>
        </div>

        {/* 5 Steps Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-200 group-hover:text-blue-100 transition-colors font-mono">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-[#001554] mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-[#0050CD]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Milestone Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenBookingModal({ title: "Start Project Journey (Step 1)" })}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-gradient-to-r from-[#001554] via-[#0050CD] to-[#0188FE] rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <span>Start Step 1: Free Topic Consultation with Priyadarshini</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProcessWorkflow;
