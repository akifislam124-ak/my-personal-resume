import React from 'react';
import { ArrowUp, Github, Linkedin, Facebook, Twitter, Instagram, Mail, Phone, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { NavSection } from './Navbar';

interface FooterProps {
  onNavigate: (section: NavSection) => void;
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, isDark }) => {
  const { profile, socialLinks } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t transition-colors ${
      isDark ? 'bg-slate-950 border-slate-800/80 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800/60">
          
          {/* Brand & Brief */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
              <span className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {profile.fullName}
              </span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm">
              Department of English, National University, Bangladesh. 2 years of hands-on expertise building responsive web interfaces and generative AI content workflows.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className={`p-2 rounded-lg border transition-colors ${
                  isDark ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-white' : 'border-slate-200 bg-white text-slate-700 hover:text-black'
                }`}
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className={`p-2 rounded-lg border transition-colors ${
                  isDark ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-cyan-400' : 'border-slate-200 bg-white text-slate-700 hover:text-cyan-600'
                }`}
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`p-2 rounded-lg border transition-colors ${
                  isDark ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-indigo-400' : 'border-slate-200 bg-white text-slate-700 hover:text-indigo-600'
                }`}
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className={`p-2 rounded-lg border transition-colors ${
                  isDark ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-sky-400' : 'border-slate-200 bg-white text-slate-700 hover:text-sky-600'
                }`}
                title="X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className={`p-2 rounded-lg border transition-colors ${
                  isDark ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-rose-400' : 'border-slate-200 bg-white text-slate-700 hover:text-rose-600'
                }`}
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className={`text-xs font-mono uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {(['home', 'about', 'services', 'portfolio', 'skills', 'contact'] as NavSection[]).map((sec) => (
                <li key={sec}>
                  <button
                    onClick={() => onNavigate(sec)}
                    className="capitalize hover:text-indigo-400 transition-colors cursor-pointer"
                  >
                    {sec}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Communication */}
          <div className="md:col-span-4 space-y-3 text-left">
            <h4 className={`text-xs font-mono uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Contact Directly
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <a href={`mailto:${profile.email}`} className="hover:underline text-cyan-400 font-medium">
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <a href={`tel:${profile.phone}`} className="hover:underline">
                  {profile.phone} ({profile.phoneInternational})
                </a>
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                Dhaka, Bangladesh · Available for global opportunities
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            <span>© 2026 Md Akiful Islam. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                isDark ? 'border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300' : 'border-slate-200 bg-white hover:bg-slate-100 text-slate-700'
              }`}
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
