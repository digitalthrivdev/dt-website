import { createSocialImage, socialImageContentType, socialImageSize } from '@/lib/social-image';

export const alt = 'Digital Thriv ecommerce website development packages';
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function Image() {
  return createSocialImage({
    eyebrow: 'Ecommerce websites, apps and growth',
    title: 'Build, improve or grow your ecommerce store.',
    accent: 'Plans from Rs 2,999',
    detail: 'Shopify · WooCommerce · Android apps',
  });
}
