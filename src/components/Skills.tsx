import React from 'react';
import { motion } from 'motion/react';
import { Laptop, Share2, Settings, Compass, Sparkles, Award } from 'lucide-react';
import { TECHNICAL_SKILLS } from '../data';

interface SkillsProps {
  theme: 'light' | 'dark';
}

const IconMap: { [key: string]: React.ElementType } = {
  Laptop: Laptop,
  Share2: Share2,
  Settings: Settings,
  Compass: Compass,
  Sparkles: Sparkles,
  Award: Award
};

export default function Skills({ theme }: SkillsProps) {
  const isLight = theme === 'light';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      id="skills" 
      className={`py-28 px-6 md:px-12 relative overflow-hidden z-10 border-t scroll-mt-24 transition-colors ${
        isLight ? 'border-gray-100 bg-white' : 'border-white/[0.04] bg-[#0B0C10]'
      }`}
    >
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center space-y-3.5 max-w-2xl mx-auto">
          <p className={`font-mono text-[10px] uppercase tracking-[0.25em] font-bold ${
            isLight ? 'text-amber-600' : 'text-amber-400'
          }`}>04 // CAPABILITIES</p>
          <h2 className={`font-sans font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight ${
            isLight ? 'text-gray-900' : 'text-white'
          }`}>
            Technical Expertise
          </h2>
          <p className={`font-sans text-sm sm:text-base leading-relaxed ${
            isLight ? 'text-gray-650' : 'text-gray-400'
          }`}>
            A comprehensive list of tools and technologies I use to bring ideas to life.
          </p>
        </div>

        {/* Technical Expertise Grid Layout mimicking user screenshot */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
        >
          {TECHNICAL_SKILLS.map((skillGroup) => {
            const IconComp = IconMap[skillGroup.icon] || Laptop;

            return (
              <motion.div
                key={skillGroup.id}
                variants={itemVariants}
                className={`p-7 rounded-2xl border transition-all duration-300 relative group overflow-hidden flex flex-col justify-start min-h-[220px] ${
                  isLight 
                    ? 'bg-gray-50/30 border-gray-200 hover:bg-white hover:border-amber-400 hover:shadow-md' 
                    : 'bg-[#121318]/40 border-white/[0.04] hover:bg-[#121318]/70 hover:border-amber-400/20 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]'
                }`}
              >
                {/* Clean blue active decorative tab on mouseover */}
                <div className={`absolute left-0 top-0 h-full w-[3px] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top ${
                  isLight ? 'bg-amber-500' : 'bg-amber-400'
                }`} />

                {/* Card Title Header with Icon and text layout */}
                <div className="flex items-center space-x-3.5 mb-6 select-none">
                  {/* Icon Frame */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                    isLight 
                      ? 'bg-amber-50 border-amber-200 text-amber-600 group-hover:bg-amber-100/70' 
                      : 'bg-amber-950/20 border-amber-500/10 text-amber-400 group-hover:bg-amber-500/10'
                  }`}>
                    <IconComp className="w-4.5 h-4.5" />
                  </div>

                  {/* Title text */}
                  <h3 className={`font-sans font-bold text-lg md:text-xl transition-colors ${
                    isLight ? 'text-gray-950' : 'text-white'
                  }`}>
                    {skillGroup.title}
                  </h3>
                </div>

                {/* Grid tag badges list */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {skillGroup.skills.map((skill, skillIdx) => (
                    <span 
                      key={skillIdx}
                      className={`font-sans text-xs md:text-sm px-3.5 py-1.5 rounded-lg border tracking-tight transition-all duration-200 ${
                        isLight 
                          ? 'bg-white border-gray-200 text-gray-700 hover:bg-gray-100/50 hover:text-black hover:border-amber-400/40' 
                          : 'bg-black/25 border-white/[0.03] text-gray-300 hover:bg-[#1a1b22] hover:text-white hover:border-amber-400/20'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

