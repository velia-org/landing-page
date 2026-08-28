"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
type Store = { wishlist: string[]; cart: string[]; toggleWishlist: (slug:string)=>void; addCart:(slug:string)=>void; removeCart:(slug:string)=>void; };
const StoreContext = createContext<Store | null>(null);
export function StoreProvider({children}:{children:React.ReactNode}) {
  const [wishlist,setWishlist]=useState<string[]>([]); const [cart,setCart]=useState<string[]>([]);
  useEffect(()=>{ try { setWishlist(JSON.parse(localStorage.getItem("velia-wishlist")||"[]")); setCart(JSON.parse(localStorage.getItem("velia-cart")||"[]")); } catch {} },[]);
  const persist=(key:string,value:string[])=>{localStorage.setItem(key,JSON.stringify(value));};
  const value=useMemo(()=>({wishlist,cart,
    toggleWishlist:(slug:string)=>setWishlist(v=>{const n=v.includes(slug)?v.filter(x=>x!==slug):[...v,slug];persist("velia-wishlist",n);return n;}),
    addCart:(slug:string)=>setCart(v=>{const n=[...v,slug];persist("velia-cart",n);return n;}),
    removeCart:(slug:string)=>setCart(v=>{const i=v.indexOf(slug);const n=i<0?v:[...v.slice(0,i),...v.slice(i+1)];persist("velia-cart",n);return n;})
  }),[wishlist,cart]);
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
export function useStore(){const c=useContext(StoreContext);if(!c) throw new Error("StoreProvider missing");return c;}
