"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
// import { FaChevronLeft } from 'react-icons/fa'; 

const images = [
  "/banners/GiPromo_banner.jpg",
  "/banners/BIC_banner.jpg",
  "/banners/Norday_banner.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-gray-100">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={img}
            alt={`Banner ${index + 1}`}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority={index === 0}
          />
        </div>
      ))}
      <div className="absolute inset-0 flex flex-col justify-between">
        <div className="pt-8">
        </div>
        <div className="container mx-auto px-4 pb-8">
          <div className="max-w-2xl text-white">
            <h2 className="text-4xl font-bold mb-2">ARTÍCULOS PROMOCIONALES A TU ALCANCE</h2>
            <p className="text-xl mb-8">Dedicados a la fabricación, importación y distribución de artículos promocionales con tu branding al alcance de tus usuarios.</p>
          </div>
            <div className="flex justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 text-lg font-semibold hover:bg-cyan-100 transition-colors">
                SOLICITA UN PRESUPUESTO
              </button>
            </div>
        </div>
      </div>
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 rounded-full p-3 text-white hover:bg-opacity-75 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 rounded-full p-3 text-white hover:bg-opacity-75 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Hero;
