import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

// Component Imports
import BackgroundEffect from './components/BackgroundEffect';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesTicker from './components/ServicesTicker';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadPercent, setLoadPercent] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark'); // Initial clean dark mode default

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Modern Preloader
  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += Math.floor(Math.random() * 12) + 6;
      if (start >= 100) {
        start = 100;
        setLoadPercent(100);
        clearInterval(interval);
        setTimeout(() => setLoading(false), 300);
      } else {
        setLoadPercent(start);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  // Section Tracking intersection observer
  useEffect(() => {
    const list = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0,
    };

    const observerCallbacks = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallbacks, observerOptions);

    list.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      list.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [loading]);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Animated Loading screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#0B0C10] z-50 flex flex-col items-center justify-center font-mono text-amber-400 select-none cursor-wait"
          >
            <div className="space-y-6 flex flex-col items-center text-center px-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2.2, ease: 'linear' }}
                className="inline-flex p-3 bg-amber-950/20 border border-amber-400 border-t-transparent rounded-full"
              >
                <Sparkles className="w-5 h-5 text-amber-400" />
              </motion.div>

              <div className="space-y-1">
                <div className="text-xs uppercase tracking-[0.25em] text-white font-bold">BERNADETTE LEVERA</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
                  Booting Creative Studio...
                </div>
              </div>

              {/* Progress Bar slider */}
              <div className="w-52 h-1 bg-white/[0.03] border border-white/[0.05] rounded-full overflow-hidden relative">
                <div 
                  className="h-full bg-amber-400 rounded-full transition-all duration-100 ease-out" 
                  style={{ width: `${loadPercent}%` }}
                />
              </div>

              <div className="text-[10px] font-bold tracking-widest text-amber-400/85">
                {loadPercent}% LOADED
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Experience Body */}
      {!loading && (
        <div className={`relative min-h-screen font-sans selection:bg-amber-400 selection:text-black transition-colors duration-500 overflow-x-hidden ${
          theme === 'light' ? 'text-gray-900 bg-[#FDFCFA]' : 'text-gray-100 bg-[#0B0C10]'
        }`}>
          {/* Custom interactive cursor */}
          <CustomCursor />

          {/* Canvas Background effect */}
          <BackgroundEffect theme={theme} />

          {/* Navigation Bar */}
          <Navbar 
            activeSection={activeSection} 
            onNavClick={handleScrollToSection} 
            theme={theme} 
            toggleTheme={toggleTheme} 
          />

          {/* Main Portfolio Layout Sections */}
          <main className="relative tracking-normal leading-relaxed overflow-hidden">
            <Hero onNavClick={handleScrollToSection} theme={theme} />
            <ServicesTicker theme={theme} />
            <About theme={theme} />
            <Timeline theme={theme} />
            <Projects theme={theme} />
            <Skills theme={theme} />
            {/* Hidden for now as requested - can be shown later by removing the hidden wrapper or uncommenting */}
            <div className="hidden">
              <Testimonials theme={theme} />
            </div>
            <Contact theme={theme} />
          </main>

          {/* Footer coordinates */}
          <Footer onNavClick={handleScrollToSection} theme={theme} />

          {/* Floating WhatsApp contact CTA */}
          <WhatsAppButton theme={theme} />
        </div>
      )}
    </>
  );
}
