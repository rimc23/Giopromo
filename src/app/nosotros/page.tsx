import Header from "@/components/header";
import Footer from "@/components/Footer";
// import CompanyInfo from "@/components/nosotros/CompanyInfo";

export default function Nosotros() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Sobre Nosotros</h1>
        {/* <CompanyInfo /> */}
      </main>
      <Footer />
    </>
  );
}