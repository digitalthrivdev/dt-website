import { APP_CONFIG } from '@/lib/constants';

export const organizationId = `${APP_CONFIG.websiteUrl}/#organization`;
export const websiteId = `${APP_CONFIG.websiteUrl}/#website`;

const services = [
  {
    name: 'Shopify dropshipping store setup',
    description: 'Template-based Shopify store with a premium theme, catalog upload and core ecommerce integrations.',
    url: `${APP_CONFIG.websiteUrl}/shopify-website-development-packages-india#dropshipping`,
    price: '2999',
  },
  {
    name: 'Customized D2C ecommerce store',
    description: 'A more customized D2C storefront with premium graphics and conversion-focused sections.',
    url: `${APP_CONFIG.websiteUrl}/shopify-website-development-packages-india#d2c`,
    price: '4999',
  },
  {
    name: 'WooCommerce development for D2C brands',
    description: 'WooCommerce store setup with catalog, payment, logistics and Meta integration.',
    url: `${APP_CONFIG.websiteUrl}/woocommerce-development-d2c-india`,
    price: '4999',
  },
  {
    name: 'Ecommerce website and Android app',
    description: 'Connected ecommerce website and Android shopping app with catalog and core integrations.',
    url: `${APP_CONFIG.websiteUrl}/ecommerce-app-development-agency`,
    price: '9999',
  },
] as const;

export const entityGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': organizationId,
      name: APP_CONFIG.name,
      url: APP_CONFIG.websiteUrl,
      logo: {
        '@type': 'ImageObject',
        url: APP_CONFIG.logo,
      },
      description: 'Digital Thriv builds and improves ecommerce stores for dropshippers, D2C founders and online retailers in India. Services include Shopify, WooCommerce, Android ecommerce apps, integrations, conversion optimization and performance marketing.',
      slogan: 'Build, improve and grow your ecommerce store.',
      email: APP_CONFIG.contactEmail,
      telephone: APP_CONFIG.contactPhoneE164,
      priceRange: '₹2,999–₹9,999+',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Banda',
        addressRegion: 'Uttar Pradesh',
        postalCode: '208025',
        addressCountry: 'IN',
      },
      areaServed: { '@type': 'Country', name: 'India' },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: APP_CONFIG.contactPhoneE164,
          email: APP_CONFIG.contactEmail,
          contactType: 'sales and customer support',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi'],
        },
      ],
      knowsAbout: [
        'Shopify development',
        'WooCommerce development',
        'Dropshipping store setup',
        'D2C ecommerce',
        'Android ecommerce app development',
        'Ecommerce conversion optimization',
        'Meta advertising for ecommerce',
        'Payment gateway integration',
        'Ecommerce logistics integration',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Thriv ecommerce packages',
        itemListElement: services.map((service) => ({
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: service.price,
          availability: 'https://schema.org/InStock',
          url: service.url,
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description,
            provider: { '@id': organizationId },
            areaServed: { '@type': 'Country', name: 'India' },
          },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: APP_CONFIG.websiteUrl,
      name: APP_CONFIG.name,
      description: APP_CONFIG.description,
      publisher: { '@id': organizationId },
      inLanguage: 'en-IN',
    },
  ],
} as const;
