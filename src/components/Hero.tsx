import React, { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { WobblyButton } from './ui/WobblyButton';

export const Hero: React.FC = () => {
  const [rotateIndex, setRotateIndex] = useState(0);
  const [rotatorOpacity, setRotatorOpacity] = useState(true);
  const data = portfolioData.personalInfo;

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatorOpacity(false);
      setTimeout(() => {
        setRotateIndex((prev) => (prev + 1) % data.wordRotateLabels.length);
        setRotatorOpacity(true);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, [data.wordRotateLabels.length]);

  return (
    <section id="hero" className="min-h-[80vh] flex flex-col justify-center items-center text-center relative py-12">
      <p className="text-xl md:text-2xl text-pencil/70 dark:text-paper/70 font-semibold mb-2 font-body">Hi, I'm</p>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-pencil dark:text-paper mb-4 leading-none font-marker">
        {data.name}
      </h1>

      {/* Rotating Subtitle */}
      <div className="h-12 mb-6 flex items-center justify-center">
        <span 
          className={`text-3xl md:text-4xl font-marker text-ballpoint dark:text-cyan-400 transition-all duration-200 transform ${
            rotatorOpacity ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {data.wordRotateLabels[rotateIndex]}
        </span>
      </div>

      {/* Taglines */}
      {data.tagline.length > 0 && (
        <div className="mb-10 text-center flex flex-col items-center font-body">
          {data.tagline.map((line, idx) => {
            if (idx === data.tagline.length - 1) {
              return (
                <p key={idx} className="text-xl md:text-2xl mt-2">
                  <span className="marker-highlight font-bold">{line}</span>
                </p>
              );
            }
            return (
              <p key={idx} className="text-lg md:text-xl text-pencil/80 dark:text-paper/80">
                {line}
              </p>
            );
          })}
        </div>
      )}

      {/* Location / Edu Chips */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {data.chips.map((chip, idx) => {
          const wobblyRadius = idx % 2 === 0 
            ? '120px 15px 100px 15px / 15px 110px 15px 120px' 
            : '15px 110px 15px 120px / 120px 15px 100px 15px';
          return (
            <span
              key={idx}
              style={{ borderRadius: wobblyRadius }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-pencil shadow-sm font-semibold border-2 border-pencil dark:border-paper text-sm md:text-base text-pencil dark:text-paper font-body"
            >
              <span>{chip.icon}</span>
              <span>{chip.text}</span>
            </span>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <WobblyButton
          variant="primary"
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-8 py-3.5 text-lg"
        >
          Get in Touch
        </WobblyButton>
      </div>

      {/* Infinite Skills Marquee */}
      <div className="w-full mt-20 border-y-2 border-dashed border-pencil/30 dark:border-paper/20 py-3 overflow-hidden select-none bg-white/40 dark:bg-pencil/20">
        <div className="inline-block whitespace-nowrap animate-marquee-custom">
          <span className="text-lg md:text-xl font-bold text-pencil dark:text-paper tracking-wider font-body">
            {`${data.marquee.join('   ·   ')}   ·   ${data.marquee.join('   ·   ')}   ·   ${data.marquee.join('   ·   ')}   ·   ${data.marquee.join('   ·   ')}`}
          </span>
        </div>
      </div>

      {/* Down arrow link */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-scribble-bounce hidden md:block">
        <a href="#about" aria-label="Scroll Down">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pencil/60 dark:text-paper/50 hover:text-correction transition-colors stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 13l-7 7-7-7m14-6l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};
