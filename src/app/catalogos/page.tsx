import Header from "@/components/header";
import Footer from "@/components/Footer";
// import CatalogosList from "@/components/catalogos/CatalogosList";

export default function Catalogos() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Catálogos Digitales</h1>
        {/* <CatalogosList /> */}
      </main>
      <Footer />
    </>
  );
}