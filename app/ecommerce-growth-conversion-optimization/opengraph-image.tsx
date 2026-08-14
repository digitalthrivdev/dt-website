import { createSocialImage, socialImageContentType, socialImageSize } from '@/lib/social-image';

export const alt = 'Ecommerce growth and conversion optimization from Digital Thriv';
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function Image() {
  return createSocialImage({
    eyebrow: 'Ecommerce growth and conversion optimization',
    title: 'Find the bottleneck limiting your existing store.',
    accent: 'Custom scope',
    detail: 'UX · conversion · tracking · acquisition',
  });
}
