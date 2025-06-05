import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = ({ setActiveSection }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nombre es requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'Email es requerido';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email no válido';
    }
    if (!formData.message.trim()) newErrors.message = 'Mensaje es requerido';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section 
      id="contacto"
      className="py-20 bg-white"
      onMouseEnter={() => setActiveSection('contacto')}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos listos para hacer realidad tu proyecto. Escríbenos y te responderemos pronto.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 disabled:opacity-70"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </div>

              {submitSuccess && (
                <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                  ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
                </div>
              )}
            </form>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-gray-50 p-8 rounded-xl h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Oficina Principal</h4>
                    <p className="text-gray-600">Av. Constructores 123, Ciudad de México</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Teléfono</h4>
                    <p className="text-gray-600">+52 55 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">contacto@constru-max.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Horario</h4>
                    <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                    <p className="text-gray-600">Sábados: 10:00 - 14:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-200 rounded-xl overflow-hidden aspect-video">
                <img src="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?auto=format&fit=crop&w=800&q=80" alt="Mapa de ubicación" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;


// DONE