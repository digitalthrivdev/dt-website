'use client';

import { StatusPage, StatusSecondaryLink, statusPrimaryButtonClass } from '@/components/status-page';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <StatusPage
      kicker="Error"
      title="Something went wrong."
      description="Please try again. If it keeps happening, come back in a few minutes or return to the homepage."
    >
      <button type="button" onClick={() => reset()} className={statusPrimaryButtonClass}>
        Try again
      </button>
      <StatusSecondaryLink href="/">Back to home</StatusSecondaryLink>
    </StatusPage>
  );
}
