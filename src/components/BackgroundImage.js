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
    // Verificar que src no sea null o undefined
    if (!src) {
      console.log('BackgroundImage - src is null or undefined');
      return;
    }

    // Crear la ruta optimizada (WebP)
    const optimizedSrc = src.replace('/imgs/', '/imgs/optimized/').replace(/\.(jpg|jpeg|png)$/i, '.webp');

    // Debug específico para team.jpg
    if (src.includes('team.jpg')) {
      console.log('BackgroundImage - team.jpg detected');
      console.log('Original src:', src);
      console.log('Optimized src:', optimizedSrc);
    }

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

    // Para team.jpg, usar siempre la original por ahora
    if (src.includes('team.jpg')) {
      console.log('Using original team.jpg (bypassing optimization)');
      setImageSrc(src);
    } else {
      // Cargar imagen optimizada si el navegador la soporta
      if (supportsWebP()) {
        setImageSrc(optimizedSrc);
      } else {
        setImageSrc(src);
      }
    }
  }, [src]);

  const handleImageLoad = () => {
    if (src.includes('team.jpg')) {
      console.log('Team image loaded successfully:', imageSrc);
    }
    setImageLoaded(true);
  };

  const handleImageError = () => {
    if (src.includes('team.jpg')) {
      console.log('Team image error, falling back to original');
    }
    // Si falla la optimizada, usar la original
    if (imageSrc !== src) {
      setImageSrc(src);
    }
  };

  // Si no hay src, no renderizar nada
  if (!src) {
    return null;
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`${className} ${!imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      onLoad={handleImageLoad}
      onError={handleImageError}
      {...props}
    />
  );
};

export default BackgroundImage;
