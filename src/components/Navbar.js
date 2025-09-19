import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export default function Navbar({ activeSection, setActiveSection, transparent = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  
  const links = [
    { id: 'home', label: t.home },
    { id: 'servicios', label: t.services },
    { id: 'ourwork', label: t.ourWork },
  ];

  const aboutDropdownItems = [
    { id: 'nosotros', label: t.aboutUs },
    { id: 'ourteam', label: t.ourTeam },
    { id: 'companies', label: t.companies },
  ];

  const handleMobileNav = () => setMobileOpen(!mobileOpen);

  const handleNavClick = (link) => {
    setMobileOpen(false);
    setAboutDropdownOpen(false);
    setActiveSection(link.id);
  };

  const handleAboutDropdownClick = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  const handleDropdownItemClick = (item) => {
    setAboutDropdownOpen(false);
    setMobileOpen(false);
    setActiveSection(item.id);
  };

  const handleContactClick = () => {
    setMobileOpen(false);
    setAboutDropdownOpen(false);
    setActiveSection('contacto');
  };

  return (
    <nav className={`absolute top-0 left-0 w-full z-50 ${transparent ? 'bg-transparent' : 'bg-white/90 backdrop-blur-sm shadow-sm'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={transparent ? "/imgs/logoblanco.png" : "/imgs/Logos-07.png"}
              alt="E&F Logo"
              className="h-24 w-auto"
            />
          </div>
          
          {/* Mobile Language Buttons - Always Visible */}
          <div className="flex md:hidden space-x-2 mr-4">
            <button
              onClick={() => toggleLanguage()}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                language === 'es'
                  ? (transparent ? 'bg-white text-gray-900' : 'bg-blue-900 text-white')
                  : (transparent ? 'text-white hover:bg-white/20' : 'text-gray-700 hover:bg-gray-100')
              }`}
            >
              ES
            </button>
            <button
              onClick={() => toggleLanguage()}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                language === 'en'
                  ? (transparent ? 'bg-white text-gray-900' : 'bg-blue-900 text-white')
                  : (transparent ? 'text-white hover:bg-white/20' : 'text-gray-700 hover:bg-gray-100')
              }`}
            >
              EN
            </button>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`${activeSection === link.id 
                  ? (transparent ? 'text-white' : 'text-primary') 
                  : (transparent ? 'text-white' : 'text-gray-700')
                } ${transparent ? 'hover:text-gray-300' : 'hover:text-primary'} transition-colors flex items-center py-2`}
              >
                {link.label}
              </button>
            ))}
            
            {/* About Us Dropdown */}
            <div className="relative">
              <button
                onClick={handleAboutDropdownClick}
                className={`${activeSection === 'nosotros' || activeSection === 'ourteam' || activeSection === 'companies'
                  ? (transparent ? 'text-white' : 'text-primary') 
                  : (transparent ? 'text-white' : 'text-gray-700')
                } ${transparent ? 'hover:text-gray-300' : 'hover:text-primary'} transition-colors flex items-center py-2`}
              >
                {t.aboutUs.toUpperCase()}
                <svg className={`w-4 h-4 ml-1 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {aboutDropdownOpen && (
                <div className={`absolute top-full left-0 mt-2 w-48 rounded-lg shadow-lg py-2 ${
                  transparent ? 'bg-black/90 backdrop-blur-sm' : 'bg-white'
                }`}>
                  {aboutDropdownItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleDropdownItemClick(item)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        activeSection === item.id
                          ? (transparent ? 'text-white bg-white/20' : 'text-primary bg-gray-100')
                          : (transparent ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100')
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Language Buttons */}
            <div className="flex space-x-2 mr-4">
              <button
                onClick={() => toggleLanguage()}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                  language === 'es' 
                    ? (transparent ? 'bg-white text-gray-900' : 'bg-blue-900 text-white')
                    : (transparent ? 'text-white hover:bg-white/20' : 'text-gray-700 hover:bg-gray-100')
                }`}
              >
                ES
              </button>
              <button
                onClick={() => toggleLanguage()}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                  language === 'en' 
                    ? (transparent ? 'bg-white text-gray-900' : 'bg-blue-900 text-white')
                    : (transparent ? 'text-white hover:bg-white/20' : 'text-gray-700 hover:bg-gray-100')
                }`}
              >
                EN
              </button>
            </div>
            
            {/* Contact Us Button */}
            <button
              onClick={handleContactClick}
              className={`${transparent 
                ? 'bg-white text-gray-900 hover:bg-gray-100' 
                : 'bg-blue-900 hover:bg-blue-950 text-white'
              } px-4 py-4 rounded-[10px] transition-colors text-sm flex items-center`}
            >
              {t.contactUs.toUpperCase()}
            </button>
          </div>
          <button className={`md:hidden ${transparent ? 'text-white' : 'text-gray-700'}`} onClick={handleMobileNav}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {/* Mobile nav */}
        {mobileOpen && (
          <div className={`md:hidden mt-4 flex flex-col space-y-4 rounded-xl shadow-lg p-6 animate-fade-in ${
            transparent ? 'bg-black/80 backdrop-blur-sm' : 'bg-white'
          }`}>
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`${transparent ? 'text-white hover:text-gray-300' : 'text-gray-700 hover:text-primary'} transition-colors text-lg text-left`}
              >
                {link.label}
              </button>
            ))}
            
            {/* Mobile About Us Section */}
            <div>
              <div className={`${transparent ? 'text-white' : 'text-gray-700'} text-lg font-semibold mb-2`}>
                {t.aboutUs}
              </div>
              <div className="ml-4 space-y-2">
                {aboutDropdownItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleDropdownItemClick(item)}
                    className={`${transparent ? 'text-white hover:text-gray-300' : 'text-gray-700 hover:text-primary'} transition-colors text-lg text-left block`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            
            
            {/* Mobile Contact Us Button */}
            <button
              onClick={handleContactClick}
              className={`${transparent 
                ? 'bg-white text-gray-900 hover:bg-gray-100' 
                : 'bg-blue-900 hover:bg-blue-950 text-white'
              } px-4 py-1 rounded-[20px] transition-colors text-lg text-center`}
            >
              {t.contactUs.toUpperCase()}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}