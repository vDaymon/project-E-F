import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const CoreValues = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const values = [
    t.fairAndFirm,
    t.accountable,
    t.alwaysImproving,
    t.teamDriven
  ];

  return (
    <section className="py-8 bg-gray-300">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex flex-wrap justify-center items-center gap-x-4 text-gray-500 font-medium text-2xl">
            {values.map((value, index) => (
              <React.Fragment key={index}>
                <span className="whitespace-nowrap">{value}</span>
                {index < values.length - 1 && (
                  <span className="text-gray-400">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
