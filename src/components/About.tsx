import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Sparkles, Terminal, Code, Cpu, ShieldCheck } from 'lucide-react';

interface AboutProps {
  theme: 'light' | 'dark';
}

export default function About({ theme }: AboutProps) {
  const isLight = theme === 'light';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const services = [
    {
      title: 'Custom WordPress',
      description: 'Custom WordPress builds, even without depending too much on page builders and plugins.',
      icon: Code
    },
    {
      title: 'Flexible Builds',
      description: 'Elementor, Gutenberg, and ACF-based work depending on what the project needs.',
      icon: Terminal
    },
    {
      title: 'Website Maintenance & Optimization',
      description: 'Performance optimization, on-page SEO updates, website migrations, content management, and troubleshooting.',
      icon: ShieldCheck
    },
    {
      title: 'Website Operations',
      description: 'Domain and DNS management, hosting configuration, email authentication setup, and technical support.',
      icon: Cpu
    }
  ];

  return (
    <section 
      id="about" 
      className={`py-28 px-6 md:px-12 relative overflow-hidden z-10 border-t scroll-mt-24 transition-colors ${
        isLight ? 'border-gray-100 bg-gray-50/20' : 'border-white/[0.04]'
      }`}
    >
      <div className="max-w-[1200px] mx-auto">
        
        {/* Bento Grid Layout - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch font-sans">
          
          {/* Column 1: Short Biography & Highlights (Left Side - occupies 6 cols) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              {/* Heading inside Column 1 */}
              <div className="w-full">
                <p className={`font-mono text-[10px] uppercase tracking-[0.25em] mb-2.5 font-bold ${
                  isLight ? 'text-amber-600' : 'text-amber-400'
                }`}>01 // ABOUT</p>
                <h2 className={`font-sans font-black text-3xl sm:text-[42px] tracking-tight leading-tight uppercase ${
                  isLight ? 'text-gray-900' : 'text-white'
                }`}>
                  Passionate Developer <br />
                  <span className={isLight ? 'text-amber-500 font-black' : 'text-amber-400 font-black'}>
                    &amp; Creative Problem Solver
                  </span>
                </h2>
              </div>

              <h3 className={`font-sans font-extrabold text-base sm:text-lg leading-snug uppercase ${
                isLight ? 'text-gray-900' : 'text-amber-400'
              }`}>
                Converting visitors into clients with custom WordPress builds, high-speed pages &amp; automated funnels.
              </h3>
              <p className={`font-sans text-sm sm:text-base leading-relaxed ${
                isLight ? 'text-gray-655' : 'text-gray-400'
              }`}>
                I build fast, stable, and client-friendly WordPress websites paired with conversion-driven marketing funnels. With 3+ years of professional experience, I help brands grow by executing clean designs optimized beautifully for search visibility (SEO) and real-world results.
              </p>
              <p className={`font-sans text-sm sm:text-base leading-relaxed ${
                isLight ? 'text-gray-655' : 'text-gray-400'
              }`}>
                Beyond front-end design, my deep technical focus ensures fast page load speeds, secure hosting setups, and high-performance email deliverability. My goal is to build secure and scalable digital spaces that work flawlessly for your business 24/7.
              </p>
            </motion.div>

            {/* Micro value badges - updated as requested */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-6 border-t border-dashed border-gray-200 dark:border-white/5 w-full"
            >
              {[
                { title: '3+ Years Experience', icon: Briefcase },
                { title: 'Diverse Skill Set', icon: Sparkles }
              ].map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-2.5 sm:space-y-0 sm:space-x-3 p-4 rounded-2xl border border-dashed border-gray-200 dark:border-white/5 bg-gray-50/40 dark:bg-black/10 transition-all duration-300 hover:border-amber-400 justify-center sm:justify-start">
                    <div className={`p-2.5 rounded-xl flex-shrink-0 ${isLight ? 'bg-amber-100/60 text-amber-700' : 'bg-amber-400/10 text-amber-400'}`}>
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <h4 className={`font-sans text-[13px] font-extrabold tracking-tight ${isLight ? 'text-gray-900' : 'text-white'}`}>
                      {val.title}
                    </h4>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Column 2: What I Do (Right Side - occupies 6 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:col-span-6 flex flex-col justify-start border rounded-3xl p-6 md:p-8 backdrop-blur-md relative overflow-hidden ${
              isLight 
                ? 'bg-gray-50/20 border-gray-200/80 shadow-xs' 
                : 'bg-black/25 border-white/[0.04]'
            }`}
          >
            {/* Halo background */}
            <div className={`absolute w-[280px] sm:w-[350px] aspect-square rounded-full blur-[60px] pointer-events-none opacity-[0.22] -top-10 -right-10 ${
              isLight ? 'bg-amber-100/40' : 'bg-amber-950/10'
            }`} />

            {/* WHAT I DO Tag */}
            <div className="text-left mb-6 relative z-10">
              <span className="font-mono text-xs text-amber-500 dark:text-amber-400 uppercase tracking-[0.2em] font-black block mb-1">
                WHAT I DO
              </span>
            </div>

            {/* Vertical Stack matching image */}
            <div className="space-y-4 relative z-10 w-full text-left">
              {services.map((item, idx) => {
                return (
                  <div 
                    key={idx}
                    className={`p-4 md:p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-center gap-1 hover:translate-x-1 ${
                      isLight 
                        ? 'bg-white border-gray-200/80 hover:bg-gray-50 hover:border-amber-400 hover:shadow-xs' 
                        : 'bg-[#121318]/60 border-white/[0.04] hover:bg-[#121318]/90 hover:border-amber-400/30'
                    }`}
                  >
                    <h5 className={`font-sans text-sm sm:text-base font-extrabold ${
                      isLight ? 'text-gray-900' : 'text-white'
                    }`}>
                      {item.title}
                    </h5>
                    <p className={`font-sans text-[11.5px] sm:text-[12.5px] leading-relaxed ${
                      isLight ? 'text-gray-650' : 'text-gray-400'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
