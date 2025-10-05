import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import Hero from '../components/Hero';
import ProjectsGrid from '../components/ProjectsGrid';
import Footer from '../components/Footer';
import { projectsData } from '../data/projectsData';

const OurWork = ({ setActiveSection }) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const projects = projectsData.map((project) => ({
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
