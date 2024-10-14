"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Color {
  name: string;
  class: string;
}

interface Producto {
  id: number;
  nombre: string;
  codigo: string;
  imagen: string;
  colores?: Color[];
}

export const productosDestacados: Producto[] = [
  {
    id: 1,
    nombre: "CILINDRO METÁLICO",
    codigo: "BB73101",
    imagen: "/images/CILINDRO DESTACADO.jpg",
    colores: [
      { name: "Negro", class: "bg-black" },
      { name: "Gris", class: "bg-gray-500" },
      { name: "Azul", class: "bg-blue-500" },
      { name: "Rojo", class: "bg-red-500" },
    ],
  },
  {
    id: 2,
    nombre: "BOLÍGRAFO PLÁSTICO",
    codigo: "A2433",
    imagen: "/images/BOLIGRAFO NARANJA.jpg",
    colores: [
      { name: "Negro", class: "bg-black" },
      { name: "Naranja", class: "bg-orange-500" },
      { name: "Rojo", class: "bg-red-500" },
      { name: "Amarillo", class: "bg-yellow-500" },
      { name: "Verde", class: "bg-green-500" },
      { name: "Gris", class: "bg-gray-300" },
    ],
  },
  {
    id: 3,
    nombre: "DIARIA 2023",
    codigo: "AD2023",
    imagen: "/images/Diaria 2023.jpeg",
    colores: [
      { name: "Rojo", class: "bg-red-500" },
    ],
  },
];

const Destacados = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="my-8 max-w-6xl mx-auto px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">
        PROMOCIONALES DESTACADOS
      </h1>
      <p className="text-center text-gray-600 text-sm mb-8">
        Conoce nuestros Artículos Promocionales destacados
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productosDestacados.map((producto) => (
          <div
            key={producto.id}
            className="bg-white rounded-lg overflow-hidden transition-all duration-300 transform hover:shadow-lg hover:scale-105"
            onMouseEnter={() => setHoveredProduct(producto.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="relative w-full" style={{height: '280px'}}>
              <Image
                src={producto.imagen}
                alt={producto.nombre}
                layout="fill"
                objectFit="contain"
                className="transition-opacity duration-300"
              />
              {hoveredProduct === producto.id && (
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-4">
                  {producto.colores && (
                    <div className="flex justify-center mb-3">
                      {producto.colores.map((color) => (
                        <div
                          key={color.name}
                          className={`w-4 h-4 rounded-full ${color.class} mx-0.5`}
                          title={color.name}
                        ></div>
                      ))}
                    </div>
                  )}
                  <Link href={`/productos/${producto.codigo}`}>
                    <button className="bg-sky-400 text-white px-6 py-2 text-sm font-semibold rounded hover:bg-sky-500 transition duration-300">
                      VER PRODUCTO
                    </button>
                  </Link>
                </div>
              )}
            </div>
            <div className="p-3 text-center">
              <h3 className="font-bold text-gray-700 text-sm mb-1">{producto.nombre}</h3>
              <p className="text-gray-400 text-xs">{producto.codigo}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destacados;