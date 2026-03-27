import type { Metadata } from 'next';
import Link from 'next/link';
import { APP_CONFIG, contactTelHref } from '@/lib/constants';
import { policyMetadata } from '@/lib/policy-metadata';

export const metadata: Metadata = policyMetadata(
  'Privacy Policy',
  '/privacy-policy',
  `Learn how ${APP_CONFIG.name} collects, uses, and protects customer and employee data.`
);

export default function PrivacyPolicyPage() {
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
        <h1 className="text-3xl font-bold md:text-4xl">Privacy Policy</h1>
        <p className="text-muted-foreground">
          Welcome to {APP_CONFIG.name}. Your privacy matters to us. This Privacy Policy explains
          how we collect, use, disclose, and safeguard your information when you visit our website
          or use our services. By accessing or using our services, you agree to the terms of this
          policy.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
        <p className="text-muted-foreground">
          We may collect personal information including but not limited to:
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li>
            <span className="font-medium text-foreground">Name</span>
          </li>
          <li>
            <span className="font-medium text-foreground">Email address</span>
          </li>
          <li>
            <span className="font-medium text-foreground">Phone number</span>
          </li>
          <li>
            <span className="font-medium text-foreground">Business information</span>
          </li>
          <li>
            <span className="font-medium text-foreground">Other information</span> you provide via
            contact forms or email.
          </li>
        </ul>
        <p className="text-muted-foreground">
          We also collect non-personal data such as browser type, device used, IP address, and
          pages visited.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. How We Use Information</h2>
        <p className="text-muted-foreground">We use the collected data to:</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>Provide and manage our digital services (web development, branding, marketing).</li>
          <li>Respond to your inquiries.</li>
          <li>Improve our website and services.</li>
          <li>Send you updates, promotional material, or newsletters (if subscribed).</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. Information Sharing</h2>
        <p className="text-muted-foreground">
          We do not sell, trade, or rent your personal information to third parties. We may share
          data with trusted service providers who assist us in operating our website and conducting
          our business, so long as those parties agree to keep this information confidential.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. Cookies and Tracking Technologies</h2>
        <p className="text-muted-foreground">
          Our website may use cookies to enhance user experience. You can choose to disable cookies
          through your browser settings, but this may affect the functionality of the website.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. Data Security</h2>
        <p className="text-muted-foreground">
          We implement administrative, technical, and physical safeguards designed to protect
          information from unauthorized access, alteration, disclosure, or destruction. Despite
          these efforts, no method of transmission over the internet is 100% secure.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">6. Your Rights</h2>
        <p className="text-muted-foreground">You have the right to:</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>Access the personal data we hold about you.</li>
          <li>Request correction or deletion of your data.</li>
          <li>Withdraw consent for data processing.</li>
        </ul>
        <p className="text-muted-foreground">
          You can exercise these rights by contacting us at{' '}
          <Link href={`mailto:${APP_CONFIG.contactEmail}`} className="text-primary underline">
            {APP_CONFIG.contactEmail}
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">7. Third-Party Links</h2>
        <p className="text-muted-foreground">
          Our website may contain links to third-party websites. We are not responsible for the
          privacy practices or content of those websites.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">8. Contact Us</h2>
        <p className="text-muted-foreground">
          If you have any questions or concerns about this Privacy Policy, feel free to contact us:
        </p>
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
