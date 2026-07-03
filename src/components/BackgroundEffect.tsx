import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

interface BackgroundEffectProps {
  theme: 'light' | 'dark';
}

export default function BackgroundEffect({ theme }: BackgroundEffectProps) {
  const isLight = theme === 'light';
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 45, damping: 20 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div 
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden transition-colors duration-500 ${
        isLight ? 'bg-[#FDFCFA]' : 'bg-[#0B0C10]'
      }`}
    >
      {/* Premium Minimalist Gradient Ambient Orbs (Apple Style) */}
      <div 
        className={`absolute top-[-5%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[130px] transition-all duration-700 ${
          isLight ? 'bg-amber-200/10' : 'bg-amber-950/10'
        }`} 
      />
      <div 
        className={`absolute bottom-[-10%] right-[-1s%] w-[60%] h-[50%] rounded-full blur-[140px] transition-all duration-700 ${
          isLight ? 'bg-amber-100/30' : 'bg-amber-950/10'
        }`} 
      />
      <div 
        className={`absolute top-[40%] right-[10%] w-[35%] h-[35%] rounded-full blur-[110px] transition-all duration-700 ${
          isLight ? 'bg-amber-100/15' : 'bg-amber-900/10'
        }`} 
      />

      {/* Elegant, Diffuse Cursor Glow Tracker Spotlights */}
      <motion.div
        style={{
          x: spotlightX,
          y: spotlightY,
        }}
        className={`absolute w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none ${
          isLight 
            ? 'bg-gradient-to-tr from-amber-400/5 to-amber-600/3' 
            : 'bg-gradient-to-tr from-amber-500/4 to-amber-900/3'
        }`}
      />

      {/* Subtle layout grid markers (very premium architecture lines instead of sci-fi graph lines) */}
      <div className={`absolute inset-0 opacity-[0.2] h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] ${
        isLight ? 'invert-0 opacity-[0.2]' : 'invert-100 opacity-[0.03]'
      }`} />

      {/* Light subtle digital organic grain paper texture overlay */}
      <div 
        className={`absolute inset-0 pointer-events-none ${
          isLight ? 'opacity-[0.012]' : 'opacity-[0.015]'
        } bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:24px_24px]`}
        style={{ mixBlendMode: 'overlay' }}
      />
    </div>
  );
}
