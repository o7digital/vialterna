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
export const heroVideos = [
  "https://vialterna.com/wp-content/uploads/2026/04/Conectividad-Vialterna-original.mp4",
  "https://vialterna.com/wp-content/uploads/2026/03/Conectividad-Vialterna.mp4"
];
export const heroImage =
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=82";

export const navigation = [
  {
    label: "Soluciones",
    href: "/soluciones/conectividad-sitios-distribuidos/",
    children: [
      { label: "Soluciones Edge", href: "/soluciones/conectividad-sitios-distribuidos/" },
      { label: "Soluciones para Sitios Centrales", href: "/soluciones/sitios-centrales/" },
      { label: "Soluciones IoT/SIM", href: "/soluciones/iot-sim-administradas/" },
      { label: "Soluciones de Respaldo", href: "/soluciones/respaldo-satelital-celular/" }
    ]
  },
  {
    label: "Industrias",
    href: "/industrias/servicios-financieros/",
    children: [
      { label: "Servicios financieros", href: "/industrias/servicios-financieros/" },
      { label: "Retail y franquicias", href: "/industrias/retail-franquicias/" },
      { label: "Energía e industria", href: "/industrias/energia-industria/" },
      { label: "Infraestructura de pagos", href: "/industrias/infraestructura-pagos/" }
    ]
  },
  { label: "Empresa", href: "/empresa/" },
  { label: "Insights", href: "/insights/" },
  { label: "FAQ", href: "/faq/" },
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

const privacySections = [
  {
    h2: "1. Identidad y domicilio del responsable",
    paragraphs: [
      "VIALTERNA COMUNICACIONES, con RFC VCO1012206A8, con domicilio en Montes Urales 720 PB, Lomas de Chapultepec II Sección, Miguel Hidalgo, Ciudad de México, México, C.P. 11000, es responsable del tratamiento de los datos personales que recabe a través de su sitio web, formularios de contacto, comunicaciones comerciales, correos electrónicos, llamadas, mensajes, solicitudes de información, propuestas de servicios y cualquier otro canal habilitado para la atención de clientes, prospectos, proveedores o usuarios.",
      "Para cualquier asunto relacionado con privacidad, protección de datos personales o ejercicio de derechos, puede contactarnos en contacto@vialterna.com."
    ]
  },
  {
    h2: "2. Marco legal aplicable",
    paragraphs: [
      "El presente Aviso de Privacidad se emite en cumplimiento de la legislación mexicana aplicable en materia de protección de datos personales en posesión de particulares, incluyendo la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, su Reglamento y demás disposiciones aplicables.",
      "Asimismo, cuando resulte aplicable por la ubicación del usuario o por la naturaleza del tratamiento, VIALTERNA COMUNICACIONES podrá considerar principios y derechos reconocidos por normativas internacionales."
    ],
    bullets: [
      "Reglamento General de Protección de Datos de la Unión Europea — RGPD / GDPR.",
      "Legislación aplicable en Estados Unidos, incluyendo, cuando corresponda, principios de privacidad reconocidos por leyes estatales como CCPA/CPRA para residentes de California.",
      "Normas aplicables al uso de cookies, tecnologías de rastreo, analítica web y preferencias de privacidad digital."
    ]
  },
  {
    h2: "3. Datos personales que podemos recabar",
    paragraphs: ["VIALTERNA COMUNICACIONES podrá recabar los siguientes datos personales, según la relación que mantenga con usted:"],
    bullets: [
      "Datos de identificación: nombre completo, empresa u organización, cargo o área de responsabilidad, RFC o datos fiscales cuando sean necesarios.",
      "Datos de contacto: correo electrónico, número telefónico, dirección laboral o comercial, datos proporcionados mediante formularios de contacto o solicitudes de diagnóstico.",
      "Datos relacionados con proyectos o servicios: necesidades de conectividad, infraestructura, telecomunicaciones o servicios tecnológicos, ubicación general de sitios, requerimientos técnicos y datos necesarios para propuestas, diagnósticos o seguimiento comercial.",
      "Datos técnicos y de navegación: dirección IP, tipo de navegador, sistema operativo, páginas visitadas, fecha y hora de acceso, fuente de tráfico, interacciones e identificadores de cookies o tecnologías similares."
    ]
  },
  {
    h2: "4. Datos personales sensibles",
    paragraphs: [
      "VIALTERNA COMUNICACIONES no solicita ni recaba intencionalmente datos personales sensibles a través de su sitio web.",
      "Si por error usted proporciona datos sensibles en un formulario, correo electrónico o mensaje, VIALTERNA COMUNICACIONES podrá eliminarlos cuando no sean necesarios para la finalidad de contacto o atención solicitada."
    ]
  },
  {
    h2: "5. Finalidades del tratamiento de datos personales",
    paragraphs: ["Los datos personales recabados podrán ser utilizados para finalidades primarias y secundarias relacionadas con atención, seguimiento, prestación de servicios, cumplimiento legal, comunicación comercial y mejora del sitio."],
    bullets: [
      "Atender solicitudes de información, contactar prospectos, clientes, proveedores o usuarios y dar seguimiento a formularios enviados a través del sitio web.",
      "Elaborar diagnósticos, propuestas técnicas, cotizaciones o presentaciones comerciales.",
      "Evaluar necesidades relacionadas con conectividad, infraestructura, telecomunicaciones, soluciones administradas o servicios tecnológicos.",
      "Prestar servicios contratados, administrar la relación comercial, contractual o técnica con clientes y coordinar reuniones, llamadas, visitas técnicas o comunicaciones comerciales.",
      "Cumplir obligaciones legales, fiscales, administrativas o contractuales y mantener registros internos.",
      "Enviar información comercial, newsletters, actualizaciones, contenidos técnicos o comunicaciones informativas, siempre que usted no se oponga.",
      "Realizar análisis estadístico, mejorar la experiencia de navegación, medir campañas digitales y desarrollar actividades de marketing cuando exista consentimiento o base legal aplicable."
    ]
  },
  {
    h2: "6. Base legal del tratamiento",
    paragraphs: ["El tratamiento de sus datos personales se realiza con base en una o varias bases legales, según corresponda."],
    bullets: [
      "Su consentimiento.",
      "La relación jurídica, comercial, precontractual o contractual con usted o con la empresa que representa.",
      "El cumplimiento de obligaciones legales.",
      "El interés legítimo de VIALTERNA COMUNICACIONES para atender solicitudes, gestionar relaciones comerciales, mejorar sus servicios y proteger la seguridad de sus sistemas.",
      "La necesidad de ejecutar medidas precontractuales solicitadas por el titular, como diagnósticos, cotizaciones o propuestas."
    ]
  },
  {
    h2: "7. Transferencias de datos personales",
    paragraphs: [
      "VIALTERNA COMUNICACIONES podrá compartir sus datos personales con terceros únicamente cuando sea necesario para cumplir las finalidades descritas en este Aviso de Privacidad.",
      "Dichos terceros pueden incluir proveedores de hosting, infraestructura tecnológica, correo electrónico, CRM, analítica web, servicios administrativos, contables, legales, fiscales o tecnológicos, socios técnicos, autoridades competentes, empresas relacionadas, afiliadas o aliadas comerciales.",
      "VIALTERNA COMUNICACIONES no vende sus datos personales."
    ]
  },
  {
    h2: "8. Conservación de datos personales",
    paragraphs: [
      "VIALTERNA COMUNICACIONES conservará sus datos personales únicamente durante el tiempo necesario para cumplir las finalidades descritas en este Aviso de Privacidad, atender obligaciones legales, fiscales, administrativas o contractuales, resolver posibles controversias y mantener registros internos de operación.",
      "Cuando los datos personales dejen de ser necesarios, serán eliminados, bloqueados, anonimizados o conservados únicamente durante los plazos legalmente aplicables."
    ]
  },
  {
    h2: "9. Medidas de seguridad",
    paragraphs: [
      "VIALTERNA COMUNICACIONES implementa medidas razonables de seguridad administrativas, técnicas y físicas para proteger los datos personales contra daño, pérdida, alteración, destrucción, uso, acceso o tratamiento no autorizado.",
      "Ningún sistema digital es absolutamente invulnerable; sin embargo, VIALTERNA COMUNICACIONES procura aplicar buenas prácticas para proteger la información bajo su responsabilidad."
    ]
  },
  {
    h2: "10. Derechos ARCO en México",
    paragraphs: ["Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales. Para ejercer estos derechos deberá enviar una solicitud al correo contacto@vialterna.com."],
    bullets: [
      "Nombre completo del titular.",
      "Medio de contacto para recibir respuesta.",
      "Descripción clara del derecho que desea ejercer.",
      "Datos personales sobre los que desea ejercer el derecho.",
      "Documento que acredite su identidad o representación legal, cuando corresponda.",
      "Cualquier información adicional que facilite la localización de sus datos."
    ]
  },
  {
    h2: "11. Derechos aplicables a usuarios de la Unión Europea",
    paragraphs: ["Cuando el RGPD/GDPR resulte aplicable, los usuarios ubicados en la Unión Europea o el Espacio Económico Europeo podrán tener derechos de acceso, rectificación, supresión, limitación, oposición, portabilidad, retiro del consentimiento y reclamación ante una autoridad de control competente."]
  },
  {
    h2: "12. Derechos aplicables a residentes de Estados Unidos",
    paragraphs: [
      "Cuando resulte aplicable la legislación de privacidad de Estados Unidos, incluyendo leyes estatales como la California Consumer Privacy Act y sus modificaciones, los residentes de ciertos estados podrán tener derechos específicos sobre su información personal.",
      "VIALTERNA COMUNICACIONES no vende datos personales."
    ]
  },
  {
    h2: "13. Uso de cookies y tecnologías similares",
    paragraphs: ["El sitio web de VIALTERNA COMUNICACIONES puede utilizar cookies, píxeles, etiquetas, almacenamiento local u otras tecnologías similares para permitir el funcionamiento del sitio, mejorar la experiencia del usuario, analizar tráfico, recordar preferencias y medir el desempeño de contenidos o campañas digitales."],
    bullets: [
      "Cookies estrictamente necesarias.",
      "Cookies de analítica.",
      "Cookies de funcionalidad.",
      "Cookies de marketing o publicidad, cuando exista consentimiento o base legal aplicable."
    ]
  },
  {
    h2: "14. Gestión de cookies",
    paragraphs: [
      "Al ingresar al sitio web, el usuario podrá recibir información sobre el uso de cookies y, cuando corresponda, podrá aceptar, rechazar o configurar sus preferencias.",
      "El usuario también puede bloquear, eliminar o deshabilitar cookies desde la configuración de su navegador. Algunas funciones del sitio podrían no operar correctamente si se deshabilitan determinadas cookies técnicas."
    ]
  },
  {
    h2: "15. Herramientas de terceros",
    paragraphs: ["El sitio web puede utilizar herramientas de terceros para analítica, hosting, seguridad, formularios, CRM, correo electrónico, mapas, reproducción de contenido, medición de campañas o servicios similares. Estas herramientas pueden tratar datos técnicos o de navegación conforme a sus propias políticas de privacidad."]
  },
  {
    h2: "16. Enlaces a sitios de terceros",
    paragraphs: ["El sitio web de VIALTERNA COMUNICACIONES puede contener enlaces a sitios web de terceros, redes sociales, plataformas externas o servicios no controlados por VIALTERNA COMUNICACIONES. Este Aviso de Privacidad no aplica a dichos sitios externos."]
  },
  {
    h2: "17. Menores de edad",
    paragraphs: ["Los servicios y el sitio web de VIALTERNA COMUNICACIONES están dirigidos principalmente a empresas, organizaciones, profesionales y usuarios mayores de edad. VIALTERNA COMUNICACIONES no busca recabar intencionalmente datos personales de menores de edad."]
  },
  {
    h2: "18. Revocación del consentimiento",
    paragraphs: ["Usted puede revocar el consentimiento otorgado para el tratamiento de sus datos personales, siempre que dicha revocación sea legalmente procedente y no impida el cumplimiento de obligaciones pendientes. Para solicitar la revocación del consentimiento, deberá escribir a contacto@vialterna.com."]
  },
  {
    h2: "19. Limitación del uso o divulgación de datos",
    paragraphs: ["Usted puede solicitar la limitación del uso o divulgación de sus datos personales para finalidades secundarias, comerciales o de marketing, escribiendo a contacto@vialterna.com."]
  },
  {
    h2: "20. Cambios al Aviso de Privacidad",
    paragraphs: ["VIALTERNA COMUNICACIONES podrá modificar, actualizar o complementar el presente Aviso de Privacidad en cualquier momento. Las modificaciones estarán disponibles en el sitio web oficial o podrán comunicarse por los medios que se consideren adecuados."]
  },
  {
    h2: "21. Contacto",
    paragraphs: [
      "Para cualquier duda, solicitud o comentario relacionado con este Aviso de Privacidad, el tratamiento de sus datos personales, el ejercicio de derechos ARCO, derechos bajo RGPD/GDPR, derechos aplicables en Estados Unidos o gestión de cookies, puede contactarnos en contacto@vialterna.com.",
      "VIALTERNA COMUNICACIONES. RFC: VCO1012206A8. Domicilio: Montes Urales 720 PB, Lomas de Chapultepec II Sección, Miguel Hidalgo, Ciudad de México, México, C.P. 11000."
    ]
  }
];

const faqContent = {
  es: {
    label: "ES",
    title: "Preguntas frecuentes",
    intro: "Respuestas directas sobre el modelo de servicio, alcance, despliegue y operación de Vialterna.",
    items: [
      {
        question: "¿Qué hace Vialterna?",
        answer: "Vialterna diseña, despliega y opera conectividad empresarial resiliente para empresas con sitios distribuidos en México. Integramos diferentes operadores y tecnologías para mantener conectadas operaciones críticas."
      },
      {
        question: "¿Vialterna es un operador tradicional?",
        answer: "No. Vialterna es agnóstico de operador. Diseñamos la arquitectura alrededor de la operación del cliente, no alrededor de una red propia. Podemos combinar fibra, LTE, 5G, satélite y otras tecnologías según cada ubicación."
      },
      {
        question: "¿Qué tipo de empresas atiende Vialterna?",
        answer: "Trabajamos con empresas que operan múltiples sitios, sucursales, cajeros automáticos, tiendas, franquicias, centros de distribución, sitios industriales, dispositivos IoT o infraestructura transaccional."
      },
      {
        question: "¿Qué significa Disponibilidad como Servicio?",
        answer: "Significa que no entregamos solamente enlaces. Diseñamos, implementamos, monitoreamos y gestionamos una arquitectura de conectividad orientada a mantener la operación disponible, con visibilidad, soporte y continuidad."
      },
      {
        question: "¿Pueden trabajar con mis operadores actuales?",
        answer: "Sí. Podemos evaluar los enlaces existentes, identificar riesgos, detectar redundancias, proponer mejoras y complementar la arquitectura con operadores o tecnologías adicionales cuando sea necesario."
      },
      {
        question: "¿Vialterna ofrece respaldo satelital o celular?",
        answer: "Sí. Diseñamos conectividad de respaldo con LTE, 5G, satélite LEO u otras rutas secundarias para reducir la dependencia de un solo enlace o tecnología."
      },
      {
        question: "¿Qué incluye un diagnóstico de conectividad?",
        answer: "El diagnóstico revisa cobertura, operadores, enlaces existentes, puntos únicos de falla, criticidad por sitio, gasto, desempeño, riesgos de desconexión y oportunidades de optimización."
      },
      {
        question: "¿Pueden iniciar con un piloto?",
        answer: "Sí. En muchos casos el proceso inicia con un piloto de pocos sitios para validar cobertura, desempeño, failover y operación antes de escalar a un despliegue mayor."
      },
      {
        question: "¿Vialterna gestiona SIMs empresariales e IoT?",
        answer: "Sí. Administramos SIMs, conectividad celular, consumo, activaciones, alertas, optimización de planes y ciclo de vida para dispositivos conectados o flotas IoT."
      },
      {
        question: "¿Cómo puedo contactar a Vialterna?",
        answer: "Puedes escribir a atencionaclientes@vialterna.com o comunicarte por WhatsApp al 55 8062 6884 para iniciar una conversación o solicitar un diagnóstico."
      }
    ]
  },
  en: {
    label: "EN",
    title: "Frequently Asked Questions",
    intro: "Direct answers about Vialterna's service model, scope, deployment process and operations.",
    items: [
      {
        question: "What does Vialterna do?",
        answer: "Vialterna designs, deploys and operates resilient enterprise connectivity for companies with distributed sites in Mexico. We integrate multiple carriers and technologies to keep critical operations connected."
      },
      {
        question: "Is Vialterna a traditional carrier?",
        answer: "No. Vialterna is carrier-agnostic. We design the architecture around the client's operation, not around a proprietary network. We can combine fiber, LTE, 5G, satellite and other technologies depending on each location."
      },
      {
        question: "What types of companies does Vialterna support?",
        answer: "We work with companies that operate multiple sites, branches, ATMs, stores, franchises, distribution centers, industrial locations, IoT devices or transactional infrastructure."
      },
      {
        question: "What does Availability as a Service mean?",
        answer: "It means we do not simply deliver links. We design, implement, monitor and manage a connectivity architecture focused on keeping operations available, with visibility, support and continuity."
      },
      {
        question: "Can Vialterna work with my current carriers?",
        answer: "Yes. We can evaluate existing links, identify risks, detect redundancies, propose improvements and complement the architecture with additional carriers or technologies when needed."
      },
      {
        question: "Does Vialterna provide satellite or cellular backup?",
        answer: "Yes. We design backup connectivity using LTE, 5G, LEO satellite or other secondary routes to reduce dependency on a single link or technology."
      },
      {
        question: "What is included in a connectivity assessment?",
        answer: "The assessment reviews coverage, carriers, existing links, single points of failure, site criticality, spend, performance, disconnection risks and optimization opportunities."
      },
      {
        question: "Can Vialterna start with a pilot?",
        answer: "Yes. In many cases the process starts with a small-site pilot to validate coverage, performance, failover and operations before scaling to a larger rollout."
      },
      {
        question: "Does Vialterna manage enterprise SIMs and IoT connectivity?",
        answer: "Yes. We manage SIMs, cellular connectivity, usage, activations, alerts, plan optimization and lifecycle for connected devices or IoT fleets."
      },
      {
        question: "How can I contact Vialterna?",
        answer: "You can write to atencionaclientes@vialterna.com or contact us by WhatsApp at 55 8062 6884 to start a conversation or request an assessment."
      }
    ]
  }
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
  "/faq/": {
    title: "FAQ | Preguntas frecuentes de conectividad | Vialterna",
    description: "Preguntas frecuentes en español e inglés sobre conectividad empresarial, SD-WAN, respaldo, SIMs, IoT y servicios administrados de Vialterna.",
    kind: "faq",
    eyebrow: "FAQ",
    h1: "Preguntas frecuentes sobre conectividad empresarial",
    intro: "Información esencial para entender cómo Vialterna diseña, despliega y opera conectividad resiliente para empresas distribuidas.",
    faq: faqContent,
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
  },
  "/aviso-de-privacidad/": {
    kind: "privacy",
    title: "Aviso de Privacidad Integral | Vialterna",
    description: "Aviso de Privacidad Integral de Vialterna Comunicaciones.",
    eyebrow: "Legal",
    h1: "Aviso de Privacidad Integral",
    intro: "VIALTERNA COMUNICACIONES. RFC: VCO1012206A8. Última actualización: 16 de junio de 2026.",
    sections: privacySections
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
