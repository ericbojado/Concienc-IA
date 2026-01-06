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
        {/* IMAGEN DE PORTADA DINÁMICA */}
        {articulo.url_imagen && (
          <div className="mb-10 overflow-hidden rounded-3xl shadow-xl">
            <img 
              src={articulo.url_imagen} 
              alt={articulo.titulo} 
              className="w-full h-[400px] object-cover"
            />
          </div>
        )}

        <header className="mb-12 border-b border-gray-100 pb-8 text-center md:text-left">
          <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">
            {articulo.categoria}
          </span>
          <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-6xl">
            {articulo.titulo}
          </h1>
          <p className="mt-6 text-gray-500">Escrito por <strong>{articulo.autor}</strong></p>
        </header>

        {/* CONTENIDO CON SOPORTE PARA IMÁGENES EN MARKDOWN */}
        <div className="markdown-content text-gray-800 leading-relaxed">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({node, ...props}) => <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900" {...props} />,
              p: ({node, ...props}) => <p className="mb-6 text-lg" {...props} />,
              // ESTILO PARA IMÁGENES DENTRO DEL TEXTO
              img: ({node, ...props}) => (
                <img className="rounded-2xl shadow-md my-10 mx-auto max-h-[500px]" {...props} />
              ),
              li: ({node, ...props}) => <li className="list-disc ml-6 mb-3" {...props} />,
              strong: ({node, ...props}) => <strong className="text-blue-700 font-bold" {...props} />,
            }}
          >
            {articulo.contenido}
          </ReactMarkdown>
        </div>
        
        <div className="mt-20 pt-8 border-t border-gray-100">
          <a href="/vlog" className="text-blue-600 font-semibold hover:underline flex items-center gap-2">
            ← Volver a todos los artículos
          </a>
        </div>
      </article>
    </main>
  );
}