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
  const { scrollYProgress } = useScroll({ target: section, offset: ["start end", "end end"] });
  const veil = useTransform(scrollYProgress,[0,.28,.72,1],[0,.48,.9,1]);
  const sceneOpacity = useTransform(scrollYProgress,[.14,.48],[0,1]);
  const copyY = useTransform(scrollYProgress,[.25,1],[55,0]);
  const copyOpacity = useTransform(scrollYProgress,[.35,.72],[0,1]);
  useMotionValueEvent(scrollYProgress,"change",v=>{revealRef.current=v;});

  return (
    <section ref={section} className="botanicalFooterWrap">
      <div className="botanicalFooterSticky">
        <motion.div className="footerDarkVeil" style={{opacity:veil}} />
        <motion.div className="botanicalSceneShell" style={{opacity:sceneOpacity}}><BotanicalScene revealRef={revealRef}/></motion.div>
        <motion.footer className="footerV3" style={{y:copyY,opacity:copyOpacity}}>
          <div className="footerBrand"><Wordmark light/><p>Lleva lo que significa.</p></div>
          <div className="footerLinks">
            <div><span>JOYAS</span><Link className="footerHairline" href="/joyas">Colecciones</Link><Link className="footerHairline" href="/joyas">Collares</Link><Link className="footerHairline" href="/joyas">Aretes</Link></div>
            <div><span>VELIA</span><Link className="footerHairline" href="/nosotros">Nuestra historia</Link><Link className="footerHairline" href="/descubre">Descubre tu joya</Link><a className="footerHairline" href="#">Cuidados</a></div>
            <div><span>CONECTA</span><a className="footerHairline" href="#"><InstagramIcon/> Instagram</a><a className="footerHairline" href="#">WhatsApp</a></div>
          </div>
          <Monogram className="footerMonogram"/>
          <div className="footerBottom">© 2026 VELIA <span>Joyería con significado</span></div>
        </motion.footer>
      </div>
    </section>
  );
}
