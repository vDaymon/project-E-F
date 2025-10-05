import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const AboutUs = ({ setActiveSection }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const navigateToAbout = () => {
    if (typeof setActiveSection === 'function') {
      setActiveSection('nosotros');
    }
  };
  return (
    <section id="nosotros" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Texto */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.aboutUsTitle}</h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {t.aboutUsText}
              </p>
              
              <p>
                {t.aboutUsText2}
              </p>
            </div>
            
            <div className="pt-4">
              <button 
                type="button"
                onClick={navigateToAbout}
                className="inline-flex items-center text-gray-900 font-bold hover:text-blue-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
              >
                {t.learnMore}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              <p className="text-gray-600 mt-2">
                {t.learnMoreText}
              </p>
            </div>
          </div>
          
          {/* Columna derecha - Imagen */}
          <div className="order-first lg:order-last">
            <button
              type="button"
              onClick={navigateToAbout}
              className="group block w-full focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg"
              aria-label={t.aboutUsTitle}
            >
              <span className="block overflow-hidden rounded-lg">
                <img 
                  src="/imgs/aboutus1.jpg" 
                  alt="Modern house construction"
                  className="w-full h-96 object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
