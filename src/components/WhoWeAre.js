import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const WhoWeAre = ({ setActiveSection }) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const stats = [
    {
      id: 1,
      number: "2002",
      label: t.yearFounded
    },
    {
      id: 2,
      number: "100%",
      label: t.committedToQuality
    },
    {
      id: 3,
      number: "50+",
      label: t.satisfiedClients
    },
    {
      id: 4,
      number: "60+",
      label: t.completedProjects
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.whoWeAreTitle}</h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {t.whoWeAreText1}
              </p>
              
              <p>
                {t.whoWeAreText2}
              </p>
              
              <p>
                {t.whoWeAreText3}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <button 
                onClick={() => setActiveSection && setActiveSection('companies')}
                className="bg-gray-900 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                {t.companies}
              </button>
              <button 
                onClick={() => setActiveSection && setActiveSection('ourteam')}
                className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                {t.ourTeam}
              </button>
            </div>
          </div>
          
          {/* Right Column - Statistics */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-gray-300 rounded-lg p-6 text-center aspect-square flex flex-col justify-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-2xl text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
