import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { APP_CONFIG } from '@/lib/constants';

export default function PoliciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <a
        href="#policy-content"
        className="absolute left-4 top-0 z-[100] -translate-y-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-transform focus:translate-y-4 focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
              Back to website
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={APP_CONFIG.logo}
                alt={`${APP_CONFIG.name} logo`}
                width={28}
                height={28}
                className="h-7 w-7 rounded-full"
              />
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-base font-bold text-transparent">
                {APP_CONFIG.name}
              </span>
            </Link>
          </div>
        </div>
      </header>

      {children}

      <footer className="mt-auto border-t bg-muted/30 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <Link href="/" className="text-primary underline-offset-4 hover:underline">
            Return to homepage
          </Link>
        </div>
      </footer>
    </div>
  );
}
