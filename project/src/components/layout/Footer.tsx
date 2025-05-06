import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Phone, Mail, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-12 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-xl font-semibold text-white mb-6">
              ¿Tienes un comentario? No dudes en dejarnos saberlo
            </h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div>
                <label htmlFor="celular" className="block text-sm font-medium mb-1">Número celular</label>
                <input
                  type="text"
                  id="celular"
                  name="celular"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium mb-1">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={3}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Enviar Mensaje
              </button>
            </form>
          </section>
          
          <section className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Teléfono</h3>
              <p className="flex items-center">
                <Phone size={18} className="mr-2 text-purple-400" />
                <a href="tel:+573008615056" className="hover:text-purple-400 transition-colors">
                  +57 300-8615056
                </a>
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Email</h3>
              <p className="flex items-center">
                <Mail size={18} className="mr-2 text-purple-400" />
                <a href="mailto:artecuida2020@suenos.in" className="hover:text-purple-400 transition-colors">
                  artecuida2020@suenos.in
                </a>
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Contactar WhatsApp</h3>
              <p>
                <a 
                  href="https://chat.whatsapp.com/E6bMDKhT5oSLXOFZIY0lZh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:text-purple-400 transition-colors"
                >
                  <MessageSquare size={20} className="mr-2 text-purple-400" />
                  <span>Grupo de WhatsApp</span>
                </a>
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white mb-3">Siguenos en Redes</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.twitter.com/artecuida2020" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <Twitter size={24} />
                </a>
                
                <a 
                  href="https://www.facebook.com/artecuida2020" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <Facebook size={24} />
                </a>
                
                <a 
                  href="https://www.instagram.com/artecuida2020" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4 sm:px-6 text-center text-sm">
          <p>&copy; @artecuida2020 | Design: <span>Oficina de sueños/LT</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;