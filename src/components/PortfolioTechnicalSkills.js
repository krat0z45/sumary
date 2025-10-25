import React, { useState, useEffect, useRef } from 'react';

const technicalSkills = [
  // Frontend
  {
    name: "React / Next.js",
    level: 90,
    description: "Desarrollo de interfaces modernas, SSR, optimización SEO y PWAs."
  },
  {
    name: "TailwindCSS / Bootstrap",
    level: 85,
    description: "Diseño responsivo y rápido con enfoque en experiencia de usuario."
  },
  {
    name: "HTML5 / CSS3 / JavaScript (ES6+)",
    level: 95,
    description: "Fundamentos sólidos para desarrollo web estándar y dinámico."
  },

  // Backend
  {
    name: "Node.js / Express",
    level: 85,
    description: "APIs RESTful, autenticación JWT, microservicios y middleware."
  },
  {
    name: "Python (Django)",
    level: 80,
    description: "Desarrollo backend robusto con ORM, seguridad y escalabilidad."
  },
  {
    name: "PHP",
    level: 70,
    description: "Mantenimiento y desarrollo de aplicaciones empresariales legacy."
  },

  // Bases de datos
  {
    name: "MySQL / PostgreSQL",
    level: 85,
    description: "Modelado relacional, consultas complejas y optimización de queries."
  },
  {
    name: "MongoDB",
    level: 80,
    description: "Diseño de esquemas flexibles, agregaciones y operaciones en tiempo real."
  },
  {
    name: "SQL Server",
    level: 75,
    description: "Integración con sistemas industriales y entornos Windows."
  },

  // DevOps & Herramientas
  {
    name: "Git / GitHub",
    level: 90,
    description: "Control de versiones, flujos de trabajo colaborativos y CI/CD básico."
  },
  {
    name: "Vercel / Netlify",
    level: 80,
    description: "Despliegue automático de aplicaciones frontend y serverless functions."
  },

  // Automatización & IoT Industrial
  {
    name: "Node-RED",
    level: 85,
    description: "Flujos visuales para IoT, integración con sensores y dashboards en tiempo real."
  },
  {
    name: "Modbus / MQTT / REST API",
    level: 95,
    description: "Comunicación entre dispositivos industriales y plataformas web."
  },
  {
    name: "Fieldbus / Profibus / DeviceNet",
    level: 90,
    description: "Protocolos industriales para instrumentación y control en minería."
  },

  // PLCs & Automatización
  {
    name: "TIA Portal / RSLogix / FactoryTalk",
    level: 85,
    description: "Programación y diagnóstico de PLCs Siemens y Allen Bradley."
  },
  {
    name: "C# / Java",
    level: 75,
    description: "Desarrollo de aplicaciones de escritorio y lógica industrial."
  },

  // Sistemas & Otros
  {
    name: "Linux / Windows",
    level: 85,
    description: "Administración de servidores, scripts bash y entornos de desarrollo."
  },
  {
    name: "Diagramas Eléctricos / Neumáticos",
    level: 85,
    description: "Interpretación técnica para instalación y mantenimiento preciso."
  },
  {
    name: "Integración de Agentes de IA",
    level: 70,
    description: "Asistentes inteligentes, automatización contextual y procesamiento de lenguaje."
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
