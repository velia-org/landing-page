"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BagIcon, CloseIcon, HeartIcon, MenuIcon } from "./Icons";
import { Wordmark } from "./Brand";
import { useStore } from "./StoreProvider";
import { formatPrice, products } from "@/data/products";

export function Header(){
  const [open,setOpen]=useState(false);
  const [cartOpen,setCartOpen]=useState(false);
  const pathname=usePathname();
  const onDark=pathname==="/" || pathname==="/descubre";
  const {cart,wishlist,removeCart}=useStore();
  const nav=[['/joyas','Joyas'],['/descubre','Tu signo'],['/nosotros','Nosotros']];
  const cartProducts=cart.map(slug=>products.find(p=>p.slug===slug)).filter(Boolean);
  const total=cartProducts.reduce((sum,p)=>sum+(p?.price||0),0);
  return <>
    <header className={`siteHeader ${onDark?'onDark':''}`}>
      <button data-cursor="hover" className="iconButton mobileOnly" aria-label="Abrir menú" onClick={()=>setOpen(true)}><MenuIcon/></button>
      <nav className="desktopNav" aria-label="Principal">{nav.slice(0,2).map(([h,l])=><Link data-cursor="hover" className="navHairline" key={h} href={h}>{l}</Link>)}</nav>
      <Link data-cursor="hover" className="logoLink" href="/"><Wordmark/></Link>
      <nav className="desktopNav right" aria-label="Secundaria">
        <Link data-cursor="hover" className="navHairline" href="/nosotros">Nosotros</Link>
        <button data-cursor="hover" className="iconButton" aria-label={`Favoritos: ${wishlist.length}`}><HeartIcon/><sup>{wishlist.length||''}</sup></button>
        <button data-cursor="hover" className="iconButton" aria-label={`Bolsa: ${cart.length}`} onClick={()=>setCartOpen(true)}><BagIcon/><sup>{cart.length||''}</sup></button>
      </nav>
      <div className="mobileActions"><button className="iconButton" aria-label="Favoritos"><HeartIcon/></button><button className="iconButton" aria-label="Bolsa" onClick={()=>setCartOpen(true)}><BagIcon/><sup>{cart.length||''}</sup></button></div>
    </header>

    <AnimatePresence>{open&&<motion.div className="mobileMenu" data-lenis-prevent initial={{clipPath:'inset(0 0 100% 0)'}} animate={{clipPath:'inset(0 0 0% 0)'}} exit={{clipPath:'inset(0 0 100% 0)'}} transition={{duration:.58,ease:[.76,0,.24,1]}}>
      <div className="mobileMenuTop"><Wordmark/><button className="iconButton" onClick={()=>setOpen(false)} aria-label="Cerrar menú"><CloseIcon/></button></div>
      {nav.map(([h,l],i)=><motion.div key={h} initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.13+.06*i}}><Link href={h} onClick={()=>setOpen(false)}>{l}</Link></motion.div>)}
      <div className="mobileMenuMark">VA · LLEVA LO QUE SIGNIFICA</div>
    </motion.div>}</AnimatePresence>

    <AnimatePresence>{cartOpen&&<>
      <motion.button className="drawerBackdrop" aria-label="Cerrar bolsa" onClick={()=>setCartOpen(false)} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}/>
      <motion.aside className="cartDrawer" initial={{x:'100%'}} animate={{x:0}} exit={{x:'100%'}} transition={{duration:.48,ease:[.22,1,.36,1]}} aria-label="Mi bolsa">
        <div className="cartDrawerHead"><div><span className="eyebrow">VELIA</span><h2>Mi bolsa <small>{cart.length}</small></h2></div><button data-cursor="hover" className="iconButton" aria-label="Cerrar bolsa" onClick={()=>setCartOpen(false)}><CloseIcon/></button></div>
        <div className="cartDrawerBody" data-lenis-prevent>{cartProducts.length===0?<div className="emptyBag"><BagIcon/><h3>Tu bolsa todavía está esperando algo especial.</h3><Link data-cursor="hover" href="/joyas" onClick={()=>setCartOpen(false)}>Explorar joyas</Link></div>:cartProducts.map((p,i)=>p&&<div className="cartLine" key={`${p.slug}-${i}`}><div className="cartThumb"><Image src={p.image} alt="" fill sizes="90px"/></div><div className="cartLineText"><span>{p.collection}</span><strong>{p.name}</strong><small>{formatPrice(p.price)}</small></div><button data-cursor="hover" onClick={()=>removeCart(p.slug)}>Eliminar</button></div>)}</div>
        {cartProducts.length>0&&<div className="cartDrawerFoot"><div><span>Subtotal</span><strong>{formatPrice(total)}</strong></div><button data-cursor="hover" className="primaryButton wide animatedEdge">Continuar compra</button><small>Checkout demostrativo. Conecta aquí tu pasarela de pago.</small></div>}
      </motion.aside>
    </>}</AnimatePresence>
  </>
}
