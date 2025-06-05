import React from 'react';
import { motion } from 'framer-motion';

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-end">
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div className="p-6">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm">
                {project.location}
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm">
                {project.type}
              </span>
              <span className="px-3 py-1 bg-blue-50 text-blue-900 rounded-full text-sm">
                {project.year}
              </span>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {project.images && project.images.length > 0 ? (
              project.images.map((img, index) => (
                <img 
                  key={index} 
                  src={img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbYs9S2CW4SZwRaNbcQc5xi5TAfBttcUJLrQ&s"} 
                  alt={`${project.title} ${index + 1}`}
                  className="rounded-lg shadow-md h-full object-cover"
                  onError={e => { e.target.onerror = null; e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbYs9S2CW4SZwRaNbcQc5xi5TAfBttcUJLrQ&s"; }}
                />
              ))
            ) : (
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbYs9S2CW4SZwRaNbcQc5xi5TAfBttcUJLrQ&s" 
                alt={project.title}
                className="rounded-lg shadow-md h-full object-cover"
              />
            )}
          </motion.div>

          <motion.div
            className="prose max-w-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Descripción</h3>
            <p className="mb-6">{project.description}</p>
            
            <h3 className="text-xl font-semibold mb-4">Características</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-blue-900 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;