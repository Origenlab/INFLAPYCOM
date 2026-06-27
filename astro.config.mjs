import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://inflapy.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/inflables/'),
    }),
  ],
  output: 'static',
  build: {
    assets: '_astro',
  },
});
