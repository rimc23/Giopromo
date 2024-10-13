'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';

interface Categoria {
    id: string;
    nombre: string;
    icon: string;
}

const categorias: Categoria[] = [
    { id: 'agendas', nombre: 'AGENDAS', icon: '/icons/agendas.svg' },
    { id: 'antiestres', nombre: 'ANTIESTRES', icon: '/icons/antiestres.svg' },
    { id: 'audio-y-bocinas', nombre: 'AUDIO Y BOCINAS', icon: '/icons/audioybocinas.svg' },
    { id: 'bar', nombre: 'BAR', icon: '/icons/bar.svg' },
    { id: 'belleza-y-cuidado', nombre: 'BELLEZA Y CUIDADO PERSONAL', icon: '/icons/belleza y cuidado.svg' },
    { id: 'boligrafos', nombre: 'BOLÍGRAFOS', icon: '/icons/boligrafos.svg' },
    { id: 'bolsas', nombre: 'BOLSAS', icon: '/icons/bolsas.svg' },
    { id: 'camisas', nombre: 'CAMISAS Y PLAYERAS', icon: '/icons/camisas.svg' },
    { id: 'cilindros', nombre: 'CILINDROS', icon: '/icons/cilindros.svg' },
    { id: 'deportes', nombre: 'DEPORTES', icon: '/icons/deportes.svg' },
    { id: 'entretenimiento', nombre: 'ENTRETENIMIENTO', icon: '/icons/entretenimiento.svg' },
    { id: 'escolar', nombre: 'ESCOLAR Y NIÑOS', icon: '/icons/escolar y niños.svg' },
    { id: 'gorras', nombre: 'GORRAS', icon: '/icons/gorras.svg' },
    { id: 'herramientas', nombre: 'HERRAMIENTAS Y AUTOMOVIL', icon: '/icons/herramientas y automovil.svg' },
    { id: 'hieleras', nombre: 'HIELERAS Y LONCHERAS', icon: '/icons/hieleras.svg' },
    { id: 'hogar', nombre: 'HOGAR', icon: '/icons/hogar.svg' },
    { id: 'libretas', nombre: 'LIBRETAS', icon: '/icons/libretas.svg' },
    { id: 'llaveros', nombre: 'LLAVEROS', icon: '/icons/llaveros.svg' },
    { id: 'maletas', nombre: 'MALETAS', icon: '/icons/maletas.svg' },
    { id: 'mochilas', nombre: 'MOCHILAS', icon: '/icons/mochilas.svg' },
    { id: 'oficina', nombre: 'OFICINA', icon: '/icons/oficina.svg' },
    { id: 'paraguas', nombre: 'PARAGUAS E IMPERMEABLES', icon: '/icons/paraguas.svg' },
    { id: 'portaretratos', nombre: 'PORTARETRATOS', icon: '/icons/portaretratos.svg' },
    { id: 'reconocimientos', nombre: 'RECONOCIMIENTOS', icon: '/icons/reconocimientos.svg' },
    { id: 'relojes', nombre: 'RELOJES', icon: '/icons/relojes.svg' },
    { id: 'salud', nombre: 'SALUD', icon: '/icons/salud.svg' },
    { id: 'tecnologia', nombre: 'TECNOLOGÍA', icon: '/icons/tecnologia.svg' },
    { id: 'termos', nombre: 'TERMOS TAZAS Y VASOS', icon: '/icons/termos y tazas.svg' },
    { id: 'viaje', nombre: 'VIAJE', icon: '/icons/viajes.svg' },
];

const Categories = () => {
    const [categoriasOpen, setCategoriasOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        setCategoriasOpen(true);
    };

    const handleMouseLeave = () => {
        setCategoriasOpen(false);
    };

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
        <div 
            className="relative" 
            ref={menuRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className={`
                    group flex items-center justify-center px-4 py-2 text-gray-700
                    transition-colors duration-300 ease-in-out
                    ${categoriasOpen ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 hover:text-white'}
                `}
                onClick={() => setCategoriasOpen(!categoriasOpen)}
                aria-expanded={categoriasOpen}
            >
                CATEGORÍAS 
                <FaChevronDown className={`
                    ml-2 transition-transform duration-300
                    ${categoriasOpen ? 'rotate-180' : 'group-hover:rotate-180'}
                `} />
            </button>
            {categoriasOpen && (
                <div className="absolute z-10 mt-0 w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] bg-white rounded-b-md shadow-lg p-4 left-0 sm:left-1/2 transform sm:-translate-x-1/2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-0">
                        {categorias.map((categoria, index) => (
                            <Link
                                key={categoria.id}
                                href={`/categorias/${categoria.id}`}
                                className={`
                                    flex items-center space-x-2 text-xs sm:text-sm text-gray-700 
                                    hover:bg-[rgba(191,255,0,0.7)] p-2 transition-colors duration-300
                                    ${index % 5 !== 4 ? 'border-r border-gray-200' : ''}
                                `}
                            >
                                <Image src={categoria.icon} alt={categoria.nombre} width={20} height={20} />
                                <span className="truncate">{categoria.nombre}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Categories;