import Link from "next/link";
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";

const Header = () => (
  <header>
    {/* Barra superior (Información de contacto y redes sociales) */}
    <div className="bg-black text-white flex justify-between items-center px-8 py-2 text-sm">
      <p>
        Fabricación, importación y distribución de artículos promocionales
        personalizados
      </p>
      <div className="flex space-x-4">
        <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
        <FaInstagram className="hover:text-gray-400 cursor-pointer" />
        <FaWhatsapp className="hover:text-gray-400 cursor-pointer" />
      </div>
    </div>

    <div className="grid grid-cols-2">
      {/* Logo arriba del menú de navegación */}
      <div>
        <div className="flex container py-4">
          {/* Espacio para el logo (Puedes reemplazar este div con una imagen) */}
          <div className="w-24 h-24 bg-gray-200">
            {" "}
            {/* Aquí iría el logo */}
          </div>
        </div>

        {/* Menú de navegación */}
        <nav className="flex space-x-6 bg-white py-4">
          <Link href="/" className="text-gray-600 hover:text-cyan-400">
            INICIO
          </Link>
          <Link href="/nosotros" className="text-gray-600 hover:text-cyan-400">
            NOSOTROS
          </Link>
          <Link href="/catalogos" className="text-gray-600 hover:text-cyan-400">
            CATÁLOGOS
          </Link>
          <Link href="/productos" className="text-gray-600 hover:text-cyan-400">
            PRODUCTOS
          </Link>
          <Link href="/contacto" className="text-gray-600 hover:text-cyan-400">
            CONTACTO
          </Link>
          <div className="relative">
            <button className="text-gray-600 hover:text-cyan-400">
              CATEGORÍAS
            </button>
          </div>
        </nav>
      </div>

      {/* Información de contacto */}
      <div className="pt-4">
        {/* Información de contacto */}
        <div className="flex justify-between items-center px-8 py-4 bg-white">
          {/* Información de contacto a la izquierda */}
          <div className="flex space-x-6">
            <div className="flex space-x-2 items-center">
              <FaPhoneAlt className="text-blue-500" />
              <p className="text-sm text-gray-600">33 2003 0058</p>
              <p className="text-sm text-gray-600">33 2003 0059</p>
            </div>
            <div className="flex space-x-2 items-center">
              <FaEnvelope className="text-blue-500" />
              <p className="text-sm text-gray-600">info@gipromo.com.mx</p>
            </div>
            <div className="flex space-x-2 items-center">
              <FaMapMarkerAlt className="text-blue-500" />
              <p className="text-sm text-gray-600">
                Antonio Correa #2025, La Guadalupana
              </p>
            </div>
          </div>
        </div>

        {/* Barra de búsqueda e icono de carrito (debajo de los datos de contacto) */}
        <div className="flex justify-between items-center px-8 py-4 pt-10 bg-white">
          {/* Barra de búsqueda */}
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 flex-grow">
            <input
              type="text"
              placeholder="Buscar"
              className="outline-none text-sm text-gray-600 w-full"
            />
            <FaSearch className="text-gray-600 ml-2" />
          </div>

          {/* Icono de carrito */}
          <FaShoppingCart className="text-gray-600 text-lg cursor-pointer ml-6" />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
