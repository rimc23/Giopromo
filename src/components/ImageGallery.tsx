import React from 'react';


// Definiendo un componente funcional llamado ImageGallery usando React.FC
const ImageGallery = () => {
    return (
        <div className="grid grid-cols-2 gap-4 p-4">
          <div className="col-span-2 lg:col-span-1 relative">
            <img 
              src="https://static.vecteezy.com/system/resources/thumbnails/038/081/678/small_2x/textured-gray-paper-texture-background-photo.jpg" 
              alt="Catálogos Digitales" 
              className="w-full h-auto"
            />
            <div className="absolute bottom-4 left-4">
              <h2 className="text-2xl font-bold text-white mb-2">Conoce nuestros<br />CATÁLOGOS DIGITALES</h2>
              <button className="bg-cyan-400 text-white px-4 py-2 rounded">VER CATÁLOGOS</button>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 grid grid-rows-2 gap-4">
            <div className="relative">
              <img 
                src="https://static.vecteezy.com/system/resources/thumbnails/039/345/922/small/abstract-white-panorama-and-silver-are-light-pattern-gray-with-the-gradient-is-the-with-floor-wall-metal-texture-soft-tech-diagonal-background-black-dark-clean-modern-photo.jpg" 
                alt="Agendas 2025" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <h2 className="text-2xl font-bold text-white mb-2">AGENDAS 2025</h2>
                <button className="bg-cyan-400 text-white px-4 py-2 rounded">VER AGENDAS</button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/039/345/922/small/abstract-white-panorama-and-silver-are-light-pattern-gray-with-the-gradient-is-the-with-floor-wall-metal-texture-soft-tech-diagonal-background-black-dark-clean-modern-photo.jpg" 
                alt="Tennis Personalizados" 
                className="w-full h-full object-cover"
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
