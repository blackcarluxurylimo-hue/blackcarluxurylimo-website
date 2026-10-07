import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For custom domain (blackcarluxurylimo.com) or <user>.github.io root,
// base can stay '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    target: 'es2018',
  },
});
