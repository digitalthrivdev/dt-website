import type { MetadataRoute } from 'next';
import { APP_CONFIG } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/shopify-website-development-packages-india',
    '/woocommerce-development-d2c-india',
    '/ecommerce-app-development-agency',
    '/ecommerce-growth-conversion-optimization',
    '/about-digital-thriv',
    '/customer-reviews',
    '/privacy-policy',
    '/terms-and-conditions',
    '/cancellation-and-refund-policy',
  ];

  return routes.map((route, index) => ({
    url: `${APP_CONFIG.websiteUrl}${route}`,
    changeFrequency: index < 7 ? 'weekly' : 'yearly',
    priority: index === 0 ? 1 : index < 5 ? 0.9 : index < 7 ? 0.7 : 0.2,
  }));
}
