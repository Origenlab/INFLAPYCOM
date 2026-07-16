# inflapy.com — deploy fantasma + doble publicación

**Fecha:** 16-jul-2026 · **Repo:** `Origenlab/INFLAPYCOM` · HEAD `4a96e11` (10-jul-2026)
**Estado:** diagnosticado, **NO tocado** — requiere decisión y acceso al dashboard de Cloudflare

## El síntoma

El sitio en vivo publica datos que **hoy sabemos falsos** y que **no existen en el repo**:

```
live: "15K+ Fiestas realizadas · 50+ Modelos disponibles · 4.9 Calificación promedio"
```

Contra lo verificado el 16-jul-2026 en la ficha real de Google: **4.5★ con 37 reseñas** y **8 modelos** de catálogo. El "15K+ fiestas" no tiene fuente en ningún lado.

## La causa: tres versiones vivas, ninguna es el repo

| Origen | `<title>` | 15K+ | 50+ | 4.9 |
|---|---|---|---|---|
| **inflapy.com** (lo que ve el cliente) | "…INFLAPY — 30 Años de Experiencia" | 1 | 1 | 18 |
| `inflapy-com.pages.dev` | **idéntico al live** | 1 | 1 | 18 |
| `inflapy.pages.dev` | "…Brincolines y Castillos \| INFLAPY" | 0 | 0 | 29 |
| **build del repo** (`4a96e11`) | "Renta de inflables CDMX \| castillos y brincolines" | **0** | **0** | **0** |

**inflapy.com = `inflapy-com.pages.dev`**, un proyecto de Cloudflare Pages con un build viejo. El repo actual no se publica en ningún sitio que el visitante alcance.

## Por qué pasó

1. `.github/workflows/deploy.yml` se llama **"Deploy Astro a GitHub Pages"** y publica ahí (`actions/upload-pages-artifact@v3`). Última ejecución: 10-jul-2026, **success**.
2. GitHub Pages está activo y **cree** que sirve el dominio: `gh api repos/Origenlab/INFLAPYCOM/pages` → `status: built`, `cname: inflapy.com`. El repo tiene `public/CNAME` con `inflapy.com`.
3. Pero **el DNS de inflapy.com apunta a Cloudflare** (`104.21.41.54`, `172.67.160.174`; `server: cloudflare`).
4. Cloudflare sirve su propio proyecto de Pages (`inflapy-com.pages.dev`), no a GitHub Pages.
5. **Resultado:** la Action sale verde, el artefacto sube a GH Pages, y nadie lo ve. El visitante recibe un build congelado de Cloudflare.

Es el caso literal del CLAUDE.md: *"El DNS es la única verdad sobre quién sirve un dominio"* y *"Un dominio = un publisher… nunca ambos"*. Y hay **dos** proyectos de CF Pages (`inflapy` e `inflapy-com`), que es doble publicación sobre doble publicación.

**El gate no protege aquí:** el repo no tiene `deploy.yml` con sello de `build-id.txt` (los 28 repos que sí lo tienen verifican el dominio; este no). `curl https://inflapy.com/build-id.txt` devuelve el HTML de la home — el archivo no existe.

## Cómo se arregla (3 pasos, se hacen los 3 o no se empieza)

Requiere el dashboard de Cloudflare. **Decidir primero quién es el publisher único.** Recomendado: Cloudflare Pages, que es donde ya apunta el DNS y el estándar del portafolio (27 CF / 21 GHP).

1. **Identificar cuál de los dos proyectos de CF Pages tiene el custom domain `inflapy.com`** (casi seguro `inflapy-com`) y **conectarlo al repo `Origenlab/INFLAPYCOM`, rama `main`** — hoy sirve un build que no viene de este repo. El otro proyecto (`inflapy`) se elimina o se deja sin dominio.
2. **Cambiar `deploy.yml`** de GitHub Pages a Cloudflare Pages, y **añadir el sello de `build-id.txt`** con el SHA + el gate que le pregunta al dominio (copiar el de `INFLAPY`, que ya lo tiene y hoy pasa).
3. **Apagar GitHub Pages**, que no se apaga solo al borrar el workflow:
   ```bash
   gh api -X DELETE repos/Origenlab/INFLAPYCOM/pages
   ```
   Y quitar `public/CNAME` (es de GH Pages; en CF no hace falta y confunde).

Después: `curl https://inflapy.com/build-id.txt` debe devolver el SHA de HEAD.

## Riesgo si se deja así

- El sitio publica **15K+ fiestas, 50+ modelos y 4.9★** — las tres cifras falsas, ya corregidas en `inflablesparafiestas.com.mx` y en `eventech.mx`. Un cliente que compare los dos sitios de la misma marca ve datos distintos.
- Todo trabajo futuro sobre este repo **no llegará al visitante**, y la Action seguirá saliendo verde.
- El repo ya tiene la regla correcta escrita (`// REGLA: solo reseñas reales (cero aggregateRating fabricado)` en `Reviews.astro`, `/** Never show self-generated aggregateRating */` en `site.ts`). **El código está limpio; el problema es solo de publicación.**

## Nota de método

El primer diagnóstico fue erróneo. `grep "50+ Modelos"` daba 0 en el repo y concluí "el dato no existe en el código". Pero `grep "50+"` da 1 — una tabla de blog sin relación. El match existía y no significaba lo que parecía. Lo que confirmó el drift no fue el grep, sino **construir el repo y comparar el HTML contra el live**. Es el único método que no miente.
