# PUBLICAR.md — Cómo el sitio sale a internet

> **Estado: la ruta de publicación aún no está elegida.** Se decide con el
> cliente durante la instalación (ver PENDIENTES.md). Este documento describe
> el flujo común y se completa al elegir.

## El flujo de siempre: mostrar → aprobar → publicar

1. **Mostrar.** Con `npm run dev` el sitio corre en la computadora local y
   se ve en `http://localhost:4321` sin salir a internet.
2. **Aprobar.** El cliente revisa los cambios. Si no aprueba, no se publica nada.
3. **Publicar.** `npm run build` genera `dist/`; esa carpeta sube a la plataforma
   de publicación. Según la ruta elegida, la subida es automática (Git) o manual.
4. **Verificación.** Los cambios suelen verse en 1–3 minutos tras publicar.
   Revisar siempre la versión pública, no la caché del navegador
   (Ctrl+Shift+R fuerza recarga).

## Antes de publicar, revisar

- Que `npm run build` termine sin errores.
- Que las imágenes nuevas estén dentro de `public/`.
- En móvil: menú, formularios y textos grandes.

## "Devuélvelo como estaba" — revertir

El historial del sitio vive en Git. Para devolver cualquier cambio:

1. `git log --oneline` muestra los últimos estados del sitio con su fecha.
2. `git checkout <código> -- src/datos/` devuelve los contenidos a ese estado.
3. Compilar y publicar de nuevo.

El cliente nunca necesita saber estas órdenes: las ejecuta el agente.

## Rutas posibles (se elige una con el cliente)

| Ruta | Cuándo |
|---|---|
| Hosting propio del cliente | Si ya tiene hosting contratado (ej: Hostinger). |
| Cloudflare Pages | Sin hosting. Gratis, repos privados, vistas previas por cambio. |
| Netlify | Sin hosting + si se necesitan formularios con backend. |
| GitHub Pages | Sitio simple cuando el código puede ser público. |

En todas, el build corre en la nube: el cliente no necesita Node en su equipo.

## Entrega final (no olvidar)

Además del código fuente, guardar el **compilado** (`dist/`) en la entrega:
es lo que garantiza que el sitio siga vivo aunque dentro de años cambien las
herramientas para compilarlo.
