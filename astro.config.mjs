import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Demo en GitHub Pages: el sitio vive en una subcarpeta del dominio.
  // Cuando CONAMIC tenga su dominio propio, poner site: "https://conamic.org"
  // y base: "/" — los enlaces no hay que tocarlos, los resuelve src/lib/ruta.ts.
  site: "https://gestiona2.github.io",
  base: "/web-conamic-prueba",
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});