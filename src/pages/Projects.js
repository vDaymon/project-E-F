import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const ProjectsPage = ({ setActiveSection }) => {
  return (
    <div className="relative">
      <Hero 
        setActiveSection={setActiveSection}
        imageSrc="/imgs/fondoourwork.jpg"
        title="Our Work"
        description="Explore our portfolio of completed projects that showcase our commitment to quality, innovation, and client satisfaction."
        showScrollArrow={true}
        sectionId="proyectos"
      />
      <Projects setActiveSection={setActiveSection} />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
