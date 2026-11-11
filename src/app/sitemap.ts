import { MetadataRoute } from 'next';
import { COURSES_DATA } from '@/data/coursesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cambridgeacademyofenglish.vercel.app';
  const now = new Date();

  // Core High Priority Pages
  const mainRoutes = [
    { url: `${baseUrl}`, priority: 1.0, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/courses`, priority: 0.95, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/contact`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/about`, priority: 0.85, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/admission`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/book`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/certificate`, priority: 0.7, changeFrequency: 'monthly' as const },
  ].map((r) => ({
    ...r,
    lastModified: now,
  }));

  // All Dedicated Course Landing Pages (0.9 Priority)
  const courseRoutes = Object.keys(COURSES_DATA).map((slug) => ({
    url: `${baseUrl}/courses/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Institutional and Policy Routes
  const institutionalRoutes = [
    '/about/vision-mision',
    '/about/values-of-cambridge',
    '/admission/indian-students',
    '/admission/foreign-students',
    '/admission/terms-process',
    '/admission/academic-extracts',
    '/privacy-policy',
    '/refund-policy',
    '/terms-conditions',
    '/sitemap',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...mainRoutes, ...courseRoutes, ...institutionalRoutes];
}
