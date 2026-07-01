import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { WobblyCard } from './ui/WobblyCard';
import { WobblyButton } from './ui/WobblyButton';

export const Projects: React.FC = () => {
  const projects = portfolioData.projects;

  return (
    <section id="projects" className="scroll-mt-24 py-8 font-body">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold inline-block relative">
          <span className="marker-highlight text-pencil dark:text-paper">Featured Projects</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
        {projects.map((proj, idx) => {
          const rotation = idx % 2 === 0 ? 'left' : 'right';
          return (
            <WobblyCard
              key={idx}
              tiltType={rotation}
              decoration="tape"
              bgColor="bg-white dark:bg-pencil"
              className="flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex justify-between items-start gap-2 mb-2">
                  <span 
                    style={{ borderRadius: '120px 15px 100px 15px / 15px 110px 15px 120px' }}
                    className="text-xs font-bold bg-erased dark:bg-zinc-800 border border-pencil dark:border-paper/40 px-2 py-0.5 text-pencil dark:text-paper"
                  >
                    {proj.timeline}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-pencil dark:text-paper mb-1 font-marker">{proj.title}</h3>
                <p className="text-sm font-semibold text-ballpoint dark:text-cyan-400 mb-4">{proj.subtitle}</p>

                <p className="text-base text-pencil/90 dark:text-paper/90 leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      style={{ borderRadius: '120px 15px 100px 15px / 15px 110px 15px 120px' }}
                      className="px-2 py-0.5 text-xs font-semibold bg-white dark:bg-zinc-800 border border-pencil dark:border-paper/40 text-pencil dark:text-paper"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <WobblyButton
                    variant="primary"
                    href={proj.githubLink}
                    target="_blank"
                    className="text-sm px-4 py-1.5"
                  >
                    GitHub <span className="text-xs">↗</span>
                  </WobblyButton>
                  
                  {proj.liveLink && (
                    <WobblyButton
                      variant="secondary"
                      href={proj.liveLink}
                      target="_blank"
                      className="text-sm px-3 py-1.5"
                    >
                      Demo <span className="text-xs">↗</span>
                    </WobblyButton>
                  )}
                </div>
              </div>
            </WobblyCard>
          );
        })}
      </div>
    </section>
  );
};
