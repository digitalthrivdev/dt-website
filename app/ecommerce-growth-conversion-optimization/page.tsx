import type { Metadata } from 'next';
import { ServicePage } from '@/components/service-page';
import { APP_CONFIG } from '@/lib/constants';

const path = '/ecommerce-growth-conversion-optimization';

export const metadata: Metadata = {
  title: { absolute: 'Ecommerce Growth & CRO Agency | Digital Thriv' },
  description: 'Improve an existing ecommerce store with conversion-focused UX, premium graphics, Meta tracking, checkout, catalog and acquisition reviews.',
  alternates: { canonical: path },
  openGraph: {
    title: 'Ecommerce Growth and Conversion Optimization | Digital Thriv',
    description: 'Find and fix the UX, conversion, tracking or acquisition bottlenecks holding back your ecommerce store.',
    url: path,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Growth and Conversion Optimization | Digital Thriv',
    description: 'A focused review for existing stores that need stronger conversion, tracking or acquisition.',
  },
};

const plans = [
  {
    name: 'Ecommerce Growth & Conversion Review',
    price: 'Custom scope',
    bestFor: 'Existing Shopify and WooCommerce stores',
    intro: 'Identify the highest-impact issues across storefront clarity, product presentation, conversion, tracking, checkout and customer acquisition before investing in disconnected changes.',
    features: [
      'Store and product-page UX review',
      'Conversion-focused graphics review',
      'Offer and trust-element review',
      'Meta Pixel and catalog diagnostics',
      'Payment and checkout-flow review',
      'Logistics integration review',
      'Campaign structure and creative review',
      'Prioritized written recommendations',
    ],
    note: 'The quotation confirms whether the engagement covers an audit, implementation, campaign management or a combination. Advertising spend, paid apps and third-party subscriptions are separate.',
  },
] as const;

const faqs = [
  {
    q: 'What does an ecommerce conversion optimization review include?',
    a: 'The review can cover navigation, mobile usability, product pages, offer clarity, trust elements, checkout flow, Meta tracking, catalog setup, payment issues, logistics integration and campaign structure. The agreed areas are confirmed before work starts.',
  },
  {
    q: 'Can you improve my existing Shopify or WooCommerce store?',
    a: 'Yes. We can review and improve an existing Shopify or WooCommerce store when collaborator access, theme structure, plugins and third-party systems permit the required changes.',
  },
  {
    q: 'Do you guarantee a specific conversion rate or revenue result?',
    a: 'No agency can responsibly guarantee a specific conversion rate or revenue result. Outcomes depend on the product, offer, traffic quality, pricing, market, customer demand and implementation. We provide a defined scope and evidence-based priorities.',
  },
  {
    q: 'Can Digital Thriv also manage Meta Ads?',
    a: 'Yes, campaign structure, creative direction, tracking and ongoing Meta Ads management can be included in a separate written scope based on your current account, products and advertising goals.',
  },
  {
    q: 'Will I receive the recommendations in writing?',
    a: 'Yes. The deliverables and recommendations included in the engagement are documented so your team can understand the priorities, responsibilities and next actions.',
  },
];

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Ecommerce Growth and Conversion Optimization',
    serviceType: 'Ecommerce conversion optimization and growth consulting',
    description: 'Conversion-focused ecommerce UX, tracking, checkout and acquisition reviews for existing online stores.',
    url: `${APP_CONFIG.websiteUrl}${path}`,
    image: `${APP_CONFIG.websiteUrl}/images/grow-store-premium.png`,
    provider: {
      '@type': 'Organization',
      name: 'Digital Thriv',
      url: APP_CONFIG.websiteUrl,
      telephone: APP_CONFIG.contactPhoneE164,
    },
    areaServed: { '@type': 'Country', name: 'India' },
  };

  return (
    <ServicePage
      path={path}
      eyebrow="Ecommerce growth and conversion optimization"
      title="Improve the Store You Already Have"
      lead="Find and fix the storefront, conversion, tracking, checkout or acquisition bottlenecks limiting an existing ecommerce business."
      plans={plans}
      includedTitle="What We Can Review and Improve"
      included={[
        'Store and product-page UX',
        'Mobile buying journey',
        'Premium conversion graphics',
        'Offer and trust presentation',
        'Meta Pixel and catalog tracking',
        'Payment and checkout flow',
        'Logistics integration issues',
        'Campaign creative and structure',
      ]}
      process={[
        'Share the store and business context',
        'Identify the highest-impact bottlenecks',
        'Agree the implementation scope',
        'Improve, test and document changes',
      ]}
      faqs={faqs}
      schema={schema}
      related={[
        { href: '/shopify-website-development-packages-india', label: 'Shopify packages' },
        { href: '/woocommerce-development-d2c-india', label: 'WooCommerce development' },
        { href: '/ecommerce-app-development-agency', label: 'Website + Android app' },
      ]}
      heroImage="/images/grow-store-premium.png"
      heroImageAlt="Ecommerce storefront growth and conversion analytics command center"
    />
  );
}
