import React from 'react';
import { portfolioData } from '../data/portfolioData';


export const WorkExperience: React.FC = () => {
  const experiences = portfolioData.experience;

  return (
    <section id="work" className="scroll-mt-24 py-8 font-body">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold inline-block relative">
          <span className="marker-highlight text-pencil dark:text-paper">Work Experience</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, idx) => {
          const tiltClass = idx % 2 === 0 ? 'rotate-[0.5deg]' : '-rotate-[0.5deg]';
          return (
            <div
              key={idx}
              style={{ borderRadius: '20px 240px 20px 220px / 220px 20px 240px 20px' }}
              className={`relative bg-white dark:bg-pencil border-[3px] border-pencil dark:border-paper shadow-[4px_4px_0px_0px_#2d2d2d] dark:shadow-[4px_4px_0px_0px_#fdfbf7] p-6 md:p-8 mb-8 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_#2d2d2d] dark:hover:shadow-[3px_3px_0px_0px_#fdfbf7] transition-all duration-150 ${tiltClass}`}
            >
              {/* Thumbtack on top center */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-correction border-2 border-pencil dark:border-paper rounded-full shadow-sm">
                <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full opacity-60"></div>
              </div>

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4 pb-3 border-b-2 border-dashed border-erased dark:border-paper/20">
                <div className="flex items-center gap-4">
                  {/* Company Logo placeholder */}
                  <div
                    style={{ borderRadius: '20px 240px 20px 220px / 220px 20px 240px 20px' }}
                    className="w-12 h-12 flex items-center justify-center bg-[#ffe0b2] dark:bg-amber-900 border-2 border-pencil dark:border-paper font-bold text-xl text-pencil dark:text-paper shrink-0"
                  >
                    {exp.logoChar}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-pencil dark:text-paper font-marker">{exp.role}</h3>
                    <p className="text-base font-semibold text-ballpoint dark:text-cyan-400">{exp.company}</p>
                  </div>
                </div>

                <div className="text-left md:text-right">
                  <span
                    style={{ borderRadius: '120px 15px 100px 15px / 15px 110px 15px 120px' }}
                    className="inline-block text-sm font-bold bg-[#fff9c4] dark:bg-yellow-900 px-2.5 py-1 border-2 border-pencil dark:border-paper text-pencil dark:text-paper"
                  >
                    📅 {exp.timeline}
                  </span>
                  <p className="text-xs text-pencil/70 dark:text-paper/70 font-semibold mt-1">📍 {exp.location}</p>
                </div>
              </div>

              {/* Bullet Responsibilities */}
              <ul className="list-none mb-6">
                {exp.responsibilities.map((resp, bIdx) => (
                  <li key={bIdx} className="relative pl-6 mb-2.5 text-pencil/95 dark:text-paper/95 text-base md:text-lg leading-relaxed">
                    <span className="absolute left-0 top-1 text-correction dark:text-rose-400 font-bold text-sm">✎</span>
                    {resp}
                  </li>
                ))}
              </ul>

              {/* Skills badges */}
              {(() => {
                // Hover-only category colors — badges are plain white at rest
                const hoverColors: Record<string, string> = {
                  core:     'hover:bg-[#fff3e0] hover:border-amber-400 hover:text-amber-900 dark:hover:bg-amber-900/50 dark:hover:border-amber-400 dark:hover:text-amber-200',
                  frontend: 'hover:bg-[#e8f5e9] hover:border-emerald-400 hover:text-emerald-900 dark:hover:bg-emerald-900/50 dark:hover:border-emerald-400 dark:hover:text-emerald-200',
                  systems:  'hover:bg-[#e3f2fd] hover:border-blue-400 hover:text-blue-900 dark:hover:bg-blue-900/50 dark:hover:border-blue-400 dark:hover:text-blue-200',
                  tools:    'hover:bg-[#f3e5f5] hover:border-purple-400 hover:text-purple-900 dark:hover:bg-purple-900/50 dark:hover:border-purple-400 dark:hover:text-purple-200',
                  domain:   'hover:bg-[#fce4ec] hover:border-rose-400 hover:text-rose-900 dark:hover:bg-rose-900/50 dark:hover:border-rose-400 dark:hover:text-rose-200',
                };
                const skillCategory: Record<string, string> = {
                  'Electron.js': 'core', 'Node.js': 'core', 'Express': 'core',
                  'React': 'frontend', 'TypeScript': 'frontend', 'Three.js': 'frontend',
                  'LightningChart JS': 'frontend', 'Leaflet': 'frontend',
                  'Socket.IO': 'systems', 'TCP/UDP': 'systems',
                  'WebSockets': 'systems', 'Real-time Systems': 'systems', 'SSH (node-ssh)': 'systems',
                  'SQLite': 'core', 'electron-builder': 'tools', 'NSIS': 'tools', 'Playwright': 'tools',
                  'Vitest': 'tools', 'Python': 'tools', 'ODAS': 'tools',
                  'Raspberry Pi': 'tools', 'Embedded IoT': 'domain',
                  'GIS / Offline Maps': 'domain', 'AI/RAG': 'domain', 'Wildlife Tech': 'domain',
                };
                return (
                  <div className="pt-4 border-t border-dashed border-pencil/20 dark:border-paper/20">
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, sIdx) => {
                        const cat = skillCategory[skill] ?? 'core';
                        const hoverClass = hoverColors[cat];
                        return (
                          <span
                            key={sIdx}
                            style={{ borderRadius: '80px 12px 80px 12px / 12px 80px 12px 80px' }}
                            className={`px-2.5 py-0.5 text-xs font-semibold border border-pencil dark:border-paper/40 bg-white dark:bg-zinc-900 text-pencil dark:text-paper/80 tracking-wide cursor-default transition-all duration-200 hover:scale-105 hover:-translate-y-px hover:shadow-[2px_2px_0px_0px_#2d2d2d] dark:hover:shadow-[2px_2px_0px_0px_rgba(253,251,247,0.3)] ${hoverClass}`}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}
            </div>
          );
        })}

      </div>
    </section>
  );
};
