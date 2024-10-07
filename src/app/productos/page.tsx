import Header from "@/components/header";
import Footer from "@/components/Footer";
// import ContactForm from "@/components/contacto/ContactForm";

export default function Contacto() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Contáctanos</h1>
        {/* <ContactForm /> */}
      </main>
      <Footer />
    </>
  );
}