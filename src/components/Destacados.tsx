"use client";

import React, { useState } from "react";
import Image from "next/image";
// import Link from "next/link";

interface Producto {
    id: number;
    nombre: string;
    codigo: string;
    imagen: string;
    colores?: string[];
}

const productosDestacados: Producto[] = [
    {
      id: 1,
      nombre: "CILINDRO METÁLICO",
      codigo: "BB7101",
      imagen: "/images/CILINDRO DESTACADO.jpg",
        colores: ["black", "gray-500"]
    },
    {
      id: 2,
      nombre: "BOLÍGRAFO PLÁSTICO",
      codigo: "A2102",
      imagen: "/images/BOLIGRAFO NARANJA.jpg",
        colores: ["yellow-500", "blue-500", "black", "orange-500", "pink-500", "green-500"]
    },
    {
      id: 3,
      nombre: "DIARIO 2023",
      codigo: "AD2023",
      imagen: "/images/Diaria 2023.jpeg",
    },
];

const Destacados: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"novedades" | "destacados" | "masVendidos">("destacados");
    const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

    return (
        <section className="my-12 max-w-7xl mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">PROMOCIONALES DESTACADOS</h1>
            <p className="text-center text-gray-600 mb-6">Conoce nuestros Artículos Promocionales destacados</p>
            <div className="flex justify-center mb-8">
                {["NOVEDADES", "DESTACADOS", "MÁS VENDIDOS"].map((tab) => (
                    <button
                        key={tab}
                        className={`mx-4 font-semibold pb-2 ${
                            activeTab === tab.toLowerCase().replace(" ", "")
                                ? "text-black border-b-2 border-black"
                                : "text-gray-500"
                        }`}
                        onClick={() => setActiveTab(tab.toLowerCase().replace(" ", "") as "novedades" | "destacados" | "masVendidos")}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="flex justify-center items-stretch gap-8 flex-wrap">
                {productosDestacados.map((producto) => (
                    <div
                        key={producto.id}
                        className={`relative flex flex-col items-center w-64 p-4 transition-all duration-300 ${
                            hoveredProduct === producto.id ? 'bg-white shadow-lg' : ''
                        }`}
                        onMouseEnter={() => setHoveredProduct(producto.id)}
                        onMouseLeave={() => setHoveredProduct(null)}
                    >
                        <div className="mb-4 w-full h-64 relative">
                            <Image
                                src={producto.imagen}
                                alt={producto.nombre}
                                layout="fill"
                                objectFit="contain"
                                className="rounded-lg"
                            />
                        </div>
                        <h3 className="font-bold text-lg text-center mb-1">
                            {producto.nombre}
                        </h3>
                        <p className="text-gray-500 mb-4">Clave: {producto.codigo}</p>
                        {producto.colores && (
                            <div className="flex justify-center mb-4">
                                {producto.colores.map((color) => (
                                    <span key={color} className={`w-4 h-4 rounded-full bg-${color} mx-1`}></span>
                                ))}
                            </div>
                        )}
                        {hoveredProduct === producto.id && (
                            <>
                                <button className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition duration-300 mb-2 w-full">
                                    SELECCIONAR OPCIONES
                                </button>
                                <button className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Destacados;