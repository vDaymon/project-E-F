import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
// Using an image from Google Drive for the 'Honramos Nuestra Palabra' icon

const CoreValuesDetailed = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const values = [
    {
      id: 1,
      title: t.weBuildWithPurpose,
      description: t.weBuildWithPurposeDesc,
      icon: (
        <img
          src="/imgs/iconos/monstaña.png"
          alt={t.weBuildWithPurpose}
          className="w-full h-full object-contain rounded-full"
          onError={(e) => {
            console.warn('monstaña.png not found in /imgs/iconos; falling back to logoblanco.png');
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/imgs/logoblanco.png';
          }}
        />
      )
    },
    {
      id: 2,
      title: t.weHonorOurWord,
      description: t.weHonorOurWordDesc,
      icon: (
        <img
          src="/imgs/iconos/manos.png"
          alt={t.weHonorOurWord}
          className="w-full h-full object-contain rounded-full"
          onError={(e) => {
            console.warn('manos.png not found in /imgs/iconos; falling back to logoblanco.png');
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/imgs/logoblanco.png';
          }}
        />
      )
    },
    {
      id: 3,
      title: t.weCareForPeople,
      description: t.weCareForPeopleDesc,
      icon: (
        <img
          src="/imgs/iconos/sostener.png"
          alt={t.weCareForPeople}
          className="w-full h-full object-contain rounded-full"
          onError={(e) => {
            console.warn('sostener.png not found in /imgs/iconos; falling back to logoblanco.png');
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/imgs/logoblanco.png';
          }}
        />
      )
    },
    {
      id: 4,
      title: t.wePushBoundaries,
      description: t.wePushBoundariesDesc,
      icon: (
        <img
          src="/imgs/iconos/cerca.png"
          alt={t.wePushBoundaries}
          className="w-full h-full object-contain rounded-full"
          onError={(e) => {
            console.warn('cerca.png not found in /imgs/iconos; falling back to logoblanco.png');
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/imgs/logoblanco.png';
          }}
        />
      )
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">{t.coreValues}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div key={value.id} className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center p-2">
                    {value.icon}
                  </div>
                </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesDetailed;
