import React from 'react';
import { Logo } from './Logo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  BookOpen, 
  Send,
  MessageCircle
} from 'lucide-react';
import { contactConfig } from '../data/contactConfig';

export const Footer = ({ onOpenBookingModal }) => {
  return (
    <footer className="bg-[#000f3d] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white/10 p-3 rounded-2xl inline-block border border-white/10 backdrop-blur-sm">
              <Logo className="h-10" variant="dark" />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              <span className="text-white font-semibold">{contactConfig.domain}</span> is India's premier academic project center empowering engineering graduates with authentic IEEE 2025–2026 titles, turnkey source code, Turnitin-verified reports, and 1-on-1 viva coaching.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-900/40 border border-blue-500/30 text-xs text-cyan-300">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>{contactConfig.legacy}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Engineering Domains (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Project Domains
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">AI & Machine Learning (GenAI)</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Cloud Computing & Cybersecurity</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">IoT & Smart Embedded Systems</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Blockchain & Decentralized Web3</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Full Stack Web & Mobile Apps</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">VLSI Design & Hardware DSP (ECE)</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Electric Vehicles & Smart Grid (EEE)</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Robotics & Mechatronics (ROS 2)</a></li>
            </ul>
          </div>

          {/* Col 3: Academic Resources (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">IEEE 2026 Titles</a></li>
              <li><a href="#deliverables" className="hover:text-cyan-400 transition-colors">Deliverables Matrix</a></li>
              <li><a href="#process" className="hover:text-cyan-400 transition-colors">5-Step Process</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Cost Estimator</a></li>
              <li><a href="#internships" className="hover:text-cyan-400 transition-colors">Summer/Winter IPT</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About TIS Legacy</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact Priyadarshini</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
              Academic Helpline
            </h4>
            
            <div className="space-y-2 text-xs text-slate-300">
              <p className="font-semibold text-white">
                Contact: {contactConfig.contactPerson} ({contactConfig.designation.split('&')[0]})
              </p>
              
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={`tel:${contactConfig.phone}`} className="hover:text-white">
                  {contactConfig.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={`mailto:${contactConfig.emailPrimary}`} className="hover:text-white truncate">
                  {contactConfig.emailPrimary}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-[11px] leading-tight text-slate-400">
                  {contactConfig.addressLine1}, {contactConfig.city}, {contactConfig.state}
                </span>
              </div>
            </div>

            {/* Quick Abstract Request Box */}
            <div className="pt-2">
              <p className="text-[11px] font-semibold text-white mb-1.5">
                Subscribe for IEEE 2026 Title Updates:
              </p>
              <div className="flex gap-1.5">
                <input
                  type="email"
                  placeholder="Enter email or WhatsApp..."
                  className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                />
                <button
                  onClick={() => onOpenBookingModal({ title: "IEEE Title Newsletter Subscription" })}
                  className="px-3 py-2 bg-gradient-to-r from-[#0050CD] to-[#0188FE] hover:to-cyan-400 text-white rounded-lg text-xs font-bold shrink-0 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Accreditation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} <span className="text-slate-300 font-semibold">{contactConfig.domain}</span>. All rights reserved. An initiative powered by <span className="text-cyan-400 font-semibold">TIS Engineering</span>.
          </p>

          <div className="flex items-center gap-4 text-[11px]">
            <span>ISO 9001:2015 Certified Center</span>
            <span>•</span>
            <span>Anna Univ & VTU Format Compliant</span>
            <span>•</span>
            <span>Turnitin Plagiarism Verified</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
