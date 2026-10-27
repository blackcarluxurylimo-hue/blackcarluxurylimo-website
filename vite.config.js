import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { pageSeoPlugin } from './scripts/vite-plugin-page-seo.mjs';

// For custom domain (blackcarluxurylimo.com) or <user>.github.io root,
// base can stay '/'.
export default defineConfig({
  plugins: [react(), pageSeoPlugin()],
  base: '/',
  build: {
    target: 'es2018',
  },
});
