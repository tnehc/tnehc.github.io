import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Layout, CheckCircle, FileDown } from 'lucide-react';

interface HeroProps {
  onNavClick: (sectionId: string) => void;
  theme: 'light' | 'dark';
}

export default function Hero({ onNavClick, theme }: HeroProps) {
  const isLight = theme === 'light';

  // Variations for staggered children entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section 
      id="hero" 
      className={`relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 md:px-12 overflow-hidden z-10 scroll-mt-24 transition-colors duration-500 ${
        isLight ? 'bg-[#FDFCFA]' : 'bg-[#020617]'
      }`}
    >
      {/* Dynamic Sphere Grid Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: isLight ? "#FDFCFA" : "#020617",
          backgroundImage: isLight
            ? `
              linear-gradient(to right, rgba(148,163,184,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(148,163,184,0.1) 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, rgba(50,122,252,0.06) 0%, transparent 70%)
            `
            : `
              linear-gradient(to right, rgba(71,85,105,0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(71,85,105,0.12) 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, rgba(50,122,252,0.12) 0%, transparent 70%)
            `,
          backgroundSize: "64px 64px, 64px 64px, 100% 100%",
        }}
      />

      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Cinematic copy blocks (Left side - occupies 7 cols) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col space-y-7 z-10 text-left"
        >
          {/* Neon Title Accent Badge */}
          <motion.div 
            variants={itemVariants} 
            className={`inline-flex items-center space-x-2 border rounded-full px-4 py-1.5 w-fit shadow-xs ${
              isLight 
                ? 'bg-amber-50 border-amber-200 text-amber-800' 
                : 'bg-amber-950/20 border-amber-500/20 text-amber-400'
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full animate-pulse ${isLight ? 'bg-amber-500' : 'bg-amber-400'}`} />
            <span className="font-mono text-[10px] tracking-wider uppercase font-semibold">
              Available For Dynamic Contracts
            </span>
          </motion.div>

          {/* Core Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="font-sans font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              <span className={isLight ? 'text-gray-900' : 'text-white'}>
                WordPress Developer &amp;<br className="hidden sm:inline" />
              </span>
              <span className={isLight ? 'text-amber-600 font-extrabold' : 'text-amber-400 font-extrabold'}>
                {' '}Web Designer
              </span>
            </h1>
            
            <p className={`font-sans text-sm sm:text-base max-w-xl leading-relaxed ${
              isLight ? 'text-gray-650' : 'text-gray-400'
            }`}>
              Hi, I'm <strong className={isLight ? 'text-gray-900' : 'text-white'}>Bernadette Levera</strong>. I specialize in crafting high-performing WordPress websites, custom landing pages, brand layouts, and automated digital growth funnels.
            </p>
          </motion.div>

          {/* Action Call buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={() => onNavClick('projects')}
              className={`relative group inline-flex items-center justify-center px-8 py-3.5 text-[11px] font-mono uppercase tracking-wider rounded-lg transition-all duration-300 font-bold cursor-pointer ${
                isLight 
                  ? 'text-white bg-gray-950 hover:bg-gray-800 shadow-sm' 
                  : 'text-black bg-amber-400 hover:bg-amber-300 shadow-[0_4px_12px_rgba(254,186,13,0.15)]'
              }`}
            >
              <span className="flex items-center gap-2">
                Explore Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <a
              href="#"
              download
              className={`relative group inline-flex items-center justify-center px-8 py-3.5 text-[11px] font-mono uppercase tracking-wider border rounded-lg transition-all duration-300 cursor-pointer ${
                isLight 
                  ? 'border-gray-200 hover:border-gray-400 text-gray-700 hover:text-gray-900 bg-white/50 backdrop-blur-md' 
                  : 'border-white/10 hover:border-amber-500/30 text-gray-300 hover:text-white bg-white/[0.01]'
              }`}
            >
              <span className="flex items-center gap-2">
                <FileDown className="w-3.5 h-3.5" /> Download Resume
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Card Frame for Hero Portrait (Right side - occupies 5 cols) */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          
          {/* Muted Premium Halo design instead of game grids */}
          <div className={`absolute w-[280px] sm:w-[320px] aspect-square rounded-full blur-[60px] pointer-events-none opacity-[0.22] ${
            isLight ? 'bg-amber-100' : 'bg-amber-900/15'
          }`} />

          {/* Customized Responsive Image Slot - transparent background, very soft container in light mode */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`relative w-full max-w-sm p-4 rounded-3xl border transition-all ${
              isLight 
                ? 'bg-gray-50/50 border-gray-200/80 shadow-xs backdrop-blur-md' 
                : 'bg-black/45 border-white/[0.04]'
            }`}
          >
            {/* Visual Header Monogram details - no unrequested text! */}
            <div className="flex items-center justify-between pb-3.5 border-b mb-4 select-none border-dashed border-gray-250 dark:border-white/5">
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-300 animate-pulse" />
                <span className="w-2.5 h-2.5 rounded-full bg-gray-250" />
              </div>
              <Layout className="w-3.5 h-3.5 text-gray-400" />
            </div>

            {/* Profile Avatar Frame */}
            <div className={`relative aspect-square rounded-2xl overflow-hidden border ${
              isLight ? 'border-gray-150 bg-gray-50' : 'border-white/[0.05] bg-black/40'
            }`}>
              <img 
                src="/images/bernadette_levera_profile.webp" 
                alt="Bernadette Levera Profile" 
                className="w-full h-full object-cover select-none pointer-events-none filter brightness-95 hover:brightness-100 dark:brightness-90 dark:hover:brightness-100 transition duration-500"
                referrerPolicy="no-referrer"
              />
              <div className={`absolute inset-0 bg-gradient-to-t opacity-45 pointer-events-none ${
                isLight ? 'from-gray-50/60 via-transparent' : 'from-black via-transparent'
              }`} />
            </div>

            {/* Metadata Footer bar inside profile card */}
            <div className="mt-4 pt-3.5 flex items-center justify-between font-mono text-[9.5px]">
              <span className={`inline-flex items-center gap-1.5 font-bold ${
                isLight ? 'text-gray-900 border-none' : 'text-white'
              }`}>
                <CheckCircle className={`w-3.5 h-3.5 ${isLight ? 'text-amber-600' : 'text-amber-400'}`} /> WordPress Developer
              </span>
              <span className="text-gray-550 font-bold">Exp. 3+ Years</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
