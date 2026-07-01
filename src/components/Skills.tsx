import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const data = portfolioData.skills;

  const categories = [
    { key: 'languages', title: 'Languages', icon: '💻', color: '#ffd1dc', darkColor: '#4c2834', rotation: 'rotate-1' },
    { key: 'frontendUi', title: 'Frontend & UI', icon: '🎨', color: '#fff59d', darkColor: '#453f1c', rotation: '-rotate-2' },
    { key: 'backendSystems', title: 'Backend & Systems', icon: '⚙️', color: '#ffe0b2', darkColor: '#48301c', rotation: 'rotate-2' },
    { key: 'aiMlIot', title: 'AI, ML & IOT', icon: '🤖', color: '#ffd1dc', darkColor: '#4c2834', rotation: '-rotate-1' },
    { key: 'deployment', title: 'Deployment & Hosting', icon: '🚀', color: '#fff59d', darkColor: '#453f1c', rotation: 'rotate-[0.5deg]' },
    { key: 'packaging', title: 'Packaging & Bundling', icon: '📦', color: '#ffe0b2', darkColor: '#48301c', rotation: '-rotate-[1.5deg]' },
    { key: 'databases', title: 'Databases', icon: '🗄️', color: '#ffd1dc', darkColor: '#4c2834', rotation: 'rotate-2' }
  ];

  return (
    <section id="skills" className="scroll-mt-24 py-8 font-body">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold inline-block relative">
          <span className="marker-highlight text-pencil dark:text-paper">My Skills Collage</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {categories.map((cat, idx) => {
          const list = data[cat.key as keyof typeof data];
          if (!list) return null;

          return (
            <div
              key={idx}
              style={{ 
                borderRadius: '20px 240px 20px 220px / 220px 20px 240px 20px',
              }}
              className={`relative border-[3px] border-pencil dark:border-paper shadow-[4px_4px_0px_0px_#2d2d2d] dark:shadow-[4px_4px_0px_0px_#fdfbf7] p-6 transition-all duration-200 transform hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#2d2d2d] dark:hover:shadow-[3px_3px_0px_0px_#fdfbf7] ${cat.rotation} bg-white dark:bg-pencil`}
            >
              {/* Tape overlay on top center - designed as semi-transparent masking tape */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-correction/70 dark:bg-rose-600/70 backdrop-blur-[1px] border border-dashed border-pencil/20 dark:border-paper/20 rotate-[-1.5deg] shadow-sm pointer-events-none" />

              <h3 className="text-xl font-bold text-pencil dark:text-paper mb-4 border-b-2 border-dashed border-pencil/30 dark:border-paper/30 pb-1.5 flex items-center gap-2 font-marker">
                <span>{cat.icon}</span> {cat.title}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {list.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    style={{ borderRadius: '120px 15px 100px 15px / 15px 110px 15px 120px' }}
                    className="px-3 py-1.5 text-[15px] md:text-[16px] font-bold bg-white dark:bg-zinc-800 border-2 border-pencil dark:border-paper/40 text-pencil dark:text-paper hover:rotate-3 hover:scale-105 hover:shadow-[2px_2px_0px_0px_rgba(45,45,45,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(253,251,247,0.8)] transition-all cursor-default select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
