import type { Metadata } from 'next';
import Link from 'next/link';
import { APP_CONFIG, contactTelHref } from '@/lib/constants';
import { policyMetadata } from '@/lib/policy-metadata';

export const metadata: Metadata = policyMetadata(
  'Cancellation and Refund Policy',
  '/cancellation-and-refund-policy',
  `Understand ${APP_CONFIG.name}'s cancellation, refund, and auto-renewal terms for digital services.`
);

export default function CancellationAndRefundPolicyPage() {
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
        <h1 className="text-3xl font-bold md:text-4xl">Cancellation and Refund Policy</h1>
        <p className="text-muted-foreground">
          {APP_CONFIG.name} believes in supporting our customers as far as possible and follows a transparent,
          customer-friendly cancellation policy. Please review the details below to understand how cancellations,
          renewals, and refunds are handled.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. No Refunds on Subscriptions &amp; Digital Services</h2>
        <p className="text-muted-foreground">
          All subscriptions, digital products, and services provided by {APP_CONFIG.name} are non-refundable. By purchasing
          any subscription or digital product/service, you agree that you will not be entitled to any refund, return,
          or credit for any portion of the fees, regardless of usage or non-usage of the service.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Cancellation and Auto-Renewal</h2>
        <div className="space-y-2 text-muted-foreground">
          <p className="font-medium text-foreground">Pre-Renewal Cancellation</p>
          <p>
            Customers wishing to cancel their subscription must notify us before the auto-renewal date. Cancellation
            requests must be submitted via email to{' '}
            <Link href={`mailto:${APP_CONFIG.contactEmail}`} className="text-primary underline">
              {APP_CONFIG.contactEmail}
            </Link>
            .
          </p>
          <p className="font-medium text-foreground">Failure to Cancel</p>
          <p>
            If a cancellation request is not received prior to the auto-renewal date, the subscription will renew
            automatically and the renewal fee will be charged. No refunds will be issued for auto-renewed subscriptions.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. How to Cancel</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>
            Contact our customer support team at{' '}
            <Link href={`mailto:${APP_CONFIG.contactEmail}`} className="text-primary underline">
              {APP_CONFIG.contactEmail}
            </Link>{' '}
            with your cancellation request at least 72 hours before the auto-renewal date.
          </li>
          <li>Alternatively, you may cancel directly through the Digital Thriv panel provided to you.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. Changes to This Policy</h2>
        <p className="text-muted-foreground">
          {APP_CONFIG.name} reserves the right to modify or update this Cancellation and Refund Policy at any time. Any
          changes will be communicated via our website or through email notifications. It is your responsibility to
          review this policy periodically.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. General Refund Policy</h2>
        <p className="text-muted-foreground">
          By subscribing to any of our services or digital products, you agree to this Refund &amp; Cancellation Policy
          in its entirety. {APP_CONFIG.name} operates as a digital service provider offering subscription-based campaign
          creation, optimization, and consultancy services.
        </p>
        <p className="text-muted-foreground">
          As per Section 2(1)(d) of the Consumer Protection Act, 2019, digital services that are made to order or
          instantly delivered are non-returnable and non-refundable unless otherwise stated under applicable law.
        </p>
        <p className="text-muted-foreground">
          Once a payment is successfully processed, the transaction is deemed final, and no refund or chargeback will
          be entertained under any circumstances, including:
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li>Dissatisfaction with results or service performance.</li>
          <li>Unused subscription time or features.</li>
          <li>Failure to cancel before the auto-renewal date.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">6. Auto-Renewal &amp; Cancellation Procedure</h2>
        <p className="text-muted-foreground">
          All subscriptions are automatically renewed at the end of the billing cycle (monthly or annually). It is the
          sole responsibility of the subscriber to cancel the subscription prior to the renewal date if they do not
          wish to continue.
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li>
            Email us at{' '}
            <Link href={`mailto:${APP_CONFIG.contactEmail}`} className="text-primary underline">
              {APP_CONFIG.contactEmail}
            </Link>{' '}
            at least 72 hours before the renewal date.
          </li>
          <li>Or cancel directly through the Digital Thriv panel provided to you.</li>
          <li>
            If the subscription auto-renews before we receive a valid cancellation request, no refund will be issued.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">7. Dispute Resolution</h2>
        <p className="text-muted-foreground">
          In the event of any disputes, we encourage customers to contact our support team first. If unresolved, any
          legal disputes arising out of this policy shall be subject to the exclusive jurisdiction of the courts in
          Pune, India, and governed by the laws of India.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">8. Contact Us</h2>
        <p className="text-muted-foreground">
          For any questions or concerns regarding this Refund &amp; Cancellation Policy, please reach out to us:
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li>
            <span className="font-medium text-foreground">Email:</span>{' '}
            <Link href={`mailto:${APP_CONFIG.contactEmail}`} className="text-primary underline">
              {APP_CONFIG.contactEmail}
            </Link>
          </li>
          <li>
            <span className="font-medium text-foreground">Phone:</span>{' '}
            <Link href={contactTelHref()} className="text-primary underline">
              {APP_CONFIG.contactPhoneDisplay}
            </Link>
          </li>
          <li>
            <span className="font-medium text-foreground">Address:</span> {APP_CONFIG.contactAddress}
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">9. Our Commitment</h2>
        <p className="text-muted-foreground">
          At {APP_CONFIG.name}, we empower businesses with cutting-edge digital solutions—from web development to branding
          and marketing. We are committed to delivering value and clarity in every engagement.
        </p>
      </section>
    </main>
  );
}
