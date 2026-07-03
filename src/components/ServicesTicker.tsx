import React from 'react';
import { Sparkles } from 'lucide-react';

interface ServicesTickerProps {
  theme: 'light' | 'dark';
}

export default function ServicesTicker({ theme }: ServicesTickerProps) {
  const isLight = theme === 'light';

  const services = [
    "WordPress Development",
    "Web Design",
    "Landing Page Creation",
    "Sales Funnel Development",
    "Website Maintenance",
    "WooCommerce Setup",
    "Website Speed Optimization",
    "On-Page SEO",
    "GoHighLevel CRM Management"
  ];

  // Quadruple the services lists to ensure a large overflow for a seamless animation track loop
  const tickerItems = [...services, ...services, ...services, ...services];

  return (
    <div 
      className={`relative w-full border-y py-4.5 overflow-hidden z-25 transition-colors duration-500 ${
        isLight 
          ? 'bg-amber-50/30 border-gray-150 shadow-xs' 
          : 'bg-[#06070a]/90 backdrop-blur-md border-white/[0.04] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
      }`}
    >
      {/* Side gradient overlay masks for an elegant faded edge effect */}
      <div className={`absolute top-0 bottom-0 left-0 w-16 sm:w-32 z-10 pointer-events-none bg-gradient-to-r ${
        isLight ? 'from-[#FDFCFA] to-transparent' : 'from-[#0B0C10] via-[#0B0C10]/40 to-transparent'
      }`} />
      <div className={`absolute top-0 bottom-0 right-0 w-16 sm:w-32 z-10 pointer-events-none bg-gradient-to-l ${
        isLight ? 'from-[#FDFCFA] to-transparent' : 'from-[#0B0C10] via-[#0B0C10]/40 to-transparent'
      }`} />

      {/* Infinite scrolling viewport container */}
      <div className="flex w-max relative">
        <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
          {tickerItems.map((service, idx) => (
            <div 
              key={`ticker-1-${idx}`} 
              className="flex items-center mx-6 sm:mx-8 md:mx-10 selection:bg-amber-400 selection:text-black"
            >
              <span className={`font-mono text-[10.5px] sm:text-[11.5px] font-bold uppercase tracking-[0.22em] ${
                isLight ? 'text-gray-700' : 'text-gray-300'
              }`}>
                {service}
              </span>
              
              {/* Vibrant Gold 4-Point Sparkle Divider */}
              <span className="ml-12 sm:ml-16 md:ml-20 flex-shrink-0 flex items-center justify-center">
                <Sparkles className={`w-3.5 h-3.5 ${
                  isLight 
                    ? 'text-amber-500 drop-shadow-[0_0_2px_rgba(254,186,13,0.3)]' 
                    : 'text-amber-400 drop-shadow-[0_0_6px_rgba(254,186,13,0.6)]'
                }`} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
