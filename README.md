# NoCloudware: sitio con Astro

## Comandos
```
npm install
npm run dev       # desarrollo en http://localhost:4321
npm run build     # compila a /dist (antes descarga versiones de GitHub)
npm run preview
```
Despliegue en Cloudflare Pages: comando `npm run build`, directorio de salida `dist`.
Las URLs se conservan (`/turnafile.html`, etc.) gracias a `build.format: 'file'`.

## Estructura
- `src/styles/tokens.css`  tokens Aether (color, tipografía, radios WinUI 3). Fuente única de estilo.
- `src/styles/kumo-bridge.css`  mapea los tokens de Kumo a Aether (para tus apps de Cloudflare).
- `src/styles/base.css`  reset, header, footer, botones.
- `src/styles/legacy.css`  clases de las páginas migradas; debería ir encogiendo.
- `src/data/products.ts`  catálogo: agregar un producto aquí actualiza home, menú y footer.
- `src/layouts/Base.astro`  head, SEO, tema sin parpadeo, header y footer en un solo lugar.
- `src/pages/index.astro`  home rediseñada.
- `src/pages/*.astro`  las demás páginas, migradas del HTML original (pendientes de rediseño).
- `scripts/fetch-releases.mjs`  versión, tamaño y fecha desde GitHub, en build (no en el navegador).

## Usar Kumo en tus apps de Cloudflare
```css
@import "@cloudflare/kumo/styles";
@import "./tokens.css";
@import "./kumo-bridge.css";
```

## Iconos
`src/components/Icon.astro` inserta SVG de Fluent UI System Icons (paquete `@fluentui/svg-icons`):
`<Icon name="globe" />`. Nombres en `node_modules/@fluentui/svg-icons/icons/<nombre>_20_regular.svg`.

## Verificado en esta entrega
Build sin errores (12 páginas), sin enlaces internos rotos, sin scroll horizontal en móvil (390 px),
tema claro/oscuro persistente sin parpadeo, menús con hover, clic, teclado y Escape, menú móvil.
No verificado en el entorno de pruebas (sin acceso a Internet): PayPal en donate y las capturas
alojadas en raw.githubusercontent.com.

## Pendiente sugerido
1. Convertir las secciones repetidas de las páginas de producto (pasos, características, tecnologías) en componentes.
2. Opcional: GitHub Action que reconstruya el sitio cuando salga una release nueva.
