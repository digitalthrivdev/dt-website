import type { Metadata } from 'next';
import Link from 'next/link';
import { APP_CONFIG, contactTelHref } from '@/lib/constants';
import { policyMetadata } from '@/lib/policy-metadata';

export const metadata: Metadata = policyMetadata(
  'Terms and Conditions',
  '/terms-and-conditions',
  `Review the terms that govern use of ${APP_CONFIG.name}'s website and services.`
);

export default function TermsAndConditionsPage() {
  return (
    <main
      id="policy-content"
      tabIndex={-1}
      className="container mx-auto max-w-4xl space-y-12 px-4 py-12 md:py-16"
    >
      <header className="space-y-2">
        <p className="text-sm text-muted-foreground">
          Effective {APP_CONFIG.policyEffectiveDate}
        </p>
        <h1 className="text-3xl font-bold md:text-4xl">Terms and Conditions</h1>
        <p className="text-muted-foreground">
          Welcome to {APP_CONFIG.name}. By accessing or using our website and services, you agree to comply
          with and be bound by the following terms and conditions. Please read them carefully.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Introduction</h2>
        <p className="text-muted-foreground">
          These Terms and Conditions govern your use of our website and services, including but not limited to
          web development, branding, and digital marketing services offered by {APP_CONFIG.name}. If you do not agree
          with any part of these terms, please do not use our website or services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Services</h2>
        <p className="text-muted-foreground">
          {APP_CONFIG.name} provides digital solutions including website development, branding, SEO, social media
          marketing, and other related services. We reserve the right to modify or discontinue any service without
          prior notice.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. User Responsibilities</h2>
        <p className="text-muted-foreground">By using our website or services, you agree to:</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>Provide accurate and complete information when requested.</li>
          <li>Not use our website for any unlawful purpose.</li>
          <li>Not attempt to gain unauthorized access to any part of the website or services.</li>
          <li>Comply with all applicable local, national, and international laws and regulations.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>
        <p className="text-muted-foreground">
          All content, designs, graphics, logos, and materials on this website are the intellectual property of
          {APP_CONFIG.name} unless otherwise stated. You may not copy, reproduce, or distribute any content without
          our written permission.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. Payment Terms</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>All fees must be paid as per the agreed-upon terms before work begins or according to a scheduled payment plan.</li>
          <li>Late payments may result in delays or suspension of services.</li>
          <li>Invoices not paid within the due date may incur additional charges.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>
            {APP_CONFIG.name} shall not be held liable for any direct, indirect, incidental, or consequential damages
            arising out of the use or inability to use our services.
          </li>
          <li>
            We are not responsible for any unauthorized access to or alteration of your transmissions or data.
          </li>
          <li>
            We are not liable for any interruptions or errors on our website.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">7. Termination</h2>
        <p className="text-muted-foreground">
          We reserve the right to terminate or suspend your access to our services at any time, without prior notice,
          for conduct that we believe violates these terms or is harmful to our interests or other users.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">8. Changes to Terms</h2>
        <p className="text-muted-foreground">
          {APP_CONFIG.name} may update these Terms and Conditions at any time without prior notice. Continued use of
          the website or services constitutes acceptance of the new terms.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">9. Governing Law</h2>
        <p className="text-muted-foreground">
          These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be
          subject to the jurisdiction of the courts in BANDA, Uttar Pradesh.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">10. Contact Information</h2>
        <p className="text-muted-foreground">If you have any questions regarding these Terms and Conditions, please contact us:</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>
            <span className="font-medium text-foreground">{APP_CONFIG.name}</span>
          </li>
          <li>
            <span className="font-medium text-foreground">Address:</span> {APP_CONFIG.contactAddress}
          </li>
          <li>
            <span className="font-medium text-foreground">Phone:</span>{' '}
            <Link href={contactTelHref()} className="text-primary underline">
              {APP_CONFIG.contactPhoneDisplay}
            </Link>
          </li>
          <li>
            <span className="font-medium text-foreground">Email:</span>{' '}
            <Link href={`mailto:${APP_CONFIG.contactEmail}`} className="text-primary underline">
              {APP_CONFIG.contactEmail}
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
