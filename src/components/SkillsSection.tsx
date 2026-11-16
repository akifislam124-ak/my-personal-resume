import React, { useState } from 'react';
import { Code, Sparkles, Feather, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface SkillsSectionProps {
  isDark: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ isDark }) => {
  const { skills } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code className="w-4 h-4 text-cyan-400" />;
      case 1:
        return <Sparkles className="w-4 h-4 text-indigo-400" />;
      case 2:
        return <Feather className="w-4 h-4 text-rose-400" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            <span>04. Technical & Creative Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Skills & <span className="text-cyan-400">Tool Proficiency</span>
          </h2>
          <p className={`text-base mt-2 max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            A balanced synthesis of frontend web engineering, generative artificial intelligence, and English rhetoric.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8">
          {skills.map((cat, idx) => {
            const isActive = activeCategory === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-500/20'
                    : isDark
                      ? 'border-slate-800 bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 shadow-sm'
                }`}
              >
                {getCategoryIcon(idx)}
                <span>{cat.category}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                  isActive ? 'bg-indigo-700/80 text-white' : 'bg-slate-700/30 text-slate-400'
                }`}>
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Matrix */}
        <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
          isDark ? 'bg-slate-800/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="mb-6 pb-4 border-b border-slate-700/40">
            <h3 className="text-lg font-bold flex items-center gap-2">
              {getCategoryIcon(activeCategory)}
              <span>{skills[activeCategory].category}</span>
            </h3>
            <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {skills[activeCategory].description}
            </p>
          </div>

          {/* Skill Bars with Tabular Numbers */}
          <div className="space-y-5">
            {skills[activeCategory].skills.map((skill, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold">{skill.name}</span>
                  <div className="flex items-center gap-3">
                    <span className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {skill.experience}
                    </span>
                    <span className="font-mono font-bold tabular-nums text-indigo-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Progress Track */}
                <div className={`w-full h-2.5 rounded-full overflow-hidden ${
                  isDark ? 'bg-slate-700/60' : 'bg-slate-200'
                }`}>
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-indigo-600 transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tools Badge Cloud */}
        <div className="mt-8 pt-6 border-t border-slate-800/60">
          <span className={`block text-xs font-mono uppercase tracking-wider mb-3 ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}>
            Everyday Toolkit & Workflows
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              "React 19", "Tailwind CSS v4", "TypeScript", "JavaScript ES6+",
              "ChatGPT Plus", "Midjourney v6", "Claude 3.5 Sonnet", "Google AI Studio",
              "English Linguistics", "Academic Proofreading", "Prompt Architecture",
              "Git & GitHub", "Vite", "Figma to Code", "Responsive UI", "REST APIs"
            ].map((tool, idx) => (
              <span
                key={idx}
                className={`text-xs px-3 py-1.5 rounded-lg border flex items-center gap-1.5 ${
                  isDark 
                    ? 'border-slate-800 bg-slate-850 text-slate-300' 
                    : 'border-slate-200 bg-slate-100 text-slate-700'
                }`}
              >
                <Check className="w-3 h-3 text-cyan-400" />
                <span>{tool}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
