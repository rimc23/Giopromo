import React from 'react';
import Image from 'next/image';

const ImageGallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-20">
      <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[500px]">
        <div className="col-span-2 row-span-2 relative rounded-lg overflow-hidden">
          <Image
            src="/images/catalogos-digitales.jpg"
            alt="Catálogos Digitales"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="absolute bottom-6 left-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              Conoce nuestros<br />CATÁLOGOS DIGITALES
            </h2>
            <button className="bg-cyan-400 text-white px-4 py-2 rounded hover:bg-cyan-500 transition duration-300">
              VER CATÁLOGOS
            </button>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/images/agendas.jpg"
            alt="Agendas 2025"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="absolute inset-0 flex flex-col justify-between p-4">
            <h2 className="text-2xl font-bold text-white">AGENDAS 2025</h2>
            <button className="bg-cyan-400 text-white px-4 py-2 rounded hover:bg-cyan-500 transition duration-300 self-start">
              VER AGENDAS
            </button>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/images/tenis.jpg"
            alt="Tennis Personalizados"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="absolute inset-0 flex flex-col justify-between p-4">
            <h2 className="text-2xl font-bold text-white">
              Conoce los nuevos<br />TENNIS PERSONALIZADOS
            </h2>
            <button className="bg-cyan-400 text-white px-4 py-2 rounded hover:bg-cyan-500 transition duration-300 self-start">
              CONOCER MÁS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;