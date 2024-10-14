import { FaTimes } from "react-icons/fa";
import Search from "./secciones/Search";
import Filters from "./secciones/Filters";
import { MouseEventHandler } from "react";

interface Props {
  isCloseBar: boolean;
  closeBar: MouseEventHandler<any>;
}

export default function FilterBarMobile({ isCloseBar, closeBar }: Props) {
  return (
    <div
      className={`${
        isCloseBar ? "hidden" : "flex"
      } flex-col fixed inset-0 bg-black bg-opacity-70 z-10`}
    >
      <div className=" w-[300px] h-screen bg-white p-4 overflow-auto">
        <div className="flex justify-end  text-gray-600  border-b border-b-gray-200 pb-6 pt-2 ">
          <div className="flex items-center gap-3 cursor-pointer"onClick={closeBar}>
            <p className="font-bold " >
              CERRAR
            </p>
            <FaTimes />
          </div>
        </div>
        <Search />
        <Filters />
      </div>
    </div>
  );
}
