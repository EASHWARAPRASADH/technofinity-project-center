import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { contactConfig } from '../data/contactConfig';

export const FloatingContact = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white text-[#001554] shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all hover:-translate-y-0.5 active:scale-95"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Direct Call Button */}
      <a
        href={`tel:${contactConfig.phone}`}
        className="group relative flex items-center gap-2 p-3 sm:px-4 sm:py-3 rounded-full bg-[#001554] text-white shadow-xl hover:bg-[#0050CD] transition-all hover:scale-105 active:scale-95"
        title={`Call ${contactConfig.contactPerson}`}
      >
        <Phone className="w-5 h-5 text-cyan-400" />
        <span className="hidden sm:inline text-xs font-bold pr-1">
          Call Priyadarshini
        </span>
      </a>

      {/* Floating WhatsApp Action with Pulse */}
      <a
        href={`https://wa.me/${contactConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(contactConfig.whatsappDefaultMsg)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl transition-all hover:scale-105 active:scale-95"
        title="Instant WhatsApp Chat"
      >
        {/* Pulsing ring */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full animate-ping pointer-events-none" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white pointer-events-none" />

        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <span className="hidden sm:inline text-xs font-black tracking-wide">
          WhatsApp Us
        </span>
      </a>

    </div>
  );
};

export default FloatingContact;
