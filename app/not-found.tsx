import Link from "next/link"; import { Monogram } from "@/components/Brand";
export default function NotFound(){return <section className="notFound"><Monogram/><span className="eyebrow">404</span><h1>Parece que esta pieza<br/><em>se perdió.</em></h1><Link className="primaryButton" href="/">Volver a VELIA</Link></section>}
