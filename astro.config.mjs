import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { execSync } from 'node:child_process';
import { existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// ─── Sitemap lastmod dinámico ──────────────────────────────────────────────
// Resuelve URL → archivo fuente → fecha real (git log → mtime → omitir).
// Mejor omitir lastmod que mentir con la fecha del build.
// Requiere fetch-depth: 0 en el checkout del workflow (si no, git log
// devuelve la fecha del HEAD para todo).
const ROOT = dirname(fileURLToPath(import.meta.url));
const _dateCache = new Map();

function sourceDate(relPath) {
  if (_dateCache.has(relPath)) return _dateCache.get(relPath);
  let date = null;
  const abs = join(ROOT, relPath);
  if (existsSync(abs)) {
    try {
      const out = execSync(`git log -1 --format=%cI -- "${relPath}"`, {
        cwd: ROOT,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim();
      if (out) date = new Date(out);
    } catch {}
    if (!date) {
      try {
        date = statSync(abs).mtime;
      } catch {}
    }
  }
  _dateCache.set(relPath, date);
  return date;
}

function lastmodForUrl(url) {
  const path = new URL(url).pathname.replace(/\/+$/, '');
  const rel = path === '' ? 'index' : path.replace(/^\//, '');
  const candidates = [
    `src/pages/${rel}.astro`,
    `src/pages/${rel}/index.astro`,
    `src/pages/${rel}/index.md`,
  ];
  // Colección blog: publicada bajo /articulos/<slug>
  if (rel.startsWith('articulos/')) {
    const sub = rel.slice('articulos/'.length);
    candidates.push(
      `src/content/blog/${sub}.md`,
      `src/content/blog/${sub}.mdx`,
      `src/content/blog/${sub}/index.md`,
    );
  }
  for (const c of candidates) {
    const d = sourceDate(c);
    if (d) return d;
  }
  return null;
}

export default defineConfig({
  site: 'https://inflapy.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/inflables/'),
      serialize: (item) => {
        // lastmod real por archivo fuente; si no se resuelve, se omite
        const lm = lastmodForUrl(item.url);
        if (lm) {
          item.lastmod = lm.toISOString();
        } else {
          delete item.lastmod;
        }
        return item;
      },
    }),
  ],
  output: 'static',
  build: {
    assets: '_astro',
  },
});
