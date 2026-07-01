import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Education: React.FC = () => {
  const educationList = portfolioData.education;

  return (
    <section id="education" className="scroll-mt-24 py-8 font-body">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold inline-block relative">
          <span className="marker-highlight text-pencil dark:text-paper">Education</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {educationList.map((edu, idx) => {
          const rotation = idx % 2 === 0 ? 'rotate-[0.5deg]' : '-rotate-[0.5deg]';
          return (
            <div
              key={idx}
              style={{ borderRadius: '20px 240px 20px 220px / 220px 20px 240px 20px' }}
              className={`relative bg-white dark:bg-pencil border-[3px] border-pencil dark:border-paper shadow-[4px_4px_0px_0px_#2d2d2d] dark:shadow-[4px_4px_0px_0px_#fdfbf7] p-6 md:p-8 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#2d2d2d] dark:hover:shadow-[3px_3px_0px_0px_#fdfbf7] transition-all duration-150 transform ${rotation}`}
            >
              <span className="absolute top-4 right-4 text-3xl font-marker text-erased dark:text-zinc-700 font-bold">
                {edu.id}
              </span>

              <h3 className="text-xl md:text-2xl font-bold text-pencil dark:text-paper pr-10 mb-1 font-marker">
                {edu.institution}
              </h3>
              <p className="text-base font-semibold text-ballpoint dark:text-cyan-400 mb-3">
                {edu.degree}
              </p>

              <div className="flex items-center gap-4 text-sm font-semibold text-pencil/80 dark:text-paper/80 mb-4 pb-3 border-b border-dashed border-erased dark:border-paper/20">
                <span>📍 {edu.location}</span>
                <span>📅 {edu.timeline}</span>
              </div>

              <div
                style={{ borderRadius: '120px 15px 100px 15px / 15px 110px 15px 120px' }}
                className="inline-block px-3 py-1.5 bg-white dark:bg-zinc-800 border-2 border-pencil dark:border-paper text-base font-bold text-correction dark:text-rose-400 shadow-sm"
              >
                {edu.scoreType}: {edu.scoreValue}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
