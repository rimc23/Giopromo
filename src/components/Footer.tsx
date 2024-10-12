import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-start">
          {/* Logo */}
          <div className="w-full md:w-1/5 mb-4 md:mb-0">
            <div className="relative w-16 h-16">
              <Image
                src="/logo.svg"
                alt="Company Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          {/* Company information */}
          <div className="w-full md:w-4/5">
            <h2 className="text-lg font-bold text-cyan-500 mb-2">ARTÍCULOS PROMOCIONALES EN TODO MÉXICO</h2>
            <p className="mb-2 text-sm">Grupo GiPromo es una empresa mexicana que se dedica a la fabricación, importación y distribución de artículos promocionales. Desde nuestra apertura buscamos la excelencia en nuestros productos y procesos, para brindar la mejor experiencia a nuestros clientes.</p>
            <p className="text-sm">Contamos con más de 10 mil artículos promocionales, para todo tipo de clientes y/u ocasión; nos adaptamos a cualquier tipo de proyecto y/o presupuesto. Proporcionamos la certeza (según las necesidades) a nuestros clientes que sus solicitudes serán atendidas con amabilidad en tiempo y forma.</p>
          </div>
        </div>
        {/* Contact information */}
        <div className="flex flex-wrap mt-4 text-xs">
          <div className="w-full md:w-1/3 mb-2 md:mb-0 flex items-center">
            <span className="mr-2 text-cyan-500">📍</span>
            <span>Antonio Correa #2025, Col. La Guadalupana, C.P. 44220, Guadalajara, Jal. México</span>
          </div>
          <div className="w-full md:w-1/3 mb-2 md:mb-0">
            <div className="flex items-center mb-1">
              <span className="mr-2 text-cyan-500">📞</span>
              <span>33 2003 0058</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-cyan-500">📞</span>
              <span>33 2003 0059</span>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="flex items-center mb-1">
              <span className="mr-2 text-cyan-500">📱</span>
              <span>33 3156 9962</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-cyan-500">✉️</span>
              <span>info@gipromo.com.mx</span>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="bg-gray-700 text-white mt-4 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs">
          <span>Grupo Gi PROMO México © 2024 - Artículos promocionales</span>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-cyan-400">AVISO DE PRIVACIDAD</a>
            <a href="#" className="hover:text-cyan-400">MAPA DE NAVEGACIÓN</a>
            <div className="flex space-x-2">
              <span className="cursor-pointer hover:text-cyan-400">f</span>
              <span className="cursor-pointer hover:text-cyan-400">📷</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;