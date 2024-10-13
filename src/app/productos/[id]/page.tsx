"use client"; // Marcar este componente como un componente cliente

import { useParams } from "next/navigation";
import { productosDestacados } from "@/components/Destacados"; // Importar la lista de productos destacados
import Image from "next/image"; // Importar Image de Next.js para optimización
import Header from "@/components/Header"; // Importar el Header
import Footer from "@/components/Footer"; // Importar el Footer

// Mapeo de colores a clases de Tailwind
const colorMap: { [key: string]: string } = {
  black: "bg-black",
  "gray-500": "bg-gray-500",
  "blue-500": "bg-blue-500",
  "red-500": "bg-red-500",
  "yellow-500": "bg-yellow-500",
  "orange-500": "bg-orange-500",
  "pink-500": "bg-pink-500",
  "green-500": "bg-green-500",
  "brown-500": "bg-brown-500",
  "gray-300": "bg-gray-300",
};

const ProductoDetalle = () => {
  const { id } = useParams(); // Obtener el parámetro 'id' desde la URL

  const producto = productosDestacados.find((prod) => prod.codigo === id);

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <>
      {/* Agregar el header */}
      <Header />

      <div className="container mx-auto p-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Imágenes adicionales a la izquierda */}
          <div className="flex flex-col space-y-4">
            {/* Imágenes pequeñas del producto */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative w-full h-24 border">
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-24 border">
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-24 border">
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full h-24 border">
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Imagen principal */}
          <div className="relative w-full h-96 mb-4">
            <Image
              src={producto.imagen}
              alt={producto.nombre}
              fill
              className="object-contain"
            />
          </div>

          {/* Columna derecha: Detalles del producto */}
          <div className="flex flex-col space-y-6">
            <h1 className="text-3xl font-bold mb-2">{producto.nombre}</h1>
            <p className="text-lg mb-4">Código: {producto.codigo}</p>
            <p className="mb-4">
              Boligrafo de plástico con recubrimiento de apariencia metálica.
              Cuenta con detalles geométricos y clip metálico. Mecanismo
              retráctil.
            </p>

            {/* Opciones de color */}
            <div className="mb-6">
              <label className="block mb-2 font-semibold">Seleccionar color:</label>
              <div className="flex space-x-2">
                {producto.colores &&
                  producto.colores.map((color) => (
                    <button
                      key={color.toString()}
                      className={`w-8 h-8 rounded-full border-2 border-gray-300 ${colorMap[color]}`}
                      aria-label={`Seleccionar color ${color}`}
                    />
                  ))}
              </div>
            </div>

            {/* Selección de técnica */}
            <div className="mb-6">
              <label className="block mb-2 font-semibold">Seleccionar técnica:</label>
              <div>
                <input type="checkbox" id="serigrafia" className="mr-2" />
                <label htmlFor="serigrafia">Serigrafía</label>
              </div>
            </div>

            {/* Selección de cantidad */}
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

            {/* Botón de cotizar */}
            <button className="w-full bg-cyan-500 text-white py-3 rounded hover:bg-cyan-600 transition-all">
              COTIZAR
            </button>
          </div>
        </div>

        {/* Productos relacionados */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">PRODUCTOS RELACIONADOS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <Image
                src="/images/A2425_2.jpg"
                alt="Nombre de Bolígrafo"
                width={200}
                height={150}
                className="object-contain"
              />
              <p className="mt-2 font-bold">NOMBRE DE BOLÍGRAFO</p>
              <p className="text-gray-500">A2425</p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/images/A2539.jpg"
                alt="Nombre de Bolígrafo"
                width={200}
                height={150}
                className="object-contain"
              />
              <p className="mt-2 font-bold">NOMBRE DE BOLÍGRAFO</p>
              <p className="text-gray-500">A2539</p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/images/PMT4806.jpg"
                alt="Nombre de Bolígrafo"
                width={200}
                height={150}
                className="object-contain"
              />
              <p className="mt-2 font-bold">NOMBRE DE BOLÍGRAFO</p>
              <p className="text-gray-500">PMT4806</p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/images/ESC4876.jpg"
                alt="Nombre de Bolígrafo"
                width={200}
                height={150}
                className="object-contain"
              />
              <p className="mt-2 font-bold">NOMBRE DE BOLÍGRAFO</p>
              <p className="text-gray-500">ESC4876</p>
            </div>
          </div>
        </div>
      </div>

      {/* Agregar el footer */}
      <Footer />
    </>
  );
};

export default ProductoDetalle;
