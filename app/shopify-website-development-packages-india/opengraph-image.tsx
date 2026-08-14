import { createSocialImage, socialImageContentType, socialImageSize } from '@/lib/social-image';

export const alt = 'Shopify website development packages in India from Digital Thriv';
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function Image() {
  return createSocialImage({
    eyebrow: 'Shopify website development packages India',
    title: 'Launch fast or build a customized D2C storefront.',
    accent: 'Rs 2,999 · Rs 4,999',
    detail: 'Theme · catalog · payments · logistics · Meta',
  });
}
