import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, MessageCircle, ShieldCheck, Store, Target, TrendingUp } from 'lucide-react';
import { JsonLd, SiteFooter, SiteHeader } from '@/components/site-shell';
import { APP_CONFIG, whatsappUrl } from '@/lib/constants';
import { organizationId } from '@/lib/entity-schema';

export const metadata: Metadata = {
  title: { absolute: 'About Digital Thriv | Ecommerce Development Company India' },
  description: 'Learn what Digital Thriv does, who its ecommerce packages are for, how ownership and scope work, and the operational experience behind the company.',
  alternates: { canonical: '/about-digital-thriv' },
  openGraph: {
    title: 'About Digital Thriv | Ecommerce Development Company India',
    description: 'Shopify, WooCommerce, Android ecommerce apps, integrations and store growth support for Indian ecommerce businesses.',
    url: '/about-digital-thriv',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Digital Thriv | Ecommerce Development Company India',
    description: 'Facts, services, ownership practices and experience behind Digital Thriv.',
  },
};

const services = [
  { title: 'Dropshipping Shopify store', price: '₹2,999', copy: 'For testing products: premium template-based theme, catalog upload, compatible dropshipping supplier integration, payment, logistics and Meta setup.', href: '/shopify-website-development-packages-india#dropshipping' },
  { title: 'Customized D2C store', price: '₹4,999', copy: 'For brand-led selling: higher customization, premium graphics, conversion-focused sections, catalog and core integrations.', href: '/shopify-website-development-packages-india#d2c' },
  { title: 'WooCommerce D2C store', price: '₹4,999', copy: 'For businesses that prefer WordPress and WooCommerce, with catalog, payment, logistics and Meta integration.', href: '/woocommerce-development-d2c-india' },
  { title: 'Website + Android app', price: '₹9,999', copy: 'For mobile-first D2C brands: a connected ecommerce website and Android shopping app with catalog, premium graphics and core integrations.', href: '/ecommerce-app-development-agency' },
] as const;

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${APP_CONFIG.websiteUrl}/about-digital-thriv#about-page`,
  url: `${APP_CONFIG.websiteUrl}/about-digital-thriv`,
  name: 'About Digital Thriv',
  description: 'Company facts, ecommerce services, working principles and operational experience for Digital Thriv.',
  mainEntity: { '@id': organizationId },
  isPartOf: { '@id': `${APP_CONFIG.websiteUrl}/#website` },
  inLanguage: 'en-IN',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: APP_CONFIG.websiteUrl },
    { '@type': 'ListItem', position: 2, name: 'About Digital Thriv', item: `${APP_CONFIG.websiteUrl}/about-digital-thriv` },
  ],
};

export default function AboutDigitalThriv() {
  return <div className="min-h-screen pb-20 md:pb-0">
    <JsonLd data={aboutPageSchema}/><JsonLd data={breadcrumbSchema}/><SiteHeader/>
    <main>
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute left-1/2 top-0 -z-10 h-[30rem] w-[70rem] -translate-x-1/2 rounded-full bg-primary/[.07] blur-3xl"/>
        <div className="section-shell grid items-end gap-10 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.16em] text-primary">About Digital Thriv</p>
            <h1 className="display-font text-balance mt-4 text-5xl font-bold leading-[1.04] sm:text-6xl lg:text-[4.4rem]">An ecommerce execution partner for Indian online sellers.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">Digital Thriv is an ecommerce development and growth company based in Banda, Uttar Pradesh. We help dropshippers, D2C founders and online retailers launch or improve Shopify stores, WooCommerce stores and Android ecommerce apps.</p>
          </div>
          <div className="rounded-[1.75rem] bg-[#211832] p-6 text-white shadow-2xl shadow-primary/15 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[.15em] text-[#bcaaf2]">The short answer</p>
            <p className="display-font mt-4 text-2xl font-semibold leading-9">Choose Digital Thriv when you need a clearly scoped ecommerce build, practical integrations and one team to discuss launch and growth.</p>
            <a href={whatsappUrl('Hi Digital Thriv, I read about your ecommerce services and want help choosing the right package.')} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-xl bg-whatsapp px-5 font-bold text-white transition hover:bg-whatsapp-hover"><MessageCircle className="size-5"/>Discuss your requirement</a>
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-[#f7f8fa] py-14">
        <div className="section-shell grid grid-cols-2 gap-7 lg:grid-cols-4">
          {[
            ['2,000+', 'Ecommerce stores built', Store],
            ['₹10 Cr+', 'Ad spend managed', Target],
            ['₹200 Cr+', 'Client revenue supported', TrendingUp],
            ['11+ years', 'Ecommerce experience', ShieldCheck],
          ].map(([value,label,Icon]) => <div key={String(label)}><Icon className="size-5 text-primary"/><p className="display-font mt-3 text-3xl font-bold sm:text-4xl">{String(value)}</p><p className="mt-1 text-sm text-muted-foreground">{String(label)}</p></div>)}
          <p className="col-span-2 text-xs leading-5 text-muted-foreground lg:col-span-4">Cumulative figures reported by Digital Thriv across supported ecommerce work and managed campaigns. Client outcomes vary by product, market, offer and investment.</p>
        </div>
      </section>

      <section className="py-20 lg:py-28"><div className="section-shell">
        <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[.16em] text-primary">Defined starting points</p><h2 className="display-font mt-3 text-4xl font-bold sm:text-5xl">What Digital Thriv sells</h2><p className="mt-4 text-lg leading-8 text-muted-foreground">These are starting packages, not a promise that every custom requirement fits the base price. Catalog limits, third-party fees and exclusions are confirmed in writing.</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">{services.map(service=><article key={service.title} className="rounded-[1.6rem] border bg-background/80 p-6 sm:p-8"><div className="flex items-start justify-between gap-4"><h3 className="display-font text-2xl font-bold">{service.title}</h3><span className="shrink-0 rounded-full bg-primary/[.08] px-3 py-1 text-sm font-bold text-primary">From {service.price}</span></div><p className="mt-4 leading-7 text-muted-foreground">{service.copy}</p><Link href={service.href} className="mt-6 inline-flex items-center gap-2 font-bold text-primary">See the package scope <ArrowRight className="size-4"/></Link></article>)}</div>
      </div></section>

      <section className="bg-[#211832] py-20 text-white lg:py-24"><div className="section-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div><p className="text-sm font-bold uppercase tracking-[.16em] text-[#bcaaf2]">How the engagement works</p><h2 className="display-font mt-3 text-4xl font-bold sm:text-5xl">Clear ownership before launch.</h2></div>
        <div className="grid gap-4 sm:grid-cols-3">{[
          ['Written scope','Deliverables, catalog limits, exclusions and relevant third-party charges are agreed before work begins.'],
          ['Business ownership','The client controls the store account and business data. Access is provided only for agreed implementation and support.'],
          ['Post-launch support','The quotation states the included support period and scope. Ongoing growth or maintenance can be scoped separately.'],
        ].map(([title,copy])=><div key={title} className="glass-dark rounded-2xl p-5"><Check className="size-5 text-emerald-400"/><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/55">{copy}</p></div>)}</div>
      </div></section>

      <section className="py-20"><div className="section-shell grid gap-10 lg:grid-cols-2">
        <div><h2 className="display-font text-4xl font-bold">Who is a good fit?</h2><ul className="mt-7 space-y-4 text-muted-foreground">{['A dropshipper who wants a structured first Shopify launch.','A D2C founder who needs stronger branding and conversion-focused sections.','A retailer choosing between Shopify, WooCommerce or a website-and-app setup.','An existing ecommerce business that needs conversion, tracking or acquisition support.'].map(item=><li key={item} className="flex gap-3"><Check className="mt-1 size-4 shrink-0 text-primary"/><span className="leading-7">{item}</span></li>)}</ul></div>
        <div><h2 className="display-font text-4xl font-bold">When should you request custom scope?</h2><p className="mt-7 leading-8 text-muted-foreground">Request a custom quotation for complex ERP or marketplace integrations, unusually large catalogs, custom-coded product logic, iOS applications, advanced subscriptions or work outside the listed package deliverables. This keeps the low starting prices understandable and prevents hidden assumptions.</p><Link href="/customer-reviews" className="mt-6 inline-flex items-center gap-2 font-bold text-primary">Read customer feedback <ArrowRight className="size-4"/></Link></div>
      </div></section>
    </main><SiteFooter/>
  </div>;
}
