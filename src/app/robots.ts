import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/', '/login', '/test'],
    },
    sitemap: 'https://cambridgeacademyofenglish.vercel.app/sitemap.xml',
  };
}
