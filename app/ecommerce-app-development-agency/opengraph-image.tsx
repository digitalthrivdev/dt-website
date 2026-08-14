import { createSocialImage, socialImageContentType, socialImageSize } from '@/lib/social-image';

export const alt = 'Ecommerce website and Android app development from Digital Thriv';
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function Image() {
  return createSocialImage({
    eyebrow: 'Ecommerce app development agency',
    title: 'Launch a connected website and Android shopping app.',
    accent: 'Rs 9,999 package',
    detail: 'Catalog · graphics · payments · logistics',
  });
}
