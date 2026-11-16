import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface TestimonialsSectionProps {
  isDark: boolean;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ isDark }) => {
  const { testimonials } = PORTFOLIO_DATA;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
              <span>06. Client Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Client & Peer <span className="text-cyan-400">Endorsements</span>
            </h2>
            <p className={`text-base mt-2 max-w-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Feedback from collaborators and businesses who have partnered with Md Akiful Islam.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={prev}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                isDark 
                  ? 'border-slate-800 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white' 
                  : 'border-slate-200 bg-white hover:bg-slate-100 text-slate-700 shadow-sm'
              }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                isDark 
                  ? 'border-slate-800 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white' 
                  : 'border-slate-200 bg-white hover:bg-slate-100 text-slate-700 shadow-sm'
              }`}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Current Active Testimonial Card */}
        <div className={`relative p-8 sm:p-12 rounded-3xl border transition-all duration-300 ${
          isDark 
            ? 'bg-slate-800/40 border-slate-800 shadow-2xl shadow-indigo-950/20' 
            : 'bg-white border-slate-200 shadow-lg'
        }`}>
          <Quote className="absolute top-8 right-8 w-16 h-16 text-indigo-500/10 pointer-events-none" />

          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-xs font-mono text-slate-400 ml-2">
              (5.0 / 5.0)
            </span>
          </div>

          {/* Quote Body */}
          <p className={`text-lg sm:text-xl md:text-2xl font-medium leading-relaxed italic mb-8 max-w-4xl ${
            isDark ? 'text-slate-100' : 'text-slate-800'
          }`}>
            "{current.quote}"
          </p>

          {/* Author Details & Project Tag */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-700/40">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold text-sm shadow-md">
                {current.avatarText}
              </div>
              <div>
                <h4 className="text-base font-bold text-white dark:text-white">
                  <span className={isDark ? 'text-white' : 'text-slate-900'}>{current.name}</span>
                </h4>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {current.role} · <span className="text-indigo-400">{current.company}</span>
                </p>
              </div>
            </div>

            <div className="text-xs font-mono text-slate-400">
              Project: <span className="text-cyan-400 font-semibold">{current.projectWorkedOn}</span>
            </div>
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === idx 
                  ? 'w-8 bg-indigo-500' 
                  : isDark ? 'w-2 bg-slate-700 hover:bg-slate-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
