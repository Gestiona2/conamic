# README — Sitio web CONAMIC

Sitio oficial de la **Confederación Nacional de Empresarios de la Microempresa**.
Construido con Astro. Todo el contenido editable vive en `src/datos/`.

## Para empezar

```bash
npm install    # una sola vez
npm run dev    # abrir http://localhost:4321
```

## Documentación

Toda la guía del sitio está en `conocimiento_generado/`:

| Archivo | Qué responde |
|---|---|
| `SITIO.md` | ¿Qué es esto? Mapa de páginas y objetivo del sitio. |
| `MARCA.md` | ¿Cómo se ve y cómo habla? Colores, tipografías, tono. |
| `STACK.md` | ¿Con qué está hecho? Estructura y mapa de archivos. |
| `SECCIONES.md` | Inventario de secciones y sus límites. |
| `COMO-EDITAR.md` | Recetas de los cambios más comunes. |
| `PUBLICAR.md` | Cómo sale a internet y cómo revertir. |
| `PENDIENTES.md` | Lo provisional: imágenes placeholder y decisiones abiertas. |
| `LIMITES.md` | Qué no tocar sin el proveedor. |

## Regla única de edición

**Cambiar textos → JSON en `src/datos/`. Cambiar código → solo con el proveedor.**

## Estado

- [x] Las 7 páginas + legales + 404 construidas
- [x] Formularios enviando por WhatsApp (provisional)
- [ ] Imágenes reales (hoy: placeholders — ver PENDIENTES.md)
- [ ] Dominio, hosting y correo corporativo
- [ ] Publicación
