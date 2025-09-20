import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import { LuHandshake } from 'react-icons/lu';

const CoreValuesDetailed = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const values = [
    {
      id: 1,
      title: t.weBuildWithPurpose,
      description: t.weBuildWithPurposeDesc,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v20M12 2l4 4-4 4-4-4" />
        </svg>
      )
    },
    {
      id: 2,
      title: t.weHonorOurWord,
      description: t.weHonorOurWordDesc,
      icon: <LuHandshake className="w-10 h-10 text-blue-600" />
    },
    {
      id: 3,
      title: t.weCareForPeople,
      description: t.weCareForPeopleDesc,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: t.wePushBoundaries,
      description: t.wePushBoundariesDesc,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
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
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
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
