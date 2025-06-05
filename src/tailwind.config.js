js
module.exports = {
  content: ["./index.html", "./src//*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'bounce': 'bounce 2s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
}


/* INSTRUCCIONES PARA AGREGAR EL VIDEO DESPUÉS:
1. Crear carpeta: /public/videos/
2. Subir tu video como: hero-video.mp4
3. Reemplazar el bloque marcado por:

<video 
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/videos/hero-video.mp4" type="video/mp4" />
</video>
*/

// DONE