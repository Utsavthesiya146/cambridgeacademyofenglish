import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cambridgeacademyofenglish.vercel.app';
  
  // High priority routes
  const mainRoutes = [
    '',
    '/about',
    '/courses',
    '/admission',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Secondary routes
  const subRoutes = [
    '/about/vision-mision',
    '/about/values-of-cambridge',
    '/admission/indian-students',
    '/admission/foreign-students',
    '/admission/terms-process',
    '/admission/academic-extracts',
    '/certificate',
    '/book',
    '/info',
    '/privacy-policy',
    '/refund-policy',
    '/terms-conditions',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Course routes
  const courseRoutes = [
    '/courses/learn-english-speaking-course-online',
    '/courses/class-room-english-course',
    '/courses/exam-preparation-course',
    '/courses/foreign-language-courses',
    '/courses/teacher-training',
    '/courses/cambridge-exam',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...mainRoutes, ...subRoutes, ...courseRoutes];
}
