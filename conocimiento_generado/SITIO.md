# SITIO.md — ¿Qué es esto?

Sitio web de **CONAMIC** (Confederación Nacional de Empresarios de la Microempresa),
gremio colombiano que une, representa y potencia a los microempresarios del país.

- **Dominio previsto:** https://conamic.org
- **Público:** microempresarios urbanos y rurales, asociaciones, federaciones y cooperativas de economía popular.
- **Objetivo principal del sitio:** que el visitante llene el **formulario de afiliación** (`/afiliacion`). WhatsApp es el canal alterno.

## Mapa de páginas

| Página | Archivo de contenido | Qué hace |
|---|---|---|
| Inicio `/` | `src/datos/inicio.json` | Portada con mensaje "El 99.6% de Colombia se levanta aquí", blindaje empresarial, cifras, identidad, radar gremial y preguntas frecuentes. |
| Quiénes Somos `/quienes-somos` | `src/datos/quienes-somos.json` | Misión, visión, valores, historia (línea de tiempo), junta directiva y alianzas. |
| Servicios `/servicios` | `src/datos/servicios.json` | Los 5 servicios gremiales con su gancho. |
| Beneficios `/beneficios` | `src/datos/beneficios.json` | Los 5 beneficios de afiliarse, cada uno con metáfora e "ideal para". |
| Afiliación `/afiliacion` | `src/datos/afiliacion.json` | Página de conversión: 3 pasos + formulario de registro. |
| Actualidad `/actualidad` | `src/datos/actualidad.json` | Blog / centro de fortalecimiento con filtro por categoría. |
| Contacto `/contacto` | `src/datos/contacto.json` | Canales de atención + formulario de contacto. |
| Política de privacidad `/politica-privacidad` | `src/datos/legales.json` | Ley 1581 de 2012. |
| Tratamiento de datos `/tratamiento-datos` | `src/datos/legales.json` | Autorización de Habeas Data. |

## Cómo funciona por dentro

Todo el texto vive en `src/datos/`, un archivo JSON por página. Las páginas `.astro`
solo dibujan lo que dice el JSON. **Para cambiar cualquier palabra del sitio, se edita
el JSON correspondiente, nunca el código.**

Los formularios de afiliación y contacto hoy **envían los datos por WhatsApp**
(mensaje prellenado al número de la Confederación). Están listos para conectarse a un
formulario real o notificaciones automáticas cuando el cliente lo pida.
