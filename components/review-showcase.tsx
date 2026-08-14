'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react';
import { flushSync } from 'react-dom';

type Review = { author:string; review_text:string; stars:number; date?:string };

function cleanText(text:string) {
  return text
    .replace(/(?:â€¦|…)?More/g, '')
    .replace(/â€™/g, '’')
    .replace(/â€”/g, '—')
    .replace(/ðŸ[^\s]*/g, '')
    .trim();
}

export function ReviewShowcase({ reviews }: { reviews:Review[] }) {
  const [active,setActive] = useState(0);
  const [visible,setVisible] = useState(true);
  const [transitioning,setTransitioning] = useState(false);
  const timers = useRef<Array<ReturnType<typeof setTimeout>>>([]);
  const cleanReviews = useMemo(()=>reviews
    .filter(r=>!r.review_text.includes('More') && r.author!=='Ram Singh gaur')
    .map(r=>({...r,review_text:cleanText(r.review_text)}))
    .filter(r=>r.review_text.length>16),[reviews]);
  const review = cleanReviews[active];
  useEffect(()=>()=>timers.current.forEach(clearTimeout),[]);
  const changeReview = (direction:1|-1) => {
    if (transitioning) return;
    flushSync(()=>{
      setTransitioning(true);
      setVisible(false);
    });
    timers.current.push(setTimeout(()=>{
      flushSync(()=>setActive(index => (index+direction+cleanReviews.length)%cleanReviews.length));
      timers.current.push(setTimeout(()=>setVisible(true),45));
      timers.current.push(setTimeout(()=>setTransitioning(false),780));
    },340));
  };
  const previous = () => changeReview(-1);
  const next = () => changeReview(1);

  return <section id="reviews" className="scroll-mt-24 border-y bg-[#f7f8fa] py-20 lg:py-28">
    <div className="section-shell">
      <div className="grid items-center gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.16em] text-primary">Customer stories</p>
          <h2 className="display-font text-balance mt-4 text-5xl font-medium leading-[1.05] sm:text-6xl">From our ecommerce <strong className="block font-extrabold">community.</strong></h2>
          <p className="mt-7 max-w-sm text-lg leading-8 text-muted-foreground">What store owners, dropshippers and ecommerce businesses say about working with Digital Thriv.</p>
          <div className="mt-9 flex items-center gap-3">
            <button onClick={previous} disabled={transitioning} aria-label="Previous testimonial" className="flex size-13 items-center justify-center rounded-full border border-black/15 bg-white transition hover:-translate-x-0.5 hover:border-primary/45 hover:text-primary hover:shadow-md disabled:pointer-events-none disabled:opacity-55"><ArrowLeft className="size-5"/></button>
            <button onClick={next} disabled={transitioning} aria-label="Next testimonial" className="flex size-13 items-center justify-center rounded-full border border-black/15 bg-white transition hover:translate-x-0.5 hover:border-primary/45 hover:text-primary hover:shadow-md disabled:pointer-events-none disabled:opacity-55"><ArrowRight className="size-5"/></button>
          </div>
        </div>

        <div key={active} className={`testimonial-panel relative min-h-[25rem] rounded-[2rem] border border-black/[.07] bg-white p-7 shadow-[0_30px_80px_-54px_rgba(31,24,48,.4)] transition-[opacity,transform,filter] sm:p-10 lg:p-12 ${visible?'translate-y-0 opacity-100 blur-0 duration-1200':'translate-y-2 opacity-0 blur-[2px] duration-300'}`} aria-live="polite">
          <Quote className="testimonial-quote size-12 fill-primary text-primary" strokeWidth={0}/>
          <blockquote className="display-font text-balance mt-5 text-3xl font-medium leading-[1.24] text-foreground sm:text-4xl">“{review.review_text}”</blockquote>
          <div className="mt-10 flex flex-col gap-5 border-t pt-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-brand-deep text-xl font-extrabold text-white" aria-hidden>{review.author.charAt(0)}</div>
              <div><p className="text-base font-semibold">{review.author}</p>{review.date&&<p className="mt-1 text-sm text-muted-foreground">Digital Thriv customer · {new Date(review.date).toLocaleDateString('en-IN',{month:'short',year:'numeric'})}</p>}</div>
            </div>
            <div className="flex gap-1" aria-label={`${review.stars} out of 5 stars`}>{Array.from({length:review.stars}).map((_,i)=><Star key={i} style={{animationDelay:`${220+i*65}ms`}} className="testimonial-star size-5 fill-emerald-500 text-emerald-500"/>)}</div>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
