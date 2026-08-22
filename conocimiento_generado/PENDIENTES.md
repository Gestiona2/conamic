# PENDIENTES.md — Lo que quedó a medias

Honestidad primero: estas cosas son provisionales. Nada de lo que está aquí
es definitivo ni debe presentarse al cliente como si lo fuera.

---

## Imágenes provisionales (placeholders de placehold.co)

Resueltas con fotos reales: portada e intro del home (`portada-home.jpg`,
`intro-conamic-b.jpg`), trío de identidad (`identidad-raiz.jpg`,
`identidad-corazon.jpg`, `identidad-futuro.jpg`), los cuatro heroes de página
(`intro-conamic.jpg` en quiénes somos, `hero-servicios.jpg`,
`hero-beneficios.jpg`, `hero-contacto.jpg`), las 6 del blog (`blog-*.jpg`)
y manos de afiliación (`afiliacion-manos.jpg`). Queda provisional un solo
grupo (SVG locales en `public/img/provisional-*.svg`, siempre cargan).

| Dónde | Qué debería ir ahí | Medida | Archivo a editar |
|---|---|---|---|
| Junta directiva (7 personas) | Foto oficial de cada directivo | 400×400 (círculo) | `quienes-somos.json` → `equipo.miembros[].foto` — requiere agregar el campo y tocar `quienes-somos.astro` |

## Contenido provisional

- **Blog (Actualidad):** 6 artículos con páginas individuales
  (`/actualidad/[slug]`) y fotos reales (`blog-*.jpg`). Pendiente de
  **aprobación del cliente**: revisar textos, fechas y tiempos de lectura.
  El campo `contenido` usa bloques: `parrafo`, `subtitulo`, `lista`, `consejo`
  (ver `SECCIONES.md`).
- **Redes sociales:** en `sitio.json` las tres redes están vacías (`href: ""`),
  por eso el pie aún no muestra los botones. Pedir las URLs reales.
- **Estatutos:** en `sitio.json` → `legales` hay un enlace "Estatutos" con
  `href: "#"`. El PDF de estatutos reformados está en `insumos/negocio/`;
  subirlo a `public/` y apuntar el enlace.

## Decisiones pendientes con el cliente

- **Dominio** (`conamic.org`): confirmar quién lo registra y a nombre de quién.
- **Hosting / publicación:** elegir ruta (hosting propio del cliente,
  Cloudflare Pages, Netlify o GitHub Pages) durante la instalación, con el
  cliente presente.
- **Correo corporativo** `gerencia@conamic.org`: confirmar que existe y funciona.
- **Formularios:** hoy envían por WhatsApp. Definir si se pasa a un formulario
  real con notificaciones automáticas (módulo forms-whatsapp del generador).

## Verificación pendiente antes de publicar

- [ ] Probar el sitio completo en móvil real a 320px y 375px.
- [ ] Revisar contraste de textos grises sobre fondo claro (accesibilidad).
- [ ] Probar los dos formularios enviando un mensaje de prueba al WhatsApp real.
