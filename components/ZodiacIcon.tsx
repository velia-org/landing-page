import type { SVGProps } from "react";

export const zodiacSigns = [
  ["aries", "Aries"], ["tauro", "Tauro"], ["geminis", "Géminis"], ["cancer", "Cáncer"],
  ["leo", "Leo"], ["virgo", "Virgo"], ["libra", "Libra"], ["escorpio", "Escorpio"],
  ["sagitario", "Sagitario"], ["capricornio", "Capricornio"], ["acuario", "Acuario"], ["piscis", "Piscis"]
] as const;

const paths: Record<string, React.ReactNode> = {
  aries: <><path d="M4 19C5.8 8 9 4.5 12 11v10"/><path d="M20 19C18.2 8 15 4.5 12 11"/></>,
  tauro: <><path d="M5 5c1 4 4 5 7 5s6-1 7-5"/><circle cx="12" cy="15" r="5"/></>,
  geminis: <><path d="M7 4c3 1 7 1 10 0M7 20c3-1 7-1 10 0M8.5 5v14M15.5 5v14"/></>,
  cancer: <><path d="M5 10c2-5 10-6 14-2"/><circle cx="8" cy="10" r="2.2"/><path d="M19 14c-2 5-10 6-14 2"/><circle cx="16" cy="14" r="2.2"/></>,
  leo: <><circle cx="8" cy="11" r="3"/><path d="M11 11c2-7 8-6 7-1-.5 2-3 3-3 6 0 2 1 3 3 3"/></>,
  virgo: <path d="M4 18V8c0-3 4-3 4 0v10V8c0-3 4-3 4 0v10V8c0-3 4-3 4 0v7c0 3 2 4 4 2-1 4-5 5-8 2"/>,
  libra: <><path d="M5 15h14M3 19h18"/><path d="M8 15c0-5 8-5 8 0"/></>,
  escorpio: <><path d="M3 18V8c0-3 4-3 4 0v10V8c0-3 4-3 4 0v10V8c0-3 4-3 4 0v9"/><path d="M15 17h5m0 0-2-2m2 2-2 2"/></>,
  sagitario: <><path d="M5 19 19 5M13 5h6v6M6 9l9 9"/></>,
  capricornio: <><path d="M4 7v11M4 10c2-4 6-4 7 1l1 6"/><path d="M12 17c2-5 7-4 7 0 0 3-4 4-6 2"/></>,
  acuario: <><path d="M3 10l4-3 3 3 4-3 3 3 4-3"/><path d="M3 16l4-3 3 3 4-3 3 3 4-3"/></>,
  piscis: <><path d="M8 4c-5 4-5 12 0 16M16 4c5 4 5 12 0 16M5 12h14"/></>
};

export function ZodiacIcon({ sign, ...props }: { sign: string } & SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[sign] ?? paths.libra}</svg>;
}
