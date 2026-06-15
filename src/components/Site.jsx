import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  Clock3,
  Factory,
  Gauge,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  RadioTower,
  Router,
  ShieldCheck,
  Signal,
  X,
  Zap
} from "lucide-react";
import {
  heroImage,
  heroVideo,
  industries,
  iotFeatures,
  metrics,
  navigation,
  pages,
  sdWanFeatures,
  solutions,
  visualCards,
  workSteps
} from "../data/siteContent.js";

function Pill({ children, icon: Icon }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-white/8 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-cyan-100 backdrop-blur-xl">
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </div>
  );
}

function Header({ dark = true }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-8">
      <a href="/" className="flex items-center gap-3">
        <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white text-[#061521] shadow-2xl shadow-cyan-950/50">
          <Signal className="h-6 w-6" />
          <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-[#061521] bg-cyan-300" />
        </div>
        <div>
          <div className="text-2xl font-black tracking-tight">Vialterna</div>
          <div className="text-[10px] uppercase tracking-[0.34em] text-cyan-100/70">Conectividad resiliente</div>
        </div>
      </a>
      <nav className="hidden items-center gap-7 rounded-full border border-white/10 bg-white/8 px-6 py-3 text-sm font-bold text-white/80 backdrop-blur-2xl lg:flex">
        {navigation.map((item) => (
          <div key={item.label} className="group relative">
            <a href={item.href} className="transition hover:text-cyan-200">{item.label}</a>
            {item.children && (
              <div className="pointer-events-none absolute left-0 top-8 grid min-w-[290px] translate-y-2 gap-1 rounded-3xl border border-white/10 bg-slate-950/95 p-3 opacity-0 shadow-2xl shadow-slate-950/50 backdrop-blur-2xl transition group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                {item.children.map((child) => (
                  <a className="rounded-2xl px-4 py-3 text-white/75 hover:bg-white/8 hover:text-cyan-100" href={child.href} key={child.href}>{child.label}</a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="hidden items-center gap-3 lg:flex">
        <a href="https://www.linkedin.com" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/8 text-white/90 backdrop-blur transition hover:bg-white/15">
          <span className="text-sm font-black">in</span>
        </a>
        <a href="/contacto/" className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 shadow-xl shadow-cyan-950/30 transition hover:bg-white">Solicitar diagnóstico</a>
      </div>
      <button onClick={() => setOpen(!open)} className="rounded-2xl border border-white/15 bg-white/5 p-3 lg:hidden" aria-label="Abrir menú">
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <div className="absolute left-5 right-5 top-20 z-40 rounded-3xl border border-white/10 bg-slate-950/95 p-5 backdrop-blur-xl lg:hidden">
          {navigation.map((item) => <a key={item.href} href={item.href} className="block border-b border-white/10 py-3 text-white/85 last:border-b-0">{item.label}</a>)}
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#061521] px-5 py-12 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-[#061521]"><Signal className="h-6 w-6" /></div>
          <div><div className="text-xl font-black">Vialterna</div><div className="text-xs text-white/45">Conectividad resiliente</div></div>
        </div>
        <div><h4 className="font-black">Soluciones</h4><div className="mt-4 grid gap-2 text-white/55">{solutions.slice(0, 3).map((s) => <a href={s.href} key={s.href}>{s.title}</a>)}</div></div>
        <div><h4 className="font-black">Empresa</h4><div className="mt-4 grid gap-2 text-white/55"><a href="/industrias/">Industrias</a><a href="/noc-24-7-sla/">NOC 24/7 y SLA</a><a href="/insights/">Insights</a></div></div>
        <div><h4 className="font-black">Contacto</h4><div className="mt-4 grid gap-2 text-white/55"><span>atencionaclientes@vialterna.com</span><span>55 8062 6884</span><span>2026 Vialterna</span></div></div>
      </div>
    </footer>
  );
}

function HeroVisual() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.08 }} className="relative">
      <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-cyan-200/14 via-emerald-300/8 to-blue-500/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-slate-950/45 p-4 shadow-2xl shadow-slate-950/50 backdrop-blur-2xl">
        <div className="overflow-hidden rounded-[2rem] bg-[#071A2A]">
          <div className="flex flex-col gap-3 border-b border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-200/12 text-cyan-100"><Router className="h-5 w-5" /></div><div><div className="text-sm font-black">Centro de Operaciones de Red</div><div className="text-xs text-white/45">Monitoreo 24/7 · multioperador · respaldado por SLA</div></div></div>
            <div className="w-fit rounded-full bg-emerald-300/14 px-3 py-1 text-xs font-black text-emerald-100">Operación 24/7</div>
          </div>
          <div className="grid gap-4 p-4 xl:grid-cols-[1fr_.78fr]">
            <div className="relative min-h-[430px] overflow-hidden rounded-[1.6rem] bg-[linear-gradient(135deg,rgba(8,27,44,.15),rgba(8,27,44,.84)),url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1300&q=80')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30" />
              <div className="absolute left-5 top-5 rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-xl"><div className="text-xs uppercase tracking-[0.22em] text-slate-100/60">Visibilidad de red</div><div className="mt-1 text-2xl font-black">Sitios monitoreados</div></div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/7 p-5"><div className="mb-4 flex items-center justify-between"><div className="text-sm font-black">Diseño de disponibilidad</div><Gauge className="h-5 w-5 text-cyan-100" /></div>{["Multioperador", "Respaldo LTE / 5G", "Failover satelital"].map((name, i) => <div key={name} className="mb-4 last:mb-0"><div className="mb-2 flex justify-between text-xs text-white/60"><span>{name}</span><span>{[99, 87, 82][i]}%</span></div><div className="h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-cyan-200 to-emerald-200" style={{ width: `${[99, 87, 82][i]}%` }} /></div></div>)}</div>
              {[[ShieldCheck, "Respaldado por SLA", "Disponibilidad medible"], [Clock3, "Servicio administrado", "NOC 24/7"]].map(([Icon, title, text]) => <div key={title} className="rounded-[1.6rem] border border-cyan-200/15 bg-cyan-200/8 p-5"><div className="flex items-center gap-3"><Icon className="h-6 w-6 text-cyan-100" /><div><div className="font-black">{title}</div><div className="text-sm text-white/55">{text}</div></div></div></div>)}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PageShell({ children }) {
  return <div className="min-h-screen bg-[#061521] text-white selection:bg-cyan-300/30">{children}<Footer /></div>;
}

export function HomePage({ page }) {
  return (
    <PageShell>
      <section className="relative min-h-screen overflow-hidden">
        <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover grayscale-[18%] saturate-[.72]" loading="eager" />
        <video className="absolute inset-0 h-full w-full object-contain object-center grayscale-[18%] saturate-[.72]" src={heroVideo} poster={heroImage} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(6,21,33,.98)_0%,rgba(7,26,42,.91)_45%,rgba(6,21,33,.56)_100%)]" />
        <Header />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 lg:grid-cols-[.96fr_1.04fr] lg:px-8 lg:pb-28 lg:pt-20">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <Pill icon={Zap}>{page.eyebrow}</Pill>
            <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.92] md:text-7xl xl:text-8xl">{page.h1}</h1>
            <p className="mt-7 max-w-2xl text-xl font-bold leading-8 text-slate-100 md:text-2xl md:leading-9">{page.intro}</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row"><a href="/contacto/" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-black text-[#061521] shadow-2xl shadow-slate-950/40 transition hover:bg-cyan-100">Solicitar diagnóstico<ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></a><a href="/soluciones/" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/7 px-8 py-4 font-black text-white backdrop-blur transition hover:bg-white/12">Explorar soluciones <ChevronRight className="h-5 w-5" /></a></div>
          </motion.div>
          <HeroVisual />
        </div>
      </section>
      <DesignSections page={page} />
    </PageShell>
  );
}

function CardGrid({ cards }) {
  return <div className="grid gap-6 lg:grid-cols-4">{cards.map(({ icon: Icon, title, text, image, href }, index) => <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} whileHover={{ y: -8 }} key={title} className="group overflow-hidden rounded-[2.2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/70 transition hover:shadow-2xl"><div className="relative h-56 overflow-hidden">{image && <img src={image} alt={title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />}<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" /><div className="absolute bottom-5 left-5 grid h-14 w-14 place-items-center rounded-2xl bg-white text-[#061521]"><Icon className="h-7 w-7" /></div></div><div className="p-7"><h3 className="text-2xl font-black tracking-tight">{title}</h3><p className="mt-4 leading-7 text-slate-600">{text}</p>{href && <a href={href} className="mt-7 inline-flex items-center gap-2 text-sm font-black text-cyan-700">Conocer más<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></a>}</div></motion.article>)}</div>;
}

function DesignSections({ page }) {
  return (
    <>
      <section className="bg-[#F4FAFC] px-5 py-24 text-slate-950 lg:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div><div className="mb-4 inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-cyan-900">Continuidad operativa</div><h2 className="text-4xl font-black leading-tight md:text-6xl">Diseñamos disponibilidad, no solo conectividad.</h2><p className="mt-6 text-lg leading-8 text-slate-600">{page.sections?.[0]?.text ?? "Vialterna convierte múltiples operadores y tecnologías en una capa administrada de continuidad."}</p></div><div className="grid gap-5 md:grid-cols-3">{visualCards.map(([Icon, title, text]) => <motion.div whileHover={{ y: -8 }} key={title} className="rounded-[2rem] bg-white p-7 shadow-xl shadow-slate-200/70"><div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#061521] text-cyan-200"><Icon className="h-7 w-7" /></div><h3 className="text-xl font-black">{title}</h3><p className="mt-4 leading-7 text-slate-600">{text}</p></motion.div>)}</div></div></div></section>
      <section className="bg-white px-5 py-24 text-slate-950 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><div className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-emerald-800">Soluciones</div><h2 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">Conectividad administrada para operaciones críticas.</h2></div><p className="max-w-xl text-lg leading-8 text-slate-600">Un socio operativo para tecnologías de acceso, operadores, despliegue en campo, soporte y ciclo de vida.</p></div><CardGrid cards={solutions} /></div></section>
      <section className="bg-[#061521] px-5 py-24 text-white lg:px-8"><div className="mx-auto max-w-7xl"><div className="mb-12 max-w-3xl"><Pill>Industrias</Pill><h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">Construido para operaciones donde la conectividad impacta ingresos, servicio y continuidad.</h2></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{industries.map(({ icon: Icon, title, text, href }) => <a href={href} key={title} className="rounded-[1.8rem] border border-white/10 bg-white/8 p-6 backdrop-blur-xl"><Icon className="mb-6 h-8 w-8 text-cyan-200" /><h3 className="text-2xl font-black">{title}</h3><p className="mt-3 leading-7 text-white/72">{text}</p></a>)}</div></div></section>
      <section className="bg-[#061521] px-5 pb-24 text-white lg:px-8"><div className="mx-auto max-w-7xl overflow-hidden rounded-[2.8rem] border border-white/10 bg-white/8 p-7 shadow-2xl shadow-slate-950/40 backdrop-blur-xl md:p-10"><div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-center"><div><Pill icon={Gauge}>Operación</Pill><h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">NOC 24/7, SLA y gestión multioperador en un solo modelo de servicio.</h2></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{metrics.map(([value, label]) => <div key={label} className="rounded-[1.6rem] border border-white/10 bg-slate-950/35 p-6"><div className="text-4xl font-black text-cyan-100">{value}</div><div className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-white/55">{label}</div></div>)}</div></div></div></section>
    </>
  );
}

export function ContentPage({ page }) {
  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover grayscale-[18%] saturate-[.72]" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(6,21,33,.98)_0%,rgba(7,26,42,.93)_48%,rgba(6,21,33,.74)_100%)]" />
        <Header />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-16 lg:grid-cols-[.9fr_.8fr] lg:px-8">
          <div><Pill>{page.eyebrow}</Pill><h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.95] md:text-7xl">{page.h1}</h1><p className="mt-7 max-w-3xl text-xl font-bold leading-8 text-slate-100">{page.intro}</p><div className="mt-9"><a href="/contacto/" className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-8 py-4 font-black text-slate-950 shadow-xl shadow-cyan-950/30 transition hover:bg-white">Solicitar diagnóstico<ArrowRight className="h-5 w-5" /></a></div></div>
          <HeroVisual />
        </div>
      </section>
      {page.kind === "hub" && <section className="bg-white px-5 py-24 text-slate-950 lg:px-8"><div className="mx-auto max-w-7xl"><CardGrid cards={page.cards} /></div></section>}
      <section className="bg-[#F4FAFC] px-5 py-24 text-slate-950 lg:px-8"><div className="mx-auto grid max-w-7xl gap-8">{page.sections?.map((section) => <article key={section.h2} className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/70"><h2 className="text-4xl font-black leading-tight">{section.h2}</h2>{section.text && <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">{section.text}</p>}{section.features && <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{section.features.map(([title, text]) => <div key={title} className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-6"><BadgeCheck className="mb-4 h-6 w-6 text-cyan-700" /><h3 className="text-xl font-black">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></div>)}</div>}{section.steps && <div className="mt-8 grid gap-5 md:grid-cols-4">{section.steps.map(([title, text], index) => <div key={title} className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-6"><div className="mb-5 text-4xl font-black text-cyan-700">0{index + 1}</div><h3 className="text-xl font-black">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></div>)}</div>}</article>)}</div></section>
      {page.caseStudy && <section className="bg-white px-5 py-24 text-slate-950 lg:px-8"><div className="mx-auto max-w-7xl rounded-[2.8rem] bg-[#061521] p-8 text-white shadow-2xl shadow-slate-300/70 md:p-12"><Pill>Caso de referencia</Pill><h2 className="mt-6 text-4xl font-black leading-tight">Caso de referencia</h2><p className="mt-5 max-w-4xl text-lg leading-8 text-white/68">{page.caseStudy}</p></div></section>}
      {page.benefits && <section className="bg-white px-5 py-24 text-slate-950 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mb-10 inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-cyan-900">Beneficios</div><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{page.benefits.map((benefit) => <div key={benefit} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 font-bold text-slate-700"><BadgeCheck className="h-5 w-5 shrink-0 text-cyan-700" />{benefit}</div>)}</div></div></section>}
      <section className="bg-[#061521] px-5 py-24 text-white lg:px-8"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center"><div><Pill>Diagnóstico</Pill><h2 className="mt-5 text-4xl font-black leading-tight md:text-7xl">{page.cta?.title ?? "Solicita un diagnóstico de conectividad"}</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">{page.cta?.text}</p></div><div className="rounded-[2.5rem] border border-white/10 bg-white/8 p-8 backdrop-blur-2xl md:p-10"><div className="grid gap-4"><div className="flex items-start gap-3 rounded-2xl bg-white/8 p-4 text-white/82"><MapPin className="mt-1 h-5 w-5 shrink-0 text-cyan-200" />Montes Urales 720, Lomas de Chapultepec, Delegación Miguel Hidalgo, C.P. 11000</div><div className="flex items-center gap-3 rounded-2xl bg-white/8 p-4 text-white/82"><Mail className="h-5 w-5 shrink-0 text-cyan-200" />atencionaclientes@vialterna.com</div><div className="flex items-center gap-3 rounded-2xl bg-white/8 p-4 text-white/82"><Phone className="h-5 w-5 shrink-0 text-cyan-200" />55 8062 6884</div></div><a href="mailto:atencionaclientes@vialterna.com" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-4 font-black text-slate-950 transition hover:bg-white">Solicitar diagnóstico <ArrowRight className="h-5 w-5" /></a></div></div></section>
    </PageShell>
  );
}
