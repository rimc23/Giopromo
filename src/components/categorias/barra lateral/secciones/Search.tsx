import { categorias } from "@/app/categorias/[categoriaId]/data/data";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";

export default function Search() {
  const [isClose, setIsClose] = useState(true);
  const [wordSearch, setWordSearch] = useState("");

  const onChangeSeachInput = (e: any) => {
    setWordSearch(e.target.value);
  };
  return (
    <div className="py-12 pt-8 flex flex-col border-b-2 cursor-pointer">
      <h4 className="font-semibold mb-4">BUSCAR CATEGORÍA</h4>
      <div className="relative flex flex-col">
        <span
          className="border-2 p-2  text-gray-500 w-full"
          onClick={() => setIsClose(!isClose)}
        >
          Elige una categoria
        </span>
        {isClose ? (
          <FaChevronDown
            className="text-gray-500 text-sm absolute top-4 right-5"
            onClick={() => setIsClose(!isClose)}
          />
        ) : (
          <FaChevronUp
            className="text-gray-500 text-sm absolute top-4 right-5"
            onClick={() => setIsClose(!isClose)}
          />
        )}

        <div className={`${isClose ? "hidden" : "block"}`}>
          <div className="border-b-2 border-l-2 border-r-2">
            <div className="p-4 relative text-gray-500">
              <input
                type="text"
                className="border-2 w-full p-2"
                onChange={onChangeSeachInput}
              />
              <FaSearch className="absolute top-8 right-8" />
            </div>
          </div>
          <div className="border-b-2 border-l-2 border-r-2 h-[200px] overflow-auto">
            <ul className="text-gray-500 text-sm px-4">
              {categorias
                .filter((item) =>
                  item.nombre.toLowerCase().includes(wordSearch.toLowerCase())
                )
                .map((item) => (
                  <li key={item.id} className="p-2">
                    {item.nombre}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
