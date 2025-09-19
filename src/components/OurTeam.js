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
    image: "/imgs/team/frank-lopez.jpg",
    description: t.ceoDescription
  };

  const teamMembers = [
    { id: 1, name: "Nancy Rodríguez", role: t.directorOfAdministration, image: "/imgs/team/nancy-rodriguez.jpg" },
    { id: 2, name: "Johann López", role: t.directorOfOperations, image: "/imgs/team/johann-lopez.jpg" },
    { id: 3, name: "Daniela López", role: t.designer, image: "/imgs/team/daniela-lopez.jpg" },
    { id: 4, name: "Claudia Ortiz", role: t.accountingPartner, image: "/imgs/team/claudia-ortiz.jpg" },
    { id: 5, name: "Victor Chavez", role: t.webDesignPartner, image: "/imgs/team/victor-chavez.jpg" },
    { id: 6, name: "Jonathan Gonzales", role: t.renderingPartner, image: "/imgs/team/jonathan-gonzales.jpg" }
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
                <div className="aspect-square bg-gray-300 rounded-xl overflow-hidden">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors duration-300">
                  <div className="aspect-square bg-gray-300 rounded-lg overflow-hidden mb-4">
                    <OptimizedImage 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-blue-900 font-medium">{member.role}</p>
                </div>
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
