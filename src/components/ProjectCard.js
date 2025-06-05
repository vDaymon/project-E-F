import React from 'react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.images && project.images[0] ? project.images[0] : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbYs9S2CW4SZwRaNbcQc5xi5TAfBttcUJLrQ&s"} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={e => { e.target.onerror = null; e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbYs9S2CW4SZwRaNbcQc5xi5TAfBttcUJLrQ&s"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.shortDescription || project.description.substring(0, 80)}...</p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-500">{project.location}</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-xs font-semibold">
            {project.type}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;