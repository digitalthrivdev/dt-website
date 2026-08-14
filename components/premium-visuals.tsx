import { BarChart3, Check, CreditCard, ShoppingBag, Smartphone, Truck } from 'lucide-react';

export function EcommerceCommandVisual() {
  return <div className="relative mx-auto aspect-[4/3] w-full max-w-[640px] overflow-hidden rounded-[2rem] bg-[#171126] p-4 shadow-[0_40px_100px_-40px_rgba(79,58,158,.72)] sm:p-6">
    <div className="absolute -right-20 -top-20 size-72 rounded-full bg-primary/35 blur-3xl"/><div className="absolute -bottom-24 -left-20 size-72 rounded-full bg-[#9079ee]/20 blur-3xl"/>
    <div className="relative h-full rounded-[1.4rem] border border-white/10 bg-white/[.06] p-3 backdrop-blur-xl sm:p-4">
      <div className="flex items-center justify-between border-b border-white/10 pb-3"><div className="flex gap-1.5"><i className="size-2 rounded-full bg-white/20"/><i className="size-2 rounded-full bg-white/20"/><i className="size-2 rounded-full bg-white/20"/></div><div className="h-2 w-24 rounded-full bg-white/10"/><div className="flex size-7 items-center justify-center rounded-lg bg-primary"><ShoppingBag className="size-3.5 text-white"/></div></div>
      <div className="mt-3 grid h-[calc(100%-2.6rem)] grid-cols-[1fr_.48fr] gap-3">
        <div className="flex min-w-0 flex-col rounded-2xl bg-[#f7f5fb] p-3 sm:p-4"><div className="flex items-center justify-between"><div><div className="h-2.5 w-20 rounded-full bg-[#241b36]/80"/><div className="mt-2 h-1.5 w-28 rounded-full bg-[#241b36]/15"/></div><div className="rounded-full bg-primary/10 px-2 py-1 text-[8px] font-bold text-primary">LIVE STORE</div></div><div className="mt-4 grid flex-1 grid-cols-2 gap-2"><div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#d7cbef] to-[#8b73cf]"><div className="absolute bottom-3 left-3 right-3"><div className="h-2 w-16 rounded bg-white/85"/><div className="mt-1.5 h-1.5 w-10 rounded bg-white/45"/></div><div className="absolute right-4 top-4 size-14 rotate-12 rounded-[40%_60%_45%_55%] bg-white/25 shadow-xl"/></div><div className="grid grid-rows-2 gap-2"><div className="rounded-xl bg-white p-2 shadow-sm"><div className="h-8 rounded-lg bg-[#eae6f2]"/><div className="mt-2 h-1.5 w-12 rounded bg-[#241b36]/20"/></div><div className="rounded-xl bg-white p-2 shadow-sm"><div className="h-8 rounded-lg bg-[#d8d0e9]"/><div className="mt-2 h-1.5 w-10 rounded bg-[#241b36]/20"/></div></div></div><div className="mt-3 flex items-center justify-between rounded-xl bg-white p-2.5 shadow-sm"><div className="flex items-center gap-2"><div className="flex size-7 items-center justify-center rounded-lg bg-primary/10"><CreditCard className="size-3.5 text-primary"/></div><div><div className="h-1.5 w-14 rounded bg-[#241b36]/30"/><div className="mt-1 h-1 w-9 rounded bg-[#241b36]/10"/></div></div><span className="text-[8px] font-bold text-emerald-600">CONNECTED</span></div></div>
        <div className="relative flex flex-col gap-3"><div className="glass-dark flex-1 rounded-2xl p-3 text-white"><div className="flex items-center justify-between"><span className="text-[8px] font-semibold text-white/50">TODAY</span><BarChart3 className="size-3.5 text-white/55"/></div><div className="mt-3 text-lg font-bold sm:text-2xl">184</div><div className="mt-1 text-[8px] text-white/45">orders processed</div><div className="mt-4 flex h-12 items-end gap-1">{[35,52,42,68,58,86,75].map((h,i)=><i key={i} style={{height:`${h}%`}} className="flex-1 rounded-sm bg-gradient-to-t from-primary to-[#a48ef0]"/>)}</div></div><div className="glass-dark rounded-2xl p-3 text-white"><div className="flex items-center gap-2"><div className="flex size-7 items-center justify-center rounded-lg bg-white/10"><Truck className="size-3.5"/></div><div className="min-w-0 flex-1"><div className="h-1.5 w-full rounded bg-white/15"><div className="h-full w-3/4 rounded bg-[#9a83e4]"/></div><div className="mt-1.5 text-[8px] text-white/45">fulfilment synced</div></div></div></div><div className="absolute -bottom-1 -left-6 flex w-[78%] items-center gap-2 rounded-xl border border-white/15 bg-[#2c2143]/90 p-2.5 text-white shadow-2xl backdrop-blur-xl"><Smartphone className="size-4 text-[#b9a7f1]"/><div className="min-w-0 flex-1"><div className="h-1.5 w-4/5 rounded bg-white/25"/><div className="mt-1.5 h-1 w-1/2 rounded bg-white/10"/></div><Check className="size-3.5 text-emerald-400"/></div></div>
      </div>
    </div>
  </div>;
}

const nodes = [
  { step:'01', label:'Storefront', detail:'Where customers discover and decide' },
  { step:'02', label:'Catalog', detail:'Products, pricing and inventory' },
  { step:'03', label:'Checkout', detail:'Payments and purchase completion' },
  { step:'04', label:'Fulfilment', detail:'Shipping and order movement' },
  { step:'05', label:'Acquisition', detail:'Meta tracking and campaigns' },
  { step:'06', label:'Growth', detail:'Orders, insight and improvement' },
] as const;

export function CommerceFlow() {
  return <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/15 bg-background/80 px-5 py-7 shadow-[0_24px_70px_-50px_rgba(79,58,158,.5)] sm:px-7 lg:px-9 lg:py-9">
    <div className="absolute left-[9%] right-[9%] top-[3.45rem] hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block"/>
    <ol className="relative grid gap-0 lg:grid-cols-6">{nodes.map(({step,label,detail},i)=><li key={label} className={`relative grid grid-cols-[2.75rem_1fr] gap-3 py-4 lg:block lg:px-3 lg:py-0 lg:text-center ${i<nodes.length-1?'border-b border-border/65 lg:border-b-0':''}`}><span className="relative z-10 flex size-9 items-center justify-center rounded-full border border-primary/25 bg-background text-[11px] font-extrabold tracking-wider text-primary lg:mx-auto">{step}</span><div><h3 className="text-sm font-bold lg:mt-5">{label}</h3><p className="mt-1 text-xs leading-5 text-muted-foreground">{detail}</p></div></li>)}</ol>
  </div>;
}
