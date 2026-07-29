import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Github } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Navbar({ activeSection, onNavClick, theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isLight = theme === 'light';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Works' },
    { id: 'skills', label: 'Expertise' },
    // { id: 'testimonials', label: 'Feedback' }, // Hidden for now as requested
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    if (isOpen) {
      setIsOpen(false);
      // Wait for the drawer close animation to finish so the layout is stable,
      // preventing the smooth scroll from being aborted on mobile browsers.
      setTimeout(() => {
        onNavClick(id);
      }, 250);
    } else {
      onNavClick(id);
    }
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center ${
        (scrolled || isOpen)
          ? isLight
            ? 'bg-white border-b border-gray-150 h-20 shadow-md'
            : 'bg-[#0B0C10] border-b border-white/[0.05] h-20 shadow-xl' 
          : 'bg-transparent h-24 border-b border-transparent'
      }`}
    >
      <div className="w-full px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          {/* Elegant Minimal Brand Logo */}
          <button 
            onClick={() => handleLinkClick('hero')}
            className="flex items-center cursor-pointer text-left group transition-transform duration-300 hover:scale-[1.02]"
          >
            <Logo height={50} theme={theme} />
          </button>

          {/* Elegant Desktop Navigation Links */}
          <nav className={`hidden lg:flex items-center space-x-1.5 p-1.5 rounded-full border transition-colors duration-300 ${
            isLight ? 'bg-gray-100/50 border-gray-200/50' : 'bg-white/[0.02] border-white/[0.04]'
          }`}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-4 py-2.5 text-[11px] sm:text-[12px] font-mono uppercase tracking-widest rounded-full transition-colors duration-200 cursor-pointer font-bold ${
                    isActive 
                      ? isLight ? 'text-amber-600' : 'text-amber-400'
                      : isLight ? 'text-gray-500 hover:text-gray-900' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className={`absolute inset-0 rounded-full -z-10 shadow-sm ${
                        isLight ? 'bg-white border border-gray-200/50' : 'bg-white/[0.06] border border-white/[0.06]'
                      }`}
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Dark/Light Mode toggle & GitHub container */}
          <div className="hidden lg:flex items-center space-x-5">
            <a
              href="https://github.com/tnehc"
              target="_blank"
              rel="noreferrer"
              className={`transition-colors py-1 ${isLight ? 'text-gray-500 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}
              aria-label="GitHub Account"
            >
              <Github className="w-4.5 h-4.5" />
            </a>

            {/* Premium theme switch button toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-all duration-300 cursor-pointer ${
                isLight 
                  ? 'bg-gray-100 border-gray-200 hover:bg-gray-200 text-gray-700' 
                  : 'bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06] text-amber-400'
              }`}
              aria-label="Toggle visual theme mode"
            >
              {isLight ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Mobile menu trigger + theme toggle layout */}
          <div className="flex items-center space-x-3 lg:hidden">
            {/* Mobile Theme Switcher */}
            <button
              onClick={toggleTheme}
              className={`p-1.5 rounded-full border cursor-pointer ${
                isLight 
                  ? 'bg-gray-100 border-gray-200 text-gray-700' 
                  : 'bg-white/[0.03] border-white/10 text-amber-400'
              }`}
              aria-label="Switch Theme Mode"
            >
              {isLight ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-1.5 rounded-md border transition-colors cursor-pointer ${
                isLight 
                  ? 'border-gray-200 hover:bg-gray-100 text-gray-700' 
                  : 'border-white/5 hover:bg-white/5 text-gray-300 hover:text-white'
              }`}
              aria-label="Toggle Navigation Screen"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Drawer screen with theme variables */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`lg:hidden absolute top-full left-0 w-full overflow-hidden shadow-2xl border-b z-50 ${
              isLight 
                ? 'bg-white border-gray-250' 
                : 'bg-[#0B0C10] border-white/[0.06]'
            }`}
          >
            <div className="px-5 py-5 flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`flex items-center justify-between w-full py-3.5 px-4 text-xs font-mono uppercase tracking-widest text-left cursor-pointer rounded-xl transition-all ${
                      isActive 
                        ? isLight 
                          ? 'bg-amber-50 text-amber-600 font-extrabold' 
                          : 'bg-white/[0.03] text-amber-400 font-extrabold' 
                        : isLight 
                          ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50' 
                          : 'text-gray-400 hover:text-white hover:bg-white/[0.01]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive ? (
                      <span className={`h-2 w-2 rounded-full ${isLight ? 'bg-amber-600' : 'bg-amber-400'}`} />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-transparent border border-gray-450 opacity-30" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
