import React, { useState } from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  Sparkles, 
  MessageCircle, 
  PhoneCall, 
  ShieldCheck, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { contactConfig } from '../data/contactConfig';

export const CostEstimator = ({ onOpenBookingModal }) => {
  const [degree, setDegree] = useState('B.E / B.Tech');
  const [domain, setDomain] = useState('AI & Machine Learning / GenAI');
  const [packageTier, setPackageTier] = useState('premium');
  const [includeHardware, setIncludeHardware] = useState(false);

  const packages = [
    {
      id: 'mini',
      name: 'Essential Mini Project',
      tag: 'Academic Mini',
      priceDesc: 'Budget Friendly',
      deliverables: [
        'Complete Working Source Code',
        'Requirements & Installation Guide',
        'Basic Project Synopsis & Report',
        'Email Support'
      ]
    },
    {
      id: 'standard',
      name: 'Standard Final Year Pack',
      tag: 'Best for 3-Member Teams',
      priceDesc: 'Comprehensive',
      deliverables: [
        'Everything in Mini Project',
        'IEEE Base Paper PDF (2025/2026)',
        'Anna Univ / VTU Format Full Report',
        '3 College Review PPT Decks (Review 1, 2, Final)',
        'Full HD Execution Demo Video',
        'AnyDesk Remote Setup Support'
      ]
    },
    {
      id: 'premium',
      name: 'IEEE Turnkey Premium',
      tag: 'Most Popular Choice',
      badge: 'Recommended',
      priceDesc: 'Complete Peace of Mind',
      deliverables: [
        'Everything in Standard Package',
        '1-on-1 Viva Voce Coaching with Priyadarshini',
        '50+ Question Examiner Q&A Handbook',
        'Zero-Plagiarism Turnitin Certificate (<10%)',
        'Free Unlimited Code Revisions for Guide Feedback',
        'Verified Student Internship Certificate (ISO 9001)'
      ]
    },
    {
      id: 'research',
      name: 'Research Paper Edition',
      tag: 'M.Tech / PhD & Honors',
      priceDesc: 'Publication Assured',
      deliverables: [
        'Everything in IEEE Turnkey Premium',
        'Original Scopus / IEEE Conference Paper Draft',
        'Literature Review Synthesis & Novel Architecture',
        'Journal Plagiarism Verification Report',
        'Peer-Review Revision Support'
      ]
    }
  ];

  const selectedPkg = packages.find(p => p.id === packageTier) || packages[2];

  const generateWhatsAppLink = () => {
    const text = `Hello Priyadarshini, I would like to get a quote for a ${degree} final year project in ${domain} with the ${selectedPkg.name} package${includeHardware ? ' (including Hardware Kit)' : ''}. Please share package fee and registration details.`;
    return `https://wa.me/${contactConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="pricing" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0050CD] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparent & Affordable Student Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001554] tracking-tight">
            Interactive Project Cost & Deliverable Estimator
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Tailor your project package based on your degree level, required university review deliverables, and hardware needs. No hidden charges.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
            
            {/* Step 1: Degree Selection */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Select Academic Program / Degree:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['B.E / B.Tech', 'M.E / M.Tech', 'MCA / BCA', 'Diploma / Poly'].map((deg) => (
                  <button
                    key={deg}
                    type="button"
                    onClick={() => setDegree(deg)}
                    className={`py-2.5 px-3 text-xs font-bold rounded-xl border transition-all ${
                      degree === deg
                        ? 'bg-[#001554] text-white border-[#001554] shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    {deg}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Domain Selection */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                2. Select Core Specialization:
              </label>
              <select
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="w-full px-4 py-3 text-xs font-medium text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0050CD]"
              >
                <option value="AI & Machine Learning / GenAI">AI & Machine Learning / Generative AI</option>
                <option value="Cloud Computing & Cybersecurity">Cloud Computing & Cybersecurity / eBPF</option>
                <option value="IoT & Smart Embedded Systems">IoT & Smart Embedded Systems (ESP32/RPi)</option>
                <option value="Blockchain & Web3 Healthcare">Blockchain & Web3 / Smart Contracts</option>
                <option value="Full Stack Web & Mobile App">Full Stack SaaS / Mobile Applications</option>
                <option value="VLSI & Digital Signal Processing">VLSI Design & Hardware Accelerators (ECE)</option>
                <option value="Power Electronics & EV Powertrain">Power Electronics & EV Powertrains (EEE)</option>
                <option value="Robotics & Autonomous Navigation">Robotics & Autonomous Navigation (Mech)</option>
              </select>
            </div>

            {/* Step 3: Package Tier Selection */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                3. Select Deliverables Package Tier:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {packages.map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setPackageTier(pkg.id)}
                    className={`p-4 rounded-xl border text-left transition-all relative ${
                      packageTier === pkg.id
                        ? 'bg-blue-50/80 border-[#0050CD] shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {pkg.badge && (
                      <span className="absolute top-2 right-2 px-2 py-0.5 text-[9px] font-bold rounded-full bg-[#0050CD] text-white">
                        {pkg.badge}
                      </span>
                    )}
                    <h4 className="text-xs font-bold text-[#001554]">{pkg.name}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">{pkg.tag}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Hardware Addon Toggle */}
            <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-[#001554]">Include Tested Physical Hardware Kit?</p>
                <p className="text-[11px] text-slate-500">For IoT, Robotics, ECE & EEE (Shipped or collected at Chennai lab)</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeHardware}
                  onChange={(e) => setIncludeHardware(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0050CD]"></div>
              </label>
            </div>

          </div>

          {/* Quotation & Deliverables Preview Column (Right) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-[#001554] text-white rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-300">
                  Custom Quotation Summary
                </span>
                <h3 className="text-xl font-black text-white mt-1">
                  {selectedPkg.name}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-1 rounded-md">
                  Student Subsidy Active
                </span>
              </div>
            </div>

            {/* Configuration Specs */}
            <div className="space-y-1.5 py-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Degree Level:</span>
                <span className="font-semibold text-white">{degree}</span>
              </div>
              <div className="flex justify-between">
                <span>Domain:</span>
                <span className="font-semibold text-white truncate max-w-[200px]">{domain}</span>
              </div>
              <div className="flex justify-between">
                <span>Hardware Option:</span>
                <span className="font-semibold text-white">{includeHardware ? 'Kit Included' : 'Software Simulation'}</span>
              </div>
            </div>

            {/* Included Deliverables List */}
            <div className="mt-5 pt-4 border-t border-white/10">
              <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 mb-3">
                Guaranteed Deliverables in this Package:
              </p>
              <ul className="space-y-2 text-xs text-slate-200">
                {selectedPkg.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
                {includeHardware && (
                  <li className="flex items-start gap-2 text-amber-300 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Tested Microcontroller / Sensor Hardware Kit Delivered</span>
                  </li>
                )}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-4 border-t border-white/10 space-y-3">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 text-xs font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-slate-900" />
                <span>Get Instant Quote via WhatsApp</span>
              </a>

              <button
                onClick={() => onOpenBookingModal({ 
                  title: `${selectedPkg.name} (${degree} - ${domain})` 
                })}
                className="w-full py-3.5 px-4 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-cyan-300" />
                <span>Request Callback from Priyadarshini</span>
              </button>
            </div>

            <p className="mt-4 text-[10px] text-center text-slate-400">
              * Special discounts available for student groups of 3 or more team members.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CostEstimator;
