import React from 'react';
import { Sparkles, Phone, MessageCircle } from 'lucide-react';
import { contactConfig } from '../data/contactConfig';

export const AnnouncementBar = () => {
  return (
    <div className="bg-gradient-to-r from-[#001554] via-[#003896] to-[#0188FE] text-white py-2 px-4 text-xs font-medium shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-200 text-[11px] font-semibold tracking-wide border border-cyan-400/30">
            <Sparkles className="w-3 h-3 text-cyan-300 animate-pulse" />
            2025–2026 Academic Batch
          </span>
          <p className="truncate">
            <span className="font-semibold text-white">Admissions Open:</span> IEEE Projects, Turnkey Source Code, Viva Coaching & Internships!
          </p>
        </div>

        <div className="flex items-center gap-4 text-slate-200">
          <a 
            href={`tel:${contactConfig.phone}`}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-cyan-400" />
            <span>Talk to {contactConfig.contactPerson}: <span className="font-semibold text-white">{contactConfig.phoneDisplay}</span></span>
          </a>

          <span className="hidden md:inline text-white/30">|</span>

          <a 
            href={`https://wa.me/${contactConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(contactConfig.whatsappDefaultMsg)}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-emerald-300 hover:text-white transition-colors"
          >
            <MessageCircle className="w-3 h-3" />
            <span>Instant WhatsApp Chat</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
