import React, { useState, useEffect, useRef } from 'react';

const technicalSkills = [
  {
    name: "Python",
    level: 90,
    description: "Desarrollo de scripts para automatización y análisis de datos industriales."
  },
  {
    name: "C#",
    level: 75,
    description: "Experiencia en aplicaciones industriales y controladores PLC."
  },
  {
    name: "Java / Node.js",
    level: 80,
    description: "Desarrollo backend para sistemas IoT y monitoreo remoto."
  },
  {
    name: "React / Node-RED",
    level: 85,
    description: "Interfaces web dinámicas y flujos de automatización rápida."
  },
  {
    name: "Modbus / MQTT / BACnet",
    level: 95,
    description: "Comunicación entre dispositivos y plataformas IoT."
  },
  {
    name: "Fieldbus / Profibus",
    level: 90,
    description: "Integración de sensores y actuadores en entornos industriales."
  },
  {
    name: "MySQL / SQL Server / MongoDB",
    level: 80,
    description: "Gestión y análisis de datos de sensores y equipos industriales."
  },
  {
    name: "TIA Portal / RSLogix",
    level: 85,
    description: "Programación y configuración de PLCs Siemens y Allen Bradley."
  },
  {
    name: "Linux / IoT Platforms",
    level: 80,
    description: "Uso avanzado de sistemas operativos embebidos y plataformas IoT."
  },
  {
    name: "Diagramas Eléctricos e Hidráulicos",
    level: 85,
    description: "Interpretación y diseño para instalaciones precisas en campo."
  }
];

const PortfolioTechnicalSkills = () => {
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
      { threshold: 0.2 }
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
    <section ref={sectionRef} id="technical-skills" className="py-20 bg-[#0f0f1a] relative overflow-hidden">
      {/* Fondo de estrellas */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(60)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-800"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animation: `pulse ${3 + Math.random() * 5}s ease-in-out infinite`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Habilidades Técnicas</h2>
          <div className="w-20 h-1 bg-[#1e40af] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technicalSkills.map((skill, index) => (
            <div 
              key={index}
              className={`bg-[#11112a] p-5 rounded-xl border border-[#1e40af]/30 transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
              <div className="relative w-full h-3 bg-blue-900 rounded-full overflow-hidden mb-2">
                <div 
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-1000 ease-out"
                  style={{ width: `${isVisible ? skill.level : 0}%` }}
                ></div>
              </div>
              <p className="text-blue-300 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
};

export default PortfolioTechnicalSkills;