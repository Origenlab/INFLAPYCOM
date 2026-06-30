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
    categoryLabel: 'Para bebés',
    desc: 'Perfecto para bebés y niños de 1–3 años. Paredes bajitas y súper seguras para sus primeros brincos. Cabe en interiores.',
    descLong: 'Diseñado especialmente para los más pequeños, el Mini Castillo tiene paredes acolchadas de baja altura y una superficie de brinco suave que garantiza seguridad total. Ideal para fiestas de primer año, segundo y tercero. Cabe en departamentos, salas grandes y jardines pequeños.',
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
    features: ['Paredes acolchadas bajas', 'Válvula de seguridad', 'Lona premium lavable', 'Cabe en interiores'],
    ideal: ['Cumpleaños 1, 2 y 3 años', 'Baby shower activo', 'Convivios familiares'],
  },
  {
    id: 'dragones-rojos',
    slug: 'inflables-medianos/dragones-rojos',
    name: 'Dragones Rojos',
    category: 'medianos',
    categoryLabel: 'Más popular',
    desc: 'El campeón de las fiestas. Dos dragones de 3 metros custodian este castillo épico donde los niños viven aventuras sin fin.',
    descLong: 'Los Dragones Rojos son el inflable más rentado de nuestra flota. Sus dos imponentes dragones de 3 metros de altura hacen que cualquier fiesta sea épica. Amplio espacio interior, tobogán lateral y zona de brinco. Para niños de 3 a 10 años.',
    price: 1500,
    priceNote: 'por evento (6–8 horas)',
    dimensions: '4×4 m',
    capacity: '5–7 niños',
    ageRange: '3–10 años',
    height: '3 m',
    badge: 'Más popular',
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
    features: ['2 dragones decorativos 3m', 'Tobogán lateral', 'Zona de brinco amplia', 'Ideal jardines'],
    ideal: ['Cumpleaños 4–10 años', 'Fiestas temáticas', 'Eventos escolares'],
  },
  {
    id: 'mini-jungla',
    slug: 'inflables-medianos/mini-jungla',
    name: 'Mini Jungla',
    category: 'medianos',
    categoryLabel: 'Aventurero',
    desc: 'Una jungla llena de serpientes y animales de colores. Diseño temático que enamora a niños aventureros de 3 a 8 años.',
    descLong: 'La Mini Jungla sumerge a los niños en una aventura selvática llena de serpientes, palmas y animales de colores vibrantes. Diseño interior abierto con espacio suficiente para que varios niños jueguen al mismo tiempo. Perfecto para fiestas temáticas de animales o naturaleza.',
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
    features: ['Diseño jungla colorida', 'Serpientes y animales decorativos', 'Interior amplio', 'Techo cubierto'],
    ideal: ['Fiestas temáticas naturaleza', 'Cumpleaños 3–8 años', 'Kermeses escolares'],
  },
  {
    id: 'gusanitos',
    slug: 'inflables-medianos/gusanitos',
    name: 'Gusanitos',
    category: 'medianos',
    categoryLabel: 'Clásico',
    desc: 'El clásico que nunca falla. Diseño de gusanos coloridos con zona de brinco generosa y estructura muy resistente.',
    descLong: 'Los Gusanitos son un clásico en las fiestas infantiles. Su diseño de gusanos coloridos es reconocido y amado por los niños. Zona de brinco amplia, excelente ventilación y estructura robusta de lona 550g. Ideal para eventos con muchos niños de edades variadas.',
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
    features: ['Diseño gusanos coloridos', 'Alta resistencia lona 550g', 'Excelente ventilación', 'Fácil supervisión'],
    ideal: ['Cumpleaños clásicos', 'Kermeses', 'Eventos con muchos niños'],
  },
  {
    id: 'castillo-de-princesas',
    slug: 'inflables-medianos/castillo-de-princesas',
    name: 'Castillo de Princesas',
    category: 'medianos',
    categoryLabel: 'Para niñas',
    desc: 'El sueño de toda princesa hecho realidad. Diseño rosa y morado con corona, arcos y torres que enamoran a las niñas.',
    descLong: 'El Castillo de Princesas es el favorito para las fiestas de niñas. Colores rosa y morado intensos, coronas decorativas, arcos y torres que hacen de cualquier jardín un palacio de cuento. Espacio amplio para que las princesas brinquen como reinas.',
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
    features: ['Colores rosa y morado', 'Torres y coronas decorativas', 'Amplio espacio interior', 'Diseño de cuento'],
    ideal: ['Cumpleaños niñas 3–10 años', 'Fiestas temáticas princesas', 'XV años infantiles'],
  },
  {
    id: 'barco-pirata',
    slug: 'inflables-grandes/barco-pirata',
    name: 'Barco Pirata',
    category: 'grandes',
    categoryLabel: 'Gran tamaño',
    desc: 'Ahoy! Un barco pirata inflable con cañón, tobogán y zona de brinco para grandes aventuras de alta mar en tu jardín.',
    descLong: 'El Barco Pirata es uno de nuestros inflables grandes más espectaculares. Con cañón decorativo, velas, tobogán y una gran zona de brinco, este barco lleva a los niños a vivir aventuras de piratas que no olvidarán. Ideal para jardines amplios y espacios al aire libre.',
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
    features: ['Cañón y velas decorativas', 'Tobogán lateral', 'Zona de brinco XXL', 'Requiere jardín amplio'],
    ideal: ['Cumpleaños 5–12 años', 'Fiestas temáticas pirata', 'Eventos al aire libre'],
  },
  {
    id: 'extremo',
    slug: 'inflables-grandes/extremo',
    name: 'Circuito Extremo',
    category: 'grandes',
    categoryLabel: 'El más grande',
    desc: 'El rey de los inflables. Obstáculos, túneles, escaladas y toboganes en un circuito que agota (de felicidad) a cualquier niño.',
    descLong: 'El Circuito Extremo es nuestro inflable más grande y emocionante. Un recorrido completo con obstáculos inflables, túneles de paso, zona de escalada y tobogán de altura. Perfecto para fiestas con muchos niños mayores o eventos escolares donde se busca máxima diversión y actividad física.',
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
    features: ['Circuito completo con obstáculos', 'Túneles y escalada', 'Tobogán de altura', 'Necesita espacio grande'],
    ideal: ['Cumpleaños 6–15 años', 'Eventos escolares', 'Fiestas grandes +20 niños'],
  },
  {
    id: 'castillo-blanco',
    slug: 'inflables-grandes/castillo-blanco',
    name: 'Castillo Blanco',
    category: 'grandes',
    categoryLabel: 'Premium',
    desc: 'Elegante castillo blanco con detalles plateados. El inflable premium para fiestas que quieren lucir diferente y sofisticado.',
    descLong: 'El Castillo Blanco es nuestra opción premium para familias que buscan un inflable elegante y diferente. Su diseño en blanco con detalles plateados se integra perfectamente en fiestas de cualquier temática y luce espectacular en fotos. Gran zona de brinco y acceso amplio.',
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
    features: ['Diseño blanco elegante', 'Detalles plateados', 'Gran zona de brinco', 'Apto cualquier temática'],
    ideal: ['Fiestas elegantes', 'Sesiones de fotos', 'XV años y comuniones'],
  },
];

export function getProductsByCategory(category: Product['category']) {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
