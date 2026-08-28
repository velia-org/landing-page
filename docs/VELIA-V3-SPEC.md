# VELIA Web V3 — Especificación viva

## Principio
VELIA no debe parecer una plantilla de ecommerce ni una web esotérica. La prioridad visual es:

1. Producto
2. Marca
3. Fotografía
4. Tipografía
5. Significado
6. Movimiento
7. Decoración

Dirección: joyería boutique + editorial de moda + significado personal + astrología sutil.

## Identidad
Paleta base aprobada:
- Burgundy `#5B1F33`
- Wine `#7D3B57`
- Dusty rose `#B9778C`
- Blush `#EBC7CD`
- Cream `#F6EFE8`

Wordmark: VELIA. Monograma: VA. No utilizar VL.

## Cero regresiones
Una nueva versión no debe eliminar componentes interesantes de versiones anteriores por facilidad técnica. Deben conservarse, mejorarse o reemplazarse por algo objetivamente superior.

## Interacciones obligatorias V3
- Órbita zodiacal con los 12 signos dibujados como SVG, nunca emojis.
- Rotación lenta; los símbolos mantienen orientación legible.
- Pausa/interacción al hover y acceso a `/descubre?sign=...`.
- Cursor personalizado con easing, `mix-blend-difference` y estados contextuales como `VER` y `EXPLORA`.
- Hairlines que crecen al entrar el puntero y se retraen al salir.
- CTAs magnéticos sutiles.
- Lenis para smooth scroll en dispositivos compatibles.
- `prefers-reduced-motion` siempre respetado.

## Footer inmersivo
Referencia conceptual: el footer del HTML `sacar-el-footer.html` proporcionado por el usuario.

Reimplementación propia de Velia:
- entrada progresiva crema -> casi negro;
- escena WebGL/Three.js;
- plantas y flores procedurales, no assets de la referencia;
- crecimiento progresivo con scroll;
- idle motion suave;
- shader/ripple sutil que reacciona al cursor como una superficie líquida;
- versión adaptada a móvil y reduced motion.

## Referencias visuales/técnicas acumuladas
- Immersive Garden / Cartier: footer inmersivo, transición de escena y narrativa.
- Aether boilerplate: cursor, magnetic hover, hairlines, smooth-scroll y estructura de motion.
- Alethia: capas, composición fija/sticky, contraste y cambios visuales mientras se hace scroll.
- Charlotte Chesnais: disciplina, espacio negativo y producto escultórico.
- Gentle Monster: storytelling de campaña.
- Jacquemus: fotografía full bleed y UI que desaparece frente al contenido.
- Dior Rose des Vents: experiencia de descubrimiento joya + simbolismo.
- Motion Primitives / Magic UI / shadcn: fuente de primitives, no de identidad visual.
- Landbook / Dribbble: referencias de dirección de arte, no fuente primaria de código.
- textura-agency/next16-claude-starter: referencia para arquitectura Next.js orientada a motion.

## Product cards
Nunca permitir que nombre/precio se salga de la card.
- `min-width: 0` en columnas flex/grid de copy.
- Nombre permite wrap real y varias líneas.
- Precio protegido con `white-space: nowrap`.
- En móvil, nombre y precio pueden pasar a filas separadas.
- No reducir la fuente hasta hacerla ilegible para "hacerla caber".

## Rutas presentes
- `/`
- `/joyas`
- `/producto/[slug]`
- `/descubre`
- `/nosotros`
- 404 personalizada

## Funcionalidad prototipo
- productos mock estructurados;
- filtros de colección;
- wishlist persistente con localStorage;
- bolsa persistente con localStorage;
- drawer de bolsa;
- quiz zodiacal;
- selección desde la órbita hacia el quiz;
- resultado de joya por afinidad;
- responsive.

## Pendientes de producción
- reemplazar fotografías conceptuales SVG por fotografía oficial de producto;
- reemplazar el monograma recreado por el vector oficial si se dispone del asset final;
- conectar Sanity/CMS;
- inventario y precios reales;
- checkout/pasarela;
- WhatsApp e Instagram definitivos;
- analytics;
- políticas reales de entrega/cambios;
- generación real de tarjeta compartible y/o IA para recomendaciones, si se decide implementar.

## Regla visual
El motion debe sentirse como joyería: lento donde revela, rápido donde responde, silencioso cuando no hace falta.
