import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WorkExperience } from './components/WorkExperience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen transition-colors duration-200 selection:bg-correction selection:text-white">
      {/* Sketched Navigation Bar */}
      <Header />

      {/* Main Page Container */}
      <main className="max-w-5xl mx-auto px-6 md:px-12 py-8 md:py-12">
        {/* Landing Hero Section */}
        <Hero />

        {/* Divider Squiggle */}
        <hr className="border-t-2 border-dashed border-pencil/30 dark:border-paper/20 my-16" />

        {/* About Info Section */}
        <About />

        {/* Divider Squiggle */}
        <hr className="border-t-2 border-dashed border-pencil/30 dark:border-paper/20 my-16" />

        {/* Work Experience Timeline */}
        <WorkExperience />

        {/* Divider Squiggle */}
        <hr className="border-t-2 border-dashed border-pencil/30 dark:border-paper/20 my-16" />

        {/* Portfolio Projects Cards */}
        <Projects />

        {/* Divider Squiggle */}
        <hr className="border-t-2 border-dashed border-pencil/30 dark:border-paper/20 my-16" />

        {/* Skill Board collage */}
        <Skills />

        {/* Divider Squiggle */}
        <hr className="border-t-2 border-dashed border-pencil/30 dark:border-paper/20 my-16" />

        {/* Educational Credentials */}
        <Education />

        {/* Divider Squiggle */}
        <hr className="border-t-2 border-dashed border-pencil/30 dark:border-paper/20 my-16" />

        {/* Contact info and envelope form */}
        <Contact />
      </main>

      {/* Footer copyright and scroll tools */}
      <Footer />
    </div>
  );
};

export default App;
