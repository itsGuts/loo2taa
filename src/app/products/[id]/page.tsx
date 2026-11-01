import React, { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, getProductById, getRelatedProducts, MARKETPLACE_SETTINGS } from "@/lib/loo2taa-data";
import PriceHistoryChart from "@/components/PriceHistoryChart";
import AiReviewCard from "@/components/AiReviewCard";
import ProductCard from "@/components/ProductCard";
import ProductShareButtons from "@/components/ProductShareButtons";
import ProductDetailImage from "@/components/ProductDetailImage";
import { getDealVerdict } from "@/lib/sharing";
import {
  ExternalLink,
  ChevronLeft,
  Clock,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  ShieldAlert,
  CreditCard
} from "lucide-react";

export function generateStaticParams() {
  return PRODUCTS.flatMap((p) => [
    { id: p.id },
    { id: p.asin },
  ]);
}

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product, 4);
  const store = MARKETPLACE_SETTINGS[product.marketplace] || MARKETPLACE_SETTINGS.amazon;

  const formattedPrice = Number(product.price).toLocaleString("ar-EG");
  const formattedOldPrice = Number(product.previous_price).toLocaleString("ar-EG");
  const formattedSavings = Number(product.savings).toLocaleString("ar-EG");
  const verdict = getDealVerdict(product);
  const VerdictIcon = verdict.type === "genuine" ? ShieldCheck : verdict.type === "fake" ? ShieldAlert : ShieldCheck;

  return (
    <div className="space-y-8">
      
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-[#94a3b8] overflow-x-auto pb-1">
        <Link href="/" className="hover:text-[#00f0ff] transition-colors shrink-0">
          الرئيسية
        </Link>
        <ChevronLeft className="w-3.5 h-3.5 text-gray-600 shrink-0" />
        <Link href="/catalog" className="hover:text-[#00f0ff] transition-colors shrink-0">
          الكتالوج
        </Link>
        <ChevronLeft className="w-3.5 h-3.5 text-gray-600 shrink-0" />
        <span className="text-gray-500 shrink-0">{store.name}</span>
        <ChevronLeft className="w-3.5 h-3.5 text-gray-600 shrink-0" />
        <span className="font-semibold text-white truncate max-w-xs">
          {product.display_title}
        </span>
      </nav>

      {/* Main Product Hero Grid */}
      <div className="cyber-card rounded-3xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 relative overflow-hidden">
        
        {/* Gallery / Product Image (Col 1-5) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center bg-[#070a12]/70 rounded-2xl border border-white/5 p-6 relative">
          <ProductDetailImage
            src={product.image}
            alt={product.display_title}
            brand={product.brand}
          />

          {product.discount_percent > 0 && (
            <span className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-xl bg-[#ff007f] text-white text-xs font-black shadow-md z-20">
              خصم {product.discount_percent}%
            </span>
          )}

          {product.is_record_low && (
            <span className="absolute bottom-3.5 right-3.5 flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#00ff9d]/15 text-[#00ff9d] text-xs font-black border border-[#00ff9d]/30 z-20">
              <Zap className="w-3.5 h-3.5" />
              أقل سعر مرصود ⚡
            </span>
          )}
        </div>

        {/* Product Info & CTA (Col 6-12) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
          <div className="space-y-2.5">
            
            {/* Tags Strip */}
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="px-2.5 py-0.5 rounded-md font-bold text-xs"
                style={{
                  backgroundColor: store.surfaceColor,
                  color: store.primaryColor,
                  border: `1px solid ${store.primaryColor}40`,
                }}
              >
                {store.name}
              </span>

              <span className="px-2.5 py-0.5 rounded-md bg-[#070a12] border border-white/5 text-gray-300 text-xs font-semibold">
                {product.category_ar}
              </span>

              <span className="px-2.5 py-0.5 rounded-md bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] text-xs font-bold">
                {product.brand}
              </span>
            </div>

            {/* Arabic Title */}
            <h1 className="text-xl sm:text-2xl font-black text-white leading-snug">
              {product.display_title}
            </h1>

            {/* Original English Title */}
            <p className="text-xs text-gray-400 font-mono" dir="ltr">
              {product.title}
            </p>
          </div>

          {/* Pricing Details Block */}
          <div className="bg-[#070a12] rounded-2xl p-4 sm:p-5 border border-white/5 space-y-2.5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-black text-white tracking-tight">{formattedPrice}</span>
                <span className="text-sm font-bold text-[#00f0ff]">جنيه مصري</span>
              </div>

              {product.previous_price > product.price && (
                <div className="text-xs sm:text-sm text-gray-500 line-through">
                  السابق: {formattedOldPrice} ج.م
                </div>
              )}
            </div>

            {product.savings > 0 && (
              <div className="flex items-center gap-2 text-xs font-bold text-[#00ff9d]">
                <span className="bg-[#00ff9d]/10 border border-[#00ff9d]/20 px-2 py-0.5 rounded-md">
                  توفير: {formattedSavings} ج.م ({product.discount_percent}%)
                </span>
              </div>
            )}

            {/* Verdict Box */}
            <div
              className="flex items-start gap-2.5 p-3 rounded-xl border"
              style={{
                backgroundColor: verdict.bgColor,
                borderColor: verdict.borderColor,
                color: verdict.color,
              }}
            >
              <VerdictIcon className="w-4 h-4 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-black block">{verdict.labelShort}</span>
                <span className="opacity-80 text-[11px]">{verdict.label}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between text-xs text-[#94a3b8] gap-2">
              <span>البائع: <strong className="text-white">{product.seller}</strong></span>
              <span className="flex items-center gap-1 text-[#00ff9d]">
                <Clock className="w-3.5 h-3.5" />
                آخر تحقق من السعر: {new Date(product.price_checked_at).toLocaleDateString("ar-EG")}
              </span>
            </div>
          </div>

          {/* Direct Buy CTA */}
          <div className="space-y-3">
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-primary w-full py-3.5 px-5 rounded-2xl text-sm flex items-center justify-center gap-2"
            >
              <span>{store.buttonLabel}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-between text-[11px] text-gray-400 px-1">
              <span>ينقلك مباشرة لصفحة المنتج الرسمية على المتجر.</span>
              <span className="text-[#00ff9d] font-bold">متوفر للشحن الآن ✓</span>
            </div>

            {/* Social Share & Telegram Copy Buttons */}
            <ProductShareButtons product={product} />
          </div>
        </div>
      </div>

      {/* Interactive Price History Chart */}
      <PriceHistoryChart
        history={product.price_history}
        currentPrice={product.price}
      />

      {/* LO2TAA AI Review & Verdict */}
      <AiReviewCard
        review={product.ai_review}
        brand={product.brand}
      />

      {/* Related Products */}
      {related.length > 0 && (
        <section className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black text-white">
              منتجات مشابهة في قسم {product.category_ar}
            </h3>
            <Link
              href={`/catalog?category=${encodeURIComponent(product.category)}`}
              className="text-xs font-bold text-[#00f0ff] hover:underline"
            >
              عرض المزيد ↗
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
