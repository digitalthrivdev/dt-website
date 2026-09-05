import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, ChevronRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { JsonLd, SiteFooter, SiteHeader } from '@/components/site-shell';
import { APP_CONFIG, TRUST_PARTNER_LOGOS, whatsappUrl } from '@/lib/constants';
import { faqSchema } from '@/lib/seo-content';

type Plan = {
  id?: string;
  name: string;
  price: string;
  intro: string;
  bestFor: string;
  features: readonly string[];
  note?: string;
};

type FAQ = { q: string; a: string };

type ServicePageProps = {
  eyebrow: string;
  title: string;
  lead: string;
  plans: readonly Plan[];
  includedTitle: string;
  included: readonly string[];
  process: readonly string[];
  faqs: readonly FAQ[];
  schema: object;
  related: readonly { href: string; label: string }[];
  path: string;
  heroImage?: string;
  heroImageAlt?: string;
};

export function ServicePage({
  eyebrow,
  title,
  lead,
  plans,
  includedTitle,
  included,
  process,
  faqs,
  schema,
  related,
  path,
  heroImage,
  heroImageAlt = '',
}: ServicePageProps) {
  const quotePrompt = `Hi Digital Thriv, I am interested in ${title}. Please confirm the appropriate package, requirements and written scope.`;
  const quote = whatsappUrl(quotePrompt);
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: APP_CONFIG.websiteUrl },
      { '@type': 'ListItem', position: 2, name: title, item: `${APP_CONFIG.websiteUrl}${path}` },
    ],
  };

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <JsonLd data={schema} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema} />
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden pb-16 pt-12 sm:pt-16 lg:pb-24 lg:pt-20">
          <div className="absolute left-1/2 top-0 -z-10 h-[32rem] w-[72rem] -translate-x-1/2 rounded-full bg-primary/[.075] blur-3xl" />
          <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.04fr_.96fr] lg:gap-14">
            <div>
              <p className="inline-flex rounded-full border border-primary/15 bg-primary/[.06] px-3 py-1.5 text-xs font-bold uppercase tracking-[.14em] text-primary">
                {eyebrow}
              </p>
              <h1 className="display-font text-balance mt-6 text-[2.6rem] font-bold leading-[1.04] sm:text-6xl lg:text-[4rem]">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{lead}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={quote}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-whatsapp px-6 font-bold text-white shadow-lg shadow-whatsapp/20 transition hover:-translate-y-0.5 hover:bg-whatsapp-hover"
                >
                  <MessageCircle className="size-5" /> Discuss this requirement
                </a>
                <a
                  href="#packages"
                  className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-primary/20 bg-white/75 px-6 font-bold transition hover:border-primary/45 hover:bg-white"
                >
                  View package scope <ChevronRight className="size-4 text-primary" />
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                {['Written scope', 'Business-owned account', 'Integrations tested'].map((item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <Check className="size-4 text-primary" /> {item}
                  </span>
                ))}
              </div>
            </div>

            {heroImage ? (
              <div className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-primary/15 bg-[#171126] shadow-[0_40px_100px_-40px_rgba(79,58,158,.72)]">
                <Image src={heroImage} alt={heroImageAlt} fill priority sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171126]/55 via-transparent to-transparent" />
                <div className="glass-dark absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 rounded-2xl px-4 py-3 text-white sm:inset-x-5 sm:bottom-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[.15em] text-[#bcaaf2]">Designed to sell</p>
                    <p className="mt-1 text-sm font-semibold">Storefront, catalog and integrations</p>
                  </div>
                  <span className="size-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,.8)]" />
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
              </div>
            ) : <div className="relative overflow-hidden rounded-[2rem] bg-[#211832] p-5 text-white shadow-[0_40px_100px_-40px_rgba(79,58,158,.72)] sm:p-7">
              <div className="absolute -right-20 -top-20 size-64 rounded-full bg-primary/35 blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[.15em] text-[#bcaaf2]">Available package{plans.length > 1 ? 's' : ''}</p>
                    <p className="mt-1 text-sm text-white/45">Clear starting scope. No vague estimate.</p>
                  </div>
                  <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,.8)]" />
                </div>
                <div className="mt-4 grid gap-3">
                  {plans.map((plan, index) => (
                    <a
                      key={plan.name}
                      href={`#${plan.id || 'packages'}`}
                      className={`group rounded-2xl border p-5 transition hover:-translate-y-0.5 ${index === plans.length - 1 ? 'border-white/20 bg-white/[.11]' : 'border-white/10 bg-white/[.055] hover:bg-white/[.09]'}`}
                    >
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <p className="text-xs text-white/45">For {plan.bestFor}</p>
                          <h2 className="display-font mt-2 text-xl font-bold sm:text-2xl">{plan.name}</h2>
                        </div>
                        <ArrowRight className="mt-1 size-4 shrink-0 text-white/35 transition group-hover:translate-x-1 group-hover:text-white" />
                      </div>
                      <p className="mt-5 text-3xl font-bold">{plan.price}</p>
                    </a>
                  ))}
                </div>
                <p className="mt-5 text-xs leading-5 text-white/40">Final scope, catalog limit and third-party charges are confirmed before payment.</p>
              </div>
            </div>}
          </div>
        </section>

        <section aria-labelledby="partners-heading" className="border-y border-border/60 py-8 sm:py-10">
          <div className="section-shell">
            <div className="mb-7 text-center sm:mb-8">
              <h2 id="partners-heading" className="display-font text-2xl font-bold sm:text-3xl">Partners and Integration</h2>
              <p className="mt-2 text-sm font-semibold text-muted-foreground sm:text-base">
                <span className="text-foreground">Official Shopify Partner.</span> Integrated with Meta, Cashfree, Shiprocket &amp; more.
              </p>
            </div>
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-9 gap-y-7 sm:gap-x-12 lg:justify-between">
              {TRUST_PARTNER_LOGOS.map(({ src, alt }) => (
                <div key={src} className="group relative h-8 w-24 sm:h-9 sm:w-28 lg:w-32">
                  <Image src={src} alt={alt} fill sizes="128px" className="object-contain opacity-55 grayscale transition duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="scroll-mt-24 py-20 lg:py-28">
          <div className="section-shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[.16em] text-primary">Package and deliverables</p>
              <h2 className="display-font mt-3 text-4xl font-bold sm:text-5xl">Know what you are buying.</h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">Each package uses a defined ecommerce workflow, with the exact limits and exclusions written into your quotation.</p>
            </div>

            <div className={`mx-auto mt-12 grid max-w-6xl gap-5 ${plans.length > 1 ? 'lg:grid-cols-2' : 'max-w-3xl'}`}>
              {plans.map((plan, index) => (
                <article
                  id={plan.id}
                  key={plan.name}
                  className={`relative flex scroll-mt-24 flex-col rounded-[1.75rem] border p-6 sm:p-8 ${plans.length > 1 && index === plans.length - 1 ? 'border-primary bg-primary/[.04] shadow-xl shadow-primary/10' : 'bg-background/80'}`}
                >
                  {plans.length > 1 && index === plans.length - 1 && (
                    <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">Best for long-term brands</span>
                  )}
                  <p className="text-sm font-bold text-primary">For {plan.bestFor}</p>
                  <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
                    <h3 className="display-font max-w-md text-2xl font-bold sm:text-3xl">{plan.name}</h3>
                    <p className="text-4xl font-bold">{plan.price}</p>
                  </div>
                  <p className="mt-5 leading-7 text-muted-foreground">{plan.intro}</p>
                  <ul className="my-7 grid gap-3 sm:grid-cols-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm leading-6">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                          <Check className="size-3.5" strokeWidth={3} />
                        </span>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.note && <p className="mt-auto rounded-2xl border border-primary/10 bg-primary/[.045] p-4 text-sm leading-6 text-muted-foreground">{plan.note}</p>}
                  <a href={quote} target="_blank" rel="noopener noreferrer" className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-whatsapp px-5 text-sm font-bold text-white transition hover:bg-whatsapp-hover">
                    <MessageCircle className="size-4" /> Ask about this package
                  </a>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-6 text-muted-foreground">Starting prices apply to the defined base scope. Domain, hosting, platform subscriptions, paid apps or plugins, payment-gateway fees, shipping charges, additional products and custom development are separate unless included in writing.</p>
          </div>
        </section>

        <section className="border-y bg-primary/[.035] py-20 lg:py-28">
          <div className="section-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.16em] text-primary">Complete launch scope</p>
              <h2 className="display-font text-balance mt-3 text-4xl font-bold sm:text-5xl">{includedTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">The essentials are planned as one connected selling system, then tested before handover.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {included.map((item, index) => (
                <div key={item} className="flex min-h-20 items-center gap-4 rounded-2xl border bg-background/80 p-4 transition hover:border-primary/30 hover:bg-background">
                  <span className="display-font text-sm font-bold text-primary/45">{String(index + 1).padStart(2, '0')}</span>
                  <span className="font-semibold leading-6">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="section-shell">
            <div className="grid items-end gap-6 lg:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-[.16em] text-primary">From scope to launch</p>
                <h2 className="display-font mt-3 text-4xl font-bold sm:text-5xl">A clear build sequence.</h2>
              </div>
              <p className="max-w-xl text-lg leading-8 text-muted-foreground lg:justify-self-end">You always know what is being confirmed, built, connected and reviewed next.</p>
            </div>
            <ol className="mt-12 grid border-y md:grid-cols-4">
              {process.map((item, index) => (
                <li key={item} className="relative border-b px-2 py-7 last:border-b-0 md:border-b-0 md:border-r md:px-6 md:last:border-r-0">
                  <span className="display-font text-4xl font-bold text-primary/20">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="mt-4 max-w-[14rem] text-lg font-semibold leading-7">{item}</h3>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-y bg-muted/40 py-20 lg:py-28">
          <div className="section-shell max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-14">
              <div>
                <ShieldCheck className="size-8 text-primary" />
                <p className="mt-6 text-sm font-bold uppercase tracking-[.16em] text-primary">Before you commit</p>
                <h2 className="display-font text-balance mt-3 text-4xl font-bold sm:text-5xl">Ownership, security and support.</h2>
                <p className="mt-5 leading-8 text-muted-foreground">Your quotation records deliverables, third-party costs, revision allowance and the post-launch support period.</p>
              </div>
              <div className="divide-y overflow-hidden rounded-3xl border bg-background px-5 sm:px-8">
                {faqs.map((item) => (
                  <details key={item.q} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">
                      <span>{item.q}</span>
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-muted text-primary transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="max-w-3xl pb-2 pt-4 leading-7 text-muted-foreground">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="section-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.16em] text-muted-foreground">Explore related services</p>
              <h2 className="display-font mt-2 text-2xl font-bold">Compare another way to build.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {related.map((item) => (
                <Link key={item.href} href={item.href} className="inline-flex min-h-11 items-center gap-1 rounded-xl border border-primary/20 bg-background px-4 text-sm font-bold transition hover:border-primary/45 hover:text-primary">
                  {item.label} <ChevronRight className="size-4" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#211832] py-20 text-white lg:py-24">
          <div className="absolute -left-32 -top-32 size-96 rounded-full bg-primary/30 blur-3xl" />
          <div className="section-shell relative grid items-center gap-10 lg:grid-cols-[1fr_.8fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.16em] text-[#bcaaf2]">Get the exact scope first</p>
              <h2 className="display-font text-balance mt-3 text-4xl font-bold sm:text-5xl">Tell us what you want to sell.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">Send your business type, product category and approximate catalog size. We will recommend the appropriate starting point.</p>
            </div>
            <div className="glass-dark rounded-3xl p-5 sm:p-6">
              <div className="rounded-2xl rounded-bl-sm bg-white px-4 py-3 text-sm leading-6 text-[#211832]">Hi Digital Thriv, I want help choosing the right package for my ecommerce business.</div>
              <a href={quote} target="_blank" rel="noopener noreferrer" className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-whatsapp font-bold text-white hover:bg-whatsapp-hover">
                <MessageCircle className="size-4" /> Start on WhatsApp
              </a>
              <a href={`tel:${APP_CONFIG.contactPhoneE164}`} className="mt-3 flex min-h-11 items-center justify-center text-sm font-semibold text-white/65 hover:text-white">Prefer to call? {APP_CONFIG.contactPhoneDisplay}</a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
