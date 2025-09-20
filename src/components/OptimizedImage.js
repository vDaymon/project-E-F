import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OptimizedImage = ({ 
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
      console.log('OptimizedImage - src is null or undefined');
      return;
    }

    // Crear la ruta optimizada (WebP)
    const optimizedSrc = src.replace('/imgs/', '/imgs/optimized/').replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    // Verificar si el navegador soporta WebP - versión mejorada para Safari
    const supportsWebP = () => {
      return new Promise((resolve) => {
        // Primero verificar con canvas (más confiable)
        try {
          const canvas = document.createElement('canvas');
          canvas.width = 1;
          canvas.height = 1;
          const dataURL = canvas.toDataURL('image/webp');
          if (dataURL.indexOf('data:image/webp') === 0) {
            resolve(true);
            return;
          }
        } catch (e) {
          // Canvas falló, continuar con imagen real
        }

        // Si canvas falla, probar con una imagen real
        const webpImage = new Image();
        webpImage.onload = () => resolve(true);
        webpImage.onerror = () => resolve(false);
        // Usar una imagen WebP real que sabemos que existe
        webpImage.src = '/imgs/optimized/fondohome.webp';
      });
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
      const webpSupported = await supportsWebP();
      
      // Si el navegador soporta WebP, intentar cargar la versión optimizada
      if (webpSupported) {
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

  // Si no hay src, no renderizar nada
  if (!src) {
    return null;
  }

  return (
    <LazyLoadImage
      src={imageSrc}
      alt={alt}
      className={`${className} ${!imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      effect="blur"
      onLoad={handleImageLoad}
      threshold={100}
      {...props}
    />
  );
};

export default OptimizedImage;
