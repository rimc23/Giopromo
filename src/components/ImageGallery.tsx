import React from 'react';
import Image from 'next/image';

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="col-span-2 lg:col-span-1 relative">
        <Image 
          src="https://static.vecteezy.com/system/resources/thumbnails/038/081/678/small_2x/textured-gray-paper-texture-background-photo.jpg" 
          alt="Catálogos Digitales" 
          fill
          style={{ objectFit: 'cover' }} // Usamos style para ajustar el fit de la imagen
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute bottom-4 left-4">
          <h2 className="text-2xl font-bold text-white mb-2">Conoce nuestros<br />CATÁLOGOS DIGITALES</h2>
          <button className="bg-cyan-400 text-white px-4 py-2 rounded">VER CATÁLOGOS</button>
        </div>
      </div>
      <div className="col-span-2 lg:col-span-1 grid grid-rows-2 gap-4">
        <div className="relative">
          <Image 
            src="https://static.vecteezy.com/system/resources/thumbnails/039/345/922/small/abstract-white-panorama-and-silver-are-light-pattern-gray-with-the-gradient-is-the-with-floor-wall-metal-texture-soft-tech-diagonal-background-black-dark-clean-modern-photo.jpg" 
            alt="Agendas 2025" 
            fill
            style={{ objectFit: 'cover' }} // Usamos style para ajustar el fit de la imagen
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute bottom-4 left-4">
            <h2 className="text-2xl font-bold text-white mb-2">AGENDAS 2025</h2>
            <button className="bg-cyan-400 text-white px-4 py-2 rounded">VER AGENDAS</button>
          </div>
        </div>
        <div className="relative">
          <Image 
            src="https://static.vecteezy.com/system/resources/thumbnails/039/345/922/small/abstract-white-panorama-and-silver-are-light-pattern-gray-with-the-gradient-is-the-with-floor-wall-metal-texture-soft-tech-diagonal-background-black-dark-clean-modern-photo.jpg" 
            alt="Tennis Personalizados" 
            fill
            style={{ objectFit: 'cover' }} // Usamos style para ajustar el fit de la imagen
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute bottom-4 left-4">
            <h2 className="text-2xl font-bold text-white mb-2">Conoce los nuevos<br />TENNIS PERSONALIZADOS</h2>
            <button className="bg-cyan-400 text-white px-4 py-2 rounded">CONOCER MÁS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
