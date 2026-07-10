# CHANGELOG SEO técnico — inflapy.com — 2026-07-10

Alcance TÉCNICO (SOP Prompt Maestro SEO). Cero datos de negocio nuevos; copy y diseño intactos.
Commit principal: `69c1d49` · Action: run 29115348818 **success** · Astro ^6.1.1 · Deploy: GitHub Pages vía `deploy.yml` (build_type=workflow).

## Cambios aplicados

### 1. Estáticos referenciados pero ausentes del build Astro (404 en producción Astro)
El sitio Astro referenciaba archivos que solo existían en el root legacy del repo (que Astro NO copia a `dist/`). Se copiaron los archivos REALES ya existentes a `public/`:

| Archivo | Referenciado por | Antes |
|---|---|---|
| `public/favicon.ico` | `BaseLayout` `<link rel="icon">` | 404 |
| `public/site.webmanifest` | `BaseLayout` `<link rel="manifest">` | 404 |
| `public/icon.png` (192×192) | logo LocalBusiness (home) | 404 |
| `public/img/inflapy-og-image.jpg` (1200×630) | og:image DEFAULT de todo el sitio (`SITE.ogImage`), image de LocalBusiness (home+contacto), logo Organization (nosotros), fallback Article | 404 — **el OG por defecto de ~66 páginas estaba roto** |
| `public/img/castillo-blanco/*.avif` (4) | galería + Product schema + og de `/inflables-grandes/castillo-blanco` | 404 — galería del producto rota |

### 2. Open Graph (BaseLayout, head compartido)
- Rewrite `.avif/.webp` → `/images/og/<basename>.jpg` en og:image y twitter:image (crawlers OG de FB/WhatsApp no leen AVIF). Único caso: castillo-blanco.
- Generado `public/images/og/castillo-blanco-inflable-cdmx-1.jpg` (1200×630, crop cover, q82, progressive) desde el AVIF original con PIL. Sin colisiones de basename.
- `og:image:type` dinámico (image/jpeg | image/png) + `og:image:alt` (título de página) en todas las páginas.

### 3. Schemas — logos como ImageObject con dimensiones reales (PIL)
- `src/lib/seo.ts` (LocalBusiness home): logo string → ImageObject `/icon.png` 192×192.
- `src/layouts/ArticleLayout.astro` (publisher de 60 artículos): `/img/logo-inflapy.png` + 1604×370.
- `src/pages/nosotros.astro` (Organization): logo string → ImageObject 1200×630 (misma URL).

### 4. Sitemap lastmod real (antes: SIN lastmod en las 74 URLs)
- `astro.config.mjs`: resolver URL→archivo fuente (`src/pages` exactos; colección `blog` publicada bajo `/articulos/<slug>`) → `git log -1 --format=%cI` (cache Map) → fallback mtime → si no resuelve, se omite. Patrón EVENTECH.
- `deploy.yml`: `fetch-depth: 0` en checkout (sin esto git log devuelve la fecha del HEAD para todo).
- Verificado en vivo (origen GH Pages): 74/74 lastmod con 5 valores distintos (2026-06-30 → 2026-07-10).

## Validación (gates)
- `astro check`: **0 errores** (0 warnings, 48 hints).
- Build local: verde, 76 páginas.
- Validador dist/: 76 páginas → 0 og avif/webp, 0 og rotos, og:image:type+alt en 100%, breadcrumbs OK (home 0, resto ≤1), sin Product duplicados.
- Secretos: grep limpio; remote sin token.
- Action `Deploy Astro a GitHub Pages`: **success** (run 29115348818, sha 69c1d49).
- **En vivo (ORIGEN GitHub Pages, bypass Cloudflare vía --resolve 185.199.108.153):**
  - og:image castillo-blanco → `/images/og/castillo-blanco-inflable-cdmx-1.jpg` ✓; el JPEG responde 200 `image/jpeg` (141,978 bytes) ✓
  - favicon.ico / site.webmanifest / icon.png / img/inflapy-og-image.jpg → 200 con content-type correcto ✓
  - sitemap-0.xml → lastmod variado ✓

## HALLAZGO CRÍTICO — el dominio NO sirve el deploy (pendiente manual dashboard)
- **GitHub Pages (origen) ya sirve el sitio Astro actualizado** — verificado con `--resolve` directo a 185.199.108.153. `origenlab.github.io/INFLAPYCOM` → 301 a inflapy.com (custom domain OK, `build_type=workflow`, CNAME=inflapy.com).
- **Pero `https://inflapy.com` (vía Cloudflare, DNS proxied 104.21.41.54 / 172.67.160.174) sirve el sitio LEGACY congelado** (título viejo "30 Años de Experiencia", `sitemap-index.xml` 404). El DNS de Cloudflare apunta a OTRO origen (hosting viejo o proyecto CF antiguo), no a GitHub Pages. Misma clase de incidente que MEDEDUL: "Action verde ≠ dominio actualizado".
- **Fix manual (dashboard Cloudflare, zona inflapy.com):** apuntar apex `inflapy.com` a GitHub Pages (A 185.199.108.153/154/155/156) y `www` CNAME → `origenlab.github.io`. Verificar qué origen sirve hoy el legacy antes de apagarlo.

## Pendientes manuales (dashboard)
1. **Cloudflare DNS** (crítico, arriba): sin esto NINGÚN deploy llega al dominio.
2. **www → non-www**: hoy `www.inflapy.com` responde 200 (duplicado) desde el origen viejo. En GitHub Pages NO existe `_redirects`; una vez corregido el DNS, GitHub redirige www→apex automáticamente (CNAME=inflapy.com). Fix garantizado adicional: Cloudflare Redirect Rule `www.inflapy.com/*` → `https://inflapy.com/$1` 301.
3. **GitHub Pages → Enforce HTTPS**: `https_enforced: false` en la config actual del Pages.
4. **Cloudflare Web Analytics**: el beacon en `BaseLayout` trae token placeholder `REEMPLAZAR_CON_TOKEN_REAL` — poner token real o quitar el script (no tocado: fuera de alcance SEO).
5. **GSC**: cuando el DNS apunte bien, re-enviar `https://inflapy.com/sitemap-index.xml` (el legacy referenciaba `/sitemap.xml`, que en el sitio Astro ya no existe).

## No aplicado (con razón)
- `public/_redirects` www→apex: NO aplica — el deploy es GitHub Pages, no Cloudflare Pages (el SOP asume CF Pages en ese punto).
- Redirect `/sitemap.xml` → `/sitemap-index.xml` (patrón EVENTECH): en GH Pages estático Astro lo generaría como HTML meta-refresh, inválido como sitemap; robots.txt ya declara el sitemap-index correcto.
- Cambiar el logo de `nosotros` a `/img/logo-inflapy.png` (hoy apunta al og-image): decisión de marca, se dejó la URL original con dimensiones reales.
- `["Service","Product"]` híbridos: no existen en este sitio (Product puro por página de producto, 1 por página — correcto).
- Hero/galerías siguen usando AVIF en `<img>`: correcto (los navegadores sí leen AVIF; el rewrite es solo para OG).

## Hallazgos sin acción (informativos)
- `sitemap.filter` excluye `/inflables/` (página noindex con meta-refresh a /catalogo): intencional, se mantuvo.
- Root legacy (index.html, *.html, img/, css/, js/, CNAME) intacto — NUNCA borrar hasta que el DNS sirva el build nuevo de forma estable.
- `index.lock` stale de git (2026-07-09) bloqueaba commits; se eliminó (sin proceso git activo).
