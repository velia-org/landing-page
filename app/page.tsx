import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, SparkleIcon } from "@/components/Icons";
import { Monogram } from "@/components/Brand";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { ZodiacOrbit } from "@/components/ZodiacOrbit";
import { Magnetic } from "@/components/interaction/Magnetic";
import { products } from "@/data/products";

export default function Home(){return <>
<section className="hero">
  <Image src="/images/hero.svg" alt="Composición editorial de joyería Velia" fill priority sizes="100vw"/>
  <div className="heroShade"/>
  <div className="heroGridLines" aria-hidden="true"><i/><i/><i/></div>
  <div className="heroContent">
    <span className="eyebrow light">JOYERÍA · LIMA</span>
    <h1>Lleva lo que<br/><em>significa.</em></h1>
    <p>Joyas creadas para acompañar aquello que eres, recuerdas y eliges llevar contigo.</p>
    <div className="heroActions">
      <Magnetic><Link data-cursor="hover" className="primaryButton lightButton animatedEdge" href="/joyas">Explorar joyas <ArrowIcon/></Link></Magnetic>
      <Link data-cursor="hover" className="ghostButton animatedEdge" href="/descubre">Descubre tu joya</Link>
    </div>
  </div>
  <div className="heroMark"><Monogram light/></div>
  <div className="heroScrollCue" aria-hidden="true"><span>DESCUBRE</span><i/></div>
</section>

<section className="intro section">
  <Reveal><span className="eyebrow">PIEZAS ELEGIDAS</span><div className="introGrid"><h2>Hay joyas que adornan.<br/><em>Otras terminan formando parte de ti.</em></h2><p>Una selección pensada para vivir contigo: delicada, combinable y cargada de intención.</p></div></Reveal>
  <div className="productGrid homeProducts">{products.slice(0,4).map(p=><ProductCard key={p.slug} product={p}/>)}</div>
  <Link data-cursor="hover" className="underLink hairlineLink" href="/joyas">Ver todas las joyas <ArrowIcon/></Link>
</section>

<section className="zodiacFeature">
  <div className="zodiacArt"><ZodiacOrbit/></div>
  <Reveal className="zodiacCopy"><span className="eyebrow light">TU JOYA · TU SIGNO</span><h2>Hay una pieza<br/><em>para ti.</em></h2><p>Dinos un poco sobre ti y descubre qué joya de VELIA conecta con el momento que estás viviendo.</p><Magnetic><Link data-cursor="hover" className="primaryButton lightButton animatedEdge" href="/descubre">Descubrir mi joya <ArrowIcon/></Link></Magnetic></Reveal>
</section>

<section className="signatureStatement">
  <div className="statementSparkle"><SparkleIcon/></div>
  <Reveal><span className="eyebrow">UNA JOYA · UNA HISTORIA</span><h2>No elegimos únicamente<br/>lo que <em>se ve bonito.</em></h2><p>Elegimos lo que puede quedarse con nosotras. Una fecha, una etapa, una persona, una intención.</p></Reveal>
  <div className="statementLine" aria-hidden="true"/>
</section>

<section className="meaning section">
  <Reveal><div className="meaningHeader"><span className="eyebrow">NO SOLO LO QUE LLEVAS</span><h2>Lo que <em>significa.</em></h2></div></Reveal>
  <div className="meaningGrid">
    <div className="meaningImage" data-cursor="view" data-cursor-label="AURORA"><Image src="/images/meaning.svg" alt="Joya Velia presentada sobre una composición editorial" fill sizes="(max-width:800px) 100vw, 55vw"/></div>
    <Reveal className="meaningCard"><span className="tinyLabel">AURORA</span><blockquote>“Para recordar que siempre puedes empezar otra vez.”</blockquote><div className="meaningMeta"><span>SIGNIFICADO<strong>Nuevos comienzos</strong></span><span>AFINIDAD<strong>Libra · Tauro · Piscis</strong></span></div><Link data-cursor="hover" className="underLink hairlineLink" href="/producto/aurora">Conocer Aurora <ArrowIcon/></Link></Reveal>
  </div>
</section>

<section className="packaging">
  <div className="packagingImage" data-cursor="view" data-cursor-label="DETALLES"><Image src="/images/packaging.svg" alt="Packaging conceptual de Velia con tarjeta" fill sizes="50vw"/></div>
  <Reveal className="packagingCopy"><span className="eyebrow">LA EXPERIENCIA VELIA</span><h2>Un mensaje<br/><em>elegido para ti.</em></h2><p>Cada pedido puede guardar algo más que una joya. Una tarjeta, un mensaje y una pequeña razón para conservar ese momento.</p><Link data-cursor="hover" className="underLink hairlineLink" href="/descubre">Descubrir mi mensaje <ArrowIcon/></Link></Reveal>
</section>

<section className="editorialStrip section">
  <div className="editorialStripHead"><span className="eyebrow">VELIA · DIARIO</span><h2>Pequeños símbolos.<br/><em>Grandes significados.</em></h2></div>
  <div className="editorialTiles">
    <article className="editorialTile tall" data-cursor="view" data-cursor-label="VER"><Image src="/images/about.svg" alt="Editorial Velia" fill sizes="45vw"/></article>
    <article className="editorialQuote"><SparkleIcon/><p>Hay cosas que merecen quedarse contigo.</p><span>VELIA</span></article>
    <article className="editorialTile" data-cursor="view" data-cursor-label="VER"><Image src="/images/detail.svg" alt="Detalle editorial Velia" fill sizes="35vw"/></article>
  </div>
</section>
</>}
