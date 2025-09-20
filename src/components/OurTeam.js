import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import OptimizedImage from './OptimizedImage';

const OurTeam = ({ setActiveSection }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const executiveLeadership = {
    name: "Frank López",
    role: "CEO",
    image: null, // Imagen no disponible
    description: t.ceoDescription
  };

  const teamMembers = [
    { id: 1, name: "Nancy Rodríguez", role: t.directorOfAdministration, image: null },
    { id: 2, name: "Johann López", role: t.directorOfOperations, image: null },
    { id: 3, name: "Daniela López", role: t.designer, image: null },
    { id: 4, name: "Claudia Ortiz", role: t.accountingPartner, image: null },
    { id: 5, name: "Victor Chavez", role: t.webDesignPartner, image: null },
    { id: 6, name: "Jonathan Gonzales", role: t.renderingPartner, image: null }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">{t.getToKnowUs}</h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            {t.ourTeamDescription}
          </p>
        </motion.div>

        {/* Executive Leadership Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t.executiveLeadership}</h3>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/3">
                <div className="aspect-square bg-gray-300 rounded-xl overflow-hidden w-64 h-64 mx-auto">
                  <OptimizedImage 
                    src={executiveLeadership.image} 
                    alt={executiveLeadership.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{executiveLeadership.name}</h4>
                <p className="text-xl text-blue-900 font-semibold mb-4">{executiveLeadership.role}</p>
                <p className="text-gray-600 leading-relaxed">
                  {executiveLeadership.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t.ourTeam}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg mb-3">
                  <OptimizedImage 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-sm text-blue-900 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6 text-lg">
            {t.readyToWork}
          </p>
          <button 
            onClick={() => setActiveSection && setActiveSection('contacto')}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {t.startYourProject}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;
