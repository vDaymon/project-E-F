import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail';
import projectsData from '../mock/projects';

const Projects = ({ setActiveSection }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section 
      id="proyectos"
      className="py-20 bg-gray-50"
      onMouseEnter={() => setActiveSection('proyectos')}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Proyectos</h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Descubre nuestra cartera de proyectos arquitectónicos y de construcción</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 + idx * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard 
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            onClick={() => setSelectedProject(projectsData[0])}
          >
            Ver todos los proyectos
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
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