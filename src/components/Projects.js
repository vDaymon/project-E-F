import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import ProjectDetail from './ProjectDetail';
import { projectsData } from '../data/projectsData';

const Projects = ({ setActiveSection }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { language } = useLanguage();
  const t = translations[language];

  const navigateToOurWork = () => {
    if (typeof setActiveSection === 'function') {
      setActiveSection('ourwork');
    }
  };

  const homeProjectIds = [
    'custom-home-la-ceja',
    'custom-home-el-retiro',
    'nespresso-office-k2',
    'servid-center'
  ];

  const projects = homeProjectIds
    .map((id) => projectsData.find((project) => project.id === id))
    .filter(Boolean)
    .map((project) => ({
      id: project.id,
      title: project.title?.[language] ?? project.title?.es ?? '',
      description: project.description?.[language] ?? project.description?.es ?? '',
      image: project.cover,
      images: project.gallery,
      location: project.location?.[language] ?? project.location?.es ?? '',
      type: project.type?.[language] ?? project.type?.es ?? '',
      year: project.year,
      features: project.features?.[language] ?? project.features?.es ?? []
    }));

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
              role="button"
              tabIndex={0}
              className="cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-lg"
              onClick={() => setSelectedProject(project)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedProject(project);
                }
              }}
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg mb-3">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-200 hover:scale-[1.03]"
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

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={navigateToOurWork}
            className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-2xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors"
          >
            {t.moreWorkCta}
          </button>
        </div>
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