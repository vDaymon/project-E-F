import React from 'react';
import { motion } from 'framer-motion';

const About = ({ setActiveSection }) => {
  const teamMembers = [
    {
      id: 1,
      name: 'Carlos Méndez',
      role: 'Fundador & CEO',
      bio: 'Más de 20 años de experiencia en construcción de alto nivel'
    },
    {
      id: 2,
      name: 'Ana Rodríguez',
      role: 'Arquitecta Principal',
      bio: 'Especialista en diseño sustentable y espacios inteligentes'
    },
    {
      id: 3,
      name: 'Luis Fernández',
      role: 'Ingeniero Civil',
      bio: 'Experto en estructuras y gestión de proyectos complejos'
    }
  ];

  const stats = [
    { value: '15+', label: 'Años de experiencia' },
    { value: '200+', label: 'Proyectos completados' },
    { value: '50+', label: 'Clientes satisfechos' },
    { value: '100%', label: 'Compromiso con calidad' }
  ];

  return (
    <section 
      id="nosotros"
      className="py-20 bg-gray-50"
      onMouseEnter={() => setActiveSection('nosotros')}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre <span className="text-blue-900">Nosotros</span>
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ConstruMax Pro nació de la pasión por crear espacios excepcionales que superen expectativas
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-12 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="lg:w-1/2">
            <div className="bg-gray-200 rounded-xl overflow-hidden aspect-video">
              <img src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80" alt="Equipo E&F" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nuestra Historia</h3>
            <p className="text-gray-600 mb-6">
              Fundada en 2008, E&F  se ha consolidado como líder en construcción y remodelación
              de alta gama. Combinamos tradición artesanal con tecnología de punta para ofrecer resultados
              excepcionales.
            </p>
            <p className="text-gray-600 mb-8">
              Nuestro enfoque centrado en el cliente y atención meticulosa a cada detalle nos ha permitido
              construir relaciones duraderas y un portafolio diverso de proyectos exitosos.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <p className="text-3xl font-bold text-blue-900 mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Conoce a Nuestro Equipo</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map(member => (
              <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center text-blue-300">
                  <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                  <p className="text-blue-900 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;