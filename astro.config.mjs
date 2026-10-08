import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.nocloudware.com',
  // Genera turnafile.html, about.html... para conservar las URLs actuales.
  build: { format: 'file' },
  integrations: [sitemap()],
});
