"use client";

import Link from "next/link";
import { ZodiacIcon, zodiacSigns } from "./ZodiacIcon";
import { Monogram } from "./Brand";

export function ZodiacOrbit({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`zodiacOrbit ${compact ? "compact" : ""}`} data-cursor="drag" data-cursor-label="EXPLORA">
      <div className="zodiacOrbitHalo" />
      <div className="zodiacOrbitInner" />
      <div className="zodiacOrbitRing">
        {zodiacSigns.map(([id, label], index) => (
          <Link
            key={id}
            href={`/descubre?sign=${id}`}
            className="zodiacOrbitItem"
            style={{ "--angle": `${index * 30}deg`, "--neg-angle": `${-index * 30}deg` } as React.CSSProperties}
            aria-label={`Descubrir joya para ${label}`}
            data-cursor="hover"
          >
            <span className="zodiacOrbitFace">
              <ZodiacIcon sign={id} />
              <small>{label}</small>
            </span>
          </Link>
        ))}
      </div>
      <div className="zodiacOrbitCore"><Monogram light/><span>VELIA</span></div>
    </div>
  );
}
