import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Methods = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const methods = [
    {
      id: 1,
      title: t.preconstruction,
      description: t.preconstructionDesc,
      image: "/imgs/method1.jpg"
    },
    {
      id: 2,
      title: t.constructionManagement,
      description: t.constructionManagementDesc,
      image: "/imgs/method2.jpg"
    },
    {
      id: 3,
      title: t.projectManagement,
      description: t.projectManagementDesc,
      image: "/imgs/method3.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">{t.methodsTitle}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methods.map((method) => (
            <div key={method.id} className="">
              <div className="mb-4">
                <img 
                  src={method.image} 
                  alt={method.title}
                  className="w-full h-64 object-cover rounded-lg mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {method.title}
              </h3>
              <p className="text-gray-600">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methods;
