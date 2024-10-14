import { productosDestacados2 } from "@/app/categorias/[categoriaId]/data/data";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedProducts() {
  return (
    <div className="py-4">
      <h3 className="text-sm">PRODUCTOS RELACIONADOS</h3>
        {productosDestacados2.map((item) => (
          <Link key={item.codigo} href={`/productos/${item.codigo}`} className="flex py-4">
          <div>
            <Image src={item.imagen} alt={item.nombre} width={80} height={80} className="w-20" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm">{item.nombre}</p>
            <span className="text-[11px] text-gray-700">{item.codigo}</span>
          </div>
          </Link>
      ))}
    </div>
  );
}
