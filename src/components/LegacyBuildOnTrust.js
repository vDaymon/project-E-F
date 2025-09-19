import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const LegacyBuildOnTrust = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.legacyBuildOnTrust}</h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {t.legacyBuildOnTrustText}
              </p>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="order-first lg:order-last">
            <img 
              src="/imgs/team.jpg" 
              alt="EYF Constructores team"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacyBuildOnTrust;
