export default function CursosPage() {
  const cursos = [
    {
      titulo: "Fundamentos de IA Responsable",
      nivel: "Básico",
      duracion: "45 min",
      descripcion: "Aprende los conceptos básicos de la IA y por qué la ética es fundamental en su desarrollo.",
      imagen: "🛡️"
    },
    {
      titulo: "Detección de Sesgos y Prejuicios",
      nivel: "Intermedio",
      duracion: "60 min",
      descripcion: "Técnicas prácticas para identificar cuándo una IA está entregando resultados sesgados.",
      imagen: "⚖️"
    },
    {
      titulo: "Privacidad de Datos en la Era Digital",
      nivel: "Básico",
      duracion: "30 min",
      descripcion: "Guía para proteger tu información personal al usar herramientas de IA generativa.",
      imagen: "🔒"
    }
  ];

  return (
    <main className="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center md:text-left border-b border-gray-200 pb-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Academia <span className="text-blue-600">Concienc-IA</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Cursos gratuitos para desarrollar tu pensamiento crítico y habilidades digitales.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cursos.map((curso, index) => (
          <div key={index} className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex h-48 items-center justify-center bg-blue-50 text-6xl">
              {curso.imagen}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-x-2">
                <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                  {curso.nivel}
                </span>
                <span className="text-xs text-gray-500">{curso.duracion}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">{curso.titulo}</h3>
              <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                {curso.descripcion}
              </p>
              <div className="mt-auto pt-6">
                <button className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
                  Empezar ahora
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}