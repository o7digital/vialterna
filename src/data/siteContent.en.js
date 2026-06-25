import {
  Building2,
  Factory,
  Network,
  RadioTower,
  Router,
  Satellite,
  ShieldCheck,
  Smartphone,
  Store,
  Wifi
} from "lucide-react";
import { heroImage, heroVideo, heroVideos } from "./siteContent.js";

export { heroImage, heroVideo, heroVideos };

export const navigation = [
  {
    label: "Solutions",
    href: "/soluciones/conectividad-sitios-distribuidos/",
    children: [
      { label: "Edge Solutions", href: "/soluciones/conectividad-sitios-distribuidos/" },
      { label: "Central Site Solutions", href: "/soluciones/sitios-centrales/" },
      { label: "IoT / SIM Solutions", href: "/soluciones/iot-sim-administradas/" },
      { label: "Backup Solutions", href: "/soluciones/respaldo-satelital-celular/" }
    ]
  },
  {
    label: "Industries",
    href: "/industrias/servicios-financieros/",
    children: [
      { label: "Financial Services", href: "/industrias/servicios-financieros/" },
      { label: "Retail and Franchises", href: "/industrias/retail-franquicias/" },
      { label: "Energy and Industry", href: "/industrias/energia-industria/" },
      { label: "Payment Infrastructure", href: "/industrias/infraestructura-pagos/" }
    ]
  },
  { label: "Company", href: "/empresa/" },
  { label: "Insights", href: "/insights/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact", href: "/contacto/" }
];

export const solutions = [
  {
    icon: Router,
    title: "Edge Solutions (Last Mile)",
    href: "/soluciones/conectividad-sitios-distribuidos/",
    text: "For distributed endpoints across your network: ATMs, retail branches, franchise locations and remote facilities.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
  },
  {
    icon: Building2,
    title: "Central Sites",
    href: "/soluciones/sitios-centrales/",
    text: "Resilient, high-performance connectivity for corporate offices, data centers, regional hubs, distribution centers and transaction sites.",
    image: "https://images.unsplash.com/photo-1600267165477-6d4cc741b379?auto=format&fit=crop&w=900&q=80"
  },
  {
    icon: RadioTower,
    title: "IoT / SIM Solutions",
    href: "/soluciones/iot-sim-administradas/",
    text: "SIM management, managed cellular connectivity, usage control, alerts, plan optimization and lifecycle management.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80"
  },
  {
    icon: Satellite,
    title: "Backup Solutions",
    href: "/soluciones/respaldo-satelital-celular/",
    text: "Secondary connectivity with LEO satellite, LTE or 5G failover for remote sites, retail, banking and critical infrastructure.",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=900&q=80"
  }
];

export const industries = [
  { icon: Building2, title: "Financial Services", href: "/industrias/servicios-financieros/", text: "ATMs, bank branches and transactional infrastructure." },
  { icon: Store, title: "Retail and Franchises", href: "/industrias/retail-franquicias/", text: "Stores, POS, inventory, online orders and distribution centers." },
  { icon: Factory, title: "Energy and Industry", href: "/industrias/energia-industria/", text: "Remote sites, SCADA, operational safety, IoT sensors and industrial telemetry." },
  { icon: Smartphone, title: "Payment Infrastructure", href: "/industrias/infraestructura-pagos/", text: "Terminals, SIMs, processing sites and transactional continuity." }
];

const cta = {
  title: "Request a connectivity assessment",
  text: "Identify disconnection risks, single points of failure, optimization opportunities and possible improvements across your infrastructure.",
  label: "Request assessment"
};

const legalDocuments = [
  { label: "Minimum rights charter", href: "/legal/carta-derechos-minimos.pdf" },
  { label: "PROFECO adhesion contract registration", href: "/legal/registro-contrato-adhesion-profeco.pdf" },
  { label: "Commercial practices code", href: "/legal/vialterna-codigo-practicas-comerciales.pdf" },
  { label: "Security and justice cooperation", href: "/legal/vialterna-colaboracion-seguridad-justicia.pdf" }
];

const privacySections = [
  {
    h2: "Legal area",
    paragraphs: ["This section contains Vialterna's published legal documents and the privacy notices applicable to customers, website users and Vial Client users."],
    documents: legalDocuments
  },
  {
    h2: "Comprehensive Privacy Notice - Customers and website users",
    paragraphs: ["In compliance with Mexico's Federal Law on the Protection of Personal Data Held by Private Parties (LFPDPPP), its regulations and other applicable provisions, this Comprehensive Privacy Notice explains how we collect, use, safeguard and, where applicable, transfer your personal data, as well as the mechanisms available to exercise your rights."]
  },
  {
    h2: "Identity and address of the Data Controller",
    paragraphs: ["Vialterna Comunicaciones, S.A. de C.V. (the “Data Controller”) is responsible for your personal data. Its address for notices is Montes Pirineos 720-B, Lomas de Chapultepec, Miguel Hidalgo, Postal Code 11000, Mexico City, Mexico."]
  },
  {
    h2: "Personal data processed by the Data Controller",
    paragraphs: ["To fulfill the purposes described in this Privacy Notice, the Data Controller may process the following categories of personal data:"],
    bullets: ["Identification and contact data.", "Financial and asset-related data.", "Browsing, device and geolocation data."]
  },
  {
    h2: "Sensitive personal data",
    paragraphs: ["The Data Controller does not collect sensitive personal data for the purposes described in this Privacy Notice."]
  },
  {
    h2: "Third-party personal data",
    paragraphs: [
      "If you provide personal data belonging to third parties, including family members, you must inform them that their data will be processed and make this Privacy Notice available to them.",
      "By providing third-party data, you confirm that you have obtained the data subject's consent and that the information is accurate and complete."
    ]
  },
  {
    h2: "Personal data of minors",
    paragraphs: [
      "The Data Controller does not intentionally collect personal data directly from minors through forms, questionnaires, the website or the mobile application.",
      "Parents or legal guardians may exercise access, rectification, cancellation and objection rights on behalf of a minor and may revoke consent where permitted by law."
    ]
  },
  {
    h2: "Purposes of personal data processing",
    paragraphs: ["The Data Controller processes personal data for the following primary purposes:"],
    bullets: [
      "Provide information about Vialterna services, service options and pricing when requested.",
      "Facilitate contracting through electronic means.",
      "Install equipment at locations designated by the customer.",
      "Process payments for equipment, delivery, installation and services.",
      "Invoice services and manage customer accounting, administration and tax records.",
      "Provide support through electronic channels.",
      "Create website navigation statistics and historical records."
    ]
  },
  {
    h2: "Secondary purposes",
    paragraphs: ["The Data Controller does not use your personal data for secondary purposes."]
  },
  {
    h2: "Personal data transfers",
    paragraphs: ["Your personal data may be transferred within Mexico or abroad to the following recipient categories for the stated purposes:"],
    bullets: [
      "Public agencies, federal, state or municipal authorities, commissions, institutes and regulators, when required by public safety rules or a valid judicial or administrative request.",
      "Service providers that support centralized information storage, account administration, contracted-service changes, analysis and statistics used to evaluate and improve services."
    ]
  },
  {
    h2: "Consent for transfers",
    paragraphs: [
      "Applicable law allows the transfers described above without additional consent, while requiring the Data Controller to inform you about them.",
      "Any transfer that does require consent will be communicated before it takes place through an update to this Privacy Notice."
    ]
  },
  {
    h2: "Access, rectification, cancellation and objection rights",
    paragraphs: ["Under Mexican law, you may exercise the following ARCO rights:"],
    bullets: [
      "Access: learn which personal data we process and the conditions of processing.",
      "Rectification: request correction of inaccurate or incomplete data.",
      "Cancellation: request that processing cease, subject to blocking and subsequent deletion where legally applicable.",
      "Objection: object to processing when you have a legitimate reason."
    ]
  },
  {
    h2: "How to exercise ARCO rights",
    paragraphs: ["To exercise an ARCO right, submit a request to our Personal Data Department through either of these channels:"],
    bullets: [
      "Email protecciondedatos@vialterna.com.",
      "Send a signed request to Montes Pirineos 720-B, Lomas de Chapultepec, Miguel Hidalgo, Postal Code 11000, Mexico City, Mexico."
    ]
  },
  {
    h2: "Required content of an ARCO request",
    paragraphs: ["Your request must include or be accompanied by:"],
    bullets: [
      "Your full name and address, or another means of receiving our response.",
      "A copy of an identification document and, where applicable, proof of legal representation.",
      "A clear description of the right you wish to exercise and the personal data involved.",
      "Any additional information or documentation that helps us locate your personal data."
    ]
  },
  {
    h2: "ARCO response periods",
    paragraphs: [
      "The Data Controller will respond within 20 business days after receiving a complete request. If the request is accepted, it will be implemented within the following 15 business days.",
      "If information or documentation is incomplete or insufficient, we may ask you to correct the request. You will have 10 business days to respond.",
      "Cancellation is not absolute. Information may need to be retained to comply with legal obligations."
    ]
  },
  {
    h2: "Revocation of consent",
    paragraphs: [
      "Where legally permitted, you may revoke consent to the processing of your personal data. Revocation does not apply retroactively and cannot affect actions or transfers completed before the revocation.",
      "Send revocation requests to protecciondedatos@vialterna.com following the requirements for an ARCO request."
    ]
  },
  {
    h2: "Limiting use and disclosure",
    paragraphs: ["You may request limits on the use or disclosure of your personal data through our Personal Data Department. Vialterna maintains internal exclusion procedures where applicable."]
  },
  {
    h2: "Automatic data collection",
    paragraphs: [
      "Our website uses cookies to support navigation and communication. Cookies may collect and retain technical information about browsing activity, channel usage and, where applicable, approximate geographic location.",
      "You can disable cookies in your browser. Some website sections or services may not function correctly after cookies or location access are disabled."
    ]
  },
  {
    h2: "Changes to this Privacy Notice",
    paragraphs: [
      "The Data Controller may modify or update this Privacy Notice at any time. Changes will be published on https://vialterna.com/ in the Privacy Notices section.",
      "The notice published on the website will govern the processing of your personal data."
    ]
  },
  {
    h2: "Questions and requests",
    paragraphs: ["For questions or requests, contact atencionautoridades@vialterna.com or protecciondedatos@vialterna.com."]
  },
  {
    h2: "Vial Client Comprehensive Privacy Notice",
    paragraphs: [
      "This section explains how Vialterna processes personal data through the Vial Client mobile application.",
      "Vialterna Comunicaciones, S.A. de C.V. is the Data Controller and uses the address stated above for notices."
    ]
  },
  {
    h2: "Data collected by Vial Client",
    paragraphs: ["Vial Client may process geolocation data to support the application's operational functions. It does not request sensitive personal data."]
  },
  {
    h2: "Vial Client processing purposes",
    paragraphs: ["Geolocation data is used to provide application functions and related services requested by the user. Vialterna does not use this data for unrelated secondary purposes."]
  },
  {
    h2: "Vial Client rights and updates",
    paragraphs: [
      "Users may exercise ARCO rights, revoke consent where legally applicable, or request limits on use and disclosure by contacting protecciondedatos@vialterna.com.",
      "The Vial Client Privacy Notice may be updated because of legal requirements, changes to products or services, privacy practices or the business model.",
      "Last updated: August 30, 2023."
    ]
  }
];

const faqContent = {
  en: {
    label: "EN",
    title: "Frequently Asked Questions",
    intro: "Direct answers about Vialterna's service model, scope, deployment process and operations.",
    items: [
      ["What does Vialterna do?", "Vialterna designs, deploys and operates resilient enterprise connectivity for companies with distributed sites in Mexico. We integrate multiple carriers and technologies to keep critical operations connected."],
      ["Is Vialterna a traditional carrier?", "No. Vialterna is carrier-agnostic. We design around the customer's operation rather than a proprietary network, combining fiber, LTE, 5G, satellite and other technologies as needed."],
      ["What types of companies does Vialterna support?", "We work with organizations operating branches, ATMs, stores, franchises, distribution centers, industrial sites, IoT devices and transactional infrastructure."],
      ["What does Availability as a Service mean?", "We do more than deliver links. We design, implement, monitor and manage an architecture focused on keeping operations available with visibility, support and continuity."],
      ["Can Vialterna work with my current carriers?", "Yes. We assess existing links, identify risks and redundancies, recommend improvements and add carriers or technologies where needed."],
      ["Does Vialterna provide satellite or cellular backup?", "Yes. We design backup connectivity using LTE, 5G, LEO satellite and other secondary routes."],
      ["What is included in a connectivity assessment?", "We review coverage, carriers, links, single points of failure, site criticality, spend, performance, disconnection risks and optimization opportunities."],
      ["Can Vialterna start with a pilot?", "Yes. A pilot can validate coverage, performance, failover and operations before a larger rollout."],
      ["Does Vialterna manage enterprise SIMs and IoT?", "Yes. We manage SIMs, cellular connectivity, usage, activation, alerts, plan optimization and device lifecycle."],
      ["How can I contact Vialterna?", "Email atencionaclientes@vialterna.com or contact us on WhatsApp at +52 55 8062 6884."]
    ].map(([question, answer]) => ({ question, answer }))
  }
};

const newsArticles = [
  ["Networks", "Jun 18", "5 min", "How to design resilient connectivity for distributed sites", "Practical criteria for combining carriers, technologies and backup routes without depending on a single link.", "photo-1558494949-ef010cbdcc31"],
  ["SD-WAN", "Jun 06", "6 min", "When to migrate from MPLS to a multi-carrier SD-WAN architecture", "Operational signals, risks and benefits of moving to a flexible network with failover and centralized visibility.", "photo-1518770660439-4636190af475"],
  ["IoT", "May 24", "4 min", "Enterprise SIMs: usage control and lifecycle management for IoT fleets", "Best practices for managing activations, alerts, plans and connected devices nationwide.", "photo-1581092160562-40aa08e78837"],
  ["Backup", "May 09", "5 min", "Satellite and cellular backup: eliminating single points of failure", "When to use LTE, 5G or LEO satellite as secondary routes for critical and remote sites.", "photo-1446776877081-d282a0f896e2"],
  ["Operations", "Apr 22", "3 min", "What a NOC should measure to protect enterprise availability", "Key indicators for anticipating degradation, incidents and failures before they affect the business.", "photo-1600267165477-6d4cc741b379"],
  ["Finance", "Apr 04", "4 min", "The hidden cost of a disconnected store, branch or ATM", "How to translate downtime into operational and financial impact when prioritizing connectivity investment.", "photo-1563986768494-4dee2763ff3f"]
].map(([category, date, readTime, title, excerpt, photo]) => ({
  category, date, readTime, title, excerpt,
  image: `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=1200&q=82`
}));

export const home = {
  title: "Resilient enterprise connectivity in Mexico | Vialterna",
  description: "Vialterna designs, deploys and operates managed connectivity for companies with distributed operations in Mexico.",
  eyebrow: "Critical infrastructure in Mexico",
  h1: "Availability as a Service for distributed operations in Mexico.",
  intro: "A carrier-agnostic, multi-network architecture delivered as a managed service for organizations where a disconnected site has a measurable cost.",
  sections: [
    { h2: "Connectivity is not a utility. It is an operational risk.", text: "When a site disconnects, revenue and transactions stop. Teams fall back to manual processes. Every minute offline creates measurable financial exposure." },
    { h2: "Three common approaches still leave companies exposed.", approaches: [["Build it in-house", "IT takes on carrier management, redundancy design and incident response in addition to its existing workload."], ["Rely on a traditional carrier", "A carrier is structurally biased toward its own network. It sells a link, not availability designed around your operation."], ["Bundle it with an IT integrator", "Resilient networks require architectural specialization and direct operational relationships with multiple carriers."]] },
    { h2: "We do not sell connectivity. We design availability.", text: "Vialterna is a carrier-agnostic network partner for distributed companies in Mexico. Every service is designed, deployed, optimized and supported by SLAs." },
    { h2: "One platform. One operating model. Four phases.", steps: [["Assessment", "We begin with your current telecommunications environment or a specific problem."], ["Design", "We design each site's architecture using the best combination of links and technologies."], ["Deployment", "We coordinate hardware, carriers and activation."], ["Management and expansion", "We optimize and expand the architecture as your footprint and needs evolve."]] }
  ],
  cta
};

export const pages = {
  "/soluciones/": {
    kind: "hub", cards: solutions,
    title: "Enterprise connectivity solutions | Vialterna",
    description: "Enterprise connectivity solutions for distributed networks, central sites, IoT, SIMs and satellite or cellular backup.",
    eyebrow: "Solutions",
    h1: "Four solutions. One platform. Everything you need to keep operations online.",
    intro: "Each solution addresses a specific connectivity challenge. Select the entry point that best matches your immediate need."
  },
  "/soluciones/conectividad-sitios-distribuidos/": {
    title: "Edge solutions for distributed sites | Vialterna",
    description: "Resilient connectivity for branches, ATMs, retail, franchises and remote sites across Mexico.",
    eyebrow: "Edge Solutions",
    h1: "Edge Solutions: resilient connectivity for distributed networks in Mexico",
    intro: "Resilient connectivity for every site across your network: ATMs, branches, stores, franchise locations and remote facilities.",
    sections: [
      { h2: "When distributed sites disconnect, business stops", text: "A vulnerable one-carrier-per-site model with manual or nonexistent failover exposes transactions, critical processes and customer service." },
      { h2: "What a Vialterna Edge solution includes", features: [["Architecture design per site", "We assess fiber, cellular, LEO satellite and MPLS according to coverage, criticality and required availability."], ["Managed hardware", "Vialterna provisions, configures, ships and manages routers, switches, antennas and cellular gateways."], ["Connectivity monitoring", "Every site is monitored for failures and degradation."], ["Automatic failover", "Traffic automatically moves to a backup link when the primary connection fails."], ["SLA-backed availability", "Availability is measured and reported against clear service levels."]] },
      { h2: "From pilot to national rollout", steps: [["Pilot deployment", "Start with one to five sites."], ["Performance validation", "Measure activity, failover and solution behavior."], ["National rollout", "Scale deployment in controlled phases."], ["Ongoing management", "Vialterna monitors, responds and continuously optimizes."]] }
    ],
    caseStudy: "A Mexican financial institution needed connectivity for multiple ATMs. Vialterna designed the solution in one week and began deployment in under a month using CPE, cellular SIMs and satellite backup links.",
    benefits: ["Resilient distributed-site connectivity.", "Location-specific architecture.", "Fewer single points of failure.", "Automatic link failover.", "Vialterna-managed hardware.", "Connectivity monitoring.", "SLA-backed availability."],
    cta
  },
  "/soluciones/sitios-centrales/": {
    title: "Central Site Solutions | Vialterna",
    description: "Resilient connectivity for corporate offices, data centers, regional hubs, distribution centers and transaction sites.",
    eyebrow: "Central Sites",
    h1: "Central Site Solutions: resilient connectivity for critical infrastructure",
    intro: "Resilient, high-performance connectivity for corporate offices, regional hubs, data centers, distribution centers and high-volume transaction sites.",
    sections: [
      { h2: "The central-site challenge", text: "A central site concentrates applications, data, transactions and operations. Dependence on one route or carrier can turn a local failure into regional or national impact." },
      { h2: "What the solution includes", features: [["Diverse WAN routes", "Diversity across carriers, technologies and physical routes."], ["Advanced traffic management", "Prioritization and control for critical traffic."], ["Higher bandwidth and SLAs", "Architecture designed for capacity, performance and service levels."], ["Connectivity monitoring", "Continuous review of links, events and availability."]] }
    ],
    benefits: ["Greater resilience for critical facilities.", "Fewer single points of failure.", "Advanced traffic management.", "Connectivity monitoring.", "SLA-aligned architecture."], cta
  },
  "/soluciones/iot-sim-administradas/": {
    title: "Managed IoT and SIM solutions | Vialterna",
    description: "SIM management, managed cellular connectivity, usage control and lifecycle management for IoT devices.",
    eyebrow: "IoT and SIMs",
    h1: "IoT / SIM solutions for connected devices",
    intro: "Vialterna manages cellular connectivity, enterprise SIMs, usage, alerts, plans and lifecycle for connected-device fleets.",
    sections: [
      { h2: "Managed SIM and cellular connectivity", text: "Terminal, sensor, ATM, vehicle and connected-device fleets require control over activation, usage, plans and support." },
      { h2: "What is included", features: [["Provisioning and activation", "SIM onboarding, activation and assignment."], ["Usage control and alerts", "Visibility into anomalies and disconnections."], ["Plan optimization", "Usage analysis to identify adjustment opportunities."], ["Lifecycle management", "Control of active, suspended, replaced and reassigned SIMs."]] }
    ],
    benefits: ["Centralized SIM management.", "Bulk provisioning and activation.", "Usage control.", "Operational alerts.", "Plan optimization.", "IoT platform integration."], cta
  },
  "/soluciones/respaldo-satelital-celular/": {
    title: "Satellite and cellular backup | Vialterna",
    description: "Secondary connectivity and satellite or cellular failover for remote sites, retail, banking and critical infrastructure.",
    eyebrow: "Backup",
    h1: "Satellite and cellular backup connectivity for operational continuity",
    intro: "Vialterna designs secondary routes using LEO satellite, LTE and 5G to keep critical sites connected when the primary link fails.",
    sections: [
      { h2: "Secondary connectivity and failover", text: "Backup must automatically move traffic to a secondary route when the primary connection degrades or fails." },
      { h2: "Backup technologies", features: [["LEO satellite backup", "A secondary route where terrestrial redundancy is limited."], ["LTE / 5G cellular backup", "Mobile connectivity for continuity during fixed-link failures."], ["Automatic failover", "Traffic switches without manual intervention."], ["Integrated monitoring", "Visibility into primary links, backup links, events and availability."]] }
    ],
    benefits: ["Secondary connectivity for critical sites.", "Satellite and cellular failover.", "Continuity during failures.", "Integrated monitoring.", "Less dependence on one technology."], cta
  },
  "/industrias/": {
    kind: "hub", cards: industries,
    title: "Connectivity for distributed industries | Vialterna",
    description: "Resilient connectivity for financial services, retail, energy, industry and payment infrastructure.",
    eyebrow: "Industries",
    h1: "Resilient connectivity for industries with distributed operations",
    intro: "Vialterna supports organizations where connectivity directly affects revenue, service, safety, compliance and business continuity."
  },
  "/industrias/servicios-financieros/": {
    title: "Connectivity for financial services | Vialterna",
    description: "Resilient connectivity for ATMs, bank branches and transactional infrastructure.",
    eyebrow: "Financial Services",
    h1: "Financial services: resilient connectivity for ATMs, branches and transactional infrastructure",
    intro: "In financial services, a connectivity outage can mean lost transactions, customer impact and operational pressure.",
    sections: [{ h2: "What Vialterna delivers", features: [["Edge solutions for ATMs", "Per-site architecture, CPE, cellular SIMs and backup."], ["Backup for bank branches", "Cellular or satellite failover to preserve essential operations."], ["Visibility and reporting", "Incident management and performance visibility."]] }],
    benefits: ["Greater ATM and branch availability.", "Less exposure to one carrier.", "Automatic failover.", "Connectivity monitoring.", "Performance reporting."], cta
  },
  "/industrias/retail-franquicias/": {
    title: "Connectivity for retail and franchises | Vialterna",
    description: "Resilient connectivity for stores, franchises, POS, inventory, online orders and distribution centers.",
    eyebrow: "Retail and Franchises",
    h1: "Retail and franchises: resilient connectivity for store networks",
    intro: "Every disconnected store can mean lost sales, manual processes, customer complaints and pressure on the corporate team.",
    sections: [{ h2: "What Vialterna delivers", features: [["WAN management", "Centralized connectivity, performance and support."], ["Edge solutions for stores and POS", "Site architecture with primary and backup links."], ["Distribution centers and hubs", "Connectivity for logistics, inventory and operational coordination."]] }],
    benefits: ["Fewer lost sales.", "Greater POS continuity.", "Centralized visibility.", "Backup for critical stores.", "Connectivity monitoring."], cta
  },
  "/industrias/energia-industria/": {
    title: "Connectivity for energy and industry | Vialterna",
    description: "Connectivity for remote sites, SCADA, IoT sensors, operational safety and industrial telemetry.",
    eyebrow: "Energy and Industry",
    h1: "Energy and industry: resilient connectivity for remote sites and critical operations",
    intro: "Remote operating sites depend on connectivity for telemetry, safety, industrial systems and operational control.",
    sections: [{ h2: "What Vialterna delivers", features: [["Remote-site connectivity", "Route and technology design for each location."], ["Hybrid and satellite architecture", "Terrestrial, cellular and satellite links combined."], ["IoT / SIM connectivity for sensors", "Connectivity for telemetry, sensors and industrial assets."]] }],
    benefits: ["Remote-site connectivity.", "Greater operational visibility.", "Satellite or cellular backup.", "Industrial IoT connectivity.", "Connectivity monitoring."], cta
  },
  "/industrias/infraestructura-pagos/": {
    title: "Connectivity for payment infrastructure | Vialterna",
    description: "SIM management for terminals, processing-site redundancy and transactional continuity.",
    eyebrow: "Payment Infrastructure",
    h1: "Payment infrastructure: managed connectivity for terminals and transaction processing",
    intro: "Payment companies need to manage thousands of SIMs, detect disconnected terminals, optimize plans and protect processing sites.",
    sections: [{ h2: "What Vialterna delivers", features: [["SIM management", "Provisioning, activation, usage control and plan optimization."], ["Processing redundancy", "Multi-carrier architecture, route diversity and automatic failover."], ["Performance reporting", "Proactive monitoring, performance reports and incident response."]] }],
    benefits: ["Centralized SIM management.", "Bulk provisioning.", "Usage control.", "Plan optimization.", "Processing redundancy.", "Automatic failover."], cta
  },
  "/empresa/": {
    heroImage: "/o7-meeting-room.webp",
    title: "Enterprise telecommunications company in Mexico | Vialterna",
    description: "Vialterna connects companies, branches, devices and field operations through managed networks, SD-WAN, IoT and resilient connectivity.",
    eyebrow: "Company",
    h1: "Vialterna: resilient enterprise connectivity for distributed operations in Mexico",
    intro: "We connect everyone and everything, everywhere, at all times. Vialterna is a Mexican telecommunications company focused on enterprise connectivity, managed networks, SD-WAN, IoT, mobile internet, satellite internet and resilience.",
    sections: [
      { h2: "More than 10 years of enterprise telecommunications innovation", text: "Vialterna was founded in December 2010 as a value-driven alternative to traditional telecommunications models." },
      { h2: "Connecting the physical world to digital strategy", text: "Connectivity provides real-time access to relevant information, enables critical-variable monitoring and supports better operational decisions." }
    ],
    benefits: ["More than 10 years of experience.", "Services for companies with a national footprint.", "SD-WAN, IoT, M2M, mobile and satellite internet expertise.", "Robust architectures using multiple links, carriers and technologies."], cta
  },
  "/insights/": {
    title: "Enterprise connectivity and network insights | Vialterna",
    description: "Insights on managed connectivity, Edge Solutions, SD-WAN, IoT, enterprise SIMs and operational continuity.",
    eyebrow: "Insights",
    h1: "Insights on connectivity, enterprise networks and Edge Solutions",
    intro: "Technical perspectives on managed connectivity, Edge Solutions, SD-WAN, IoT, enterprise SIMs and operational continuity.",
    sections: [], news: newsArticles, cta
  },
  "/faq/": {
    title: "Enterprise connectivity FAQ | Vialterna",
    description: "Frequently asked questions about enterprise connectivity, SD-WAN, backup, SIMs, IoT and Vialterna managed services.",
    kind: "faq", eyebrow: "FAQ",
    h1: "Frequently asked questions about enterprise connectivity",
    intro: "Essential information about how Vialterna designs, deploys and operates resilient connectivity for distributed companies.",
    faq: faqContent, cta
  },
  "/contacto/": {
    title: "Contact Vialterna | Connectivity assessment",
    description: "Contact Vialterna for an assessment of connectivity, infrastructure, distributed networks, Edge Solutions, backup and IoT.",
    kind: "contact", eyebrow: "Contact",
    h1: "Ready to close the gap?",
    intro: "Stop managing carriers. Start managing your business.",
    sections: [
      { h2: "Connectivity solution design", text: "Phone / WhatsApp: +52 55 8062 6884" },
      { h2: "Send us your infrastructure requirements", text: "Customer service: atencionaclientes@vialterna.com" },
      { h2: "Support and customer service", text: "Customer service: atencionaclientes@vialterna.com. Support: soporte@vialterna.com" }
    ], cta
  },
  "/aviso-de-privacidad/": {
    kind: "privacy",
    title: "Comprehensive Privacy Notice | Vialterna",
    description: "Comprehensive Privacy Notice of Vialterna Comunicaciones.",
    eyebrow: "Legal",
    h1: "Comprehensive Privacy Notice",
    intro: "VIALTERNA COMUNICACIONES. RFC: VCO1012206A8. Last updated: June 16, 2026.",
    sections: privacySections
  }
};

export const visualCards = [
  [Wifi, "Always on by design", "Multi-network resilience eliminates single points of failure by combining fiber, cellular, satellite and other sources."],
  [ShieldCheck, "Proactive 24/7 management with full visibility", "Our NOC monitors every site in real time nationwide and acts before issues affect operations."],
  [Network, "Telecommunications as a Managed Service", "We audit telecommunications spend and expose redundant carriers, underperforming links and silent SLA leakage."]
];

export const metrics = [["24/7", "NOC monitoring"], ["SLA", "Reported availability"], ["Multi", "Carrier management"], ["Mexico", "Distributed operations"]];
export const workSteps = [["Assess", "We evaluate locations, coverage, risks and business requirements."], ["Design", "We define the best multi-carrier architecture for each site."], ["Deploy", "We coordinate carriers, equipment, installation and activation."], ["Operate", "We monitor, support and optimize the network."]];
export const sdWanFeatures = ["Multi-carrier", "LTE / 5G", "Satellite backup", "Automatic failover", "Link aggregation", "Centralized monitoring", "QoS", "Secure tunnels"];
export const iotFeatures = ["SIM lifecycle", "IoT connectivity", "Sensors", "Telemetry", "Remote assets", "Operational alerts"];
