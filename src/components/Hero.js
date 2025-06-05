import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ setActiveSection }) => {
  return (
    <section 
      id="inicio"
      className="relative h-screen bg-gradient-to-br from-gray-900 to-gray-800"
      onMouseEnter={() => setActiveSection('inicio')}
    >
      {/* Espacio reservado para video - INICIO (Reemplazar este bloque cuando tengas el video) */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://v.ftcdn.net/03/75/22/89/700_F_375228961_dzocUiSBesas6fQfafTR7Uw5IzmhpPOI_ST.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Espacio reservado para video - FIN */}

      {/* Overlay de contenido */}
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
        {/* Logo/Título */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          E&F <span className="text-blue-900"></span>
        </motion.h1>
        
        {/* Subtítulo */}
        <motion.p
          className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 animate-fade-in animation-delay-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Construyendo sueños, creando realidades
        </motion.p>
        
        {/* CTA Principal */}
        <motion.button
          onClick={() => setActiveSection('proyectos')}
          className="bg-blue-900 hover:bg-blue-950 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-in animation-delay-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Ver Nuestros Proyectos
        </motion.button>
        
        {/* Flecha indicadora de scroll */}
        <div className="absolute bottom-8 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;