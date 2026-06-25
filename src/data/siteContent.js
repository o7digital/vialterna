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
  { label: "Noticias", href: "/insights/" },
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

const legalDocuments = [
  { label: "Carta de derechos mínimos", href: "/legal/carta-derechos-minimos.pdf" },
  { label: "Registro de contrato adhesión a la PROFECO", href: "/legal/registro-contrato-adhesion-profeco.pdf" },
  { label: "Código de prácticas comerciales", href: "/legal/vialterna-codigo-practicas-comerciales.pdf" },
  { label: "Colaboración en materia de seguridad y justicia", href: "/legal/vialterna-colaboracion-seguridad-justicia.pdf" }
];

const privacySections = [
  {
    h2: "Área legal",
    paragraphs: [
      "Esta sección reúne los documentos legales publicados por Vialterna y los avisos de privacidad aplicables a clientes, usuarios de página web y usuarios de Vial Client."
    ],
    documents: legalDocuments
  },
  {
    h2: "Aviso de Privacidad Integral - Clientes y usuarios de página web",
    paragraphs: [
      "En cumplimiento con las disposiciones de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (“LFPD”), su Reglamento y el resto de las disposiciones normativas aplicables al tratamiento de datos personales, ponemos a su disposición el presente Aviso de Privacidad Integral, para informarle sobre los términos bajo los cuales trataremos sus datos personales, identificando a la entidad responsable de su información; las finalidades o acciones que motivan la obtención, uso y custodia de sus datos personales; los terceros a quienes se transferirán o se podrán transferir sus datos personales; los mecanismos para que pueda ejercer sus derechos, entre otra información que le permitirá tomar decisiones informadas sobre el uso de sus datos personales."
    ]
  },
  {
    h2: "Identidad y domicilio del Responsable",
    paragraphs: [
      "Vialterna Comunicaciones, S.A. de C.V. (“Responsable”), es el responsable de sus datos personales. Para todos los casos, el Responsable señala como domicilio para oír y recibir notificaciones, el ubicado en Montes Pirineos 720-B Lomas de Chapultepec, Miguel Hidalgo, C.P. 11000, Ciudad de México, México."
    ]
  },
  {
    h2: "Datos personales que serán tratados por el Responsable",
    paragraphs: ["Para cumplir con las finalidades descritas en este Aviso de Privacidad, el Responsable tratará las siguientes categorías de datos personales:"],
    bullets: [
      "Datos identificativos y de contacto.",
      "Datos patrimoniales y/o financieros.",
      "Datos de navegación, dispositivos y geolocalización."
    ]
  },
  {
    h2: "Tratamiento de datos personales sensibles",
    paragraphs: ["Para el cumplimiento de las finalidades establecidas en este Aviso de Privacidad, el Responsable no recaba datos personales sensibles."]
  },
  {
    h2: "Datos personales de terceros",
    paragraphs: [
      "Si Usted entrega al Responsable datos personales de terceros, por ejemplo familiares, para el cumplimiento de finalidades identificadas en el presente Aviso de Privacidad, deberá informarles sobre la existencia del tratamiento de sus datos personales y el contenido de este Aviso de Privacidad.",
      "Si proporciona datos personales de terceros manifiesta con su entrega que cuenta previamente con el consentimiento de sus titulares para proporcionar su información al Responsable y que los mismos son correctos y completos."
    ]
  },
  {
    h2: "Datos personales de menores de edad",
    paragraphs: [
      "Para las finalidades establecidas en el presente Aviso de Privacidad, el Responsable no recaba directamente datos personales de menores de edad a través de formularios, cuestionarios, ni a través de su página web y/o aplicación móvil.",
      "Si cualquier titular de datos personales fuera menor de edad en el momento de proporcionar su información al Responsable, este considerará que dicho titular cuenta con la autorización de sus padres o tutores para hacerlo y que ha informado a ellos de la finalidad de entrega de sus datos, salvo prueba o declaración en contrario.",
      "Los padres y/o tutores podrán ejercer en todo momento los Derechos ARCO en nombre de sus hijos o tutelados, o bien, revocar el consentimiento para el tratamiento de los datos personales que hubiesen proporcionado al Responsable para las finalidades señaladas, en aquellos supuestos que la legislación vigente así lo permita."
    ]
  },
  {
    h2: "Finalidades del tratamiento de datos personales",
    paragraphs: ["El Responsable podrá tratar sus datos personales para dos tipos de finalidades, primarias y secundarias. Finalidades primarias:"],
    bullets: [
      "Informar a los titulares de datos personales sobre los servicios comercializados por el Responsable, cuando estos así lo solicitan. La información proporcionada podrá incluir modalidades y precios de nuestros servicios para su contratación online o de forma personal.",
      "Facilitar la contratación de los servicios ofrecidos por el Responsable, a través de medios electrónicos.",
      "Instalación de equipo en ubicaciones indicadas por el Cliente.",
      "Procesamiento electrónico de pagos por la adquisición, entrega y/o instalación de equipos.",
      "Facturación de los servicios proporcionados por el Responsable.",
      "Gestión, control y administración contable, administrativa y fiscal de nuestros clientes.",
      "Atención a través de medios electrónicos.",
      "Estadística y registro histórico de navegación en la página web."
    ]
  },
  {
    h2: "Finalidades secundarias",
    paragraphs: ["El Responsable no utilizará sus datos personales para finalidades secundarias."]
  },
  {
    h2: "Transferencias de datos personales",
    paragraphs: [
      "Sus datos personales podrán ser transferidos dentro de los Estados Unidos Mexicanos (“México”) o hacia el extranjero, a las siguientes categorías de destinatarios y para las finalidades identificadas:"
    ],
    bullets: [
      "Organismos públicos; administraciones públicas federales, estatales y/o municipales; comisiones; institutos y/o entidades reguladoras, para el cumplimiento de la normativa sobre seguridad pública, así como para el cumplimiento de requerimientos judiciales o administrativos emitidos por autoridades competentes.",
      "Prestadores de servicios, para obtener servicios con finalidades de resguardo centralizado de la información; control de altas y bajas; modificaciones sobre el alcance de los servicios contratados; así como para la realización de análisis y estadísticas sobre nuestros clientes, con el objeto de evaluar, mejorar y diseñar nuevos servicios."
    ]
  },
  {
    h2: "Consentimiento para transferencias",
    paragraphs: [
      "La LFPD establece que las transferencias antes indicadas no requieren de su consentimiento para poder ser efectuadas, pero el Responsable sí está obligado a informar sobre ellas.",
      "Cualquier transferencia de sus datos personales que sí requiera de su consentimiento será informada previamente, a través de la comunicación y actualización de este Aviso de Privacidad y de forma previa a la realización de esa comunicación de datos."
    ]
  },
  {
    h2: "Mecanismos y procedimiento para el ejercicio de los Derechos ARCO",
    paragraphs: ["Los Derechos ARCO se refieren a los derechos de:"],
    bullets: [
      "Acceso: derecho de conocer qué datos personales tratamos sobre Usted, así como información relativa a las condiciones y generalidades del tratamiento.",
      "Rectificación: derecho de solicitar en todo momento, la rectificación de sus datos que resulten inexactos o incompletos.",
      "Cancelación: derecho a que cese el tratamiento de sus datos personales, a partir de un bloqueo y su posterior supresión.",
      "Oposición: derecho a oponerse, por causa legítima, al tratamiento de sus datos personales."
    ]
  },
  {
    h2: "Ejercicio de Derechos ARCO",
    paragraphs: [
      "Usted cuenta con los Derechos ARCO para tener control sobre sus datos personales, incluyendo su actualización, y cuando ello resulte procedente, su eliminación.",
      "Para ejercer cualquiera de los Derechos ARCO, Usted deberá presentar una solicitud dirigida a nuestro Departamento de Datos Personales, a través de cualquiera de los siguientes canales:"
    ],
    bullets: [
      "Enviando una solicitud al correo electrónico: protecciondedatos@vialterna.com.",
      "Enviando una solicitud debidamente firmada a la dirección: Montes Pirineos 720-B Lomas de Chapultepec, Miguel Hidalgo, C.P. 11000, Ciudad de México, México."
    ]
  },
  {
    h2: "Contenido de la solicitud ARCO",
    paragraphs: ["La solicitud deberá contener o estar acompañada de:"],
    bullets: [
      "Su nombre y domicilio completos, u otro medio para comunicar la respuesta a su solicitud.",
      "Copia de un documento que acredite su identidad y en su caso, la representación legal si alguien ejerce el derecho en su nombre. Podrá omitir este requisito si aporta información que lo acredite como empleado del Responsable y lo identifique de forma indubitable.",
      "Una descripción clara y precisa del Derecho ARCO que desea ejercer y de los datos personales relacionados con su solicitud.",
      "En su caso, cualquier otra información o documento que nos ayude a localizar sus datos personales."
    ]
  },
  {
    h2: "Plazos de respuesta ARCO",
    paragraphs: [
      "El Responsable responderá a su solicitud dentro de los 20 días hábiles siguientes a la fecha en que sea enviada y recibida. Si la solicitud resulta procedente, el Responsable la hará efectiva dentro de los 15 días hábiles siguientes a la fecha en que comunique la respuesta.",
      "En caso de que la información y/o documentación proporcionada en su solicitud resulten incompletas, erróneas y/o insuficientes, o bien, no se acompañen los documentos necesarios para acreditar su identidad o la representación legal correspondiente, el Responsable le solicitará la corrección y subsanación de las deficiencias para poder dar trámite a dicha solicitud. Usted contará con 10 días hábiles para atender el requerimiento y corrección de la solicitud; en caso contrario ésta se tendrá por no presentada.",
      "El uso de medios electrónicos para el ejercicio de los Derechos ARCO autoriza al Responsable para dar respuesta a la solicitud correspondiente a través del mismo medio, salvo que Usted indique otro medio de contacto en su solicitud, de forma clara y expresa.",
      "El derecho de cancelación no es absoluto. El Responsable debe conservar información para cumplir con diversas obligaciones legales y en tales casos es posible que el derecho de cancelación deba solicitarse ante la entidad que recibió sus datos personales."
    ]
  },
  {
    h2: "Revocación del consentimiento",
    paragraphs: [
      "En algunos casos, Usted puede revocar el consentimiento para el tratamiento de sus datos personales; sin embargo, esta revocación no puede tener efectos retroactivos, es decir, no puede afectar a situaciones, trámites o transferencias realizadas antes de la revocación de su consentimiento.",
      "Tampoco podrá revocarse en los casos en que dicha revocación suponga la imposibilidad de cumplir con obligaciones derivadas de una relación jurídica vigente entre Usted y el Responsable, o suponga el incumplimiento de disposiciones generales de orden público que establezcan la obligación de mantener el tratamiento de sus datos personales durante determinado período.",
      "Usted puede enviar una solicitud de revocación de consentimiento al correo electrónico protecciondedatos@vialterna.com, siguiendo las instrucciones aplicables al ejercicio de los Derechos ARCO."
    ]
  },
  {
    h2: "Limitaciones sobre el uso y divulgación de sus datos personales",
    paragraphs: [
      "Usted puede limitar el uso o divulgación de sus datos personales dirigiendo la solicitud correspondiente a nuestro Departamento de Datos Personales, siguiendo para tales efectos el procedimiento y las instrucciones aplicables al ejercicio de los Derechos ARCO.",
      "El Responsable cuenta con medios y procedimientos para asegurar la inclusión de algunos de sus datos personales en listados de exclusión propios, para evitar que sus datos sean divulgados. En tales casos, el Responsable otorgará a los titulares que soliciten su registro, la constancia de inscripción correspondiente."
    ]
  },
  {
    h2: "Medios automáticos para recabar datos personales",
    paragraphs: [
      "En nuestro sitio web usamos archivos conocidos como “cookies”, para facilitar la navegación y comunicación a través de la misma. Si Usted visita nuestro sitio web y/o envía información a través de este, las cookies que usamos nos permitirán recopilar, analizar y conservar información técnica relacionada con sus hábitos de navegación, el uso de dichos canales de comunicación y, en su caso, su posición geográfica.",
      "Usted puede deshabilitar la instalación de cookies en su navegador de internet. Si desea obtener información más detallada acerca de las cookies y la forma de evitar su instalación, recomendamos visitar el sitio www.allaboutcookies.org.",
      "También le informamos que, si desactiva la instalación de cookies o rechaza la recolección de su posición geográfica, es posible que Usted no pueda usar determinadas secciones o servicios del sitio web."
    ]
  },
  {
    h2: "Modificaciones al Aviso de Privacidad",
    paragraphs: [
      "El Responsable se reserva el derecho de modificar, actualizar, extender y/o de cualquier otra forma cambiar el contenido y alcance de este Aviso de Privacidad, en cualquier momento y bajo su completa discreción; en tales casos, el Responsable publicará dichos cambios en el sitio web https://vialterna.com/, sección “Avisos de Privacidad”.",
      "El Aviso de Privacidad que regule el tratamiento de sus datos personales será el que aparezca publicado en el sitio web https://vialterna.com/, sección “Avisos de Privacidad”."
    ]
  },
  {
    h2: "Contacto para dudas o solicitudes",
    paragraphs: [
      "Si tiene alguna duda o solicitud favor de dirigirse al correo: atencionautoridades@vialterna.com o protecciondedatos@vialterna.com."
    ]
  },
  {
    h2: "Aviso de Privacidad Integral Vial Client (Aplicación móvil)",
    paragraphs: [
      "En cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, su Reglamento y demás normativa aplicable, queremos informarte sobre cómo tratamos tus datos personales.",
      "A través de este Aviso de Privacidad Integral, te proporcionaremos información sobre quién es el Responsable de tus datos, para qué finalidades los recabamos, con quién podemos compartirlos y cómo puedes ejercer tus derechos. Esto te permitirá tomar decisiones informadas sobre el uso de tus datos personales."
    ]
  },
  {
    h2: "Responsable del tratamiento de datos en Vial Client",
    paragraphs: [
      "Vialterna Comunicaciones, S.A. de C.V. (en adelante el “Responsable” o “Vialterna”), es responsable de tus datos personales. En todos los casos, Vialterna señala como domicilio para oír y recibir notificaciones, el ubicado en Montes Pirineos 720-B Lomas de Chapultepec, Miguel Hidalgo, Código Postal 11000, Ciudad de México, México."
    ]
  },
  {
    h2: "Datos recabados por Vial Client",
    paragraphs: ["Con el fin de cumplir con las finalidades mencionadas en este Aviso de Privacidad, Vialterna tratará las siguientes categorías de datos personales:"],
    bullets: ["Datos de geolocalización."]
  },
  {
    h2: "Datos sensibles en Vial Client",
    paragraphs: ["Con el fin de cumplir con las finalidades enlistadas en este Aviso de Privacidad, Vialterna no solicitará ni tratará datos personales sensibles. Como usuario de Vialterna, te pedimos que no proporciones este tipo de información."]
  },
  {
    h2: "Finalidades primarias de Vial Client",
    paragraphs: ["Vialterna tratará tus datos personales para las siguientes finalidades:"],
    bullets: [
      "Monitorizar, vigilar y rastrear los dispositivos que se hayan vinculado a través de Vial Client en tiempo real.",
      "Recolectar y analizar el nivel de carga de la batería de los dispositivos mientras utilizan Vial Client.",
      "Atender y canalizar las solicitudes de ayuda o alertas de emergencia que se realicen a través de Vial Client."
    ]
  },
  {
    h2: "Finalidades secundarias de Vial Client",
    paragraphs: ["No existen."]
  },
  {
    h2: "Transferencias de datos en Vial Client",
    paragraphs: ["Tus datos personales podrán ser transferidos dentro de México o hacia el extranjero, a las siguientes categorías de destinatarios y para las finalidades identificadas:"],
    bullets: [
      "Usuarios con autorización para recibir notificaciones, con la finalidad de que estos apoyen a Vialterna a dar seguimiento a las alertas y solicitudes de ayuda o emergencia realizadas a través de Vial Client.",
      "Organismos públicos; administraciones públicas federales, estatales y/o municipales; comisiones; institutos y/o entidades reguladoras, con la finalidad de dar cumplimiento a obligaciones informativas, de transparencia y prevención de actividades ilícitas, así como para el cumplimiento de requerimientos judiciales o administrativos fundados y motivados por autoridades competentes."
    ]
  },
  {
    h2: "Derechos ARCO en Vial Client",
    paragraphs: [
      "La Ley regula los Derechos ARCO con que cuentas como titular de datos personales: Acceso, Rectificación, Cancelación y Oposición.",
      "Para ejercer cualquiera de los derechos ARCO, Usted deberá presentar una solicitud dirigida a nuestro Departamento de Datos Personales, a través del correo electrónico protecciondedatos@vialterna.com."
    ],
    bullets: [
      "Su nombre y domicilio completos, u otro medio para comunicar la respuesta a su solicitud.",
      "Copia de un documento que acredite su identidad y en su caso, la representación legal si alguien ejerce el derecho en su nombre.",
      "Una descripción clara y precisa del Derecho ARCO que desea ejercer y de los datos personales relacionados con su solicitud.",
      "En su caso, cualquier otra información o documento que nos ayude a localizar tus datos personales."
    ]
  },
  {
    h2: "Revocación, limitaciones y cambios de Vial Client",
    paragraphs: [
      "En algunos casos, puedes revocar el consentimiento para el tratamiento de tus datos personales; sin embargo, esta revocación no puede tener efectos retroactivos.",
      "Puedes limitar el uso o divulgación de tus datos personales realizando una solicitud a nuestro Departamento de Datos Personales, siguiendo el procedimiento aplicable al ejercicio de los Derechos ARCO.",
      "El presente Aviso de Privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales, de nuestras propias necesidades por los productos o servicios que ofrecemos, de nuestras prácticas de privacidad, de cambios en nuestro modelo de negocio o por otras causas.",
      "En caso de tener dudas o aclaraciones sobre el presente Aviso de Privacidad, puede contactar a nuestro Departamento de Datos Personales a través del correo electrónico protecciondedatos@vialterna.com.",
      "Fecha de última actualización: 30/08/2023."
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

const newsArticles = [
  {
    category: "Redes",
    date: "18-jun",
    readTime: "5 min",
    title: "Cómo diseñar conectividad resiliente para sitios distribuidos",
    excerpt: "Criterios prácticos para combinar operadores, tecnologías y rutas de respaldo sin depender de un solo enlace.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=82"
  },
  {
    category: "SD-WAN",
    date: "06-jun",
    readTime: "6 min",
    title: "Cuándo migrar de MPLS a una arquitectura SD-WAN multioperador",
    excerpt: "Señales operativas, riesgos y beneficios de pasar a una red flexible con failover y visibilidad centralizada.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=82"
  },
  {
    category: "IoT",
    date: "24-may",
    readTime: "4 min",
    title: "SIMs empresariales: control de consumo y ciclo de vida para flotas IoT",
    excerpt: "Buenas prácticas para administrar activaciones, alertas, planes y dispositivos conectados en operación nacional.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=82"
  },
  {
    category: "Respaldo",
    date: "09-may",
    readTime: "5 min",
    title: "Respaldo satelital y celular: cómo evitar un punto único de falla",
    excerpt: "Cuándo usar LTE, 5G o satélite LEO como rutas secundarias para sitios críticos y ubicaciones remotas.",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=1200&q=82"
  },
  {
    category: "Operación",
    date: "22-abr",
    readTime: "3 min",
    title: "Qué debe medir un NOC para proteger disponibilidad empresarial",
    excerpt: "Indicadores clave para anticipar degradaciones, incidentes y fallas antes de que afecten al negocio.",
    image: "https://images.unsplash.com/photo-1600267165477-6d4cc741b379?auto=format&fit=crop&w=1200&q=82"
  },
  {
    category: "Finanzas",
    date: "04-abr",
    readTime: "4 min",
    title: "El costo oculto de una tienda, sucursal o cajero desconectado",
    excerpt: "Cómo traducir downtime en impacto operativo y financiero para priorizar inversiones de conectividad.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=82"
  }
];

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
    heroImage: "/o7-meeting-room.webp",
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
    title: "Noticias de conectividad y redes empresariales | Vialterna",
    description: "Noticias y análisis de conectividad administrada, Soluciones Edge, redes SD-WAN, IoT, SIMs empresariales y continuidad operativa.",
    eyebrow: "Noticias",
    h1: "Noticias: análisis de conectividad, redes empresariales y soluciones Edge",
    intro: "Perspectivas técnicas sobre conectividad administrada, Soluciones Edge, redes SD-WAN, IoT, SIMs empresariales y continuidad operativa.",
    sections: [],
    news: newsArticles,
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
