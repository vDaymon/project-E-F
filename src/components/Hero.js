import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Hero = ({ 
  setActiveSection, 
  imageSrc = "/imgs/fondohome.jpg", 
  title,
  description,
  buttonText,
  buttonAction = () => setActiveSection('proyectos'),
  showScrollArrow = true,
  sectionId = "inicio"
}) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const heroTitle = title || t.heroTitle;
  const heroDescription = description || t.heroDescription;
  const heroButtonText = buttonText || t.viewProjects;
  return (
    <section 
      id={sectionId}
      className="relative h-screen bg-gradient-to-br from-gray-900 to-gray-800"
    >
      {/* Imagen de fondo con opacidad */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
        <img 
          src={imageSrc} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        />
      </div>

      {/* Overlay de contenido */}
      <div className="absolute inset-0 bg-black/30 flex flex-col items-start justify-center px-14">
        {/* Título principal */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {heroTitle}
        </motion.h1>
        
        {/* Descripción */}
        <motion.p
          className="text-lg md:text-xl text-white/90 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {heroDescription}
        </motion.p>
        
        {/* Flecha indicadora de scroll */}
        {showScrollArrow && (
          <div className="absolute bottom-8 animate-bounce">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;