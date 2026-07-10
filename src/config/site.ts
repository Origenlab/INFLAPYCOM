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
    desc: 'Brincolin compacto para bebés de 1 a 3 años. Cabe en sala, terraza o un cuarto despejado — perfecto para primeros cumpleaños en departamento. Llega, se instala y se recoge sin que muevas nada.',
    descLong: 'El Mini Castillo está pensado para bebés y niños chiquitos de 1 a 3 años. Sus paredes acolchadas de baja altura ofrecen seguridad total mientras brincan. Por su tamaño compacto de 2×2 m cabe en sala, terraza o cuarto despejado — funciona muy bien para primeros cumpleaños en departamento. Llega listo, lo instalamos y al final lo recogemos. Lo único que necesitas es un contacto eléctrico cerca y suficiente altura libre (2.5 m mínimo).',
    price: 800,
    priceNote: '4–6 hrs · entrega incl.',
    dimensions: '2×2 m',
    capacity: '3–4 niños',
    ageRange: '1–3 años',
    badge: 'Bebés',
    images: [
      '/img/mini-castillo/castillo-inflable-mini-cdmx-1.jpg',
      '/img/mini-castillo/castillo-inflable-mini-cdmx-2.jpg',
      '/img/mini-castillo/castillo-inflable-mini-cdmx-3.jpg',
      '/img/mini-castillo/castillo-inflable-mini-cdmx-4.jpg',
      '/img/mini-castillo/castillo-inflable-mini-cdmx-5.jpg',
      '/img/mini-castillo/castillo-inflable-mini-cdmx-6.jpg',
      '/img/mini-castillo/castillo-inflable-mini-cdmx-7.jpg',
      '/img/mini-castillo/castillo-inflable-mini-cdmx-8.jpg',
    ],
    ogImage: '/img/mini-castillo/castillo-inflable-mini-cdmx-1.jpg',
    features: ['Paredes acolchadas de baja altura', 'Válvula y costuras de seguridad', 'Lona premium lavable y desinfectada', 'Compacto: cabe en interiores'],
    ideal: ['Cumpleaños de 1, 2 y 3 años', 'Baby shower con área de juego', 'Reuniones familiares en casa'],
  },
  {
    id: 'dragones-rojos',
    slug: 'inflables-medianos/dragones-rojos',
    name: 'Dragones Rojos',
    category: 'medianos',
    categoryLabel: 'El más rentado',
    desc: 'El más pedido. Dos dragones de 3 m que llaman la atención desde la calle, espacio para varios niños brincando a la vez y entrada amplia. Funciona bien para fiestas de 4 a 10 años.',
    descLong: 'Dragones Rojos no es solo un inflable, es una experiencia épica. Con sus dos imponentes dragones de 3 metros de altura vigilando el área de brinco, los niños se sienten como verdaderos guerreros en una aventura fantástica. Es nuestro inflable más rentado y el que consistentemente recibe las mejores reseñas. Lo primero que notas al verlo inflado son los dos dragones pintados a los costados con escamas en rojo y naranja — la figura más llamativa de cualquier patio. Funciona igual de bien para niñas que para niños: caballeros, princesas guerreras, aventureros — todos quieren brincar entre dragones. Al no ser un personaje de franquicia, combina con casi cualquier decoración de cumpleaños sin chocar.',
    price: 1200,
    priceNote: '4–6 hrs · entrega incl.',
    dimensions: '4×4 m',
    capacity: '5–7 niños',
    ageRange: '4–10 años',
    height: '3 m',
    badge: 'Top ventas',
    badgeHot: true,
    images: [
      '/img/dragones-rojos/dragones-rojos-inflable-cdmx-1.jpg',
      '/img/dragones-rojos/dragones-rojos-inflable-cdmx-2.jpg',
      '/img/dragones-rojos/dragones-rojos-inflable-cdmx-3.jpg',
      '/img/dragones-rojos/dragones-rojos-inflable-cdmx-4.jpg',
      '/img/dragones-rojos/dragones-rojos-inflable-cdmx-5.jpg',
      '/img/dragones-rojos/dragones-rojos-inflable-cdmx-6.jpg',
      '/img/dragones-rojos/dragones-rojos-inflable-cdmx-7.jpg',
      '/img/dragones-rojos/dragones-rojos-inflable-cdmx-8.jpg',
    ],
    ogImage: '/img/dragones-rojos/dragones-rojos-inflable-cdmx-1.jpg',
    features: ['Dos dragones decorativos de 3 m', 'Tobogán lateral y zona de brinco XL', 'Capacidad para 5–7 niños', 'Perfecto para jardines y patios'],
    ideal: ['Cumpleaños de 4 a 10 años', 'Fiestas temáticas de aventura', 'Eventos y kermeses escolares'],
  },
  {
    id: 'mini-jungla',
    slug: 'inflables-medianos/mini-jungla',
    name: 'Mini Jungla',
    category: 'medianos',
    categoryLabel: 'Safari',
    desc: 'Temática de selva con animales, lianas y zonas para esconderse. Los niños lo usan como circuito más que como brincolin. Ideal si tu hijo o hija anda en la fase de exploradores, dinosaurios o aventuras.',
    descLong: 'La Mini Jungla tiene temática de selva con animales, lianas y zonas para esconderse — los niños lo recorren como circuito, no solo brincan. Su interior de 4.5×4 m tiene buena ventilación y techo cubierto para sombra, con espacio para 5 a 7 niños de 5 a 10 años. Es la opción perfecta para fiestas temáticas de animales, safari o naturaleza. Renta en CDMX y zona metropolitana con instalación incluida.',
    price: 1300,
    priceNote: '4–6 hrs · entrega incl.',
    dimensions: '4.5×4 m',
    capacity: '5–7 niños',
    ageRange: '5–10 años',
    badge: 'Aventurero',
    images: [
      '/img/mini-jungla/inflable-jungla-serpientes-cdmx-1.jpg',
      '/img/mini-jungla/inflable-jungla-serpientes-cdmx-2.jpg',
      '/img/mini-jungla/inflable-jungla-serpientes-cdmx-3.jpg',
      '/img/mini-jungla/inflable-jungla-serpientes-cdmx-4.jpg',
      '/img/mini-jungla/inflable-jungla-serpientes-cdmx-5.jpg',
      '/img/mini-jungla/inflable-jungla-serpientes-cdmx-6.jpg',
      '/img/mini-jungla/inflable-jungla-serpientes-cdmx-7.jpg',
      '/img/mini-jungla/inflable-jungla-serpientes-cdmx-8.jpg',
    ],
    ogImage: '/img/mini-jungla/inflable-jungla-serpientes-cdmx-1.jpg',
    features: ['Diseño envolvente de selva', 'Serpientes y animales de colores', 'Interior amplio y ventilado', 'Techo cubierto para sombra'],
    ideal: ['Fiestas temáticas de animales', 'Cumpleaños de 3 a 8 años', 'Kermeses y eventos escolares'],
  },
  {
    id: 'gusanitos',
    slug: 'inflables-medianos/gusanitos',
    name: 'Gusanitos',
    category: 'medianos',
    categoryLabel: 'Túneles',
    desc: 'Más un circuito que un brincolin. Tiene túneles de colores conectados, varias entradas y salidas. Los niños pasan horas entrando y saliendo. Funciona bien para fiestas con niños de edades mezcladas.',
    descLong: 'Los Gusanitos son más un circuito que un brincolin: sus túneles de colores conectados — verde, morado y amarillo — tienen varias entradas y salidas por donde los niños de todas las edades pasan horas explorando. Con 5×3 m de recorrido y capacidad para 5 a 7 niños simultáneos, funciona perfecto para fiestas con invitados de edades mezcladas. Ideal para kermeses y reuniones donde hay niños de distintas edades. Llega desinfectado con instalación incluida en CDMX y Estado de México.',
    price: 1350,
    priceNote: '4–6 hrs · entrega incl.',
    dimensions: '5×3 m',
    capacity: '5–7 niños',
    ageRange: 'Todas las edades',
    badge: 'Clásico',
    images: [
      '/img/gusanitos/gusanitos-inflable-cdmx-1.jpg',
      '/img/gusanitos/gusanitos-inflable-cdmx-2.jpg',
      '/img/gusanitos/gusanitos-inflable-cdmx-3.jpg',
      '/img/gusanitos/gusanitos-inflable-cdmx-4.jpg',
      '/img/gusanitos/gusanitos-inflable-cdmx-5.jpg',
      '/img/gusanitos/gusanitos-inflable-cdmx-6.jpg',
      '/img/gusanitos/gusanitos-inflable-cdmx-7.jpg',
      '/img/gusanitos/gusanitos-inflable-cdmx-8.jpg',
    ],
    ogImage: '/img/gusanitos/gusanitos-inflable-cdmx-1.jpg',
    features: ['Diseño de gusanos coloridos', 'Lona reforzada de 550 g', 'Gran zona de brinco ventilada', 'Fácil de supervisar'],
    ideal: ['Cumpleaños infantiles clásicos', 'Kermeses y ferias', 'Eventos con muchos niños'],
  },
  {
    id: 'castillo-de-princesas',
    slug: 'inflables-medianos/castillo-de-princesas',
    name: 'Castillo de Princesas',
    category: 'medianos',
    categoryLabel: 'Favorito de niñas',
    desc: 'Castillo en tonos rosa y pastel con resbaladilla incluida. El favorito para fiestas de princesas, hadas o cualquier temática donde quieras que la decoración combine. Edad recomendada: 3 a 10 años.',
    descLong: 'El Castillo de Princesas convierte cualquier jardín en un palacio de ensueño. Sus intensos colores rosa y pastel, sus coronas, arcos y torres de cuento más la resbaladilla incluida hacen de este inflable el favorito para cumpleaños de niñas de 3 a 10 años. Con 4×4 m para 5 a 7 niñas, brinda diversión y fotos espectaculares que combinan con cualquier temática de princesas, hadas o flores. Incluye traslado, montaje y desinfección en CDMX y zona metropolitana.',
    price: 1200,
    priceNote: '4–6 hrs · entrega incl.',
    dimensions: '4×4 m',
    capacity: '5–7 niños',
    ageRange: '3–10 años',
    badge: 'Para niñas',
    images: [
      '/img/castillo-de-princesas/castillo-princesas-inflable-cdmx-1.jpg',
      '/img/castillo-de-princesas/castillo-princesas-inflable-cdmx-2.jpg',
      '/img/castillo-de-princesas/castillo-princesas-inflable-cdmx-3.jpg',
      '/img/castillo-de-princesas/castillo-princesas-inflable-cdmx-4.jpg',
      '/img/castillo-de-princesas/castillo-princesas-inflable-cdmx-5.jpg',
      '/img/castillo-de-princesas/castillo-princesas-inflable-cdmx-6.jpg',
      '/img/castillo-de-princesas/castillo-princesas-inflable-cdmx-7.jpg',
      '/img/castillo-de-princesas/castillo-princesas-inflable-cdmx-8.jpg',
    ],
    ogImage: '/img/castillo-de-princesas/castillo-princesas-inflable-cdmx-1.jpg',
    features: ['Colores rosa y pastel con resbaladilla', 'Torres, arcos y coronas de cuento', 'Amplio espacio interior', 'Espectacular para fotos'],
    ideal: ['Cumpleaños de niñas de 3 a 10 años', 'Fiestas temáticas de princesas', 'Celebraciones de cuento'],
  },
  {
    id: 'barco-pirata',
    slug: 'inflables-grandes/barco-pirata',
    name: 'Barco Pirata',
    category: 'grandes',
    categoryLabel: 'Épico',
    desc: '7 metros de largo con mástil, velas y un tobogán de alta velocidad por la popa. El que más impacta a la entrada de la fiesta. Funciona desde los 4 años y aguanta varios niños al mismo tiempo. Necesita jardín o patio amplio.',
    descLong: 'El Barco Pirata tiene 7 metros de largo con mástil, velas y un tobogán de alta velocidad por la popa — es el inflable que más impacta a la entrada de la fiesta. Su área de brinco aguanta 8 a 10 niños simultáneos desde los 4 años, con altura de 4 m que lo hace visible desde la calle. Incluye tobogán lateral de alta velocidad, zona de brinco central y decoración épica de pirata. Necesita jardín o patio amplio de al menos 7×5 m. Instalación incluida en CDMX y Estado de México.',
    price: 1800,
    priceNote: '4–6 hrs · entrega incl.',
    dimensions: '7×5 m',
    capacity: '8–10 niños',
    ageRange: '4+ años',
    badge: 'Gran tamaño',
    images: [
      '/img/barco-pirata/barco-pirata-inflable-cdmx-1.jpg',
      '/img/barco-pirata/barco-pirata-inflable-cdmx-2.jpg',
      '/img/barco-pirata/barco-pirata-inflable-cdmx-3.jpg',
      '/img/barco-pirata/barco-pirata-inflable-cdmx-4.jpg',
      '/img/barco-pirata/barco-pirata-inflable-cdmx-5.jpg',
      '/img/barco-pirata/barco-pirata-inflable-cdmx-6.jpg',
      '/img/barco-pirata/barco-pirata-inflable-cdmx-7.jpg',
      '/img/barco-pirata/barco-pirata-inflable-cdmx-8.jpg',
    ],
    ogImage: '/img/barco-pirata/barco-pirata-inflable-cdmx-1.jpg',
    features: ['Mástil y velas decorativas épicas', 'Tobogán de alta velocidad en la popa', 'Zona de brinco para 8–10 niños', '7 m de largo — impacta desde la calle'],
    ideal: ['Cumpleaños de 4 a 12 años', 'Fiestas temáticas piratas', 'Eventos con jardín amplio'],
  },
  {
    id: 'extremo',
    slug: 'inflables-grandes/extremo',
    name: 'Circuito Extremo',
    category: 'grandes',
    categoryLabel: 'El más grande',
    desc: 'Circuito de obstáculos para competencias por equipos: muros para escalar, túneles, retos y resbaladilla final. Para kermeses, fiestas de niños grandes y team building. Edad ideal: 6 años en adelante.',
    descLong: 'El Extremo es un circuito de obstáculos de 7×4 m para competencias por equipos. Trae muros para escalar, túneles, retos de equilibrio y resbaladilla final — los niños compiten en carreras y lo repiten decenas de veces. Con capacidad para 6 a 10 niños de 6 años en adelante, es el inflable favorito de kermeses escolares, fiestas de niños grandes y eventos de team building corporativo. Requiere espacio abierto al aire libre con 7×4 m libres. Instalación incluida en CDMX y zona metropolitana.',
    price: 1900,
    priceNote: '4–6 hrs · entrega incl.',
    dimensions: '7×4 m',
    capacity: '6–10 niños',
    ageRange: '6+ años',
    badge: 'El más grande',
    badgeHot: true,
    images: [
      '/img/circuito-extremo/circuito-extremo-inflable-cdmx-1.jpg',
      '/img/circuito-extremo/circuito-extremo-inflable-cdmx-2.jpg',
      '/img/circuito-extremo/circuito-extremo-inflable-cdmx-3.jpg',
      '/img/circuito-extremo/circuito-extremo-inflable-cdmx-4.jpg',
      '/img/circuito-extremo/circuito-extremo-inflable-cdmx-5.jpg',
      '/img/circuito-extremo/circuito-extremo-inflable-cdmx-6.jpg',
      '/img/circuito-extremo/circuito-extremo-inflable-cdmx-7.jpg',
      '/img/circuito-extremo/circuito-extremo-inflable-cdmx-8.jpg',
    ],
    ogImage: '/img/circuito-extremo/circuito-extremo-inflable-cdmx-1.jpg',
    features: ['Muros de escalada + túneles de paso', 'Resbaladilla final de competencia', 'Para 6–10 participantes de 6+ años', 'Ideal para competencias por equipos'],
    ideal: ['Kermeses y días del niño', 'Cumpleaños de 6 a 15 años', 'Team building corporativo'],
  },
  {
    id: 'castillo-blanco',
    slug: 'inflables-grandes/castillo-blanco',
    name: 'Castillo Blanco',
    category: 'grandes',
    categoryLabel: 'Línea premium',
    desc: 'Castillo en blanco sin colores estridentes, pensado para bodas, primeras comuniones y eventos donde la decoración ya tiene paleta definida. 6×5 m, hasta 12 niños, combina con cualquier ambientación.',
    descLong: 'El Castillo Blanco es la opción premium para eventos donde la decoración ya tiene paleta definida — bodas, primeras comuniones, baby showers y XV años. Su diseño en blanco sin colores estridentes combina con cualquier ambientación y luce espectacular en fotografías. Con 6×5 m y capacidad para 8 a 12 niños de todas las edades, ofrece la zona de brinco más amplia de la línea premium. Instalación y desinfección incluidas en CDMX y EdoMex.',
    price: 1700,
    priceNote: '4–6 hrs · entrega incl.',
    dimensions: '6×5 m',
    capacity: '8–12 niños',
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
