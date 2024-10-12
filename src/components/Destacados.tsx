"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const productosDestacados = [
  {
    id: 1,
    nombre: "CILINDRO METÁLICO",
    codigo: "BB7101",
    imagen: "/images/CILINDRO DESTACADO.jpg",
  },
  {
    id: 2,
    nombre: "BOLÍGRAFO PLÁSTICO",
    codigo: "A2102",
    imagen: "/images/BOLIGRAFO NARANJA.jpg",
  },
  {
    id: 3,
    nombre: "DIARIA 2023",
    codigo: "AD2023",
    imagen: "/images/Diaria 2023.jpeg",
  },
];

const Destacados = () => {
  const [activeTab, setActiveTab] = useState("destacados");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="my-12 max-w-7xl mx-auto px-4">
      <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-light leading-relaxed mb-12 max-w-4xl mx-auto text-center">
        Ofrecemos más de <span className="font-bold">10,000</span> artículos promocionales, adaptados a todo tipo de clientes, proyectos y presupuestos. Garantizamos una atención personalizada y entregas puntuales, asegurando la satisfacción de nuestros clientes en cada solicitud.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Nuestros artículos promocionales destacados
      </h2>
      <div className="flex justify-center mb-8">
        <button
          className={`mr-4 font-bold pb-2 ${
            activeTab === "destacados"
              ? "text-black border-b-2 border-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("destacados")}
        >
          DESTACADOS
        </button>
        <button
          className={`font-bold pb-2 ${
            activeTab === "masVendidos"
              ? "text-black border-b-2 border-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("masVendidos")}
        >
          MÁS VENDIDOS
        </button>
      </div>
      <div className="flex justify-center items-stretch gap-8">
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
            <p className="text-gray-500 mb-4">{producto.codigo}</p>
            {producto.id === 2 && (
              <div className="flex justify-center mb-4">
                <span className="w-4 h-4 rounded-full bg-black mx-1"></span>
                <span className="w-4 h-4 rounded-full bg-red-500 mx-1"></span>
                <span className="w-4 h-4 rounded-full bg-blue-500 mx-1"></span>
                <span className="w-4 h-4 rounded-full bg-orange-500 mx-1"></span>
                <span className="w-4 h-4 rounded-full bg-green-500 mx-1"></span>
              </div>
            )}
            {hoveredProduct === producto.id && (
              <Link
                href={`/productos/${producto.id}`}
                className="absolute bottom-4 bg-cyan-400 text-white px-6 py-2 rounded hover:bg-cyan-500 transition duration-300"
              >
                VER PRODUCTO
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destacados;