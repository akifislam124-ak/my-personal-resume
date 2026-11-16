import React, { useState } from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface TimelineSectionProps {
  isDark: boolean;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ isDark }) => {
  const { timeline } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<'all' | 'education' | 'experience'>('all');

  const filteredTimeline = filter === 'all'
    ? timeline
    : timeline.filter(item => item.type === filter);

  return (
    <section id="education-experience" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
              <span>05. Trajectory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Education & <span className="text-cyan-400">Experience</span>
            </h2>
            <p className={`text-base mt-2 max-w-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Academic scholarship in the English Department paired with 2 years of active freelance engineering and AI production.
            </p>
          </div>

          {/* Filter Segmented Control */}
          <div className={`p-1.5 rounded-xl border flex items-center gap-1 self-start md:self-auto ${
            isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-100 border-slate-200'
          }`}>
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Timeline
            </button>
            <button
              onClick={() => setFilter('education')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === 'education'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setFilter('experience')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === 'experience'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Experience
            </button>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-indigo-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {filteredTimeline.map((item, idx) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Marker Dot / Icon */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-9 h-9 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center text-cyan-400 shadow-md shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                {item.type === 'education' ? (
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                ) : (
                  <Briefcase className="w-4 h-4 text-indigo-400" />
                )}
              </div>

              {/* Card Container */}
              <div className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                isDark
                  ? 'bg-slate-800/40 border-slate-800 hover:border-slate-700 hover:shadow-lg'
                  : 'bg-white border-slate-200 shadow-sm hover:shadow'
              }`}>
                {/* Meta header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      {item.type === 'education' ? 'Academic Program' : 'Professional Work'}
                    </span>
                    <span className={isDark ? 'text-slate-600' : 'text-slate-400'}>·</span>
                    <span className={`flex items-center gap-1 text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      {item.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                    <Calendar className="w-3 h-3" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-white dark:text-white">
                  <span className={isDark ? 'text-white' : 'text-slate-900'}>{item.title}</span>
                </h3>
                
                <h4 className="text-sm font-semibold text-indigo-400 mt-0.5">
                  {item.institutionOrRole}
                </h4>

                <p className={`text-sm mt-3 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="mt-4 pt-3 border-t border-slate-700/40 space-y-2">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
