import { productosDestacados2 } from "@/app/categorias/[categoriaId]/data/data";
import Link from "next/link";

export default function FeaturedProducts() {
  return (
    <div className="py-4">
      <h3 className="text-sm">PRODUCTOS RELACIONADOS</h3>
      <div className="flex flex-col">
        {productosDestacados2.map((item) => (
          <Link href={`/productos/${item.codigo}`} className="flex py-4">
          <div>
            <img src={item.imagen} alt="" className="w-20" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm">{item.nombre}</p>
            <span className="text-[11px] text-gray-700">{item.codigo}</span>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
