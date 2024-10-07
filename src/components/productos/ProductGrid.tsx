import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const products = [
  { id: 'A2433', name: 'Bolígrafo Plástico', image: '/images/boligrafo-plastico.jpg' },
  { id: 'AD2023', name: 'Cilindro Metálico', image: '/images/cilindro-metalico.jpg' },
  { id: 'BB73101', name: 'Libreta', image: '/images/libreta.jpg' },
  // Agrega más productos según sea necesario
];

const ProductGrid = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {products.map((product) => (
      <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
        <Image src={product.image} alt={product.name} width={300} height={160} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-2">Código: {product.id}</p>
          <Link href={`/productos/${product.id}`} className="text-blue-600 hover:underline">
            Ver Detalles
          </Link>
        </div>
      </div>
    ))}
  </div>
);

export default ProductGrid;
