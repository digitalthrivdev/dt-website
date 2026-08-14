export const commonInclusions = [
  'Agreed product catalog upload',
  'Payment gateway integration',
  'Shipping and logistics integration',
  'Meta Pixel and ad account integration',
  'Mobile-responsive setup and checkout testing',
] as const;

export const faqs = [
  { q: 'Why are your packages priced lower than traditional agencies?', a: 'Our entry packages use standardized delivery systems and a clearly defined scope. This reduces overhead while retaining the essential store, catalog and integration work. Custom development, larger catalogs and advanced functionality are quoted separately.' },
  { q: 'Will I own the website and store?', a: 'Yes. The store is created in or transferred to an account controlled by your business. You retain control of your content, customer data and platform access. Third-party themes, plugins, apps and subscriptions remain subject to their providers’ licensing terms.' },
  { q: 'How do you keep my account secure?', a: 'We recommend collaborator or role-based access instead of sharing your primary password. Access should be limited to the permissions required for the project. WooCommerce security also depends on hosting, SSL, backups, updates and ongoing maintenance.' },
  { q: 'Are domain, hosting and platform fees included?', a: 'Unless expressly included in your written quotation, domain registration, Shopify subscriptions, WordPress hosting, Google Play fees, gateway charges, shipping charges and paid apps or plugins are separate third-party costs.' },
  { q: 'Do you provide post-launch support?', a: 'Post-launch support for issues connected to the agreed implementation is provided for the period stated in your proposal. New features, redesigns, additional products and third-party platform changes may require a separate scope.' },
] as const;

export function faqSchema(items: ReadonlyArray<{ q: string; a: string }>) {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
}
