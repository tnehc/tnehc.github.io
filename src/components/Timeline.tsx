import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Building, Sparkles, ChevronRight } from 'lucide-react';
import { EXPERIENCES } from '../data';

interface TimelineProps {
  theme: 'light' | 'dark';
}

export default function Timeline({ theme }: TimelineProps) {
  const isLight = theme === 'light';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { x: -16, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120, damping: 20 }
    }
  };

  return (
    <section 
      id="experience" 
      className={`py-28 px-6 md:px-12 relative overflow-hidden z-10 border-t scroll-mt-24 transition-colors ${
        isLight ? 'border-gray-100 bg-white' : 'border-white/[0.04]'
      }`}
    >
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center lg:text-left space-y-3 max-w-xl mx-auto lg:mx-0">
          <p className={`font-mono text-[10px] uppercase tracking-[0.25em] mb-1 font-bold ${
            isLight ? 'text-amber-600' : 'text-amber-400'
          }`}>02 // CHRONICLE</p>
          <h2 className={`font-sans font-black text-3xl sm:text-5xl tracking-tight leading-tight uppercase ${
            isLight ? 'text-gray-900' : 'text-white'
          }`}>
            Work Experience
          </h2>
          <p className={`font-sans text-sm md:text-base leading-relaxed ${
            isLight ? 'text-gray-655' : 'text-gray-400'
          }`}>
            My professional journey and the impact I've made in the tech industry.
          </p>
        </div>

        {/* Elegant Vertical timeline list */}
        <div className={`relative border-l ml-3.5 md:ml-6 pl-8 md:pl-10 space-y-12 text-left ${
          isLight ? 'border-gray-200' : 'border-white/[0.08]'
        }`}>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12"
          >
            {EXPERIENCES.map((exp) => (
              <motion.div 
                key={exp.id} 
                variants={itemVariants} 
                className="relative group block"
              >
                {/* Timeline center point hub node - perfectly circular & centered */}
                <div className={`absolute -left-[42px] md:-left-[50px] top-[28px] w-5 h-5 rounded-full border-2 z-10 flex items-center justify-center transition-all duration-300 group-hover:scale-125 bg-white dark:bg-[#0B0C10] ${
                  isLight 
                    ? 'border-amber-600 shadow-sm' 
                    : 'border-amber-400 shadow-[0_0_8px_rgba(50,122,252,0.4)]'
                }`}>
                  <div className={`h-1.5 w-1.5 rounded-full ${
                    isLight 
                      ? 'bg-amber-600 group-hover:bg-amber-500' 
                      : 'bg-amber-400 group-hover:bg-white'
                  }`} />
                </div>

                {/* Elegant Glassmorphic Card Container */}
                <div className={`border p-6 md:p-8 rounded-2xl backdrop-blur-md transition-all duration-300 relative overflow-hidden ${
                  isLight 
                    ? 'bg-gray-50/40 border-gray-200 hover:bg-white hover:shadow-md' 
                    : 'bg-[#121318]/40 border-white/[0.04] hover:bg-[#121318]/70 hover:border-amber-500/10'
                }`}>
                  
                  {/* Card head layout row */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5 select-none">
                    
                    {/* Role Title and Corporate Name */}
                    <div className="space-y-1">
                      <h3 className={`font-sans font-bold text-base md:text-lg transition-colors leading-tight ${
                        isLight 
                          ? 'text-gray-950 group-hover:text-amber-600' 
                          : 'text-white group-hover:text-amber-400'
                      }`}>
                        {exp.role}
                      </h3>
                      <div className="flex items-center space-x-1.5 font-mono text-[10px] tracking-wider text-gray-500 uppercase font-semibold">
                        <Building className="w-3.5 h-3.5 text-gray-400" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    {/* Clock / Period Duration Badge */}
                    <div className={`inline-flex items-center space-x-1.5 border rounded-full px-3.5 py-1 w-fit font-mono text-[10px] tracking-wider transition-all duration-300 font-semibold ${
                      isLight 
                        ? 'bg-gray-100 border-gray-200 text-gray-700' 
                        : 'bg-white/[0.02] border-white/[0.06] text-gray-400 group-hover:text-amber-400 group-hover:border-amber-500/20'
                    }`}>
                      <Calendar className="w-3 h-3 text-gray-400" />
                      <span>{exp.period}</span>
                    </div>

                  </div>

                  {/* Descriptions with custom lists using chevrons */}
                  <ul className={`space-y-3.5 text-left mb-6 text-xs sm:text-sm font-sans leading-relaxed ${
                    isLight ? 'text-gray-700' : 'text-gray-400'
                  }`}>
                    {exp.description.map((bullet, bidx) => (
                      <li key={bidx} className="flex items-start gap-2.5">
                        <ChevronRight className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          isLight ? 'text-amber-600' : 'text-amber-400'
                        }`} />
                        <span className="flex-1">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Software skills badge list */}
                  <div className={`flex flex-wrap gap-1.5 pt-4 border-t ${
                    isLight ? 'border-gray-200' : 'border-white/[0.04]'
                  }`}>
                    {exp.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className={`font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-md ${
                          isLight 
                            ? 'bg-white border border-gray-200 text-gray-650' 
                            : 'bg-white/[0.02] border border-white/[0.04] text-gray-400'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
