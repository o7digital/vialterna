import {
  BadgeCheck,
  Building2,
  Factory,
  Gauge,
  Network,
  RadioTower,
  Router,
  Satellite,
  ShieldCheck,
  Smartphone,
  Store,
  Wifi
} from "lucide-react";

export const heroVideo =
  "https://vialterna.com/wp-content/uploads/2026/04/Conectividad-Vialterna-original.mp4";
export const heroImage =
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=82";

export const navigation = [
  {
    label: "Soluciones",
    href: "/soluciones/",
    children: [
      { label: "Soluciones Edge", href: "/soluciones/conectividad-sitios-distribuidos/" },
      { label: "Soluciones para Sitios Centrales", href: "/soluciones/sitios-centrales/" },
      { label: "Soluciones IoT/SIM", href: "/soluciones/iot-sim-administradas/" },
      { label: "Soluciones de Respaldo", href: "/soluciones/respaldo-satelital-celular/" }
    ]
  },
  {
    label: "Industrias",
    href: "/industrias/",
    children: [
      { label: "Servicios financieros", href: "/industrias/servicios-financieros/" },
      { label: "Retail y franquicias", href: "/industrias/retail-franquicias/" },
      { label: "Energía e industria", href: "/industrias/energia-industria/" },
      { label: "Infraestructura de pagos", href: "/industrias/infraestructura-pagos/" }
    ]
  },
  { label: "Empresa", href: "/empresa/" },
  { label: "Insights", href: "/insights/" },
  { label: "Contacto", href: "/contacto/" }
];

export const solutions = [
  {
    icon: Router,
    title: "Soluciones Edge (Última Milla)",
    href: "/soluciones/conectividad-sitios-distribuidos/",
    text: "Para endpoints distribuidos dentro de tu red: cajeros automáticos, sucursales minoristas, franquicias e instalaciones remotas.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
  },
  {
    icon: Building2,
    title: "Sitios centrales",
    href: "/soluciones/sitios-centrales/",
    text: "Conectividad resiliente y de alto rendimiento para corporativos, centros de datos, hubs regionales, centros de distribución y sitios transaccionales.",
    image: "https://images.unsplash.com/photo-1600267165477-6d4cc741b379?auto=format&fit=crop&w=900&q=80"
  },
  {
    icon: RadioTower,
    title: "Soluciones IoT/SIM",
    href: "/soluciones/iot-sim-administradas/",
    text: "Gestión de SIMs, conectividad celular administrada, control de consumo, alertas, optimización de planes y ciclo de vida.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80"
  },
  {
    icon: Satellite,
    title: "Soluciones de Respaldo",
    href: "/soluciones/respaldo-satelital-celular/",
    text: "Conectividad secundaria con failover satelital LEO, LTE o 5G para sitios remotos, retail, banca e infraestructura crítica.",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=900&q=80"
  }
];

export const industries = [
  { icon: Building2, title: "Servicios financieros", href: "/industrias/servicios-financieros/", text: "Cajeros automáticos, sucursales bancarias e infraestructura transaccional." },
  { icon: Store, title: "Retail y franquicias", href: "/industrias/retail-franquicias/", text: "Tiendas, POS, inventarios, pedidos en línea y centros de distribución." },
  { icon: Factory, title: "Energía e industria", href: "/industrias/energia-industria/", text: "Sitios remotos, SCADA, seguridad operativa, sensores IoT y telemetría industrial." },
  { icon: Smartphone, title: "Infraestructura de pagos", href: "/industrias/infraestructura-pagos/", text: "Terminales, SIMs, sitios de procesamiento y continuidad transaccional." }
];

const cta = {
  title: "Solicita un diagnóstico de conectividad",
  text: "Identifica riesgos de desconexión, puntos únicos de falla, oportunidades de optimización y mejoras posibles en tu infraestructura.",
  label: "Solicitar diagnóstico"
};

export const home = {
  title: "Conectividad empresarial resiliente en México | Vialterna",
  description: "Vialterna diseña, despliega y opera conectividad administrada para empresas con operaciones distribuidas en México.",
  eyebrow: "Infraestructura crítica en México",
  h1: "Disponibilidad como Servicio para operaciones distribuidas en México.",
  intro: "Arquitectura multirred, agnóstica de operador, entregada como un servicio administrado. Diseñada, desplegada y operada para empresas donde un solo sitio desconectado representa un costo medible.",
  sections: [
    { h2: "La conectividad no es un servicio básico. Es un riesgo operativo.", text: "Cuando uno de tus sitios se desconecta, los ingresos se detienen. Las transacciones fallan. Tus equipos regresan a procesos manuales. Si operas sitios distribuidos donde cualquier ubicación desconectada tiene un costo operativo o de ingresos medible, cada minuto fuera de línea es una exposición financiera que puedes cuantificar." },
    { h2: "Probablemente has intentado uno de estos tres enfoques. Los tres te dejan expuesto.", approaches: [["Hacerlo internamente (In-house)", "Tu equipo de TI asume la gestión de operadores, el diseño de redundancia y la respuesta a incidentes, además de todo lo que ya tiene a su cargo."], ["Depender de un operador tradicional", "Un operador tradicional está estructuralmente sesgado hacia la red que posee. Te vende un enlace, no disponibilidad diseñada alrededor de tu operación."], ["Empaquetarlo con un integrador de TI", "La conectividad termina empaquetada junto con seguridad, hardware o nube. El problema es estructural: las redes resilientes requieren especialización arquitectónica y relaciones operativas con operadores."]] },
    { h2: "No vendemos conectividad. Diseñamos disponibilidad.", text: "Vialterna es el socio de redes agnóstico de operador para empresas distribuidas en México. Todo lo que entregamos está estructurado como un servicio administrado: diseñado, desplegado, optimizado y respaldado por SLAs a través de contratos multianuales." },
    { h2: "Una plataforma. Un solo modelo de interacción. Cuatro fases.", steps: [["Entrada", "Comenzamos con un diagnóstico de tu estado actual de telecomunicaciones o con un problema específico a resolver."], ["Diseño", "Diseñamos la arquitectura de red para cada sitio utilizando la combinación óptima de enlaces y tecnologías."], ["Despliegue", "Coordinamos hardware, operadores y activación para poner la solución en operación."], ["Gestión y expansión", "Optimizamos y expandimos la arquitectura a medida que crece tu presencia o cambian tus necesidades de red."]] }
  ],
  cta
};

export const pages = {
  "/soluciones/": {
    kind: "hub",
    cards: solutions,
    title: "Soluciones de conectividad empresarial | Vialterna",
    description: "Soluciones de conectividad empresarial para red distribuida, sitios centrales, IoT, SIMs y respaldo satelital o celular.",
    eyebrow: "Soluciones",
    h1: "Cuatro soluciones. Una plataforma. Lo que necesites para mantener tus operaciones en línea.",
    intro: "Cada solución corresponde a un problema de conectividad concreto. Elige la que coincida con tu necesidad inmediata. Entenderemos y diseñaremos la mejor solución para ti."
  },
  "/soluciones/conectividad-sitios-distribuidos/": {
    title: "Soluciones Edge para sitios distribuidos | Vialterna",
    description: "Conectividad resiliente para redes distribuidas en México: sucursales, cajeros automáticos, retail, franquicias y sitios remotos.",
    eyebrow: "Soluciones Edge",
    h1: "Soluciones Edge: conectividad resiliente para redes distribuidas en México",
    intro: "Conectividad resiliente para cada sitio de tu red distribuida: cajeros automáticos, sucursales, tiendas, franquicias e instalaciones remotas.",
    sections: [
      { h2: "Cuando los sitios distribuidos se desconectan, tu negocio se detiene", text: "Cada sitio necesita mantenerse conectado para que la operación continúe. Un modelo vulnerable con un operador por sitio, failover manual o inexistente expone transacciones, procesos críticos y atención al cliente." },
      { h2: "Qué incluye una solución Edge de Vialterna", features: [["Diseño de arquitectura por sitio", "Evaluamos fibra, celular, satélite LEO o MPLS según cobertura, criticidad y disponibilidad requerida."], ["Hardware administrado", "Vialterna aprovisiona, configura, envía y gestiona routers, switches, antenas y gateways celulares."], ["Supervisión de conectividad", "Cada sitio se revisa para detectar problemas de conectividad o degradaciones."], ["Failover automático", "Cuando una conexión falla, el tráfico cambia automáticamente hacia un enlace de respaldo."], ["Disponibilidad respaldada por SLA", "La disponibilidad se mide y reporta con acuerdos de nivel de servicio claros."]] },
      { h2: "De un piloto a un despliegue nacional", steps: [["Despliegue piloto", "El proceso puede iniciar con 1 a 5 sitios."], ["Validación de rendimiento", "Se mide actividad, rendimiento del failover y comportamiento de la solución."], ["Despliegue nacional", "El despliegue escala por fases hacia cobertura nacional."], ["Gestión continua", "Vialterna mantiene seguimiento, respuesta a incidentes y optimización."]] }
    ],
    caseStudy: "Una institución financiera mexicana necesitaba conectividad para múltiples cajeros automáticos. Vialterna diseñó una solución en una semana y comenzó el despliegue en menos de un mes, combinando CPE, SIMs celulares y enlaces satelitales de respaldo.",
    benefits: ["Conectividad resiliente para sitios distribuidos.", "Arquitectura diseñada por ubicación.", "Reducción de puntos únicos de falla.", "Failover automático entre enlaces.", "Hardware administrado por Vialterna.", "Supervisión de conectividad.", "Disponibilidad respaldada por SLA."],
    cta
  },
  "/soluciones/sitios-centrales/": {
    title: "Soluciones para Sitios Centrales | Vialterna",
    description: "Conectividad resiliente para corporativos, centros de datos, hubs regionales, centros de distribución y sitios transaccionales.",
    eyebrow: "Sitios centrales",
    h1: "Soluciones para Sitios Centrales: conectividad resiliente para infraestructura crítica",
    intro: "Conectividad resiliente y de alto rendimiento para instalaciones críticas: corporativos, hubs regionales, centros de datos, centros de distribución y sitios transaccionales de alto volumen.",
    sections: [
      { h2: "El problema de los sitios centrales", text: "Un sitio central concentra aplicaciones, datos, transacciones y operación. Si depende de una sola ruta, un solo operador o una arquitectura sin redundancia suficiente, cualquier falla puede escalar a impacto regional o nacional." },
      { h2: "Qué incluye la solución", features: [["Rutas WAN diversas", "Diseño con diversidad de operadores, tecnologías y rutas."], ["Gestión avanzada de tráfico", "Priorización y control del tráfico crítico."], ["Mayor ancho de banda y SLAs", "Arquitecturas preparadas para capacidad, desempeño y acuerdos de nivel de servicio."], ["Supervisión de conectividad", "Revisión de enlaces, eventos y disponibilidad."]] }
    ],
    benefits: ["Mayor resiliencia en instalaciones críticas.", "Reducción de puntos únicos de falla.", "Gestión avanzada de tráfico.", "Supervisión de conectividad.", "Arquitectura alineada con SLA."],
    cta
  },
  "/soluciones/iot-sim-administradas/": {
    title: "IoT y SIM administradas | Vialterna",
    description: "Gestión de SIMs, conectividad celular administrada, control de consumo y ciclo de vida para dispositivos IoT.",
    eyebrow: "IoT y SIM",
    h1: "Soluciones IoT/SIM para dispositivos conectados",
    intro: "Vialterna administra conectividad celular, SIMs empresariales, consumo, alertas, planes y ciclo de vida para flotas de dispositivos conectados.",
    sections: [
      { h2: "Gestión de SIMs y conectividad celular administrada", text: "Las flotas de terminales, sensores, cajeros, vehículos o dispositivos conectados requieren control de activaciones, consumo, planes y soporte." },
      { h2: "Qué incluye", features: [["Aprovisionamiento y activación", "Gestión de altas, activaciones y asignación de SIMs."], ["Control de consumo y alertas", "Visibilidad para detectar anomalías y desconexiones."], ["Optimización de planes", "Revisión de consumo para identificar oportunidades de ajuste."], ["Gestión del ciclo de vida", "Control de SIMs activas, suspendidas, reemplazadas o reasignadas."]] }
    ],
    benefits: ["Gestión centralizada de SIMs.", "Aprovisionamiento y activación masiva.", "Control de consumo.", "Alertas operativas.", "Optimización de planes.", "Integración con sistemas IoT."],
    cta
  },
  "/soluciones/respaldo-satelital-celular/": {
    title: "Respaldo satelital y celular | Vialterna",
    description: "Conectividad secundaria, failover satelital y celular para sitios remotos, retail, banca e infraestructura crítica.",
    eyebrow: "Respaldo",
    h1: "Conectividad de respaldo satelital y celular para continuidad operativa",
    intro: "Vialterna diseña rutas secundarias con respaldo satelital LEO, LTE o 5G para mantener sitios críticos conectados cuando el enlace principal falla.",
    sections: [
      { h2: "Conectividad secundaria y failover", text: "El respaldo debe permitir que el tráfico cambie automáticamente hacia una ruta secundaria cuando la conexión principal se degrada o cae." },
      { h2: "Tecnologías de respaldo", features: [["Respaldo satelital LEO", "Ruta secundaria para sitios con redundancia terrestre limitada."], ["Respaldo celular LTE / 5G", "Conectividad móvil para continuidad ante fallas de enlaces fijos."], ["Failover automático", "Cambio de tráfico hacia respaldo sin intervención manual."], ["Supervisión integrada", "Revisión del enlace principal, respaldo, eventos y disponibilidad."]] }
    ],
    benefits: ["Conectividad secundaria para sitios críticos.", "Failover satelital y celular.", "Continuidad ante fallas.", "Supervisión integrada.", "Menos dependencia de una sola tecnología."],
    cta
  },
  "/industrias/": {
    kind: "hub",
    cards: industries,
    title: "Industrias con operaciones distribuidas | Vialterna",
    description: "Conectividad resiliente para servicios financieros, retail, energía, industria e infraestructura de pagos.",
    eyebrow: "Industrias",
    h1: "Conectividad resiliente para industrias con operaciones distribuidas",
    intro: "Vialterna trabaja con empresas donde la conectividad impacta ingresos, servicio, seguridad, cumplimiento y continuidad del negocio."
  },
  "/industrias/servicios-financieros/": {
    title: "Conectividad para servicios financieros | Vialterna",
    description: "Conectividad resiliente para cajeros automáticos, sucursales bancarias e infraestructura transaccional.",
    eyebrow: "Servicios financieros",
    h1: "Servicios financieros: conectividad resiliente para cajeros, sucursales e infraestructura transaccional",
    intro: "En servicios financieros, una interrupción de conectividad puede traducirse en transacciones perdidas, afectación al usuario y presión operativa.",
    sections: [{ h2: "Qué hace Vialterna", features: [["Soluciones Edge para cajeros automáticos", "Arquitectura por sitio, CPE, SIMs celulares y respaldo."], ["Respaldo para sucursales bancarias", "Failover celular o satelital para mantener operación básica ante fallas."], ["Visibilidad y reportes", "Gestión de incidentes y visibilidad de desempeño."]] }],
    benefits: ["Mayor disponibilidad para cajeros y sucursales.", "Menor exposición a un solo operador.", "Failover automático.", "Supervisión de conectividad.", "Reportes de desempeño."],
    cta
  },
  "/industrias/retail-franquicias/": {
    title: "Conectividad para retail y franquicias | Vialterna",
    description: "Conectividad resiliente para tiendas, franquicias, POS, inventario, pedidos en línea y centros de distribución.",
    eyebrow: "Retail y franquicias",
    h1: "Retail y franquicias: conectividad resiliente para redes de tiendas",
    intro: "Cada tienda desconectada puede significar ventas perdidas, procesos manuales, quejas de clientes y presión sobre el corporativo.",
    sections: [{ h2: "Qué hace Vialterna", features: [["Gestión WAN", "Centralización de conectividad, desempeño y soporte."], ["Soluciones Edge para tiendas y POS", "Arquitectura de sitio con enlaces principales y respaldo."], ["Centros de distribución y hubs", "Conectividad para logística, inventario y coordinación operativa."]] }],
    benefits: ["Menos ventas perdidas.", "Mayor continuidad para POS.", "Visibilidad centralizada.", "Respaldo para tiendas críticas.", "Supervisión de conectividad."],
    cta
  },
  "/industrias/energia-industria/": {
    title: "Conectividad para energía e industria | Vialterna",
    description: "Conectividad para sitios remotos, SCADA, sensores IoT, seguridad operativa y telemetría industrial.",
    eyebrow: "Energía e industria",
    h1: "Energía e industria: conectividad resiliente para sitios remotos y operación crítica",
    intro: "Los sitios operativos remotos dependen de conectividad para telemetría, seguridad, sistemas industriales y control operativo.",
    sections: [{ h2: "Qué hace Vialterna", features: [["Conectividad para sitios remotos", "Diseño de rutas y tecnologías disponibles por ubicación."], ["Arquitectura híbrida y satelital", "Combinación de enlaces terrestres, celulares y satelitales."], ["IoT / SIM para sensores", "Conectividad para telemetría, sensores y activos industriales."]] }],
    benefits: ["Conectividad para sitios remotos.", "Mayor visibilidad operativa.", "Respaldo satelital o celular.", "Conectividad IoT industrial.", "Supervisión de conectividad."],
    cta
  },
  "/industrias/infraestructura-pagos/": {
    title: "Conectividad para infraestructura de pagos | Vialterna",
    description: "Gestión de SIMs para terminales, redundancia para sitios de procesamiento y continuidad transaccional.",
    eyebrow: "Infraestructura de pagos",
    h1: "Infraestructura de pagos: conectividad administrada para terminales y procesamiento transaccional",
    intro: "Las empresas de pagos necesitan administrar miles de SIMs, detectar terminales desconectadas, optimizar planes y proteger sitios de procesamiento.",
    sections: [{ h2: "Qué hace Vialterna", features: [["Gestión de SIMs", "Aprovisionamiento, activación, control de consumo y optimización de planes."], ["Redundancia para procesamiento", "Arquitectura multioperador, diversidad de ruta y failover automático."], ["Reportes de desempeño", "Seguimiento proactivo, reportes de desempeño y atención a incidentes."]] }],
    benefits: ["Gestión centralizada de SIMs.", "Aprovisionamiento masivo.", "Control de consumo.", "Optimización de planes.", "Redundancia para procesamiento.", "Failover automático."],
    cta
  },
  "/empresa/": {
    title: "Empresa de telecomunicaciones empresariales en México | Vialterna",
    description: "Vialterna conecta empresas, sucursales, dispositivos y operaciones en campo con redes administradas, SD-WAN, IoT y conectividad resiliente.",
    eyebrow: "Empresa",
    h1: "Empresa: Vialterna, conectividad empresarial resiliente para operaciones distribuidas en México",
    intro: "Conectamos a todos, cualquier cosa, en todos lados, siempre. Vialterna es una empresa mexicana de telecomunicaciones enfocada en conectividad empresarial, redes administradas, SD-WAN, IoT, internet móvil, internet satelital y conectividad resiliente.",
    sections: [
      { h2: "Más de 10 años innovando en telecomunicaciones empresariales", text: "Vialterna fue fundada en diciembre de 2010 como alternativa de valor frente a modelos tradicionales del sector." },
      { h2: "Conectar el mundo físico con la estrategia digital", text: "La conectividad permite acceder a información relevante en tiempo real, monitorear variables críticas y tomar decisiones con mayor visibilidad operativa." }
    ],
    benefits: ["Más de 10 años de experiencia.", "Servicios para empresas con presencia nacional.", "Experiencia en SD-WAN, IoT, M2M, internet móvil e internet satelital.", "Arquitecturas robustas mediante múltiples enlaces, operadores y tecnologías."],
    cta
  },
  "/insights/": {
    title: "Insights de conectividad y redes empresariales | Vialterna",
    description: "Análisis de conectividad administrada, Soluciones Edge, redes SD-WAN, IoT, SIMs empresariales y continuidad operativa.",
    eyebrow: "Insights",
    h1: "Insights: análisis de conectividad, redes empresariales y soluciones Edge",
    intro: "Perspectivas técnicas sobre conectividad administrada, Soluciones Edge, redes SD-WAN, IoT, SIMs empresariales y continuidad operativa.",
    sections: [{ h2: "Artículos recomendados", features: [["4G/LTE vs. 5G", "Comparación de tecnologías celulares para routers y conectividad móvil."], ["Abandonando MPLS por SD-WAN", "Contenido para empresas que evalúan arquitecturas más flexibles."], ["GPS + IoT", "Rastreo, sensores, conectividad celular y gestión de flotas inteligentes."]] }],
    cta
  },
  "/contacto/": {
    title: "Contacto Vialterna | Diagnóstico de conectividad",
    description: "Contacta a Vialterna para diagnóstico de conectividad, infraestructura, redes distribuidas, Soluciones Edge, respaldo e IoT.",
    kind: "contact",
    eyebrow: "Contacto",
    h1: "¿Listo para cerrar la brecha?",
    intro: "Deja de gestionar operadores. Empieza a gestionar tu negocio.",
    sections: [
      { h2: "Diseño de soluciones de conectividad", text: "Teléfono / WhatsApp: 55 8062 6884" },
      { h2: "Envíanos tus requerimientos de infraestructura", text: "Correo de atención a clientes: atencionaclientes@vialterna.com" },
      { h2: "Soporte y atención a clientes", text: "Atención a clientes: atencionaclientes@vialterna.com. Soporte: soporte@vialterna.com" }
    ],
    cta
  }
};

export const visualCards = [
  [Wifi, "Siempre activos por diseño", "La resiliencia multirred elimina puntos únicos de falla. Nuestra arquitectura combina fibra, celular, satélite y otras fuentes en una conectividad de alta disponibilidad."],
  [ShieldCheck, "Gestión proactiva 24/7 con visibilidad total", "Nuestro NOC monitorea cada sitio en tiempo real en todo el país. Detectamos y resolvemos problemas antes de que los notes."],
  [Network, "Telco como Servicio Administrado", "Auditamos el gasto en telecomunicaciones, sacamos a la luz operadores redundantes, enlaces de bajo rendimiento y fugas silenciosas de SLA."]
];

export const metrics = [
  ["24/7", "Monitoreo NOC"],
  ["SLA", "Disponibilidad reportada"],
  ["Multi", "Gestión de operadores"],
  ["México", "Operaciones distribuidas"]
];

export const workSteps = [
  ["Diagnosticar", "Evaluamos ubicaciones, cobertura, riesgos y requerimientos del negocio."],
  ["Diseñar", "Definimos la arquitectura multioperador más adecuada para cada sitio."],
  ["Desplegar", "Coordinamos operadores, equipos, instalación y activación."],
  ["Operar", "Monitoreamos, damos soporte y optimizamos la red."]
];

export const sdWanFeatures = ["Multioperador", "LTE / 5G", "Respaldo satelital", "Failover automático", "Agregación de enlaces", "Monitoreo centralizado", "QoS", "Túneles seguros"];
export const iotFeatures = ["Ciclo de vida de SIMs", "Conectividad IoT", "Sensores", "Telemetría", "Activos remotos", "Alertas operativas"];
