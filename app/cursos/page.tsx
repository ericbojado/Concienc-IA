import { supabase } from '@/lib/supabase';

export default async function CursosPage() {
  const { data: cursos, error } = await supabase
    .from('cursos')
    .select('*')
    .order('creado_en', { ascending: false });

  if (error) {
    return <div className="pt-32 text-center text-red-500 font-medium">Error al conectar con la academia.</div>;
  }

  return (
    <main className="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <header className="max-w-2xl border-b border-gray-100 pb-10">
        <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">Educación Ética</span>
        <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Academia <span className="text-blue-600 underline decoration-blue-200">Concienc-IA</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 leading-8">
          Programas diseñados para estudiantes que buscan liderar el futuro tecnológico con responsabilidad y pensamiento crítico.
        </p>
      </header>

      <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {cursos?.map((curso) => (
          <div key={curso.id} className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            {/* Cabecera de la tarjeta con gradiente */}
            <div className="flex h-44 items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 text-6xl shadow-inner group-hover:scale-105 transition-transform">
              {curso.nivel === 'Básico' ? '🛡️' : curso.nivel === 'Intermedio' ? '⚖️' : '🔒'}
            </div>

            <div className="flex flex-1 flex-col p-8">
              <div className="flex items-center justify-between">
                <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                  curso.nivel === 'Básico' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                }`}>
                  {curso.nivel}
                </span>
                <span className="text-xs font-semibold text-gray-400 flex items-center gap-1">
                  ⏱️ {curso.duracion} min
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {curso.titulo}
              </h3>
              
              <p className="mt-3 text-sm text-gray-500 leading-relaxed line-clamp-3">
                {curso.descripcion}
              </p>

              <div className="mt-8 flex items-center justify-between border-t border-gray-50 pt-6">
                <span className="text-xs font-medium text-gray-400 italic">
                  Por {curso.instructor || 'Eric Bojado'}
                </span>
                <button className="rounded-lg bg-gray-900 px-4 py-2 text-xs font-bold text-white hover:bg-blue-600 transition-colors">
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}