'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Lato } from 'next/font/google';

const lato = Lato({ subsets: ['latin'], weight: ['400', '700', '900'] });

const ImageGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    {
      src: "/images/catalogos-digitales.jpg",
      alt: "Catálogos Digitales",
      subtitle: "Conoce nuestros",
      title: "CATÁLOGOS",
      description: "D I G I T A L E S",
      buttonText: "VER CATÁLOGOS",
      colSpan: "col-span-2 row-span-2"
    },
    {
      src: "/images/agendas.jpg",
      alt: "Agendas 2025",
      title: "AGENDAS",
      description: "2025",
      buttonText: "VER AGENDAS"
    },
    {
      src: "/images/tenis.jpg",
      alt: "Tennis Personalizados",
      subtitle: "Conoce los nuevos",
      title: "TENNIS",
      description: "PERSONALIZADOS",
      buttonText: "CONOCER MÁS"
    }
  ];

  return (
    <div className={`max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-8 ${lato.className}`}>
      <div className="grid grid-cols-3 grid-rows-2 gap-6 h-[600px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg ${image.colSpan || ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
            <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-40' : 'opacity-0'}`}></div>
            <div className={`absolute inset-0 flex flex-col ${index === 2 ? 'justify-start pt-6' : 'justify-end pb-6'} px-6`}>
              {image.subtitle && (
                <p className={`text-sm font-semibold text-white mb-1`}>
                  {image.subtitle}
                </p>
              )}
              <h2 className={`text-3xl font-black text-white leading-tight ${index === 1 ? 'mb-0' : 'mb-1'}`}>
                {image.title}
              </h2>
              <p className={`text-2xl ${index === 0 ? 'font-normal tracking-widest' : 'font-black'} text-white ${index === 1 ? 'mb-4' : 'mb-2'}`}>
                {image.description}
              </p>
              <button className={`bg-cyan-400 text-white px-6 py-2 text-sm uppercase font-bold tracking-wide hover:bg-cyan-500 transition-all duration-300 rounded ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                {image.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;