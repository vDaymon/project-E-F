import { useState, useEffect } from 'react';

const useOptimizedImage = (originalSrc) => {
  const [imageSrc, setImageSrc] = useState(originalSrc);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Crear la ruta optimizada (WebP)
    const optimizedSrc = originalSrc.replace('/imgs/', '/imgs/optimized/').replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    // Verificar si el navegador soporta WebP
    const supportsWebP = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };

    // Función para probar si la imagen optimizada existe
    const testImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = src;
      });
    };

    const loadOptimizedImage = async () => {
      setIsLoading(true);
      setHasError(false);

      try {
        // Si el navegador soporta WebP, intentar cargar la versión optimizada
        if (supportsWebP()) {
          const optimizedExists = await testImage(optimizedSrc);
          if (optimizedExists) {
            setImageSrc(optimizedSrc);
            setIsLoading(false);
            return;
          }
        }

        // Si no hay versión optimizada o no se soporta WebP, usar la original
        const originalExists = await testImage(originalSrc);
        if (originalExists) {
          setImageSrc(originalSrc);
        } else {
          setHasError(true);
        }
      } catch (error) {
        console.error('Error loading image:', error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadOptimizedImage();
  }, [originalSrc]);

  return { imageSrc, isLoading, hasError };
};

export default useOptimizedImage;
