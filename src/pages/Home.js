import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Projects from '../components/Projects';
import BuildInOurWay from '../components/BuildInOurWay';
import ScheduleConsultation from '../components/ScheduleConsultation';
import Footer from '../components/Footer';

const Home = ({ setActiveSection }) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <div className="relative">
      <Hero 
        setActiveSection={setActiveSection}
        imageSrc="/imgs/fondohome.jpg"
        title={t.heroTitle}
        description={t.heroDescription}
        showScrollArrow={true}
        sectionId="home"
      />
      <Services setActiveSection={setActiveSection} />
      <AboutUs setActiveSection={setActiveSection} />
      <Projects setActiveSection={setActiveSection} />
      <BuildInOurWay />
      <ScheduleConsultation setActiveSection={setActiveSection} />
      <Footer />
    </div>
  );
};

export default Home;
