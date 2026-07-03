import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileDown, MessageSquare, X, ArrowUpRight } from 'lucide-react';

interface WhatsAppButtonProps {
  theme: 'light' | 'dark';
}

export default function WhatsAppButton({ theme }: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  const isLight = theme === 'light';

  const whatsappUrl = 'https://wa.me/639125105214?text=Hi%20Bernadette%2C%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20connect!';

  // Click outside to close the contact menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleDownloadResume = () => {
    // Attempting to trigger resume download from Hero or general asset paths.
    // Standard approach: open a link or trigger download event.
    const link = document.createElement('a');
    link.href = '#'; // Fallback to current section or resume file
    link.download = 'Bernadette_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      id="contact-floating-widget"
      ref={widgetRef}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end select-none font-sans"
    >
      {/* Contact Options Overlay Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20, stiffness: 220 }}
            className={`mb-4 w-[320px] sm:w-[350px] p-6 rounded-2xl shadow-2xl border text-left overflow-hidden relative ${
              isLight 
                ? 'bg-white/95 border-gray-150 text-gray-900 shadow-gray-200/50 backdrop-blur-md' 
                : 'bg-[#0a0b0e]/95 border-white/[0.08] text-white shadow-black/80 backdrop-blur-lg'
            }`}
          >
            {/* Elegant Header */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <h4 className="text-base font-extrabold tracking-tight">Get in touch</h4>
                <p className={`text-xs mt-0.5 ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                  I'm always open to discuss new opportunities!
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                  isLight 
                    ? 'hover:bg-gray-100 text-gray-500' 
                    : 'hover:bg-white/10 text-gray-400'
                }`}
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content list / Action items */}
            <div className="space-y-3">
              {/* Row 1: Download Resume */}
              <button
                onClick={handleDownloadResume}
                className={`w-full group flex items-center p-3 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                  isLight 
                    ? 'bg-gray-50 hover:bg-gray-100 border-gray-100 hover:border-gray-250' 
                    : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/[0.04] hover:border-white/10'
                }`}
              >
                {/* Left side circle icon with brand theme background */}
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-amber-400 text-white transition-transform duration-300 group-hover:scale-105 mr-3 shrink-0 shadow-[0_2px_10px_rgba(50,122,252,0.35)]">
                  <FileDown className="w-5 h-5" />
                </div>
                {/* Right text labels */}
                <div className="flex-1 min-w-0">
                  <span className={`block text-[10px] uppercase tracking-wider font-semibold ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
                    Download Resume
                  </span>
                  <span className={`block text-sm font-extrabold truncate ${isLight ? 'text-gray-800' : 'text-white'} group-hover:text-amber-450 transition-colors`}>
                    Get my CV / Resume
                  </span>
                </div>
                <ArrowUpRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 ${isLight ? 'text-gray-400' : 'text-gray-550'}`} />
              </button>

              {/* Row 2: Let's Chat on WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className={`w-full group flex items-center p-3 rounded-xl border text-left transition-all duration-300 cursor-pointer decoration-none ${
                  isLight 
                    ? 'bg-gray-50 hover:bg-gray-100 border-gray-100 hover:border-gray-250' 
                    : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/[0.04] hover:border-white/10'
                }`}
              >
                {/* Left side circle icon - WhatsApp green #25D366 background with white icon */}
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#25D366] text-white transition-transform duration-300 group-hover:scale-105 mr-3 shrink-0 shadow-[0_2px_10px_rgba(37,211,102,0.35)]">
                  {/* WhatsApp SVG Icon */}
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.031 2c-5.51 0-9.985 4.47-9.985 9.98 0 1.76.455 3.475 1.325 5L2 22l5.17-1.355a9.92 9.92 0 0 0 4.86 1.265c5.51 0 9.985-4.47 9.985-9.98C22.015 6.47 17.541 2 12.031 2zm0 18.29c-1.56 0-3.09-.42-4.42-1.21l-.315-.19-3.285.86.875-3.2-.21-.33c-.86-1.37-1.31-2.96-1.31-4.6 0-4.62 3.76-8.38 8.38-8.38 4.62 0 8.38 3.76 8.38 8.38s-3.76 8.38-8.38 8.38zm4.59-6.28c-.25-.12-1.48-.73-1.71-.81-.23-.08-.4-.12-.57.12-.17.25-.67.81-.82.99-.15.17-.3.2-.55.08-.25-.12-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.87-.21-.5-.41-.43-.57-.44H9.42c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.6c.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
                  </svg>
                </div>
                {/* Right text labels */}
                <div className="flex-1 min-w-0">
                  <span className={`block text-[10px] uppercase tracking-wider font-semibold ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
                    WhatsApp
                  </span>
                  <span className="block text-sm font-extrabold truncate text-emerald-500 group-hover:text-emerald-400 transition-colors">
                    Let's chat on WhatsApp
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 text-emerald-500" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button with Pulsating Outer Concentric Circles */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle contact menu"
        className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 text-white shadow-[0_4px_20px_rgba(50,122,252,0.4)] hover:shadow-[0_6px_28px_rgba(50,122,252,0.6)] cursor-pointer select-none focus:outline-hidden relative z-10"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Continuous Pulse Stroke Animation (Multiple Concentric Rings) */}
        {!isOpen && (
          <>
            <span className="absolute inset-0 rounded-full border-2 border-amber-400/50 pointer-events-none pulse-ring-1" />
            <span className="absolute inset-0 rounded-full border-2 border-amber-400/50 pointer-events-none pulse-ring-2" />
            <span className="absolute inset-0 rounded-full border-2 border-amber-400/50 pointer-events-none pulse-ring-3" />
          </>
        )}

        {/* Live Green Online Status Indicator Dot with Black Border */}
        {!isOpen && (
          <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-[#22c55e] border-2 border-neutral-950 rounded-full z-20 shadow-xs" />
        )}

        {/* Dynamic Center Icon - Close icon or Speech Bubble Icon */}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Perfectly polished speech bubble matching the image */}
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5 md:w-6 md:h-6 fill-none stroke-white stroke-2"
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
