export const APP_CONFIG = {
  name: 'DIGITAL THRIV',
  dashboardUrl: 'https://dashboard.digitalthriv.com',
  websiteUrl: 'https://digitalthriv.com',
  logo: 'https://ik.imagekit.io/digitalthriv/digital-thriv/dt-logo.png',
  description:
    'Digital Thriv helps ecommerce brands in India grow with premium online stores and Meta (Facebook & Instagram) ads. Fast replies on WhatsApp. Based in Banda, Uttar Pradesh; remote projects welcome.',
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

/** Swap files under /public/images/ without changing code paths */
export const SITE_IMAGES = {
  hero: '/images/hero-website.png',
  // hero: '/images/hero-placeholder.svg',
  offerEcommerce: '/images/offer-ecommerce.jpg',
  offerMeta: '/images/offer-meta.jpg',
} as const;

/** Partner logos in trust strip — files live under /public/logos/ */
export const TRUST_PARTNER_LOGOS = [
  { src: '/logos/meta.png', alt: 'Meta' },
  { src: '/logos/shopify-logo.svg', alt: 'Shopify Partner' },
  { src: '/logos/cashfree-logo.png', alt: 'Cashfree' },
  { src: '/logos/dropdash-logo.png', alt: 'Dropdash' },
  { src: '/logos/Roposo_logo.webp', alt: 'Roposo' },
  { src: '/logos/fship-logo.png', alt: 'Fship' },
] as const;

export const HOME_STATS = [
  { value: '1000+', label: 'Brands helped' },
  { value: '2+ yrs', label: 'Focused on ecommerce' },
  { value: 'Meta', label: 'Large-scale ad management' },
] as const;

export const STATS_DISCLAIMER =
  'Results vary by product category, market, and ad account. Past performance is not a guarantee of future results.';

/** Homepage marketing copy — keep aligned with APP_CONFIG.description */
export const HOME_COPY = {
  heroEyebrow: 'Ecommerce · Meta ads · India',
  heroHeadline: 'Grow your online store with premium sites and Meta campaigns',
  heroSub:
    'We work with ecommerce brands that want serious execution: high-converting storefronts and Facebook & Instagram ads that support real sales. Same-day replies on WhatsApp when we can.',
  moatLine:
    'How we work can flex with how your store grows — we discuss what fits on WhatsApp.',
  trustTitle: 'Integrations & partners',
  statsTitle: 'At a glance',
  offersTitle: 'What we focus on',
  offersIntro: 'Two core ways we help ecommerce brands — everything else supports these.',
  offerEcommerce: {
    title: 'Premium ecommerce website plan',
    description: 'Stores built to sell: speed, clarity, and structure that match your catalogue and brand.',
    bullets: [
      'Mobile-first layouts and checkout-friendly flows',
      'SEO and technical foundations for organic discovery',
      'Room to scale as your catalogue grows',
    ],
  },
  offerMeta: {
    title: 'Meta ads for ecommerce',
    description: 'Facebook and Instagram campaigns aimed at purchases and measurable outcomes — not vanity clicks.',
    bullets: [
      'Creative and audience testing for online retail',
      'Campaign structure suited to ecommerce funnels',
      'Reporting you can act on',
    ],
  },
  whyTitle: 'Why Digital Thriv',
  whyIntro:
    'We specialise in online retail and Meta — so your site, ads, and messaging stay pointed at sales.',
  whyCards: [
    {
      title: 'Ecommerce-first',
      body: 'We build and promote stores for people who sell online — not generic brochure sites.',
    },
    {
      title: 'Clear scope before we build',
      body: 'You get a plain-language plan you can approve: what we deliver, when, and how we stay in sync.',
    },
    {
      title: 'Store, ads, and reporting together',
      body: 'When your storefront and campaigns live in one thread, your story stays consistent for customers.',
    },
  ],
  alsoHelpTitle: 'Also help with',
  alsoHelpIntro: 'Add-ons and support around your main ecommerce and Meta work.',
  alsoHelpItems: [
    { title: 'Brand & visuals', text: 'Logo, colours, and assets that match your store and ads.' },
    { title: 'SEO & content', text: 'Technical SEO, structure, and content that support discovery.' },
    { title: 'Social & more', text: 'Social presence, email, and campaign creative where it supports sales.' },
  ],
  processSteps: [
    { step: '1', title: 'Discovery', text: 'Your products, audience, and goals — in plain language.' },
    { step: '2', title: 'Scope & creative', text: 'Plan, timelines, and direction you approve before build.' },
    { step: '3', title: 'Build & go live', text: 'Store and campaigns launch with tracking in place.' },
    { step: '4', title: 'Report & improve', text: 'Numbers, tweaks, and scaling what works.' },
  ],
  testimonialBody:
    'Digital Thriv aligned our store and Meta campaigns — clearer tracking and better qualified traffic within weeks. WhatsApp updates were easy.',
  testimonialName: 'Aarav M.',
  testimonialRole: 'Founder, wellness brand (India)',
  clientFeedbackIntro: 'Ask us for references in your category.',
  contactIntro: 'Same-day replies are typical on WhatsApp. Email works well for detailed briefs.',
  ctaTitle: 'Ready to grow your ecommerce brand?',
  ctaSub: 'Message us on WhatsApp with your store link and what you want to improve — we usually reply the same day.',
} as const;
