import { defineConfig } from 'vite';

export default defineConfig({
  base: '/realdraw_story/',
  publicDir: 'static',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
