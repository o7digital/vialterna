import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  Factory,
  Gauge,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Network,
  RadioTower,
  Router,
  ShieldCheck,
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
    <div className="font-technical inline-flex items-center gap-2 rounded-md border border-[#0B65C7]/35 bg-[#0B65C7]/10 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-[#12B3CF] backdrop-blur-xl">
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </div>
  );
}

function LinkedInMark({ className = "" }) {
  return <span className={`font-black ${className}`}>in</span>;
}

function BrandLogo({ compact = false }) {
  return (
    <img src="/logo-vialterna.svg" alt="Vialterna" className={compact ? "h-8 w-auto max-w-[170px]" : "h-10 w-auto max-w-[220px]"} loading="eager" />
  );
}

function Header({ dark = true }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-30 border-b border-[#0B65C7]/35 bg-[#14161C]/96 shadow-[0_1px_0_rgba(18,179,207,0.12)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[96rem] items-center justify-between px-5 py-4 lg:px-8 2xl:px-10">
      <a href="/" className="flex items-center gap-3" aria-label="Vialterna inicio">
        <div className="relative grid h-14 min-w-[176px] place-items-center rounded-md border border-[#0B65C7]/25 bg-[#14161C] px-4">
          <BrandLogo />
        </div>
        <div className="hidden sm:block">
          <div className="font-technical text-[10px] uppercase tracking-[0.34em] text-[#F5F5F5]/60">
            Conectividad resiliente
          </div>
        </div>
      </a>
      <nav className="font-technical hidden items-center gap-1 border-l border-[#0B65C7]/25 pl-5 text-[13px] font-bold uppercase tracking-[0.05em] text-[#F5F5F5]/78 lg:flex xl:gap-2">
        {navigation.map((item) => (
          <div key={item.label} className="group relative">
            <a href={item.href} className="block whitespace-nowrap rounded-sm px-3 py-3 transition hover:bg-[#0B65C7]/12 hover:text-[#12B3CF] 2xl:px-4">{item.label}</a>
            {item.children && (
              <div className="pointer-events-none absolute left-0 top-11 grid min-w-[320px] translate-y-2 gap-1 rounded-md border border-[#0B65C7]/40 bg-[#14161C]/98 p-2 opacity-0 shadow-2xl shadow-black/45 backdrop-blur-2xl transition group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                {item.children.map((child) => (
                  <a className="rounded-sm border-l border-transparent px-4 py-3 text-[#F5F5F5]/72 hover:border-[#12B3CF] hover:bg-[#0B65C7]/12 hover:text-white" href={child.href} key={child.href}>{child.label}</a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="hidden shrink-0 items-center gap-3 lg:flex">
        <a href="https://www.linkedin.com/company/vialterna/" aria-label="LinkedIn" className="font-technical grid h-11 w-11 place-items-center rounded-md border border-[#0B65C7]/35 bg-[#14161C] text-white/85 transition hover:border-[#12B3CF] hover:text-[#12B3CF]">
          <span className="text-sm font-black">in</span>
        </a>
        <a href="/contacto/" className="font-technical rounded-md bg-[#0B65C7] px-5 py-3 text-sm font-black uppercase tracking-[0.04em] text-white shadow-[0_0_0_1px_rgba(18,179,207,0.28)] transition hover:bg-[#12B3CF] hover:text-[#14161C]">Solicitar diagnóstico</a>
      </div>
      <button onClick={() => setOpen(!open)} className="rounded-md border border-[#0B65C7]/35 bg-[#14161C] p-3 text-white lg:hidden" aria-label="Abrir menú">
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <div className="font-technical absolute left-5 right-5 top-[76px] z-40 rounded-md border border-[#0B65C7]/40 bg-[#14161C]/98 p-3 backdrop-blur-xl lg:hidden">
          {navigation.map((item) => (
            <div key={item.href} className="border-b border-[#0B65C7]/20 last:border-b-0">
              <a href={item.href} className="block px-2 py-3 text-sm font-bold uppercase tracking-[0.05em] text-[#F5F5F5]/85">{item.label}</a>
              {item.children && (
                <div className="grid gap-1 pb-3 pl-4">
                  {item.children.map((child) => (
                    <a href={child.href} key={child.href} className="block rounded-sm px-2 py-2 text-xs font-bold uppercase tracking-[0.04em] text-[#F5F5F5]/55 hover:bg-[#0B65C7]/12 hover:text-[#12B3CF]">{child.label}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#14161C] px-5 py-12 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div className="flex items-center gap-3">
          <div className="grid h-14 min-w-[162px] place-items-center rounded-md border border-[#0B65C7]/25 bg-[#14161C] px-4">
            <BrandLogo compact />
          </div>
          <div className="text-xs text-white/45">Conectividad resiliente</div>
        </div>
        <div><h4 className="font-black">Soluciones</h4><div className="mt-4 grid gap-2 text-white/55">{solutions.map((s) => <a href={s.href} key={s.href}>{s.title}</a>)}</div></div>
        <div><h4 className="font-black">Empresa</h4><div className="mt-4 grid gap-2 text-white/55"><a href="/industrias/">Industrias</a><a href="/empresa/">Empresa</a><a href="/insights/">Insights</a></div></div>
        <div><h4 className="font-black">Contacto</h4><div className="mt-4 grid gap-2 text-white/55"><span>atencionaclientes@vialterna.com</span><span>55 8062 6884</span><span>2026 Vialterna</span></div></div>
      </div>
    </footer>
  );
}

function HeroVisual() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.08 }} className="relative mx-auto w-full max-w-[740px]">
      <div className="absolute -inset-4 rounded-lg bg-[linear-gradient(135deg,rgba(11,101,199,0.18),rgba(18,179,207,0.06))] blur-2xl" />
      <div className="relative overflow-hidden rounded-lg border border-[#0B65C7]/30 bg-[#14161C]/52 p-3 shadow-2xl shadow-black/35 backdrop-blur-md">
        <div className="relative overflow-hidden rounded-md border border-[#0B65C7]/22 bg-[#14161C]/58 p-4 md:p-5">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(18,179,207,.24) 1px, transparent 1px), linear-gradient(90deg, rgba(18,179,207,.24) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />
          <div className="relative rounded-md border border-[#0B65C7]/30 bg-[#14161C]/80 p-4">
            <BrandLogo />
          </div>

          <div className="relative mt-5">
            <div className="font-technical inline-flex rounded-md border border-[#12B3CF]/25 bg-[#0B65C7]/10 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#12B3CF]">
              Gestión administrada
            </div>
            <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-4xl">
              Continuidad operativa para sitios, enlaces y dispositivos críticos.
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-white/64">
              Una capa administrada para mantener visibles, respaldadas y conectadas las operaciones distribuidas en México.
            </p>
          </div>

          <div className="relative mt-5 grid gap-3 md:grid-cols-3">
            {[
              [Router, "Multioperador", "Arquitectura flexible"],
              [ShieldCheck, "SLA", "Disponibilidad respaldada"],
              [Gauge, "Respaldo", "Continuidad operativa"],
            ].map(([Icon, title, text]) => (
              <div key={title} className="rounded-md border border-[#0B65C7]/28 bg-[#0B65C7]/8 p-4">
                <Icon className="mb-3 h-5 w-5 text-[#12B3CF]" />
                <div className="font-black">{title}</div>
                <div className="mt-1 text-sm leading-5 text-white/55">{text}</div>
              </div>
            ))}
          </div>

          <div className="relative mt-4 rounded-md border border-[#0B65C7]/28 bg-white/[0.025] p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="font-technical text-sm font-black uppercase tracking-[0.08em] text-[#F5F5F5]/80">Arquitectura de disponibilidad</div>
              <Gauge className="h-5 w-5 text-[#12B3CF]" />
            </div>
            <div className="grid gap-3">
              {["Respaldo LTE / 5G", "Failover satelital", "Supervisión centralizada"].map((name) => (
                <div key={name} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#12B3CF] shadow-[0_0_18px_rgba(18,179,207,0.65)]" />
                  <div className="h-px flex-1 bg-gradient-to-r from-[#12B3CF]/80 via-[#0B65C7]/55 to-transparent" />
                  <span className="font-technical min-w-[168px] text-right text-xs font-bold uppercase tracking-[0.08em] text-white/62">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PageShell({ children }) {
  return <div className="min-h-screen bg-[#14161C] text-white selection:bg-[#12B3CF]/30">{children}<Footer /></div>;
}

export function HomePage({ page }) {
  return (
    <PageShell>
      <section className="relative min-h-screen overflow-hidden">
        <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover grayscale-[18%] saturate-[.72]" loading="eager" />
        <video className="absolute inset-0 h-full w-full object-contain object-center grayscale-[18%] saturate-[.72]" src={heroVideo} poster={heroImage} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(20,22,28,.88)_0%,rgba(20,22,28,.72)_44%,rgba(20,22,28,.28)_100%)]" />
        <Header />
        <div className="relative z-10 mx-auto grid max-w-[96rem] items-center gap-10 px-5 pb-20 pt-12 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-24 lg:pt-16 2xl:px-10">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <Pill icon={Zap}>{page.eyebrow}</Pill>
            <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.96] md:text-6xl xl:text-[4.75rem]">{page.h1}</h1>
            <p className="mt-7 max-w-2xl text-xl font-bold leading-8 text-slate-100 md:text-2xl md:leading-9">{page.intro}</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row"><a href="/contacto/" className="font-technical group inline-flex items-center justify-center gap-2 rounded-md bg-[#0B65C7] px-8 py-4 text-sm font-black uppercase tracking-[0.04em] text-white shadow-2xl shadow-slate-950/40 transition hover:bg-[#12B3CF] hover:text-[#14161C]">Solicitar diagnóstico<ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></a><a href="/soluciones/" className="font-technical inline-flex items-center justify-center gap-2 rounded-md border border-[#0B65C7]/45 bg-[#14161C]/55 px-8 py-4 text-sm font-black uppercase tracking-[0.04em] text-white backdrop-blur transition hover:border-[#12B3CF] hover:bg-[#0B65C7]/18">Explorar soluciones <ChevronRight className="h-5 w-5" /></a></div>
          </motion.div>
          <HeroVisual />
        </div>
      </section>
      <DesignSections page={page} />
    </PageShell>
  );
}

function CardGrid({ cards }) {
  return <div className="grid gap-6 lg:grid-cols-4">{cards.map(({ icon: Icon, title, text, image, href }, index) => <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} whileHover={{ y: -8 }} key={title} className="group overflow-hidden rounded-md border border-white/16 bg-black shadow-2xl shadow-black/25 transition hover:border-[#12B3CF]/70"><div className="relative h-48 overflow-hidden">{image && <img src={image} alt={title} className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105" loading="lazy" />}<div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" /><div className="absolute bottom-5 left-5 grid h-12 w-12 place-items-center rounded-md bg-white text-[#14161C]"><Icon className="h-6 w-6" /></div></div><div className="p-7 text-white"><h3 className="text-2xl font-light tracking-tight">{title}</h3><p className="mt-4 leading-7 text-white/72">{text}</p>{href && <a href={href} className="mt-7 inline-flex items-center gap-2 rounded-md border-2 border-[#F26A2E] px-5 py-3 text-sm font-black text-white transition hover:bg-[#F26A2E]">Ver más<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></a>}</div></motion.article>)}</div>;
}

function DesignSections({ page }) {
  const [riskSection, approachesSection, availabilitySection, processSection] = page.sections ?? [];
  return (
    <>
      <section className="bg-[#111217] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-black leading-tight md:text-6xl">{riskSection?.h2}</h2>
          <p className="mx-auto mt-7 max-w-5xl text-xl leading-9 text-white/72">{riskSection?.text}</p>
          <div className="mx-auto mt-14 max-w-5xl border-l-4 border-[#12B3CF] bg-[#14161C] p-8 text-left shadow-2xl shadow-black/25">
            <p className="text-2xl font-bold leading-10 text-white/82">
              El tiempo de inactividad impacta directamente tu P&amp;L. <span className="text-[#12B3CF]">La mayoría de las empresas nunca lo han cuantificado.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#111217] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-[96rem]">
          <h2 className="mx-auto max-w-6xl text-center text-4xl font-black leading-tight md:text-6xl">{approachesSection?.h2}</h2>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {approachesSection?.approaches?.map(([title, text]) => (
              <article key={title} className="min-h-[24rem] rounded-md border border-white/18 bg-white/[0.035] p-8 shadow-2xl shadow-black/20">
                <h3 className="text-3xl font-bold leading-tight text-white">{title}</h3>
                <p className="mt-6 text-lg leading-8 text-white/72">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111217] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-[96rem]">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-4xl font-black leading-tight md:text-6xl">{availabilitySection?.h2}</h2>
            <p className="mx-auto mt-7 max-w-5xl text-xl leading-9 text-white/72">{availabilitySection?.text}</p>
            <p className="mx-auto mt-9 max-w-4xl text-xl leading-8 text-white/78">Tres pilares sustentan el servicio. Juntos, son la forma en que diseñamos disponibilidad en lugar de vender enlaces.</p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {visualCards.map(([Icon, title, text], index) => (
              <article key={title} className="grid gap-5 lg:grid-cols-[10rem_1fr]">
                <div className="font-technical text-8xl font-light leading-none text-[#0B65C7]">0{index + 1}</div>
                <div>
                  <Icon className="mb-6 h-9 w-9 text-[#12B3CF]" />
                  <h3 className="text-4xl font-light leading-tight text-white">{title}</h3>
                  <p className="mt-5 text-lg leading-8 text-white/72">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071622] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-[86rem] overflow-hidden rounded-md border border-white/12 bg-white/[0.075] p-8 shadow-2xl shadow-black/35 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
            <div>
              <Pill icon={Gauge}>Operación</Pill>
              <h2 className="mt-7 text-4xl font-black leading-tight md:text-6xl">
                NOC 24/7, SLA y gestión multioperador en un solo modelo de servicio.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map(([value, label]) => (
                <div key={label} className="rounded-md border border-white/10 bg-[#111827]/80 p-6">
                  <div className="text-4xl font-black text-cyan-100">{value}</div>
                  <div className="mt-4 text-sm font-black uppercase tracking-[0.14em] text-white/55">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111217] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mx-auto max-w-5xl text-center text-4xl font-black leading-tight md:text-6xl">{processSection?.h2}</h2>
          <div className="mx-auto mt-14 grid max-w-5xl gap-10 border-l-2 border-[#12B3CF] pl-8">
            {processSection?.steps?.map(([title, text]) => (
              <article key={title} className="grid gap-3 md:grid-cols-[12rem_1fr]">
                <h3 className="text-3xl font-light text-white">{title}</h3>
                <p className="text-lg leading-8 text-white/72">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111217] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-black leading-tight md:text-6xl">Cuatro soluciones. Una plataforma. Lo que necesites para mantener tus operaciones en línea.</h2>
            <p className="mx-auto mt-6 max-w-4xl text-xl leading-8 text-white/70">Cada solución corresponde a un problema de conectividad concreto.</p>
          </div>
          <CardGrid cards={solutions} />
        </div>
      </section>

      <section className="bg-[#111217] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <Pill>Industrias</Pill>
            <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">Construido para operaciones distribuidas donde el tiempo de inactividad tiene precio.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{industries.map(({ icon: Icon, title, text, href }) => <a href={href} key={title} className="rounded-md border border-white/12 bg-white/[0.045] p-6 backdrop-blur-xl"><Icon className="mb-6 h-8 w-8 text-[#12B3CF]" /><h3 className="text-2xl font-black">{title}</h3><p className="mt-3 leading-7 text-white/72">{text}</p></a>)}</div>
        </div>
      </section>

      <section className="bg-[#F4FAFC] px-5 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-cyan-100 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-cyan-900">
              <Network className="h-4 w-4" />
              SD-WAN
            </div>
            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Redes SD-WAN multioperador para continuidad del negocio.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Combinamos fibra, LTE, 5G, satélite y enlaces inalámbricos en una arquitectura administrada con failover automático, agregación de enlaces y monitoreo centralizado.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {sdWanFeatures.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-slate-200 bg-white p-4 font-bold text-slate-700">
                  <BadgeCheck className="h-5 w-5 shrink-0 text-cyan-700" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md bg-[#061521] p-5 text-white shadow-2xl shadow-slate-300/70">
            <div className="rounded-md border border-white/10 bg-white/7 p-6">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-cyan-100/50">Arquitectura</div>
                  <div className="mt-1 text-2xl font-black">Failover + agregación</div>
                </div>
                <Router className="h-8 w-8 text-cyan-200" />
              </div>
              <div className="relative h-[430px] overflow-hidden rounded-md bg-[linear-gradient(135deg,rgba(6,21,33,.25),rgba(6,21,33,.82)),url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1300&q=80')] bg-cover bg-center">
                <div className="absolute bottom-5 left-5 right-5 grid gap-3">
                  {["Fibra + LTE + 5G + satélite", "QoS y túneles seguros", "Monitoreo NOC centralizado"].map((item) => (
                    <div key={item} className="rounded-md border border-white/10 bg-slate-950/65 p-4 font-bold backdrop-blur-xl">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-md bg-[#061521] text-white shadow-2xl shadow-slate-300/70">
          <div className="grid lg:grid-cols-[.95fr_1.05fr]">
            <div className="p-8 md:p-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-cyan-100">
                <ShieldCheck className="h-4 w-4" />
                Conectividad de respaldo
              </div>
              <h2 className="text-4xl font-black leading-tight md:text-6xl">
                Respaldo satelital y celular antes de que una falla detenga la operación.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/68">
                Vialterna diseña capas de redundancia con LTE, 5G, satélite y acceso multioperador para mantener activos sitios críticos.
              </p>
              <a href="/contacto/" className="mt-8 inline-flex items-center gap-2 rounded-md bg-cyan-300 px-7 py-4 font-black text-slate-950 transition hover:bg-white">
                Solicitar diagnóstico <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="relative min-h-[430px] bg-[linear-gradient(135deg,rgba(6,21,33,.2),rgba(6,21,33,.8)),url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1500&q=85')] bg-cover bg-center">
              <div className="absolute bottom-8 left-8 right-8 grid gap-3 sm:grid-cols-2">
                {["LTE", "5G", "Satelital", "Multioperador"].map((item) => (
                  <div key={item} className="rounded-md border border-white/10 bg-slate-950/60 p-4 font-black backdrop-blur-xl">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#071622] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <Pill>Contacto</Pill>
            <h2 className="mt-7 text-5xl font-black leading-[0.98] md:text-7xl">
              Solicita un diagnóstico de conectividad.
            </h2>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-white/64">
              Cuéntanos dónde tu operación está expuesta a riesgo de conectividad. Evaluamos puntos únicos de falla, oportunidades de optimización y mejoras posibles para tu infraestructura.
            </p>
          </div>

          <div className="rounded-md border border-white/12 bg-white/[0.075] p-8 shadow-2xl shadow-black/30 backdrop-blur-2xl md:p-10">
            <div className="font-technical text-sm font-black uppercase tracking-[0.24em] text-[#9AEAF4]">Vialterna</div>
            <div className="mt-8 grid gap-4">
              <div className="flex items-start gap-4 rounded-md bg-white/8 p-5 text-white/82">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-[#9AEAF4]" />
                <span>Montes Urales 720, Lomas de Chapultepec, Delegación Miguel Hidalgo, C.P. 11000</span>
              </div>
              <a href="mailto:atencionaclientes@vialterna.com" className="flex items-center gap-4 rounded-md bg-white/8 p-5 text-white/82 transition hover:bg-white/12">
                <Mail className="h-6 w-6 shrink-0 text-[#9AEAF4]" />
                <span>atencionaclientes@vialterna.com</span>
              </a>
              <a href="https://wa.me/525580626884" className="flex items-center gap-4 rounded-md bg-white/8 p-5 text-white/82 transition hover:bg-white/12">
                <MessageCircle className="h-6 w-6 shrink-0 text-[#9AEAF4]" />
                <span>55 8062 6884</span>
              </a>
            </div>
            <a href="/contacto/" className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-md bg-cyan-300 px-7 py-4 font-black text-slate-950 transition hover:bg-white">
              Solicitar diagnóstico <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

const contactCards = [
  {
    icon: MessageCircle,
    title: "Diseño de Soluciones",
    text: "Inicia una conversación directa con nuestro equipo de desarrollo de negocios.",
    detail: "55 8062 6884",
    href: "https://wa.me/525580626884",
    action: "Abrir WhatsApp"
  },
  {
    icon: Mail,
    title: "Especificaciones de Proyecto",
    text: "Envíanos tus requerimientos de infraestructura para recibir una propuesta técnica detallada.",
    detail: "atencionaclientes@vialterna.com",
    href: "mailto:atencionaclientes@vialterna.com",
    action: "Enviar correo"
  },
  {
    icon: MapPin,
    title: "Conectemos en Persona",
    text: "Montes Urales 720, Lomas de Chapultepec, Delegación Miguel Hidalgo, C.P. 11000 PB.",
    detail: "Lun-Vie | 09:00 - 18:00 CST",
    href: "https://www.google.com/maps/search/?api=1&query=Montes%20Urales%20720%20Lomas%20de%20Chapultepec%20Miguel%20Hidalgo%2011000",
    action: "Ver mapa"
  },
  {
    icon: LinkedInMark,
    title: "Sigue el Edge",
    text: "Casos de estudio, tendencias de la industria y actualizaciones de conectividad administrada.",
    detail: "Visita nuestro LinkedIn",
    href: "https://www.linkedin.com/company/vialterna/",
    action: "Abrir LinkedIn"
  }
];

function Field({ label, name, type = "text", required = false, className = "" }) {
  return (
    <label className={`grid gap-2 ${className}`}>
      <span className="text-sm font-bold text-white/70">{label}{required && <span className="text-[#12B3CF]">*</span>}</span>
      <input name={name} type={type} required={required} className="min-h-12 rounded-md border border-[#0B65C7]/25 bg-white px-4 text-[#14161C] outline-none transition focus:border-[#12B3CF] focus:ring-2 focus:ring-[#12B3CF]/25" />
    </label>
  );
}

function ContactPage({ page }) {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-[#14161C]">
        <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20 grayscale-[18%] saturate-[.72]" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(20,22,28,.98)_0%,rgba(20,22,28,.92)_48%,rgba(20,22,28,.84)_100%)]" />
        <Header />
        <div className="relative z-10 mx-auto max-w-[96rem] px-5 py-20 lg:px-8 2xl:px-10">
          <div className="mx-auto max-w-5xl text-center">
            <Pill>{page.eyebrow}</Pill>
            <h1 className="mt-7 text-5xl font-black leading-[0.95] text-white md:text-7xl">{page.h1}</h1>
            <p className="mx-auto mt-6 max-w-4xl text-2xl font-bold leading-9 text-white/78">{page.intro}</p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {contactCards.map(({ icon: Icon, title, text, detail, href, action }) => (
              <a key={title} href={href} className="group rounded-md border border-[#0B65C7]/35 bg-white/[0.055] p-6 text-center shadow-xl shadow-black/25 backdrop-blur-xl transition hover:border-[#12B3CF] hover:bg-[#0B65C7]/12">
                <Icon className="mx-auto h-9 w-9 text-[#12B3CF]" />
                <h2 className="mt-5 text-xl font-black text-white">{title}</h2>
                <p className="mt-4 leading-7 text-white/62">{text}</p>
                <div className="mt-5 font-bold text-white">{detail}</div>
                <div className="font-technical mt-4 text-xs font-black uppercase tracking-[0.12em] text-[#12B3CF]">{action}</div>
              </a>
            ))}
          </div>

          <div className="mt-14 overflow-hidden rounded-md border border-[#0B65C7]/40 bg-[#14161C]/74 shadow-2xl shadow-black/35 backdrop-blur-xl">
            <div className="relative p-6 md:p-10">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.13]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(18,179,207,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(18,179,207,.22) 1px, transparent 1px)",
                  backgroundSize: "46px 46px",
                }}
              />
              <div className="relative">
                <div className="max-w-4xl">
                  <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">Empieza con un diagnóstico</h2>
                  <p className="mt-5 text-lg leading-8 text-white/72">
                    Analizamos tu infraestructura de conectividad, contratos con operadores, gasto, redundancias y desempeño para identificar riesgos de desconexión y oportunidades de optimización.
                  </p>
                </div>

                <form action="mailto:atencionaclientes@vialterna.com" method="post" encType="text/plain" className="mt-9 grid gap-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Nombre" name="nombre" required />
                    <Field label="Empresa" name="empresa" required />
                    <Field label="Correo" name="correo" type="email" required />
                    <Field label="Teléfono" name="telefono" type="tel" required />
                  </div>
                  <label className="grid gap-2">
                    <span className="text-sm font-bold text-white/70">Cómo podemos ayudarte</span>
                    <textarea name="mensaje" rows={4} className="rounded-md border border-[#0B65C7]/25 bg-white px-4 py-3 text-[#14161C] outline-none transition focus:border-[#12B3CF] focus:ring-2 focus:ring-[#12B3CF]/25" />
                  </label>
                  <button type="submit" className="font-technical mt-4 inline-flex w-fit items-center justify-center gap-2 rounded-md bg-[#0B65C7] px-8 py-4 text-sm font-black uppercase tracking-[0.04em] text-white shadow-xl shadow-black/30 transition hover:bg-[#12B3CF] hover:text-[#14161C]">
                    Enviar <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function ContentPage({ page, path }) {
  if (page.kind === "contact" || path === "/contacto/") {
    return <ContactPage page={page} />;
  }

  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover grayscale-[18%] saturate-[.72]" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(20,22,28,.98)_0%,rgba(20,22,28,.94)_48%,rgba(20,22,28,.76)_100%)]" />
        <Header />
        <div className="relative z-10 mx-auto grid max-w-[96rem] items-center gap-12 px-5 pb-24 pt-16 lg:grid-cols-[.9fr_1.1fr] lg:px-8 2xl:px-10">
          <div><Pill>{page.eyebrow}</Pill><h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.95] md:text-7xl">{page.h1}</h1><p className="mt-7 max-w-3xl text-xl font-bold leading-8 text-slate-100">{page.intro}</p><div className="mt-9"><a href="/contacto/" className="font-technical inline-flex items-center gap-2 rounded-md bg-[#0B65C7] px-8 py-4 text-sm font-black uppercase tracking-[0.04em] text-white shadow-xl shadow-cyan-950/30 transition hover:bg-[#12B3CF] hover:text-[#14161C]">Solicitar diagnóstico<ArrowRight className="h-5 w-5" /></a></div></div>
          <HeroVisual />
        </div>
      </section>
      {page.kind === "hub" && <section className="bg-white px-5 py-24 text-slate-950 lg:px-8"><div className="mx-auto max-w-7xl"><CardGrid cards={page.cards} /></div></section>}
      <section className="bg-[#F4FAFC] px-5 py-24 text-slate-950 lg:px-8"><div className="mx-auto grid max-w-7xl gap-8">{page.sections?.map((section) => <article key={section.h2} className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/70"><h2 className="text-4xl font-black leading-tight">{section.h2}</h2>{section.text && <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">{section.text}</p>}{section.features && <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{section.features.map(([title, text]) => <div key={title} className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-6"><BadgeCheck className="mb-4 h-6 w-6 text-cyan-700" /><h3 className="text-xl font-black">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></div>)}</div>}{section.steps && <div className="mt-8 grid gap-5 md:grid-cols-4">{section.steps.map(([title, text], index) => <div key={title} className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-6"><div className="mb-5 text-4xl font-black text-cyan-700">0{index + 1}</div><h3 className="text-xl font-black">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></div>)}</div>}</article>)}</div></section>
      {page.caseStudy && <section className="bg-white px-5 py-24 text-slate-950 lg:px-8"><div className="mx-auto max-w-7xl rounded-[2.8rem] bg-[#14161C] p-8 text-white shadow-2xl shadow-slate-300/70 md:p-12"><Pill>Caso de referencia</Pill><h2 className="mt-6 text-4xl font-black leading-tight">Caso de referencia</h2><p className="mt-5 max-w-4xl text-lg leading-8 text-white/68">{page.caseStudy}</p></div></section>}
      {page.benefits && <section className="bg-white px-5 py-24 text-slate-950 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mb-10 inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-cyan-900">Beneficios</div><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{page.benefits.map((benefit) => <div key={benefit} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 font-bold text-slate-700"><BadgeCheck className="h-5 w-5 shrink-0 text-cyan-700" />{benefit}</div>)}</div></div></section>}
    </PageShell>
  );
}
