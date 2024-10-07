import React from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Header from "@/components/Header";

const categorias = [
  { id: 'agendas', nombre: 'AGENDAS' },
  { id: 'antiestres', nombre: 'ANTIESTRES' },
  { id: 'audio', nombre: 'AUDIO Y BOCINAS' },
  { id: 'bar', nombre: 'BAR' },
  { id: 'belleza', nombre: 'BELLEZA Y CUIDADO PERSONAL' },
  { id: 'boligrafos', nombre: 'BOLÍGRAFOS' },
  { id: 'bolsas', nombre: 'BOLSAS' },
  { id: 'camisas', nombre: 'CAMISAS Y PLAYERAS' },
  // Añade más categorías según sea necesario
];

const CategoriasPage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Categorías de Productos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categorias.map((categoria) => (
            <Link 
              href={`/categorias/${categoria.id}`} 
              key={categoria.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold">{categoria.nombre}</h2>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CategoriasPage;