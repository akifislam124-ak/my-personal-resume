import React, { useState } from 'react';
import { ExternalLink, Tag, Eye } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
  isDark: boolean;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject, isDark }) => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Websites' | 'AI Content' | 'Writing'>('All');

  const categories: ('All' | 'Websites' | 'AI Content' | 'Writing')[] = [
    'All',
    'Websites',
    'AI Content',
    'Writing'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
              <span>03. Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Featured <span className="text-cyan-400">Portfolio</span>
            </h2>
            <p className={`text-base mt-2 max-w-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              A curated selection of responsive web applications, generative AI assets, and English editorial projects.
            </p>
          </div>

          {/* Category Filter Tabs (Interactive Filter Controls) */}
          <div className={`p-1.5 rounded-xl border flex items-center gap-1 self-start md:self-auto ${
            isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-100 border-slate-200'
          }`}>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : isDark
                        ? 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                isDark
                  ? 'bg-slate-800/40 border-slate-800 hover:border-slate-700 hover:shadow-xl'
                  : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                {/* Visual Thumbnail */}
                <div 
                  className="relative aspect-video w-full overflow-hidden bg-slate-800 cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </span>
                  </div>
                  
                  {/* Category Pill Tag Replacement: clean subtle text overlay */}
                  <div className="absolute top-3 left-3 px-2 py-1 rounded bg-slate-900/80 backdrop-blur-md text-[11px] font-mono text-cyan-300 border border-slate-700/60">
                    {project.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  {/* Unboxed Metadata with Typographic Separator */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span>{project.completionDate}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.tags[0]}</span>
                  </div>

                  <h3 
                    onClick={() => onSelectProject(project)}
                    className="text-lg font-bold tracking-tight mb-2 group-hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className={`text-xs leading-relaxed mb-4 line-clamp-3 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className={`text-[11px] px-2 py-0.5 rounded font-mono ${
                          isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[11px] text-slate-400 self-center">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* View Project Action */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2">
                <button
                  onClick={() => onSelectProject(project)}
                  className={`w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-xl border transition-colors cursor-pointer ${
                    isDark
                      ? 'border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-200'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>View Project Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
