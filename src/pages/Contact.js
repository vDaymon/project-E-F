import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import Hero from '../components/Hero';
import InquiryCategories from '../components/InquiryCategories';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const ContactPage = ({ setActiveSection }) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <div className="relative">
      <Hero 
        setActiveSection={setActiveSection}
        imageSrc="/imgs/fondocontactus.jpg"
        title={t.contactUsTitle}
        description={t.contactUsPageDescription}
        showScrollArrow={true}
        sectionId="contacto"
      />
      <InquiryCategories />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactPage;
