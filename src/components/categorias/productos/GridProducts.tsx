import { productosDestacados } from "@/app/categorias/[categoriaId]/data/data";
import ProductCard from "./ProductCard";

export default function GridProducts() {
  return <div className="grid grid-cols-2 py-6 gap-y-8 gap-x-2 items-start md:grid-cols-3 lg:grid-cols-4">{
    productosDestacados.map((item) => (
        <ProductCard key={item.id} item={item} />
    )) }</div>;
}
