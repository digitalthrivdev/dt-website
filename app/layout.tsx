import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { APP_CONFIG } from "@/lib/constants";
import { entityGraph } from "@/lib/entity-schema";

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(APP_CONFIG.websiteUrl),
  title: {
    default: `${APP_CONFIG.name} | Performance Marketing, Lead Gen & Ecommerce`,
    template: `%s | ${APP_CONFIG.name}`,
  },
  description: APP_CONFIG.description,
  openGraph: {
    title: APP_CONFIG.name,
    description: APP_CONFIG.description,
    url: APP_CONFIG.websiteUrl,
    siteName: APP_CONFIG.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${APP_CONFIG.websiteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Digital Thriv - Performance Marketing, Lead Generation & Ecommerce Growth',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_CONFIG.name,
    description: APP_CONFIG.description,
    images: [`${APP_CONFIG.websiteUrl}/og-image.png`],
  },
  robots: { index: true, follow: true },
  verification: googleSiteVerification ? { google: googleSiteVerification } : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entityGraph).replace(/</g, "\\u003c") }}
        />
        {children}
        {googleAnalyticsId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${googleAnalyticsId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
