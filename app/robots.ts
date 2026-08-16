import type { MetadataRoute } from 'next';
import { APP_CONFIG } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: 'OAI-SearchBot', allow: '/', disallow: ['/api/'] },
      { userAgent: 'ChatGPT-User', allow: '/', disallow: ['/api/'] },
      { userAgent: 'GPTBot', allow: '/', disallow: ['/api/'] },
      { userAgent: 'Claude-SearchBot', allow: '/', disallow: ['/api/'] },
      { userAgent: 'Claude-User', allow: '/', disallow: ['/api/'] },
      { userAgent: 'ClaudeBot', allow: '/', disallow: ['/api/'] },
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
    ],
    sitemap: `${APP_CONFIG.websiteUrl}/sitemap.xml`,
    host: APP_CONFIG.websiteUrl,
  };
}
