import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import CoreValues from '../components/CoreValues';
import ConstructionImages from '../components/ConstructionImages';
import CoreValuesDetailed from '../components/CoreValuesDetailed';
import MissionVision from '../components/MissionVision';
import OurHistory from '../components/OurHistory';
import LegacyBuildOnTrust from '../components/LegacyBuildOnTrust';
import Footer from '../components/Footer';

const AboutPage = ({ setActiveSection }) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  // Insert a line break after 'compromiso' (ES) or 'commitment' (EN) when present
  const aboutDescription = t.aboutUsPageDescription || '';
  const splitRegex = /(compromiso|commitment)/i;
  let descriptionNode = aboutDescription;
  if (splitRegex.test(aboutDescription)) {
    const parts = aboutDescription.split(splitRegex);
    // parts => [before, matchedWord, after]
    descriptionNode = (
      <>
        {parts[0]}
        {parts[1]}
        <br />
        {parts.slice(2).join('')}
      </>
    );
  }

  return (
    <div className="relative">
      <Hero 
        setActiveSection={setActiveSection}
        imageSrc="/imgs/fondoaboutus.jpg"
        title={t.aboutUsTitle}
        description={descriptionNode}
        showScrollArrow={true}
        sectionId="nosotros"
      />
      <WhoWeAre setActiveSection={setActiveSection} />
      <CoreValues />
      <ConstructionImages />
      <CoreValuesDetailed />
      <MissionVision />
      <OurHistory />
      <LegacyBuildOnTrust />
      <Footer />
    </div>
  );
};

export default AboutPage;
