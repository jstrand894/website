import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jackson-strand.com',
  integrations: [sitemap()],
  // GitHub Pages serves the built site from /docs on main
  outDir: './docs',
});
