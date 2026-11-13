import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Relative base so the site works at a sub-path (GitHub Pages: /rethnam_portfolio/) and at a domain root.
  base: './',
  plugins: [react(), tailwindcss()],
});
