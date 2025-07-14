import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://chancechapman.dev',
  build: {
    format: 'directory'
  }
});