"use client";
import { motion, useReducedMotion } from "motion/react";
export function Reveal({children,className="",delay=0}:{children:React.ReactNode,className?:string,delay?:number}){const reduce=useReducedMotion();return <motion.div className={className} initial={reduce?false:{opacity:0,y:24}} whileInView={reduce?{}:{opacity:1,y:0}} viewport={{once:true,margin:"-8%"}} transition={{duration:.7,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>}
