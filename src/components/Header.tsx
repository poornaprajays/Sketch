import React, { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export const Header: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const activeTheme = savedTheme || 'dark';
    setTheme(activeTheme);
    applyTheme(activeTheme);
  }, []);

  const applyTheme = (themeMode: 'light' | 'dark') => {
    if (themeMode === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#1e1e1e';
      document.body.style.color = '#fdfbf7';
      document.body.style.backgroundImage = 'radial-gradient(#3a3a3a 1.5px, transparent 1.5px)';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#fdfbf7';
      document.body.style.color = '#2d2d2d';
      document.body.style.backgroundImage = 'radial-gradient(#e5e0d8 1.5px, transparent 1.5px)';
    }
  };

  const handleToggle = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    applyTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  return (
    <header className="sticky top-0 z-40 bg-paper/85 dark:bg-[#1e1e1e]/85 backdrop-blur-sm border-b-2 border-dashed border-pencil/40 dark:border-paper/30 py-4 px-6 md:px-12 transition-colors duration-200">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tight text-pencil dark:text-paper font-marker hover:text-correction transition-colors">
          <span>{portfolioData.personalInfo.shortName}</span>
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 font-bold text-sm">
            <a href="#about" className="text-pencil dark:text-paper hover:text-correction wavy-underline">ABOUT</a>
            <a href="#work" className="text-pencil dark:text-paper hover:text-correction wavy-underline">WORK</a>
            <a href="#projects" className="text-pencil dark:text-paper hover:text-correction wavy-underline">PROJECTS</a>
            <a href="#skills" className="text-pencil dark:text-paper hover:text-correction wavy-underline">SKILLS</a>
            <a href="#education" className="text-pencil dark:text-paper hover:text-correction wavy-underline">EDUCATION</a>
            <a href="#contact" className="text-pencil dark:text-paper hover:text-correction wavy-underline">CONTACT</a>
          </nav>

          <button
            onClick={handleToggle}
            style={{ borderRadius: '180px 15px 150px 25px / 20px 140px 15px 150px' }}
            className="w-10 h-10 border-[3px] border-pencil dark:border-paper flex items-center justify-center bg-white dark:bg-pencil text-pencil dark:text-paper shadow-[2px_2px_0px_0px_#2d2d2d] dark:shadow-[2px_2px_0px_0px_#fdfbf7] active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#2d2d2d]"
            aria-label="Toggle theme mode"
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14.25 12a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
