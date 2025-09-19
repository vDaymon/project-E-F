import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const MissionVision = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.mission}</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {t.missionText}
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.vision}</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {t.visionText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
