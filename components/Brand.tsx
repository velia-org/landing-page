export function Wordmark({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <img
      className={`wordmark brandWordmark ${className}`.trim()}
      src={light ? "/brand/velia-wordmark-cream.svg" : "/brand/velia-wordmark-burgundy.svg"}
      alt="VELIA"
      width={710}
      height={199.25}
      draggable={false}
    />
  );
}

export function Monogram({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <img
      className={`brandMonogram ${className}`.trim()}
      src={light ? "/brand/velia-monogram-va-circle-cream.svg" : "/brand/velia-monogram-va-circle-burgundy.svg"}
      alt="Monograma VA de VELIA"
      width={220.5}
      height={230}
      draggable={false}
    />
  );
}
