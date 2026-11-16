import React from 'react';
import { Sparkles, Layout, Code2, Feather, CheckCircle2, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA, Service } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
  isDark: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, isDark }) => {
  const { services } = PORTFOLIO_DATA;

  const getIcon = (name: Service['iconName']) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-indigo-400" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-sky-400" />;
      case 'Feather':
        return <Feather className="w-6 h-6 text-rose-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            <span>02. What I Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Specialized <span className="text-cyan-400">Services</span>
          </h2>
          <p className={`text-base mt-2 max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Combining technical engineering and linguistic dexterity to deliver high-impact digital solutions.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`group p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                isDark
                  ? 'bg-slate-800/40 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-indigo-500/5'
                  : 'bg-white border-slate-200 shadow-sm hover:border-indigo-400 hover:shadow-lg'
              }`}
            >
              <div>
                {/* Card Header with Icon & Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl border ${
                    isDark ? 'bg-slate-900 border-slate-700/80' : 'bg-slate-50 border-slate-200'
                  }`}>
                    {getIcon(service.iconName)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {service.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>

                <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {service.fullDesc}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 mb-6 pt-2 border-t border-slate-700/40">
                  <span className={`block text-[11px] font-mono uppercase tracking-wider ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Key Deliverables:
                  </span>
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-700/40">
                <button
                  onClick={() => onSelectService(service.title)}
                  className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                    isDark
                      ? 'border-slate-700 bg-slate-800/80 hover:bg-indigo-600 hover:border-indigo-600 text-slate-200 hover:text-white'
                      : 'border-slate-200 bg-slate-50 hover:bg-indigo-600 hover:border-indigo-600 text-slate-700 hover:text-white'
                  }`}
                >
                  <span>Inquire for {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
