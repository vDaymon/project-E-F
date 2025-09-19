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
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      } catch (e) {
        return false;
      }
    };

    const loadImage = async () => {
      setIsLoading(true);
      setHasError(false);

      try {
        // Primero intentar cargar la imagen optimizada si el navegador soporta WebP
        if (supportsWebP()) {
          try {
            const response = await fetch(optimizedSrc, { method: 'HEAD' });
            if (response.ok) {
              setImageSrc(optimizedSrc);
              setIsLoading(false);
              return;
            }
          } catch (e) {
            // Si falla, continuar con la original
          }
        }

        // Usar la imagen original como fallback
        setImageSrc(originalSrc);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading image:', error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    loadImage();
  }, [originalSrc]);

  return { imageSrc, isLoading, hasError };
};

export default useOptimizedImage;
