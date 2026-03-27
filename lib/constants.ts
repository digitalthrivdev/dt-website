export const APP_CONFIG = {
  name: 'DIGITAL THRIV',
  dashboardUrl: 'https://dashboard.digitalthriv.com',
  websiteUrl: 'https://digitalthriv.com',
  logo: 'https://ik.imagekit.io/digitalthriv/digital-thriv/dt-logo.png',
  description:
    'Web design, branding, and digital marketing for modern brands — growth-focused strategies and measurable results.',
  /** ISO-style label shown on legal pages */
  policyEffectiveDate: 'November 8, 2025',
  whatsappCountryCode: '91',
  whatsappNumber: '6390246088',
  contactEmail: 'Support@digitalthriv.com',
  /** E.164 for tel: links (international dialers) */
  contactPhoneE164: '+916390246088',
  /** Human-readable phone line */
  contactPhoneDisplay: '+91 63902 46088',
  contactAddress: 'BANDA, Uttar Pradesh 208025, India',
  whatsappCommunityUrl: 'https://chat.whatsapp.com/HzHEgYFDOFdKOBAfnMribl',
} as const;

export function whatsappUrl(message: string): string {
  const id = `${APP_CONFIG.whatsappCountryCode}${APP_CONFIG.whatsappNumber}`;
  return `https://wa.me/${id}?text=${encodeURIComponent(message)}`;
}

export function contactTelHref(): string {
  return `tel:${APP_CONFIG.contactPhoneE164}`;
}
