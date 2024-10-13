import React from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaYoutube, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className="w-full h-[2px]"></div>
      <footer className="bg-gray-100 text-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-20 md:w-30 mb-4 md:mb-0 flex items-start">
          <Image src="/logo.svg" alt="Company Logo" width={60} height={60} />
          </div>
            <div className="flex md:w-1/2 mb-4 md:mb-0">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">ARTÍCULOS PROMOCIONALES EN TODO MÉXICO</h2>
                <p className="mb-2 text-sm">Grupo GiPromo es una empresa mexicana que se dedica a la fabricación, importación y distribución de artículos promocionales. Desde nuestra apertura buscamos la excelencia en nuestros productos y procesos, para brindar la mejor experiencia a nuestros clientes.</p>
                <p className='text-sm'>Contamos con más de 10 mil artículos promocionales, para todo tipo de clientes y ocasión; nos adaptamos a cualquier tipo de proyecto y presupuesto. Proporcionamos la certeza (según las necesidades) a nuestros clientes que sus solicitudes serán atendidas con amabilidad en tiempo y forma.</p>
              </div>
            </div>

            {/* Contact information */}
            <div className="hidden md:flex flex-col items-end">
              <div className="flex space-x-5 ml-auto">
                <div className="flex space-x-2 items-start">
                  <FaMapMarkerAlt className="text-cyan-500 mt-1" />
                  <p className="text-sm text-gray-600 w-[150px]">Antonio Correa #2025, Col. La Guadalupana, C.P. 44220, Guadalajara, Jal. México</p>
                </div>
                <div className='flex flex-col'>
                  <div className="flex space-x-2 items-start">
                    <FaPhoneAlt className="text-cyan-500 mt-1" />
                    <div className="flex flex-col min-w-[84px] sm:min-w-[84px] md:min-w-[84px]">
                      <p className="text-sm text-gray-600">33 2003 0058</p>
                      <p className="text-sm text-gray-600">33 2003 0059</p>
                    </div>
                  </div>
                  <div className="flex space-x-2 items-center pt-3">
                    <FaWhatsapp className='text-green-700' />
                    <p className='text-sm text-gray-600'>33 3156 9962</p>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <div className="flex space-x-2 items-center">
                    <FaEnvelope className="text-cyan-500" />
                    <p className="text-sm text-gray-600">info@gipromo.com.mx</p>
                  </div>
                  <div className="flex space-x-2 items-center pt-8">
                    <FaYoutube className='text-gray-400' />
                    <FaFacebookF className='text-gray-400' />
                    <FaInstagram className='text-gray-400' />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="bg-gray-700 text-white py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <span>Grupo Gi PROMO México © 2024 - Artículos promocionales</span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-cyan-400">AVISO DE PRIVACIDAD</a>
              <a href="#" className="hover:text-cyan-400">MAPA DE NAVEGACIÓN</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
