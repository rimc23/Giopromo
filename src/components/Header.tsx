'use client';

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
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
    FaChevronDown,
    FaYoutube
} from "react-icons/fa";

const categorias = [
    { id: 'agendas', nombre: 'AGENDAS' },
    { id: 'antiestres', nombre: 'ANTIESTRES' },
    { id: 'audio', nombre: 'AUDIO Y BOCINAS' },
    { id: 'bar', nombre: 'BAR' },
    { id: 'belleza', nombre: 'BELLEZA Y CUIDADO PERSONAL' },
    { id: 'boligrafos', nombre: 'BOLÍGRAFOS' },
    { id: 'bolsas', nombre: 'BOLSAS' },
    { id: 'camisas', nombre: 'CAMISAS Y PLAYERAS' },
];

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [categoriasOpen, setCategoriasOpen] = useState(false);
    const menuRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setCategoriasOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    return (
        <header className="bg-white shadow-md">
            <div className="bg-black text-white px-4 py-2 text-xs sm:text-sm lg:px-16">
                <div className="container mx-auto flex justify-end sm:justify-between items-center">
                    <p className="hidden sm:block">
                        Fabricación, importación y distribución de artículos promocionales personalizados
                    </p>
                    <div className="flex space-x-4">
                        <p className="pr-2">Whatsapp 33 3156 9962</p>
                        <FaYoutube className="hover:text-red-600 cursor-pointer" />
                        <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
                        <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                        <FaWhatsapp className="text-green-500 cursor-pointer" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <Link href="/" className="relative w-40 h-16">
                        <Image
                            src="/logo.svg"
                            alt="Company Logo"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </Link>

                    <button
                        className="md:hidden text-gray-600"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>

                    <div className="hidden md:flex flex-col items-end">
                        <div className="flex space-x-5 ml-auto">
                            <div className="flex space-x-2 items-center">
                                <FaPhoneAlt className="text-cyan-500" />
                                <div className="flex flex-col min-w-[84px] sm:min-w-[84px] md:min-w-[84px]">
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
                                <p className="text-sm text-gray-600 w-[150px]">Antonio Correa #2025, La Guadalupana, 44220</p>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className={`${menuOpen ? 'block' : 'hidden'} md:flex justify-between items-center py-4`}>
                    <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
                        <li><Link href="/" className="text-gray-600 hover:text-cyan-400">INICIO</Link></li>
                        <li><Link href="/nosotros" className="text-gray-600 hover:text-cyan-400">NOSOTROS</Link></li>
                        <li><Link href="/catalogos" className="text-gray-600 hover:text-cyan-400">CATÁLOGOS</Link></li>
                        <li><Link href="/productos" className="text-gray-600 hover:text-cyan-400">PRODUCTOS</Link></li>
                        <li><Link href="/contacto" className="text-gray-600 hover:text-cyan-400">CONTACTO</Link></li>
                        <li className="relative" ref={menuRef}>
                            <button
                                className="text-gray-600 hover:text-cyan-400 flex items-center"
                                onClick={() => setCategoriasOpen(!categoriasOpen)}
                            >
                                CATEGORÍAS <FaChevronDown className="ml-1" />
                            </button>
                            {categoriasOpen && (
                                <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
                                    {categorias.map((categoria) => (
                                        <Link
                                            key={categoria.id}
                                            href={`/categorias/${categoria.id}`}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[rgba(191,255,0,0.7)]"
                                        >
                                            {categoria.nombre}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                    </ul>
                    <div className="mt-4 md:mt-0 flex items-center">
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