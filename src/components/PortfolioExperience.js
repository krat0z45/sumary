import React from 'react';

const experiences = [
  {
    title: 'Desarrollador Frontend Senior',
    company: 'TechCorp',
    period: '2020 - Presente',
    description: 'Lideré el desarrollo de aplicaciones React para clientes internacionales, implementando mejores prácticas y arquitecturas escalables.'
  },
  {
    title: 'Diseñador UI/UX',
    company: 'Creative Studio',
    period: '2018 - 2020',
    description: 'Diseñé interfaces de usuario para aplicaciones móviles y web, creando sistemas de diseño y guías de estilo.'
  },
  {
    title: 'Desarrollador Full Stack',
    company: 'Startup Inc',
    period: '2016 - 2018',
    description: 'Desarrollé aplicaciones completas usando React, Node.js y MongoDB, desde el diseño hasta la implementación.'
  }
];

const PortfolioExperience = () => {
  return (
    <section id="experience" className="py-20 bg-blue-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experiencia</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4"></div>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 sm:pl-32 group">
              <div className="font-caveat font-medium text-xl text-cyan-400 mb-1 sm:mb-0">
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