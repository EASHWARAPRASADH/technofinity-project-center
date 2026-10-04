import React, { useEffect, useRef } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  ArrowRight, 
  BookOpen, 
  Sparkles,
  Share2
} from 'lucide-react';
import { contactConfig } from '../data/contactConfig';

export const AbstractModal = ({ project, onClose, onBookProject }) => {
  const modalRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleDownloadPDF = () => {
    // Generate simulated downloadable text file / PDF representation
    const content = `TECHNOFINITY PROJECT INNOVATION CENTER
Domain: Technofinity.com | Contact: ${contactConfig.contactPerson} (${contactConfig.phoneDisplay})
================================================================================
PROJECT CODE: ${project.code}
TITLE: ${project.title}
DEPARTMENT: ${project.department} | DOMAIN: ${project.domain} | YEAR: ${project.year}
BASE PAPER: ${project.basePaperCitation}
================================================================================

1. ABSTRACT:
${project.abstract}

2. EXISTING SYSTEM LIMITATIONS:
${project.existingSystem}

3. PROPOSED SYSTEM ADVANTAGES:
${project.proposedSystem}

4. SYSTEM MODULES:
${project.modules.map((m, i) => `Module ${i+1}: ${m}`).join('\n')}

5. TECHNOLOGY STACK:
${project.techStack.join(', ')}

================================================================================
For full source code, base paper PDF, and college review PPT, contact:
Priyadarshini (${contactConfig.phoneDisplay}) | ${contactConfig.emailPrimary}
Website: https://${contactConfig.domain}
================================================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${project.code}-Abstract-Technofinity.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001554]/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        // Light dismiss if clicked outside modal content
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          onClose();
        }
      }}
    >
      <div 
        ref={modalRef}
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-slate-200 flex flex-col animate-in zoom-in-95 duration-200"
      >
        
        {/* Modal Header */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 text-xs font-mono font-bold rounded-lg bg-blue-100 text-[#0050CD] border border-blue-200">
                {project.code}
              </span>
              <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800">
                {project.year}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                {project.department}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#001554] leading-snug">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors shrink-0"
            aria-label="Close Abstract Dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-xs sm:text-sm">
          
          {/* Base Paper Citation */}
          <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100 flex items-center gap-2.5 text-xs text-[#001554]">
            <BookOpen className="w-4 h-4 text-[#0050CD] shrink-0" />
            <span><strong>Base Paper Citation:</strong> <em>{project.basePaperCitation}</em></span>
          </div>

          {/* Abstract */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#0050CD]" />
              Executive Abstract
            </h4>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm bg-slate-50 p-4 rounded-xl border border-slate-100">
              {project.abstract}
            </p>
          </div>

          {/* Existing vs Proposed System */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-200/60">
              <h5 className="text-xs font-bold text-rose-800 mb-1.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                Limitations of Existing System:
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                {project.existingSystem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200/60">
              <h5 className="text-xs font-bold text-emerald-800 mb-1.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Innovations of Proposed System:
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                {project.proposedSystem}
              </p>
            </div>
          </div>

          {/* System Architecture Modules */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#0050CD]" />
              Modular Architecture & Development Breakdown
            </h4>
            <div className="space-y-2">
              {project.modules.map((mod, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <span className="w-5 h-5 rounded-md bg-[#001554] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-xs text-slate-700 font-medium">{mod}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hardware & Tech Requirements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <p className="text-[11px] font-bold uppercase text-slate-500 mb-1.5">Technology Stack:</p>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map(t => (
                  <span key={t} className="px-2.5 py-1 text-xs font-semibold text-slate-800 bg-slate-100 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase text-slate-500 mb-1.5">Hardware / Platform:</p>
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700">
                {project.hardwareRequired || "Standard Laptop (Intel i5/i7 or AMD, 8GB RAM)"}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleDownloadPDF}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-[#001554] hover:text-[#0050CD] bg-white border border-slate-300 hover:border-blue-300 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-[#0050CD]" />
            <span>Download Synopsis & Abstract</span>
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onBookProject(project);
              }}
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#001554] via-[#0050CD] to-[#0188FE] rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Book This Title Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AbstractModal;
