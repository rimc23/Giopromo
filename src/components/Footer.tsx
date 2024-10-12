import React from "react";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-start">
          {/* Logo and company info */}
          <div className="w-20 md:w-30 mb-4 md:mb-0 flex items-start">
            <Image src="/logo.svg" alt="Company Logo" width={60} height={60} />
          </div>
          <div className="w-full ml-4">
            <h2 className="text-lg font-bold text-cyan-500">
              ARTÍCULOS PROMOCIONALES EN TODO MÉXICO
            </h2>
            <p className="text-sm mt-2">
              Grupo GiPromo es una empresa mexicana que se dedica a la
              fabricación, importación y distribución de artículos
              promocionales. Desde nuestra apertura buscamos la excelencia en
              nuestros productos y procesos, para brindar la mejor experiencia a
              nuestros clientes.
            </p>
            <p className="text-sm mt-2">
              Contamos con más de 10 mil artículos promocionales, para todo tipo
              de clientes y/u ocasión; nos adaptamos a cualquier tipo de
              proyecto y/o presupuesto. Proporcionamos la certeza (según las
              necesidades) a nuestros clientes que sus solicitudes serán
              atendidas con amabilidad en tiempo y forma.
            </p>
          </div>

          {/* Contact information */}
          <div className="w-full md:w-2/3 md:pl-8 flex flex-col md:flex-row md:justify-end items-start md:items-center mt-4 md:mt-0">
            <div className="flex items-center mb-2 md:mb-0 md:mr-8">
              <FaMapMarkerAlt className="text-cyan-500 mr-2" />
              <span className="text-sm">
                Antonio Correa #2025, Col. La Guadalupana, C.P. 44220,
                Guadalajara, Jal. México
              </span>
            </div>
            <div className="flex flex-col mb-2 md:mb-0 md:mr-8 w-full">
              <div className="flex items-center">
                <FaPhone className="text-cyan-500 mr-2" />
                <span className="text-sm w-full">33 2003 0058</span>
              </div>
              <div className="flex items-center mt-1">
                <FaPhone className="text-cyan-500 mr-2" />
                <span className="text-sm w-full">33 2003 0059</span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center">
                <FaWhatsapp className="text-cyan-500 mr-2" />
                <span className="text-sm">33 3156 9962</span>
              </div>
              <div className="flex items-center mt-1">
                <FaEnvelope className="text-cyan-500 mr-2" />
                <span className="text-sm">info@gipromo.com.mx</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-700 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs">
          <span>Grupo Gi PROMO México © 2024 - Artículos promocionales</span>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-cyan-400">
              AVISO DE PRIVACIDAD
            </a>
            <a href="#" className="hover:text-cyan-400">
              MAPA DE NAVEGACIÓN
            </a>
            <div className="flex space-x-2">
              <FaYoutube className="hover:text-cyan-400 cursor-pointer" />
              <FaFacebookF className="hover:text-cyan-400 cursor-pointer" />
              <FaInstagram className="hover:text-cyan-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
