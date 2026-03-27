import type { Metadata } from 'next';
import { APP_CONFIG } from '@/lib/constants';

export type PolicyPath =
  | '/privacy-policy'
  | '/terms-and-conditions'
  | '/cancellation-and-refund-policy';

export function policyMetadata(
  segmentTitle: string,
  path: PolicyPath,
  description: string
): Metadata {
  const url = new URL(path, `${APP_CONFIG.websiteUrl}/`).toString();
  const ogTitle = `${segmentTitle} | ${APP_CONFIG.name}`;

  return {
    title: segmentTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: APP_CONFIG.name,
      type: 'article',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
    },
  };
}
