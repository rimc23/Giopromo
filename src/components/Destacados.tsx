"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const productosDestacados = [
  {
    id: 1,
    nombre: "CILINDRO METÁLICO",
    codigo: "BB7101",
    imagen: "/images/cilindro-metalico.jpg",
  },
  {
    id: 2,
    nombre: "BOLÍGRAFO PLÁSTICO",
    codigo: "A2102",
    imagen: "/images/boligrafo-plastico.jpg",
  },
  {
    id: 3,
    nombre: "DIARIA 2023",
    codigo: "AD2023",
    imagen: "/images/diaria-2023.jpg",
  },
];

const productosMasVendidos = [
  {
    id: 4,
    nombre: "TAZA PERSONALIZADA",
    codigo: "TZ1001",
    imagen: "/images/taza-personalizada.jpg",
  },
  {
    id: 5,
    nombre: "LLAVERO METÁLICO",
    codigo: "LL2001",
    imagen: "/images/llavero-metalico.jpg",
  },
  {
    id: 6,
    nombre: "GORRA BORDADA",
    codigo: "GB3001",
    imagen: "/images/gorra-bordada.jpg",
  },
];

const Destacados = () => {
  const [activeTab, setActiveTab] = useState("destacados");

  const productosActivos =
    activeTab === "destacados" ? productosDestacados : productosMasVendidos;

  return (
    <section className="my-12 max-w-7xl mx-auto px-4">
      <h1 className="text-lg md:text-xl lg:text-2xl text-gray-700 font-light leading-relaxed mb-8 max-w-4xl mx-auto text-center">
        Ofrecemos más de 10,000 artículos promocionales, adaptados a todo tipo
        de clientes, proyectos y presupuestos. Garantizamos una atención
        personalizada y entregas puntuales, asegurando la satisfacción de
        nuestros clientes en cada solicitud.
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Nuestros artículos promocionales destacados
      </h2>
      <div className="flex justify-center mb-8">
        <button
          className={`mr-4 font-bold pb-2 ${
            activeTab === "destacados"
              ? "text-cyan-500 border-b-2 border-cyan-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("destacados")}
        >
          DESTACADOS
        </button>
        <button
          className={`font-bold pb-2 ${
            activeTab === "masVendidos"
              ? "text-cyan-500 border-b-2 border-cyan-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("masVendidos")}
        >
          MÁS VENDIDOS
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productosActivos.map((producto) => (
          <div
            key={producto.id}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
          >
            <div className="mb-4 w-48 h-48 relative">
              <Image
                src={producto.imagen}
                alt={producto.nombre}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="font-bold text-lg text-center mb-2">
              {producto.nombre}
            </h3>
            <p className="text-gray-500 mb-4">{producto.codigo}</p>
            <Link
              href={`/productos/${producto.id}`}
              className="bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-600 transition duration-300"
            >
              VER PRODUCTO
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destacados;
