import React from 'react';

const ImageTextSection = ({ 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  leftSide = true, // true = texto a la izquierda, false = texto a la derecha
  button1Text = "Take a look",
  button2Text = "Contact Us",
  onButton1Click,
  onButton2Click
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          leftSide ? '' : 'lg:grid-flow-col-dense'
        }`}>
          {/* Contenido de texto */}
          <div className={`${leftSide ? 'lg:order-1' : 'lg:order-2'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-xl text-gray-600 mb-8">{description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onButton1Click}
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                {button1Text}
              </button>
              <button
                onClick={onButton2Click}
                className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                {button2Text}
              </button>
            </div>
          </div>
          
          {/* Imagen */}
          <div className={`${leftSide ? 'lg:order-2' : 'lg:order-1'}`}>
            <img 
              src={imageSrc} 
              alt={imageAlt}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;
