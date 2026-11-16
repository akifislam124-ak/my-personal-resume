import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Calendar, Tag } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isDark: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, isDark }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className={`relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden border ${
          isDark ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`flex items-center justify-between px-6 py-4 border-b ${
          isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-100 bg-slate-50'
        }`}>
          <div className="flex items-center gap-2 text-xs">
            <span className="font-semibold text-indigo-400 uppercase tracking-wider">{project.category}</span>
            <span className={isDark ? 'text-slate-600' : 'text-slate-400'}>·</span>
            <span className={`flex items-center gap-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              <Calendar className="w-3.5 h-3.5" />
              {project.completionDate}
            </span>
          </div>
          <button
            onClick={onClose}
            className={`p-1.5 rounded-lg transition-colors ${
              isDark ? 'hover:bg-slate-800 text-slate-400 hover:text-slate-200' : 'hover:bg-slate-200 text-slate-500 hover:text-slate-800'
            }`}
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Main Visual */}
          <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-800 border border-slate-700/60 shadow-inner">
            <img 
              src={project.image} 
              alt={project.title} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold tracking-tight mb-2">
              {project.title}
            </h2>
            <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {project.detailedDescription}
            </p>
          </div>

          {/* Key Outcomes */}
          {project.keyOutcomes && project.keyOutcomes.length > 0 && (
            <div className={`p-4 rounded-xl border ${
              isDark ? 'bg-slate-800/40 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">
                Key Accomplishments & Deliverables
              </h3>
              <ul className="space-y-2">
                {project.keyOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className={isDark ? 'text-slate-200' : 'text-slate-700'}>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
              <Tag className="w-3.5 h-3.5 text-indigo-400" />
              <span>TECHNOLOGIES & METHODS</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className={`text-xs px-2.5 py-1 rounded-md font-medium ${
                    isDark ? 'bg-slate-800 text-slate-300 border border-slate-700' : 'bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className={`flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t ${
          isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-100 bg-slate-50'
        }`}>
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Visit Project</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg border transition-colors ${
                  isDark ? 'border-slate-700 hover:bg-slate-800 text-slate-200' : 'border-slate-300 hover:bg-slate-100 text-slate-700'
                }`}
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Source</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors ${
              isDark ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
