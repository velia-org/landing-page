"use client";

import type { ReactNode } from "react";
import { useRef } from "react";

export function Magnetic({ children, strength = 0.16, className = "" }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * strength;
    const y = (e.clientY - r.top - r.height / 2) * strength;
    el.style.transform = `translate3d(${x}px,${y}px,0)`;
  };
  const leave = () => {
    if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
  };
  return <div ref={ref} className={`magnetic ${className}`} onPointerMove={move} onPointerLeave={leave}>{children}</div>;
}
