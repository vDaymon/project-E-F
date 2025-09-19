import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const BuildInOurWay = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const values = language === 'es' 
    ? ["Profesionalismo", "Integridad", "Trabajo en Equipo", "Calidad"]
    : ["Professionalism", "Integrity", "Teamwork", "Quality"];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.buildInOurWayTitle}</h2>
          <p className="text-gray-700 text-lg mb-8">
            {t.buildInOurWayDescription}
          </p>
          
          <div className="bg-gray-200 rounded-lg p-2">
            <div className="flex flex-wrap justify-center gap-8">
              {values.map((value, index) => (
                <span 
                  key={index}
                  className="text-gray-800 font-medium text-lg"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildInOurWay;
