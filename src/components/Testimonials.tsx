import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data';

interface TestimonialsProps {
  theme: 'light' | 'dark';
}

export default function Testimonials({ theme }: TestimonialsProps) {
  const [index, setIndex] = useState(0);
  const isLight = theme === 'light';

  const prevStep = () => {
    setIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextStep = () => {
    setIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[index];

  return (
    <section 
      id="testimonials" 
      className={`py-28 px-6 md:px-12 relative overflow-hidden z-10 border-t transition-colors ${
        isLight ? 'border-gray-100 bg-gray-50/20' : 'border-white/[0.04]'
      }`}
    >
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          <p className={`font-mono text-[10px] uppercase tracking-[0.25em] mb-2 font-bold ${
            isLight ? 'text-amber-600' : 'text-amber-400'
          }`}>05 // COMMENDATIONS</p>
          <h2 className={`font-sans font-bold text-3xl sm:text-5xl tracking-tight leading-tight ${
            isLight ? 'text-gray-900' : 'text-white'
          }`}>
            Client Feedback & Endorsements
          </h2>
        </div>

        {/* Dynamic Carousel Card */}
        <div className={`relative border rounded-3xl p-8 md:p-12 backdrop-blur-md text-left overflow-hidden min-h-[340px] flex flex-col justify-between ${
          isLight 
            ? 'bg-white border-gray-200 shadow-sm' 
            : 'bg-gradient-to-br from-[#121318]/85 to-black/90 border-white/[0.05] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]'
        }`}>
          
          {/* Decorative quote mark */}
          <div className={`absolute top-6 right-8 opacity-[0.035] ${
            isLight ? 'text-amber-800' : 'text-amber-400'
          }`}>
            <Quote className="w-32 h-32 rotate-180" />
          </div>

          {/* Testimonial Active Slide with Framer Motion transitions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="space-y-6"
            >
              <p className={`font-sans italic text-base md:text-lg leading-relaxed relative z-10 ${
                isLight ? 'text-gray-800' : 'text-slate-350'
              }`}>
                "{current.content}"
              </p>

              {/* Client metadata alignment */}
              <div className={`flex items-center space-x-4 pt-6 mt-6 border-t ${
                isLight ? 'border-gray-150' : 'border-white/[0.04]'
              }`}>
                <div className="h-11 w-11 rounded-full overflow-hidden border border-amber-500/10 shadow-xs">
                  <img 
                    src={current.avatar} 
                    alt={`Portrait representing ${current.name}`} 
                    className="w-full h-full object-cover select-none pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className={`font-sans text-sm font-bold tracking-tight flex items-center gap-1.5 ${
                    isLight ? 'text-gray-950' : 'text-white'
                  }`}>
                    {current.name} <CheckCircle className={`w-3.5 h-3.5 ${isLight ? 'text-amber-600' : 'text-amber-400'}`} />
                  </h4>
                  <p className="font-mono text-[9.5px] uppercase tracking-wider mt-0.5 text-gray-500 font-semibold">
                    {current.role} &mdash; <span className={isLight ? 'text-indigo-650' : 'text-indigo-400'}>{current.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Selector Indicators & Carousel arrows */}
          <div className={`flex items-center justify-between pt-8 border-t mt-8 z-10 select-none ${
            isLight ? 'border-gray-150' : 'border-white/[0.03]'
          }`}>
            
            {/* Sliding Dot Indicators */}
            <div className="flex space-x-2">
              {TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    index === idx 
                      ? isLight 
                        ? 'w-6 bg-amber-600' 
                        : 'w-6 bg-amber-400 shadow-[0_0_8px_rgba(254,186,13,0.5)]' 
                      : 'w-1.5 bg-gray-500/40 hover:bg-gray-500'
                  }`}
                  aria-label={`Carousel index dot ${idx + 1}`}
                />
              ))}
            </div>

            {/* Carousel Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={prevStep}
                className={`p-2.5 rounded-xl border transition-all duration-305 cursor-pointer ${
                  isLight 
                    ? 'border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700' 
                    : 'border-white/[0.05] bg-white/[0.01] hover:bg-white/5 text-gray-400 hover:text-white'
                }`}
                aria-label="Previous slider card"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              
              <button
                onClick={nextStep}
                className={`p-2.5 rounded-xl border transition-all duration-305 cursor-pointer ${
                  isLight 
                    ? 'border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700' 
                    : 'border-white/[0.05] bg-white/[0.01] hover:bg-white/5 text-gray-400 hover:text-amber-400'
                }`}
                aria-label="Next slider card"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
