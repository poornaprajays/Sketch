import React, { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="border-t-2 border-dashed border-pencil/30 dark:border-paper/20 py-8 px-6 text-center mt-12 bg-white/30 dark:bg-pencil/10 text-pencil/70 dark:text-paper/70 font-semibold select-none font-body">
        <p className="text-sm">
          © 2026 {portfolioData.personalInfo.name}. Hand-drawn with care & alignment 🌱
        </p>
      </footer>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`top-btn fixed bottom-6 right-6 z-50 w-11 h-11 border-[3px] border-pencil dark:border-paper bg-white dark:bg-pencil text-pencil dark:text-paper flex items-center justify-center cursor-pointer shadow-[3px_3px_0px_#2d2d2d] dark:shadow-[3px_3px_0px_#fdfbf7] active:translate-y-0.5 active:shadow-none hover:bg-correction hover:text-white dark:hover:bg-correction dark:hover:text-white transition-all duration-300 ${
          showTopBtn ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
};
