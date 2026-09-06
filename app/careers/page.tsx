import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { JsonLd, SiteHeader } from '@/components/site-shell';
import { APP_CONFIG } from '@/lib/constants';
import { departmentLabel, employmentTypeLabel, fetchPublishedJobs } from '@/lib/crm';

export const revalidate = 60;

export const metadata: Metadata = {
  title: { absolute: 'Careers at Digital Thriv | Open roles' },
  description: 'See open roles at Digital Thriv and apply online. Ecommerce, operations, sales and support openings in India.',
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers at Digital Thriv',
    description: 'Open roles at Digital Thriv. Apply with your resume and answers on the job page.',
    url: '/careers',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Digital Thriv',
    description: 'Open roles at Digital Thriv.',
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${APP_CONFIG.websiteUrl}/careers#page`,
  url: `${APP_CONFIG.websiteUrl}/careers`,
  name: 'Careers at Digital Thriv',
  description: 'Open roles at Digital Thriv.',
  isPartOf: { '@id': `${APP_CONFIG.websiteUrl}/#website` },
  inLanguage: 'en-IN',
};

export default async function CareersPage() {
  const jobs = await fetchPublishedJobs();

  return (
    <div className="min-h-screen">
      <JsonLd data={pageSchema} />
      <SiteHeader variant="logoOnly" />
      <main>
        <section className="relative overflow-hidden py-16 lg:py-24">
          <div className="absolute left-1/2 top-0 -z-10 h-[30rem] w-[70rem] -translate-x-1/2 rounded-full bg-primary/[.07] blur-3xl" />
          <div className="section-shell max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[.16em] text-primary">Careers</p>
            <h1 className="display-font text-balance mt-4 text-5xl font-bold leading-[1.04] sm:text-6xl">Work with Digital Thriv.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              We hire people who can talk to customers, ship ecommerce work, and keep operations tight. Open roles are listed below; apply on the job page.
            </p>
          </div>
        </section>

        <section className="border-y bg-[#f7f8fa] py-16 lg:py-20">
          <div className="section-shell">
            {jobs.length === 0 ? (
              <div className="mx-auto max-w-xl rounded-[1.75rem] border border-black/[.07] bg-white p-8 text-center">
                <h2 className="display-font text-2xl font-bold">No open roles right now</h2>
                <p className="mt-3 leading-7 text-muted-foreground">
                  There are no published openings at the moment. Check back later, or email {APP_CONFIG.contactEmail} if you want to introduce yourself.
                </p>
              </div>
            ) : (
              <div className="grid gap-5 md:grid-cols-2">
                {jobs.map((job) => {
                  const department = departmentLabel(job.department);
                  return (
                    <article key={job.slug} className="flex flex-col rounded-[1.75rem] border border-black/[.07] bg-white p-6 sm:p-7">
                      {department ? <p className="text-xs font-bold uppercase tracking-[.14em] text-primary">{department}</p> : null}
                      <h2 className="display-font mt-2 text-2xl font-bold">{job.title}</h2>
                      <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
                        {job.location ? (
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="size-4" />
                            {job.location}
                          </span>
                        ) : null}
                        <span>{employmentTypeLabel(job.employmentType)}</span>
                      </div>
                      <Link
                        href={`/careers/${job.slug}`}
                        className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-primary transition hover:gap-3"
                      >
                        View role and apply
                        <ArrowRight className="size-4" />
                      </Link>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
