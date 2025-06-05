import React from 'react';
import { motion } from 'framer-motion';

const Remodel = ({ setActiveSection }) => {
  return (
    <section 
      id="remodelacion"
      className="py-20 bg-white"
      onMouseEnter={() => setActiveSection('remodelacion')}
    >
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Imagen con efecto hover (mitad izquierda) */}
          <motion.div
            className="w-full lg:w-1/2 flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80"
              alt="Remodelación ejemplo"
              className="rounded-2xl shadow-xl w-full h-auto object-cover max-h-[400px]"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Contenido (mitad derecha) */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Remodela tu <span className="text-blue-900">Espacio</span>
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Transformamos tus espacios existentes en lugares modernos y funcionales. 
              Desde renovaciones completas hasta cambios estratégicos, hacemos realidad 
              tu visión con calidad y atención al detalle.
            </motion.p>
            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">Diseño personalizado según tus necesidades</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">Materiales de primera calidad</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">Tiempos de ejecución garantizados</p>
              </div>
            </motion.div>
            <motion.button
              onClick={() => setActiveSection('contacto')}
              className="bg-blue-900 hover:bg-blue-950 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Solicitar Presupuesto
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Remodel;