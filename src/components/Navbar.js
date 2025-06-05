import React, { useState } from 'react';

export default function Navbar({ activeSection, setActiveSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'proyectos', label: 'Nuestros Proyectos' },
    { id: 'remodelacion', label: 'Remodelación' },
    { id: 'nosotros', label: 'Sobre Nosotros' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleMobileNav = () => setMobileOpen(!mobileOpen);

  const handleNavClick = (link) => {
    setMobileOpen(false);
    setActiveSection(link.id);
    const section = document.getElementById(link.id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">E&F</div>
          <div className="hidden md:flex space-x-8">
            {links.map(link => {
              if (link.id === 'proyectos') {
                return (
                  <a
                    key={link.id}
                    href="/proyectos"
                    className={`${activeSection === link.id ? 'text-primary' : 'text-gray-700'
                      } hover:text-primary transition-colors`}
                  >
                    {link.label}
                  </a>
                );
              } else {
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link)}
                    className={`${activeSection === link.id ? 'text-primary' : 'text-gray-700'
                      } hover:text-primary transition-colors`}
                  >
                    {link.label}
                  </button>
                );
              }
            })}
          </div>
          <button className="md:hidden text-gray-700" onClick={handleMobileNav}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 bg-white rounded-xl shadow-lg p-6 animate-fade-in">
            {links.map(link =>
              link.id === 'proyectos' ? (
                <a
                  key={link.id}
                  href="/proyectos"
                  className="text-gray-700 hover:text-primary transition-colors text-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className="text-gray-700 hover:text-primary transition-colors text-lg text-left"
                >
                  {link.label}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
}