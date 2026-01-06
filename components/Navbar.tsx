"use client"; // Necesario para usar interactividad (useState)
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-20 top-0 left-0 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="text-2xl font-bold text-blue-700">
          Concienc-IA
        </Link>
        
        {/* Botón Hamburguesa para móvil */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
        >
          <span className="sr-only">Abrir menú</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        {/* Menú de navegación */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            <li><Link href="/" className="block py-2 px-3 text-blue-700 md:p-0">Inicio</Link></li>
            <li><Link href="/vlog" className="block py-2 px-3 text-gray-900 hover:text-blue-700 md:p-0">Vlog</Link></li>
            <li><Link href="/cursos" className="block py-2 px-3 text-gray-900 hover:text-blue-700 md:p-0">Cursos</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;