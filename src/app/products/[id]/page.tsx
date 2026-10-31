import React, { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, getProductById, getRelatedProducts, MARKETPLACE_SETTINGS } from "@/lib/loo2taa-data";
import PriceHistoryChart from "@/components/PriceHistoryChart";
import AiReviewCard from "@/components/AiReviewCard";
import ProductCard from "@/components/ProductCard";
import {
  ExternalLink,
  ChevronLeft,
  ShieldCheck,
  TrendingDown,
  Clock,
  Sparkles,
  Zap,
  Cpu,
  Crosshair
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

  return (
    <div className="space-y-10">
      
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-[#94a3b8] overflow-x-auto pb-1">
        <Link href="/" className="hover:text-[#00f0ff] transition-colors shrink-0">
          الرئيسية
        </Link>
        <ChevronLeft className="w-3.5 h-3.5 text-gray-600 shrink-0" />
        <Link href="/catalog" className="hover:text-[#00f0ff] transition-colors shrink-0">
          كنز الهاردوير
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
        
        {/* Glow behind card */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#00f0ff]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Gallery / Product Image (Col 1-5) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center bg-[#07090e]/80 rounded-2xl border border-white/10 p-8 relative overflow-hidden">
          <img
            src={product.image}
            alt={product.display_title}
            className="max-h-80 w-auto object-contain hover:scale-108 transition-transform duration-300 drop-shadow-xl z-10"
          />

          {product.discount_percent > 0 && (
            <span className="absolute top-4 right-4 px-3 py-1 rounded-xl bg-[#ff007f] text-white text-xs font-black shadow-lg shadow-[#ff007f]/40 z-20">
              خصم {product.discount_percent}%
            </span>
          )}

          {product.is_record_low && (
            <span className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#00ff9d]/15 text-[#00ff9d] text-xs font-black border border-[#00ff9d]/40 z-20">
              <Zap className="w-4 h-4 text-[#00ff9d]" />
              أقل سعر رصده الرادار ⚡
            </span>
          )}
        </div>

        {/* Product Info & CTA (Col 6-12) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            
            {/* Tags Strip */}
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="px-2.5 py-0.5 rounded-md font-black text-xs uppercase tracking-wider"
                style={{
                  backgroundColor: store.surfaceColor,
                  color: store.primaryColor,
                  border: `1px solid ${store.primaryColor}50`,
                }}
              >
                {store.name}
              </span>

              <span className="px-2.5 py-0.5 rounded-md bg-[#07090e] border border-white/10 text-gray-300 text-xs font-semibold">
                {product.category_ar}
              </span>

              <span className="px-2.5 py-0.5 rounded-md bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] text-xs font-black">
                {product.brand}
              </span>
            </div>

            {/* Arabic Title */}
            <h1 className="text-xl sm:text-2xl font-black text-white leading-snug">
              {product.display_title}
            </h1>

            {/* Original English Title */}
            <p className="text-xs text-gray-500 font-mono" dir="ltr">
              {product.title}
            </p>
          </div>

          {/* Pricing Details Block */}
          <div className="bg-[#07090e] rounded-2xl p-5 border border-white/10 space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-white tracking-tight">{formattedPrice}</span>
                <span className="text-sm font-bold text-[#00f0ff]">جنيه مصري</span>
              </div>

              {product.previous_price > product.price && (
                <div className="text-sm text-gray-500 line-through">
                  السابق: {formattedOldPrice} ج.م
                </div>
              )}
            </div>

            {product.savings > 0 && (
              <div className="flex items-center gap-2 text-xs font-black text-[#00ff9d]">
                <span className="bg-[#00ff9d]/10 border border-[#00ff9d]/20 px-2 py-0.5 rounded-md">
                  توفير صافي: {formattedSavings} ج.م ({product.discount_percent}%)
                </span>
              </div>
            )}

            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-[#94a3b8] gap-2">
              <span>البائع: <strong className="text-white">{product.seller}</strong></span>
              <span className="flex items-center gap-1 text-[#00ff9d]">
                <Clock className="w-3.5 h-3.5" />
                آخر فحص للسعر: {new Date(product.price_checked_at).toLocaleDateString("ar-EG")}
              </span>
            </div>
          </div>

          {/* Direct Buy CTA & Secondary Options */}
          <div className="space-y-3 pt-2">
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl text-sm font-black flex items-center justify-center gap-2 transition-all shadow-xl active:scale-98 bg-gradient-to-r from-[#00f0ff] via-[#00c8d7] to-[#00a3ff] text-[#07090e] hover:shadow-2xl hover:shadow-[#00f0ff]/30"
            >
              <span>{store.buttonLabel}</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-between text-[11px] text-[#94a3b8] px-1">
              <span>رابط تسويقي مباشر يضمن نقلك لصفحة العتاد الأصلية فوراً.</span>
              <span className="text-[#00ff9d] font-bold">متاح بالمستودع للشحن ✓</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Price History Chart */}
      <PriceHistoryChart
        history={product.price_history}
        currentPrice={product.price}
      />

      {/* Loo2taa AI Review & Verdict */}
      <AiReviewCard
        review={product.ai_review}
        brand={product.brand}
      />

      {/* Related Gaming Hardware */}
      {related.length > 0 && (
        <section className="space-y-4 pt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#00f0ff]" />
              قطع أخرى متوافقة في قسم {product.category_ar}
            </h3>
            <Link
              href={`/catalog?category=${encodeURIComponent(product.category)}`}
              className="text-xs font-bold text-[#00f0ff] hover:underline"
            >
              عرض المزيد بالرادار ↗
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
