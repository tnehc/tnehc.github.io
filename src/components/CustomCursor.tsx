import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { stiffness: 240, damping: 25 };
  const circleX = useSpring(dotX, springConfig);
  const circleY = useSpring(dotY, springConfig);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') !== null || 
        target.closest('button') !== null ||
        target.closest('[role="button"]') !== null ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('.group') !== null ||
        target.classList.contains('interactive-node');

      setIsHovered(!!isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dotX, dotY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Instant Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-amber-500 z-50 pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ x: dotX, y: dotY }}
      />
      {/* Lagging Spring Circle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-amber-500/20 z-50 pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          x: circleX,
          y: circleY,
          width: isHovered ? 40 : isClicking ? 16 : 24,
          height: isHovered ? 40 : isClicking ? 16 : 24,
          backgroundColor: isHovered ? 'rgba(50, 122, 252, 0.05)' : 'transparent',
          borderColor: isHovered ? 'rgba(50, 122, 252, 0.8)' : 'rgba(50, 122, 252, 0.25)',
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.12 }}
      />
    </>
  );
}
