import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { MobileConversionDock } from '@/components/conversion-system';
import { APP_CONFIG, whatsappUrl } from '@/lib/constants';

const quoteUrl = whatsappUrl('Hi, I would like a written quote for an ecommerce package.');
const supportUrl = whatsappUrl('Hi Digital Thriv Support, I need help with my existing project. Please let me know what details you need to identify my project and resolve the issue.');

export function SiteHeader() {
  return (
    <><header className="sticky top-0 z-50 border-b border-primary/10 bg-background/86 backdrop-blur-xl">
      <div className="container mx-auto flex min-h-[4.5rem] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Digital Thriv home">
          <Image src={APP_CONFIG.logo} alt="Digital Thriv" width={34} height={34} className="rounded-full" />
          <span className="brand-wordmark text-[1.15rem] leading-none text-foreground">Digital <span className="brand-wordmark-accent text-primary">Thriv</span></span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex" aria-label="Main navigation">
          <Link href="/#intent" className="hover:text-primary">Start a Store</Link>
          <Link href="/shopify-website-development-packages-india#d2c" className="hover:text-primary">Build a D2C Brand</Link>
          <Link href="/ecommerce-app-development-agency" className="hover:text-primary">Website + App</Link>
          <Link href="/ecommerce-growth-conversion-optimization" className="hover:text-primary">Grow Your Store</Link>
          <Link href="/#reviews" className="hover:text-primary">Results</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <a href={`${APP_CONFIG.dashboardUrl}/auth/signin`} target="_blank" rel="noopener noreferrer">Sign In</a>
          </Button>
          <Button asChild className="hidden rounded-xl bg-whatsapp text-white shadow-lg shadow-whatsapp/15 hover:bg-whatsapp-hover md:inline-flex">
            <a href={quoteUrl} target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="size-4"/>Discuss your store</a>
          </Button>
          <Button asChild variant="outline" className="sm:hidden"><a href={`${APP_CONFIG.dashboardUrl}/auth/signin`} target="_blank" rel="noopener noreferrer">Sign In</a></Button>
        </div>
      </div>
    </header><MobileConversionDock /></>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t bg-background pb-28 pt-16 text-foreground md:pb-8 md:pt-20">
      <div className="absolute -right-40 -top-56 size-[30rem] rounded-full bg-primary/[.06] blur-3xl"/>
      <div className="container relative">
        <div className="grid gap-12 border-b border-border pb-14 lg:grid-cols-[1.35fr_.65fr_.65fr_.85fr] lg:gap-10">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Digital Thriv home">
              <Image src={APP_CONFIG.logo} alt="Digital Thriv" width={42} height={42} className="rounded-full" />
              <span className="brand-wordmark text-2xl leading-none">Digital <span className="brand-wordmark-accent text-primary">Thriv</span></span>
            </Link>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">Build, improve and grow ecommerce stores with one team across websites, Android apps, integrations and performance marketing.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={quoteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-whatsapp px-5 font-bold text-white shadow-lg shadow-black/15 transition hover:-translate-y-0.5 hover:bg-whatsapp-hover"><WhatsAppIcon className="size-5"/>Discuss your ecommerce store</a>
              <a href={supportUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-primary/20 bg-background px-5 font-bold text-primary transition hover:-translate-y-0.5 hover:border-primary/45 hover:bg-primary/[.04]"><WhatsAppIcon className="size-5"/>Need support?</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[.16em] text-muted-foreground">Build</p>
            <nav className="mt-5 grid gap-3 text-sm text-muted-foreground" aria-label="Footer build services">
              <Link href="/shopify-website-development-packages-india#dropshipping" className="transition hover:text-primary">Dropshipping store</Link>
              <Link href="/shopify-website-development-packages-india#d2c" className="transition hover:text-primary">Shopify D2C store</Link>
              <Link href="/woocommerce-development-d2c-india" className="transition hover:text-primary">WooCommerce store</Link>
              <Link href="/ecommerce-app-development-agency" className="transition hover:text-primary">Website + Android app</Link>
            </nav>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[.16em] text-muted-foreground">Explore</p>
            <nav className="mt-5 grid gap-3 text-sm text-muted-foreground" aria-label="Footer website links">
              <Link href="/#intent" className="transition hover:text-primary">Choose a service</Link>
              <Link href="/#compare" className="transition hover:text-primary">Compare packages</Link>
              <Link href="/ecommerce-growth-conversion-optimization" className="transition hover:text-primary">Improve your store</Link>
              <Link href="/#reviews" className="transition hover:text-primary">Customer stories</Link>
              <a href={`${APP_CONFIG.dashboardUrl}/auth/signin`} target="_blank" rel="noopener noreferrer" className="transition hover:text-primary">Client sign in</a>
            </nav>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[.16em] text-muted-foreground">Contact</p>
            <div className="mt-5 grid gap-4 text-sm leading-6 text-muted-foreground">
              <div><p className="text-foreground/45">Email</p><a href={`mailto:${APP_CONFIG.contactEmail}`} className="transition hover:text-primary">{APP_CONFIG.contactEmail}</a></div>
              <div><p className="text-foreground/45">Call or WhatsApp</p><a href={`tel:${APP_CONFIG.contactPhoneE164}`} className="transition hover:text-primary">{APP_CONFIG.contactPhoneDisplay}</a></div>
              <div><p className="text-foreground/45">Office</p><p>{APP_CONFIG.contactAddress}</p></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Digital Thriv. Ecommerce execution for Indian businesses.</p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Legal links"><Link href="/privacy-policy" className="transition hover:text-primary">Privacy Policy</Link><Link href="/terms-and-conditions" className="transition hover:text-primary">Terms &amp; Conditions</Link><Link href="/cancellation-and-refund-policy" className="transition hover:text-primary">Cancellation &amp; Refunds</Link></nav>
        </div>
      </div>
    </footer>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}
