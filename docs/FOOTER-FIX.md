# Footer inmersivo — corrección

## Problema anterior

La versión anterior daba al wrapper del footer una altura de `155vh` y mantenía una escena de `100svh` en `position: sticky`. En determinadas combinaciones de viewport + smooth scroll ese runway permitía seguir desplazándose después del momento visual útil, dejando una pantalla negra sin contenido.

## Implementación actual

El footer ocupa exactamente su etapa final (`100svh`). El progreso de `useScroll` se calcula desde que el footer entra por la parte inferior de la pantalla hasta que su borde inferior coincide con el borde inferior del viewport:

- `start end` → empieza la transición.
- `end end` → página en su final real.

En ese intervalo se interpolan:

- oscurecimiento del fondo;
- opacidad del canvas botánico;
- crecimiento progresivo de las plantas;
- aparición y desplazamiento del contenido del footer.

Al llegar al final, la composición completa queda en pantalla y no existe un runway posterior.
