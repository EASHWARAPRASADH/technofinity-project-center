import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  CheckCircle2, 
  Send, 
  MessageCircle, 
  Phone, 
  Sparkles,
  Lock
} from 'lucide-react';
import { contactConfig } from '../data/contactConfig';

export const BookProjectModal = ({ project, onClose, onSubmitted }) => {
  const modalRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    college: '',
    teamSize: '3 Members',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onSubmitted) {
        onSubmitted({
          name: formData.name,
          phone: formData.phone,
          message: `Booking received for ${project?.code || 'Project'}! Priyadarshini's team will contact you shortly.`
        });
      }
      setTimeout(() => {
        onClose();
      }, 2500);
    }, 500);
  };

  const getWhatsAppBookingLink = () => {
    const projInfo = project ? `${project.code} - ${project.title}` : 'IEEE Final Year Project';
    const text = `Hello Priyadarshini, I would like to reserve the project: ${projInfo}. My Name: ${formData.name || '[Name]'}, College: ${formData.college || '[College]'}, Mobile: ${formData.phone || '[Mobile]'}. Please guide me on next steps.`;
    return `https://wa.me/${contactConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001554]/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          onClose();
        }
      }}
    >
      <div 
        ref={modalRef}
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
      >
        
        {/* Header */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-[#0050CD]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#001554]">
                Book Project / Request Base Paper
              </h3>
              <p className="text-xs text-slate-500">
                Priyadarshini's Academic Team
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          
          {/* Project Summary Banner */}
          {project && (
            <div className="p-3.5 mb-5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-[#001554]">
              <span className="font-mono font-bold text-[#0050CD] mr-2">[{project.code}]</span>
              <span className="font-semibold">{project.title}</span>
            </div>
          )}

          {isSuccess ? (
            <div className="py-8 text-center bg-emerald-50 rounded-xl border border-emerald-200">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
              <h4 className="text-base font-bold text-emerald-900">Project Reserved Successfully!</h4>
              <p className="text-xs text-emerald-700 mt-1">
                Priyadarshini has received your reservation and will contact you via WhatsApp shortly with the full base paper PDF.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priyadharshan K"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0050CD] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  WhatsApp / Contact Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98400 12345"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0050CD] focus:bg-white transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    College / University <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CEG Anna Univ"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0050CD] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Team Members
                  </label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0050CD]"
                  >
                    <option value="Individual (1 Member)">Individual (1 Member)</option>
                    <option value="2 Members">2 Members</option>
                    <option value="3 Members">3 Members (Standard)</option>
                    <option value="4 Members">4 Members</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Optional Message / Review Deadline
                </label>
                <input
                  type="text"
                  placeholder="e.g. Review 1 deadline is next week, need PPT urgently"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0050CD] focus:bg-white transition-all"
                />
              </div>

              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 text-xs font-bold text-white bg-gradient-to-r from-[#001554] via-[#0050CD] to-[#0188FE] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Reserving...' : 'Confirm Reservation Online'}</span>
                </button>

                <a
                  href={getWhatsAppBookingLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Instant WhatsApp Reservation</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                <Lock className="w-3 h-3" />
                <span>Zero spam guarantee. 100% academic privacy.</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};

export default BookProjectModal;
