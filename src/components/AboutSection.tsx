import React from 'react';
import { GraduationCap, MapPin, Award, BookOpen, Clock, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AboutSectionProps {
  onContactClick: () => void;
  onOpenCv: () => void;
  isDark: boolean;
  avatarImage?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ 
  onContactClick, 
  onOpenCv, 
  isDark,
  avatarImage
}) => {
  const { profile, stats } = PORTFOLIO_DATA;
  const [imgError, setImgError] = React.useState(false);

  const quickFacts = [
    { label: "Full Name", value: profile.fullName },
    { label: "Age", value: `${profile.age} Years Old` },
    { label: "University", value: "National University, Bangladesh" },
    { label: "Department", value: "Department of English (Honors)" },
    { label: "Experience", value: `${profile.yearsOfExperience} Years (Design, AI, Web)` },
    { label: "Location", value: `${profile.location} (${profile.timezone})` },
    { label: "Languages", value: "English (Professional & Academic), Bengali (Native)" },
    { label: "Availability", value: "Open for Freelance & Remote Contracts" },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            <span>01. Who I Am</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About <span className="text-cyan-400">Md Akiful Islam</span>
          </h2>
          <p className={`text-base mt-2 max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Bridging the worlds of English language precision, modern generative AI tools, and responsive web design.
          </p>
        </div>

        {/* 2-Column Story and Fact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Detailed Story & Unique Value */}
          <div className="lg:col-span-7 space-y-6">
            <div className={`p-6 sm:p-8 rounded-2xl border space-y-4 ${
              isDark ? 'bg-slate-800/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className="text-xl font-bold text-indigo-400 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>The English Honors & Web Development Synergy</span>
              </h3>
              
              <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                I am a 21-year-old student studying in the Department of English at National University, Bangladesh. Over the past 2 years, I have actively channeled my analytical language training into two high-growth digital domains: <strong>AI Content Creation</strong> and <strong>Modern Web Design & Development</strong>.
              </p>

              <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Great web applications are not just code—they are communication. My academic foundation in linguistics, rhetoric, and literature gives me an edge in prompt engineering, tone calibration, and crisp UI copy that resonates with target audiences. When coupled with React, Tailwind CSS, and modern responsive layouts, the result is polished, high-converting digital products.
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                  Core Disciplines
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex items-start gap-2 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>AI Prompt Architecture & Image Creation</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Responsive React & Tailwind Front-End</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>English Proofreading & Copywriting</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Fast UI/UX Prototyping & Clean Code</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-slate-700/60">
                <button
                  onClick={onOpenCv}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Full Curriculum Vitae</span>
                </button>
                <button
                  onClick={onContactClick}
                  className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                    isDark ? 'border-slate-700 hover:bg-slate-700 text-slate-200' : 'border-slate-300 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <span>Let's Discuss a Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Quick Metrics Adjacency */}
            <div className="grid grid-cols-3 gap-3">
              <div className={`p-4 rounded-xl border text-center ${
                isDark ? 'bg-slate-800/30 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <span className="block text-2xl font-extrabold text-cyan-400 font-heading">2+</span>
                <span className="text-xs text-slate-400">Years Experience</span>
              </div>
              <div className={`p-4 rounded-xl border text-center ${
                isDark ? 'bg-slate-800/30 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <span className="block text-2xl font-extrabold text-indigo-400 font-heading">20+</span>
                <span className="text-xs text-slate-400">Projects Completed</span>
              </div>
              <div className={`p-4 rounded-xl border text-center ${
                isDark ? 'bg-slate-800/30 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <span className="block text-2xl font-extrabold text-emerald-400 font-heading">10+</span>
                <span className="text-xs text-slate-400">Happy Clients</span>
              </div>
            </div>
          </div>

          {/* Right: Quick Facts Dossier */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-6 rounded-2xl border space-y-5 ${
              isDark ? 'bg-slate-800/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-4 pb-4 border-b border-slate-700/50">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400 shadow-md shrink-0 bg-slate-800 flex items-center justify-center">
                  {avatarImage && !imgError ? (
                    <img
                      src={avatarImage}
                      alt={profile.fullName}
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-bold text-lg text-cyan-400">AI</span>
                  )}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white dark:text-white">
                    <span className={isDark ? 'text-white' : 'text-slate-900'}>{profile.fullName}</span>
                  </h4>
                  <p className="text-xs text-cyan-400">{profile.tagline}</p>
                  <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Age: {profile.age} · {profile.location}</p>
                </div>
              </div>

              <div className="space-y-3">
                {quickFacts.map((fact, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 text-xs">
                    <span className={`font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{fact.label}</span>
                    <span className={`font-semibold sm:text-right ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Credential Highlight */}
            <div className={`p-5 rounded-2xl border ${
              isDark ? 'bg-gradient-to-br from-indigo-950/40 to-slate-900/60 border-indigo-900/50' : 'bg-indigo-50/70 border-indigo-100'
            }`}>
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-600 text-white shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-indigo-400">National University Scholar</h4>
                  <p className={`text-xs mt-1 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    Currently advancing through B.A. (Honors) in English with a commitment to bilingual clarity, editorial exactness, and international collaboration.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
