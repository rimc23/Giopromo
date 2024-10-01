import React from 'react';

const Header = () => (
  <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
    <h1 className="text-2xl font-bold">Mi Aplicación</h1>
    <nav>
      <ul className="flex space-x-4">
        <li><a href="/" className="hover:text-gray-300">Inicio</a></li>
        <li><a href="/about" className="hover:text-gray-300">Acerca de HOLAAAAAAAA COMPONENTE base</a></li>
        <li><a href="/contact" className="hover:text-gray-300">Contacto</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;