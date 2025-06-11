import React, { useEffect, useRef, useState } from 'react';

const PortfolioAbout = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-[#0a0a1a] relative overflow-hidden">
      {/* Fondo de estrellas sutil */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-800"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              animation: `twinkle ${3 + Math.random() * 7}s ease-in-out infinite`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sobre mí</h2>
          <div className="w-20 h-1 bg-[#1e40af] mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Columna de la imagen */}
          <div 
            className={`md:w-1/3 mb-8 md:mb-0 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
          >
            <div className="group w-64 h-64 mx-auto rounded-full bg-[#0f0f2a] border-2 border-[#1e40af]/50 overflow-hidden shadow-lg shadow-[#1e40af]/20 relative transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_30px_10px_rgba(30,64,175,0.4)]">
              {/* Capa de brillo al hacer hover */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.3)_0%,rgba(0,0,0,0)_70%)] rounded-full animate-pulse"></div>
              </div>

              {/* Imagen de perfil */}
              <img 
                src="/profile.png"  // Asegúrate que esté en la carpeta `public/`
                alt="Diego Ricardo Esparza Cortes"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Columna del texto */}
          <div 
            className={`md:w-2/3 md:pl-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">¿Quién soy?</h3>
            <p className="text-blue-300 mb-6 leading-relaxed">
              Soy un desarrollador full stack apasionado por crear experiencias digitales innovadoras y eficientes. 
              Con más de 5 años de experiencia, me especializo en la construcción de aplicaciones web robustas y escalables 
              utilizando tecnologías de vanguardia como React, Node.js y bases de datos modernas. Mi enfoque va más allá del código; 
              me dedico a entender las necesidades del usuario para diseñar interfaces intuitivas y atractivas que realmente resuelvan problemas.
            </p>
            <p className="text-blue-300 mb-6 leading-relaxed">
              Mi trayectoria me ha permitido trabajar en diversos proyectos, desde startups ágiles hasta empresas consolidadas, 
              siempre buscando la excelencia y la mejora continua. Me encanta aprender nuevas tecnologías y aplicar las mejores prácticas 
              para entregar productos de alta calidad.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-200">
              <div>
                <h4 className="font-medium text-white mb-2">Nombre:</h4>
                <p>Diego Ricardo Esparza Cortes</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Email:</h4>
                <p>motokrat0z@gmail.com</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Edad:</h4>
                <p>31 años</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Ubicación:</h4>
                <p>Zacatecas, Mexico</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.98);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioAbout;
