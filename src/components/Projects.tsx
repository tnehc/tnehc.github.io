import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Layout, Info, X, Check, Laptop, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

interface ProjectsProps {
  theme: 'light' | 'dark';
}

export default function Projects({ theme }: ProjectsProps) {
  const isLight = theme === 'light';
  const [filter, setFilter] = useState<'All' | 'WordPress Works' | 'Design'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const handleFilterChange = (cat: 'All' | 'WordPress Works' | 'Design') => {
    setFilter(cat);
    setVisibleCount(3);
  };

  const categories: Array<'All' | 'WordPress Works' | 'Design'> = [
    'All', 'WordPress Works', 'Design'
  ];

  return (
    <section 
      id="projects" 
      className={`py-28 px-6 md:px-12 relative overflow-hidden z-10 border-t scroll-mt-24 transition-colors ${
        isLight ? 'border-gray-100 bg-gray-50/20' : 'border-white/[0.04]'
      }`}
    >
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6 text-center lg:text-left items-center lg:items-end">
          <div className="space-y-3 max-w-xl mx-auto lg:mx-0">
            <p className={`font-mono text-[10px] uppercase tracking-[0.25em] mb-1 font-bold ${
              isLight ? 'text-amber-600' : 'text-amber-400'
            }`}>03 // PORTFOLIO</p>
            <h2 className={`font-sans font-black text-3xl sm:text-5xl tracking-tight leading-tight uppercase ${
              isLight ? 'text-gray-900' : 'text-white'
            }`}>
              Featured Projects
            </h2>
            <p className={`font-sans text-sm md:text-base leading-relaxed ${
              isLight ? 'text-gray-655' : 'text-gray-400'
            }`}>
              A curated catalog of custom-styled WordPress sites, digital templates, and automated sales conduits engineered for growth.
            </p>
          </div>

          {/* Clean Premium Layout Filter Bar */}
          <div className={`flex w-full lg:w-auto gap-1 p-1 border rounded-full backdrop-blur-md transition-colors ${
            isLight ? 'bg-gray-100 border-gray-200' : 'bg-white/[0.02] border-white/[0.05]'
          }`}>
            {categories.map((cat) => {
              const active = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleFilterChange(cat)}
                  className={`flex-1 lg:flex-initial text-center px-3.5 sm:px-6 py-2 rounded-full font-mono text-[10px] uppercase tracking-wider transition-all duration-300 cursor-pointer font-bold ${
                    active 
                      ? isLight
                        ? 'bg-white text-amber-700 shadow-xs'
                        : 'bg-amber-400 text-black font-extrabold' 
                      : isLight ? 'text-gray-500 hover:text-gray-900' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Bento-grid container */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project: Project) => {
              const isLarge = false;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-1 cursor-pointer ${
                    isLight 
                      ? 'bg-white border-gray-200 shadow-xs hover:border-amber-400 hover:shadow-md' 
                      : 'bg-[#121318]/70 border-white/[0.05] hover:border-amber-400/30 hover:shadow-[0_20px_45px_rgba(0,0,0,0.6)]'
                  } ${
                    isLarge ? 'md:col-span-2' : 'md:col-span-1'
                  }`}
                >
                  {/* Outer Frame Flex layout */}
                  <div className={`flex flex-col-reverse ${isLarge ? 'lg:grid lg:grid-cols-12' : ''} h-full`}>
                    
                    {/* Metadata column details */}
                    <div className={`p-6 md:p-8 flex flex-col justify-between text-left ${isLarge ? 'lg:col-span-5' : ''}`}>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          <span className={`font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-md font-semibold border ${
                            isLight
                              ? 'bg-amber-50 border-amber-200 text-amber-800'
                              : 'bg-amber-950/20 border-amber-500/10 text-amber-400'
                          }`}>
                            {project.category}
                          </span>
                        </div>

                        <h3 className={`font-sans font-bold text-xl md:text-2xl tracking-tight transition-colors leading-snug ${
                          isLight ? 'text-gray-900 group-hover:text-amber-600' : 'text-white group-hover:text-amber-400'
                        }`}>
                          {project.title}
                        </h3>

                        <p className={`font-sans text-xs md:text-sm leading-relaxed ${
                          isLight ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                          {project.description}
                        </p>
                      </div>

                      {/* Pill list stack */}
                      <div className={`pt-6 mt-6 border-t flex flex-col space-y-4 justify-end ${
                        isLight ? 'border-gray-100' : 'border-white/[0.03]'
                      }`}>
                        <div className="flex flex-wrap gap-2.5">
                          {project.tags.map((tag, tIdx) => (
                            <span 
                              key={tIdx} 
                              className={`font-mono text-[9.5px] font-semibold tracking-tight ${
                                isLight ? 'text-gray-400' : 'text-gray-500'
                              }`}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        {/* Direct Button action trigger */}
                        <div className="flex items-center space-x-4">
                          <button
                            type="button"
                            className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest font-bold transition-all ${
                              isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
                            }`}
                          >
                            <Info className="w-4 h-4" /> View Layout & Details
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Image visual section */}
                    <div className={`relative overflow-hidden ${isLarge ? 'lg:col-span-7 h-full min-h-[250px] lg:min-h-full' : 'aspect-video w-full'}`}>
                      <img 
                        src={project.image} 
                        alt={`Website Layout Mockup Graphic for: ${project.title}`}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.025] transition-all duration-700 select-none"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Gradient overlay overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t pointer-events-none opacity-40 ${
                        isLight ? 'from-white/70 via-transparent' : 'from-black/70 via-transparent'
                      }`} />
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {filteredProjects.length > visibleCount && (
          <div className="flex justify-center mt-12 relative z-20">
            <button
              onClick={() => setVisibleCount(prev => prev + 3)}
              className={`px-8 py-3.5 rounded-full font-mono text-xs uppercase tracking-widest font-extrabold transition-all border cursor-pointer hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 ${
                isLight 
                  ? 'bg-white border-gray-200 text-gray-800 hover:border-amber-400 hover:text-amber-600 shadow-xs' 
                  : 'bg-white/5 border-white/10 text-white hover:bg-amber-400 hover:text-black hover:border-amber-400'
              }`}
            >
              Load More Projects
            </button>
          </div>
        )}

        {/* ELEGANT MODAL OVERLAY: Simulates Imgur / Design details view inside */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto"
              onClick={() => {
                setSelectedProject(null);
                setIsImageHovered(false);
              }}
            >
              <motion.div 
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full max-w-5xl md:max-w-6xl rounded-3xl overflow-hidden shadow-2xl relative my-8 border text-left ${
                  isLight ? 'bg-white border-gray-150' : 'bg-[#121318] border-white/[0.06]'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                
                {/* Header Action Menu */}
                <div className={`flex items-center justify-between px-6 py-4 border-b ${
                  isLight ? 'bg-gray-50 border-gray-150' : 'bg-black/40 border-white/[0.05]'
                }`}>
                  <div className="flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    <span className={`font-mono text-[10px] tracking-wider uppercase font-bold ${
                      isLight ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      PROJECT DETAILS & PROTOTYPE VIEW
                    </span>
                  </div>

                  <button 
                    onClick={() => {
                      setSelectedProject(null);
                      setIsImageHovered(false);
                    }}
                    className={`p-1.5 text-gray-400 hover:text-white rounded-full transition-colors cursor-pointer ${
                      isLight ? 'hover:bg-gray-200 hover:text-gray-900' : 'hover:bg-white/5'
                    }`}
                    aria-label="Close details tray"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 md:grid-cols-12 max-h-[82vh] overflow-y-auto">
                  
                  {/* Mockup Full-View Display Col */}
                  <div className="md:col-span-7 bg-black/20 relative p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-250 dark:border-white/[0.05]">
                    <div className="w-full flex items-center justify-between mb-3 px-1">
                      <div className="flex items-center space-x-2">
                        <Laptop className={`w-4.5 h-4.5 ${isLight ? 'text-gray-500' : 'text-amber-400/85'}`} />
                        <span className={`font-mono text-[9px] uppercase tracking-wider font-semibold ${
                          isLight ? 'text-gray-500' : 'text-gray-450'
                        }`}>
                          Interactive Viewport
                        </span>
                      </div>
                      <span className={`font-mono text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1.5 ${
                        isLight ? 'bg-gray-200/60 text-gray-700' : 'bg-white/5 text-amber-400'
                      }`}>
                        <Sparkles className="w-3 h-3 animate-pulse" /> Hover Mockup to Scroll
                      </span>
                    </div>

                    <div className={`w-full h-[520px] overflow-hidden rounded-2xl border relative transition-all duration-300 ${
                      isLight ? 'border-gray-200 bg-gray-50' : 'border-white/[0.06] bg-[#0c0d11]'
                    }`}>
                      <img 
                        src={selectedProject.image} 
                        alt={`High-resolution mockup of ${selectedProject.title}`}
                        className="w-full h-auto absolute top-0 left-0 transition-transform duration-[8000ms] ease-in-out cursor-ns-resize"
                        style={{
                          transform: isImageHovered ? 'translateY(calc(-100% + 520px))' : 'translateY(0)'
                        }}
                        onMouseEnter={() => setIsImageHovered(true)}
                        onMouseLeave={() => setIsImageHovered(false)}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Informational Details Sidebar */}
                  <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-between">
                    <div className="space-y-6">
                      
                      {/* Section tag / category */}
                      <div>
                        <span className={`font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 rounded font-bold border ${
                          isLight 
                            ? 'bg-amber-50 border-amber-200 text-amber-800' 
                            : 'bg-amber-950/20 border-amber-500/10 text-amber-400'
                        }`}>
                          {selectedProject.category}
                        </span>
                        
                        <h4 className={`font-sans font-bold text-xl md:text-2xl tracking-tight leading-tight mt-3 ${
                          isLight ? 'text-gray-900' : 'text-white'
                        }`}>
                          {selectedProject.title}
                        </h4>
                      </div>

                      {/* Design strategy brief */}
                      <div className="space-y-2.5 text-xs sm:text-sm">
                        <h5 className={`font-mono text-[9.5px] uppercase tracking-wider font-bold ${
                          isLight ? 'text-gray-800' : 'text-gray-400'
                        }`}>
                          Project Blueprint & Method
                        </h5>
                        <p className={isLight ? 'text-gray-650' : 'text-gray-400'}>
                          This custom-crafted website is optimized for conversion, page responsiveness, and lightning-fast loading speeds. Implements modular layouts, optimal accessibility, and technical SEO structure.
                        </p>
                      </div>

                      {/* Core Highlights */}
                      <div className="space-y-2 text-xs sm:text-sm">
                        <h5 className={`font-mono text-[9.5px] uppercase tracking-wider font-bold ${
                          isLight ? 'text-gray-800' : 'text-gray-400'
                        }`}>
                          Technical Benchmarks
                        </h5>
                        <ul className={`space-y-1.5 ${isLight ? 'text-gray-650' : 'text-gray-400'}`}>
                          <li className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-amber-500" /> Optimal client conversion flow
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-amber-500" /> Pixel-accurate visual system
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-amber-500" /> Desktop & mobile responsiveness
                          </li>
                        </ul>
                      </div>

                    </div>

                    {/* Footer Tools used & mockup alert */}
                    <div className={`mt-8 pt-6 border-t ${
                      isLight ? 'border-gray-150' : 'border-white/[0.05]'
                    }`}>
                      <div className="mb-6">
                        <span className="font-mono text-[8.5px] text-gray-500 uppercase tracking-widest block mb-1.5 font-semibold">
                          TOOLS EMPOWERED
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedProject.tags.map((tag, tagIdx) => (
                            <span 
                              key={tagIdx}
                              className={`font-sans text-[10px] px-2.5 py-1 rounded-md tracking-tight ${
                                isLight 
                                  ? 'bg-gray-100 border border-gray-200 text-gray-650' 
                                  : 'bg-white/[0.03] border border-white/[0.05] text-gray-300'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between w-full pt-2">
                        <div className="flex flex-col">
                          <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider">
                            PROJECT STATUS
                          </span>
                          <span className={`font-mono text-[11px] font-bold mt-0.5 ${
                            isLight ? 'text-amber-700' : 'text-amber-400'
                          }`}>
                            {selectedProject.liveUrl && selectedProject.liveUrl !== '#' ? '✓ LIVE DEPLOYED' : '✦ SITE TEMPLATE'}
                          </span>
                        </div>
                        
                        {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-5 py-2.5 text-[10.1px] font-mono uppercase tracking-wider rounded-xl font-bold transition-all border flex items-center gap-1.5 cursor-pointer ${
                              isLight
                                ? 'bg-amber-600 border-amber-600 hover:bg-amber-700 text-white shadow-sm'
                                : 'bg-amber-400 border-amber-400 hover:bg-amber-300 text-black shadow-lg shadow-amber-400/10'
                            }`}
                          >
                            Visit Live Site <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>

                    </div>

                  </div>

                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
