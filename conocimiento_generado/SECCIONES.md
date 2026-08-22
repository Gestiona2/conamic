# SECCIONES.md — Inventario de secciones

Una entrada por sección: qué es, dónde vive el contenido y sus límites.
**Para cambiar cualquier texto se edita solo el JSON — nunca el `.astro`.**

---

## Menú de navegación (todas las páginas)

- **Dónde está:** `src/datos/sitio.json` → `menu`
- **Qué contiene:** por entrada: `id`, `texto`, `href`.
- **Cuántas caben bien:** 5 a 7. Con más, se rompe en tablet.
- **Nota:** el botón "Quiero afiliarme" del menú está aparte, en `sitio.json` → `ctaPrincipal`.

## Pie de página (todas las páginas)

- **Dónde está:** `src/datos/sitio.json` → `descripcion`, `redes`, `legales` + textos fijos en `src/layouts/Layout.astro`
- **Nota:** dirección, teléfono, correo y horario salen de las claves sueltas de `sitio.json`.

## Portada / hero (inicio, todas las páginas interiores la imitan)

- **Dónde está:** primer bloque del JSON de cada página
- **Qué contiene:** `encabezado`, `titulo`, (`tituloAcento` en inicio), `texto`, imagen con su `imagenAlt`.
- **Largo del título:** hasta ~60 caracteres; más largo desborda en móvil.

## ¿Por qué CONAMIC? (inicio)

- **Dónde está:** `src/datos/inicio.json` → `intro`
- **Qué contiene:** dos párrafos (`texto1`, `texto2`).

## Blindaje empresarial (inicio) — 4 tarjetas

- **Dónde está:** `src/datos/inicio.json` → `servicios.items`
- **Qué contiene:** `icono` (nombre de ícono Lucide), `titulo`, `texto`.
- **Cuántas caben bien:** 4. La grilla las acomoda sola, pero con más de 6 se pierde jerarquía.
- **Largo del texto:** hasta ~300 caracteres.

## Cifras (inicio) — contadores animados

- **Dónde está:** `src/datos/inicio.json` → `cifras.items`
- **Qué contiene:** `numero` (puede llevar decimales), `sufijo` ("+", "%"...), `texto`, `icono`.
- **Cuántas caben bien:** 3 a 4.
- **Ojo:** `numero` debe ser un número sin separadores de miles (el contador lo anima).

## Identidad "El rostro de quienes mueven a Colombia" (inicio) — 3 tarjetas con foto

- **Dónde está:** `src/datos/inicio.json` → `identidad.items`
- **Qué contiene:** `etiqueta`, `imagen` (600×400), `imagenAlt`, `texto` (cita en primera persona).
- **Cuántas caben bien:** exactamente 3 (La Raíz · El Corazón · El Futuro).

## Radar Gremial (inicio) — franja azul

- **Dónde está:** `src/datos/inicio.json` → `radar.items`
- **Qué contiene:** `icono`, `titulo`, `subtitulo` (destacado amarillo), `texto`.

## Preguntas frecuentes (inicio y afiliación)

- **Dónde está:** `src/datos/inicio.json` → `faq.items` (y duplicado en `afiliacion.json` → `faq.items`)
- **Qué contiene:** `pregunta`, `respuesta`.
- **Cuántas caben bien:** 4 a 6. Cada respuesta hasta ~350 caracteres.
- **Ojo:** están en dos archivos; si se cambia una, cambiar en ambos (o avisar que queden distintas a propósito).

## Quiénes somos: misión/visión, valores, historia, junta, alianzas

- **Dónde está:** `src/datos/quienes-somos.json`
- Secciones: `misionVision` (2 párrafos), `valores.items` (3), `historia` (2 párrafos + `hitos` con `anio`/`texto`), `equipo.miembros` (`nombre`, `cargo`), `alianzas.items` (3).
- **Historia:** timeline zigzag (clases `.timeline*` en global.css) — línea central
  degradada, chips de año amarillos y tarjetas de vidrio alternando lados; en móvil
  la línea pasa a la izquierda. Agregar/quitar hitos solo tocando el JSON.
- **Junta directiva:** slider con scroll-snap (`.slider-*`, `.directivo-*`) — flechas,
  7 puntos indicadores y arrastre táctil; muestra 3 tarjetas en escritorio,
  2 en tablet y ~1.2 en móvil. El JS vive al final de `quienes-somos.astro`.
  Cada miembro muestra un círculo con placeholder; la foto oficial va en `PENDIENTES.md`
  (campo futuro: `equipo.miembros[].foto`).

## Actualidad: artículos individuales `/actualidad/[slug]`

- **Datos:** `actualidad.json` → `articulos[].contenido` (array de bloques).
- Bloques soportados por `src/pages/actualidad/[slug].astro`:
  `parrafo`, `subtitulo`, `lista` (items), `consejo` (caja destacada con icono).
- Campos por artículo: `titulo`, `slug` (URL), `categoria`, `segmento`,
  `descripcion`, `fecha` (texto legible), `tiempoLectura`, `imagen`, `imagenAlt`.
- Agregar un artículo = agregar un objeto al array con su contenido;
  la ruta se genera sola. El filtro de categorías vive en `actualidad.astro`.
- **Orden:** los artículos llevan `fechaISO` (AAAA-MM-DD) y el JSON va ordenado
  desc (lo más nuevo primero).
- **Paginación:** grilla de 12 por página con paginador (`#paginador`,
  se oculta si hay una sola página). Los filtros reinician a la página 1.
- **Home:** el bloque "Actualidad" (franja azul del radar) muestra siempre los
  3 artículos más nuevos, tomados dinámicamente de `actualidad.json`
  (`ultimosArticulos` en `index.astro`). `radar.items` en `inicio.json` ya no
  se usa para renderizar ese bloque.

## Servicios (página) — 5 servicios

- **Dónde está:** `src/datos/servicios.json` → `items`
- **Qué contiene:** `icono`, `titulo`, `texto`, `gancho` (frase destacada entre comillas al pie de la tarjeta).
- **Cuántos caben bien:** 5. Es la grilla principal de la página.

## Beneficios (página) — 5 beneficios

- **Dónde está:** `src/datos/beneficios.json` → `items`
- **Qué contiene:** `icono`, `metafora` (El Escudo...), `titulo`, `texto`, `idealPara`.
- **Formato:** lista vertical de tarjetas anchas; no poner más de 6 o la página se hace eterna.

## Afiliación: pasos + formulario

- **Pasos:** `src/datos/afiliacion.json` → `pasos.items` (exactamente 3).
- **Formulario — etiquetas:** `formulario.campos`; **opciones del selector de sector:** `formulario.campos.sectorOpciones`.
- **Comportamiento:** hoy envía los datos como mensaje de WhatsApp prellenado. El script está al final de `src/pages/afiliacion.astro`.

## Actualidad (blog)

- **Categorías (botones de filtro):** `src/datos/actualidad.json` → `categorias` (3 hoy).
- **Artículos:** `articulos` — `titulo`, `categoria` (debe coincidir con una categoría), `segmento`, `descripcion`, `imagen` (600×400), `fecha`.
- **Ojo:** hoy los artículos enlazan a WhatsApp porque aún no existen páginas individuales de artículo. Ver `PENDIENTES.md`.

## Contacto: canales + formulario

- **Canales:** `src/datos/contacto.json` → `canales` (icono, titulo, valor).
- **Asuntos del formulario:** `formulario.asuntos` — son los dolores reales del público.
- **Comportamiento:** igual que afiliación — envía por WhatsApp.

## Páginas legales

- **Ambas viven en:** `src/datos/legales.json` (`politicaPrivacidad` y `tratamientoDatos`), cada una con `secciones[]` (`titulo`+`texto`) e `intro`.
- **Las rutas** `/politica-privacidad` y `/tratamiento-datos` las genera `src/pages/[legal].astro`.
