import type { Metadata } from 'next';
import { MessageCircle, Quote, Star } from 'lucide-react';
import { JsonLd, SiteFooter, SiteHeader } from '@/components/site-shell';
import { APP_CONFIG, whatsappUrl } from '@/lib/constants';
import reviews from '@/lib/reviews.json';

export const metadata: Metadata = {
  title: { absolute: 'Digital Thriv Customer Reviews | Ecommerce Client Feedback' },
  description: 'Read feedback from ecommerce businesses, dropshippers and store owners who have worked with Digital Thriv.',
  alternates: { canonical: '/customer-reviews' },
  openGraph: {
    title: 'Digital Thriv Customer Reviews',
    description: 'Feedback from ecommerce businesses and store owners who have worked with Digital Thriv.',
    url: '/customer-reviews',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Digital Thriv Customer Reviews', description: 'Customer feedback about Digital Thriv ecommerce services.' },
};

const completeReviews = reviews.filter(review => !review.review_text.includes('More') && review.author !== 'Ram Singh gaur');

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${APP_CONFIG.websiteUrl}/customer-reviews#page`,
  url: `${APP_CONFIG.websiteUrl}/customer-reviews`,
  name: 'Digital Thriv customer reviews',
  description: 'Customer feedback supplied to Digital Thriv about its ecommerce services.',
  about: { '@id': `${APP_CONFIG.websiteUrl}/#organization` },
  isPartOf: { '@id': `${APP_CONFIG.websiteUrl}/#website` },
  inLanguage: ['en-IN', 'hi-Latn'],
};

export default function CustomerReviews() {
  return <div className="min-h-screen pb-20 md:pb-0"><JsonLd data={collectionSchema}/><SiteHeader/><main>
    <section className="relative overflow-hidden py-16 lg:py-24"><div className="absolute left-1/2 top-0 -z-10 h-[30rem] w-[70rem] -translate-x-1/2 rounded-full bg-primary/[.07] blur-3xl"/><div className="section-shell text-center"><p className="text-sm font-bold uppercase tracking-[.16em] text-primary">Customer feedback</p><h1 className="display-font text-balance mx-auto mt-4 max-w-4xl text-5xl font-bold sm:text-6xl">What ecommerce customers say about Digital Thriv.</h1><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Feedback from store owners, dropshippers and ecommerce businesses. Wording is shown as supplied, with incomplete excerpts omitted.</p></div></section>
    <section className="border-y bg-[#f7f8fa] py-16 lg:py-20"><div className="section-shell columns-1 gap-5 md:columns-2 lg:columns-3">{completeReviews.map(review=><article key={`${review.author}-${review.date}`} className="mb-5 break-inside-avoid rounded-[1.5rem] border border-black/[.07] bg-white p-6"><Quote className="size-7 fill-primary text-primary" strokeWidth={0}/><blockquote className="mt-5 text-lg leading-8">“{review.review_text}”</blockquote><div className="mt-7 border-t pt-5"><div className="flex items-center justify-between gap-4"><div className="flex min-w-0 items-center gap-3"><span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary" aria-hidden>{review.author.charAt(0)}</span><p className="truncate font-medium">{review.author}</p></div><div className="flex shrink-0 gap-0.5" aria-label={`${review.stars} out of 5 stars`}>{Array.from({length:review.stars}).map((_,index)=><Star key={index} className="size-3.5 fill-emerald-500 text-emerald-500"/>)}</div></div>{review.date&&<p className="ml-13 mt-1 text-xs text-muted-foreground">Reviewed {new Date(review.date).toLocaleDateString('en-IN',{month:'short',year:'numeric'})}</p>}</div></article>)}</div></section>
    <section className="py-16"><div className="section-shell"><div className="mx-auto max-w-3xl rounded-[1.75rem] bg-[#211832] p-7 text-center text-white sm:p-10"><h2 className="display-font text-3xl font-bold">Discuss your ecommerce requirement</h2><p className="mx-auto mt-3 max-w-xl leading-7 text-white/60">Share your business type, product category and approximate catalog size. We’ll help identify the logical starting scope.</p><a href={whatsappUrl('Hi Digital Thriv, I read your customer reviews and want to discuss my ecommerce requirement.')} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-xl bg-whatsapp px-6 font-bold text-white hover:bg-whatsapp-hover"><MessageCircle className="size-5"/>Discuss your store</a></div></div></section>
  </main><SiteFooter/></div>;
}
