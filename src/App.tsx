/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, NavSection } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { SkillsSection } from './components/SkillsSection';
import { TimelineSection } from './components/TimelineSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { ProjectModal } from './components/ProjectModal';
import { Project, PORTFOLIO_DATA } from './data/portfolioData';
import { ArrowLeft, Layers, LayoutGrid, CheckCircle2, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('home');
  // Default to 'multipage' mode to honor user request: "nav bar er protigta scetion ke vinno vinno page kore daw link kore"
  const [viewMode, setViewMode] = useState<'multipage' | 'singlepage'>('multipage');
  const [isDark, setIsDark] = useState<boolean>(true);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [inquirySubject, setInquirySubject] = useState<string>('');
  const [avatarImage, setAvatarImage] = useState<string>(() => {
    return localStorage.getItem('akiful_profile_photo') || PORTFOLIO_DATA.profile.avatarImage;
  });

  const handleAvatarChange = (newUrl: string) => {
    setAvatarImage(newUrl);
    try {
      localStorage.setItem('akiful_profile_photo', newUrl);
    } catch (err) {
      console.warn('LocalStorage quota or access limitation', err);
    }
  };

  // Handle dark mode class on document element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.style.backgroundColor = '#0F172A';
      root.style.color = '#F8FAFC';
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#F8FAFC';
      root.style.color = '#0F172A';
    }
  }, [isDark]);

  // Sync with URL hash for true page bookmarking and back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavSection;
      if (['home', 'about', 'services', 'portfolio', 'skills', 'contact'].includes(hash)) {
        setActiveSection(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (section: NavSection) => {
    setActiveSection(section);
    window.location.hash = section;
    if (viewMode === 'singlepage') {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === 'multipage' ? 'singlepage' : 'multipage'));
  };

  const handleServiceInquiry = (serviceTitle: string) => {
    setInquirySubject(`Inquiry for ${serviceTitle}`);
    handleNavigate('contact');
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
      isDark ? 'bg-[#0F172A] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenCv={() => setIsCvOpen(true)}
        viewMode={viewMode}
        onToggleViewMode={toggleViewMode}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {viewMode === 'singlepage' ? (
          /* ================= SINGLE PAGE CONTINUOUS SCROLL MODE ================= */
          <div className="space-y-4">
            <div id="home">
              <Hero
                onContactClick={() => handleNavigate('contact')}
                onWorkClick={() => handleNavigate('portfolio')}
                isDark={isDark}
                avatarImage={avatarImage}
                onAvatarChange={handleAvatarChange}
              />
            </div>

            <div id="about">
              <AboutSection
                onContactClick={() => handleNavigate('contact')}
                onOpenCv={() => setIsCvOpen(true)}
                isDark={isDark}
                avatarImage={avatarImage}
              />
            </div>

            <div id="services">
              <ServicesSection
                onSelectService={handleServiceInquiry}
                isDark={isDark}
              />
            </div>

            <div id="portfolio">
              <PortfolioSection
                onSelectProject={(proj) => setSelectedProject(proj)}
                isDark={isDark}
              />
            </div>

            <div id="skills">
              <SkillsSection isDark={isDark} />
            </div>

            <div id="education-experience">
              <TimelineSection isDark={isDark} />
            </div>

            <div id="testimonials">
              <TestimonialsSection isDark={isDark} />
            </div>

            <div id="contact">
              <ContactSection
                initialSubject={inquirySubject}
                isDark={isDark}
              />
            </div>
          </div>
        ) : (
          /* ================= DEDICATED SEPARATE PAGES MODE ================= */
          /* (Fulfilling Bengali request: "nav bar er protigta scetion ke vinno vinno page kore daw link kore") */
          <div className="animate-fade-in">
            {/* Breadcrumb & Page Mode Status Bar */}
            <div className={`border-b px-4 sm:px-8 py-2.5 text-xs flex items-center justify-between ${
              isDark ? 'bg-slate-900/60 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-500'
            }`}>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleNavigate('home')}
                  className="hover:text-indigo-400 cursor-pointer font-medium"
                >
                  Home
                </button>
                <span>/</span>
                <span className="font-semibold uppercase text-cyan-400 tracking-wider">
                  {activeSection} Page
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline text-[11px]">Separate Page View</span>
                <button
                  onClick={toggleViewMode}
                  className="text-indigo-400 hover:underline cursor-pointer font-medium"
                >
                  Switch to Continuous Scroll →
                </button>
              </div>
            </div>

            {/* Render Specific Dedicated Page Content */}
            {activeSection === 'home' && (
              <div>
                <Hero
                  onContactClick={() => handleNavigate('contact')}
                  onWorkClick={() => handleNavigate('portfolio')}
                  isDark={isDark}
                  avatarImage={avatarImage}
                  onAvatarChange={handleAvatarChange}
                />

                {/* Home Highlights Strip */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div 
                      onClick={() => handleNavigate('about')}
                      className={`p-6 rounded-2xl border transition-all cursor-pointer group ${
                        isDark ? 'bg-slate-800/40 border-slate-800 hover:border-indigo-500/50' : 'bg-white border-slate-200 shadow-sm hover:shadow'
                      }`}
                    >
                      <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">01 · Background</span>
                      <h3 className="text-lg font-bold mb-1 group-hover:text-cyan-400 transition-colors">About Md Akiful Islam</h3>
                      <p className={`text-xs line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        21-year-old English Honors student at National University with 2 years in AI and web design.
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs text-indigo-400 font-semibold mt-4 group-hover:translate-x-1 transition-transform">
                        Read Story <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <div 
                      onClick={() => handleNavigate('services')}
                      className={`p-6 rounded-2xl border transition-all cursor-pointer group ${
                        isDark ? 'bg-slate-800/40 border-slate-800 hover:border-indigo-500/50' : 'bg-white border-slate-200 shadow-sm hover:shadow'
                      }`}
                    >
                      <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider block mb-2">02 · Expertise</span>
                      <h3 className="text-lg font-bold mb-1 group-hover:text-indigo-400 transition-colors">Services & Offerings</h3>
                      <p className={`text-xs line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        AI Content Creation, Website Design, React Development, and English Editorial Proofreading.
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs text-indigo-400 font-semibold mt-4 group-hover:translate-x-1 transition-transform">
                        Explore Services <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <div 
                      onClick={() => handleNavigate('portfolio')}
                      className={`p-6 rounded-2xl border transition-all cursor-pointer group ${
                        isDark ? 'bg-slate-800/40 border-slate-800 hover:border-indigo-500/50' : 'bg-white border-slate-200 shadow-sm hover:shadow'
                      }`}
                    >
                      <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-2">03 · Work</span>
                      <h3 className="text-lg font-bold mb-1 group-hover:text-emerald-400 transition-colors">Selected Projects</h3>
                      <p className={`text-xs line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        Browse 6 featured web and AI creation projects with interactive live inspect modals.
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs text-indigo-400 font-semibold mt-4 group-hover:translate-x-1 transition-transform">
                        View Portfolio <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Testimonial Teaser on Home */}
                <TestimonialsSection isDark={isDark} />
              </div>
            )}

            {activeSection === 'about' && (
              <div>
                <AboutSection
                  onContactClick={() => handleNavigate('contact')}
                  onOpenCv={() => setIsCvOpen(true)}
                  isDark={isDark}
                  avatarImage={avatarImage}
                />
                <TimelineSection isDark={isDark} />
              </div>
            )}

            {activeSection === 'services' && (
              <div>
                <ServicesSection
                  onSelectService={handleServiceInquiry}
                  isDark={isDark}
                />
                <TestimonialsSection isDark={isDark} />
              </div>
            )}

            {activeSection === 'portfolio' && (
              <div>
                <PortfolioSection
                  onSelectProject={(proj) => setSelectedProject(proj)}
                  isDark={isDark}
                />
              </div>
            )}

            {activeSection === 'skills' && (
              <div>
                <SkillsSection isDark={isDark} />
                <TimelineSection isDark={isDark} />
              </div>
            )}

            {activeSection === 'contact' && (
              <div>
                <ContactSection
                  initialSubject={inquirySubject}
                  isDark={isDark}
                />
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} isDark={isDark} />

      {/* Interactive CV Modal */}
      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
        isDark={isDark}
        avatarImage={avatarImage}
      />

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isDark={isDark}
      />
    </div>
  );
}
