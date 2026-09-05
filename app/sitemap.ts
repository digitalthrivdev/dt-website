import type { MetadataRoute } from 'next';
import { APP_CONFIG } from '@/lib/constants';
import { fetchPublishedJobs } from '@/lib/crm';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    '',
    '/shopify-website-development-packages-india',
    '/woocommerce-development-d2c-india',
    '/ecommerce-app-development-agency',
    '/ecommerce-growth-conversion-optimization',
    '/about-digital-thriv',
    '/customer-reviews',
    '/careers',
    '/privacy-policy',
    '/terms-and-conditions',
    '/cancellation-and-refund-policy',
  ];

  const pages = routes.map((route, index) => ({
    url: `${APP_CONFIG.websiteUrl}${route}`,
    changeFrequency: index < 8 ? 'weekly' as const : 'yearly' as const,
    priority: index === 0 ? 1 : index < 5 ? 0.9 : index < 8 ? 0.7 : 0.2,
  }));

  const jobs = await fetchPublishedJobs();
  const jobPages = jobs.map((job) => ({
    url: `${APP_CONFIG.websiteUrl}/careers/${job.slug}`,
    lastModified: job.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...pages, ...jobPages];
}
