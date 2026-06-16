import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
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
  Satellite,
  ShieldCheck,
  Signal,
  Smartphone,
  Store,
  Wifi,
  X,
  Zap,
} from "lucide-react";

const nav = [
  { id: "servicios", label: "Soluciones" },
  { id: "industrias", label: "Industrias" },
  { id: "empresa", label: "Empresa" },
  { id: "insights", label: "Insights" },
  { id: "contact", label: "Contacto" },
];

const heroImage =
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=82";
const heroVideo =
  "https://vialterna.com/wp-content/uploads/2026/04/Conectividad-Vialterna-original.mp4";

const solutions = [
  {
    icon: Router,
    title: "Soluciones Edge (Última Milla)",
    text: "Arquitectura, hardware administrado y failover automático para sucursales, cajeros automáticos, tiendas, franquicias y sitios remotos.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Building2,
    title: "Sitios centrales",
    text: "Conectividad resiliente y de alto rendimiento para corporativos, centros de datos, hubs regionales, centros de distribución y sitios transaccionales.",
    image:
      "https://images.unsplash.com/photo-1600267165477-6d4cc741b379?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: RadioTower,
    title: "Soluciones IoT/SIM",
    text: "Gestión de SIMs, conectividad celular administrada, control de consumo, alertas, optimización de planes y ciclo de vida para dispositivos conectados.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Satellite,
    title: "Soluciones de Respaldo",
    text: "Conectividad secundaria con failover satelital LEO, LTE o 5G para sitios remotos, retail, banca e infraestructura crítica.",
    image:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=900&q=80",
  },
];

const outcomeCards = [
  [
    Wifi,
    "Agnóstico de operador",
    "La arquitectura se diseña alrededor del negocio del cliente, no alrededor de la red de un proveedor específico.",
  ],
  [
    ShieldCheck,
    "Servicio administrado",
    "Vialterna diseña, despliega, monitorea, optimiza y da seguimiento continuo a la infraestructura.",
  ],
  [
    Network,
    "Operaciones distribuidas",
    "Conectividad para bancos, retail, franquicias, infraestructura de pagos, sitios industriales y operaciones remotas.",
  ],
];

const industries = [
  [
    Building2,
    "Servicios financieros",
    "Redes de cajeros automáticos, sucursales bancarias e infraestructura transaccional.",
  ],
  [
    Store,
    "Retail y franquicias",
    "Tiendas, POS, inventarios, pedidos en línea y operaciones en tiempo real.",
  ],
  [
    Factory,
    "Energía e industria",
    "Sitios remotos, SCADA, seguridad operativa y telemetría industrial.",
  ],
  [
    Smartphone,
    "Infraestructura de pagos",
    "Conectividad de terminales, redes de comercios y continuidad transaccional.",
  ],
];

const copy = {
  brandLine: "Conectividad resiliente",
  heroKicker: "Infraestructura crítica en México",
  heroTitleA: "Disponibilidad como Servicio",
  heroTitleB: "para redes distribuidas.",
  heroSubtitle: "Conectividad administrada para empresas donde cada sitio, enlace y dispositivo debe permanecer visible, respaldado y disponible.",
  heroText:
    "Vialterna diseña, despliega y opera arquitecturas multioperador para bancos, redes de cajeros automáticos, retail, franquicias, infraestructura de pagos, sitios industriales y operaciones remotas.",
  primaryCta: "Solicitar diagnóstico",
  secondaryCta: "Explorar soluciones",
  architectureSubtitle: "Multioperador · respaldo · SLA",
  architectureBadge: "Arquitectura visible",
  mapEyebrow: "Visibilidad de red",
  mapTitle: "Sitios conectados",
  nodes: ["Sucursales", "Retail", "Cajeros", "Sitios remotos"],
  progressTitle: "Diseño de disponibilidad",
  progress: ["Multioperador", "Respaldo LTE / 5G", "Failover satelital"],
  smallCards: [
    ["Respaldado por SLA", "Disponibilidad medible"],
    ["Servicio administrado", "Conectividad visible"],
  ],
  architecture: "Arquitectura",
  servicesKicker: "Soluciones",
  servicesTitle: "Conectividad administrada para operaciones críticas.",
  servicesText:
    "Un socio operativo para tecnologías de acceso, operadores, despliegue en campo, soporte y ciclo de vida.",
  solutionCta: "Ver solución",
  industriesKicker: "Industrias",
  industriesTitle: "Construido para operaciones donde la conectividad impacta ingresos, servicio y continuidad.",
  operationKicker: "Operación",
  operationTitle: "Gestión multioperador y disponibilidad respaldada por SLA",
  contactTitle: "Solicita un diagnóstico de conectividad.",
  contactText:
    "Cuéntanos dónde tu operación está expuesta a riesgo de conectividad. Evaluamos puntos únicos de falla, oportunidades de optimización y mejoras posibles para tu infraestructura.",
  contactCta: "Solicitar diagnóstico",
};

const metrics = [
  ["SLA", "Disponibilidad reportada"],
  ["Multi", "Gestión de operadores"],
  ["Respaldo", "Continuidad operativa"],
  ["México", "Operaciones distribuidas"],
];

const workSteps = [
  ["Diagnosticar", "Evaluamos ubicaciones, cobertura, riesgos y requerimientos del negocio."],
  ["Diseñar", "Definimos la arquitectura multioperador más adecuada para cada sitio."],
  ["Desplegar", "Coordinamos operadores, equipos, instalación y activación."],
  ["Operar", "Monitoreamos, damos soporte y optimizamos la red."],
];

const sdWanFeatures = [
  "Multioperador",
  "LTE / 5G",
  "Respaldo satelital",
  "Failover automático",
  "Agregación de enlaces",
  "Supervisión centralizada",
  "QoS",
  "Túneles seguros",
];

const iotFeatures = [
  "Ciclo de vida de SIMs",
  "Conectividad IoT",
  "Sensores",
  "Telemetría",
  "Activos remotos",
  "Alertas operativas",
];

function Pill({ children, icon: Icon }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-white/8 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-cyan-100 backdrop-blur-xl">
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </div>
  );
}

function PulseNode({ className = "", label }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="relative">
        <span className="absolute inline-flex h-5 w-5 animate-ping rounded-full bg-cyan-300 opacity-70" />
        <span className="relative inline-flex h-5 w-5 rounded-full border-2 border-white bg-cyan-300 shadow-lg shadow-cyan-300/40" />
        <div className="mt-2 whitespace-nowrap rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-[11px] font-black text-white backdrop-blur-xl">
          {label}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [open, setOpen] = useState(false);
  const t = copy;

  return (
    <div className="min-h-screen bg-[#061521] text-white selection:bg-cyan-300/30">
      <section className="relative min-h-screen overflow-hidden">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover grayscale-[18%] saturate-[.72]"
          loading="eager"
        />
        <video
          className="absolute inset-0 h-full w-full object-contain object-center grayscale-[18%] saturate-[.72]"
          src={heroVideo}
          poster={heroImage}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(6,21,33,.98)_0%,rgba(7,26,42,.91)_45%,rgba(6,21,33,.56)_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.22) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        />

        <header className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white text-[#061521] shadow-2xl shadow-cyan-950/50">
              <Signal className="h-6 w-6" />
              <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-[#061521] bg-cyan-300" />
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight">Vialterna</div>
              <div className="text-[10px] uppercase tracking-[0.34em] text-cyan-100/70">
                {t.brandLine}
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 rounded-full border border-white/10 bg-white/8 px-6 py-3 text-sm font-bold text-white/80 backdrop-blur-2xl lg:flex">
            {nav.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="transition hover:text-cyan-200">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://www.linkedin.com"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/8 text-white/90 backdrop-blur transition hover:bg-white/15"
            >
              <span className="text-sm font-black">in</span>
            </a>
            <a
              href="#contact"
              className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 shadow-xl shadow-cyan-950/30 transition hover:bg-white"
            >
              {t.primaryCta}
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-2xl border border-white/15 bg-white/5 p-3 lg:hidden"
            aria-label="Abrir menú"
          >
            {open ? <X /> : <Menu />}
          </button>
        </header>

        {open && (
          <div className="relative z-40 mx-5 rounded-3xl border border-white/10 bg-slate-950/90 p-5 backdrop-blur-xl lg:hidden">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 py-3 text-white/85 last:border-b-0"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 lg:grid-cols-[.96fr_1.04fr] lg:px-8 lg:pb-28 lg:pt-20">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <Pill icon={Zap}>{t.heroKicker}</Pill>
            <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.92] md:text-7xl xl:text-8xl">
              {t.heroTitleA}
              <span className="bg-gradient-to-r from-cyan-100 via-emerald-100 to-white bg-clip-text text-transparent">
                {" "}
                {t.heroTitleB}
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-xl font-bold leading-8 text-slate-100 md:text-2xl md:leading-9">
              {t.heroSubtitle}
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200/78">
              {t.heroText}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-black text-[#061521] shadow-2xl shadow-slate-950/40 transition hover:bg-cyan-100"
              >
                {t.primaryCta}
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/7 px-8 py-4 font-black text-white backdrop-blur transition hover:bg-white/12"
              >
                {t.secondaryCta} <ChevronRight className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-cyan-200/14 via-emerald-300/8 to-blue-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-slate-950/45 p-4 shadow-2xl shadow-slate-950/50 backdrop-blur-2xl">
              <div className="overflow-hidden rounded-[2rem] bg-[#071A2A]">
                <div className="flex flex-col gap-3 border-b border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-200/12 text-cyan-100">
                      <Router className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-black">Gestión de conectividad</div>
                      <div className="text-xs text-white/45">{t.architectureSubtitle}</div>
                    </div>
                  </div>
                  <div className="w-fit rounded-full bg-emerald-300/14 px-3 py-1 text-xs font-black text-emerald-100">
                    {t.architectureBadge}
                  </div>
                </div>

                <div className="grid gap-4 p-4 xl:grid-cols-[1fr_.78fr]">
                  <div className="relative min-h-[430px] overflow-hidden rounded-[1.6rem] bg-[linear-gradient(135deg,rgba(8,27,44,.15),rgba(8,27,44,.84)),url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1300&q=80')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30" />
                    <div className="absolute left-5 top-5 rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-xl">
                      <div className="text-xs uppercase tracking-[0.22em] text-slate-100/60">
                        {t.mapEyebrow}
                      </div>
                      <div className="mt-1 text-2xl font-black">{t.mapTitle}</div>
                    </div>
                    <PulseNode label={t.nodes[0]} className="left-[18%] top-[28%]" />
                    <PulseNode label={t.nodes[1]} className="left-[55%] top-[24%]" />
                    <PulseNode label={t.nodes[2]} className="left-[38%] top-[53%]" />
                    <PulseNode label={t.nodes[3]} className="left-[62%] top-[60%]" />
                    <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
                      {["Fibra", "LTE / 5G", "Satelital"].map((item) => (
                        <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-3 text-center text-xs font-black backdrop-blur-xl">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1.6rem] border border-white/10 bg-white/7 p-5">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="text-sm font-black">{t.progressTitle}</div>
                        <Gauge className="h-5 w-5 text-cyan-100" />
                      </div>
                      {[
                        [t.progress[0], "99%"],
                        [t.progress[1], "87%"],
                        [t.progress[2], "82%"],
                      ].map(([name, val]) => (
                        <div key={name} className="mb-4 last:mb-0">
                          <div className="mb-2 flex justify-between text-xs text-white/60">
                            <span>{name}</span>
                            <span>{val}</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-white/10">
                            <div className="h-full rounded-full bg-gradient-to-r from-cyan-200 to-emerald-200" style={{ width: val }} />
                          </div>
                        </div>
                      ))}
                    </div>
                    {[
                      [ShieldCheck, t.smallCards[0][0], t.smallCards[0][1], "slate"],
                      [Clock3, t.smallCards[1][0], t.smallCards[1][1], "cyan"],
                    ].map(([Icon, title, text, tone]) => (
                      <div
                        key={title}
                        className={`rounded-[1.6rem] border p-5 ${
                          tone === "slate" ? "border-slate-200/15 bg-slate-200/8" : "border-cyan-200/15 bg-cyan-200/8"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`h-6 w-6 ${tone === "slate" ? "text-slate-100" : "text-cyan-100"}`} />
                          <div>
                            <div className="font-black">{title}</div>
                            <div className="text-sm text-white/55">{text}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="rounded-[1.6rem] border border-white/10 bg-white/7 p-5">
                      <div className="text-xs uppercase tracking-[0.22em] text-white/45">{t.architecture}</div>
                      <div className="mt-2 text-2xl font-black text-slate-100">Multioperador</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="company" className="bg-[#F4FAFC] px-5 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-cyan-900">
                Continuidad operativa
              </div>
              <h2 className="text-4xl font-black leading-tight md:text-6xl">
                Diseñamos disponibilidad, no solo conectividad.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Cuando una sucursal, un cajero automático, una terminal de pago o un sitio remoto se desconecta, el impacto es inmediato. Vialterna convierte múltiples operadores y tecnologías en una capa administrada de continuidad.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {outcomeCards.map(([Icon, title, text]) => (
                <motion.div whileHover={{ y: -8 }} key={title} className="rounded-[2rem] bg-white p-7 shadow-xl shadow-slate-200/70">
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#061521] text-cyan-200">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="bg-white px-5 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div id="servicios">
              <div className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-emerald-800">
                {t.servicesKicker}
              </div>
              <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                {t.servicesTitle}
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              {t.servicesText}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {solutions.map(({ icon: Icon, title, text, image }, index) => (
              <motion.article
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -8 }}
                key={title}
                className="group overflow-hidden rounded-[2.2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/70 transition hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={image} alt={title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 grid h-14 w-14 place-items-center rounded-2xl bg-white text-[#061521]">
                    <Icon className="h-7 w-7" />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-black tracking-tight">{title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{text}</p>
                  <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-black text-cyan-700">
                    {t.solutionCta}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="industrias" className="bg-[#061521] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <Pill>{t.industriesKicker}</Pill>
            <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              {t.industriesTitle}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(([Icon, title, text]) => (
              <div key={title} className="rounded-[1.8rem] border border-white/10 bg-white/8 p-6 backdrop-blur-xl">
                <Icon className="mb-6 h-8 w-8 text-cyan-200" />
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-white/72">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="operacion" className="bg-[#061521] px-5 pb-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.8rem] border border-white/10 bg-white/8 p-7 shadow-2xl shadow-slate-950/40 backdrop-blur-xl md:p-10">
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
            <div>
              <Pill icon={Gauge}>{t.operationKicker}</Pill>
              <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
                {t.operationTitle}
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/65">
                Vialterna coordina tecnologías, operadores, enlaces y respaldos para reducir puntos únicos de falla y mantener la operación visible y disponible.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map(([value, label]) => (
                <div key={label} className="rounded-[1.6rem] border border-white/10 bg-slate-950/35 p-6">
                  <div className="text-4xl font-black text-cyan-100">{value}</div>
                  <div className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-white/55">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4FAFC] px-5 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-slate-700">
              Método de trabajo
            </div>
            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Del riesgo de cobertura a una operación conectada y visible.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {workSteps.map(([title, text], index) => (
              <div key={title} className="rounded-[2rem] bg-white p-7 shadow-xl shadow-slate-200/70">
                <div className="mb-6 text-4xl font-black text-cyan-700">0{index + 1}</div>
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-cyan-900">
              <Network className="h-4 w-4" />
              SD-WAN
            </div>
            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Redes SD-WAN multioperador para continuidad del negocio.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Combinamos fibra, LTE, 5G, satélite y enlaces inalámbricos en una arquitectura administrada con failover automático, agregación de enlaces y supervisión centralizada.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {sdWanFeatures.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 font-bold text-slate-700">
                  <BadgeCheck className="h-5 w-5 shrink-0 text-cyan-700" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-[#061521] p-5 text-white shadow-2xl shadow-slate-300/70">
            <div className="rounded-[2rem] border border-white/10 bg-white/7 p-6">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-cyan-100/50">Arquitectura</div>
                  <div className="mt-1 text-2xl font-black">Failover + agregación</div>
                </div>
                <Router className="h-8 w-8 text-cyan-200" />
              </div>
              <div className="relative h-[430px] overflow-hidden rounded-[1.6rem] bg-[linear-gradient(135deg,rgba(6,21,33,.25),rgba(6,21,33,.82)),url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1300&q=80')] bg-cover bg-center">
                <div className="absolute bottom-5 left-5 right-5 grid gap-3">
                  {["Fibra + LTE + 5G + satélite", "QoS y túneles seguros", "Supervisión centralizada"].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/65 p-4 font-bold backdrop-blur-xl">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4FAFC] px-5 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="order-2 rounded-[2.5rem] bg-white p-6 shadow-2xl shadow-slate-200/70 lg:order-1">
            <div className="grid gap-4 sm:grid-cols-2">
              {iotFeatures.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <RadioTower className="mb-4 h-7 w-7 text-cyan-700" />
                  <div className="font-black">{item}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-emerald-800">
              <Factory className="h-4 w-4" />
              IoT / SIM
            </div>
            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Conectividad IoT y SIM para activos distribuidos.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Administramos SIMs, sensores, telemetría y conectividad para activos, sucursales, equipos y operaciones remotas.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.8rem] bg-[#061521] text-white shadow-2xl shadow-slate-300/70">
          <div className="grid lg:grid-cols-[.95fr_1.05fr]">
            <div className="p-8 md:p-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-cyan-100">
                <ShieldCheck className="h-4 w-4" />
                Conectividad de respaldo
              </div>
              <h2 className="text-4xl font-black leading-tight md:text-6xl">
                Soluciones de respaldo antes de que una falla detenga la operación.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/68">
                Vialterna diseña capas de redundancia con LTE, 5G, satélite y acceso multioperador para mantener activos sitios críticos.
              </p>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-7 py-4 font-black text-slate-950 transition hover:bg-white">
                Solicitar diagnóstico <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="relative min-h-[430px] bg-[linear-gradient(135deg,rgba(6,21,33,.2),rgba(6,21,33,.8)),url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1500&q=85')] bg-cover bg-center">
              <div className="absolute bottom-8 left-8 right-8 grid gap-3 sm:grid-cols-2">
                {["LTE", "5G", "Satelital", "Multioperador"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 font-black backdrop-blur-xl">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="insights" className="bg-[#F4FAFC] px-5 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-slate-700">
                Insights
              </div>
              <h2 className="text-4xl font-black leading-tight md:text-6xl">
                Análisis de conectividad, redes empresariales y soluciones Edge.
              </h2>
            </div>
            <a href="#contact" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#061521] px-6 py-4 font-black text-white">
              Contactar a Vialterna <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "Arquitectura multioperador para continuidad del negocio",
              "Cómo la visibilidad fortalece la operación de conectividad",
              "IoT, SIMs y telemetría para activos remotos",
            ].map((title) => (
              <article key={title} className="rounded-[2rem] bg-white p-7 shadow-xl shadow-slate-200/70">
                <div className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-cyan-700">Vialterna</div>
                <h3 className="text-2xl font-black leading-tight">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">
                  Contenido para empresas que necesitan reducir riesgos de conectividad y mejorar disponibilidad operativa.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#061521] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <Pill>{nav[5].label}</Pill>
            <h2 className="mt-5 text-4xl font-black leading-tight md:text-7xl">
              {t.contactTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              {t.contactText}
            </p>
          </div>
          <div className="rounded-[2.5rem] border border-white/10 bg-white/8 p-8 backdrop-blur-2xl md:p-10">
            <div className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">Vialterna</div>
            <div className="mt-8 grid gap-4">
              <div className="flex items-start gap-3 rounded-2xl bg-white/8 p-4 text-white/82">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-cyan-200" />
                Montes Urales 720, Lomas de Chapultepec, Delegación Miguel Hidalgo, C.P. 11000
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/8 p-4 text-white/82">
                <Mail className="h-5 w-5 shrink-0 text-cyan-200" />
                atencionaclientes@vialterna.com
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/8 p-4 text-white/82">
                <Phone className="h-5 w-5 shrink-0 text-cyan-200" />
                55 8062 6884
              </div>
            </div>
            <a href="mailto:atencionaclientes@vialterna.com" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-4 font-black text-slate-950 transition hover:bg-white">
              {t.contactCta} <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#061521] px-5 py-12 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-[#061521]">
                <Signal className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xl font-black">Vialterna</div>
                <div className="text-xs text-white/45">Conectividad resiliente</div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-black">Soluciones</h4>
            <div className="mt-4 grid gap-2 text-white/55">
              <span>Sitios distribuidos</span>
              <span>Sitios centrales</span>
              <span>Soluciones de Respaldo</span>
            </div>
          </div>
          <div>
            <h4 className="font-black">Empresa</h4>
            <div className="mt-4 grid gap-2 text-white/55">
              <span>Industrias</span>
              <span>Empresa</span>
              <span>Insights</span>
            </div>
          </div>
          <div>
            <h4 className="font-black">Contacto</h4>
            <div className="mt-4 grid gap-2 text-white/55">
              <span>atencionaclientes@vialterna.com</span>
              <span>55 8062 6884</span>
              <span>© 2026 Vialterna</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
