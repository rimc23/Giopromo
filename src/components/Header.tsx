'use client';

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaSearch,
    FaShoppingCart,
    FaBars,
    FaTimes,
    FaYoutube
} from "react-icons/fa";
import Categories from '../components/navigation/Categories';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md">
            <div className="bg-black text-white px-4 py-2 sm:text-sm lg:px-16">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Texto que solo se muestra en pantallas grandes */}
                    <p className="hidden lg:block">
                        Fabricación, importación y distribución de artículos promocionales personalizados
                    </p>

                    {/* Contenedor de íconos, centrados en pantallas pequeñas */}
                    <div className="flex space-x-4 items-center justify-center lg:justify-end w-full lg:w-auto">
                        {/* El enlace de Whatsapp con texto se oculta en pantallas pequeñas */}
                        <a
                            href="https://wa.me/523331569962"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden lg:block pr-2 hover:text-green-500 transition-colors duration-300"
                        >
                            Whatsapp 33 3156 9962
                        </a>
                        {/* Íconos de redes sociales */}
                        <FaYoutube className="hover:text-red-600 cursor-pointer" />
                        <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
                        <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                        <a
                            href="https://wa.me/523331569962"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Chatear por WhatsApp"
                        >
                            <FaWhatsapp className="text-green-500 hover:text-green-600 cursor-pointer" />
                        </a>
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Menú de hamburguesa y "MENU" visibles en pantallas <= 1023px */}
                    <div className="flex items-center lg:hidden">
                        <button
                            className="text-gray-600 mr-2"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                        <span className="text-gray-600 text-lg">MENU</span>
                    </div>

                    {/* Logo centrado */}
                    <Link href="/" className="relative w-40 h-16 mx-auto lg:mx-0">
                        <Image
                            src="/logo.svg"
                            alt="Company Logo"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </Link>

                    {/* Iconos de la lupa y carrito en pantallas <= 1023px */}
                    <div className="flex items-center space-x-4 lg:hidden">
                        <FaSearch
                            className="text-gray-600 text-2xl cursor-pointer"
                            onClick={() => setMenuOpen(!menuOpen)} // Esto abre/cierra el menú hamburguesa
                        />
                        <FaShoppingCart className="text-gray-600 text-2xl cursor-pointer" />
                    </div>


                    {/* Sección de contacto para pantallas > 1023px */}
                    <div className="hidden lg:flex flex-col items-end">
                        <div className="flex space-x-5 ml-auto">
                            <div className="flex space-x-2 items-center">
                                <FaPhoneAlt className="text-cyan-500" />
                                <div className="flex flex-col min-w-[84px] sm:min-w-[84px] lg:min-w-[84px]">
                                    <p className="text-sm text-gray-600">33 2003 0058</p>
                                    <p className="text-sm text-gray-600">33 2003 0059</p>
                                </div>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <FaEnvelope className="text-cyan-500" />
                                <p className="text-sm text-gray-600">info@gipromo.com.mx</p>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <FaMapMarkerAlt className="text-cyan-500" />
                                <p className="text-sm text-gray-600 w-[160px]">Antonio Correa #2025, La Guadalupana, 44220</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Menú de navegación */}
                <nav className={`${menuOpen ? 'block' : 'hidden'} lg:flex justify-between items-center py-4`}>
                    <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 space-y-2 lg:space-y-0">
                        <li><Link href="/" className="text-gray-600 hover:text-cyan-400">INICIO</Link></li>
                        <li><Link href="/nosotros" className="text-gray-600 hover:text-cyan-400">NOSOTROS</Link></li>
                        <li><Link href="/catalogos" className="text-gray-600 hover:text-cyan-400">CATÁLOGOS</Link></li>
                        <li><Link href="/tecnicas" className="text-gray-600 hover:text-cyan-400">TÉCNICAS</Link></li>
                        <li><Link href="/contacto" className="text-gray-600 hover:text-cyan-400">CONTACTO</Link></li>
                        <li className="lg:ml-4"><Categories /></li>
                    </ul>
                    <div className="mt-4 lg:mt-0 flex items-center">
                        <div className="relative flex-grow mr-4 w-[300px]">
                            <input
                                type="text"
                                placeholder="Buscar"
                                className="w-full py-2 px-4 border rounded-full"
                            />
                            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        <FaShoppingCart className="text-gray-600 text-2xl cursor-pointer" />
                    </div>
                </nav>
            </div>


        </header>
    );
};

export default Header;