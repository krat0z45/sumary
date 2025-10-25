import React from 'react';

const PortfolioDownload = () => {
  const handleDownload = () => {
    const driveLink = 'https://drive.google.com/file/d/1NfUt8LKpKGo9u_54DfZZ_WhD-lzgD5gx/view?usp=sharing';
    window.open(driveLink, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">¿Listo para trabajar juntos?</h2>
        <p className="text-xl text-blue-200 mb-12 max-w-3xl mx-auto">
          Descarga mi CV para ver todos mis detalles profesionales y experiencia en un solo documento.
        </p>
        <button 
          onClick={handleDownload}
          className="px-10 py-4 bg-cyan-500 text-white text-lg font-semibold rounded-full hover:bg-cyan-400 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/30 flex items-center mx-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Descargar CV Completo
        </button>
      </div>
    </section>
  );
};

export default PortfolioDownload;
