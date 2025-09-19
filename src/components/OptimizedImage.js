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
            console.log('Canvas WebP test passed');
            resolve(true);
            return;
          }
        } catch (e) {
          console.log('Canvas WebP test failed:', e);
        }

        // Si canvas falla, probar con una imagen real
        const webpImage = new Image();
        webpImage.onload = () => {
          console.log('Image WebP test passed');
          resolve(true);
        };
        webpImage.onerror = () => {
          console.log('Image WebP test failed');
          resolve(false);
        };
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
      // Detectar Safari específicamente
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      console.log('Browser detected:', navigator.userAgent);
      console.log('Is Safari:', isSafari);
      
      const webpSupported = await supportsWebP();
      console.log('WebP support check result:', webpSupported);
      
      // Si el navegador soporta WebP, intentar cargar la versión optimizada
      if (webpSupported) {
        console.log('Browser supports WebP, checking optimized image:', optimizedSrc);
        const exists = await checkImageExists(optimizedSrc);
        if (exists) {
          console.log('Using optimized WebP image:', optimizedSrc);
          setImageSrc(optimizedSrc);
          return;
        } else {
          console.log('Optimized image not found, using original:', src);
        }
      } else {
        console.log('Browser does not support WebP, using original:', src);
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
