# STACK.md — Con qué está hecho y dónde está cada cosa

## Tecnologías (con versión exacta)

| Qué | Versión | Notas |
|---|---|---|
| Astro | 7.x (`^7.0.0`) | Generador de sitio estático. `npm run build` produce `dist/`. |
| Tailwind CSS | 4.1.x | Solo como base de utilidades; casi todo el estilo está en CSS propio. |
| @astrojs/sitemap | (ver package-lock) | Genera `sitemap-index.xml` en cada build. |

## Librerías guardadas dentro del sitio

No se cargan desde CDNs externos (privacidad + longevidad):

- `public/vendor/lucide/lucide.min.js` — íconos. Se usan con `<i data-lucide="nombre"></i>`.
- `public/vendor/gsap/gsap.min.js` + `public/vendor/gsap/ScrollTrigger.min.js` — animaciones al bajar.

## Fuentes

`public/fonts/`: poppins-500/600/700.woff2, montserrat-variable.woff2.

## Estructura de carpetas

```
web-conamic/
├── astro.config.mjs          ← dominio e integraciones
├── package.json
├── public/                   ← archivos tal cual: logo, favicon, fuentes, librerías
│   ├── brand/logo.png, favicon.png
│   ├── fonts/, vendor/
├── src/
│   ├── datos/                ← TODO EL CONTENIDO EDITABLE (un JSON por página)
│   │   ├── sitio.json        ← menú, contacto, redes, legales (se repite en todo el sitio)
│   │   ├── inicio.json, quienes-somos.json, servicios.json,
│   │   ├── beneficios.json, afiliacion.json, actualidad.json,
│   │   └── contacto.json, legales.json
│   ├── layouts/Layout.astro  ← menú, pie, botón WhatsApp flotante, tema claro/oscuro, animaciones
│   ├── pages/                ← una página .astro por ruta; leen su JSON
│   └── styles/global.css     ← colores de marca, tipografías, componentes visuales
├── insumos/                  ← documentos originales del cliente (NO publicar)
└── conocimiento_generado/    ← esta documentación
```

## Mapa "quiero cambiar X → archivo Y"

| Cambio | Archivo |
|---|---|
| Teléfono, correo, dirección, WhatsApp | `src/datos/sitio.json` |
| Menú o enlaces del pie | `src/datos/sitio.json` |
| Textos de la página de inicio | `src/datos/inicio.json` |
| Colores de marca | `src/styles/global.css` (bloque `VARIABLES SEMÁNTICAS`, líneas ~57–78) |
| Formulario de afiliación (campos) | `src/datos/afiliacion.json` + estructura en `src/pages/afiliacion.astro` |
| Destino del formulario | script al final de `afiliacion.astro` / `contacto.astro` |
| Logo | reemplazar `public/brand/logo.png` (misma proporción cuadrada) |

## Comandos

```bash
npm install     # solo la primera vez
npm run dev     # servidor local en http://localhost:4321
npm run build   # genera dist/ (el sitio completo, estático)
npm run preview # revisar dist/ antes de publicar
```
