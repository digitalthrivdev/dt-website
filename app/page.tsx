import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  CheckCircle,
  Star,
  Globe,
  Target,
  Mail,
  MapPin,
  Megaphone,
  Quote,
  FileCheck,
  Store,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import {
  APP_CONFIG,
  HOME_COPY,
  HOME_STATS,
  SITE_IMAGES,
  STATS_DISCLAIMER,
  TRUST_PARTNER_LOGOS,
  contactTelHref,
  whatsappUrl,
} from '@/lib/constants';

const WHATSAPP_DEFAULT = whatsappUrl("Hi, I'd like to discuss my ecommerce store and Meta ads.");

export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-background to-muted/20">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={APP_CONFIG.logo}
                alt="Digital Thriv Logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full"
              />
              <span className="bg-gradient-to-r from-primary to-brand-deep bg-clip-text text-xl font-bold text-transparent">
                {APP_CONFIG.name}
              </span>
            </div>
            <Link
              href={`${APP_CONFIG.dashboardUrl}/auth/signin`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">Sign In</Button>
            </Link>
          </div>
        </div>
      </header>

      <section className="py-14 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <p className="mb-4 text-sm font-medium text-primary">{HOME_COPY.heroEyebrow}</p>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl lg:text-6xl">
                {HOME_COPY.heroHeadline}
              </h1>
              <p className="mb-4 text-lg text-muted-foreground md:text-xl">{HOME_COPY.heroSub}</p>
              <p className="mb-8 text-sm text-muted-foreground">{HOME_COPY.moatLine}</p>
              <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
                <Button
                  size="lg"
                  className="h-auto gap-2 px-8 py-5 text-lg text-white shadow-lg transition-all hover:shadow-xl bg-whatsapp hover:bg-whatsapp-hover focus-visible:ring-2 focus-visible:ring-whatsapp/50"
                  asChild
                >
                  <a href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="size-6 shrink-0" />
                    Message us on WhatsApp
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Prefer email?{' '}
                  <a
                    className="font-medium text-primary underline underline-offset-4"
                    href={`mailto:${APP_CONFIG.contactEmail}`}
                  >
                    {APP_CONFIG.contactEmail}
                  </a>
                </p>
              </div>
            </div>
            <div className="relative order-1 aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-muted shadow-sm lg:order-2">
              <Image
                src={SITE_IMAGES.hero}
                alt="Ecommerce store on a device — replace with your image"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-muted/40 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {HOME_COPY.trustTitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 px-2">
            {TRUST_PARTNER_LOGOS.map(({ src, alt }) => (
              <div
                key={src}
                className="relative flex h-10 w-[min(100%,9rem)] shrink-0 items-center justify-center md:h-12 md:w-[10.5rem]"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-contain object-center opacity-90 transition-opacity hover:opacity-100"
                  sizes="(max-width: 768px) 40vw, 168px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">{HOME_COPY.statsTitle}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {HOME_STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border bg-background px-6 py-8 text-center shadow-sm"
              >
                <p className="text-3xl font-bold tracking-tight text-primary md:text-4xl">{s.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-muted-foreground">{STATS_DISCLAIMER}</p>
        </div>
      </section>

      <section className="bg-muted/50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">{HOME_COPY.offersTitle}</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">{HOME_COPY.offersIntro}</p>
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            <Card className="overflow-hidden border-2">
              <div className="relative aspect-[16/10] w-full bg-muted">
                <Image
                  src={SITE_IMAGES.offerEcommerce}
                  alt="Premium ecommerce website — replace with your image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <Store className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">{HOME_COPY.offerEcommerce.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{HOME_COPY.offerEcommerce.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {HOME_COPY.offerEcommerce.bullets.map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {line}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-2">
              <div className="relative aspect-[16/10] w-full bg-muted">
                <Image
                  src={SITE_IMAGES.offerMeta}
                  alt="Meta ads for ecommerce — replace with your image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <Megaphone className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">{HOME_COPY.offerMeta.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{HOME_COPY.offerMeta.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {HOME_COPY.offerMeta.bullets.map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {line}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">{HOME_COPY.whyTitle}</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">{HOME_COPY.whyIntro}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="space-y-3 rounded-lg border bg-background p-6 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">{HOME_COPY.whyCards[0].title}</h3>
              <p className="text-sm text-muted-foreground">{HOME_COPY.whyCards[0].body}</p>
            </div>
            <div className="space-y-3 rounded-lg border bg-background p-6 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">{HOME_COPY.whyCards[1].title}</h3>
              <p className="text-sm text-muted-foreground">{HOME_COPY.whyCards[1].body}</p>
            </div>
            <div className="space-y-3 rounded-lg border bg-background p-6 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">{HOME_COPY.whyCards[2].title}</h3>
              <p className="text-sm text-muted-foreground">{HOME_COPY.whyCards[2].body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-muted/40 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">{HOME_COPY.alsoHelpTitle}</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">{HOME_COPY.alsoHelpIntro}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {HOME_COPY.alsoHelpItems.map((item) => (
              <Card key={item.title} className="border bg-background">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="mb-10 text-center text-2xl font-semibold md:text-3xl">How we work</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_COPY.processSteps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {item.step}
                </div>
                <p className="font-semibold">{item.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Client feedback</h2>
            <p className="text-muted-foreground">{HOME_COPY.clientFeedbackIntro}</p>
          </div>
          <div className="mx-auto max-w-2xl">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="mb-4 h-8 w-8 text-primary/25" aria-hidden />
                <p className="mb-6 text-muted-foreground">&quot;{HOME_COPY.testimonialBody}&quot;</p>
                <div className="font-semibold">{HOME_COPY.testimonialName}</div>
                <div className="text-sm text-muted-foreground">{HOME_COPY.testimonialRole}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Contact</h2>
            <p className="mx-auto max-w-xl text-muted-foreground">{HOME_COPY.contactIntro}</p>
          </div>
          <div className="mx-auto flex max-w-4xl flex-col flex-wrap items-center justify-center gap-6 rounded-xl border bg-background px-6 py-8 text-center text-sm sm:flex-row sm:gap-10 md:text-left">
            <div className="flex flex-col items-center gap-1 sm:items-start">
              <span className="flex items-center gap-2 font-medium text-foreground">
                <Mail className="h-4 w-4 text-primary" aria-hidden />
                Email
              </span>
              <a href={`mailto:${APP_CONFIG.contactEmail}`} className="text-primary underline underline-offset-4">
                {APP_CONFIG.contactEmail}
              </a>
            </div>
            <div className="flex flex-col items-center gap-1 sm:items-start">
              <span className="flex items-center gap-2 font-medium text-foreground">
                <WhatsAppIcon className="size-4 shrink-0 text-whatsapp" aria-hidden />
                WhatsApp / phone
              </span>
              <a
                href={WHATSAPP_DEFAULT}
                className="font-medium text-whatsapp underline underline-offset-4 hover:text-whatsapp-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                {APP_CONFIG.contactPhoneDisplay}
              </a>
            </div>
            <div className="flex flex-col items-center gap-1 sm:items-start">
              <span className="flex items-center gap-2 font-medium text-foreground">
                <MapPin className="h-4 w-4 text-primary" aria-hidden />
                Location
              </span>
              <span className="max-w-xs text-muted-foreground">{APP_CONFIG.contactAddress}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary to-brand-deep py-16 md:py-20">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{HOME_COPY.ctaTitle}</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/90">{HOME_COPY.ctaSub}</p>
          <Button
            size="lg"
            className="h-auto gap-2 px-10 py-5 text-lg text-white shadow-lg bg-whatsapp hover:bg-whatsapp-hover focus-visible:ring-2 focus-visible:ring-white/40"
            asChild
          >
            <a href={WHATSAPP_DEFAULT} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-6 shrink-0" />
              Open WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <footer className="border-t bg-muted/50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 text-sm text-muted-foreground md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <p className="text-base font-semibold text-foreground">Need support?</p>
              <p>
                Email{' '}
                <a href={`mailto:${APP_CONFIG.contactEmail}`} className="text-primary underline">
                  {APP_CONFIG.contactEmail}
                </a>
                {' · '}
                <a href={contactTelHref()} className="text-primary underline">
                  {APP_CONFIG.contactPhoneDisplay}
                </a>
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-base font-semibold text-foreground">Company</p>
              <ul className="space-y-1">
                <li>
                  <Link href="/privacy-policy" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="hover:text-primary">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/cancellation-and-refund-policy" className="hover:text-primary">
                    Cancellation &amp; Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-base font-semibold text-foreground">Visit us</p>
              <p>{APP_CONFIG.contactAddress}</p>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Digital Thriv. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
