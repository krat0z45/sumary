import React, { useEffect } from 'react';

const PortfolioHero = () => {
  useEffect(() => {
    // Crear meteoritos dinámicamente
    const createMeteor = () => {
      const meteor = document.createElement('div');
      meteor.className = 'absolute h-0.5 w-20 bg-gradient-to-r from-transparent to-blue-800 opacity-80';
      meteor.style.left = `${Math.random() * 100}%`;
      meteor.style.top = `${Math.random() * 100}%`;
      meteor.style.transform = 'rotate(-45deg)';
      meteor.style.animation = `fall ${3 + Math.random() * 5}s linear infinite`;
      
      const container = document.querySelector('.meteor-container');
      if (container) container.appendChild(meteor);
    };

    // Crear estrellas titilantes
    const createStars = () => {
      const star = document.createElement('div');
      star.className = 'absolute rounded-full bg-blue-700';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.width = `${Math.random() * 3 + 1}px`;
      star.style.height = star.style.width;
      star.style.animation = `twinkle ${3 + Math.random() * 7}s ease-in-out infinite`;
      star.style.opacity = '0';
      
      const container = document.querySelector('.star-container');
      if (container) container.appendChild(star);
    };

    // Crear múltiples meteoritos y estrellas
    for (let i = 0; i < 8; i++) {
      createMeteor();
    }

    for (let i = 0; i < 100; i++) {
      createStars();
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a1a]">
      {/* Contenedores para efectos */}
      <div className="meteor-container absolute inset-0 overflow-hidden z-0"></div>
      <div className="star-container absolute inset-0 z-0"></div>

      {/* Efecto de profundidad */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,64,175,0.1)_0%,rgba(0,0,0,0)_70%)]"></div>
      
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Hola, soy <span className="text-[#1e40af]">Diego Esparza Cortes</span>
        </h1>
        <p className="text-xl md:text-2xl text-blue-300 mb-8 font-light">
          Desarrollador Full Stack | Diseñador UI/UX
        </p>
        <div className="flex justify-center gap-4">
          
          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=mototokrat0z@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-8 py-3 bg-[#1e40af] text-white font-bold rounded-full hover:shadow-[0_0_15px_3px_rgba(30,64,175,0.6)] transition-all duration-300"
>
  Contactame
</a>

<a
  href="https://drive.google.com/file/d/1NfUt8LKpKGo9u_54DfZZ_WhD-lzgD5gx/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-8 py-3 border-2 border-[#1e40af] text-[#1e40af] rounded-full hover:bg-[#1e40af]/10 hover:shadow-[0_0_15px_3px_rgba(30,64,175,0.3)] transition-all duration-300"
>
  Descargar CV
</a>

        </div>
      </div>

      <style jsx global>{`
        @keyframes fall {
          to {
            transform: translate(200px, 200px) rotate(-45deg);
            opacity: 0;
          }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
};

export default PortfolioHero;

// DONE
