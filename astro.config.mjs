import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jackson-strand.com',
  // GitHub Pages serves the built site from /docs on main
  outDir: './docs',
});
