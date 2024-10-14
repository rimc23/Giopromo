import { color, materials, technique } from "@/app/categorias/[categoriaId]/data/data";
import FiltersInput from "./Secciones filtros/FiltersInput";

export default function Filters() {
  return (
    <div className="py-6">
        <h4 className="text-lg font-bold mb-2">Filtros</h4>
        <div className="flex flex-col gap-4">
            <FiltersInput data={materials} title="Materiales" color={false}/>
            <FiltersInput data={technique} title="Tecnicas" color={false}/>
            <FiltersInput data={color} title="Colores" color/>
        </div>
    </div>
  )
}
