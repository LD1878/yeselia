/**
 * English / Spanish dictionaries for UI chrome and key marketing copy.
 * Locale is selected client-side via LocaleProvider.
 */

import type { Locale } from "./types";

export const defaultLocale: Locale = "en";
export const locales: Locale[] = ["en", "es"];

const en = {
  // Nav
  "nav.properties": "Properties",
  "nav.buy": "Buy",
  "nav.sell": "Sell",
  "nav.about": "About",
  "nav.insights": "Insights",
  "nav.contact": "Contact",
  "nav.enquire": "Enquire",
  "nav.menu": "Menu",
  "nav.close": "Close menu",
  "nav.open": "Open menu",
  "nav.primary": "Primary",
  "nav.mobile": "Mobile primary",
  "nav.skip": "Skip to content",

  // CTAs
  "cta.buy": "Buy",
  "cta.sell": "Sell",
  "cta.viewCollection": "View collection",
  "cta.viewAll": "View all",
  "cta.requestViewing": "Request private viewing",
  "cta.contact": "Get in touch",
  "cta.valuation": "Request a confidential valuation",
  "cta.browseCollection": "Browse the collection",
  "cta.buyWith": "Buy with Yeselia",
  "cta.sellWith": "Sell with Yeselia",
  "cta.sendEnquiry": "Send enquiry",
  "cta.sendMessage": "Send message",
  "cta.submitEnquiry": "Submit enquiry",
  "cta.requestValuation": "Request valuation",
  "cta.sending": "Sending…",
  "cta.fullCollection": "Full collection",
  "cta.readInsights": "Read insights",
  "cta.allInsights": "All insights",
  "cta.home": "Home",
  "cta.aboutPractice": "About the practice",

  // Footer
  "footer.rights": "All rights reserved.",
  "footer.tagline":
    "Lawyer-led luxury real estate on the Costa del Sol. Serious properties. Serious buyers. Complete legal certainty",
  "footer.explore": "Explore",
  "footer.company": "Company",
  "footer.legal": "Legal",
  "footer.privacy": "Privacy",
  "footer.legalNotice": "Legal notice",
  "footer.collection": "Collection",
  "footer.region": "Costa del Sol · Spain",

  // Language
  "lang.en": "EN",
  "lang.es": "ES",
  "lang.label": "Language",
  "lang.switchToEn": "Switch to English",
  "lang.switchToEs": "Cambiar a español",

  // Home
  "home.hero.eyebrow": "Costa del Sol",
  "home.hero.title1": "Serious properties.",
  "home.hero.title2": "Serious buyers.",
  "home.hero.title3": "Complete legal certainty",
  "home.hero.lead":
    "Lawyer-led luxury real estate. Where dual qualification meets the Costa del Sol’s finest residences.",
  "home.pos.eyebrow": "Positioning",
  "home.pos.title": "A different standard of representation",
  "home.pos.p1":
    "Yeselia & Co. is built on a simple conviction: high-value property transactions deserve the same rigour as high-stakes legal work. Our founder is both a qualified lawyer and a real estate specialist. That dual expertise is not a marketing line. It is how every mandate is conducted.",
  "home.pos.p2":
    "We work with international buyers who require certainty, and with owners who require discretion. The collection is curated. The process is calm. The legal foundation is non-negotiable.",
  "home.collection.eyebrow": "Collection",
  "home.collection.title": "Selected residences",
  "home.collection.desc":
    "A measured selection of properties currently available through Yeselia & Co.",
  "home.cred.eyebrow": "Credentials",
  "home.cred.title": "Legal certainty at the centre",
  "home.cred.desc":
    "Property advice without legal depth is incomplete. Legal advice without market knowledge is abstract. We provide both.",
  "home.cred.1.title": "Qualified lawyer",
  "home.cred.1.text":
    "Legal due diligence is not outsourced as an afterthought. It is integral from the first conversation.",
  "home.cred.2.title": "Real estate specialist",
  "home.cred.2.text":
    "Market knowledge across Marbella, Benahavís, Estepona and the wider Costa del Sol.",
  "home.cred.3.title": "Private client standard",
  "home.cred.3.text":
    "Discrete handling of sensitive mandates. Pre-qualified introductions. No public spectacle.",
  "home.process.eyebrow": "Process",
  "home.process.title": "Clear steps. No theatre.",
  "home.process.desc":
    "Whether you are acquiring or disposing, the sequence is deliberate and transparent.",
  "home.process.1.title": "Brief",
  "home.process.1.text":
    "We begin with a precise conversation: requirements, timeline, legal context and discretion preferences.",
  "home.process.2.title": "Selection",
  "home.process.2.text":
    "Only properties that meet your criteria are presented. No filler. No time-wasting viewings.",
  "home.process.3.title": "Diligence",
  "home.process.3.text":
    "Title, planning, licences and tax implications are reviewed before commitment deepens.",
  "home.process.4.title": "Completion",
  "home.process.4.text":
    "Negotiation, contract and notary completion are coordinated as one continuous process.",
  "home.cta.title": "Begin a private conversation",
  "home.cta.desc":
    "Tell us whether you wish to buy or sell. We respond with clarity, not pressure.",

  // Buy
  "buy.hero.eyebrow": "Acquire",
  "buy.hero.title": "Buy with Yeselia",
  "buy.hero.desc":
    "Representation for international and domestic buyers who require more than a viewing schedule. Dual-qualified advice from first conversation to notary.",
  "buy.diff.eyebrow": "Difference",
  "buy.diff.title": "Why work with a lawyer-agent",
  "buy.diff.p1":
    "On the Costa del Sol, beautiful presentation is common. Clean legal status is not always. When your adviser is also a qualified lawyer, risk is identified earlier, documents are read with a different eye, and commercial decisions rest on solid ground.",
  "buy.diff.p2":
    "You are not managing parallel relationships with an agent and a separate legal team who meet only at crisis points. One practice. One standard. One accountable process.",
  "buy.process.eyebrow": "Process",
  "buy.process.title": "How an acquisition proceeds",
  "buy.process.desc":
    "A clear sequence designed for high-net-worth buyers who value time and certainty.",
  "buy.guides.eyebrow": "Guides",
  "buy.guides.title": "Legal and practical resources",
  "buy.guides.desc":
    "Cornerstone reading for serious buyers. Written to inform, not to sell.",
  "buy.enquire.eyebrow": "Enquire",
  "buy.enquire.title": "Begin your search",
  "buy.enquire.desc":
    "Share your requirements. We respond with a clear view of what is realistic, available and secure.",

  // Sell
  "sell.hero.eyebrow": "Dispose",
  "sell.hero.title": "Sell with Yeselia",
  "sell.hero.desc":
    "For owners who value privacy, preparation and a buyer pool that has already been filtered. Your property is not a public spectacle.",
  "sell.val.eyebrow": "Valuation",
  "sell.val.title": "Request a confidential valuation",
  "sell.val.desc":
    "Tell us about your property. We treat every enquiry as private. There is no listing, no marketing and no third-party disclosure without your written instruction.",
  "sell.val.1": "No obligation to list",
  "sell.val.2": "Pre-qualified buyer network",
  "sell.val.3": "Lawyer-led preparation of the sale file",
  "sell.val.4": "Discretion as standard",
  "sell.process.eyebrow": "Process",
  "sell.process.title": "A measured sale timeline",
  "sell.process.desc":
    "Structure reduces risk. Preparation accelerates serious buyers and protects your negotiating position.",
  "sell.card1.title": "Pre-qualified buyers",
  "sell.card1.text":
    "Open portals attract volume. Volume attracts noise. We prioritise buyers who have demonstrated financial capacity and genuine intent. Your time, privacy and security are protected as a matter of process, not preference.",
  "sell.card2.title": "Privacy and discretion",
  "sell.card2.text":
    "Some mandates require complete confidentiality. Others benefit from selective exposure. We structure marketing to match your risk profile and personal circumstances. Nothing is published without instruction.",

  // About
  "about.hero.eyebrow": "Practice",
  "about.hero.title": "About Yeselia & Co.",
  "about.hero.desc":
    "A dual-qualified practice where legal rigour and property expertise are never separated.",
  "about.founder.eyebrow": "Founder",
  "about.founder.title": "Dual qualification",
  "about.phil.eyebrow": "Philosophy",
  "about.phil.title": "How we work",
  "about.phil.desc": "Principles that govern every mandate.",
  "about.cred.eyebrow": "Credentials",
  "about.cred.title": "Professional foundation",

  // Contact
  "contact.hero.eyebrow": "Contact",
  "contact.hero.title": "Get in touch",
  "contact.hero.desc":
    "Enquiries are handled with discretion. Please share as much context as you wish. We respond typically within one business day.",
  "contact.direct.eyebrow": "Direct",
  "contact.direct.title": "How to reach us",
  "contact.email": "Email",
  "contact.telephone": "Telephone",
  "contact.office": "Office",
  "contact.hours": "Hours",
  "contact.hours.days": "Monday to Friday",
  "contact.hours.time": "10:00 - 18:00 CET",
  "contact.hours.note":
    "Private appointments outside these hours by arrangement.",
  "contact.form.title": "Send a message",
  "contact.form.required": "All fields marked with a purple mark are required.",

  // Properties
  "properties.hero.eyebrow": "Collection",
  "properties.hero.title": "Properties",
  "properties.hero.desc":
    "A curated selection of residences across Marbella, Benahavís, Estepona and the wider Costa del Sol. Each property is presented with the essential facts only.",
  "properties.filter.location": "Location",
  "properties.filter.type": "Type",
  "properties.filter.bedrooms": "Bedrooms",
  "properties.filter.price": "Price",
  "properties.filter.allLocations": "All locations",
  "properties.filter.allTypes": "All types",
  "properties.filter.any": "Any",
  "properties.filter.anyPrice": "Any price",
  "properties.filter.reset": "Reset filters",
  "properties.filter.count": "{n} properties",
  "properties.filter.countOne": "{n} property",
  "properties.empty.title": "No properties match",
  "properties.empty.text":
    "Adjust your filters, or contact us for a confidential search tailored to your brief.",
  "properties.bed": "bed",
  "properties.underOffer": "Under Offer",
  "properties.sold": "Sold",
  "properties.keyFacts": "Key facts",
  "properties.description": "Description",
  "properties.location": "Location",
  "properties.features": "Features",
  "properties.related": "Related properties",
  "properties.related.eyebrow": "Further",
  "properties.viewing.title": "Request private viewing",
  "properties.viewing.desc":
    "Viewings are by appointment and limited to serious enquiries.",
  "properties.viewing.submit": "Request viewing",
  "properties.legalNote":
    "All acquisitions through Yeselia & Co. are supported by lawyer-led due diligence. Legal review of title, planning status and contractual terms is integral to the process, not an optional extra.",

  // Insights
  "insights.hero.eyebrow": "Perspectives",
  "insights.hero.title": "Insights",
  "insights.hero.desc":
    "Guides and commentary for serious buyers and owners. Written with legal precision and market clarity.",
  "insights.minRead": "min",
  "insights.minReadFull": "min read",
  "insights.disclaimer":
    "This guide is for general information. It is not a substitute for advice on a specific transaction. For counsel tailored to your circumstances,",
  "insights.disclaimerLink": "contact Yeselia & Co.",
  "insights.cta.title": "Discuss your requirements",
  "insights.cta.desc":
    "Whether you are buying or selling, we begin with a private conversation.",
  "insights.related.eyebrow": "Collection",
  "insights.related.title": "Related properties",

  // Forms
  "form.name": "Full name",
  "form.email": "Email",
  "form.phone": "Telephone",
  "form.interest": "Interest",
  "form.property": "Property",
  "form.message": "Message",
  "form.message.hint":
    "Share as much context as you wish. All enquiries are treated in confidence.",
  "form.message.placeholder": "How may we assist you?",
  "form.name.placeholder": "Your name",
  "form.email.placeholder": "you@example.com",
  "form.phone.placeholder": "+00 000 000 000",
  "form.interest.general": "General enquiry",
  "form.interest.buy": "Buying",
  "form.interest.sell": "Selling",
  "form.interest.viewing": "Private viewing",
  "form.privacy":
    "By submitting, you agree to be contacted regarding this enquiry. We never share your details.",
  "form.thanks.title": "Thank you",
  "form.thanks.text":
    "Your message has been received. A member of the Yeselia & Co. team will respond with care and discretion, typically within one business day.",
  "form.val.thanks.title": "Valuation request received",
  "form.val.thanks.text":
    "Thank you. Your request is confidential. We will be in touch shortly to arrange a private discussion, with no obligation and no public listing unless you instruct us.",
  "form.val.location": "Property location",
  "form.val.location.placeholder": "e.g. Sierra Blanca, Marbella",
  "form.val.type": "Property type",
  "form.val.size": "Approximate size",
  "form.val.size.placeholder": "Built m² / plot m²",
  "form.val.notes": "Confidential notes",
  "form.val.notes.hint":
    "Optional. Share any context that would help us prepare.",
  "form.val.privacy":
    "Your enquiry is private. We do not list or promote your property without written instruction.",

  // 404
  "notFound.code": "404",
  "notFound.title": "Page not found",
  "notFound.text":
    "The page you requested does not exist or has been moved. Return home or browse the collection.",

  // Fact labels
  "fact.price": "Price",
  "fact.type": "Type",
  "fact.location": "Location",
  "fact.area": "Area",
  "fact.bedrooms": "Bedrooms",
  "fact.bathrooms": "Bathrooms",
  "fact.built": "Built",
  "fact.plot": "Plot",
  "fact.year": "Year",
  "fact.status": "Status",
} as const;

export type DictionaryKey = keyof typeof en;

const es: Record<DictionaryKey, string> = {
  "nav.properties": "Propiedades",
  "nav.buy": "Comprar",
  "nav.sell": "Vender",
  "nav.about": "Nosotros",
  "nav.insights": "Perspectivas",
  "nav.contact": "Contacto",
  "nav.enquire": "Consultar",
  "nav.menu": "Menú",
  "nav.close": "Cerrar menú",
  "nav.open": "Abrir menú",
  "nav.primary": "Principal",
  "nav.mobile": "Navegación móvil",
  "nav.skip": "Saltar al contenido",

  "cta.buy": "Comprar",
  "cta.sell": "Vender",
  "cta.viewCollection": "Ver colección",
  "cta.viewAll": "Ver todas",
  "cta.requestViewing": "Solicitar visita privada",
  "cta.contact": "Contactar",
  "cta.valuation": "Solicitar valoración confidencial",
  "cta.browseCollection": "Explorar la colección",
  "cta.buyWith": "Comprar con Yeselia",
  "cta.sellWith": "Vender con Yeselia",
  "cta.sendEnquiry": "Enviar consulta",
  "cta.sendMessage": "Enviar mensaje",
  "cta.submitEnquiry": "Enviar consulta",
  "cta.requestValuation": "Solicitar valoración",
  "cta.sending": "Enviando…",
  "cta.fullCollection": "Colección completa",
  "cta.readInsights": "Leer perspectivas",
  "cta.allInsights": "Todas las perspectivas",
  "cta.home": "Inicio",
  "cta.aboutPractice": "Sobre el despacho",

  "footer.rights": "Todos los derechos reservados.",
  "footer.tagline":
    "Inmobiliaria de lujo dirigida por abogados en la Costa del Sol. Propiedades serias. Compradores serios. Certeza legal completa",
  "footer.explore": "Explorar",
  "footer.company": "Empresa",
  "footer.legal": "Legal",
  "footer.privacy": "Privacidad",
  "footer.legalNotice": "Aviso legal",
  "footer.collection": "Colección",
  "footer.region": "Costa del Sol · España",

  "lang.en": "EN",
  "lang.es": "ES",
  "lang.label": "Idioma",
  "lang.switchToEn": "Switch to English",
  "lang.switchToEs": "Cambiar a español",

  "home.hero.eyebrow": "Costa del Sol",
  "home.hero.title1": "Propiedades serias.",
  "home.hero.title2": "Compradores serios.",
  "home.hero.title3": "Certeza legal completa",
  "home.hero.lead":
    "Inmobiliaria de lujo dirigida por abogados. Donde la doble cualificación se une a las mejores residencias de la Costa del Sol.",
  "home.pos.eyebrow": "Posicionamiento",
  "home.pos.title": "Un estándar distinto de representación",
  "home.pos.p1":
    "Yeselia & Co. se basa en una convicción sencilla: las operaciones inmobiliarias de alto valor merecen el mismo rigor que el trabajo jurídico de alto riesgo. Nuestra fundadora es abogada cualificada y especialista inmobiliaria. Esa doble expertise no es un eslogan. Es la forma en que se gestiona cada mandato.",
  "home.pos.p2":
    "Trabajamos con compradores internacionales que exigen certeza, y con propietarios que exigen discreción. La colección es curada. El proceso es sereno. El fundamento legal es innegociable.",
  "home.collection.eyebrow": "Colección",
  "home.collection.title": "Residencias seleccionadas",
  "home.collection.desc":
    "Una selección medida de propiedades disponibles actualmente a través de Yeselia & Co.",
  "home.cred.eyebrow": "Credenciales",
  "home.cred.title": "La certeza legal en el centro",
  "home.cred.desc":
    "El asesoramiento inmobiliario sin profundidad jurídica es incompleto. El asesoramiento jurídico sin conocimiento de mercado es abstracto. Ofrecemos ambos.",
  "home.cred.1.title": "Abogada cualificada",
  "home.cred.1.text":
    "La diligencia debida jurídica no se subcontrata como un añadido. Es parte integral desde la primera conversación.",
  "home.cred.2.title": "Especialista inmobiliaria",
  "home.cred.2.text":
    "Conocimiento del mercado en Marbella, Benahavís, Estepona y el resto de la Costa del Sol.",
  "home.cred.3.title": "Estándar de cliente privado",
  "home.cred.3.text":
    "Gestión discreta de mandatos sensibles. Presentaciones precalificadas. Sin espectáculo público.",
  "home.process.eyebrow": "Proceso",
  "home.process.title": "Pasos claros. Sin teatro.",
  "home.process.desc":
    "Tanto si adquiere como si vende, la secuencia es deliberada y transparente.",
  "home.process.1.title": "Briefing",
  "home.process.1.text":
    "Comenzamos con una conversación precisa: requisitos, plazos, contexto legal y preferencias de discreción.",
  "home.process.2.title": "Selección",
  "home.process.2.text":
    "Solo se presentan propiedades que cumplen sus criterios. Sin relleno. Sin visitas que pierden el tiempo.",
  "home.process.3.title": "Diligencia",
  "home.process.3.text":
    "Título, urbanismo, licencias e implicaciones fiscales se revisan antes de profundizar el compromiso.",
  "home.process.4.title": "Cierre",
  "home.process.4.text":
    "Negociación, contrato y firma notarial se coordinan como un proceso continuo.",
  "home.cta.title": "Inicie una conversación privada",
  "home.cta.desc":
    "Indíquenos si desea comprar o vender. Respondemos con claridad, no con presión.",

  "buy.hero.eyebrow": "Adquirir",
  "buy.hero.title": "Comprar con Yeselia",
  "buy.hero.desc":
    "Representación para compradores internacionales y nacionales que necesitan más que un calendario de visitas. Asesoramiento de doble cualificación desde la primera conversación hasta el notario.",
  "buy.diff.eyebrow": "Diferencia",
  "buy.diff.title": "Por qué trabajar con un abogado-agente",
  "buy.diff.p1":
    "En la Costa del Sol, la bella presentación es habitual. El estatus legal limpio no siempre. Cuando su asesor es también abogado cualificado, el riesgo se identifica antes, los documentos se leen con otra mirada y las decisiones comerciales se asientan en terreno sólido.",
  "buy.diff.p2":
    "No gestiona relaciones paralelas con un agente y un equipo jurídico que solo se encuentran en momentos de crisis. Un despacho. Un estándar. Un proceso con responsabilidad clara.",
  "buy.process.eyebrow": "Proceso",
  "buy.process.title": "Cómo se desarrolla una adquisición",
  "buy.process.desc":
    "Una secuencia clara diseñada para compradores de alto patrimonio que valoran el tiempo y la certeza.",
  "buy.guides.eyebrow": "Guías",
  "buy.guides.title": "Recursos legales y prácticos",
  "buy.guides.desc":
    "Lectura esencial para compradores serios. Escrita para informar, no para vender.",
  "buy.enquire.eyebrow": "Consulta",
  "buy.enquire.title": "Inicie su búsqueda",
  "buy.enquire.desc":
    "Comparta sus requisitos. Respondemos con una visión clara de lo realista, disponible y seguro.",

  "sell.hero.eyebrow": "Vender",
  "sell.hero.title": "Vender con Yeselia",
  "sell.hero.desc":
    "Para propietarios que valoran la privacidad, la preparación y un grupo de compradores ya filtrado. Su propiedad no es un espectáculo público.",
  "sell.val.eyebrow": "Valoración",
  "sell.val.title": "Solicite una valoración confidencial",
  "sell.val.desc":
    "Cuéntenos sobre su propiedad. Tratamos cada consulta como privada. No hay listado, marketing ni divulgación a terceros sin su instrucción escrita.",
  "sell.val.1": "Sin obligación de listar",
  "sell.val.2": "Red de compradores precalificados",
  "sell.val.3": "Preparación jurídica del expediente de venta",
  "sell.val.4": "Discreción como estándar",
  "sell.process.eyebrow": "Proceso",
  "sell.process.title": "Un calendario de venta medido",
  "sell.process.desc":
    "La estructura reduce el riesgo. La preparación acelera a compradores serios y protege su posición negociadora.",
  "sell.card1.title": "Compradores precalificados",
  "sell.card1.text":
    "Los portales abiertos atraen volumen. El volumen atrae ruido. Priorizamos compradores con capacidad financiera e intención demostrada. Su tiempo, privacidad y seguridad se protegen como proceso, no como preferencia.",
  "sell.card2.title": "Privacidad y discreción",
  "sell.card2.text":
    "Algunos mandatos requieren confidencialidad total. Otros se benefician de exposición selectiva. Estructuramos el marketing según su perfil de riesgo y circunstancias. Nada se publica sin instrucción.",

  "about.hero.eyebrow": "Despacho",
  "about.hero.title": "Sobre Yeselia & Co.",
  "about.hero.desc":
    "Un despacho de doble cualificación donde el rigor jurídico y la expertise inmobiliaria nunca se separan.",
  "about.founder.eyebrow": "Fundadora",
  "about.founder.title": "Doble cualificación",
  "about.phil.eyebrow": "Filosofía",
  "about.phil.title": "Cómo trabajamos",
  "about.phil.desc": "Principios que rigen cada mandato.",
  "about.cred.eyebrow": "Credenciales",
  "about.cred.title": "Fundamento profesional",

  "contact.hero.eyebrow": "Contacto",
  "contact.hero.title": "Póngase en contacto",
  "contact.hero.desc":
    "Las consultas se gestionan con discreción. Comparta el contexto que desee. Respondemos normalmente en un día laborable.",
  "contact.direct.eyebrow": "Directo",
  "contact.direct.title": "Cómo contactarnos",
  "contact.email": "Correo",
  "contact.telephone": "Teléfono",
  "contact.office": "Oficina",
  "contact.hours": "Horario",
  "contact.hours.days": "Lunes a viernes",
  "contact.hours.time": "10:00 - 18:00 CET",
  "contact.hours.note":
    "Citas privadas fuera de este horario bajo petición.",
  "contact.form.title": "Enviar un mensaje",
  "contact.form.required":
    "Los campos marcados con un punto morado son obligatorios.",

  "properties.hero.eyebrow": "Colección",
  "properties.hero.title": "Propiedades",
  "properties.hero.desc":
    "Una selección curada de residencias en Marbella, Benahavís, Estepona y el resto de la Costa del Sol. Cada propiedad se presenta solo con los datos esenciales.",
  "properties.filter.location": "Ubicación",
  "properties.filter.type": "Tipo",
  "properties.filter.bedrooms": "Dormitorios",
  "properties.filter.price": "Precio",
  "properties.filter.allLocations": "Todas las ubicaciones",
  "properties.filter.allTypes": "Todos los tipos",
  "properties.filter.any": "Cualquiera",
  "properties.filter.anyPrice": "Cualquier precio",
  "properties.filter.reset": "Restablecer filtros",
  "properties.filter.count": "{n} propiedades",
  "properties.filter.countOne": "{n} propiedad",
  "properties.empty.title": "Ninguna propiedad coincide",
  "properties.empty.text":
    "Ajuste los filtros, o contáctenos para una búsqueda confidencial adaptada a su brief.",
  "properties.bed": "hab",
  "properties.underOffer": "En oferta",
  "properties.sold": "Vendida",
  "properties.keyFacts": "Datos clave",
  "properties.description": "Descripción",
  "properties.location": "Ubicación",
  "properties.features": "Características",
  "properties.related": "Propiedades relacionadas",
  "properties.related.eyebrow": "Más",
  "properties.viewing.title": "Solicitar visita privada",
  "properties.viewing.desc":
    "Las visitas son con cita y limitadas a consultas serias.",
  "properties.viewing.submit": "Solicitar visita",
  "properties.legalNote":
    "Todas las adquisiciones a través de Yeselia & Co. cuentan con diligencia debida dirigida por abogados. La revisión jurídica del título, el estatus urbanístico y los términos contractuales es parte integral del proceso, no un extra opcional.",

  "insights.hero.eyebrow": "Perspectivas",
  "insights.hero.title": "Perspectivas",
  "insights.hero.desc":
    "Guías y comentarios para compradores y propietarios serios. Escritos con precisión jurídica y claridad de mercado.",
  "insights.minRead": "min",
  "insights.minReadFull": "min de lectura",
  "insights.disclaimer":
    "Esta guía es información general. No sustituye el asesoramiento sobre una operación concreta. Para consejo adaptado a sus circunstancias,",
  "insights.disclaimerLink": "contacte con Yeselia & Co.",
  "insights.cta.title": "Hablemos de sus requisitos",
  "insights.cta.desc":
    "Tanto si compra como si vende, empezamos con una conversación privada.",
  "insights.related.eyebrow": "Colección",
  "insights.related.title": "Propiedades relacionadas",

  "form.name": "Nombre completo",
  "form.email": "Correo electrónico",
  "form.phone": "Teléfono",
  "form.interest": "Interés",
  "form.property": "Propiedad",
  "form.message": "Mensaje",
  "form.message.hint":
    "Comparta el contexto que desee. Todas las consultas se tratan con confidencialidad.",
  "form.message.placeholder": "¿En qué podemos ayudarle?",
  "form.name.placeholder": "Su nombre",
  "form.email.placeholder": "usted@ejemplo.com",
  "form.phone.placeholder": "+00 000 000 000",
  "form.interest.general": "Consulta general",
  "form.interest.buy": "Comprar",
  "form.interest.sell": "Vender",
  "form.interest.viewing": "Visita privada",
  "form.privacy":
    "Al enviar, acepta que le contactemos sobre esta consulta. Nunca compartimos sus datos.",
  "form.thanks.title": "Gracias",
  "form.thanks.text":
    "Su mensaje ha sido recibido. Un miembro del equipo de Yeselia & Co. responderá con cuidado y discreción, normalmente en un día laborable.",
  "form.val.thanks.title": "Solicitud de valoración recibida",
  "form.val.thanks.text":
    "Gracias. Su solicitud es confidencial. Nos pondremos en contacto en breve para una conversación privada, sin obligación y sin listado público salvo que nos lo indique.",
  "form.val.location": "Ubicación de la propiedad",
  "form.val.location.placeholder": "p. ej. Sierra Blanca, Marbella",
  "form.val.type": "Tipo de propiedad",
  "form.val.size": "Tamaño aproximado",
  "form.val.size.placeholder": "m² construidos / m² de parcela",
  "form.val.notes": "Notas confidenciales",
  "form.val.notes.hint":
    "Opcional. Comparta cualquier contexto que nos ayude a preparar.",
  "form.val.privacy":
    "Su consulta es privada. No listamos ni promocionamos su propiedad sin instrucción escrita.",

  "notFound.code": "404",
  "notFound.title": "Página no encontrada",
  "notFound.text":
    "La página solicitada no existe o se ha movido. Vuelva al inicio o explore la colección.",

  "fact.price": "Precio",
  "fact.type": "Tipo",
  "fact.location": "Ubicación",
  "fact.area": "Zona",
  "fact.bedrooms": "Dormitorios",
  "fact.bathrooms": "Baños",
  "fact.built": "Construido",
  "fact.plot": "Parcela",
  "fact.year": "Año",
  "fact.status": "Estado",
};

export function t(key: DictionaryKey, locale: Locale = defaultLocale): string {
  if (locale === "en") return en[key];
  return es[key] ?? en[key];
}

export function getDictionary(locale: Locale = defaultLocale) {
  return locale === "en" ? en : es;
}

/** Simple placeholder replace: tFormat("properties.filter.count", locale, { n: 3 }) */
export function tFormat(
  key: DictionaryKey,
  locale: Locale,
  vars: Record<string, string | number>,
): string {
  let str = t(key, locale);
  for (const [k, v] of Object.entries(vars)) {
    str = str.replace(`{${k}}`, String(v));
  }
  return str;
}
