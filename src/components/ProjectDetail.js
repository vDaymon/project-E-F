import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const fallbackImage = 'https://images.unsplash.com/photo-1529429617124-aee711a2b4aa?auto=format&fit=crop&w=1200&q=80';

const ProjectDetail = ({ project, onClose }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const images = useMemo(() => {
    if (!project) return [];
    if (Array.isArray(project.images) && project.images.length > 0) {
      return project.images;
    }
    if (project.image) {
      return [project.image];
    }
    return [fallbackImage];
  }, [project]);

  useEffect(() => {
    if (project) {
      setCurrentIndex(0);
      setDirection(0);
    }
  }, [project]);

  const handleNext = useCallback(() => {
    if (images.length <= 1) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images]);

  const handlePrev = useCallback(() => {
    if (images.length <= 1) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images]);

  useEffect(() => {
    if (!project) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
      if (event.key === 'ArrowRight') {
        handleNext();
      }
      if (event.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, handleNext, handlePrev, onClose]);

  if (!project) return null;

  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  const getPosition = (index) => {
    if (index === currentIndex) return 'center';
    if (images.length === 1) return 'hidden';
    if (images.length === 2) return 'side';
    if (index === prevIndex) return 'left';
    if (index === nextIndex) return 'right';
    return 'hidden';
  };

  const renderSlide = (image, index) => {
    const position = getPosition(index);
    if (position === 'hidden') {
      return null;
    }

    const baseClasses = {
      center: 'w-full md:w-[60%] h-[220px] sm:h-[320px] md:h-[460px] rounded-3xl shadow-2xl',
      left: 'hidden md:block md:w-[18%] md:h-[240px] rounded-2xl opacity-60',
      right: 'hidden md:block md:w-[18%] md:h-[240px] rounded-2xl opacity-60',
      side: 'hidden md:block md:w-[22%] md:h-[260px] rounded-2xl opacity-60'
    };

    const variant = {
      center: { scale: 1, opacity: 1, x: 0 },
      left: { scale: 0.8, opacity: 0.45, x: -60 },
      right: { scale: 0.8, opacity: 0.45, x: 60 },
      side: { scale: 0.8, opacity: 0.55, x: 0 }
    };

    return (
      <motion.div
        key={`${image}-${index}`}
        layout
        animate={variant[position]}
        transition={{ type: 'spring', stiffness: 260, damping: 30 }}
        className={`overflow-hidden ${baseClasses[position] ?? ''}`}
      >
        <img
          src={image}
          alt={`${project.title} ${index + 1}`}
          className="w-full h-full object-cover"
          onError={(event) => {
            event.target.onerror = null;
            event.target.src = fallbackImage;
          }}
        />
      </motion.div>
    );
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.div
        className="relative z-10 w-full max-w-6xl px-4 md:px-6 py-6 md:py-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <div
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl max-h-[90vh] flex flex-col"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex justify-end p-4">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-200 transition-colors"
              aria-label={t.closeModal ?? 'Cerrar'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 sm:px-6 pb-6 sm:pb-8">
            <div className="mb-6 pt-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center md:text-left">{project.title}</h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 text-xs sm:text-sm">
                {project.location && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full">
                    {t.projectLocation}: {project.location}
                  </span>
                )}
                {project.type && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full">
                    {t.projectType}: {project.type}
                  </span>
                )}
                {project.year && (
                  <span className="px-3 py-1 bg-blue-50 text-blue-900 rounded-full">
                    {t.projectYear}: {project.year}
                  </span>
                )}
              </div>
            </div>

            <div className="relative flex items-center justify-center gap-3 sm:gap-4">
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg text-gray-700 hover:bg-white"
                  aria-label={t.carouselPrevious ?? 'Anterior'}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              <div className="flex w-full items-center justify-center gap-2 sm:gap-4 md:gap-6">
                {images.map((image, index) => renderSlide(image, index))}
              </div>

              {images.length > 1 && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg text-gray-700 hover:bg-white"
                  aria-label={t.carouselNext ?? 'Siguiente'}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>

            <div className="mt-6 md:hidden flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white"
                aria-label={t.carouselPrevious ?? 'Anterior'}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="w-40 h-56 sm:w-48 sm:h-64 overflow-hidden rounded-3xl shadow-xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={images[currentIndex]}
                    src={images[currentIndex]}
                    initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="w-full h-full object-cover"
                    alt={`${project.title} ${currentIndex + 1}`}
                    onError={(event) => {
                      event.target.onerror = null;
                      event.target.src = fallbackImage;
                    }}
                  />
                </AnimatePresence>
              </div>
              <button
                type="button"
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white"
                aria-label={t.carouselNext ?? 'Siguiente'}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {images.length > 1 && (
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {images.map((image, index) => (
                  <button
                    key={`thumb-${image}-${index}`}
                    type="button"
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`h-14 sm:h-16 w-20 sm:w-24 overflow-hidden rounded-xl border-2 transition-all ${
                      index === currentIndex ? 'border-blue-600 shadow-lg' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                    aria-label={`${t.projectGallery} ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`${project.title} thumbnail ${index + 1}`}
                      className="h-full w-full object-cover"
                      onError={(event) => {
                        event.target.onerror = null;
                        event.target.src = fallbackImage;
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;