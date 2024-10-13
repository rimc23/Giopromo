"use client"; // Marcar este componente como un componente cliente

import { useParams } from "next/navigation";
import { productosDestacados } from "@/components/Destacados"; // Importar la lista de productos destacados

const ProductoDetalle = () => {
  const { id } = useParams(); // Obtener el parámetro 'id' desde la URL

  const producto = productosDestacados.find((prod) => prod.codigo === id);

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{producto.nombre}</h1>
      <img src={producto.imagen} alt={producto.nombre} className="mb-4" />
      <p>Clave: {producto.codigo}</p>
      {producto.colores && (
        <div className="flex space-x-2">
          {producto.colores.map((color) => (
            <span key={color} className={`w-4 h-4 rounded-full bg-${color}`}></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductoDetalle;
