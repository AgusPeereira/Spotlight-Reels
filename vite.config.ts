import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { site } from './src/config/site.ts';

export default defineConfig({
  plugins: [
    react(),
    // Reemplaza %SITE_URL% en index.html con la URL de site.ts,
    // así la imagen para compartir siempre apunta a la web correcta.
    {
      name: 'site-url',
      transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', site.url),
    },
  ],
  server: {
    host: true, // permite abrir la web desde el celular en la misma red wifi
  },
});
