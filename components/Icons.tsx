import type { SVGProps } from "react";
const base = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
export const HeartIcon = (p: SVGProps<SVGSVGElement>) => <svg {...base} {...p}><path d="M20.8 4.9c-2-2-5.2-2-7.2 0L12 6.5l-1.6-1.6a5.1 5.1 0 0 0-7.2 7.2L12 21l8.8-8.9c2-2 2-5.2 0-7.2Z"/></svg>;
export const BagIcon = (p: SVGProps<SVGSVGElement>) => <svg {...base} {...p}><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>;
export const MenuIcon = (p: SVGProps<SVGSVGElement>) => <svg {...base} {...p}><path d="M4 8h16M4 16h16"/></svg>;
export const CloseIcon = (p: SVGProps<SVGSVGElement>) => <svg {...base} {...p}><path d="m6 6 12 12M18 6 6 18"/></svg>;
export const ArrowIcon = (p: SVGProps<SVGSVGElement>) => <svg {...base} {...p}><path d="M5 12h14M14 7l5 5-5 5"/></svg>;
export const InstagramIcon = (p: SVGProps<SVGSVGElement>) => <svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg>;

export const SparkleIcon = (p: SVGProps<SVGSVGElement>) => <svg {...base} {...p}><path d="M12 2c.35 5.1 2.9 7.65 8 8-5.1.35-7.65 2.9-8 8-.35-5.1-2.9-7.65-8-8 5.1-.35 7.65-2.9 8-8Z"/></svg>;
