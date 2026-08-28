import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/components/StoreProvider";
import { Header } from "@/components/Header";
import { BotanicalFooter } from "@/components/footer/BotanicalFooter";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { CustomCursor } from "@/components/interaction/CustomCursor";

export const metadata:Metadata={
  title:{default:"VELIA — Lleva lo que significa",template:"%s — VELIA"},
  description:"Joyería femenina con significado. Descubre piezas y una experiencia inspirada en tu signo.",
  metadataBase:new URL("https://velia.pe"),
  openGraph:{title:"VELIA",description:"Lleva lo que significa.",type:"website"}
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="es"><body><StoreProvider><SmoothScroll/><CustomCursor/><Header/><main>{children}</main><BotanicalFooter/></StoreProvider></body></html>
}
