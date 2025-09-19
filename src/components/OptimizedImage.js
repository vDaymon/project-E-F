import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useOptimizedImage from '../hooks/useOptimizedImage';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = '/imgs/placeholder.jpg',
  ...props 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { imageSrc, isLoading, hasError } = useOptimizedImage(src);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-sm">Imagen no disponible</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={`bg-gray-200 animate-pulse flex items-center justify-center ${className}`}>
        <div className="w-8 h-8 bg-gray-300 rounded"></div>
      </div>
    );
  }

  return (
    <LazyLoadImage
      src={imageSrc}
      alt={alt}
      className={`${className} ${!imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      effect="blur"
      placeholderSrc={placeholder}
      onLoad={handleImageLoad}
      threshold={100}
      {...props}
    />
  );
};

export default OptimizedImage;
