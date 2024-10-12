import React from 'react';
// import Image from 'next/image';

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
      <div className="relative h-[400px]">
        {/* <Image
          src="https://static.vecteezy.com/system/resources/thumbnails/038/081/678/small_2x/textured-gray-paper-texture-background-photo.jpg"
          alt="Catálogos Digitales"
          layout="fill"
          objectFit="cover"
        /> */}
        <div className="absolute bottom-4 left-4 z-10">
          <h2 className="text-2xl font-bold text-white mb-2">
            Conoce nuestros<br />CATÁLOGOS DIGITALES
          </h2>
          <button className="bg-cyan-400 text-white px-4 py-2 rounded hover:bg-cyan-500 transition duration-300">
            VER CATÁLOGOS
          </button>
        </div>
      </div>
      <div className="grid grid-rows-2 gap-4">
        <div className="relative h-[200px]">
          {/* <Image
            src="https://static.vecteezy.com/system/resources/thumbnails/039/345/922/small/abstract-white-panorama-and-silver-are-light-pattern-gray-with-the-gradient-is-the-with-floor-wall-metal-texture-soft-tech-diagonal-background-black-dark-clean-modern-photo.jpg"
            alt="Agendas 2025"
            layout="fill"
            objectFit="cover"
          /> */}
          <div className="absolute bottom-4 left-4 z-10">
            <h2 className="text-2xl font-bold text-white mb-2">AGENDAS 2025</h2>
            <button className="bg-cyan-400 text-white px-4 py-2 rounded hover:bg-cyan-500 transition duration-300">
              VER AGENDAS
            </button>
          </div>
        </div>
        <div className="relative h-[200px]">
          {/* <Image
            src="https://static.vecteezy.com/system/resources/thumbnails/039/345/922/small/abstract-white-panorama-and-silver-are-light-pattern-gray-with-the-gradient-is-the-with-floor-wall-metal-texture-soft-tech-diagonal-background-black-dark-clean-modern-photo.jpg"
            alt="Tennis Personalizados"
            layout="fill"
            objectFit="cover"
          /> */}
          <div className="absolute bottom-4 left-4 z-10">
            <h2 className="text-2xl font-bold text-white mb-2">
              Conoce los nuevos<br />TENNIS PERSONALIZADOS
            </h2>
            <button className="bg-cyan-400 text-white px-4 py-2 rounded hover:bg-cyan-500 transition duration-300">
              CONOCER MÁS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;