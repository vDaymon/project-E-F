import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const ContactUs = ({ setActiveSection }) => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.contactUsTitle}</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          {t.contactUsDescription}
        </p>
        <button
          onClick={() => setActiveSection && setActiveSection('contacto')}
          className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          {t.getInTouch}
        </button>
      </div>
    </section>
  );
};

export default ContactUs;
