// Hero.tsx
"use client";

import React, { useState, useEffect } from 'react';

const images = [
  "/images/slider1.jpg",
  "/images/slider2.jpg",
  "/images/slider3.jpg",
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar automáticamente cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); // Limpiar intervalo al desmontar el componente
  }, []);

  // Funciones para cambiar la imagen manualmente
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-96 bg-cyan-400">
      <div className="flex overflow-hidden h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-1000 ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'
              }`}
            style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
          >
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-70 text-white p-4 rounded-full shadow-md hover:bg-gray-800 transition duration-300 ease-in-out"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-70 text-white p-4 rounded-full shadow-md hover:bg-gray-800 transition duration-300 ease-in-out"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>


      {/* Texto y botón de llamada a la acción */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-white text-3xl font-bold">ARTÍCULOS PROMOCIONALES A TU ALCANCE</h2>
          <p className="text-white mt-2">Dedicados a la fabricación, importación y distribución de artículos promocionales con tu branding.</p>
          <button className="mt-4 bg-white text-blue-500 px-6 py-2 rounded-full shadow-lg">
            SOLICITA UN PRESUPUESTO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
