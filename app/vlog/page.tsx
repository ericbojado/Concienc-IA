export default function VlogPage() {
  const articulos = [
    {
      titulo: "¿Qué es la IA Ética?",
      resumen: "Una guía básica para entender por qué no todo lo que la IA puede hacer, debe hacerse.",
      fecha: "5 de Enero, 2026",
      categoria: "Ética"
    },
    {
      titulo: "Sesgos Algorítmicos",
      resumen: "Cómo los prejuicios humanos terminan en el código y qué podemos hacer para evitarlo.",
      fecha: "3 de Enero, 2026",
      categoria: "Investigación"
    }
  ];

  return (
    <main className="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="border-b border-gray-200 pb-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Vlog de <span className="text-blue-600">Concienc-IA</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Reflexiones y noticias para un uso responsable de la tecnología.
        </p>
      </div>

      <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
        {articulos.map((post, index) => (
          <div key={index} className="flex flex-col items-start">
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {post.categoria}
            </span>
            <h2 className="mt-4 text-2xl font-bold text-gray-900">{post.titulo}</h2>
            <p className="mt-4 text-base text-gray-600 leading-7">{post.resumen}</p>
            <div className="mt-6 flex items-center gap-x-4">
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">Eric Bojado</p>
                <p className="text-gray-500">{post.fecha}</p>
              </div>
            </div>
            <a href="#" className="mt-6 text-sm font-semibold text-blue-600 hover:text-blue-500">
              Leer más <span aria-hidden="true">→</span>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}