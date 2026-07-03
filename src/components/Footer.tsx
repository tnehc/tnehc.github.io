import React from 'react';
import { ArrowUp } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
  theme: 'light' | 'dark';
}

export default function Footer({ onNavClick, theme }: FooterProps) {
  const isLight = theme === 'light';

  return (
    <footer className={`relative border-t py-8 px-6 md:px-12 z-20 transition-colors ${
      isLight ? 'bg-gray-55 border-gray-150 text-gray-700' : 'bg-[#0B0C10] border-white/[0.04] text-gray-400'
    }`}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-5 w-full relative">
        
        {/* Left side empty space for centering on desktop */}
        <div className="hidden md:block" />
        
        {/* Brand Copyright Centered */}
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          <Logo height={24} theme={theme} />
          <span className={`font-sans text-xs tracking-medium ${
            isLight ? 'text-gray-900 font-semibold' : 'text-gray-350'
          }`}>
            &copy; 2026 Bernadette Levera. All rights reserved.
          </span>
        </div>

        {/* Scroll back to top triggering - Icon Only */}
        <div className="flex justify-center md:justify-end">
          <button
            onClick={() => onNavClick('hero')}
            className={`group flex items-center justify-center p-2.5 border rounded-full transition-all duration-300 cursor-pointer ${
              isLight 
                ? 'border-gray-250 hover:border-gray-400 bg-white hover:bg-gray-100 text-gray-750' 
                : 'border-white/[0.05] hover:border-amber-400 bg-white/[0.01] hover:bg-white/5 text-gray-400 hover:text-white'
            }`}
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4 text-gray-500 group-hover:translate-y-[-2px] transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
