import type { Metadata } from 'next';
import { StatusPage, StatusPrimaryLink } from '@/components/status-page';

export const metadata: Metadata = {
  title: { absolute: 'Role not found | Digital Thriv' },
  robots: { index: false, follow: false },
};

export default function CareersNotFound() {
  return (
    <StatusPage
      kicker="Careers"
      title="This role is not available."
      description="The opening may have closed, or the link may be incorrect. See current roles on the careers page."
      logoHref="/careers"
    >
      <StatusPrimaryLink href="/careers">All open roles</StatusPrimaryLink>
    </StatusPage>
  );
}
