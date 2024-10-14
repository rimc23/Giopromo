"use client";

import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CategoriaPage = () => {
  const { categoriaId } = useParams();

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Productos de {Array.isArray(categoriaId) ? categoriaId[0].toUpperCase() : categoriaId.toUpperCase()}</h1>
        {/* You can fetch and display products related to the category here */}
        <p>ESTE ES EL TEMPLATE DE CATEGORIAS: {categoriaId}</p>
      </main>
      <Footer />
    </>
  );
};

export default CategoriaPage;
