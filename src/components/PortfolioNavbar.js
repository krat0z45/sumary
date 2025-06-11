import React, { useState } from 'react';

const PortfolioNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Cerrar el menú móvil después de seleccionar
    }
  };

  return (
    <nav className="fixed w-full bg-[#0a0a1a]/80 backdrop-blur-sm z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            
            <span className="text-xl font-bold text-white inline-flex items-center">
  Love you
  <span className="text-red-500 ml-2 animate-heartBeat">❤️</span>

  <style jsx global>{`
    @keyframes heartBeat {
      0%, 100% {
        transform: scale(1);
      }
      25% {
        transform: scale(1.1);
      }
      50% {
        transform: scale(0.95);
      }
      75% {
        transform: scale(1.05);
      }
    }

    .animate-heartBeat {
      animation: heartBeat 1.2s ease-in-out infinite;
    }
  `}</style>
</span>

          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('home')} className="px-3 py-2 rounded-md text-sm font-medium text-[#1e40af] hover:text-white transition-colors">Inicio</button>
              <button onClick={() => scrollToSection('about')} className="px-3 py-2 rounded-md text-sm font-medium text-blue-200 hover:text-[#1e40af] transition-colors">Sobre mí</button>
              <button onClick={() => scrollToSection('skills')} className="px-3 py-2 rounded-md text-sm font-medium text-blue-200 hover:text-[#1e40af] transition-colors">Logros</button>
              <button onClick={() => scrollToSection('experience')} className="px-3 py-2 rounded-md text-sm font-medium text-blue-200 hover:text-[#1e40af] transition-colors">Experiencia</button>
              <button onClick={() => scrollToSection('contact')} className="px-3 py-2 rounded-md text-sm font-medium text-blue-200 hover:text-[#1e40af] transition-colors">Contacto</button>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-blue-200 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#0a0a1a]/95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('home')} className="block px-3 py-2 rounded-md text-base font-medium text-[#1e40af]">Inicio</button>
            <button onClick={() => scrollToSection('about')} className="block px-3 py-2 rounded-md text-base font-medium text-blue-200">Sobre mí</button>
            <button onClick={() => scrollToSection('experience')} className="block px-3 py-2 rounded-md text-base font-medium text-blue-200">Experiencia</button>
            <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 rounded-md text-base font-medium text-blue-200">Contacto</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default PortfolioNavbar;