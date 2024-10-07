import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const catalogs = [
  { id: 1, title: 'Catálogo General', image: '/images/catalogo-general.jpg' },
  { id: 2, title: 'Agendas 2025', image: '/images/agendas-2025.jpg' },
  { id: 3, title: 'Artículos de Oficina', image: '/images/articulos-oficina.jpg' },
  // Agrega más catálogos según sea necesario
];

const CatalogosList = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {catalogs.map((catalog) => (
      <div key={catalog.id} className="catalog-item">
        <Image src={catalog.image} alt={catalog.title} width={500} height={192} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{catalog.title}</h3>
          <Link href={`/catalogos/${catalog.id}`} className="text-blue-600 hover:underline">
            Ver Catálogo
          </Link>
        </div>
      </div>
    ))}
  </div>
);

export default CatalogosList;
