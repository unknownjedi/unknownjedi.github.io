import { useEffect } from 'react';
import typedPortfolioData from './data/portfolioData';
import MatrixBackground from './components/MatrixBackground';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import OpenSource from './components/sections/OpenSource';
import Projects from './components/sections/Projects';
import './index.css';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.animate-fade-in-up');
    elements.forEach((el) => observer.observe(el));

    return () =>
      elements.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
  }, []);

  return (
    <div className="relative min-h-screen">
      <MatrixBackground />
      <div className="relative z-20">
        <main>
          <Hero data={typedPortfolioData} />
          <Experience data={typedPortfolioData.workExperience} />
          <Education data={typedPortfolioData.education} />
          <Skills data={typedPortfolioData.skills} />
          <OpenSource data={typedPortfolioData.openSource} />
          <Projects data={typedPortfolioData.personalProjects} />
        </main>
        <footer className="text-center py-8 text-gray-500 border-t border-green-900/50 mt-16 bg-black/80">
          <p>
            &copy; {new Date().getFullYear()} {typedPortfolioData.name}. All
            rights reserved.
          </p>
          <p className="mt-2 text-xs">Powered by React & Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}