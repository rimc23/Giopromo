"use client";

import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterBar from "@/components/categorias/barra lateral/FilterBar";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import GridProducts from "@/components/categorias/productos/GridProducts";

const CategoriaPage = () => {
  const { categoriaId } = useParams();
  const [isCloseBar, setIsCloseBar] = useState(true);
    const closeBar = () => {
        setIsCloseBar(!isCloseBar);
    }

  return (
    <>
      <Header />
      <main className="relative">
        <div className="bg-cyan-500 w-full flex items-center justify-center p-8">
          <h1 className="text-3xl font-bold text-white">
            {Array.isArray(categoriaId)
              ? categoriaId[0].toUpperCase()
              : categoriaId.toUpperCase()}
          </h1>
        </div>
        <div className="p-6">
          <div className="py-4">
            <div className="flex gap-2 items-center justify-center text-gray-600 font-bold cursor-pointer" onClick={()=>closeBar()}>
              <FaBars />
              <span>VER OPCIONES</span>
            </div>
            <FilterBar closeBar={closeBar} isCloseBar={isCloseBar}/>
          </div>
          <div>
            <GridProducts />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CategoriaPage;
