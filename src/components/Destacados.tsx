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
  const [selectedColors, setSelectedColors] = useState<{ [key: number]: string }>(
    {}
  );

  const handleColorSelect = (productId: number, colorName: string) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: colorName }));
  };

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
      <div className="flex justify-center items-stretch gap-8 flex-wrap">
        {productosDestacados.map((producto) => (
          <Link
            href={`/productos/${producto.codigo}`}
            key={producto.id}
            passHref
          >
            <div
              className="relative w-64 h-96 p-4 transition-all duration-300 cursor-pointer hover:bg-white hover:shadow-lg"
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
              {hoveredProduct === producto.id && producto.colores && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center flex-wrap">
                  {producto.colores.map((color) => (
                    <Link
                      key={color.name}
                      href={`/productos/${producto.codigo}?color=${encodeURIComponent(
                        color.name
                      )}`}
                      passHref
                    >
                      <div
                        className={`w-6 h-6 rounded-full ${
                          color.class
                        } m-1 hover:shadow-md transition duration-300 cursor-pointer ${
                          selectedColors[producto.id] === color.name
                            ? "ring-2 ring-offset-2 ring-gray-500"
                            : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleColorSelect(producto.id, color.name);
                        }}
                        title={color.name}
                      ></div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Destacados;