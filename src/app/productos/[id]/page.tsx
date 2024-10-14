"use client";

import { useParams } from "next/navigation";
import { productosDestacados } from "@/components/Destacados";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProductoDetalle = () => {
  const { id } = useParams();

  const producto = productosDestacados.find((prod) => prod.codigo === id);

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="relative w-full h-24 border">
                  <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full h-96 mb-4">
            <Image
              src={producto.imagen}
              alt={producto.nombre}
              fill
              className="object-contain"
            />
          </div>

          <div className="flex flex-col space-y-6">
            <h1 className="text-3xl font-bold mb-2">{producto.nombre}</h1>
            <p className="text-lg mb-4">Código: {producto.codigo}</p>
            <p className="mb-4">
              Boligrafo de plástico con recubrimiento de apariencia metálica.
              Cuenta con detalles geométricos y clip metálico. Mecanismo
              retráctil.
            </p>

            <div className="mb-6">
              <label className="block mb-2 font-semibold">Seleccionar color:</label>
              <div className="flex space-x-2">
                {producto.colores &&
                  producto.colores.map((color) => (
                    <button
                      key={color.name}
                      className={`w-8 h-8 rounded-full border-2 border-gray-300 ${color.class}`}
                      aria-label={`Seleccionar color ${color.name}`}
                    />
                  ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-semibold">Seleccionar técnica:</label>
              <div>
                <input type="checkbox" id="serigrafia" className="mr-2" />
                <label htmlFor="serigrafia">Serigrafía</label>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <button className="px-4 py-2 bg-gray-200">-</button>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-12 text-center border-2 border-gray-300 mx-2"
              />
              <button className="px-4 py-2 bg-gray-200">+</button>
            </div>

            <button className="w-full bg-cyan-500 text-white py-3 rounded hover:bg-cyan-600 transition-all">
              COTIZAR
            </button>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">PRODUCTOS RELACIONADOS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { src: "/images/A2425_2.jpg", code: "A2425" },
              { src: "/images/A2539.jpg", code: "A2539" },
              { src: "/images/PMT4806.jpg", code: "PMT4806" },
              { src: "/images/ESC4876.jpg", code: "ESC4876" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={item.src}
                  alt="Nombre de Bolígrafo"
                  width={200}
                  height={150}
                  className="object-contain"
                />
                <p className="mt-2 font-bold">NOMBRE DE BOLÍGRAFO</p>
                <p className="text-gray-500">{item.code}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductoDetalle;