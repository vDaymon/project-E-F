import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Services = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const services = [
    {
      id: 1,
      title: t.retailUnit,
      description: "Déjanos ayudarte a dar vida a tu visión con una unidad retail diseñada en torno a tus objetivos y la experiencia de tus clientes.",
      image: "/imgs/service1.jpg"
    },
    {
      id: 2,
      title: t.customHome,
      description: "Nos encantaría trabajar contigo para diseñar una casa que se sienta verdaderamente tuya, construida en torno a tu visión desde cero.",
      image: "/imgs/service2.jpg"
    },
    {
      id: 3,
      title: t.renovation,
      description: "Cualquier espacio en tu hogar que planees renovar, estaremos contigo de principio a fin en el proceso de renovación.",
      image: "/imgs/service3.jpg"
    }
  ];

  return (
    <section id="servicios" className="py-5 pt-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.servicesTitle}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4vh]">
          {services.map((service) => (
            <div key={service.id}>
              <div className="mb-4">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-96 object-cover rounded-[10px]"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
