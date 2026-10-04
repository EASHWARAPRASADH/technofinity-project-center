import React from 'react';
import { 
  Award, 
  Calendar, 
  BookOpen, 
  CheckCircle2, 
  Users, 
  Briefcase, 
  ArrowRight, 
  Sparkles,
  GraduationCap
} from 'lucide-react';

export const InternshipsSection = ({ onOpenBookingModal }) => {
  const programs = [
    {
      title: "15-Day Fast-Track Winter / Summer IPT",
      duration: "15 Days (30 Hours Hands-on)",
      target: "2nd & 3rd Year Engineering & Polytechnic Students",
      description: "Intensive crash training covering fundamental coding, hardware circuit debugging, and development of 1 mini project with university-approved IPT certificate.",
      highlights: [
        "Hands-on Lab Experiments",
        "1 Mini-Project Deployment",
        "Anna Univ / AICTE Formatted Certificate",
        "Resume Preparation Session"
      ],
      badge: "College Requirement Ready"
    },
    {
      title: "30-Day Project-Integrated Internship",
      duration: "1 Month (60 Hours)",
      target: "Pre-Final & Final Year Students (CSE, IT, ECE, EEE, Mech)",
      description: "Work on a live industry project module with senior software architects. Complete source code implementation, Git version control, and verifiable project credential.",
      highlights: [
        "Live Industry Problem Statement",
        "Git & Cloud Deployment Workflow",
        "Letter of Recommendation (LOR)",
        "Technical Viva & Review Practice"
      ],
      badge: "Most Popular"
    },
    {
      title: "3-Month Corporate Mentorship Track",
      duration: "3 Months (Hybrid / Offline)",
      target: "Graduating Students & Job Seekers",
      description: "Deep dive into production architectures, microservices, containerization, and data structures. Mock technical interviews with corporate hiring managers.",
      highlights: [
        "Enterprise Capstone Project",
        "1-on-1 Senior Architect Mentorship",
        "Direct Placement Referrals to TIS Partner Companies",
        "Portfolio & GitHub Profile Polish"
      ],
      badge: "Placement Track"
    }
  ];

  return (
    <section id="internships" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0050CD] mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Industrial Career Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001554] tracking-tight">
            Certified Internships & In-Plant Training (IPT)
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Fulfill your mandatory college internship credits with real-world technical training at Technofinity. Learn directly from practicing software developers and embedded engineers.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-blue-50 text-[#0050CD] border border-blue-200">
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-slate-500 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-[#0050CD]" />
                    <span>{item.duration.split(' ')[0]} {item.duration.split(' ')[1]}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#001554] mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100 mb-6">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Program Deliverables:</p>
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBookingModal({ title: `Internship Application: ${item.title}` })}
                  className="w-full py-2.5 px-3 text-xs font-bold text-[#001554] hover:text-white bg-slate-50 hover:bg-[#0050CD] border border-slate-200 hover:border-[#0050CD] rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <span>Register for Batch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InternshipsSection;
