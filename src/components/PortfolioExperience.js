import React from 'react';

const experiences = [
  {
    title: 'Oficial Mecánico de Piso',
    company: 'Javier Barrios',
    period: 'Oct 2025 – Actualidad',
    description: 'Mantenimiento industrial especializado durante paros programados en plantas mineras (Saucito, Juanicipio, Tiro General, San Julián). Reparación de molinos, chutes, cajones de alimentación, válvulas de cuchilla y desbridado de tuberías. Aplicación de cerámica epóxica en superficies críticas. Colaboración en equipos multidisciplinarios para puesta en marcha oportuna de equipos.'
  },
  {
    title: 'Oficial Mecánico de Planta',
    company: 'Koide',
    period: 'Jul 2024 – Sep 2025',
    description: 'Mantenimiento correctivo y preventivo en maquinaria industrial (biseladoras, cortadoras, prensas, tornos CNC). Intervenciones en sistemas hidráulicos, componentes mecánicos y tableros eléctricos con lógica PLC. Desmontaje completo de equipos para alineación y reemplazo de piezas. Reducción de tiempos de paro no planificados.'
  },
  {
    title: 'Técnico de Servicio (Aires Mineros)',
    company: 'Minera Fresnillo PLC – Unidad Saucito',
    period: 'Jul 2024 – Sep 2025',
    description: 'Instalación y puesta en marcha de +40 sistemas de aire acondicionado en entornos subterráneos y plantas. Ejecución de mantenimiento preventivo y correctivo. Diagnóstico y reparación de fallas eléctricas en minisplits y equipos paquete.'
  },
  {
    title: 'Auxiliar Administrativo con enfoque en Soporte TI',
    company: 'Business Corporation Maredga',
    period: '2023 – 2024',
    description: 'Instalación y configuración de videovigilancia IP. Soporte técnico a PCs, impresoras y periféricos. Gestión de redes LAN (routers, switches, IPs). Apoyo en seguridad industrial con LOTO en sistemas automatizados. Elaboración de bitácoras, inventarios y reportes técnicos.'
  },
  {
    title: 'Instrumentista Oficial (Contratista)',
    company: 'Minera Fresnillo PLC – Unidad San Julián (Grupo Cavi)',
    period: '2021 – 2023',
    description: 'Mantenimiento y calibración de instrumentos industriales (temperatura, presión, nivel, flujo, pH, ORP, densidad, HCN, pesómetros, etc.). Uso de protocolos Fieldbus, Profibus y DeviceNet. Interpretación avanzada de diagramas eléctricos, neumáticos e hidráulicos. Cobertura de áreas críticas: Trituración, Molienda, Flotación, Espesamiento, Reactivos y Generación de aire.'
  },
  {
    title: 'Desarrollador Full Stack',
    company: 'Proyectos Personales y Empresariales',
    period: '2017 – Actualidad',
    description: 'Desarrollo autónomo de aplicaciones web completas (frontend, backend, base de datos, despliegue). Tecnologías: React, Next.js, TailwindCSS, Node.js, Python (Django), PHP. Bases de datos: MySQL, PostgreSQL, SQL Server, MongoDB. Integración de Agentes de IA para asistentes inteligentes y automatización contextual. Uso de Git, GitHub y Vercel para CI/CD.'
  }
];

const PortfolioExperience = () => {
  return (
    <section id="experience" className="py-20 bg-blue-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experiencia Laboral</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4"></div>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 sm:pl-32 group">
              <div className="font-medium text-xl text-cyan-400 mb-1 sm:mb-0">
                {exp.period}
              </div>
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-blue-700 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-cyan-400 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <div className="font-bold text-xl text-white">{exp.title}</div>
                <div className="text-blue-300 ml-0 sm:ml-4">@ {exp.company}</div>
              </div>
              <div className="text-blue-200">{exp.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioExperience;
