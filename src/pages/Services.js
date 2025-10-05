import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import Hero from '../components/Hero';
import ImageTextSection from '../components/ImageTextSection';
import Methods from '../components/Methods';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

const ServicesPage = ({ setActiveSection }) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const handleTakeALook = (service) => {
    // Aquí puedes agregar lógica para mostrar más detalles del servicio
    console.log(`Take a look at ${service}`);
  };

  const handleContactUs = () => {
    setActiveSection('contacto');
  };

  // Insert a line break after the word 'construcción' (ES) or 'construction' (EN)
  const subtitle = t.servicesSubtitle || '';
  const splitRegex = /(construcci[oó]n|construction)/i;
  let descriptionNode = subtitle;
  if (splitRegex.test(subtitle)) {
    const parts = subtitle.split(splitRegex);
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
        imageSrc="/imgs/fondoservices.jpg"
        title={t.servicesTitle}
        description={descriptionNode}
        showScrollArrow={true}
        sectionId="servicios"
      />
      
      {/* Retail Unit - Texto izquierda, imagen derecha */}
      <ImageTextSection
        title={t.retailUnit}
        description={t.retailDescription}
        imageSrc="/imgs/service1.jpg"
        imageAlt="Retail Unit Interior"
        leftSide={true}
        button1Text={t.takeALook}
        button2Text={t.contactUs}
        onButton1Click={() => handleTakeALook('Retail Unit')}
        onButton2Click={handleContactUs}
      />
      
      {/* Custom Home Building - Imagen izquierda, texto derecha */}
      <ImageTextSection
        title={t.customHome}
        description={t.customHomeDescription}
        imageSrc="/imgs/service2.jpg"
        imageAlt="Custom Home Building"
        leftSide={false}
        button1Text={t.takeALook}
        button2Text={t.contactUs}
        onButton1Click={() => handleTakeALook('Custom Home Building')}
        onButton2Click={handleContactUs}
      />
      
      {/* Renovation - Texto izquierda, imagen derecha */}
      <ImageTextSection
        title={t.renovation}
        description={t.renovationDescription}
        imageSrc="/imgs/service3.jpg"
        imageAlt="Renovation Project"
        leftSide={true}
        button1Text={t.takeALook}
        button2Text={t.contactUs}
        onButton1Click={() => handleTakeALook('Renovation')}
        onButton2Click={handleContactUs}
      />
      
      <Methods />
      
      <ContactUs setActiveSection={setActiveSection} />
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
