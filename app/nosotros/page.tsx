import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description: "Conoce a Eric Bojado y la misión de Concienc-IA.",
};

export default function NosotrosPage() {
  return (
    <main className="pt-32 pb-24 px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Encabezado Principal */}
      <section className="text-center mb-20">
        <span className="text-blue-600 font-bold text-sm uppercase tracking-[0.2em]">Nuestra Misión</span>
        <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-6xl">
          IA para <span className="text-blue-600">aprender más</span>, no para pensar menos
        </h1>
        <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          "Concienc-IA" surge como una respuesta proactiva ante la integración acelerada de la Inteligencia Artificial (IA) en la vida cotidiana. El propósito central es transformar la percepción de la IA: dejar de verla como un "generador de respuestas automáticas" para convertirla en un "catalizador del razonamiento".
        </p>
      </section>

      {/* Tu Historia (El toque humano) */}
      <section className="grid md:grid-cols-2 gap-16 items-center py-16 border-t border-gray-100">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Detrás de Concienc-IA</h2>
          <p className="mt-6 text-lg text-gray-600 leading-8">
            Soy <strong>Eric Bojado</strong>, estudiante de la carrera técnica de <strong>Analista Programador</strong> en el <strong>Bachillerato 16 de la Universidad de Colima</strong>. 
          </p>
          <p className="mt-4 text-lg text-gray-600 leading-8">
            Mi pasión por la tecnología nació al ver su potencial para resolver problemas reales. Sin embargo, identifiqué una problemática: la falta de educación sobre el uso ético y responsable de estas herramientas en nuestra comunidad.
          </p>
          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-600">
            <p className="italic text-blue-900">
              "Mi visión es guiar a las nuevas generaciones de Colima y México para que no solo consuman Inteligencia Artificial, sino que la cuestionen y la utilicen para generar un impacto positivo."
            </p>
          </div>
        </div>
        <div className="relative">
          {/* Foto o Imágen */}
          <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center text-8xl">
            👨‍💻
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
            <p className="text-sm font-bold text-gray-900">Ponle conciencIA a tu futuro</p>
            <p className="text-xs text-gray-500 italic text-center">Orgullosamente Colimense</p>
          </div>
        </div>
      </section>

      {/* Nuestros Pilares */}
      <section className="mt-24">
        <div className="grid sm:grid-cols-3 gap-10">
          <div className="text-center group">
            <div className="text-4xl mb-4 transition-transform group-hover:scale-110 duration-300">🛡️</div>
            <h3 className="font-bold text-xl mb-2">Ética Digital</h3>
            <p className="text-gray-600 text-sm italic leading-relaxed">Promovemos la transparencia y el respeto a la privacidad.</p>
          </div>
          
          <div className="text-center group">
            <div className="text-4xl mb-4 transition-transform group-hover:scale-110 duration-300">🧠</div>
            <h3 className="font-bold text-xl mb-2">Pensamiento Crítico</h3>
            <p className="text-gray-600 text-sm italic leading-relaxed">Enseñamos a identificar sesgos y desinformación en la IA.</p>
          </div>

          <div className="text-center group">
            <div className="text-4xl mb-4 transition-transform group-hover:scale-110 duration-300">👨‍🎓</div>
            <h3 className="font-bold text-xl mb-2">Alfabetización Digital</h3>
            <p className="text-gray-600 text-sm italic leading-relaxed">
              Capacitamos en el uso práctico y consciente de nuevas tecnologías.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}