import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fachwerk.tech',
  output: 'static',
  server: {
    port: parseInt(process.env.PORT) || 4321,
    host: process.env.HOST || 'localhost',
  },
});
