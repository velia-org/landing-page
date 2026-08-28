export type Product = {
  slug: string;
  name: string;
  collection: string;
  price: number;
  material: string;
  meaning: string;
  affinity: string[];
  image: string;
  imageAlt: string;
};

export const products: Product[] = [
  { slug: "aurora", name: "Collar Aurora", collection: "Aurora", price: 89, material: "Acero inoxidable · acabado dorado", meaning: "Nuevos comienzos", affinity: ["libra", "tauro", "piscis"], image: "/images/aurora.svg", imageAlt: "Collar dorado Aurora sobre fondo crema" },
  { slug: "celeste", name: "Collar Celeste", collection: "Alma", price: 79, material: "Acero inoxidable · zirconia", meaning: "Claridad", affinity: ["acuario", "geminis", "virgo"], image: "/images/celeste.svg", imageAlt: "Collar Celeste con piedra clara" },
  { slug: "serena", name: "Pulsera Serena de cadena fina", collection: "Alma", price: 59, material: "Acero inoxidable", meaning: "Calma", affinity: ["cancer", "piscis", "tauro"], image: "/images/serena.svg", imageAlt: "Pulsera fina Serena" },
  { slug: "eclipse", name: "Aretes Eclipse", collection: "Eclipse", price: 69, material: "Acero inoxidable · baño dorado", meaning: "Transformación", affinity: ["escorpio", "capricornio", "leo"], image: "/images/eclipse.svg", imageAlt: "Aretes dorados Eclipse" },
  { slug: "lumen", name: "Collar Lumen con dije geométrico", collection: "Eclipse", price: 95, material: "Acero inoxidable · acabado espejo", meaning: "Confianza", affinity: ["leo", "aries", "sagitario"], image: "/images/lumen.svg", imageAlt: "Collar Lumen con dije geométrico" },
  { slug: "alma", name: "Anillo Alma", collection: "Alma", price: 65, material: "Acero inoxidable", meaning: "Intención", affinity: ["virgo", "libra", "capricornio"], image: "/images/alma.svg", imageAlt: "Anillo Alma en acabado dorado" }
];

export const formatPrice = (value: number) => new Intl.NumberFormat("es-PE", { style: "currency", currency: "PEN", minimumFractionDigits: 0 }).format(value);
