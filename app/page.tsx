import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen pt-32"> {/* 1. justify-start para subir el contenido */}
      <section className="relative px-6 lg:px-8 max-w-5xl mx-auto text-center"> {/* 2. max-w-5xl para dar más espacio al texto */}
        
        {/* Título con control de saltos de línea */}
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl lg:text-8xl leading-[1.1]">
          <span className="block md:inline">Domina la IA con</span> {/* Forzamos que esto vaya junto */}
          <br className="hidden md:block" /> 
          <span className="text-blue-600 block md:inline mt-2 md:mt-0">
            Pensamiento Crítico
          </span>
        </h1>

        

        {/* Frase destacada */}
        <div className="mt-12 py-6 border-y border-gray-100">
          <p className="text-xl md:text-2xl font-medium italic text-gray-900">
            "IA para <span className="text-blue-600 font-bold">aprender más</span>, no para pensar menos."
          </p>
        </div>

        {/* Botones de Acción */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/cursos" className="w-full sm:w-auto rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-blue-500 transition-all hover:-translate-y-1">
            Explorar Cursos
          </Link>
          <Link href="/vlog" className="w-full sm:w-auto rounded-xl border border-gray-200 px-8 py-4 text-sm font-bold text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
            Leer el Blog <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Descripción con ancho controlado */}
        <p className="mt-10 text-lg md:text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
          En <strong className="text-gray-900">Concienc-IA</strong> te enseñamos a usar herramientas digitales de forma ética, responsable y profesional, 
          desarrollando un criterio propio para discernir entre la información veraz y la desinformación.
        </p>
      </section>
    </main>
  );
}
