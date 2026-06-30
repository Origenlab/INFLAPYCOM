// ============================================================
// INFLAPY — config/site.ts — Fuente Única de Verdad (SSoT)
// Cambia AQUÍ. Los componentes leen de aquí, nunca hardcodean.
// ============================================================

export const SITE = {
  brand: 'INFLAPY',
  name: 'Renta de Inflables CDMX',
  domain: 'inflapy.com',
  url: 'https://inflapy.com',
  tagline: 'Lunes a Domingo 8:00–20:00 · CDMX y Estado de México',
  description:
    'Renta de inflables para fiestas en CDMX y Estado de México. Castillos, toboganes y brincolines desde $800 MXN. Instalación incluida. 30 años de experiencia.',
  keywords:
    'renta de inflables CDMX, alquiler brincolines Ciudad de México, inflables para fiestas infantiles, renta castillos inflables Estado de México',
  ogImage: '/img/inflapy-og-image.jpg',
  themeColor: '#7830f8',
  locale: 'es-MX',
  /** Never show self-generated aggregateRating */
  allowSelfReviews: false,
};

export const CONTACT = {
  phone: '5539048634',
  phoneDisplay: '55 3904 8634',
  whatsapp: '525539048634',
  email: 'hola@inflapy.com',
  schedule: {
    display: 'Lun–Dom 8:00–20:00',
    days: 'Lunes a Domingo',
    hours: '8:00 AM – 8:00 PM',
  },
};

export const WA_MESSAGES = {
  cotizar: 'Hola INFLAPY, quiero información sobre renta de inflables para mi fiesta.',
  info: 'Hola INFLAPY, necesito información sobre sus inflables.',
  reservar: (producto: string) =>
    `Hola INFLAPY, me interesa rentar el inflable ${producto}. ¿Cuál es la disponibilidad?`,
};

// ── Keywords SEO (array ordenado kw1→kw3 — alimenta PageLayout automáticamente) ──
// kw1 (24) + " | " + kw2 (24) = 51 chars ≤60 → title: "Renta de inflables CDMX | castillos y brincolines"
export const KEYWORDS = [
  'renta de inflables CDMX',      // kw1 primaria
  'castillos y brincolines',      // kw2 producto
  'fiestas infantiles CDMX',     // kw3 intención (overflow → no aparece en title)
];

// ── Navegación (misma fuente para Header y SectionMenu) ──
export const NAV = [
  { label: 'Catálogo', href: '/#catalogo' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Proceso', href: '/#proceso' },
  { label: 'Reseñas', href: '/#testimonios' },
  { label: 'Cobertura', href: '/#cobertura' },
  { label: 'FAQ', href: '/#faq' },
];

export const SOCIAL = {
  facebook: 'https://www.facebook.com/inflapy',
  instagram: 'https://www.instagram.com/inflapy',
};

export const STATS = [
  { value: '30+', label: 'Años de experiencia' },
  { value: '10k+', label: 'Eventos realizados' },
  { value: '8', label: 'Modelos disponibles' },
  { value: '24h', label: 'Atención y soporte' },
];

export const COVERAGE = {
  cdmx: [
    'Álvaro Obregón', 'Azcapotzalco', 'Benito Juárez', 'Coyoacán',
    'Cuauhtémoc', 'Gustavo A. Madero', 'Iztapalapa', 'Miguel Hidalgo',
    'Tlalpan', 'Xochimilco',
  ],
  edomex: [
    'Atizapán de Zaragoza', 'Cuautitlán Izcalli', 'Ecatepec',
    'Huixquilucan', 'Naucalpan', 'Tlalnepantla', 'Tultitlán',
  ],
};

export const SERVICES = [
  {
    icon: 'truck',
    title: 'Instalación incluida',
    desc: 'Llegamos, montamos y desmontamos. Tú solo disfruta la fiesta sin preocupaciones logísticas.',
    tag: 'Sin costo extra',
  },
  {
    icon: 'shield',
    title: 'Desinfección certificada',
    desc: 'Cada inflable se limpia y desinfecta antes y después de cada evento con productos seguros para niños.',
    tag: 'Protocolo covid-safe',
  },
  {
    icon: 'eye',
    title: 'Supervisión en evento',
    desc: 'Nuestro equipo puede quedarse durante tu fiesta para garantizar la seguridad de los niños en todo momento.',
    tag: 'Opcional',
  },
  {
    icon: 'map-pin',
    title: 'Cobertura amplia',
    desc: 'Cubrimos toda la CDMX y la zona metropolitana del Estado de México sin costo adicional de traslado.',
    tag: 'CDMX + EdoMex',
  },
  {
    icon: 'clock',
    title: 'Renta flexible',
    desc: 'Desde unas horas hasta todo el día. Nos adaptamos al horario de tu evento sin restricciones.',
    tag: 'Desde 4 horas',
  },
  {
    icon: 'heart',
    title: '30 años de experiencia',
    desc: 'Desde 1993 llevando alegría a miles de familias. Somos la empresa más confiable de inflables en la zona.',
    tag: 'Desde 1993',
  },
];

export const PROCESS = [
  {
    step: '01',
    icon: 'message',
    title: 'Cotiza por WhatsApp',
    desc: 'Mándanos el modelo, fecha, colonia y horario. Respondemos en minutos.',
  },
  {
    step: '02',
    icon: 'calendar',
    title: 'Confirmamos tu fecha',
    desc: 'Separamos tu inflable con un anticipo. Tu fecha queda reservada.',
  },
  {
    step: '03',
    icon: 'truck',
    title: 'Llegamos y montamos',
    desc: 'El día del evento llegamos puntual, inflamos y verificamos la seguridad.',
  },
  {
    step: '04',
    icon: 'star',
    title: '¡Fiesta perfecta!',
    desc: 'Los niños brincan, tú disfrutas. Al terminar recogemos todo.',
  },
];

export const REVIEWS = [
  {
    author: 'Daniela M.',
    location: 'Coyoacán, CDMX',
    initials: 'DM',
    text: 'Los Dragones Rojos fueron el hit de la fiesta. Los niños no se querían bajar. El equipo llegó puntual y recogieron todo sin problemas. Ya los contraté para el próximo año.',
    stars: 5,
  },
  {
    author: 'Roberto G.',
    location: 'Naucalpan, EdoMex',
    initials: 'RG',
    text: 'El Mini Castillo fue perfecto para el cumpleaños de mi hija de 2 años. Muy seguro, limpio y los niños lo disfrutaron muchísimo. Excelente servicio y trato muy amable.',
    stars: 5,
  },
  {
    author: 'Fernanda L.',
    location: 'Miguel Hidalgo, CDMX',
    initials: 'FL',
    text: 'Renté el Circuito Extremo para 15 niños y quedaron agotados y felices. Súper recomendable. El precio es justo y la atención por WhatsApp fue muy rápida. ¡Volveré a contratar!',
    stars: 5,
  },
];

export const FAQ = [
  {
    q: '¿Cuánto tiempo antes debo reservar?',
    a: 'Recomendamos reservar con al menos 1 semana de anticipación, especialmente para fines de semana y temporada alta (mayo–agosto). Contáctanos y verificamos disponibilidad al instante.',
  },
  {
    q: '¿El precio incluye instalación y retiro?',
    a: 'Sí, todos nuestros precios incluyen traslado, instalación, operación durante el evento y retiro del equipo al finalizar. Sin costos ocultos.',
  },
  {
    q: '¿Necesito extensión de luz o generador?',
    a: 'El inflable necesita un contacto de 110V estándar. Si el evento es en jardín o espacio sin corriente, podemos coordinar un generador por un costo adicional.',
  },
  {
    q: '¿Cuál es el espacio mínimo necesario?',
    a: 'Depende del modelo. El Mini Castillo requiere 3×3 m y techo de 2.5 m (puede ser interior). Los modelos grandes necesitan espacios abiertos de hasta 6×5 m. Consúltanos con la medida de tu espacio.',
  },
  {
    q: '¿Los inflables están desinfectados?',
    a: 'Sí. Todos los inflables se lavan y desinfectan con productos seguros para niños antes y después de cada uso. Cumplimos con protocolos sanitarios estrictos.',
  },
  {
    q: '¿Tienen seguro o garantía de seguridad?',
    a: 'Nuestros inflables cuentan con materiales de lona resistente y válvulas de seguridad. Llevamos 30 años operando sin incidentes gracias a nuestro protocolo de revisión antes de cada evento.',
  },
];

// ============================================================
// CATÁLOGO DE PRODUCTOS
// ============================================================

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'chicos' | 'medianos' | 'grandes';
  categoryLabel: string;
  desc: string;
  descLong: string;
  price: number;
  priceNote: string;
  dimensions: string;
  capacity: string;
  ageRange: string;
  height?: string;
  badge?: string;
  badgeHot?: boolean;
  images: string[];
  ogImage: string;
  features: string[];
  ideal: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'mini-castillo',
    slug: 'inflables-chicos/mini-castillo',
    name: 'Mini Castillo',
    category: 'chicos',
    categoryLabel: 'Ideal para bebés',
    desc: 'Castillo inflable para bebés de 1 a 3 años. Paredes bajas y acolchadas para brincar con total seguridad. Compacto: cabe en interiores y jardines pequeños.',
    descLong: 'El Mini Castillo es el inflable diseñado especialmente para los más pequeños. Sus paredes acolchadas de baja altura y su superficie de brinco suave ofrecen seguridad total para bebés y niños de 1 a 3 años. Por su tamaño compacto de 2×2 m cabe en departamentos, salas y jardines pequeños, y llega desinfectado con instalación incluida en CDMX y Estado de México. La opción ideal para celebrar el primer, segundo o tercer cumpleaños.',
    price: 800,
    priceNote: 'por evento (6–8 horas)',
    dimensions: '2×2 m',
    capacity: '4–5 bebés',
    ageRange: '1–3 años',
    badge: 'Bebés',
    images: [
      '/img/mini-castillo/castillo-inflable-mini-cdmx-1.avif',
      '/img/mini-castillo/castillo-inflable-mini-cdmx-2.avif',
      '/img/mini-castillo/castillo-inflable-mini-cdmx-3.avif',
      '/img/mini-castillo/castillo-inflable-mini-cdmx-4.avif',
      '/img/mini-castillo/castillo-inflable-mini-cdmx-5.avif',
    ],
    ogImage: '/img/mini-castillo/castillo-inflable-mini-cdmx-1.avif',
    features: ['Paredes acolchadas de baja altura', 'Válvula y costuras de seguridad', 'Lona premium lavable y desinfectada', 'Compacto: cabe en interiores'],
    ideal: ['Cumpleaños de 1, 2 y 3 años', 'Baby shower con área de juego', 'Reuniones familiares en casa'],
  },
  {
    id: 'dragones-rojos',
    slug: 'inflables-medianos/dragones-rojos',
    name: 'Dragones Rojos',
    category: 'medianos',
    categoryLabel: 'El más rentado',
    desc: 'El inflable más rentado en CDMX. Dos dragones de 3 m custodian un castillo épico con tobogán y amplia zona de brinco para niños de 3 a 10 años.',
    descLong: 'Los Dragones Rojos son el castillo inflable más rentado de nuestra flota en CDMX. Dos imponentes dragones de 3 metros custodian un amplio castillo con tobogán lateral y zona de brinco para 5 a 7 niños de 3 a 10 años. Su diseño épico convierte cualquier jardín o patio de 4×4 m en el centro de la fiesta. Incluye traslado, instalación y desinfección — solo elige tu fecha.',
    price: 1500,
    priceNote: 'por evento (6–8 horas)',
    dimensions: '4×4 m',
    capacity: '5–7 niños',
    ageRange: '3–10 años',
    height: '3 m',
    badge: 'Top ventas',
    badgeHot: true,
    images: [
      '/img/dragones-rojos/dragones-rojos-inflable-cdmx-1.avif',
      '/img/dragones-rojos/dragones-rojos-inflable-cdmx-2.avif',
      '/img/dragones-rojos/dragones-rojos-inflable-cdmx-3.avif',
      '/img/dragones-rojos/dragones-rojos-inflable-cdmx-4.avif',
      '/img/dragones-rojos/dragones-rojos-inflable-cdmx-5.avif',
      '/img/dragones-rojos/dragones-rojos-inflable-cdmx-6.avif',
    ],
    ogImage: '/img/dragones-rojos/dragones-rojos-inflable-cdmx-1.avif',
    features: ['Dos dragones decorativos de 3 m', 'Tobogán lateral y zona de brinco XL', 'Capacidad para 5–7 niños', 'Perfecto para jardines y patios'],
    ideal: ['Cumpleaños de 4 a 10 años', 'Fiestas temáticas de aventura', 'Eventos y kermeses escolares'],
  },
  {
    id: 'mini-jungla',
    slug: 'inflables-medianos/mini-jungla',
    name: 'Mini Jungla',
    category: 'medianos',
    categoryLabel: 'Aventura temática',
    desc: 'Brincolín inflable temático de jungla con serpientes y animales coloridos. Diseño envolvente que encanta a niños aventureros de 3 a 8 años. Ideal para fiestas temáticas.',
    descLong: 'La Mini Jungla sumerge a los niños en una aventura selvática llena de serpientes, palmeras y animales de colores vibrantes. Su interior abierto y bien ventilado de 3×3 m permite que varios niños de 3 a 8 años jueguen al mismo tiempo bajo techo cubierto. Es la opción perfecta para fiestas temáticas de animales o naturaleza. Renta en CDMX y zona metropolitana con instalación incluida.',
    price: 1200,
    priceNote: 'por evento (6–8 horas)',
    dimensions: '3×3 m',
    capacity: '4–5 niños',
    ageRange: '3–8 años',
    badge: 'Aventurero',
    images: [
      '/img/mini-jungla/inflable-jungla-serpientes-cdmx-1.avif',
      '/img/mini-jungla/inflable-jungla-serpientes-cdmx-2.avif',
      '/img/mini-jungla/inflable-jungla-serpientes-cdmx-3.avif',
      '/img/mini-jungla/inflable-jungla-serpientes-cdmx-4.avif',
      '/img/mini-jungla/inflable-jungla-serpientes-cdmx-5.avif',
      '/img/mini-jungla/inflable-jungla-serpientes-cdmx-6.avif',
    ],
    ogImage: '/img/mini-jungla/inflable-jungla-serpientes-cdmx-1.avif',
    features: ['Diseño envolvente de selva', 'Serpientes y animales de colores', 'Interior amplio y ventilado', 'Techo cubierto para sombra'],
    ideal: ['Fiestas temáticas de animales', 'Cumpleaños de 3 a 8 años', 'Kermeses y eventos escolares'],
  },
  {
    id: 'gusanitos',
    slug: 'inflables-medianos/gusanitos',
    name: 'Gusanitos',
    category: 'medianos',
    categoryLabel: 'Clásico favorito',
    desc: 'El brincolín clásico que nunca falla: gusanos coloridos, amplia zona de brinco y estructura reforzada en lona 550g. Perfecto para fiestas con muchos niños de 3 a 8 años.',
    descLong: 'Los Gusanitos son un clásico imbatible de las fiestas infantiles, reconocido y amado por los niños. Su diseño de gusanos coloridos acompaña una amplia zona de brinco con excelente ventilación y una robusta estructura de lona de 550 g. Con capacidad para 4 a 5 niños de 3 a 8 años en 3×3 m, es ideal para eventos con muchos invitados. Llega desinfectado y con instalación incluida en CDMX y Estado de México.',
    price: 1100,
    priceNote: 'por evento (6–8 horas)',
    dimensions: '3×3 m',
    capacity: '4–5 niños',
    ageRange: '3–8 años',
    badge: 'Clásico',
    images: [
      '/img/gusanitos/gusanitos-inflable-cdmx-1.avif',
      '/img/gusanitos/gusanitos-inflable-cdmx-2.avif',
      '/img/gusanitos/gusanitos-inflable-cdmx-3.avif',
      '/img/gusanitos/gusanitos-inflable-cdmx-4.avif',
      '/img/gusanitos/gusanitos-inflable-cdmx-5.avif',
      '/img/gusanitos/gusanitos-inflable-cdmx-6.avif',
    ],
    ogImage: '/img/gusanitos/gusanitos-inflable-cdmx-1.avif',
    features: ['Diseño de gusanos coloridos', 'Lona reforzada de 550 g', 'Gran zona de brinco ventilada', 'Fácil de supervisar'],
    ideal: ['Cumpleaños infantiles clásicos', 'Kermeses y ferias', 'Eventos con muchos niños'],
  },
  {
    id: 'castillo-de-princesas',
    slug: 'inflables-medianos/castillo-de-princesas',
    name: 'Castillo de Princesas',
    category: 'medianos',
    categoryLabel: 'Favorito de niñas',
    desc: 'Castillo inflable rosa y morado con torres, arcos y coronas de cuento. El favorito para fiestas de niñas de 3 a 10 años que sueñan con ser princesas.',
    descLong: 'El Castillo de Princesas es el inflable favorito para las fiestas de niñas. Sus intensos colores rosa y morado, sus coronas, arcos y torres de cuento transforman cualquier jardín en un palacio de ensueño. Con 4×4 m de espacio para 5 a 7 niñas de 3 a 10 años, brinda diversión y fotos espectaculares. Incluye traslado, montaje y desinfección en CDMX y zona metropolitana.',
    price: 1300,
    priceNote: 'por evento (6–8 horas)',
    dimensions: '4×4 m',
    capacity: '5–7 niños',
    ageRange: '3–10 años',
    badge: 'Para niñas',
    images: [
      '/img/castillo-de-princesas/castillo-princesas-inflable-cdmx-1.avif',
      '/img/castillo-de-princesas/castillo-princesas-inflable-cdmx-2.avif',
      '/img/castillo-de-princesas/castillo-princesas-inflable-cdmx-3.avif',
      '/img/castillo-de-princesas/castillo-princesas-inflable-cdmx-4.avif',
      '/img/castillo-de-princesas/castillo-princesas-inflable-cdmx-5.avif',
    ],
    ogImage: '/img/castillo-de-princesas/castillo-princesas-inflable-cdmx-1.avif',
    features: ['Colores rosa y morado intensos', 'Torres, arcos y coronas de cuento', 'Amplio espacio interior', 'Espectacular para fotos'],
    ideal: ['Cumpleaños de niñas de 3 a 10 años', 'Fiestas temáticas de princesas', 'Celebraciones de cuento'],
  },
  {
    id: 'barco-pirata',
    slug: 'inflables-grandes/barco-pirata',
    name: 'Barco Pirata',
    category: 'grandes',
    categoryLabel: 'Gran formato',
    desc: 'Barco pirata inflable con cañón, velas y tobogán. Aventuras de alta mar para niños de 3 a 12 años en jardines amplios. Renta en CDMX y Estado de México.',
    descLong: 'El Barco Pirata es uno de nuestros inflables grandes más espectaculares. Con cañón, velas y mástil decorativos, tobogán lateral y una gran zona de brinco, lleva a los niños de 3 a 12 años a vivir aventuras de alta mar inolvidables. Sus 5×4 m lo hacen ideal para jardines amplios y eventos al aire libre. Renta en CDMX y Estado de México con instalación y desinfección incluidas.',
    price: 1800,
    priceNote: 'por evento (6–8 horas)',
    dimensions: '5×4 m',
    capacity: '6–8 niños',
    ageRange: '3–12 años',
    badge: 'Gran tamaño',
    images: [
      '/img/barco-pirata/barco-pirata-inflable-cdmx-1.avif',
      '/img/barco-pirata/barco-pirata-inflable-cdmx-2.avif',
      '/img/barco-pirata/barco-pirata-inflable-cdmx-3.avif',
      '/img/barco-pirata/barco-pirata-inflable-cdmx-4.avif',
      '/img/barco-pirata/barco-pirata-inflable-cdmx-5.avif',
    ],
    ogImage: '/img/barco-pirata/barco-pirata-inflable-cdmx-1.avif',
    features: ['Cañón, velas y mástil decorativos', 'Tobogán lateral de aventura', 'Zona de brinco para 6–8 niños', 'Ideal para jardines amplios'],
    ideal: ['Cumpleaños de 5 a 12 años', 'Fiestas temáticas pirata', 'Eventos al aire libre'],
  },
  {
    id: 'extremo',
    slug: 'inflables-grandes/extremo',
    name: 'Circuito Extremo',
    category: 'grandes',
    categoryLabel: 'El más grande',
    desc: 'Nuestro inflable más grande: obstáculos, túneles, escalada y tobogán de altura en un solo circuito. Diversión y reto para niños de 5 a 15 años.',
    descLong: 'El Circuito Extremo es nuestro inflable más grande y emocionante. Un recorrido completo con obstáculos, túneles de paso, zona de escalada y tobogán de altura que desafía a niños de 5 a 15 años en 8×4 m de pura acción. Con capacidad para 8 a 10 niños a la vez, es perfecto para fiestas numerosas y eventos escolares. Incluye traslado, instalación y desinfección en CDMX y zona metropolitana.',
    price: 2500,
    priceNote: 'por evento (6–8 horas)',
    dimensions: '8×4 m',
    capacity: '8–10 niños',
    ageRange: '5–15 años',
    badge: 'El más grande',
    badgeHot: true,
    images: [
      '/img/extremo/circuito-extremo-inflable-cdmx-1.avif',
      '/img/extremo/circuito-extremo-inflable-cdmx-2.avif',
      '/img/extremo/circuito-extremo-inflable-cdmx-3.avif',
      '/img/extremo/circuito-extremo-inflable-cdmx-4.avif',
      '/img/extremo/circuito-extremo-inflable-cdmx-5.avif',
      '/img/extremo/circuito-extremo-inflable-cdmx-6.avif',
    ],
    ogImage: '/img/extremo/circuito-extremo-inflable-cdmx-1.avif',
    features: ['Circuito completo de obstáculos', 'Túneles, escalada y tobogán', 'Capacidad para 8–10 niños', 'Pensado para espacios abiertos'],
    ideal: ['Cumpleaños de 6 a 15 años', 'Eventos escolares y deportivos', 'Fiestas grandes de +20 niños'],
  },
  {
    id: 'castillo-blanco',
    slug: 'inflables-grandes/castillo-blanco',
    name: 'Castillo Blanco',
    category: 'grandes',
    categoryLabel: 'Línea premium',
    desc: 'Castillo inflable premium en blanco con detalles plateados. Elegante para fiestas, XV años y sesiones de fotos; combina con cualquier temática.',
    descLong: 'El Castillo Blanco es nuestra opción premium para quienes buscan un inflable elegante y diferente. Su diseño en blanco con detalles plateados combina con cualquier temática y luce espectacular en fotografías. Con 5×5 m y capacidad para 6 a 8 niños, ofrece una gran zona de brinco y acceso amplio. Ideal para bodas, XV años y comuniones, con instalación y desinfección incluidas en CDMX y EdoMex.',
    price: 2000,
    priceNote: 'por evento (6–8 horas)',
    dimensions: '5×5 m',
    capacity: '6–8 niños',
    ageRange: '3–12 años',
    badge: 'Premium',
    images: [
      '/img/castillo-blanco/castillo-blanco-inflable-cdmx-1.avif',
      '/img/castillo-blanco/castillo-blanco-inflable-cdmx-2.avif',
      '/img/castillo-blanco/castillo-blanco-inflable-cdmx-3.avif',
      '/img/castillo-blanco/castillo-blanco-inflable-cdmx-4.avif',
    ],
    ogImage: '/img/castillo-blanco/castillo-blanco-inflable-cdmx-1.avif',
    features: ['Diseño blanco con detalles plateados', 'Estética elegante para cualquier tema', 'Gran zona de brinco y acceso amplio', 'Luce espectacular en fotos'],
    ideal: ['Bodas, XV años y comuniones', 'Sesiones de fotos elegantes', 'Eventos sofisticados'],
  },
];

export function getProductsByCategory(category: Product['category']) {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
