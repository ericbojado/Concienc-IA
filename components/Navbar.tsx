import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-20 top-0 left-0 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-700">
            Concienc-IA
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">
            Empezar curso
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
            <li><Link href="/" className="block py-2 px-3 text-blue-700">Inicio</Link></li>
            <li><Link href="/vlog" className="block py-2 px-3 text-gray-900 hover:text-blue-700">Vlog</Link></li>
            <li><Link href="/cursos" className="block py-2 px-3 text-gray-900 hover:text-blue-700">Cursos</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;