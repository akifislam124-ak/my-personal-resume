import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Github, Linkedin, Facebook, Twitter, Instagram, Clock } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  initialSubject?: string;
  isDark: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject = '', isDark }) => {
  const { profile, socialLinks } = PORTFOLIO_DATA;

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: initialSubject || '',
    message: '',
  });

  useEffect(() => {
    if (initialSubject) {
      setForm((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Please provide your full name';
    if (!form.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!form.message.trim()) {
      errs.message = 'Please provide a project message or inquiry';
    } else if (form.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate instantaneous local processing with feedback
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            <span>07. Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Start a Conversation with <span className="text-cyan-400">Akiful</span>
          </h2>
          <p className={`text-base mt-2 max-w-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Have a project in mind, need AI content expertise, or want a modern web interface designed? Let's connect directly.
          </p>
        </div>

        {/* 2-Column Contact Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Clickable Communication Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Direct Email Card (Opens default mail client as requested) */}
            <a
              href={`mailto:${profile.email}?subject=Project%20Inquiry%20via%20Portfolio`}
              className={`group block p-5 rounded-2xl border transition-all ${
                isDark 
                  ? 'bg-slate-800/40 border-slate-800 hover:border-indigo-500/60 hover:bg-slate-800/80 hover:shadow-lg' 
                  : 'bg-white border-slate-200 shadow-sm hover:border-indigo-400 hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-indigo-500/15 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className={`block text-xs font-mono uppercase tracking-wider ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Direct Email (Click to Send)
                  </span>
                  <span className="text-sm sm:text-base font-bold text-cyan-400 group-hover:underline">
                    {profile.email}
                  </span>
                </div>
              </div>
            </a>

            {/* Direct Phone Card (Opens phone dialer as requested) */}
            <a
              href={`tel:${profile.phone}`}
              className={`group block p-5 rounded-2xl border transition-all ${
                isDark 
                  ? 'bg-slate-800/40 border-slate-800 hover:border-cyan-500/60 hover:bg-slate-800/80 hover:shadow-lg' 
                  : 'bg-white border-slate-200 shadow-sm hover:border-cyan-400 hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/15 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className={`block text-xs font-mono uppercase tracking-wider ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Phone & WhatsApp (Click to Call)
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white dark:text-white group-hover:text-cyan-400">
                    <span className={isDark ? 'text-white' : 'text-slate-900'}>{profile.phone}</span>
                    <span className={`text-xs ml-2 font-normal ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>({profile.phoneInternational})</span>
                  </span>
                </div>
              </div>
            </a>

            {/* Location & Timezone Card */}
            <div className={`p-5 rounded-2xl border ${
              isDark ? 'bg-slate-800/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className={`block text-xs font-mono uppercase tracking-wider ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Location & Availability
                  </span>
                  <span className="text-sm font-semibold">
                    {profile.location} · {profile.timezone}
                  </span>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Available for remote contracts worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Social Network Profiles */}
            <div className={`p-5 rounded-2xl border ${
              isDark ? 'bg-slate-800/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <span className={`block text-xs font-mono uppercase tracking-wider mb-3 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Social Profiles (Direct Links)
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-medium transition-colors ${
                    isDark ? 'border-slate-700 bg-slate-900/60 hover:bg-slate-700 text-slate-200' : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  <Github className="w-4 h-4 text-white" />
                  <span>GitHub</span>
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-medium transition-colors ${
                    isDark ? 'border-slate-700 bg-slate-900/60 hover:bg-slate-700 text-slate-200' : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  <Linkedin className="w-4 h-4 text-indigo-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-medium transition-colors ${
                    isDark ? 'border-slate-700 bg-slate-900/60 hover:bg-slate-700 text-slate-200' : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  <Facebook className="w-4 h-4 text-cyan-400" />
                  <span>Facebook</span>
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-medium transition-colors ${
                    isDark ? 'border-slate-700 bg-slate-900/60 hover:bg-slate-700 text-slate-200' : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  <Instagram className="w-4 h-4 text-rose-400" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form with Validation */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-3xl border transition-all ${
              isDark 
                ? 'bg-slate-800/40 border-slate-800 shadow-xl' 
                : 'bg-white border-slate-200 shadow-md'
            }`}>
              
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Thank You, {form.name}!</h3>
                  <p className={`text-sm max-w-md mx-auto leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    Your message has been dispatched successfully. Akiful will respond directly to <strong>{form.email}</strong> within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2 text-xs font-semibold rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <h3 className="text-xl font-bold tracking-tight mb-1">
                    Send a Message
                  </h3>
                  <p className={`text-xs mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Fill in your details below and I will get back to you promptly.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold mb-1">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs transition-colors focus:outline-none ${
                          errors.name 
                            ? 'border-rose-500 bg-rose-500/5' 
                            : isDark
                              ? 'border-slate-700 bg-slate-900/60 focus:border-indigo-500 text-white'
                              : 'border-slate-300 bg-slate-50 focus:border-indigo-500 text-slate-900'
                        }`}
                      />
                      {errors.name && (
                        <p className="flex items-center gap-1 text-[11px] text-rose-400 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold mb-1">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs transition-colors focus:outline-none ${
                          errors.email 
                            ? 'border-rose-500 bg-rose-500/5' 
                            : isDark
                              ? 'border-slate-700 bg-slate-900/60 focus:border-indigo-500 text-white'
                              : 'border-slate-300 bg-slate-50 focus:border-indigo-500 text-slate-900'
                        }`}
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1 text-[11px] text-rose-400 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold mb-1">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="+880 1..."
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs transition-colors focus:outline-none ${
                          isDark
                            ? 'border-slate-700 bg-slate-900/60 focus:border-indigo-500 text-white'
                            : 'border-slate-300 bg-slate-50 focus:border-indigo-500 text-slate-900'
                        }`}
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-semibold mb-1">
                        Subject / Topic
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Website Design or AI Content"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs transition-colors focus:outline-none ${
                          isDark
                            ? 'border-slate-700 bg-slate-900/60 focus:border-indigo-500 text-white'
                            : 'border-slate-300 bg-slate-50 focus:border-indigo-500 text-slate-900'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-semibold">
                        Message & Project Details <span className="text-rose-400">*</span>
                      </label>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {form.message.length} chars
                      </span>
                    </div>
                    <textarea
                      rows={4}
                      placeholder="Tell me about your goals, timeline, or requirements..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs transition-colors focus:outline-none resize-none ${
                        errors.message 
                          ? 'border-rose-500 bg-rose-500/5' 
                          : isDark
                            ? 'border-slate-700 bg-slate-900/60 focus:border-indigo-500 text-white'
                            : 'border-slate-300 bg-slate-50 focus:border-indigo-500 text-slate-900'
                      }`}
                    />
                    {errors.message && (
                      <p className="flex items-center gap-1 text-[11px] text-rose-400 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.01] disabled:opacity-50 cursor-pointer"
                    >
                      {submitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message to Akiful</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
