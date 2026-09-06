import type { Metadata } from 'next';
import { StatusPage, StatusPrimaryLink } from '@/components/status-page';

export const metadata: Metadata = {
  title: { absolute: 'Page not found | Digital Thriv' },
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <StatusPage
      kicker="404"
      title="This page is not available."
      description="The link may be old, or the page may have moved. Go back to the Digital Thriv homepage to continue."
    >
      <StatusPrimaryLink href="/">Back to home</StatusPrimaryLink>
    </StatusPage>
  );
}
