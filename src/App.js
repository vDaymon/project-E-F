import { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Remodel from './components/Remodel';
import About from './components/About';
import Contact from './components/Contact';
import TawkChat from './components/TawkChat';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  
  return (
    <div className="relative">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero setActiveSection={setActiveSection} />
      <Projects setActiveSection={setActiveSection} />
      <Remodel setActiveSection={setActiveSection} />
      <About setActiveSection={setActiveSection} />
      <Contact setActiveSection={setActiveSection} />
      <TawkChat />
    </div>
  );
}


// DONE