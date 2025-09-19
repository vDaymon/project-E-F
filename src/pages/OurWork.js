import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import Hero from '../components/Hero';
import ProjectsGrid from '../components/ProjectsGrid';
import Footer from '../components/Footer';

const OurWork = ({ setActiveSection }) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const projects = [
    {
      id: 1,
      title: t.customHomeBuilding,
      location: "El Retiro, Antioquia",
      image: "/imgs/projects/customeHouseBuilding.jpg"
    },
    {
      id: 2,
      title: t.bathroomRenovation,
      location: "Envigado, Antioquia",
      image: "/imgs/projects/bathroomRenovation.jpg"
    },
    {
      id: 3,
      title: t.nespressoRetailUnit,
      location: "El Poblado, Antioquia",
      image: "/imgs/projects/nesspresoRetail.jpg"
    },
    {
      id: 4,
      title: t.nespressoOfficeBuilding,
      location: "Chapinero, Bogotá",
      image: "/imgs/projects/nesspresoOfice.jpg"
    },
    {
      id: 5,
      title: t.mentalHealthCenterServid,
      location: "Carmen del Viboral, Antioquia",
      image: "/imgs/projects/servidEdificio.jpg"
    },
    {
      id: 6,
      title: t.customHomeBuilding,
      location: "SantaFé de Antioquia, Antioquia",
      image: "/imgs/projects/customhousebuilding2.jpg"
    }
  ];

  return (
    <div className="relative">
      <Hero 
        setActiveSection={setActiveSection}
        imageSrc="/imgs/fodoourwork.jpg"
        title={t.ourWorkTitle}
        description={t.ourWorkDescription}
        showScrollArrow={true}
        sectionId="proyectos"
      />
      <ProjectsGrid projects={projects} initialCount={3} />
      <Footer />
    </div>
  );
};

export default OurWork;
