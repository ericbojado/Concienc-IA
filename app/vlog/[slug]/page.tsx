import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default async function ArticuloPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const { data: articulo, error } = await supabase
    .from('articulos')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !articulo) {
    notFound();
  }

  return (
    <main className="pt-32 pb-24 px-6 lg:px-8 max-w-4xl mx-auto">
      <article>
        <header className="mb-12 border-b border-gray-100 pb-8">
          <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">
            {articulo.categoria}
          </span>
          <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-6xl">
            {articulo.titulo}
          </h1>
          <p className="mt-6 text-gray-500 italic">Por {articulo.autor}</p>
        </header>

        {/* Renderizado de Markdown con estilos personalizados */}
        <div className="markdown-content text-gray-800 leading-relaxed space-y-6">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({node, ...props}) => <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900" {...props} />,
              p: ({node, ...props}) => <p className="mb-4 text-lg" {...props} />,
              li: ({node, ...props}) => <li className="list-disc ml-6 mb-2" {...props} />,
              strong: ({node, ...props}) => <strong className="text-blue-700 font-bold" {...props} />,
              a: ({node, ...props}) => <a className="text-blue-600 underline hover:text-blue-800" {...props} />,
            }}
          >
            {articulo.contenido}
          </ReactMarkdown>
        </div>
        
        <div className="mt-20 pt-8 border-t border-gray-100">
          <a href="/vlog" className="group text-blue-600 font-semibold flex items-center gap-2">
            <span className="transition-transform group-hover:-translate-x-1">←</span> 
            Regresar a los artículos
          </a>
        </div>
      </article>
    </main>
  );
}