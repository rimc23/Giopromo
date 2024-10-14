"use client";

import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import GridProducts from "@/components/categorias/productos/GridProducts";
import FilterBarMobile from "@/components/categorias/barra lateral/FilterBarMobile";
import FilterBar from "@/components/categorias/barra lateral/FilterBar";

const CategoriaPage = () => {
  const { categoriaId } = useParams();
  const [isCloseBar, setIsCloseBar] = useState(true);
  const closeBar = () => {
    setIsCloseBar(!isCloseBar);
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <div className="bg-cyan-500 w-full flex items-center justify-center p-8">
          <h1 className="text-3xl font-bold text-white">
            {Array.isArray(categoriaId)
              ? categoriaId[0].toUpperCase()
              : categoriaId.toUpperCase()}
          </h1>
        </div>
        <div className="p-6 lg:flex lg:justify-center max-w-[1200px]">
          <div className="py-4">
            <div
              className={`flex lg:hidden gap-2 items-center justify-center text-gray-600 font-bold cursor-pointer`}
              onClick={() => closeBar()}
            >
              <FaBars />
              <span>VER OPCIONES</span>
            </div>
            <FilterBarMobile closeBar={closeBar} isCloseBar={isCloseBar} />
          </div>
          <div className="lg:flex">
            <div className="hidden lg:block">
              <FilterBar />
            </div>
            <div><GridProducts /></div>
            
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CategoriaPage;
