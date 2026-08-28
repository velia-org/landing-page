"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { zodiacSigns, ZodiacIcon } from "./ZodiacIcon";
import { products } from "@/data/products";
import { ArrowIcon, SparkleIcon } from "./Icons";

const intentions=["Amor","Confianza","Cambio","Protección","Recuerdo","Una nueva etapa"];

export function ZodiacSelector(){
  const [step,setStep]=useState(1);
  const [sign,setSign]=useState('');
  const [intent,setIntent]=useState('');
  useEffect(()=>{
    const q=new URLSearchParams(window.location.search).get('sign');
    if(q && zodiacSigns.some(([id])=>id===q)) setSign(q);
  },[]);
  const result=products.find(p=>p.affinity.includes(sign))||products[0];
  return <div className="quizShell">
    <div className="quizProgress"><span style={{width:`${step/3*100}%`}}/></div>
    <AnimatePresence mode="wait">
      {step===1&&<motion.section key="s1" className="quizStep" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-18}} transition={{duration:.45,ease:[.22,1,.36,1]}}><span className="eyebrow">01 · TU SIGNO</span><h1>¿Cuál es tu signo?</h1><p>No define quién eres. Es solo una forma bonita de empezar a descubrir.</p><div className="zodiacGrid">{zodiacSigns.map(([id,label])=><button data-cursor="hover" key={id} className={sign===id?'selected':''} onClick={()=>setSign(id)}><ZodiacIcon sign={id}/><span>{label}</span></button>)}</div><button data-cursor="hover" className="primaryButton animatedEdge" disabled={!sign} onClick={()=>setStep(2)}>Continuar <ArrowIcon/></button></motion.section>}
      {step===2&&<motion.section key="s2" className="quizStep" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-18}} transition={{duration:.45,ease:[.22,1,.36,1]}}><span className="eyebrow">02 · TU MOMENTO</span><h1>¿Qué quieres que represente?</h1><p>Elige aquello que se parece más al momento que estás viviendo.</p><div className="intentionGrid">{intentions.map(x=><button data-cursor="hover" key={x} className={intent===x?'selected':''} onClick={()=>setIntent(x)}>{x}</button>)}</div><div className="quizActions"><button data-cursor="hover" className="textButton" onClick={()=>setStep(1)}>Atrás</button><button data-cursor="hover" className="primaryButton animatedEdge" disabled={!intent} onClick={()=>setStep(3)}>Ver mi pieza <ArrowIcon/></button></div></motion.section>}
      {step===3&&<motion.section key="s3" className="resultStep" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.72,ease:[.16,1,.3,1]}}><div className="resultOrb"><span className="resultSpark"><SparkleIcon/></span><ZodiacIcon sign={sign}/><i/></div><span className="eyebrow">ELEGIDA PARA TI</span><h1>{result.name}</h1><p className="resultQuote">“Una pieza para acompañar {intent.toLowerCase()} sin dejar de sentirte tú.”</p><p>{result.meaning} · {result.material}</p><Link data-cursor="hover" className="primaryButton animatedEdge" href={`/producto/${result.slug}`}>Conocer la pieza <ArrowIcon/></Link><button data-cursor="hover" className="textButton" onClick={()=>{setStep(1);setSign('');setIntent('')}}>Volver a descubrir</button></motion.section>}
    </AnimatePresence>
  </div>
}
