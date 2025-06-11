import React, { useState, useEffect, useRef } from 'react';

const skills = [
  { title: "Años de Experiencia", value: 5, suffix: "+", description: "Desarrollando soluciones digitales" },
  { title: "Proyectos Completados", value: 42, suffix: "+", description: "Para clientes satisfechos" },
  { title: "Tecnologías Dominadas", value: 12, suffix: "+", description: "En mi stack tecnológico" },
  { title: "Clientes Felices", value: 28, suffix: "+", description: "Que confían en mi trabajo" }
];

const PortfolioSkills = () => {
  const [animatedValues, setAnimatedValues] = useState(skills.map(() => 0));
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateNumbers();
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

  const animateNumbers = () => {
    const durations = [800, 1200, 1000, 1500];
    skills.forEach((skill, index) => {
      const duration = durations[index];
      const startTime = Date.now();
      const endValue = skill.value;
      const increment = endValue / (duration / 16);

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = progress === 1 ? endValue : Math.floor(progress * endValue);

        setAnimatedValues(prev => {
          const newValues = [...prev];
          newValues[index] = currentValue;
          return newValues;
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    });
  };

  return (
    <section ref={sectionRef} className="py-20 bg-[#0a0a1a] relative overflow-hidden">
      {/* Efecto de estrellas de fondo */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-800"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animation: `pulse ${3 + Math.random() * 7}s ease-in-out infinite`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mis Logros</h2>
          <div className="w-20 h-1 bg-[#1e40af] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="relative bg-[#0f0f2a] rounded-xl p-8 border border-[#1e40af]/30 hover:border-[#1e40af]/70 transition-all duration-300 group hover:shadow-[0_0_20px_5px_rgba(30,64,175,0.3)]"
            >
              {/* Efecto de brillo al hacer hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,64,175,0.3)_0%,rgba(0,0,0,0)_70%)]"></div>
              </div>

              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-bold text-[#1e40af] mb-2 transition-all duration-300 group-hover:text-[#3b82f6]">
                  {animatedValues[index]}
                  {skill.suffix}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-blue-300">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default PortfolioSkills;

// DONE