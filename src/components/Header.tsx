import React, { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const navLinks = [
  { href: '#about', label: 'ABOUT' },
  { href: '#work', label: 'WORK' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#education', label: 'EDUCATION' },
  { href: '#contact', label: 'CONTACT' },
];

export const Header: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const activeTheme = savedTheme || 'light';
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

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-paper/85 dark:bg-[#1e1e1e]/85 backdrop-blur-sm border-b-2 border-dashed border-pencil/40 dark:border-paper/30 py-4 px-6 md:px-12 transition-colors duration-200">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tight text-pencil dark:text-paper font-marker hover:text-correction transition-colors">
            <span>{portfolioData.personalInfo.shortName}</span>
          </a>

          <div className="flex items-center gap-3 md:gap-6">
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 font-bold text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-pencil dark:text-paper hover:text-correction wavy-underline"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Theme Toggle */}
            <button
              onClick={handleToggle}
              style={{ borderRadius: '180px 15px 150px 25px / 20px 140px 15px 150px' }}
              className="w-10 h-10 border-[3px] border-pencil dark:border-paper flex items-center justify-center bg-white dark:bg-pencil text-pencil dark:text-paper shadow-[2px_2px_0px_0px_#2d2d2d] dark:shadow-[2px_2px_0px_0px_#fdfbf7] active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#2d2d2d]"
              aria-label="Toggle theme mode"
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14.25 12a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Hamburger Button — mobile only */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden w-10 h-10 border-[3px] border-pencil dark:border-paper flex flex-col items-center justify-center gap-[5px] bg-white dark:bg-pencil text-pencil dark:text-paper shadow-[2px_2px_0px_0px_#2d2d2d] dark:shadow-[2px_2px_0px_0px_#fdfbf7] active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#2d2d2d] transition-all"
              style={{ borderRadius: '12px 18px 10px 14px / 14px 10px 18px 12px' }}
              aria-label="Toggle mobile navigation"
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-1 pt-4 pb-2 border-t-2 border-dashed border-pencil/30 dark:border-paper/20 mt-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="font-bold text-base text-pencil dark:text-paper hover:text-correction hover:bg-correction/10 dark:hover:bg-paper/5 px-3 py-2.5 rounded-md transition-colors tracking-wide"
                style={{
                  borderRadius:
                    idx % 2 === 0
                      ? '8px 20px 8px 16px / 16px 8px 20px 8px'
                      : '20px 8px 16px 8px / 8px 16px 8px 20px',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};
