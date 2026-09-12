import { defineConfig } from 'astro/config';

const base = process.env.BASE_PATH
  ? `${process.env.BASE_PATH.replace(/\/$/, '')}/`
  : '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://YOUR-USERNAME.github.io',
  base,
  output: 'static',
  vite: {
    optimizeDeps: {
      exclude: ['aria-query', 'axobject-query', 'cssesc'],
    },
  },
});
