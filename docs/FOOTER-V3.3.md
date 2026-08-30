# VELIA V3.3 — Footer fix

The previous V3.2 still used a 150svh / 138svh footer wrapper with a 100svh sticky stage. That created animation runway after the visible footer and could expose an empty black tail.

V3.3 removes that architecture entirely:

- footer wrapper is exactly 100svh
- footer stage is normal-flow `position: relative`, not sticky
- reveal progress runs from `start end` to `start start` while the footer enters
- Lenis `overscroll` is disabled
- there is no artificial document height below the footer

At the maximum scroll position the complete footer composition remains the last visible viewport.
