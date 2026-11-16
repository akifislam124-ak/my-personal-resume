import React from 'react';
import { X, Printer, Mail, Phone, MapPin, ExternalLink, GraduationCap, Briefcase, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  avatarImage?: string;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, isDark, avatarImage }) => {
  if (!isOpen) return null;

  const { profile, skills, timeline, socialLinks } = PORTFOLIO_DATA;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div 
        className={`relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden border ${
          isDark ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className={`flex items-center justify-between px-6 py-4 border-b ${
          isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-100 bg-slate-50'
        }`}>
          <div>
            <h2 className="text-lg font-bold">Curriculum Vitae</h2>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Md Akiful Islam · Updated 2026
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className={`p-1.5 rounded-lg transition-colors ${
                isDark ? 'hover:bg-slate-800 text-slate-400 hover:text-slate-200' : 'hover:bg-slate-200 text-slate-500 hover:text-slate-800'
              }`}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Printable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-sm">
          {/* Top Profile Header */}
          <div className={`pb-6 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-indigo-500/60 shadow-md shrink-0 bg-slate-800 flex items-center justify-center">
                  {avatarImage ? (
                    <img
                      src={avatarImage}
                      alt={profile.fullName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-bold text-xl text-indigo-400">AI</span>
                  )}
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-indigo-400">
                    {profile.fullName}
                  </h1>
                  <p className="text-base font-medium mt-0.5 text-slate-300">
                    {profile.tagline}
                  </p>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Student at {profile.educationBrief} · Age: {profile.age}
                  </p>
                </div>
              </div>

              <div className={`text-xs space-y-1.5 sm:text-right ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  <a href={`mailto:${profile.email}`} className="hover:underline">{profile.email}</a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-indigo-400" />
                  <a href={`tel:${profile.phone}`} className="hover:underline">{profile.phoneInternational}</a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{profile.location} ({profile.timezone})</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
                  <a href={socialLinks.github} target="_blank" rel="noreferrer" className="hover:underline">
                    github.com/akifislam124-ak
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
              Professional Summary
            </h3>
            <p className={`leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {profile.bioIntro} {profile.bioDetailed}
            </p>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <h3 className="text-xs font-semibold tracking-wider uppercase text-indigo-400">
                Education
              </h3>
            </div>
            <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <span className="font-bold text-sm">{profile.degree}</span>
                <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>2023 - Present</span>
              </div>
              <p className={`text-xs mt-1 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {profile.educationBrief}
              </p>
              <ul className={`mt-2.5 list-disc list-inside text-xs space-y-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Advanced English Literature, Stylistics, Pragmatics, and Rhetorical Structure</li>
                <li>Harnessing literary discipline and linguistics for advanced generative AI prompt engineering</li>
              </ul>
            </div>
          </div>

          {/* Work & Project Experience */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-4 h-4 text-indigo-400" />
              <h3 className="text-xs font-semibold tracking-wider uppercase text-indigo-400">
                Experience & Freelance History (2 Years)
              </h3>
            </div>
            <div className="space-y-3">
              {timeline.filter(t => t.type === 'experience').map((item) => (
                <div key={item.id} className={`p-4 rounded-xl border ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <span className="font-bold text-sm">{item.title}</span>
                    <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.period}</span>
                  </div>
                  <p className="text-xs text-indigo-400 mt-0.5">{item.institutionOrRole} · {item.location}</p>
                  <p className={`text-xs mt-1.5 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{item.description}</p>
                  <ul className={`mt-2 list-disc list-inside text-xs space-y-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {item.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical & Content Skills */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-4 h-4 text-indigo-400" />
              <h3 className="text-xs font-semibold tracking-wider uppercase text-indigo-400">
                Core Competencies & Toolset
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {skills.map((cat, idx) => (
                <div key={idx} className={`p-3.5 rounded-xl border ${isDark ? 'bg-slate-800/40 border-slate-700/80' : 'bg-slate-50 border-slate-200'}`}>
                  <h4 className="text-xs font-bold text-indigo-400 mb-2">{cat.category}</h4>
                  <ul className={`text-xs space-y-1.5 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {cat.skills.map((s, i) => (
                      <li key={i} className="flex justify-between items-center">
                        <span>{s.name}</span>
                        <span className="text-[11px] font-mono text-indigo-400/80">{s.level}%</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`flex items-center justify-between px-6 py-3 border-t text-xs ${
          isDark ? 'border-slate-800 bg-slate-900/90 text-slate-400' : 'border-slate-200 bg-slate-50 text-slate-500'
        }`}>
          <span>Official CV of {profile.fullName}</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-200 font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
