import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  UserCheck, 
  ShieldCheck, 
  Sparkles,
  Building,
  CheckCircle2
} from 'lucide-react';
import { contactConfig } from '../data/contactConfig';

export const ContactSection = ({ onFormSubmitted }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    college: '',
    department: 'CSE / IT / AI&DS',
    domain: 'AI & Machine Learning / GenAI',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onFormSubmitted) {
        onFormSubmitted({
          name: formData.name,
          phone: formData.phone,
          message: `Inquiry received for ${formData.domain}! Priyadarshini's team will contact you shortly.`
        });
      }
      // Reset after 4s
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          phone: '',
          college: '',
          department: 'CSE / IT / AI&DS',
          domain: 'AI & Machine Learning / GenAI',
          message: ''
        });
      }, 4000);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0050CD] mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Connect Directly with Priyadarshini</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001554] tracking-tight">
            Schedule a Free Project Consultation
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Have questions about choosing an IEEE topic, college guide approvals, or scheduling a visit to our center? Our academic counseling team is here to assist you.
          </p>
        </div>

        {/* Contact Grid: Details on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Priyadarshini Profile & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Counselor Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#001554] via-[#0050CD] to-[#0188FE] flex items-center justify-center text-white text-xl font-black shrink-0 shadow-md">
                  P
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0050CD] uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    <span>Academic Project Lead</span>
                  </div>
                  <h3 className="text-xl font-black text-[#001554]">
                    {contactConfig.contactPerson}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {contactConfig.designation}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 space-y-3.5">
                
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0050CD] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Direct Contact Numbers</p>
                    <div className="flex flex-wrap gap-2 text-xs font-bold text-[#001554]">
                      <a href={`tel:${contactConfig.phone}`} className="hover:text-[#0050CD] transition-colors">
                        {contactConfig.phoneDisplay}
                      </a>
                      <span className="text-slate-300">/</span>
                      <a href={`tel:${contactConfig.phoneAlt}`} className="hover:text-[#0050CD] transition-colors">
                        {contactConfig.phoneAlt}
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Direct */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">WhatsApp Instant Chat</p>
                    <a
                      href={`https://wa.me/${contactConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(contactConfig.whatsappDefaultMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
                    >
                      <span>Chat with Priyadarshini on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Official Inquiries</p>
                    <div className="text-xs font-bold text-[#001554]">
                      <a href={`mailto:${contactConfig.emailPrimary}`} className="hover:text-[#0050CD] transition-colors block">
                        {contactConfig.emailPrimary}
                      </a>
                      <a href={`mailto:${contactConfig.emailSupport}`} className="hover:text-[#0050CD] transition-colors text-[11px] text-slate-500 font-normal">
                        {contactConfig.emailSupport}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Physical Location */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#0188FE] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Center Address</p>
                    <p className="text-xs font-bold text-[#001554]">
                      {contactConfig.addressLine1}
                    </p>
                    <p className="text-xs text-slate-600 leading-tight">
                      {contactConfig.addressLine2}, {contactConfig.city} - {contactConfig.pincode}, {contactConfig.state}, {contactConfig.country}.
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      {contactConfig.landmark}
                    </p>
                  </div>
                </div>

                {/* Operating Timings */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Office Working Hours</p>
                    <p className="text-xs font-semibold text-slate-700">
                      {contactConfig.timings}
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Quick Note Card */}
            <div className="p-4 bg-blue-50/70 rounded-xl border border-blue-200 text-xs text-slate-700 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#0050CD] shrink-0" />
              <span>
                <strong>Walk-in Guidance:</strong> Students can visit our center with their laptop for free project idea demonstration and base paper consultations.
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Consultation & Registration Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
            
            <div className="mb-6">
              <h3 className="text-xl font-black text-[#001554]">
                Send an Online Inquiry
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill out the details below. Priyadarshini and our technical team will review your requirements and respond within 15 minutes.
              </p>
            </div>

            {isSuccess ? (
              <div className="py-12 px-6 text-center bg-emerald-50 rounded-xl border border-emerald-200 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-emerald-900">Inquiry Received Successfully!</h4>
                <p className="text-xs text-emerald-700 mt-2 max-w-md mx-auto">
                  Thank you for reaching out to Technofinity. Priyadarshini will contact you on your WhatsApp number shortly with the requested project abstract and details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Student / Team Leader Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vignesh R"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0050CD] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      WhatsApp / Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0050CD] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* College Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    College / University Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anna University CEG / SRM / VIT / PSG Tech"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0050CD] focus:bg-white transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Department */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Engineering Department
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0050CD]"
                    >
                      <option value="CSE / IT / AI&DS">CSE / IT / AI&DS</option>
                      <option value="ECE / VLSI">ECE / Embedded Systems</option>
                      <option value="EEE / Power">EEE / EV & Smart Grids</option>
                      <option value="Mech / Mechatronics">Mech / Mechatronics</option>
                      <option value="MCA / BCA">MCA / BCA</option>
                      <option value="M.Tech / M.E">M.Tech / M.E (PG)</option>
                    </select>
                  </div>

                  {/* Domain */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Interested Technology Domain
                    </label>
                    <select
                      value={formData.domain}
                      onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0050CD]"
                    >
                      <option value="AI & Machine Learning / GenAI">AI & Machine Learning / GenAI</option>
                      <option value="Cloud Computing & Cybersecurity">Cloud Computing & Cybersecurity</option>
                      <option value="IoT & Smart Embedded Systems">IoT & Smart Embedded Systems</option>
                      <option value="Blockchain & Web3">Blockchain & Web3</option>
                      <option value="Full Stack Web & Mobile App">Full Stack Web & Mobile</option>
                      <option value="VLSI & Digital Signal Processing">VLSI & DSP (ECE)</option>
                      <option value="Power Electronics & EV">Power Systems & EV (EEE)</option>
                      <option value="Robotics & Automation">Robotics & Automation</option>
                      <option value="Custom Topic Discussion">Custom Topic Discussion</option>
                    </select>
                  </div>
                </div>

                {/* Message / Guide Requirements */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Specific Requirements or Questions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us if your guide gave specific algorithms, deadlines, or if you need hardware kits..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0050CD] focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 text-xs font-bold text-white bg-gradient-to-r from-[#001554] via-[#0050CD] to-[#0188FE] hover:from-[#000e38] hover:to-[#0050cd] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting details...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Details to Priyadarshini</span>
                    </>
                  )}
                </button>

                <p className="text-[10px] text-center text-slate-400">
                  🔒 Your details remain strictly confidential and will only be used for academic project coordination.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
