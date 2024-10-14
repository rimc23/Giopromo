import { Producto } from "@/app/categorias/[categoriaId]/data/data";
import Link from "next/link";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";

interface Props {
  item: Producto;
}
export default function ProductCard({ item }: Props) {
  const [onHover, setOnHover] = useState(false);

  return (
    <Link
      href={`/productos/${item.codigo}`}
      className="transition-all duration-300"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <img src={item.imagen} alt="" />
      {item.colores ? (
        <div className={`${onHover ? 'flex' : 'hidden' } flex justify-center gap-1 p-2 `}>
          {item.colores.map((color, index) => (
            <div key={index} className={`w-4 h-4 rounded-full border ${color.class}`}></div>
          ))}
        </div>
      ) : null}
      <div className="text-sm text-center pb-3 mt-2">
        <p>{item.nombre}</p>
        <span className="text-gray-700">Clave: {item.codigo}</span>
      </div>
      <div className={`${onHover ? 'flex' : 'hidden' } justify-center items-center gap-1 text-white`}>
        <span className="bg-cyan-500 p-1">Ver Producto</span>
        <FaCartPlus className="bg-black  text-3xl p-1" />
      </div>
    </Link>
  );
}
