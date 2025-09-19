import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const CompaniesGrid = ({ setActiveSection }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const companies = [
    { id: 1, name: "L'Occitane", logo: "/imgs/companies/LOccitane-logo.png" },
    { id: 2, name: "Nespresso", logo: "/imgs/companies/Nespresso_logo.png" },
    { id: 3, name: "Servid", logo: "/imgs/companies/Logo-Servid.png" },
    { id: 4, name: "Guess", logo: "/imgs/companies/guess-logo.png" },
    { id: 5, name: "CDO", logo: "/imgs/companies/logo_cdo.png" },
    { id: 6, name: "Onda de Mar", logo: "/imgs/companies/OndaDeMar-logo.png" },
    { id: 7, name: "Paris Hilton", logo: "/imgs/companies/ParisHilton_logo.png" },
    { id: 8, name: "Provenzal", logo: "/imgs/companies/Provenzal-logo.png" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">{t.ourPartners}</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            {t.partnersDescription}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-50 rounded-lg p-8 h-32 flex items-center justify-center hover:bg-gray-100 transition-colors duration-300">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  className="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-center text-sm text-gray-600 mt-2 font-medium">
                {company.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">
            {t.interestedInWorking}
          </p>
          <button 
            onClick={() => setActiveSection && setActiveSection('contacto')}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {t.startAProject}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CompaniesGrid;

