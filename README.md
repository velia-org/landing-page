# VELIA V3.3 — footer sin cola negra

Esta revisión elimina por completo el runway/sticky del footer. El footer final mide exactamente un viewport, entra en flujo normal y no existe contenido/espacio negro después de él. Lenis tiene `overscroll: false`.

# VELIA Web V3

Prototipo navegable de la experiencia digital de VELIA, construido con Next.js App Router + TypeScript.

## Ejecutar

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

Para producción:

```bash
npm run build
npm start
```

## Stack
- Next.js 16.3.3
- React 19.2.8
- TypeScript
- Motion
- Lenis
- React Three Fiber / Three.js
- CSS propio con design tokens VELIA

## Incluye
- Home editorial
- Catálogo y filtros
- PDP
- Wishlist/bolsa persistentes
- Quiz zodiacal
- 12 símbolos zodiacales SVG propios
- Órbita zodiacal animada
- Smooth scroll
- Cursor contextual con inversión
- Hover hairlines y magnetic CTAs
- Footer botánico WebGL original con ripple reactivo
- Responsive y reduced-motion
- Página Nosotros y 404

## Importante
Las fotografías actuales, nombres, materiales y precios de productos son datos/arte conceptual de prototipo. Antes de publicar deben sustituirse por inventario, fotografías y datos reales.

El footer inmersivo y las interacciones se reimplementaron para VELIA a partir de técnicas observadas en las referencias proporcionadas; no se incluyen assets de marca ni shaders propietarios de terceros.

Consulta `docs/VELIA-V3-SPEC.md` para la especificación viva de diseño y las reglas de futuras iteraciones.

## Ajuste de footer + identidad oficial (29/08/2026)

- Se eliminó el runway extra de `155vh` del footer inmersivo. La animación ahora ocurre mientras el footer entra al viewport y el último frame permanece visible en el final real del documento; ya no debe existir una pantalla negra vacía después de las flores.
- Se integraron los assets oficiales entregados por VELIA:
  - `public/brand/velia-wordmark-burgundy.svg`
  - `public/brand/velia-monogram-va-circle-burgundy.svg`
  - `public/brand/velia-favicon.svg`
  - `app/icon.svg` usa el favicon oficial de Next.js.
- `Wordmark` y `Monogram` ahora renderizan la geometría oficial mediante CSS mask para poder conservar exactamente el dibujo y cambiar entre borgoña/crema según el fondo.
- El PDF original del monograma se conserva como fuente de diseño en `brand-assets/`; no se carga en runtime.
