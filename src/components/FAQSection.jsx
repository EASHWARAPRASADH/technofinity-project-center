import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { faqsData } from '../data/faqsData';
import { contactConfig } from '../data/contactConfig';

export const FAQSection = () => {
  const [openId, setOpenId] = useState(1); // First open by default

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0050CD] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001554] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Everything you need to know about IEEE base papers, code execution on student laptops, college review guidelines, and viva preparation.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className={`w-full p-5 text-left flex items-center justify-between gap-4 transition-colors ${
                    isOpen ? 'bg-blue-50/50' : 'bg-white hover:bg-slate-50'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#001554]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0050CD] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 bg-blue-50/50 border-t border-blue-100/60 animate-in fade-in duration-200">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-3">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Help Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-[#001554]">Still have a specific question?</h4>
            <p className="text-xs text-slate-500">
              Priyadarshini and our academic team are available for instant telephonic & WhatsApp consultation.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${contactConfig.phone}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-[#001554] bg-white border border-slate-300 hover:border-blue-400 rounded-xl shadow-2xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0050CD]" />
              <span>Call: {contactConfig.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${contactConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(contactConfig.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-2xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
