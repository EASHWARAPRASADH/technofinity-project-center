import React from 'react';
import { 
  FileCode, 
  FileText, 
  Database, 
  Presentation, 
  Video, 
  GraduationCap, 
  Laptop, 
  Award, 
  BookMarked,
  CheckCircle2,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const DeliverablesMatrix = ({ onOpenBookingModal }) => {
  const deliverables = [
    {
      icon: <BookMarked className="w-6 h-6 text-[#0050CD]" />,
      title: "IEEE Base Paper & Literature Review",
      description: "Original authentic IEEE Xplore / ScienceDirect base paper PDF, plus 5+ related reference papers and structured comparative analysis matrix.",
      highlight: "100% Authentic Base Papers"
    },
    {
      icon: <FileCode className="w-6 h-6 text-emerald-600" />,
      title: "Complete Verified Source Code",
      description: "Fully commented, modular, industry-grade source code with clean architecture, requirements.txt, setup scripts, and zero syntax errors.",
      highlight: "Clean Code & Comments"
    },
    {
      icon: <Database className="w-6 h-6 text-indigo-600" />,
      title: "Pre-trained Weights & Cleaned Datasets",
      description: "Standard benchmark datasets (Kaggle, NIH, EyePACS, BraTS), cleaned SQL database schemas, and pre-trained neural network checkpoint files.",
      highlight: "Zero Dataset Prep Hassle"
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-700" />,
      title: "Zero-Plagiarism Project Report",
      description: "Complete rough draft & final report formatted strictly to Anna University, VTU, JNTU, or Autonomous College guidelines with <10% Turnitin similarity.",
      highlight: "Turnitin Verified (<10%)"
    },
    {
      icon: <Presentation className="w-6 h-6 text-amber-600" />,
      title: "3-Stage College Review PPTs",
      description: "Professional PowerPoint slides specifically structured for Review 1 (Concept/Abstract), Review 2 (Architecture/50% Code), and Final Viva Review.",
      highlight: "Ready for College Panels"
    },
    {
      icon: <Video className="w-6 h-6 text-rose-600" />,
      title: "Full HD Execution Demo Video",
      description: "Step-by-step high-definition video recording showing environment setup, code compilation, input feeding, and output result verification.",
      highlight: "Lifelong Video Guide"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-cyan-600" />,
      title: "1-on-1 Viva Voce Coaching & Handbook",
      description: "Personal mentorship sessions with Priyadarshini and domain experts, plus a curated 50+ question viva handbook with answers examiners frequently ask.",
      highlight: "100% Viva Confidence"
    },
    {
      icon: <Laptop className="w-6 h-6 text-slate-700" />,
      title: "Free Remote Environment Installation",
      description: "Complete software toolchain installation (Python, CUDA, Anaconda, Vivado, MATLAB, Docker) on your personal laptop via AnyDesk/TeamViewer.",
      highlight: "Runs on Your Laptop"
    },
    {
      icon: <Award className="w-6 h-6 text-purple-600" />,
      title: "Verified Internship & Course Certificate",
      description: "Official ISO 9001:2015 certified project completion credential and industry internship certificate with online QR-code verification.",
      highlight: "Career Resume Value"
    }
  ];

  return (
    <section id="deliverables" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Technofinity Quality Guarantee</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001554] tracking-tight">
            What Every Technofinity Student Receives
          </h2>
          <p className="mt-3 text-base text-slate-600">
            We don't just hand you a folder of code. We deliver an end-to-end academic package that guarantees maximum marks, seamless college review clearances, and zero exam stress.
          </p>
        </div>

        {/* 9 Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                    {item.icon}
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-blue-50 text-[#0050CD] border border-blue-200">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#001554] mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Included in All Final Year Packages</span>
              </div>
            </div>
          ))}
        </div>

        {/* Deliverables Assurance Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#001554] via-[#003380] to-[#0188FE] rounded-2xl p-8 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-900/20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-cyan-200 mb-3 border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Turnkey Ownership</span>
            </div>
            <h3 className="text-2xl font-black tracking-tight text-white">
              Need Custom University Templates or Fast-Track 48h Delivery?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-200 leading-relaxed">
              Facing an urgent college review deadline? Our rapid delivery team can set up your complete project, slides, and demo video in under 48 hours with personal AnyDesk setup.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenBookingModal({ title: "Urgent 48h Delivery Request" })}
              className="px-6 py-3.5 text-xs font-bold text-[#001554] bg-white hover:bg-slate-100 rounded-xl shadow-md transition-colors"
            >
              Request Fast-Track Delivery
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DeliverablesMatrix;
