import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Esto le habla a TODOS los buscadores (Google, Bing, etc.)
      allow: '/',     // Les das permiso de entrar a todas las páginas
      disallow: '/private/', // Aquí podrías bloquear carpetas que no quieres que se vean
    },
    // Aquí le recordamos a Google dónde está tu mapa
    sitemap: 'https://concienc-ia-etica.vercel.app/sitemap.xml',
  };
}