import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const ProjectsGrid = ({ projects, initialCount = 3 }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const [visibleCount, setVisibleCount] = useState(initialCount);
  
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;
  
  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, projects.length));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">{t.checkOurProjects}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleProjects.map((project, index) => (
            <div key={project.id || index} className="group cursor-pointer">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600">
                {project.location}
              </p>
            </div>
          ))}
        </div>
        
        {hasMore && (
          <div className="text-center">
            <button
              onClick={loadMore}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              {t.loadMoreProjects}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;
