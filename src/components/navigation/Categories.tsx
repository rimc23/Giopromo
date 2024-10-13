'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

interface Categoria {
    id: string;
    nombre: string;
}

const categorias: Categoria[] = [
    { id: 'agendas', nombre: 'AGENDAS' },
    { id: 'antiestres', nombre: 'ANTIESTRES' },
    { id: 'audio', nombre: 'AUDIO Y BOCINAS' },
    { id: 'bar', nombre: 'BAR' },
    { id: 'belleza', nombre: 'BELLEZA Y CUIDADO PERSONAL' },
    { id: 'boligrafos', nombre: 'BOLÍGRAFOS' },
    { id: 'bolsas', nombre: 'BOLSAS' },
    { id: 'camisas', nombre: 'CAMISAS Y PLAYERAS' },
];

const Categories = () => {
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
    );
};

export default Categories;