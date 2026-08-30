"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { BotanicalScene } from "./BotanicalScene";
import { Monogram, Wordmark } from "../Brand";
import { InstagramIcon } from "../Icons";

export function BotanicalFooter() {
  const section = useRef<HTMLElement>(null);
  const revealRef = useRef(0);

  // V3.3: the footer itself is exactly one viewport tall and stays in normal
  // document flow. The reveal is driven ONLY while the footer enters the
  // viewport. There is no artificial runway after it, so the document cannot
  // scroll into an empty black tail after the final composition.
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start end", "start start"],
  });

  const veil = useTransform(scrollYProgress, [0, 0.30, 0.72, 1], [0.12, 0.45, 0.88, 1]);
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const clamped = Math.max(0, Math.min(1, value));
    // Once a flower has been revealed, never collapse it again. This avoids
    // Lenis / dynamic-viewport edge cases at the exact document end.
    revealRef.current = Math.max(revealRef.current, clamped);
  });

  return (
    <section ref={section} className="botanicalFooterWrap" aria-label="Pie de página VELIA">
      <div className="botanicalFooterStage">
        <motion.div className="footerDarkVeil" style={{ opacity: veil }} />
        <motion.div
          className="botanicalSceneShell"
          initial={{ opacity: 0.14 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <BotanicalScene revealRef={revealRef} />
        </motion.div>

        <motion.footer
          className="footerV3"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="footerBrand">
            <Wordmark light />
            <p>Lleva lo que significa.</p>
          </div>

          <div className="footerLinks">
            <div>
              <span>JOYAS</span>
              <Link className="footerHairline" href="/joyas">Colecciones</Link>
              <Link className="footerHairline" href="/joyas">Collares</Link>
              <Link className="footerHairline" href="/joyas">Aretes</Link>
            </div>
            <div>
              <span>VELIA</span>
              <Link className="footerHairline" href="/nosotros">Nuestra historia</Link>
              <Link className="footerHairline" href="/descubre">Descubre tu joya</Link>
              <a className="footerHairline" href="#">Cuidados</a>
            </div>
            <div>
              <span>CONECTA</span>
              <a className="footerHairline" href="#"><InstagramIcon /> Instagram</a>
              <a className="footerHairline" href="#">WhatsApp</a>
            </div>
          </div>

          <Monogram light className="footerMonogram" />
          <div className="footerBottom">
            <span>© 2026 VELIA</span>
            <span>Joyería con significado</span>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
