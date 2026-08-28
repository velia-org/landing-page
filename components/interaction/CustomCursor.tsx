"use client";

import { useEffect, useRef, useState } from "react";

type CursorMode = "default" | "hover" | "view" | "drag";

const sizes: Record<CursorMode, number> = {
  default: 7,
  hover: 42,
  view: 76,
  drag: 76,
};

export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const [mode, setMode] = useState<CursorMode>("default");
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer:fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    document.documentElement.classList.add("velia-cursor-enabled");

    const onMove = (e: PointerEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    const onOver = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.("[data-cursor]");
      if (!el) {
        setMode("default");
        setLabel("");
        return;
      }
      const raw = el.getAttribute("data-cursor") as CursorMode | null;
      setMode(raw && raw in sizes ? raw : "hover");
      setLabel(el.getAttribute("data-cursor-label") || "");
    };

    let raf = 0;
    const frame = () => {
      current.current.x += (target.current.x - current.current.x) * 0.16;
      current.current.y += (target.current.y - current.current.y) * 0.16;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${current.current.x}px,${current.current.y}px,0) translate(-50%,-50%)`;
      }
      raf = requestAnimationFrame(frame);
    };

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerover", onOver);
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.documentElement.classList.remove("velia-cursor-enabled");
    };
  }, []);

  if (!enabled) return null;
  const filled = mode === "view" || mode === "drag";
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`veliaCursor ${filled ? "filled" : "difference"}`}
      style={{ width: sizes[mode], height: sizes[mode] }}
    >
      {filled && label ? <span>{label}</span> : null}
    </div>
  );
}
