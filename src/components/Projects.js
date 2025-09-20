import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import ProjectDetail from './ProjectDetail';

const Projects = ({ setActiveSection }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { language } = useLanguage();
  const t = translations[language];

  const projects = [
    {
      id: 1,
      title: t.customHomeLaCeja,
      description: t.customHomeLaCejaDesc,
      image: "/imgs/project1.jpg"
    },
    {
      id: 2,
      title: t.customHomeElRetiro,
      description: t.customHomeElRetiroDesc,
      image: "/imgs/project2.jpg"
    },
    {
      id: 3,
      title: t.nespressoOffice,
      description: t.nespressoOfficeDesc,
      image: "/imgs/project3.jpg"
    },
    {
      id: 4,
      title: t.servidCenter,
      description: t.servidCenterDesc,
      image: "/imgs/project4.jpg"
    }
  ];

  return (
    <section 
      id="proyectos"
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.ourWorkTitle}</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 + idx * 0.1 }}
              viewport={{ once: true }}
              className="cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg mb-3">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600">
                {project.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectDetail 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;


// DONE