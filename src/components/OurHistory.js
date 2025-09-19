import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import OptimizedImage from './OptimizedImage';

const OurHistory = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentSlide, setCurrentSlide] = useState(0);

  const historyItems = [
    {
      year: "2008",
      title: t.foundation,
      description: t.foundationDesc,
      image: "/imgs/projects/customeHouseBuilding.jpg"
    },
    {
      year: "2010",
      title: t.nespressoPartnership,
      description: t.nespressoPartnershipDesc,
      image: "/imgs/projects/customHouseBuilding2.jpg"
    },
    {
      year: "2013",
      title: t.expansion,
      description: t.expansionDesc,
      image: "/imgs/projects/nesspresoOfice.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % historyItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + historyItems.length) % historyItems.length);
  };

  // Auto-slide cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % historyItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [historyItems.length]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">{t.ourHistory}</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Carrusel */}
          <div className="relative overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {historyItems.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="text-center">
                    <OptimizedImage 
                      src={item.image} 
                      alt={`${item.year} - ${item.title}`}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.year}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-6 space-x-2">
            {historyItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-gray-900' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
