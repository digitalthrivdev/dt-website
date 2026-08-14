import { createSocialImage, socialImageContentType, socialImageSize } from '@/lib/social-image';

export const alt = 'WooCommerce development for D2C brands from Digital Thriv';
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function Image() {
  return createSocialImage({
    eyebrow: 'WooCommerce development for D2C brands',
    title: 'A flexible, business-owned ecommerce storefront.',
    accent: 'From Rs 4,999',
    detail: 'Premium theme · catalog · payments · logistics',
  });
}
