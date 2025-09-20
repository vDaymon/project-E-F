import React from 'react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      className="cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-[4/3] w-full overflow-hidden rounded-lg mb-3">
        <img 
          src={project.images && project.images[0] ? project.images[0] : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbYs9S2CW4SZwRaNbcQc5xi5TAfBttcUJLrQ&s"} 
          alt={project.title}
          className="w-full h-full object-cover"
          onError={e => { e.target.onerror = null; e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbYs9S2CW4SZwRaNbcQc5xi5TAfBttcUJLrQ&s"; }}
        />
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.title}</h3>
      <p className="text-sm text-gray-600">{project.location}</p>
    </div>
  );
};

export default ProjectCard;