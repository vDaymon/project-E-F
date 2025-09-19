import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const ScheduleConsultation = ({ setActiveSection }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const handleContactClick = () => {
    setActiveSection && setActiveSection('contacto');
  };

  return (
    <section className="py-16 bg-gray-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl font-bold text-gray-900">{t.scheduleTitle}</h2>
          </div>
          
          <div>
            <button
              onClick={handleContactClick}
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              {t.contactUs}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleConsultation;
