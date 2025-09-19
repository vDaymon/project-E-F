import React from 'react';

const ConstructionImages = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Image - Residential Construction */}
          <div className="relative">
            <img 
              src="/imgs/casaconstruccion.jpg" 
              alt="Residential building under construction with workers"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          {/* Right Image - Commercial Construction */}
          <div className="relative">
            <img 
              src="/imgs/construccionteam.jpg" 
              alt="Multi-story commercial building under construction"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionImages;
