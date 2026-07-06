import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { WobblyButton } from './ui/WobblyButton';

export const Contact: React.FC = () => {
  const data = portfolioData.personalInfo;

  return (
    <section id="contact" className="scroll-mt-24 py-8 font-body">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold inline-block relative">
          <span className="marker-highlight text-pencil dark:text-paper">Get In Touch</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto items-stretch">
        {/* Contact Info (Left) */}
        <div className="flex flex-col justify-between gap-6">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-pencil dark:text-paper mb-4 font-marker">Let's work together</h3>
            <p className="text-lg text-pencil/80 dark:text-paper/80 leading-relaxed mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Drop me an email or call!
            </p>
          </div>

          <div className="space-y-4">
            {/* Email */}
            <a
              href={`mailto:${data.email}`}
              style={{ borderRadius: '20px 240px 20px 220px / 220px 20px 240px 20px' }}
              className="block bg-white dark:bg-pencil border-[3px] border-pencil dark:border-paper shadow-[4px_4px_0px_0px_#2d2d2d] dark:shadow-[4px_4px_0px_0px_#fdfbf7] p-4 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#e1f5fe] dark:bg-cyan-900 border-2 border-pencil dark:border-paper rounded-md shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-[2] text-pencil dark:text-paper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-pencil/50 dark:text-paper/50 uppercase tracking-wider font-bold">Email</p>
                  <p className="text-base md:text-lg font-bold text-pencil dark:text-paper break-all">{data.email}</p>
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${data.phone.replace(/\s+/g, '')}`}
              style={{ borderRadius: '20px 240px 20px 220px / 220px 20px 240px 20px' }}
              className="block bg-white dark:bg-pencil border-[3px] border-pencil dark:border-paper shadow-[4px_4px_0px_0px_#2d2d2d] dark:shadow-[4px_4px_0px_0px_#fdfbf7] p-4 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#e8f5e9] dark:bg-emerald-900 border-2 border-pencil dark:border-paper rounded-md shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-[2] text-pencil dark:text-paper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-pencil/50 dark:text-paper/50 uppercase tracking-wider font-bold">Phone</p>
                  <p className="text-base md:text-lg font-bold text-pencil dark:text-paper">{data.phone}</p>
                </div>
              </div>
            </a>

            {/* Location */}
            <div
              style={{ borderRadius: '20px 240px 20px 220px / 220px 20px 240px 20px' }}
              className="bg-white dark:bg-pencil border-[3px] border-pencil dark:border-paper shadow-[4px_4px_0px_0px_#2d2d2d] dark:shadow-[4px_4px_0px_0px_#fdfbf7] p-4 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#ffebee] dark:bg-rose-900 border-2 border-pencil dark:border-paper rounded-md shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-[2] text-pencil dark:text-paper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-pencil/50 dark:text-paper/50 uppercase tracking-wider font-bold">Location</p>
                  <p className="text-base md:text-lg font-bold text-pencil dark:text-paper">{data.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ready to start a project Sticky (Right) */}
        <div 
          style={{ borderRadius: '20px 240px 20px 220px / 220px 20px 240px 20px' }}
          className="relative flex flex-col justify-between gap-6 bg-[#fff9c4] dark:bg-zinc-800 border-[3px] border-pencil dark:border-paper shadow-[4px_4px_0px_0px_#2d2d2d] dark:shadow-[4px_4px_0px_0px_#fdfbf7] p-6 md:p-8 rotate-[-1deg]"
        >
          {/* Tape strip — centered top */}
          <div
            className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-6 rotate-[-1deg] pointer-events-none"
            style={{
              background: 'rgba(200, 200, 200, 0.80)',
              backgroundImage: 'repeating-linear-gradient(105deg, transparent, transparent 5px, rgba(255,255,255,0.25) 5px, rgba(255,255,255,0.25) 10px)',
              boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
              borderRadius: '2px',
            }}
          />

          <div>
            <span 
              style={{ borderRadius: '120px 15px 100px 15px / 15px 110px 15px 120px' }}
              className="text-xs font-bold bg-pencil dark:bg-paper text-white dark:text-pencil px-2.5 py-0.5 border border-pencil dark:border-paper"
            >
              FIND ME ON
            </span>

            {/* Social icons */}
            <div className="flex gap-4 mt-4 mb-8">
              <a
                href={data.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{ borderRadius: '20px 240px 20px 220px / 220px 20px 240px 20px' }}
                className="w-12 h-12 flex items-center justify-center bg-white dark:bg-zinc-950 border-2 border-pencil dark:border-paper/40 hover:scale-105 active:scale-95 transition-all shadow-[2px_2px_0px_#2d2d2d] dark:shadow-[2px_2px_0px_#fdfbf7] text-pencil dark:text-paper"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={data.github}
                target="_blank"
                rel="noreferrer"
                style={{ borderRadius: '20px 240px 20px 220px / 220px 20px 240px 20px' }}
                className="w-12 h-12 flex items-center justify-center bg-white dark:bg-zinc-950 border-2 border-pencil dark:border-paper/40 hover:scale-105 active:scale-95 transition-all shadow-[2px_2px_0px_#2d2d2d] dark:shadow-[2px_2px_0px_#fdfbf7] text-pencil dark:text-paper"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </div>

            <h4 className="text-2xl font-bold text-pencil dark:text-paper mb-2 font-marker">Ready to start a project?</h4>
            <p className="text-base text-pencil/80 dark:text-paper/85 leading-relaxed mb-3">
              Drop me an email and let's bring your ideas to life. Let's make things that matter!
            </p>
          </div>

          <div className="space-y-4">
            <WobblyButton
              variant="primary"
              href={`mailto:${data.email}`}
              className="w-full py-3.5 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </WobblyButton>
          </div>
        </div>
      </div>
    </section>
  );
};
