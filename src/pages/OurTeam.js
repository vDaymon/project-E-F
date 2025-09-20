import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import Hero from '../components/Hero';
import OurTeam from '../components/OurTeam';
import Footer from '../components/Footer';

const OurTeamPage = ({ setActiveSection }) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <div className="relative">
      <Hero 
        setActiveSection={setActiveSection}
        imageSrc="/imgs/team.JPG"
        title={t.ourTeam}
        description={t.ourTeamDescription}
        showScrollArrow={true}
        sectionId="ourteam"
      />
      <OurTeam setActiveSection={setActiveSection} />
      <Footer />
    </div>
  );
};

export default OurTeamPage;
