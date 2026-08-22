/**
 * Prefija las rutas internas con la carpeta donde vive el sitio.
 *
 * En GitHub Pages el sitio no está en la raíz del dominio sino en una subcarpeta
 * (`/web-conamic-prueba/`), así que un enlace escrito como `/servicios` apuntaría
 * fuera del sitio. Esta función le antepone la carpeta correcta.
 *
 * Cuando CONAMIC tenga su dominio propio, el sitio pasa a estar en la raíz, `base`
 * vuelve a `/` en astro.config.mjs y esta función deja de prefijar nada — sin tocar
 * ni un enlace.
 *
 * NO toca los enlaces externos (https://, wa.me, mailto:, tel:, #ancla).
 */
export function ruta(destino: string | undefined | null): string {
  if (!destino) return "";

  // Externos y anclas: se dejan tal cual.
  if (/^([a-z]+:|\/\/|#)/i.test(destino)) return destino;

  // Relativos (sin barra inicial): tampoco se tocan.
  if (!destino.startsWith("/")) return destino;

  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return base + destino;
}
