import React from 'react';
import { portfolioData } from '../data/portfolioData';
import avatarImg from '../assets/avatar.png';

export const About: React.FC = () => {
  const data = portfolioData.personalInfo;

  return (
    <section id="about" className="scroll-mt-24 py-8 font-body">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold inline-block relative">
          <span className="marker-highlight text-pencil dark:text-paper">About Me</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-5 gap-8 items-center">
        {/* Profile Picture Card */}
        <div className="md:col-span-2 flex justify-center">
          <div 
            style={{ borderRadius: '20px 240px 20px 220px / 220px 20px 240px 20px' }}
            className="relative w-64 h-64 p-2 bg-white dark:bg-pencil border-[3px] border-pencil dark:border-paper shadow-[4px_4px_0px_0px_#2d2d2d] dark:shadow-[4px_4px_0px_0px_#fdfbf7] rotate-[-2deg] hover:rotate-[1deg] hover:shadow-lg transition-all duration-300"
          >
            <div 
              style={{ borderRadius: '20px 240px 20px 220px / 220px 20px 240px 20px' }}
              className="w-full h-full border-2 border-dashed border-pencil dark:border-paper/40 overflow-hidden flex items-center justify-center bg-[#ffebee] dark:bg-zinc-800"
            >
              <img 
                src={avatarImg} 
                alt="Poorna Prajay S avatar sketch" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                  document.getElementById('avatar-fallback-react')?.classList.remove('hidden');
                }}
              />
              <div id="avatar-fallback-react" className="hidden flex flex-col items-center justify-center text-center p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-pencil/70 dark:text-paper/70 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="font-marker mt-2 text-sm text-pencil/80 dark:text-paper/80">Sketched Profile</p>
              </div>
            </div>

            {/* Binder rings for notebook look */}
            <div className="absolute -top-3 left-4 flex gap-3">
              <span className="w-3.5 h-3.5 bg-erased dark:bg-zinc-700 border-2 border-pencil dark:border-paper rounded-full"></span>
              <span className="w-3.5 h-3.5 bg-erased dark:bg-zinc-700 border-2 border-pencil dark:border-paper rounded-full"></span>
            </div>
          </div>
        </div>

        {/* Text descriptions */}
        <div className="md:col-span-3">
          <h3 className="text-2xl md:text-3xl font-bold text-pencil dark:text-paper mb-4 font-marker">
            {data.aboutTitle}
          </h3>
          <p className="text-lg md:text-xl text-pencil/95 dark:text-paper/95 leading-relaxed mb-4">
            {data.aboutMe}
          </p>
          
          <div 
            style={{ borderRadius: '20px 240px 20px 220px / 220px 20px 240px 20px' }}
            className="text-base md:text-lg text-pencil/90 dark:text-paper/90 leading-relaxed mb-6 bg-white dark:bg-pencil border-2 border-pencil dark:border-paper p-5 shadow-sm"
          >
            {data.aboutInternship}
          </div>

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold text-pencil/70 dark:text-paper/70 uppercase tracking-wider mr-2">Languages:</span>
            <div className="flex flex-wrap gap-2">
              {data.languagesSpoken.map((lang, idx) => (
                <span 
                  key={idx}
                  style={{ borderRadius: '120px 15px 100px 15px / 15px 110px 15px 120px' }}
                  className="inline-block px-3 py-1 bg-white dark:bg-pencil border-2 border-pencil dark:border-paper text-sm font-bold text-pencil dark:text-paper"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
