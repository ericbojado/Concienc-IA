import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog de Concienc-IA | Reflexiones sobre Ética e IA",
  description: "Explora artículos, noticias y guías prácticas sobre el impacto social de la inteligencia artificial y la importancia de la alfabetización digital.",
  openGraph: {
    title: "Blog de Concienc-IA",
    description: "Reflexiones sobre el uso responsable y ético de la tecnología.",
    images: [
      {
        url: '/logo.png', // Opcional: usa tu logo para la vista previa en redes sociales
        width: 800,
        height: 600,
        alt: 'Logo de Concienc-IA',
      },
    ],
  },
};

export default async function VlogPage() {
  // Obtenemos los datos de Supabase
  const { data: articulos, error } = await supabase
    .from('articulos')
    .select('*')
    .order('creado_en', { ascending: false });

  if (error) {
    console.error("Error cargando artículos:", error);
  }

  return (
    <main className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Encabezado:*/}
      <header className="mb-12 text-left">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Blog de <span className="text-blue-600">Concienc-IA</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Reflexiones, noticias y artículos para un uso responsable de la tecnología.
        </p>
        <hr className="mt-8 border-gray-100" /> {/* La línea divisora */}
      </header>

      {/* Sección de Artículos */}
      {!articulos || articulos.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-gray-500 italic text-lg">No hay artículos publicados todavía.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articulos.map((articulo) => (
            <article 
              key={articulo.id} 
              className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Espacio para imagen */}
              <div className="aspect-video bg-gray-100 relative overflow-hidden">
                {articulo.url_imagen ? (
                  <img 
                    src={articulo.url_imagen} 
                    alt={articulo.titulo}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-4xl">📝</div>
                )}
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {articulo.categoria}
                </span>
              </div>

              <div className="p-8 flex flex-col flex-grow text-left">
                <h2 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">
                  {articulo.titulo}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {articulo.resumen}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900">{articulo.autor}</span>
                    <span className="text-xs text-gray-400">
                      {new Date(articulo.creado_en).toLocaleDateString('es-MX', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  {/* El Botón */}
                  <Link 
                    href={`/vlog/${articulo.slug}`}
                    className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 text-sm font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 shadow-sm"
                  >
                    Leer artículo
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}