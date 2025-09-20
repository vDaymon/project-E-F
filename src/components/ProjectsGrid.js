import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import OptimizedImage from './OptimizedImage';

const ProjectsGrid = ({ projects, initialCount = 6 }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const [visibleCount, setVisibleCount] = useState(initialCount);
  
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;
  
  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, projects.length));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">{t.checkOurProjects}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visibleProjects.map((project, index) => (
            <div key={project.id || index} className="cursor-pointer">
              <div className="w-80 h-60 overflow-hidden rounded-lg mb-3">
                <OptimizedImage 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600">
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
