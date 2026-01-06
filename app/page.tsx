export default function Home() {
  return (
    <main className="relative isolate px-6 pt-24 lg:px-8">
      <div className="mx-auto max-w-2xl py-20 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Domina la IA con <span className="text-blue-600">Pensamiento Crítico</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            En <strong>Concienc-IA</strong> te enseñamos a usar herramientas digitales de forma ética y responsable. 
            No dejes que el algoritmo piense por ti.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/cursos" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">
              Explorar Cursos
            </a>
            <a href="/vlog" className="text-sm font-semibold leading-6 text-gray-900">
              Leer el Vlog <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
