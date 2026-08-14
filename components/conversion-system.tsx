'use client';

import { useState } from 'react';
import { Check, ChevronRight, MessageCircle, Phone, X } from 'lucide-react';
import { APP_CONFIG, whatsappUrl } from '@/lib/constants';

const intents = [
  { id: 'dropshipping', label: 'Start dropshipping', price: '₹2,999', prompt: 'Hi Digital Thriv, I’m interested in the ₹2,999 Shopify dropshipping package. Please guide me on the details you need to get started.' },
  { id: 'd2c', label: 'Build a D2C brand', price: '₹4,999', prompt: 'Hi Digital Thriv, I’m building a D2C brand and want the ₹4,999 customized store package. Please guide me on the next steps.' },
  { id: 'app', label: 'Get website + app', price: '₹9,999', prompt: 'Hi Digital Thriv, I’m interested in the ₹9,999 website and Android app package. Please share the requirements and next steps.' },
  { id: 'grow', label: 'Improve my store', price: 'Custom', prompt: 'Hi Digital Thriv, I already have an ecommerce store and want help with design, conversion, integrations or growth. Please guide me on what information to share.' },
] as const;

export function HeroIntentSelector() {
  const [active, setActive] = useState(0);
  const item = intents[active];
  return <div className="glass-panel rounded-2xl p-3 sm:p-4">
    <p className="px-2 pb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">What do you want to do?</p>
    <div className="grid grid-cols-2 gap-2">{intents.map((x,i)=><button key={x.id} onClick={()=>setActive(i)} className={`min-h-14 rounded-xl border px-3 py-2 text-left text-sm font-semibold transition ${active===i?'border-primary bg-primary text-white shadow-lg shadow-primary/20':'bg-white/75 hover:border-primary/40 hover:bg-white'}`}><span className="block">{x.label}</span><span className={`mt-0.5 block text-xs ${active===i?'text-white/75':'text-muted-foreground'}`}>{x.price}</span></button>)}</div>
    <a href={whatsappUrl(item.prompt)} target="_blank" rel="noopener noreferrer" className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 text-sm font-bold text-white shadow-lg shadow-whatsapp/20 transition hover:bg-whatsapp-hover"><MessageCircle className="size-4"/>Continue on WhatsApp<ChevronRight className="size-4"/></a>
  </div>;
}

const recommendationQuestions = [
  { title: 'Where are you right now?', options: ['Starting a new store', 'Improving an existing store'] },
  { title: 'What is your main goal?', options: ['Test products quickly', 'Build a long-term D2C brand'] },
  { title: 'Do you need an Android app?', options: ['No, website only', 'Yes, website + app'] },
] as const;

export function PackageRecommender() {
  const [answers, setAnswers] = useState<number[]>([]);
  const step = answers.length;
  const reset = () => setAnswers([]);
  if (step >= recommendationQuestions.length) {
    const existing = answers[0] === 1;
    const app = answers[2] === 1;
    const d2c = answers[1] === 1;
    const result = existing ? { name:'Store improvement & growth review', price:'Custom scope', prompt:intents[3].prompt } : app ? { name:'Website + Android App', price:'₹9,999', prompt:intents[2].prompt } : d2c ? { name:'Customized D2C Store', price:'₹4,999', prompt:intents[1].prompt } : { name:'Shopify Dropshipping Starter', price:'₹2,999', prompt:intents[0].prompt };
    return <div className="glass-dark rounded-3xl p-6 text-white sm:p-8"><div className="flex size-11 items-center justify-center rounded-full bg-white text-primary"><Check className="size-5"/></div><p className="mt-6 text-sm font-medium text-white/60">Recommended for you</p><h3 className="display-font mt-2 text-3xl font-bold">{result.name}</h3><p className="mt-2 text-2xl font-bold text-white/85">{result.price}</p><p className="mt-4 max-w-xl leading-7 text-white/65">We’ll confirm the catalog limit, platform, integrations, timeline and third-party costs in writing before work begins.</p><div className="mt-7 flex flex-wrap gap-3"><a href={whatsappUrl(result.prompt)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-whatsapp px-5 font-bold text-white hover:bg-whatsapp-hover"><MessageCircle className="size-4"/>Ask about this package</a><button onClick={reset} className="min-h-12 rounded-xl border border-white/20 px-5 font-semibold text-white/80 hover:bg-white/10">Start again</button></div></div>;
  }
  const question = recommendationQuestions[step];
  return <div className="glass-dark rounded-3xl p-6 text-white sm:p-8"><div className="flex items-center justify-between"><p className="text-sm text-white/60">Question {step+1} of {recommendationQuestions.length}</p>{step>0&&<button onClick={()=>setAnswers(answers.slice(0,-1))} className="text-sm text-white/60 hover:text-white">Back</button>}</div><div className="mt-3 flex gap-2">{recommendationQuestions.map((_,i)=><span key={i} className={`h-1 flex-1 rounded-full ${i<=step?'bg-white':'bg-white/15'}`}/>)}</div><h3 className="display-font mt-8 text-3xl font-bold">{question.title}</h3><div className="mt-7 grid gap-3 sm:grid-cols-2">{question.options.map((x,i)=><button key={x} onClick={()=>setAnswers([...answers,i])} className="group flex min-h-16 items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 text-left font-semibold transition hover:border-white/35 hover:bg-white/10"><span>{x}</span><ChevronRight className="size-4 text-white/45 transition group-hover:translate-x-1"/></button>)}</div></div>;
}

export function MobileConversionDock() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return <button onClick={()=>setDismissed(false)} aria-label="Open contact options" className="fixed bottom-4 right-4 z-50 flex size-12 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl md:hidden"><MessageCircle/></button>;
  return <div className="fixed inset-x-3 bottom-[max(.75rem,env(safe-area-inset-bottom))] z-50 flex items-center gap-2 rounded-2xl border bg-background/92 p-2 shadow-2xl backdrop-blur-xl md:hidden"><a href={`tel:${APP_CONFIG.contactPhoneE164}`} className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border font-semibold"><Phone className="size-4"/>Call</a><a href={whatsappUrl('Hi Digital Thriv, I want help with my ecommerce business.')} target="_blank" rel="noopener noreferrer" className="flex min-h-12 flex-[1.5] items-center justify-center gap-2 rounded-xl bg-whatsapp font-bold text-white"><MessageCircle className="size-4"/>WhatsApp</a><button onClick={()=>setDismissed(true)} aria-label="Hide contact bar" className="flex size-10 shrink-0 items-center justify-center rounded-lg text-muted-foreground"><X className="size-4"/></button></div>;
}
