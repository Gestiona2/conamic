# LIMITES.md — Qué no tocar y cuándo llamar al proveedor

## Archivos que el agente del cliente no modifica

- `astro.config.mjs` — dominio e integraciones de compilación.
- `package.json` / `package-lock.json` — dependencias y versiones.
- `src/styles/global.css` — colores de marca, tipografías, componentes. Un
  cambio mal hecho aquí rompe todo el sitio a la vez.
- `src/layouts/Layout.astro` — menú, pie, tema claro/oscuro, animaciones.
  Los textos que cambian viven en los JSON; este archivo solo se toca para
  cambios estructurales.
- `public/vendor/` y `public/fonts/` — librerías y fuentes internas.

## Pedidos que exceden al agente del cliente (los hace el proveedor)

1. **Rediseñar el sitio o cambiar la identidad visual** (colores, tipografías,
   logo). La marca está fijada en el manual de CONAMIC.
2. **Crear un tipo de página nueva desde cero** (tienda, pagos, área privada,
   sistema de login). Requiere decisiones fuera del alcance del sitio actual.
3. **Cambiar el destino de los formularios** (pasar de WhatsApp a base de
   datos o notificaciones automáticas). Hay un módulo previsto para esto.
4. **Migrar de hosting o de dominio.**
5. **Tocar la configuración de publicación** (GitHub Actions, DNS).

Ante cualquiera de estos, la respuesta correcta es: *"esto lo resuelve tu
proveedor"* y anotar el pedido, no intentarlo.

## Reglas de oro dentro del propio sitio

- Todo texto se edita en `src/datos/*.json`. Si una palabra está en un
  `.astro`, avisar antes de tocarlo.
- Después de cualquier cambio: `npm run build` debe terminar sin errores.
  Si falla, deshacer el último cambio del JSON (casi siempre es una coma).
- Nunca borrar la casilla de autorización de datos personales de los
  formularios: es requisito legal (Ley 1581 de 2012).
