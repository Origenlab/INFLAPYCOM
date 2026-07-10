import { SITE, CONTACT, type Product } from '../config/site';

const TITLE_MAX = 60;

/**
 * Genera el <title> keyword-first: "kw1 | kw2 | …" sin sobrepasar 60 chars.
 * Omite (no corta) cualquier keyword que no cabe. kw1 siempre aparece.
 * Usado en BaseLayout cuando se pasan `keywords` sin `title` explícito.
 */
export function buildKeywordTitle(keywords: readonly string[]): string {
  const mods = keywords.map((k) => k.trim()).filter(Boolean);
  if (!mods.length) return `${SITE.brand} | ${SITE.name}`;
  let title = mods[0]!;
  for (let i = 1; i < mods.length; i++) {
    const next = `${title} | ${mods[i]}`;
    if (next.length <= TITLE_MAX) title = next;
  }
  return title.charAt(0).toUpperCase() + title.slice(1);
}

interface SeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

interface LocalBusinessSchema {
  pageType: 'home';
}
interface ProductSchema {
  pageType: 'product';
  product: Product;
}
interface PageSchema {
  pageType: 'page';
}

type SchemaProps = LocalBusinessSchema | ProductSchema | PageSchema;

export function buildMeta(props: SeoProps) {
  const title = props.title ?? `${SITE.brand} | ${SITE.name}`;
  const description = props.description ?? SITE.description;
  const canonical = props.canonical ?? SITE.url;
  const ogImage = props.ogImage ?? SITE.ogImage;
  return { title, description, canonical, ogImage, noindex: props.noindex ?? false };
}

export function buildSchema(props: SchemaProps): string {
  if (props.pageType === 'home') {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: `${SITE.brand} - ${SITE.name}`,
      description: SITE.description,
      url: SITE.url,
      telephone: `+52-${CONTACT.phone.slice(0,2)}-${CONTACT.phone.slice(2,6)}-${CONTACT.phone.slice(6)}`,
      email: CONTACT.email,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/icon.png`,
        width: 192,
        height: 192,
      },
      image: `${SITE.url}${SITE.ogImage}`,
      priceRange: '$800 - $2500 MXN',
      currenciesAccepted: 'MXN',
      paymentAccepted: 'Cash, Bank Transfer',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ciudad de México',
        addressRegion: 'CMX',
        addressCountry: 'MX',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '19.4326',
        longitude: '-99.1332',
      },
      areaServed: [
        { '@type': 'City', name: 'Ciudad de México' },
        { '@type': 'AdministrativeArea', name: 'Estado de México' },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
          opens: '08:00',
          closes: '20:00',
        },
      ],
      sameAs: ['https://www.facebook.com/inflapy', 'https://www.instagram.com/inflapy'],
    };
    return JSON.stringify(schema);
  }

  if (props.pageType === 'product') {
    const { product: p } = props;
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: p.name,
      description: p.descLong,
      image: p.images.map((img) => `${SITE.url}${img}`),
      brand: { '@type': 'Brand', name: SITE.brand },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'MXN',
        price: p.price,
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        seller: { '@type': 'Organization', name: SITE.brand },
      },
    };
    return JSON.stringify(schema);
  }

  return '';
}
