import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const InquiryCategories = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const categories = [
    {
      id: 1,
      title: t.employmentOpportunities,
      description: t.employmentOpportunitiesDesc,
      icon: (
        <img
          src="/imgs/iconos/portadolio.png"
          alt={t.employmentOpportunities}
          className="w-full h-full object-contain"
          onError={(e) => {
            console.warn('portadolio.png not found in /imgs/iconos; falling back to logoblanco.png');
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/imgs/logoblanco.png';
          }}
        />
      )
    },
    {
      id: 2,
      title: t.tradeContractorInterestForm,
      description: t.tradeContractorInterestFormDesc,
      icon: (
        <img
          src="/imgs/iconos/inge.png"
          alt={t.tradeContractorInterestForm}
          className="w-full h-full object-contain"
          onError={(e) => {
            console.warn('inge.png not found in /imgs/iconos; falling back to logoblanco.png');
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/imgs/logoblanco.png';
          }}
        />
      )
    },
    {
      id: 3,
      title: t.employmentVerification,
      description: t.employmentVerificationDesc,
      icon: (
        <img
          src="/imgs/iconos/like.png"
          alt={t.employmentVerification}
          className="w-full h-full object-contain"
          onError={(e) => {
            console.warn('like.png not found in /imgs/iconos; falling back to logoblanco.png');
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/imgs/logoblanco.png';
          }}
        />
      )
    },
    {
      id: 4,
      title: t.ourOffices,
      description: t.ourOfficesDesc,
      icon: (
        <img
          src="/imgs/iconos/oficina.png"
          alt={t.ourOffices}
          className="w-full h-full object-contain"
          onError={(e) => {
            console.warn('oficina.png not found in /imgs/iconos; falling back to logoblanco.png');
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  {category.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InquiryCategories;
