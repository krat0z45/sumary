import React, { useState, useEffect } from 'react';
import PortfolioNavbar from './components/PortfolioNavbar';
import PortfolioHero from './components/PortfolioHero';
import PortfolioAbout from './components/PortfolioAbout';
import PortfolioSkills from './components/PortfolioSkills';
import PortfolioExperience from './components/PortfolioExperience';
import PortfolioContact from './components/PortfolioContact';
import PortfolioDownload from './components/PortfolioDownload';
import PortfolioTechnicalSkills from './components/PortfolioTechnicalSkills';

const App = () => {
  const [darkMode, setDarkMode] = useState(true); // Forzamos dark mode por defecto

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      <PortfolioNavbar />
      <main>
        <div id="home">
          <PortfolioHero />
        </div>
        <div id="about">
          <PortfolioAbout />
        </div>
        <div id="skills">
          <PortfolioSkills />
        </div>
        <div id="technical-skills">
  <PortfolioTechnicalSkills />
</div>
        <div id="experience">
          <PortfolioExperience />
        </div>
        <div id="download">
          <PortfolioDownload />
        </div>
        <div id="contact">
          <PortfolioContact />
        </div>
      </main>
      <footer className="py-6 bg-[#0a0a1a]/80 text-center text-blue-300 relative">
        <p>© {new Date().getFullYear()} AfterSoft. Todos los derechos reservados.</p>
        <button 
          onClick={scrollToTop}
          className="absolute bottom-4 right-4 p-3 bg-[#1e40af] text-white rounded-full shadow-lg hover:bg-[#3b82f6] transition-all duration-300 transform hover:scale-110"
          title="Subir al inicio"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
          </svg>
        </button>
      </footer>
    </div>
  );
};

export default App;

// DONE