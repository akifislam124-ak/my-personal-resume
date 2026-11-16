import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Github, Linkedin, Facebook, Twitter, Instagram, Sparkles, Code, CheckCircle2, Camera } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onContactClick: () => void;
  onWorkClick: () => void;
  isDark: boolean;
  avatarImage?: string;
  onAvatarChange?: (newUrl: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onContactClick, 
  onWorkClick, 
  isDark,
  avatarImage,
  onAvatarChange
}) => {
  const { profile, socialLinks, stats } = PORTFOLIO_DATA;
  const [imgError, setImgError] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onAvatarChange) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setImgError(false);
          onAvatarChange(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Animated typewriter text cycling through requested roles
  const roles = [
    "AI Content Creator",
    "Web Designer",
    "Web Developer",
    "English Honors Student"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  return (
    <section className="relative overflow-hidden pt-8 pb-14 lg:pt-14 lg:pb-18">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[400px] bg-gradient-to-b from-indigo-500/15 via-cyan-500/10 to-transparent blur-3xl opacity-70" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typographic Content (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Editorial Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Available for Hire · Bangladesh (GMT+6)</span>
            </div>

            {/* Main Greeting & Typographic Hierarchy */}
            <div className="space-y-2">
              <span className={`text-lg sm:text-xl font-medium tracking-tight block ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Hello, I'm
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance leading-none">
                <span className={isDark ? 'text-white' : 'text-slate-900'}>{profile.fullName}</span>
              </h1>
              
              {/* Typewriter role cycling */}
              <div className="h-10 sm:h-12 flex items-center">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400 font-heading flex items-center gap-1.5">
                  <span>And I'm an</span>
                  <span className="text-indigo-400 font-extrabold underline decoration-cyan-400/40 underline-offset-6">
                    {displayedText}
                  </span>
                  <span className="inline-block w-0.5 h-6 bg-cyan-400 animate-pulse" />
                </h2>
              </div>
            </div>

            {/* Narrative Lead Paragraph */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {profile.bioIntro}
            </p>

            {/* Social Media Profile Links (Direct Clickable as Requested) */}
            <div className="pt-2">
              <p className={`text-xs font-mono uppercase tracking-wider mb-2.5 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Connect with me directly
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl border transition-all ${
                    isDark 
                      ? 'border-slate-700 bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 hover:border-slate-600' 
                      : 'border-slate-300 bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                  aria-label="Akiful's GitHub profile"
                  title="GitHub: akifislam124-ak"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl border transition-all ${
                    isDark 
                      ? 'border-slate-700 bg-slate-800/80 text-slate-300 hover:text-cyan-400 hover:bg-slate-700 hover:border-slate-600' 
                      : 'border-slate-300 bg-slate-100 text-slate-700 hover:text-cyan-600 hover:bg-slate-200'
                  }`}
                  aria-label="Akiful's Facebook profile"
                  title="Facebook Profile"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl border transition-all ${
                    isDark 
                      ? 'border-slate-700 bg-slate-800/80 text-slate-300 hover:text-indigo-400 hover:bg-slate-700 hover:border-slate-600' 
                      : 'border-slate-300 bg-slate-100 text-slate-700 hover:text-indigo-600 hover:bg-slate-200'
                  }`}
                  aria-label="Akiful's LinkedIn profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl border transition-all ${
                    isDark 
                      ? 'border-slate-700 bg-slate-800/80 text-slate-300 hover:text-sky-400 hover:bg-slate-700 hover:border-slate-600' 
                      : 'border-slate-300 bg-slate-100 text-slate-700 hover:text-sky-600 hover:bg-slate-200'
                  }`}
                  aria-label="Akiful's X / Twitter profile"
                  title="X (Twitter) Profile"
                >
                  <Twitter className="w-4 h-4" />
                </a>

                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl border transition-all ${
                    isDark 
                      ? 'border-slate-700 bg-slate-800/80 text-slate-300 hover:text-rose-400 hover:bg-slate-700 hover:border-slate-600' 
                      : 'border-slate-300 bg-slate-100 text-slate-700 hover:text-rose-600 hover:bg-slate-200'
                  }`}
                  aria-label="Akiful's Instagram profile"
                  title="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onWorkClick}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onContactClick}
                className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl border transition-all hover:scale-[1.02] cursor-pointer ${
                  isDark
                    ? 'border-slate-700 bg-slate-800/70 hover:bg-slate-800 text-slate-200 hover:border-slate-600'
                    : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-800 shadow-sm'
                }`}
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </button>
            </div>
          </div>

          {/* Right Column: Portrait Card with Cyan/Blue Fluid Backdrop (Matching akif.png mockup) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 sm:w-84 md:w-96 aspect-square flex items-center justify-center">
              
              {/* Cyan / Indigo Organic Fluid Shape Behind Photo (directly replicating mockup) */}
              <div 
                aria-hidden="true" 
                className="absolute inset-0 rounded-[38%_62%_63%_37%/41%_44%_56%_59%] bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 opacity-90 blur-[1px] shadow-2xl shadow-cyan-500/30 transition-transform duration-700 hover:scale-105"
              />

              {/* Glowing Outline Ring */}
              <div 
                aria-hidden="true" 
                className="absolute inset-3 rounded-[38%_62%_63%_37%/41%_44%_56%_59%] border-2 border-white/40 pointer-events-none" 
              />

              {/* Portrait Container */}
              <div className="relative z-10 w-[84%] h-[84%] rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl bg-slate-800 group/avatar flex items-center justify-center">
                {avatarImage && !imgError ? (
                  <>
                    <img
                      src={avatarImage}
                      alt={profile.fullName}
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />

                    {/* Change Photo Overlay */}
                    <label 
                      htmlFor="photo-upload-input"
                      className="absolute inset-x-0 bottom-0 py-2.5 bg-slate-950/85 backdrop-blur-md text-[11px] font-medium text-cyan-300 flex items-center justify-center gap-1.5 cursor-pointer opacity-90 hover:opacity-100 transition-opacity border-t border-cyan-500/30"
                      title="Click to change your photo"
                    >
                      <Camera className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Change Photo</span>
                      <input
                        id="photo-upload-input"
                        type="file"
                        accept="image/*"
                        className="sr-only"
                        onChange={handleFileChange}
                      />
                    </label>
                  </>
                ) : (
                  /* Interactive Click-to-Upload Portal if photo missing or not yet chosen */
                  <label
                    htmlFor="photo-upload-portal"
                    className="w-full h-full flex flex-col items-center justify-center p-4 text-center cursor-pointer bg-gradient-to-br from-slate-900 to-indigo-950 hover:from-slate-850 hover:to-indigo-900 transition-all text-white group"
                  >
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/20">
                      <Camera className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-cyan-300 block">
                      আপনার আসল ছবি দিন
                    </span>
                    <span className="text-[10px] text-slate-400 mt-1 block">
                      Click to choose 6325524978131998365.jpg
                    </span>
                    <span className="mt-2.5 px-3 py-1 rounded-full bg-cyan-500 text-slate-950 font-semibold text-[10px] shadow">
                      Select Photo
                    </span>
                    <input
                      id="photo-upload-portal"
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                  </label>
                )}
              </div>

              {/* Direct Visible Upload Button Under Photo */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap">
                <label
                  htmlFor="photo-upload-cta"
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-semibold shadow-xl transition-all cursor-pointer ${
                    isDark
                      ? 'bg-slate-900/95 border-cyan-500/50 text-cyan-300 hover:bg-slate-800 hover:border-cyan-400 shadow-cyan-950/40'
                      : 'bg-white border-cyan-500 text-cyan-700 hover:bg-cyan-50 shadow-md'
                  }`}
                >
                  <Camera className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{avatarImage && !imgError ? 'নিজের ছবি পরিবর্তন করুন' : 'আপনার আসল ছবি আপলোড করুন'}</span>
                  <input
                    id="photo-upload-cta"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={handleFileChange}
                  />
                </label>
              </div>

              {/* Floating Badge 1: 2+ Years Experience */}
              <div className={`absolute -bottom-2 -left-4 z-20 px-3.5 py-2 rounded-xl border shadow-xl flex items-center gap-2 ${
                isDark ? 'bg-slate-900/95 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
              }`}>
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <Code className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold leading-tight">2+ Years</span>
                  <span className="block text-[10px] text-slate-400 leading-tight">Design & Dev</span>
                </div>
              </div>

              {/* Floating Badge 2: AI Certified / Prompt Specialist */}
              <div className={`absolute -top-2 -right-4 z-20 px-3.5 py-2 rounded-xl border shadow-xl flex items-center gap-2 ${
                isDark ? 'bg-slate-900/95 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
              }`}>
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold leading-tight">AI Creator</span>
                  <span className="block text-[10px] text-slate-400 leading-tight">Prompt Eng.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Stats Strip Below Hero Split (Design Constitution Rule 2.B & 13) */}
        <div className="mt-14 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((item, idx) => (
              <div 
                key={idx}
                className={`p-5 rounded-2xl border transition-all ${
                  isDark 
                    ? 'bg-slate-800/40 border-slate-800 hover:border-slate-700' 
                    : 'bg-white border-slate-200 shadow-sm hover:shadow'
                }`}
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-heading">
                  {item.value}
                </div>
                <div className={`text-xs sm:text-sm font-medium mt-1 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
