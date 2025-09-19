import React, { useState, useEffect } from 'react';

const BackgroundImage = ({ 
  src, 
  alt, 
  className = '', 
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Crear la ruta optimizada (WebP)
    const optimizedSrc = src.replace('/imgs/', '/imgs/optimized/').replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    // Verificar si el navegador soporta WebP
    const supportsWebP = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        const dataURL = canvas.toDataURL('image/webp');
        return dataURL.indexOf('data:image/webp') === 0;
      } catch (e) {
        return false;
      }
    };

    // Función para verificar si la imagen existe
    const checkImageExists = (url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
      });
    };

    const loadOptimizedImage = async () => {
      // Si el navegador soporta WebP, intentar cargar la versión optimizada
      if (supportsWebP()) {
        const exists = await checkImageExists(optimizedSrc);
        if (exists) {
          setImageSrc(optimizedSrc);
          return;
        }
      }
      
      // Si no soporta WebP o no existe la optimizada, usar la original
      setImageSrc(src);
    };

    loadOptimizedImage();
  }, [src]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`${className} ${!imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      onLoad={handleImageLoad}
      {...props}
    />
  );
};

export default BackgroundImage;
