import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://lincahrentcar.com',
  trailingSlash: 'never',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        const excluded = ['/404', '/robots.txt'];
        return !excluded.includes(path);
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
