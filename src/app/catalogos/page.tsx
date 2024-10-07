import React from 'react';
import Header from '../../components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const catalogos = [
  { id: 1, nombre: 'Catálogo General', imagen: '/api/placeholder/300/200' },
  { id: 2, nombre: 'Agendas 2025', imagen: '/api/placeholder/300/200' },
  { id: 3, nombre: 'Artículos de Oficina', imagen: '/api/placeholder/300/200' },
  { id: 4, nombre: 'Regalos Corporativos', imagen: '/api/placeholder/300/200' },
];

const CatalogosPage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Nuestros Catálogos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {catalogos.map((catalogo) => (
            <div key={catalogo.id} className="catalogo-item">
              <Image src={catalogo.imagen} alt={catalogo.nombre} width={300} height={200} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{catalogo.nombre}</h3>
                <button className="bg-cyan-400 text-white px-4 py-2 rounded hover:bg-cyan-500">
                  Ver Catálogo
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

export default CatalogosPage;