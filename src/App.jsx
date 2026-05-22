import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Factory,
  Globe2,
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
  Waves,
  Wifi,
  X,
  Zap,
} from "lucide-react";

const nav = [
  "Servicios",
  "Tech Partners",
  "Empresa",
  "Socios ER's",
  "ViaNews",
  "Contacto",
];

const heroSlides = [
  {
    kicker: "Conectamos todo con todos",
    title: "Red como servicio, sin complicaciones",
    text: "Redes corporativas, IoT y sitios remotos gestionados de forma integral. Sin comprar equipos. Sin lidiar con los carriers.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1500&q=85",
  },
  {
    kicker: "Conectividad Multicarrier",
    title: "La vía alterna a los carriers tradicionales",
    text: "Combinamos fibra, LTE, microondas, satélite, WiFi y enlaces dedicados para asegurar continuidad de operación.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1500&q=85",
  },
  {
    kicker: "NOC 24/7",
    title: "Monitoreo y soporte desde un solo punto",
    text: "Tu red bajo vigilancia constante, con reportes, soporte centralizado y respuesta proactiva ante incidentes.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1500&q=85",
  },
];

const serviceCards = [
  {
    icon: Network,
    title: "SD-WAN",
    subtitle: "Redes Wireless SD-WAN",
    text: "Super WAN definida por tus necesidades, no por los carriers. Red multicarrier con redundancia real, bajo costo y continuidad de negocio.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: RadioTower,
    title: "IoT",
    subtitle: "Soluciones IoT",
    text: "Sensores, gateways, alertas y telemetría para automatizar procesos, monitorear operaciones y recopilar datos en tiempo real.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Satellite,
    title: "Internet Satelital",
    subtitle: "Conexión sin fronteras",
    text: "Conectividad satelital para navegación marítima, sitios remotos, operaciones críticas y lugares donde la red tradicional no llega.",
    image:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=900&q=80",
  },
];

const coverageItems = [
  "Sin importar si se trata de oficinas, logística, retail, centros de datos o plantas industriales. Vialterna conecta y gestiona tus operaciones.",
  "Usamos la mejor combinación entre WiFi, microondas, satelitales, MPLS, enlaces dedicados, LTE y fibra óptica.",
  "Incluimos routers, switches y balanceadores como parte del servicio. Nosotros instalamos, configuramos y operamos.",
  "Sumamos el ancho de banda de tus enlaces y redireccionamos tráfico automáticamente en caso de fallas.",
  "Desde nuestro centro de operaciones monitoreamos en tiempo real y actuamos de forma proactiva.",
  "Integramos dispositivos IoT en un mismo ecosistema digital, con alertas en tiempo real ante incidencias.",
];

const problems = [
  [
    "Adiós a los gastos ocultos",
    "Tu red operando desde el día uno, sin sorpresas en instalación, soporte o equipos.",
  ],
  [
    "Sin dependencia de un solo carrier",
    "Elegimos, combinamos y gestionamos múltiples carriers para que tengas siempre el mejor servicio.",
  ],
  [
    "Una red que crece contigo",
    "Acompañamos tu expansión sin renegociar cada paso ni esperar meses de instalación.",
  ],
  [
    "Soporte que realmente responde",
    "Monitoreo 24/7, reportes automatizados y un solo contacto para toda la operación.",
  ],
];

const features = [
  "Red multicarrier",
  "LTE y 5G Ready",
  "Redundancia real",
  "AES 256 bits",
  "HotFailover",
  "Instalación nacional",
  "Cualquier carrier",
  "Gestión en la nube y APP",
];

const iotFeatures = [
  "3 familias de sensores",
  "Más de 50 variables",
  "Batería 3+ años",
  "Rango de 365 metros",
  "Configuración 10-15 minutos",
  "Gateways Ethernet y celular",
];

const partnerLogos = ["Fiber", "LTE", "5G", "NOC", "Cloud", "IoT"];

function sectionId(item) {
  return item
    .toLowerCase()
    .replace("'", "")
    .replaceAll(" ", "-")
    .replace("servicios", "servicios")
    .replace("contacto", "contacto");
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

function Tag({ children }) {
  return (
    <div className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-black text-cyan-900">
      {children}
    </div>
  );
}

function App() {
  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = heroSlides[activeSlide];

  return (
    <div className="min-h-screen bg-[#061521] text-white selection:bg-cyan-300/30">
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale-[20%] saturate-[.72] transition-all duration-700"
          style={{ backgroundImage: `url('${slide.image}')` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(6,21,33,.97)_0%,rgba(17,31,43,.86)_45%,rgba(45,55,64,.58)_100%)]" />
        <div className="absolute inset-0 bg-slate-950/10 mix-blend-saturation" />
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
              <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-[#061521] bg-sky-200" />
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight">Vialterna</div>
              <div className="text-[10px] uppercase tracking-[0.34em] text-cyan-100/70">
                Conectamos TODO con TODOS
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 rounded-full border border-white/10 bg-white/8 px-6 py-3 text-sm font-bold text-white/80 backdrop-blur-2xl lg:flex">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${sectionId(item)}`}
                className="transition hover:text-cyan-200"
              >
                {item}
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
              href="#contacto"
              className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 shadow-xl shadow-cyan-950/30 transition hover:bg-white"
            >
              Solicitar demo
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-2xl border border-white/15 bg-white/5 p-3 lg:hidden"
            aria-label="Abrir menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </header>

        {open && (
          <div className="relative z-40 mx-5 rounded-3xl border border-white/10 bg-slate-950/90 p-5 backdrop-blur-xl lg:hidden">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${sectionId(item)}`}
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 py-3 text-white/85 last:border-b-0"
              >
                {item}
              </a>
            ))}
          </div>
        )}

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 lg:grid-cols-[.95fr_1.05fr] lg:px-8 lg:pb-28 lg:pt-20">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200/20 bg-white/10 px-4 py-2 text-sm font-bold text-slate-100 backdrop-blur-xl">
              <Zap className="h-4 w-4 text-sky-200" />
              {slide.kicker}
            </div>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.92] md:text-7xl xl:text-8xl">
              {slide.title.split(",")[0]}
              <span className="bg-gradient-to-r from-sky-100 via-slate-100 to-white bg-clip-text text-transparent">
                {slide.title.includes(",")
                  ? `,${slide.title.split(",").slice(1).join(",")}`
                  : ""}
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200/85 md:text-xl md:leading-9">
              {slide.text}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#servicios"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-black text-[#061521] shadow-2xl shadow-slate-950/40 transition hover:bg-sky-100"
              >
                Conoce mas
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/7 px-8 py-4 font-black text-white backdrop-blur transition hover:bg-white/12"
              >
                Contactar un asesor <ChevronRight className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-10 flex gap-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeSlide ? "w-14 bg-sky-200" : "w-8 bg-white/25"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-slate-200/14 via-sky-300/8 to-blue-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-slate-950/45 p-4 shadow-2xl shadow-slate-950/50 backdrop-blur-2xl">
              <div className="overflow-hidden rounded-[2rem] bg-[#071A2A]">
                <div className="flex flex-col gap-3 border-b border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-sky-200/12 text-sky-100">
                      <Router className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-black">Red como Servicio</div>
                      <div className="text-xs text-white/45">
                        NOC · carriers · equipos · soporte
                      </div>
                    </div>
                  </div>
                  <div className="w-fit rounded-full bg-slate-200/12 px-3 py-1 text-xs font-black text-slate-100">
                    Operativo 24/7
                  </div>
                </div>

                <div className="grid gap-4 p-4 xl:grid-cols-[1fr_.78fr]">
                  <div className="relative min-h-[430px] overflow-hidden rounded-[1.6rem] bg-[linear-gradient(135deg,rgba(8,27,44,.15),rgba(8,27,44,.8)),url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1300&q=80')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30" />
                    <div className="absolute left-5 top-5 rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-xl">
                      <div className="text-xs uppercase tracking-[0.22em] text-slate-100/60">
                        Cobertura nacional
                      </div>
                      <div className="mt-1 text-2xl font-black">
                        Instalación sin viáticos
                      </div>
                    </div>
                    <PulseNode label="Oficinas" className="left-[18%] top-[28%]" />
                    <PulseNode label="Retail" className="left-[55%] top-[24%]" />
                    <PulseNode label="Plantas" className="left-[38%] top-[53%]" />
                    <PulseNode label="Logística" className="left-[66%] top-[60%]" />
                    <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
                      {["WiFi", "LTE", "Satélite"].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-white/10 p-3 text-center text-xs font-black backdrop-blur-xl"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1.6rem] border border-white/10 bg-white/7 p-5">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="text-sm font-black">Tecnologías de acceso</div>
                        <Gauge className="h-5 w-5 text-sky-100" />
                      </div>
                      {[
                        ["Fibra / MPLS", "90%"],
                        ["LTE / 5G", "78%"],
                        ["Microondas / Satélite", "84%"],
                      ].map(([name, val]) => (
                        <div key={name} className="mb-4 last:mb-0">
                          <div className="mb-2 flex justify-between text-xs text-white/60">
                            <span>{name}</span>
                            <span>{val}</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-white/10">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-sky-200 to-slate-100"
                              style={{ width: val }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    {[
                      [ShieldCheck, "SLA garantizado", "Soporte centralizado", "slate"],
                      [Clock3, "12 horas", "Implementación inicial", "sky"],
                    ].map(([Icon, title, text, tone]) => (
                      <div
                        key={title}
                        className={`rounded-[1.6rem] border p-5 ${
                          tone === "slate"
                            ? "border-slate-200/15 bg-slate-200/8"
                            : "border-sky-200/15 bg-sky-200/8"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon
                            className={`h-6 w-6 ${
                              tone === "slate" ? "text-slate-100" : "text-sky-100"
                            }`}
                          />
                          <div>
                            <div className="font-black">{title}</div>
                            <div className="text-sm text-white/55">{text}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="rounded-[1.6rem] border border-white/10 bg-white/7 p-5">
                      <div className="text-xs uppercase tracking-[0.22em] text-white/45">
                        Modelo
                      </div>
                      <div className="mt-2 text-2xl font-black text-slate-100">
                        Todo incluido
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="quienes-somos" className="bg-[#F4FAFC] px-5 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <Tag>Quiénes somos</Tag>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              Somos la Vía Alterna. Solución a los carriers tradicionales.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Ofrecemos conectividad empresarial como servicio, administrada y con
              todo incluido. Tu red, gestionada de punta a punta. Sin departamentos
              internos. Sin proveedores difíciles.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [
                Wifi,
                "Conectividad como servicio",
                "Incluye equipos, instalación, configuración y soporte sin inversión inicial ni viáticos.",
              ],
              [
                Gauge,
                "Gestión total",
                "Administración de múltiples WANs, monitoreo 24/7 y soporte centralizado con SLA garantizado.",
              ],
              [
                BadgeCheck,
                "Operación simplificada",
                "Una sola factura, sin complicaciones administrativas ni gestión con múltiples proveedores.",
              ],
            ].map(([Icon, title, text]) => (
              <motion.div
                whileHover={{ y: -8 }}
                key={title}
                className="rounded-[2rem] bg-white p-7 shadow-xl shadow-slate-200/70"
              >
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#061521] text-cyan-200">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-white px-5 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-black text-emerald-800">
                Servicios
              </div>
              <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Conectividad empresarial como servicio.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              Redes corporativas, IoT y sitios remotos gestionados de forma integral,
              con equipos, carriers, instalación y soporte incluidos.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {serviceCards.map(({ icon: Icon, title, subtitle, text, image }, index) => (
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
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 grid h-14 w-14 place-items-center rounded-2xl bg-white text-[#061521]">
                    <Icon className="h-7 w-7" />
                  </div>
                </div>
                <div className="p-7">
                  <div className="text-sm font-black uppercase tracking-[0.18em] text-cyan-700">
                    {subtitle}
                  </div>
                  <h3 className="mt-2 text-3xl font-black tracking-tight">{title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{text}</p>
                  <a
                    href="#contacto"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-black text-cyan-700"
                  >
                    Solicitar demo
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="tech-partners" className="bg-[#061521] px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-cyan-200/20 bg-white/8 px-4 py-2 text-sm font-black text-cyan-100">
                Tech Partners
              </div>
              <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Ecosistema técnico para redes críticas.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-white/65">
              Integramos tecnologías de acceso, monitoreo, seguridad y operación para
              entregar una red administrada desde un solo punto.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
            {partnerLogos.map((item) => (
              <div
                key={item}
                className="grid h-24 place-items-center rounded-[1.5rem] border border-white/10 bg-white/8 text-lg font-black text-cyan-100 backdrop-blur-xl"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#061521] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-cyan-200/20 bg-white/8 px-4 py-2 text-sm font-black text-cyan-100">
              Cobertura y operación
            </div>
            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Conectamos todo, en todos lados, siempre.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/68">
              Oficinas, logística, retail, centros de datos, plantas industriales,
              sensores, cajeros, vehículos y sitios remotos.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {coverageItems.map((item, index) => (
              <div
                key={item}
                className="rounded-[1.8rem] border border-white/10 bg-white/8 p-6 backdrop-blur-xl"
              >
                <div className="mb-4 text-3xl font-black text-cyan-200">
                  0{index + 1}
                </div>
                <p className="leading-7 text-white/76">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4FAFC] px-5 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-700">
              ¿Qué problemas resolvemos?
            </div>
            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Resolvemos lo que nadie más quiere asumir.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Hacemos simple lo que antes era lento, costoso y desgastante. Te damos
              control total sin complejidad.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {problems.map(([title, text]) => (
              <div
                key={title}
                className="rounded-[2rem] bg-white p-7 shadow-xl shadow-slate-200/70"
              >
                <CheckCircle2 className="mb-6 h-8 w-8 text-cyan-700" />
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sd-wan" className="bg-white px-5 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-black text-cyan-900">
              <Network className="h-4 w-4" />
              Redes Wireless SD-WAN
            </div>
            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Conectividad Multicarrier para continuidad del negocio.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Combinamos múltiples WANs para crear una Super WAN rica en ancho de
              banda, resiliente y de bajo costo. Conectamos cajeros automáticos,
              sucursales, plantas, hospitales, radares y sensores.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 font-bold text-slate-700"
                >
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
                  <div className="text-sm uppercase tracking-[0.22em] text-cyan-100/50">
                    Características
                  </div>
                  <div className="mt-1 text-2xl font-black">HotFailover + Bonding</div>
                </div>
                <Router className="h-8 w-8 text-cyan-200" />
              </div>
              <div className="relative h-[430px] overflow-hidden rounded-[1.6rem] bg-[linear-gradient(135deg,rgba(6,21,33,.25),rgba(6,21,33,.8)),url('https://images.unsplash.com/photo-1600267165477-6d4cc741b379?auto=format&fit=crop&w=1300&q=80')] bg-cover bg-center">
                <div className="absolute bottom-5 left-5 right-5 grid gap-3">
                  {[
                    "No requiere invertir en infraestructura nueva",
                    "QoS · SLA's · Alta disponibilidad",
                    "Redundancia con enlaces activo-activo",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-slate-950/65 p-4 font-bold backdrop-blur-xl"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="iot" className="bg-[#F4FAFC] px-5 py-24 text-slate-950 lg:px-8">
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
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-black text-emerald-800">
              <Factory className="h-4 w-4" />
              Soluciones IoT
            </div>
            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Automatiza tu empresa y controla de manera remota.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              IoT de Vialterna permite automatizar negocios, monitorear operaciones,
              optimizar cadenas de suministro y generar alertas en tiempo real desde
              una plataforma en la nube.
            </p>
          </div>
        </div>
      </section>

      <section id="internet-satelital" className="bg-white px-5 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.8rem] bg-[#061521] text-white shadow-2xl shadow-slate-300/70">
          <div className="grid lg:grid-cols-[.95fr_1.05fr]">
            <div className="p-8 md:p-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-cyan-100">
                <Waves className="h-4 w-4" />
                Internet Satelital
              </div>
              <h2 className="text-4xl font-black leading-tight md:text-6xl">
                Conexión sin fronteras: red global.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/68">
                Explora mares y océanos con una conexión sólida para navegación,
                conectividad corporativa e incluso entretenimiento. Conexión segura,
                protegida y confiable para desafíos marítimos y sitios remotos.
              </p>
              <a
                href="#contacto"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-7 py-4 font-black text-slate-950 transition hover:bg-white"
              >
                Más información <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="relative min-h-[430px] bg-[linear-gradient(135deg,rgba(6,21,33,.2),rgba(6,21,33,.8)),url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1500&q=85')] bg-cover bg-center">
              <div className="absolute bottom-8 left-8 right-8 grid gap-3 sm:grid-cols-2">
                {["Pesca comercial", "Investigación", "Embarcaciones mercantiles", "IoT en altamar"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 font-black backdrop-blur-xl"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="empresa" className="bg-[#F4FAFC] px-5 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <Tag>Empresa</Tag>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              10 años innovando.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Desde 2010, Vialterna entrega servicios de telecomunicaciones al mercado
              empresarial como alternativa de valor frente a las grandes compañías
              tradicionales. Menor costo, más velocidad, más agilidad e instalaciones
              donde antes no se podía.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              [
                Building2,
                "Grandes empresas",
                "Comercios nacionales, gobiernos y empresas globales han seleccionado Vialterna.",
              ],
              [
                Globe2,
                "Democratizar telecom",
                "Servicios innovadores y de bajo costo con cobertura nacional e internacional.",
              ],
              [
                Smartphone,
                "Internet móvil",
                "Servicio en vehículos, cajeros automáticos, kioskos y unidades móviles.",
              ],
              [
                Zap,
                "Continuidad",
                "Redes robustas hechas de la suma de múltiples servicios de red.",
              ],
            ].map(([Icon, title, text]) => (
              <div
                key={title}
                className="rounded-[2rem] bg-white p-7 shadow-xl shadow-slate-200/70"
              >
                <Icon className="mb-6 h-8 w-8 text-cyan-700" />
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="socios-ers" className="bg-white px-5 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-black text-cyan-900">
              Socios ER's
            </div>
            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Aliados de ejecución regional.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-600">
            Coordinamos instalación, soporte y operación de campo con una red de
            aliados especializados para acelerar despliegues empresariales y mantener
            continuidad en cada sitio.
          </p>
        </div>
      </section>

      <section id="vianews" className="bg-[#F4FAFC] px-5 py-24 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-700">
                ViaNews
              </div>
              <h2 className="text-4xl font-black leading-tight md:text-6xl">
                Actualidad de conectividad empresarial.
              </h2>
            </div>
            <a
              href="#contacto"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#061521] px-6 py-4 font-black text-white"
            >
              Contacto editorial <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "Redundancia multicarrier para operaciones distribuidas",
              "IoT empresarial y monitoreo remoto en tiempo real",
              "Conectividad satelital para sitios fuera de cobertura",
            ].map((title) => (
              <article key={title} className="rounded-[2rem] bg-white p-7 shadow-xl shadow-slate-200/70">
                <div className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-cyan-700">
                  Vialterna
                </div>
                <h3 className="text-2xl font-black leading-tight">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">
                  Perspectivas para operar redes más resilientes, simples y listas para
                  crecer con la empresa.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-[#061521] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-cyan-200/20 bg-white/8 px-4 py-2 text-sm font-black text-cyan-100">
              Listos para llevar tu red al siguiente nivel
            </div>
            <h2 className="text-4xl font-black leading-tight md:text-7xl">
              Todo funciona desde el primer día.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Evaluamos la cobertura disponible, diseñamos una solución adaptada a tus
              operaciones, gestionamos contratos con múltiples carriers, instalamos sin
              fricción y monitoreamos con soporte 24/7 desde nuestro NOC.
            </p>
          </div>
          <div className="rounded-[2.5rem] border border-white/10 bg-white/8 p-8 backdrop-blur-2xl md:p-10">
            <div className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
              Contáctanos
            </div>
            <div className="mt-8 grid gap-4">
              <div className="flex items-start gap-3 rounded-2xl bg-white/8 p-4 text-white/82">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-cyan-200" />
                Montes Urales 720, Lomas de Chapultepec, Delegación Miguel Hidalgo,
                C.P. 11000
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
            <a
              href="mailto:atencionaclientes@vialterna.com"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-4 font-black text-slate-950 transition hover:bg-white"
            >
              Solicitar demo gratuita <ArrowRight className="h-5 w-5" />
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
                <div className="text-xs text-white/45">Conectamos TODO con TODOS</div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-black">Servicios</h4>
            <div className="mt-4 grid gap-2 text-white/55">
              <span>SD-WAN</span>
              <span>IoT</span>
              <span>Internet Satelital</span>
            </div>
          </div>
          <div>
            <h4 className="font-black">Nosotros</h4>
            <div className="mt-4 grid gap-2 text-white/55">
              <span>Empresa</span>
              <span>ViaNews</span>
              <span>Legal</span>
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
