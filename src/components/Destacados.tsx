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
    codigo: "BB7101",
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
    codigo: "A2102",
    imagen: "/images/BOLIGRAFO NARANJA.jpg",
    colores: [
      { name: "Amarillo", class: "bg-yellow-500" },
      { name: "Azul", class: "bg-blue-500" },
      { name: "Negro", class: "bg-black" },
      { name: "Naranja", class: "bg-orange-500" },
      { name: "Rosa", class: "bg-pink-500" },
      { name: "Verde", class: "bg-green-500" },
      { name: "Rojo", class: "bg-red-500" },
    ],
  },
  {
    id: 3,
    nombre: "DIARIO 2023",
    codigo: "AD2023",
    imagen: "/images/Diaria 2023.jpeg",
    colores: [
      { name: "Marrón", class: "bg-amber-800" },
      { name: "Gris", class: "bg-gray-300" },
      { name: "Negro", class: "bg-black" },
    ],
  },
];

const Destacados = () => {
  const [activeTab, setActiveTab] = useState<
    "novedades" | "destacados" | "masVendidos"
  >("destacados");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="my-12 max-w-7xl mx-auto px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">
        PROMOCIONALES DESTACADOS
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Conoce nuestros Artículos Promocionales destacados
      </p>
      <div className="flex justify-center mb-8">
        {["NOVEDADES", "DESTACADOS", "MÁS VENDIDOS"].map((tab) => (
          <button
            key={tab}
            className={`mx-4 font-semibold pb-2 ${
              activeTab === tab.toLowerCase().replace(" ", "")
                ? "text-black border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() =>
              setActiveTab(
                tab.toLowerCase().replace(" ", "") as
                  | "novedades"
                  | "destacados"
                  | "masVendidos"
              )
            }
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {productosDestacados.map((producto) => (
          <div
            key={producto.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105"
            onMouseEnter={() => setHoveredProduct(producto.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="relative aspect-square w-full">
              <Image
                src={producto.imagen}
                alt={producto.nombre}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300"
              />
              {hoveredProduct === producto.id && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                  <Link href={`/productos/${producto.codigo}`}>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 mb-4">
                      VER PRODUCTO
                    </button>
                  </Link>
                  {producto.colores && (
                    <div className="flex flex-wrap justify-center">
                      {producto.colores.map((color) => (
                        <div
                          key={color.name}
                          className={`w-6 h-6 rounded-full ${color.class} m-1 border border-white`}
                          title={color.name}
                        ></div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{producto.nombre}</h3>
              <p className="text-gray-600">Clave: {producto.codigo}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destacados;