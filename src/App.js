import { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import OurWork from './pages/OurWork';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import ProjectsPage from './pages/Projects';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import CompaniesPage from './pages/Companies';
import OurTeamPage from './pages/OurTeam';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeSection, setActiveSection] = useState('inicio');

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setActiveSection(page);
    // Scroll to top when changing pages
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setActiveSection={handlePageChange} />;
      case 'ourwork':
        return <OurWork setActiveSection={handlePageChange} />;
      case 'servicios':
        return <ServicesPage setActiveSection={handlePageChange} />;
      case 'proyectos':
        return <ProjectsPage setActiveSection={handlePageChange} />;
      case 'nosotros':
        return <AboutPage setActiveSection={handlePageChange} />;
      case 'contacto':
        return <ContactPage setActiveSection={handlePageChange} />;
      case 'companies':
        return <CompaniesPage setActiveSection={handlePageChange} />;
      case 'ourteam':
        return <OurTeamPage setActiveSection={handlePageChange} />;
      default:
        return <OurWork setActiveSection={handlePageChange} />;
    }
  };

  const isTransparentNavbar = currentPage !== 'home';

  return (
    <LanguageProvider>
      <div className="relative">
        <Navbar 
          activeSection={activeSection} 
          setActiveSection={handlePageChange} 
          transparent={isTransparentNavbar} 
        />
        {renderPage()}
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}


// DONE