import type { ReactNode } from 'react';
import Link from 'next/link';
import { SiteHeader } from '@/components/site-shell';

export function StatusPage({
  kicker,
  title,
  description,
  logoHref = '/',
  children,
}: {
  kicker: string;
  title: string;
  description: string;
  logoHref?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <SiteHeader variant="logoOnly" logoHref={logoHref} />
      <main>
        <section className="relative overflow-hidden py-16 lg:py-24">
          <div className="absolute left-1/2 top-0 -z-10 h-[30rem] w-[70rem] -translate-x-1/2 rounded-full bg-primary/[.07] blur-3xl" />
          <div className="section-shell">
            <div className="mx-auto max-w-xl rounded-[1.75rem] border border-black/[.07] bg-white p-8 text-center sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[.16em] text-primary">{kicker}</p>
              <h1 className="display-font mt-4 text-3xl font-bold sm:text-4xl">{title}</h1>
              <p className="mt-3 leading-7 text-muted-foreground">{description}</p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">{children}</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export function StatusPrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-5 font-bold text-white transition hover:bg-primary/90"
    >
      {children}
    </Link>
  );
}

export function StatusSecondaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center justify-center rounded-xl border border-primary/20 px-5 font-bold text-primary transition hover:border-primary/45 hover:bg-primary/[.04]"
    >
      {children}
    </Link>
  );
}

export const statusPrimaryButtonClass =
  'inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-5 font-bold text-white transition hover:bg-primary/90';
