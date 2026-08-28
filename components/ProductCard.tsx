"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";
import { HeartIcon } from "./Icons";
import { useStore } from "./StoreProvider";

export function ProductCard({product}:{product:Product}){
  const {wishlist,toggleWishlist}=useStore();
  const liked=wishlist.includes(product.slug);
  return <article className="productCard">
    <Link href={`/producto/${product.slug}`} className="productVisual" data-cursor="view" data-cursor-label="VER">
      <motion.div whileHover={{scale:1.022}} transition={{duration:.65,ease:[.22,1,.36,1]}} className="productImageWrap"><Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw"/></motion.div>
      <span className="productCornerMark" aria-hidden="true"/>
    </Link>
    <div className="productCardBody">
      <div className="productText"><span className="productCollection">{product.collection}</span><Link href={`/producto/${product.slug}`} className="productName hairlineText" title={product.name} data-cursor="hover">{product.name}</Link></div>
      <div className="productSide"><span className="productPrice">{formatPrice(product.price)}</span><button data-cursor="hover" className={`heartButton ${liked?'active':''}`} aria-label={liked?'Quitar de favoritos':'Guardar en favoritos'} onClick={()=>toggleWishlist(product.slug)}><HeartIcon/></button></div>
    </div>
  </article>
}
