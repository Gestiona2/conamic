import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Demo: el sitio vive en una subcarpeta de demos.emp2web.com.
  // Cuando CONAMIC tenga su dominio propio, poner site: "https://conamic.org"
  // y base: "/" — los enlaces no hay que tocarlos, los resuelve src/lib/ruta.ts.
  site: "https://demos.emp2web.com",
  base: "/conamic",
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});