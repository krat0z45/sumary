import React, { useState } from 'react';

const PortfolioContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Mensaje de Portfolio de ${formData.name}`);
    const body = encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`);

    const mailtoLink = `mailto:mototokrat0z@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setSuccess(true);

    // Opcional: limpiar formulario tras enviar
    setFormData({ name: '', email: '', message: '' });

    // Quitar la notificación después de 3 segundos
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-blue-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Contacto</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Información de contacto</h3>
            <div className="space-y-4">
              {/* ... Aquí va tu info de contacto igual ... */}
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-300 mb-1">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-blue-900/50 border border-blue-800 rounded-md focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-blue-900/50 border border-blue-800 rounded-md focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-300 mb-1">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-blue-900/50 border border-blue-800 rounded-md focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-cyan-500 text-white rounded-md hover:bg-cyan-400 transition-colors w-full"
              >
                Enviar mensaje
              </button>
            </form>
            {success && (
              <p className="mt-4 text-green-400 font-semibold text-center">
                ¡Mensaje preparado para enviar! Revisa tu cliente de correo.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioContact;
