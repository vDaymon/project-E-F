import React, { useEffect, useState } from 'react';

// Solo necesitas el PROPERTY_ID de Tawk.to
const PROPERTY_ID = '6841f00ddbadee190ffc15aa'; // Reemplázalo con el tuyo real

const TawkChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let tawkLoaded = false;
    if (!window.Tawk_API) {
      const s1 = document.createElement('script');
      s1.async = true;
      s1.src = `https://embed.tawk.to/${PROPERTY_ID}/default`;
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      document.body.appendChild(s1);
      s1.onload = () => {
        const waitForTawk = setInterval(() => {
          if (window.Tawk_API && typeof window.Tawk_API.maximize === 'function') {
            if (!tawkLoaded) {
              window.Tawk_API.hideWidget();
              setIsReady(true);
              tawkLoaded = true;
            }
            clearInterval(waitForTawk);
          }
        }, 200);
      };
    } else if (window.Tawk_API && typeof window.Tawk_API.maximize === 'function') {
      setIsReady(true);
    }
  }, []);

  const handleToggle = () => {
    if (window.Tawk_API && typeof window.Tawk_API.maximize === 'function') {
      if (isOpen) {
        window.Tawk_API.hideWidget();
      } else {
        window.Tawk_API.maximize();
      }
      setIsOpen(!isOpen);
    }
  };

  return (
    <div>
      <button
        onClick={handleToggle}
        disabled={!isReady}
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1000,
          background: isReady ? '#2563eb' : '#a0aec0',
          color: 'white',
          borderRadius: '50%',
          width: 56,
          height: 56,
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          border: 'none',
          fontSize: 28,
          cursor: isReady ? 'pointer' : 'not-allowed',
          opacity: isReady ? 1 : 0.6,
        }}
        aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat'}
      >
        💬
      </button>
    </div>
  );
};

export default TawkChat;
