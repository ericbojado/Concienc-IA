import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {/* Aquí puedes poner tus redes sociales o links de contacto */}
          <Link href="https://github.com/ericbojado/Concienc-IA" className="text-gray-400 hover:text-blue-600 transition-colors">
            GitHub
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} <strong>Concienc-IA</strong>. Desarrollado por Eric Bojado.
          </p>
          <p className="mt-2 text-center text-[10px] text-gray-400 uppercase tracking-widest">
            Proyecto de Impacto Social | Ponle conciencIA a tu futuro
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;