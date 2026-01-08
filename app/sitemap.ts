import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://concienc-ia-etica.vercel.app';

  // 1. Páginas estáticas
  const rutasEstaticas = [
    '',
    '/nosotros',
    '/vlog',
    '/cursos',
  ].map((ruta) => ({
    url: `${baseUrl}${ruta}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1,
  }));

  // 2. Obtener slugs de Artículos de Supabase
  const { data: articulos } = await supabase.from('articulos').select('slug, creado_en');
  const rutasArticulos = (articulos || []).map((art) => ({
    url: `${baseUrl}/vlog/${art.slug}`,
    lastModified: new Date(art.creado_en),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 3. Obtener slugs de Cursos de Supabase
  const { data: cursos } = await supabase.from('cursos').select('slug, creado_en');
  const rutasCursos = (cursos || []).map((curso) => ({
    url: `${baseUrl}/cursos/${curso.slug}`,
    lastModified: new Date(curso.creado_en),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...rutasEstaticas, ...rutasArticulos, ...rutasCursos];
}