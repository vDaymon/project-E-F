import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import Hero from '../components/Hero';
import CompaniesGrid from '../components/CompaniesGrid';
import Footer from '../components/Footer';

const CompaniesPage = ({ setActiveSection }) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <div className="relative">
      <Hero 
        setActiveSection={setActiveSection}
        imageSrc="/imgs/fondocompanies.jpg"
        title={t.companiesTitle}
        description={t.companiesDescription}
        showScrollArrow={true}
        sectionId="companies"
      />
      <CompaniesGrid />
      <Footer />
    </div>
  );
};

export default CompaniesPage;
