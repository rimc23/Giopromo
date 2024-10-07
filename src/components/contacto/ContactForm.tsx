import React from 'react';

const ContactForm = () => (
  <form className="max-w-lg mx-auto">
    <div className="mb-4">
      <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre</label>
      <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg" required />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Correo Electrónico</label>
      <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" required />
    </div>
    <div className="mb-4">
      <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensaje</label>
      <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border rounded-lg" required></textarea>
    </div>
    <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
      Enviar Mensaje
    </button>
  </form>
);

export default ContactForm;
