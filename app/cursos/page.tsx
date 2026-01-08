import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Academia Digital | Concienc-IA",
  description: "Explora nuestra cursos gratuita sobre alfabetización digital y uso responsable de la IA.",
};

export default async function CursosPage() {
  const { data: cursos, error } = await supabase
    .from('cursos')
    .select('*')
    .order('creado_en', { ascending: false });

  if (error) {
    console.error("Error cargando cursos:", error);
  }

  return (
    <main className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <header className="mb-12 text-left">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Academia <span className="text-blue-600">Concienc-IA</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Cursos gratuitos para desarrollar tus habilidades digitales con ética y responsabilidad.
        </p>
        <hr className="mt-8 border-gray-100" />
      </header>

      {!cursos || cursos.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-gray-500 italic text-lg">Próximamente nuevos cursos disponibles.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cursos.map((curso) => (
            <article 
              key={curso.id} 
              className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="aspect-video bg-gray-100 relative overflow-hidden">
                {curso.url_miniatura ? (
                  <img src={curso.url_miniatura} alt={curso.titulo} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex items-center justify-center h-full text-4xl">🎓</div>
                )}
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {curso.nivel || 'Básico'}
                </span>
              </div>

              <div className="p-8 flex flex-col flex-grow text-left">
                <h2 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">
                  {curso.titulo}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                  {curso.descripcion}
                </p>
                
                {/* Footer de la tarjeta: Solo el botón alineado a la derecha */}
                <div className="flex justify-end mt-auto pt-6 border-t border-gray-50">
                  <Link 
                    href={`/cursos/${curso.slug}`}
                    className="inline-flex items-center px-6 py-2.5 bg-blue-50 text-blue-600 text-sm font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-200 shadow-sm"
                  >
                    Ver curso
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