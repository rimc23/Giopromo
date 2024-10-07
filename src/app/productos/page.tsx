import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const productos = [
  { id: 1, nombre: 'CILINDRO METÁLICO', codigo: 'BB7101', imagen: '/api/placeholder/200/200' },
  { id: 2, nombre: 'BOLÍGRAFO PLÁSTICO', codigo: 'A2102', imagen: '/api/placeholder/200/200' },
  { id: 3, nombre: 'DIARIA 2023', codigo: 'AD2023', imagen: '/api/placeholder/200/200' },
  { id: 4, nombre: 'MOCHILA EJECUTIVA', codigo: 'MC5001', imagen: '/api/placeholder/200/200' },
  { id: 5, nombre: 'TAZA CERÁMICA', codigo: 'TZ3040', imagen: '/api/placeholder/200/200' },
  { id: 6, nombre: 'USB PERSONALIZADO', codigo: 'US8016', imagen: '/api/placeholder/200/200' },
];

const ProductosPage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Nuestros Productos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos.map((producto) => (
            <div key={producto.id} className="producto-item">
              <Image src={producto.imagen} alt={producto.nombre} width={200} height={200} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{producto.nombre}</h3>
                <p className="text-gray-600 mb-2">Código: {producto.codigo}</p>
                <button className="bg-cyan-400 text-white px-4 py-2 rounded hover:bg-cyan-500">
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductosPage;