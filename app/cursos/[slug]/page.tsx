'use client';
import { useState, useEffect, use } from 'react';
import ReactMarkdown from 'react-markdown';
import { supabase } from '@/lib/supabase';

export default function CursoDetalle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  const [curso, setCurso] = useState<any>(null);
  const [modulos, setModulos] = useState<any[]>([]);
  const [indiceActual, setIndiceActual] = useState(0);
  const [completados, setCompletados] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: cursoData } = await supabase
        .from('cursos')
        .select('*')
        .eq('slug', slug)
        .single();

      if (cursoData) {
        const { data: modulosData } = await supabase
          .from('modulos')
          .select('*')
          .eq('curso_id', cursoData.id)
          .order('orden', { ascending: true });

        setCurso(cursoData);
        setModulos(modulosData || []);
      }

      const saved = localStorage.getItem(`progreso-${slug}`);
      if (saved) setCompletados(JSON.parse(saved));
    };
    fetchData();
  }, [slug]);

  const progresoPercent = modulos.length > 0 
    ? (completados.length / modulos.length) * 100 
    : 0;

  const marcarCompletado = (id: number) => {
    if (!completados.includes(id)) {
      const nuevoProgreso = [...completados, id];
      setCompletados(nuevoProgreso);
      localStorage.setItem(`progreso-${slug}`, JSON.stringify(nuevoProgreso));
    }
  };

  if (!curso || modulos.length === 0) return (
    <div className="p-10 text-center font-[Arial] text-gray-600">Cargando contenido...</div>
  );

  return (
    <div className="min-h-screen bg-white font-[Arial]">
      {/* Barra de Progreso Superior (Fija) */}
      <div className="sticky top-16 bg-white/95 backdrop-blur-sm z-40 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex justify-between mb-1 text-xs font-bold text-gray-500 uppercase tracking-widest">
            <span>Progreso del curso</span>
            <span>{Math.round(progresoPercent)}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5">
            <div 
              className="bg-[#2563eb] h-1.5 rounded-full transition-all duration-500" 
              style={{ width: `${progresoPercent}%` }}
            />
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-12">
        {/* ENCABEZADO ESTILO ARTÍCULO */}
        <header className="mb-10">
          <p className="text-[#2563eb] font-bold text-xs tracking-[0.2em] uppercase mb-4">
             {/* Detectamos si es intro o módulo numerado */}
             {modulos[indiceActual].es_introduccion ? 'INTRODUCCIÓN' : `MÓDULO ${modulos[indiceActual].orden}`}
          </p>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#111827] leading-tight mb-6">
            {modulos[indiceActual].titulo.split(':')[1] || modulos[indiceActual].titulo}
          </h1>

          {/* Línea de Metadatos y Separador */}
          <div className="flex items-center text-gray-500 text-sm border-b border-gray-100 pb-8">
            <span className="font-semibold text-gray-900 mr-2">Curso:</span> 
            <span className="mr-4">{curso.titulo}</span>
            <span className="mx-2 text-gray-300">|</span>
            <span>Lectura: {curso.duracion} min</span>
          </div>
        </header>
        
        {/* CONTENIDO DEL CURSO (Estilizado como el artículo) */}
        <div className="text-[#4b5563] text-lg leading-relaxed space-y-8">
          <ReactMarkdown 
            components={{
              // Títulos dentro del contenido (H2, H3)
              h1: ({node, ...props}) => <h2 className="text-2xl font-bold text-[#111827] mt-10 mb-4" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-3xl font-bold text-[#111827] mt-20 mb-6 border-t border-gray-100 pt-10" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-bold text-[#111827] mt-12 mb-4" {...props} />,
              
              // Párrafos normales
              p: ({node, ...props}) => <p className="mb-6 leading-8" {...props} />,
              
              // Listas (Bullets) como en image_c855a3.png
              ul: ({node, ...props}) => <ul className="list-disc pl-6 space-y-3 mb-6 marker:text-[#2563eb]" {...props} />,
              li: ({node, ...props}) => <li className="pl-2" {...props} />,
              
              // Citas (Blockquotes)
              blockquote: ({node, ...props}) => (
                <blockquote className="border-l-4 border-[#2563eb] pl-4 italic text-gray-700 my-6 bg-gray-50 py-2 rounded-r" {...props} />
              ),
              
              // Negritas
              strong: ({node, ...props}) => <strong className="font-bold text-[#111827]" {...props} />,

              // Componente personalizado para Prompts
              code: ({node, inline, className, children, ...props}: any) => {
                if (inline) return <code className="bg-gray-100 text-[#2563eb] px-1 py-0.5 rounded font-mono text-sm">{children}</code>;
                return <PromptBox>{children}</PromptBox>;
              }
            }}
          >
            {modulos[indiceActual].contenido}
          </ReactMarkdown>
        </div>

        {/* NAVEGACIÓN INFERIOR */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
          <button 
            disabled={indiceActual === 0}
            onClick={() => {
              setIndiceActual(prev => prev - 1);
              window.scrollTo(0, 0); // Regresar arriba al cambiar
            }}
            className="group flex items-center text-gray-500 hover:text-[#2563eb] disabled:opacity-30 transition"
          >
            <span className="mr-2 text-xl">←</span> 
            <span className="font-semibold text-sm tracking-wide uppercase">Anterior</span>
          </button>
          
          {indiceActual === modulos.length - 1 && progresoPercent >= 99 ? (
            <button 
              onClick={() => window.print()} 
              className="px-8 py-3 bg-[#15803d] text-white rounded-lg font-bold shadow-lg shadow-green-200 hover:shadow-xl hover:translate-y-[-2px] transition-all"
            >
              Obtener Certificado 🎓
            </button>
          ) : (
            <button 
              onClick={() => {
                marcarCompletado(modulos[indiceActual].id);
                if (indiceActual < modulos.length - 1) {
                  setIndiceActual(prev => prev + 1);
                  window.scrollTo(0, 0);
                }
              }}
              className="px-8 py-3 bg-[#2563eb] text-white rounded-lg font-bold shadow-lg shadow-blue-200 hover:shadow-xl hover:translate-y-[-2px] transition-all"
            >
              Siguiente Módulo →
            </button>
          )}
        </div>
      </main>

      {/* CERTIFICADO OCULTO (Para impresión) */}
      <div className="hidden print:flex fixed inset-0 bg-white items-center justify-center p-0 z-[9999]">
        <div className="border-[10px] border-[#2563eb] p-20 w-full h-full flex flex-col justify-center items-center text-center">
           {/* Logo o Marca */}
           <div className="mb-10 text-[#2563eb] font-bold text-2xl tracking-widest uppercase">Concienc-IA</div>
           
           <h1 className="text-6xl font-bold text-[#111827] mb-6 font-serif">Certificado de Finalización</h1>
           <p className="text-2xl text-gray-600 mb-12">Se otorga el presente reconocimiento a:</p>
           
           <div className="border-b-2 border-gray-900 w-2/3 mx-auto mb-4"></div>
           <p className="text-sm text-gray-400 mb-12 uppercase tracking-widest">Nombre del Estudiante</p>

           <p className="text-xl text-gray-600">Por haber completado con éxito el curso:</p>
           <h2 className="text-4xl font-bold text-[#2563eb] mt-4 mb-20">{curso.titulo}</h2>
           
           <div className="text-xs text-gray-400 mt-auto">
             Validado de forma simbólica por la plataforma Concienc-IA
           </div>
        </div>
      </div>
    </div>
  );
}

// Estilo del Prompt Box actualizado para encajar en el artículo
function PromptBox({ children }: any) {
  const copy = () => {
    navigator.clipboard.writeText(String(children));
    alert("Copiado al portapapeles");
  };

  return (
    <div className="my-10">
      <div className="bg-[#f8fafc] border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <div className="bg-[#2563eb] px-4 py-2 flex justify-between items-center">
          <span className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2">
            ✨ Prompt Sugerido
          </span>
          <button onClick={copy} className="text-white/80 hover:text-white text-xs font-medium bg-white/10 px-2 py-1 rounded transition">
            Copiar Texto
          </button>
        </div>
        <div className="p-6 font-mono text-sm text-[#334155] bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}