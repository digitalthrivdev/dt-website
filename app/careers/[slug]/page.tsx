import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, MapPin } from 'lucide-react';
import { JsonLd, SiteFooter, SiteHeader } from '@/components/site-shell';
import { APP_CONFIG } from '@/lib/constants';
import { departmentLabel, employmentTypeLabel, fetchPublishedJob } from '@/lib/crm';
import { CareerApplyForm } from './apply-form';

export const revalidate = 60;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = await fetchPublishedJob(slug);
  if (!job) {
    return { title: 'Role not found' };
  }
  const title = `${job.title} | Careers at Digital Thriv`;
  const location = job.location ? ` in ${job.location}` : '';
  const description = `Apply for ${job.title}${location} at Digital Thriv. ${employmentTypeLabel(job.employmentType)}.`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `/careers/${job.slug}` },
    openGraph: {
      title,
      description,
      url: `/careers/${job.slug}`,
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function CareerJobPage({ params }: PageProps) {
  const { slug } = await params;
  const job = await fetchPublishedJob(slug);
  if (!job) notFound();

  const department = departmentLabel(job.department);
  const employment = employmentTypeLabel(job.employmentType);
  const jobUrl = `${APP_CONFIG.websiteUrl}/careers/${job.slug}`;

  const jobSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
    datePosted: job.updatedAt,
    validThrough: job.closesAt ?? undefined,
    employmentType: job.employmentType,
    hiringOrganization: {
      '@type': 'Organization',
      name: APP_CONFIG.name,
      sameAs: APP_CONFIG.websiteUrl,
      logo: APP_CONFIG.logo,
    },
    jobLocation: job.location
      ? {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressLocality: job.location,
            addressCountry: 'IN',
          },
        }
      : undefined,
    url: jobUrl,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: APP_CONFIG.websiteUrl },
      { '@type': 'ListItem', position: 2, name: 'Careers', item: `${APP_CONFIG.websiteUrl}/careers` },
      { '@type': 'ListItem', position: 3, name: job.title, item: jobUrl },
    ],
  };

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <JsonLd data={jobSchema} />
      <JsonLd data={breadcrumbSchema} />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden py-14 lg:py-20">
          <div className="absolute left-1/2 top-0 -z-10 h-[30rem] w-[70rem] -translate-x-1/2 rounded-full bg-primary/[.07] blur-3xl" />
          <div className="section-shell max-w-4xl">
            <Link href="/careers" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-primary">
              <ArrowLeft className="size-4" />
              All open roles
            </Link>
            {department ? <p className="mt-8 text-sm font-bold uppercase tracking-[.16em] text-primary">{department}</p> : <p className="mt-8 text-sm font-bold uppercase tracking-[.16em] text-primary">Open role</p>}
            <h1 className="display-font text-balance mt-3 text-4xl font-bold leading-[1.08] sm:text-6xl">{job.title}</h1>
            <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted-foreground">
              {job.location ? (
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-4" />
                  {job.location}
                </span>
              ) : null}
              <span>{employment}</span>
              {job.closesAt ? (
                <span>Closes {new Date(job.closesAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
              ) : null}
            </div>
          </div>
        </section>

        <section className="border-y bg-[#f7f8fa] py-14 lg:py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
            <article className="rounded-[1.75rem] border border-black/[.07] bg-white p-6 sm:p-8">
              <div className="job-prose" dangerouslySetInnerHTML={{ __html: job.description }} />
            </article>
            <div id="apply" className="lg:sticky lg:top-28">
              <CareerApplyForm slug={job.slug} title={job.title} questions={job.questions} upload={job.upload} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
