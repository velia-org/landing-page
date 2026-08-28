export function Wordmark({ light = false }: { light?: boolean }) {
  return <span className={`wordmark ${light ? "wordmarkLight" : ""}`} aria-label="Velia">VELI<span>A</span></span>;
}
export function Monogram({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 90 90" aria-label="Monograma VA"><path d="M16 20 40 70 61 22" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M39 70 61 20 77 70M49 50h20" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M65 16c4 1 7 4 8 8-4-1-7-4-8-8Z" fill="currentColor"/></svg>;
}
