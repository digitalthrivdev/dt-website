import { createSocialImage, socialImageContentType, socialImageSize } from '@/lib/social-image';

export const alt = 'Digital Thriv - Performance Marketing, Lead Generation & Ecommerce Growth';
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function Image() {
  return createSocialImage({
    eyebrow: 'Performance Marketing · Lead Generation · Ecommerce',
    title: 'Scale your revenue, leads, and online store.',
    accent: 'Performance & Growth',
    detail: 'Meta Ads · WhatsApp Funnels · High-Converting Stores',
  });
}
