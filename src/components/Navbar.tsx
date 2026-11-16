import React, { useState } from 'react';
import { Sun, Moon, Menu, X, FileText, ArrowRight, LayoutGrid, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export type NavSection = 'home' | 'about' | 'services' | 'portfolio' | 'skills' | 'contact';

interface NavbarProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenCv: () => void;
  viewMode: 'multipage' | 'singlepage';
  onToggleViewMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  isDark,
  onToggleTheme,
  onOpenCv,
  viewMode,
  onToggleViewMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: NavSection; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: NavSection) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-40 w-full backdrop-blur-md transition-colors border-b ${
      isDark 
        ? 'bg-[#0F172A]/90 border-slate-800 text-slate-100' 
        : 'bg-white/90 border-slate-200 text-slate-900 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleLinkClick('home')}
            className="group flex items-center gap-2 text-left focus:outline-none"
            aria-label="Akiful Portfolio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-sm transition-transform group-hover:scale-105">
              <div className={`w-full h-full rounded-[10px] flex items-center justify-center font-bold text-base tracking-wider ${
                isDark ? 'bg-slate-900 text-white' : 'bg-white text-indigo-600'
              }`}>
                A
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white dark:text-white">
                <span className={isDark ? 'text-white' : 'text-slate-900'}>Akiful</span>
                <span className="text-cyan-400">.</span>
              </span>
              <span className={`text-[10px] font-mono tracking-wider uppercase -mt-1 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Portfolio
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Navigation Links (Clean Single-Line Typography) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  isActive
                    ? 'text-indigo-400 font-semibold'
                    : isDark
                      ? 'text-slate-300 hover:text-white'
                      : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions (View Mode Switch, Theme, Download CV) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Multi-page / Single-page mode toggle (Fulfils Bengali request) */}
          <button
            onClick={onToggleViewMode}
            className={`hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
              isDark
                ? 'border-slate-700 bg-slate-800/80 text-slate-300 hover:text-white hover:border-slate-600'
                : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
            }`}
            title={viewMode === 'multipage' ? 'Currently viewing individual pages. Click to switch to full-page scroll mode' : 'Currently in one-page scroll. Click to view separate dedicated pages'}
          >
            {viewMode === 'multipage' ? (
              <>
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span className="whitespace-nowrap">Pages View</span>
              </>
            ) : (
              <>
                <LayoutGrid className="w-3.5 h-3.5 text-indigo-400" />
                <span className="whitespace-nowrap">Scroll All</span>
              </>
            )}
          </button>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={onToggleTheme}
            className={`p-2 rounded-lg border transition-colors cursor-pointer ${
              isDark
                ? 'border-slate-700 bg-slate-800/70 text-amber-300 hover:bg-slate-800'
                : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
            aria-label="Toggle dark and light mode"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Download CV CTA */}
          <button
            onClick={onOpenCv}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white shadow-sm transition-all hover:shadow-indigo-500/20 whitespace-nowrap cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg border transition-colors ${
              isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-t px-5 py-5 space-y-3 ${
          isDark ? 'bg-[#0F172A] border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-xl'
        }`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/50">
            <span className="text-xs font-mono text-slate-400">NAVIGATION</span>
            <button
              onClick={onToggleViewMode}
              className={`text-xs px-2.5 py-1 rounded-md border flex items-center gap-1.5 ${
                isDark ? 'border-slate-700 bg-slate-800 text-slate-200' : 'border-slate-200 bg-slate-100 text-slate-800'
              }`}
            >
              {viewMode === 'multipage' ? <Layers className="w-3 h-3 text-cyan-400" /> : <LayoutGrid className="w-3 h-3 text-indigo-400" />}
              <span>{viewMode === 'multipage' ? 'Mode: Separate Pages' : 'Mode: Single Page'}</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                    isActive
                      ? 'bg-indigo-600 text-white font-semibold'
                      : isDark
                        ? 'hover:bg-slate-800 text-slate-300'
                        : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-700/50 flex items-center justify-between">
            <span className="text-xs text-slate-400">akifislam124@gmail.com</span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="text-xs text-indigo-400 font-semibold hover:underline"
            >
              View Full CV →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
