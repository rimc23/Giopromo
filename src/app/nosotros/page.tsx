import React from 'react';
import Header from '../../components/Header';
import Footer from '@/components/Footer';

const NosotrosPage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Sobre Nosotros</h1>
        <p className="mb-4">
          Grupo GiPromo es una empresa mexicana líder en la fabricación, importación y distribución de artículos promocionales.
          Desde nuestra fundación, nos hemos comprometido con la excelencia en nuestros productos y procesos para ofrecer
          la mejor experiencia a nuestros clientes.
        </p>
        <p className="mb-4">
          Con más de 10,000 artículos promocionales en nuestro catálogo, nos adaptamos a todo tipo de clientes, proyectos y presupuestos.
          Nuestra flexibilidad y amplia gama de productos nos permiten satisfacer las necesidades únicas de cada cliente.
        </p>
        <p>
          En GiPromo, nos enorgullece brindar un servicio personalizado y puntual, garantizando que cada solicitud sea
          atendida con amabilidad y profesionalismo. Nuestro compromiso es ser su socio confiable en el mundo de los
          artículos promocionales, ayudándole a fortalecer su marca y alcanzar sus objetivos de marketing.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default NosotrosPage;