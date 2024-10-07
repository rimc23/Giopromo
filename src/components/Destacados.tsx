import React from 'react';
import Image from 'next/image';

const productos = [
  { id: 1, nombre: 'CILINDRO METÁLICO', codigo: 'BB7101', imagen: '/api/placeholder/200/200' },
  { id: 2, nombre: 'BOLÍGRAFO PLÁSTICO', codigo: 'A2102', imagen: '/api/placeholder/200/200' },
  { id: 3, nombre: 'DIARIA 2023', codigo: 'AD2023', imagen: '/api/placeholder/200/200' },
];

const Destacados = () => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Nuestros artículos promocionales destacados</h2>
      <div className="flex justify-center mb-4">
        <button className="mr-4 font-bold">DESTACADOS</button>
        <button>MÁS VENDIDOS</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {productos.map((producto) => (
          <div key={producto.id} className="text-center">
            <Image
              src={producto.imagen}
              alt={producto.nombre}
              width={192}
              height={192}
              className="mb-2 w-48 h-48 object-cover"
            />
            <h3 className="font-bold text-center">{producto.nombre}</h3>
            <p className="text-gray-500">{producto.codigo}</p>
            {producto.id === 2 && (
              <a href="#" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded no-underline">
                VER PRODUCTO
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destacados;