"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react'; // Importamos useState para el menú
import Image from 'next/image';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar menú

  const linkStyles = (path: string) => 
    pathname === path 
      ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
      : "text-gray-600 hover:text-blue-500 transition-colors";

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-x-3 group">
              <Image 
                src="/logo.png" 
                alt="Logo Concienc-IA"
                width={40}  // Tamaño base
                height={40} // Tamaño base
                className="object-contain transition-transform group-hover:rotate-12"
              />
              <span className="text-2xl font-bold text-blue-600">
                Concienc-IA
              </span>
            </Link>
          </div>
          
          {/* Menú Desktop (Se oculta en móvil con 'hidden md:flex') */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className={linkStyles('/')}>Inicio</Link>
            <Link href="/vlog" className={linkStyles('/vlog')}>Vlog</Link>
            <Link href="/cursos" className={linkStyles('/cursos')}>Cursos</Link>
            <Link href="/nosotros" className={linkStyles('/nosotros')}>Nosotros</Link>
          </div>

          {/* Botón Hamburguesa (Solo visible en móvil con 'md:hidden') */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menú Móvil Desplegable */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4 flex flex-col items-center border-t border-gray-50 pt-4 bg-white">
            <Link href="/" onClick={() => setIsOpen(false)} className={linkStyles('/')}>Inicio</Link>
            <Link href="/vlog" onClick={() => setIsOpen(false)} className={linkStyles('/vlog')}>Vlog</Link>
            <Link href="/cursos" onClick={() => setIsOpen(false)} className={linkStyles('/cursos')}>Cursos</Link>
            <Link href="/nosotros" onClick={() => setIsOpen(false)} className={linkStyles('/nosotros')}>Nosotros</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;