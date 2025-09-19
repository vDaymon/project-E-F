import React from 'react';
import Hero from '../components/Hero';
import ProjectsGrid from '../components/ProjectsGrid';
import Footer from '../components/Footer';

const Landing = ({ setActiveSection }) => {
  const projects = [
    {
      id: 1,
      title: "Custom Home Building",
      location: "El Retiro, Antioquia",
      image: "/imgs/projets/customHouseBuilding.jpg"
    },
    {
      id: 2,
      title: "Bathroom Renovation",
      location: "Envigado, Antioquia",
      image: "/imgs/projets/bathroomRenovation.jpg"
    },
    {
      id: 3,
      title: "Nespresso Retail Unit",
      location: "El Poblado, Antioquia",
      image: "/imgs/projets/nespressoRetailUnit.jpg"
    },
    {
      id: 4,
      title: "Nespresso Office Building",
      location: "Chapinero, Bogotá",
      image: "/imgs/projets/nespressoOfficeBuilding.jpg"
    },
    {
      id: 5,
      title: "Mental Health Center Servid",
      location: "Carmen del Viboral, Antioquia",
      image: "/imgs/projets/mentalHealthCenterServid.jpg"
    },
    {
      id: 6,
      title: "Custom Home Building",
      location: "SantaFé de Antioquia, Antioquia",
      image: "/imgs/projets/customHomeBuilding2.jpg"
    }
  ];

  return (
    <div className="relative">
      <Hero 
        setActiveSection={setActiveSection}
        imageSrc="/imgs/fodoourwork.jpg"
        title="Our Work"
        description="Explore our portfolio of completed projects that showcase our commitment to quality, innovation, and client satisfaction."
        showScrollArrow={true}
        sectionId="proyectos"
      />
      <ProjectsGrid projects={projects} initialCount={3} />
      <Footer />
    </div>
  );
};

export default Landing;
