import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { Logo } from './Logo';
import { contactConfig } from '../data/contactConfig';

export const Navbar = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Track scroll for sticky backdrop and active link highlighting
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['domains', 'projects', 'deliverables', 'process', 'pricing', 'internships', 'about', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects', id: 'projects', badge: '2026' },
    { name: 'Domains', href: '#domains', id: 'domains' },
    { name: 'Deliverables', href: '#deliverables', id: 'deliverables' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'Internships', href: '#internships', id: 'internships' },
    { name: 'About TIS', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, href) => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-200 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/90 py-2 sm:py-2.5' 
        : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/60 py-3 sm:py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center group py-1 shrink-0">
            <Logo className="h-10 sm:h-12" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-all duration-150 relative flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#0050CD] bg-blue-50/80 font-bold'
                      : 'text-slate-600 hover:text-[#0050CD] hover:bg-slate-50'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.2 text-[9px] font-black rounded-full bg-cyan-100 text-[#0050CD] border border-cyan-200">
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            
            {/* Phone Quick Link */}
            <a
              href={`tel:${contactConfig.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#0050CD] rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 transition-all"
              title={`Call Priyadarshini: ${contactConfig.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#0050CD]" />
              <span className="hidden xl:inline">{contactConfig.phoneDisplay}</span>
              <span className="xl:hidden">Call</span>
            </a>

            {/* WhatsApp Quick Icon */}
            <a
              href={`https://wa.me/${contactConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(contactConfig.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors"
              title="WhatsApp Priyadarshini"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenBookingModal({ title: "General Inquiry & Free Abstract Request" })}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#001554] via-[#0050CD] to-[#0188FE] hover:from-[#000f3d] hover:to-[#0050cd] rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <span>Get Abstract</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-1.5">
            <a
              href={`tel:${contactConfig.phone}`}
              className="sm:hidden p-2 rounded-lg text-[#0050CD] bg-blue-50 border border-blue-100"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-xl shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-blue-50 hover:text-[#0050CD] transition-colors"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-cyan-100 text-[#0050CD]">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}

            <div className="pt-4 mt-3 border-t border-slate-100 space-y-2.5">
              
              {/* Priyadarshini Contact Card */}
              <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#001554]">Contact {contactConfig.contactPerson}</p>
                  <p className="text-[11px] text-slate-600 font-medium">{contactConfig.phoneDisplay}</p>
                </div>
                <a
                  href={`tel:${contactConfig.phone}`}
                  className="p-2 rounded-lg bg-[#0050CD] text-white shadow-sm"
                  aria-label="Call Now"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBookingModal({ title: "General Inquiry & Free Abstract Request" });
                  }}
                  className="w-full py-2.5 px-3 text-xs font-bold text-center text-white bg-[#0050CD] rounded-xl shadow-sm"
                >
                  Request Abstract
                </button>
                <a
                  href={`https://wa.me/${contactConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(contactConfig.whatsappDefaultMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 text-xs font-bold text-center text-emerald-800 bg-emerald-100 border border-emerald-200 rounded-xl flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
