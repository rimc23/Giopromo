'use client';

import React, { useState, useEffect } from 'react';

const images = [
  "/images/slider1.jpg",
  "/images/slider2.jpg",
  "/images/slider3.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 md:h-96 bg-cyan-400 overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${images.length * 100}%` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-white text-2xl md:text-4xl font-bold mb-2 md:mb-4">ARTÍCULOS PROMOCIONALES A TU ALCANCE</h2>
        <p className="text-white text-sm md:text-base mb-4 md:mb-6">Dedicados a la fabricación, importación y distribución de artículos promocionales con tu branding.</p>
        <button className="bg-white text-cyan-500 px-6 py-2 rounded-full shadow-lg hover:bg-cyan-100 transition duration-300">
          SOLICITA UN PRESUPUESTO
        </button>
      </div>
    </div>
  );
};

export default Hero;