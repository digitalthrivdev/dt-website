import { SiteFooter, SiteHeader } from '@/components/site-shell';

export default function PoliciesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <a
        href="#policy-content"
        className="absolute left-4 top-0 z-[100] -translate-y-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform focus:translate-y-4 focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to content
      </a>
      <SiteHeader />
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[28rem] w-[65rem] -translate-x-1/2 rounded-full bg-primary/[.07] blur-3xl" />
        {children}
      </div>
      <SiteFooter />
    </div>
  );
}
