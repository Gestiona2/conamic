# COMO-EDITAR.md — Recetas de los cambios más comunes

Cada receta dice exactamente qué archivo tocar. Después de editar un JSON,
el cambio se ve con `npm run dev` y sale a internet con `npm run build`.

---

## "Cambiar el teléfono / correo / dirección / WhatsApp"
→ `src/datos/sitio.json`, claves `telefono`, `correo`, `direccion`, `whatsapp`.
El WhatsApp va **solo números con el indicativo de país** (ej: `573134184390`).
La dirección del pie y de contacto enlazan solas a Google Maps.

## "Cambiar un texto del menú o agregar una página al menú"
→ `src/datos/sitio.json` → `menu`. Cada entrada necesita `id`, `texto` y `href`.
Si la página es nueva, además hay que crear su `.astro` y su JSON (ver LIMITES.md).

## "Cambiar la frase grande de la portada"
→ `src/datos/inicio.json` → `portada.titulo` y `portada.tituloAcento`
(el acento se pinta amarillo).

## "Cambiar la imagen de portada"
→ `src/datos/inicio.json` → `portada.imagen` (poner la ruta, ej: `/brand/foto.jpg`)
y actualizar `portada.imagenAlt` con una descripción real.
La imagen se sube a `public/brand/` o `public/img/`. Medida ideal: 1200×900.

## "Agregar o cambiar un servicio"
→ `src/datos/servicios.json` → `items`. Copiar un objeto existente como molde.
Los íconos son nombres de Lucide (`scale`, `graduation-cap`, `banknote`...).
Lista completa: https://lucide.dev/icons

## "Agregar un beneficio"
→ `src/datos/beneficios.json` → `items`. Campos: `icono`, `metafora`, `titulo`,
`texto`, `idealPara`.

## "Cambiar una cifra del inicio"
→ `src/datos/inicio.json` → `cifras.items`. El `numero` va sin comas ni puntos
de miles; el `sufijo` ("+", "%") va aparte.

## "Agregar una pregunta frecuente"
→ `src/datos/afiliacion.json` → `faq.items` **y también** `src/datos/inicio.json`
→ `faq.items` (aparecen en las dos páginas).

## "Agregar un artículo al blog"
→ `src/datos/actualidad.json` → `articulos`. La `categoria` debe coincidir
exactamente con una de `categorias` para que el filtro la muestre.

## "Cambiar las opciones del formulario de afiliación"
→ `src/datos/afiliacion.json` → `formulario.campos.sectorOpciones`.

## "Cambiar los asuntos del formulario de contacto"
→ `src/datos/contacto.json` → `asuntos`.

## "Actualizar la política de privacidad"
→ `src/datos/legales.json`. Cambiar también `actualizacion` (fecha al pie).

## "Poner el logo definitivo si cambia"
Reemplazar `public/brand/logo.png` (imagen cuadrada) y regenerar favicon.png
(64×64) y apple-touch-icon.png (180×180) a partir de él.

## "Cambiar el texto del botón principal"
→ `src/datos/sitio.json` → `ctaPrincipal.texto`.

## Ver el resultado

```bash
npm run dev       # http://localhost:4321 — se actualiza solo al guardar
```
