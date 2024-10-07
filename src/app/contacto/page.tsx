import React from 'react';
import Header from '../../components/Header';
import Footer from '@/components/Footer';

const ContactoPage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Contáctanos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Información de Contacto</h2>
            <p className="mb-2"><strong>Dirección:</strong> Antonio Correa #2025, Col. La Guadalupana, C.P. 44220, Guadalajara, Jal. México</p>
            <p className="mb-2"><strong>Teléfono:</strong> 33 2003 0058 / 33 2003 0059</p>
            <p className="mb-2"><strong>WhatsApp:</strong> 33 3156 9962</p>
            <p className="mb-2"><strong>Email:</strong> info@gipromo.com.mx</p>
          </div>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                Nombre
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nombre" type="text" placeholder="Tu nombre" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="tu@email.com" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mensaje">
                Mensaje
              </label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mensaje" placeholder="Tu mensaje"></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactoPage;