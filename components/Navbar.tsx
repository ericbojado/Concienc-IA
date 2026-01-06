"use client"; // 1. Indica que es un componente de cliente

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // 2. Importa el hook para la ruta

const Navbar = () => {
  const pathname = usePathname(); // 3. Obtenemos la ruta actual

  // Función auxiliar para aplicar estilos condicionales
  const linkStyles = (path: string) => 
    pathname === path 
      ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1" // Estilo activo
      : "text-gray-600 hover:text-blue-500 transition-colors";   // Estilo inactivo

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Concienc-IA
            </Link>
          </div>
          
          <div className="flex space-x-8">
            <Link href="/" className={linkStyles('/')}>
              Inicio
            </Link>
            <Link href="/vlog" className={linkStyles('/vlog')}>
              Vlog
            </Link>
            <Link href="/cursos" className={linkStyles('/cursos')}>
              Cursos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;