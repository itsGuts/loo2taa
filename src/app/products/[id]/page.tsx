import { Metadata } from "next";
import ProductDetailPage, { generateMetadata as generateAsinMetadata, generateStaticParams as generateAsinStaticParams } from "@/app/p/[asin]/page";

export function generateStaticParams() {
  return generateAsinStaticParams().map((p) => ({ id: p.asin }));
}

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  return generateAsinMetadata({ params: Promise.resolve({ asin: id }) });
}

export default async function LegacyProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  return ProductDetailPage({ params: Promise.resolve({ asin: id }) });
}
