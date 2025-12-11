# GUÍA PROFESIONAL: Creación de Páginas de Producto para Inflables INFLAPY

> Documento interno para desarrollo de páginas de reseña de inflables.
> Referencia base: `/inflables-chicos/mini-castillo.html`

---

## ÍNDICE

1. [Estructura de Carpetas](#1-estructura-de-carpetas)
2. [Proceso de Enlazado de Cards](#2-proceso-de-enlazado-de-cards)
3. [Estructura HTML del Producto](#3-estructura-html-del-producto)
4. [SEO Profesional](#4-seo-profesional)
5. [Schema.org Markup](#5-schemaorg-markup)
6. [Contenido de Marketing](#6-contenido-de-marketing)
7. [Secciones Obligatorias](#7-secciones-obligatorias)
8. [Checklist Final](#8-checklist-final)
9. [Nomenclatura y Convenciones](#9-nomenclatura-y-convenciones)

---

## 1. ESTRUCTURA DE CARPETAS

### Organización por Categoría

```
INFLAPY.COM/
├── inflables-chicos/
│   ├── mini-castillo.html
│   ├── brincolin-basico.html
│   └── casita-magica.html
├── inflables-medianos/
│   ├── castillo-arcoiris.html
│   └── jungla-aventura.html
├── inflables-grandes/
│   ├── tobogan-extremo.html
│   └── castillo-gigante.html
└── img/
    ├── mini-castillo-1.jpg
    ├── mini-castillo-2.jpg
    ├── mini-castillo-seguridad.jpg
    └── [nombre-inflable]-[variante].jpg
```

### Reglas de Nomenclatura de Archivos

- **HTML**: `nombre-del-inflable.html` (minúsculas, guiones)
- **Imágenes**: `nombre-inflable-[numero|variante].jpg`
- **Sin espacios, sin acentos, sin caracteres especiales**

---

## 2. PROCESO DE ENLAZADO DE CARDS

### Paso 2.1: Identificar todas las Cards del Inflable

Buscar en todos los archivos HTML donde aparece el inflable:

```bash
# Archivos a revisar:
- index.html
- inflables.html
- inflables-chicos.html (o medianos/grandes según categoría)
- catalogo.html
```

### Paso 2.2: Estructura de Card Enlazable

Cada card debe tener esta estructura con enlace:

```html
<article class="inflable-card">
  <a href="/inflables-chicos/nombre-inflable.html" class="card-link">
    <div class="card-image">
      <img src="/img/nombre-inflable.jpg" alt="[Nombre Inflable] - Renta de inflables INFLAPY CDMX" loading="lazy">
      <span class="card-badge">[Categoría]</span>
    </div>
    <div class="card-content">
      <h3>[Nombre del Inflable]</h3>
      <p>[Descripción corta 10-15 palabras]</p>
      <div class="card-footer">
        <span class="card-price">Desde $X MXN</span>
        <span class="card-cta">Ver detalles →</span>
      </div>
    </div>
  </a>
</article>
```

### Paso 2.3: Actualizar Cards en Todos los Archivos

**IMPORTANTE**: Actualizar TODAS las instancias de la card en:

1. `index.html` - Sección de inflables destacados
2. `inflables.html` - Listado general
3. `inflables-[categoria].html` - Listado de categoría
4. `catalogo.html` - Catálogo completo

---

## 3. ESTRUCTURA HTML DEL PRODUCTO

### Paso 3.1: Crear Archivo Base

Copiar `/inflables-chicos/mini-castillo.html` como plantilla.

### Paso 3.2: Secciones del Documento

```html
<!doctype html>
<html lang="es-MX">
<head>
  <!-- 1. Meta Tags SEO -->
  <!-- 2. Open Graph -->
  <!-- 3. Twitter Cards -->
  <!-- 4. Geo Tags -->
  <!-- 5. Schema.org (4 tipos) -->
  <!-- 6. CSS -->
</head>
<body>
  <!-- 1. WhatsApp Float Button -->
  <!-- 2. Header/Nav -->
  <!-- 3. Breadcrumb -->
  <!-- 4. Hero con Slider + Info Producto -->
  <!-- 5. Sección Beneficios (3 cards con imagen) -->
  <!-- 6. Sección Detalles (Qué incluye) -->
  <!-- 7. Sección Testimonios -->
  <!-- 8. Sección FAQ -->
  <!-- 9. CTA Final -->
  <!-- 10. Footer -->
  <!-- 11. JavaScript Slider -->
</body>
</html>
```

---

## 4. SEO PROFESIONAL

### 4.1 Title Tag (Máx 60 caracteres)

**Fórmula**: `[Nombre Producto] para [Audiencia] | [Beneficio] en CDMX | INFLAPY`

```html
<title>Mini Castillo Inflable para Bebés | Renta desde $800 en CDMX | INFLAPY</title>
```

### 4.2 Meta Description (150-160 caracteres)

**Incluir obligatoriamente**:
- Nombre del producto
- Audiencia específica
- Precio
- Zona de servicio (CDMX y Edomex)
- Beneficio principal
- Call to action

```html
<meta name="description" content="Renta el Mini Castillo inflable #1 para bebés de 1-3 años en CDMX y Edomex. Perfecto para primeros cumpleaños, cabe en departamentos (2x2m). Instalación GRATIS + Sanitizado. Reserva HOY.">
```

### 4.3 Keywords (8-12 keywords)

**Tipos de keywords a incluir**:
- Producto + acción: "mini castillo inflable renta"
- Producto + audiencia: "brincolin para bebés CDMX"
- Producto + ocasión: "inflable primer cumpleaños"
- Producto + precio: "renta castillo inflable bebés precio"
- Producto + característica: "brincolin pequeño para departamento"
- Producto + ubicación: "renta inflables Estado de México"

### 4.4 Geo Tags (SEO Local)

```html
<meta name="geo.region" content="MX-CMX">
<meta name="geo.placename" content="Ciudad de México">
<meta name="geo.position" content="19.4326;-99.1332">
<meta name="ICBM" content="19.4326, -99.1332">
```

### 4.5 Canonical URL

```html
<link rel="canonical" href="https://inflapy.com/inflables-chicos/nombre-inflable.html">
```

### 4.6 Open Graph (Facebook/Social)

```html
<meta property="og:type" content="product">
<meta property="og:url" content="[URL canónica]">
<meta property="og:title" content="[Título atractivo - puede diferir del title tag]">
<meta property="og:description" content="[Descripción optimizada para compartir]">
<meta property="og:image" content="[Imagen principal 1200x630]">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="[Descripción de imagen con keywords]">
<meta property="og:locale" content="es_MX">
<meta property="og:site_name" content="INFLAPY - Renta de Inflables">
<meta property="product:price:amount" content="[Precio]">
<meta property="product:price:currency" content="MXN">
<meta property="product:availability" content="in stock">
```

### 4.7 Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@inflapy">
<meta name="twitter:title" content="[Título para Twitter]">
<meta name="twitter:description" content="[Descripción corta]">
<meta name="twitter:image" content="[URL imagen]">
```

---

## 5. SCHEMA.ORG MARKUP

### 5.1 Product Schema (Obligatorio)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "[Nombre Completo del Producto]",
  "description": "[Descripción detallada 150-200 palabras]",
  "image": ["[URL img 1]", "[URL img 2]", "[URL img 3]", "[URL img 4]"],
  "sku": "[SKU único: INF-CH-001, INF-MD-001, INF-GR-001]",
  "mpn": "[Código interno]",
  "brand": {
    "@type": "Brand",
    "name": "INFLAPY"
  },
  "category": "[Categoría]",
  "audience": {
    "@type": "PeopleAudience",
    "suggestedMinAge": "[Edad mínima]",
    "suggestedMaxAge": "[Edad máxima]",
    "suggestedGender": "unisex"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "MXN",
    "price": "[Precio base]",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "LocalBusiness",
      "name": "INFLAPY"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "[4.8-5.0]",
    "reviewCount": "[Número realista]",
    "bestRating": "5"
  }
}
```

### 5.2 BreadcrumbList Schema (Obligatorio)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://inflapy.com/"},
    {"@type": "ListItem", "position": 2, "name": "Inflables", "item": "https://inflapy.com/inflables.html"},
    {"@type": "ListItem", "position": 3, "name": "[Categoría]", "item": "https://inflapy.com/inflables-[categoria].html"},
    {"@type": "ListItem", "position": 4, "name": "[Nombre Producto]", "item": "[URL actual]"}
  ]
}
```

### 5.3 FAQPage Schema (Obligatorio)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Pregunta 1]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Respuesta 1]"
      }
    }
    // Mínimo 5-7 preguntas
  ]
}
```

### 5.4 LocalBusiness Schema (Obligatorio)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "INFLAPY - Renta de Inflables",
  "@id": "https://inflapy.com",
  "url": "https://inflapy.com",
  "telephone": "+52-55-1234-5678",
  "priceRange": "$800 - $3500 MXN",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ciudad de México",
    "addressRegion": "CDMX",
    "addressCountry": "MX"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "19.4326",
    "longitude": "-99.1332"
  },
  "areaServed": ["Ciudad de México", "Estado de México"],
  "serviceType": "Renta de Inflables para Fiestas"
}
```

---

## 6. CONTENIDO DE MARKETING

### 6.1 Principios de Redacción INFLAPY

1. **Tono**: Profesional pero cercano, confiable, experto
2. **Enfoque**: Beneficios para el cliente, no características técnicas
3. **Prueba social**: Mencionar experiencia de 30 años, miles de familias
4. **Urgencia sutil**: Sin presión agresiva, pero motivar acción
5. **Sin fechas**: NUNCA mencionar años específicos ni temporalidades

### 6.2 Descripción Principal del Producto (Hero)

**Estructura** (50-80 palabras):
```
[Gancho emocional]. [Característica principal convertida en beneficio].
[Características secundarias como lista de beneficios].
[Refuerzo de seguridad/confianza]. [Call to action implícito].
```

**Ejemplo**:
> El primer parque de diversiones privado de tu bebé. Diseñado exclusivamente para toddlers de 1 a 3 años, este castillo transforma cualquier rincón de tu casa en una zona de juegos mágica. Paredes bajitas para máxima seguridad, superficie extra acolchonada y colores vibrantes que estimulan sus sentidos. Perfecto para primeros cumpleaños y espacios pequeños.

### 6.3 Párrafos de Marketing (Debajo del Slider)

**Párrafo 1** - Enfoque en SEGURIDAD y SERVICIO:
- Empatizar con la preocupación del cliente
- Destacar características de seguridad
- Mencionar el servicio completo (instalación, explicación)
- Cerrar con tranquilidad para el cliente

**Párrafo 2** - Enfoque en VERSATILIDAD y PRUEBA SOCIAL:
- Destacar adaptabilidad del producto
- Mencionar que no requiere espacios grandes
- Incluir prueba social (miles de familias)
- Cerrar con facilidad del servicio

### 6.4 Sección de Beneficios (3 Cards)

Cada beneficio debe tener:
- **Imagen** representativa (no iconos)
- **Título** de 2-4 palabras
- **Descripción** de 25-35 palabras enfocada en beneficio

**Beneficios estándar por categoría**:

| Categoría | Beneficio 1 | Beneficio 2 | Beneficio 3 |
|-----------|-------------|-------------|-------------|
| Chicos | Máxima Seguridad | Cabe en Cualquier Lugar | Experiencia Mágica |
| Medianos | Diversión Garantizada | Ideal para Fiestas | Seguridad Total |
| Grandes | Aventura Extrema | Capacidad para Todos | Impacto Visual |

### 6.5 Testimonios

**Estructura de testimonio**:
```html
<blockquote>
  "[Testimonio de 2-3 oraciones mencionando: ocasión, experiencia, recomendación]"
  <cite>— [Nombre], [Colonia/Zona], [Ocasión]</cite>
</blockquote>
```

**Reglas**:
- Mínimo 3 testimonios por producto
- Variar zonas: CDMX, Edomex, diferentes colonias
- Variar ocasiones: cumpleaños, bautizo, reunión familiar
- Incluir detalles específicos para credibilidad

---

## 7. SECCIONES OBLIGATORIAS

### 7.1 Hero del Producto

```
┌─────────────────────────────────────────────────────────┐
│ Breadcrumb: Inicio > Inflables > Categoría > Producto  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌──────────────────┐    ┌────────────────────────┐    │
│  │                  │    │ Badge: Categoría       │    │
│  │  SLIDER          │    │ H1: Nombre Producto    │    │
│  │  (4 imágenes)    │    │ Rating: ★★★★★ 4.9     │    │
│  │                  │    │                        │    │
│  │  [·][·][●][·]    │    │ Descripción principal  │    │
│  │                  │    │                        │    │
│  │  [Thumb][Thumb]  │    │ ┌──────┐ ┌──────┐     │    │
│  │  [Thumb][Thumb]  │    │ │Dimen.│ │Edad  │     │    │
│  │                  │    │ └──────┘ └──────┘     │    │
│  │  ✓ Sanitizado    │    │ ┌──────┐ ┌──────┐     │    │
│  │  ✓ Instalación   │    │ │Capac.│ │Lugar │     │    │
│  │  ✓ Disponible    │    │ └──────┘ └──────┘     │    │
│  │                  │    │                        │    │
│  │  [Párrafo Mkt 1] │    │ PRECIO: Desde $XXX    │    │
│  │  [Párrafo Mkt 2] │    │                        │    │
│  │                  │    │ [WhatsApp] [Llamar]   │    │
│  └──────────────────┘    │                        │    │
│                          │ Trust Badges          │    │
│                          └────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

### 7.2 Especificaciones del Producto

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| Dimensiones | Ancho x Largo x Alto | 2 x 2 x 1.8m |
| Edad recomendada | Rango de edad | 1 - 3 años |
| Capacidad | Número de niños | 3 - 4 niños |
| Instalación | Interior/Exterior/Ambos | Interior / Exterior |

### 7.3 Qué Incluye la Renta

**Siempre incluir estas 4 categorías**:

1. **Entrega e Instalación**
   - Entrega a domicilio en CDMX y Edomex
   - Instalación profesional
   - Verificación de seguridad
   - Prueba de funcionamiento

2. **Equipo Completo**
   - Inflable en perfectas condiciones
   - Motor/soplador de aire
   - Sistema de anclaje
   - Tapete de entrada (si aplica)

3. **Higiene Garantizada**
   - Sanitización pre-evento
   - Productos grado hospitalario
   - Certificado de limpieza
   - Seguros para niños

4. **Servicio Post-Evento**
   - Retiro programado
   - Desmontaje profesional
   - Sin cargos adicionales
   - Horario flexible

### 7.4 FAQ (Preguntas Frecuentes)

**Preguntas obligatorias para TODOS los productos**:

1. ¿Cuánto cuesta rentar [Producto]?
2. ¿Para qué edades es recomendado?
3. ¿Cabe en mi [espacio según producto]?
4. ¿Cuántos niños pueden usar[lo] a la vez?
5. ¿Cómo garantizan la higiene?
6. ¿Necesito [requisito específico del producto]?
7. ¿Con cuánta anticipación debo reservar?

**Preguntas adicionales según categoría**:

- **Chicos**: ¿Es seguro para bebés?
- **Medianos**: ¿Qué pasa si llueve?
- **Grandes**: ¿Necesito permiso especial?

### 7.5 CTA Final

**Estructura homologada con index.html**:

```html
<section class="cta-final">
  <div class="container">
    <div class="cta-content">
      <h2>¿[Pregunta relacionada con el producto]?</h2>
      <p>[Invitación a contactar + beneficio + urgencia sutil]</p>
      <div class="cta-buttons">
        <a href="[WhatsApp con mensaje pre-escrito]" class="btn btn-whatsapp btn-large">WhatsApp</a>
        <a href="tel:[Teléfono]" class="btn btn-call btn-large">Llamar</a>
      </div>
      <p class="cta-note">[3 beneficios separados por ·]</p>
    </div>
  </div>
</section>
```

---

## 8. CHECKLIST FINAL

### Antes de Publicar

- [ ] **Archivo HTML** creado en carpeta correcta
- [ ] **Nombre de archivo** sigue nomenclatura
- [ ] **Title tag** único y optimizado (máx 60 chars)
- [ ] **Meta description** única (150-160 chars)
- [ ] **Keywords** relevantes (8-12)
- [ ] **Canonical URL** correcta
- [ ] **Open Graph** completo
- [ ] **Twitter Cards** completo
- [ ] **Geo Tags** incluidos
- [ ] **Schema Product** válido
- [ ] **Schema BreadcrumbList** válido
- [ ] **Schema FAQPage** válido
- [ ] **Schema LocalBusiness** válido

### Contenido

- [ ] **H1** único y descriptivo
- [ ] **Descripción principal** (50-80 palabras)
- [ ] **Párrafos marketing** (2 párrafos debajo slider)
- [ ] **Especificaciones** completas (4 campos)
- [ ] **Beneficios** (3 cards con imagen)
- [ ] **Qué incluye** (4 categorías)
- [ ] **Testimonios** (mínimo 3)
- [ ] **FAQ** (mínimo 7 preguntas)
- [ ] **CTA Final** homologado

### Imágenes

- [ ] **4 imágenes** para slider
- [ ] **3 imágenes** para beneficios
- [ ] **Alt text** descriptivo con keywords
- [ ] **Loading lazy** en todas
- [ ] **Optimizadas** para web (máx 200kb)

### Enlaces

- [ ] **Cards actualizadas** en index.html
- [ ] **Cards actualizadas** en inflables.html
- [ ] **Cards actualizadas** en inflables-[categoria].html
- [ ] **Cards actualizadas** en catalogo.html
- [ ] **Breadcrumb** funcional
- [ ] **WhatsApp** con mensaje pre-escrito correcto
- [ ] **Teléfono** correcto

### Validación

- [ ] **HTML válido** (W3C Validator)
- [ ] **Schema válido** (Google Rich Results Test)
- [ ] **Mobile responsive** verificado
- [ ] **Links funcionan** correctamente
- [ ] **Sin errores** en consola

---

## 9. NOMENCLATURA Y CONVENCIONES

### SKUs por Categoría

| Categoría | Prefijo | Ejemplo |
|-----------|---------|---------|
| Chicos | INF-CH- | INF-CH-001, INF-CH-002 |
| Medianos | INF-MD- | INF-MD-001, INF-MD-002 |
| Grandes | INF-GR- | INF-GR-001, INF-GR-002 |

### Precios Base por Categoría

| Categoría | Rango de Precios |
|-----------|------------------|
| Chicos | $800 - $1,200 MXN |
| Medianos | $1,200 - $2,000 MXN |
| Grandes | $2,000 - $3,500 MXN |

### Rating y Reseñas

- **Rating mínimo**: 4.8
- **Rating máximo**: 5.0
- **Variación realista**: Usar decimales (4.8, 4.9, 5.0)
- **Número de reseñas**: Proporcional a popularidad del producto

### Mensajes WhatsApp Pre-escritos

**Fórmula**:
```
Hola%20INFLAPY,%20quiero%20cotizar%20el%20[Nombre-Producto]%20para%20[ocasión-genérica]
```

**Ejemplos**:
- Chicos: `...para%20mi%20bebé`
- Medianos: `...para%20una%20fiesta%20infantil`
- Grandes: `...para%20mi%20evento`

---

## NOTAS IMPORTANTES

1. **NUNCA mencionar años específicos** - Todo el contenido debe ser atemporal
2. **NUNCA usar animaciones CSS** - El sitio es minimalista sin transiciones
3. **SIEMPRE homologar con index.html** - Verificar estilos antes de crear nuevos
4. **SIEMPRE actualizar TODAS las cards** - No dejar enlaces rotos
5. **SIEMPRE validar Schema** - Usar Google Rich Results Test antes de publicar

---

*Documento creado para uso interno de desarrollo INFLAPY*
*Referencia: mini-castillo.html v1.0*
