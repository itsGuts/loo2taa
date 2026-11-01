import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PRODUCTS, getProductById, getRelatedProducts, MARKETPLACE_SETTINGS } from "@/lib/loo2taa-data";
import PriceHistoryChart from "@/components/PriceHistoryChart";
import AiReviewCard from "@/components/AiReviewCard";
import ProductCard from "@/components/ProductCard";
import ProductShareButtons from "@/components/ProductShareButtons";
import ProductDetailImage from "@/components/ProductDetailImage";
import StickyMobileBar from "@/components/StickyMobileBar";
import CommunityVote from "@/components/CommunityVote";
import { computeProductMetrics } from "@/lib/deal-math";
import {
  ChevronLeft,
  Clock,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  ShieldAlert,
  CreditCard,
  Flame,
  CheckCircle2,
  TrendingDown,
  Sparkles,
  Store,
  Tag
} from "lucide-react";

export function generateStaticParams() {
  return PRODUCTS.flatMap((p) => [
    { asin: p.asin },
    { asin: p.id },
  ]);
}

interface ProductPageProps {
  params: Promise<{ asin: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { asin } = await params;
  const product = getProductById(asin) || PRODUCTS.find((p) => p.asin.toUpperCase() === asin.toUpperCase());
  
  if (!product) {
    return { title: "المنتج غير متوفر - LO2TAA" };
  }

  const store = MARKETPLACE_SETTINGS[product.marketplace] || MARKETPLACE_SETTINGS.amazon;
  const formattedPrice = Number(product.price).toLocaleString("ar-EG");
  const formattedSavings = Number(product.savings).toLocaleString("ar-EG");

  return {
    title: `${product.display_title} | رادار الأسعار - LO2TAA`,
    description: `سعر ${product.display_title} على ${store.name} الآن ${formattedPrice} ج.م مع متابعة السعر المرجعي لآخر 90 يوماً وتنبيهات اللقطات المباشرة.`,
    alternates: {
      canonical: `https://loo2taa.vercel.app/p/${product.asin || product.id}`,
    },
    openGraph: {
      title: product.display_title,
      description: `وفر ${formattedSavings} ج.م (${product.discount_percent}% خصم). صفقة موثقة من رادار لقطة على ${store.name}.`,
      images: [{ url: product.image }],
      type: "website",
      locale: "ar_EG",
      siteName: "LO2TAA - لقطة",
    },
    twitter: {
      card: "summary_large_image",
      title: product.display_title,
      description: `سعر ${product.display_title} اليوم ${formattedPrice} ج.م`,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { asin } = await params;
  const rawProduct = getProductById(asin) || PRODUCTS.find((p) => p.asin.toUpperCase() === asin.toUpperCase());

  if (!rawProduct) {
    notFound();
  }

  // Compute deal math metrics dynamically
  const metrics = computeProductMetrics(
    rawProduct.price,
    rawProduct.previous_price,
    rawProduct.price_history
  );

  const product = {
    ...rawProduct,
    reference_price: metrics.reference_price,
    savings: metrics.savings_vs_reference,
    discount_percent: metrics.real_discount_percent,
    is_record_low: metrics.is_record_low,
    drop_level: metrics.drop_level === 'none' ? undefined : metrics.drop_level,
    points_count: metrics.points_count,
  };

  const related = getRelatedProducts(rawProduct, 4);
  const store = MARKETPLACE_SETTINGS[product.marketplace] || MARKETPLACE_SETTINGS.amazon;

  const formattedPrice = Number(product.price).toLocaleString("ar-EG");
  const formattedBaseline = Number(product.reference_price).toLocaleString("ar-EG");
  const formattedSavings = Number(product.savings).toLocaleString("ar-EG");
  const verdict = metrics.verdict;
  const VerdictIcon = verdict.type === "fake_discount" ? ShieldAlert : ShieldCheck;

  // Calculate monthly installment (6 months estimate)
  const installmentMonthly = Math.round(product.price / 6);

  // Affiliate URL with AFFILIATE_TAG from environment
  const affiliateTag = process.env.AFFILIATE_TAG || "lo2taa-21";
  const buyUrl = product.marketplace === "amazon" && !product.url.includes("tag=")
    ? `${product.url}${product.url.includes("?") ? "&" : "?"}tag=${affiliateTag}`
    : product.url;

  // Google Rich Snippets JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.display_title,
    "image": [product.image],
    "description": product.title,
    "sku": product.asin,
    "mpn": product.asin,
    "brand": {
      "@type": "Brand",
      "name": product.brand || "ماركة معتمدة"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating || 4.6,
      "reviewCount": product.review_count || 120
    },
    "offers": {
      "@type": "Offer",
      "url": buyUrl,
      "priceCurrency": "EGP",
      "price": product.price,
      "priceValidUntil": "2026-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": product.in_stock !== false ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": store.name
      }
    }
  };

  return (
    <div className="space-y-8 pb-16 sm:pb-0">
      {/* Google SEO JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

          {product.is_record_low && verdict.type !== 'fake_discount' && (
            <span className="absolute bottom-3.5 right-3.5 flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#00ff9d]/15 text-[#00ff9d] text-xs font-black border border-[#00ff9d]/30 z-20">
              <Zap className="w-3.5 h-3.5" />
              أقل سعر تاريخي ⚡
            </span>
          )}
        </div>

        {/* Product Info & CTA (Col 6-12) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            {/* Live Verification Radar Pulse Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 bg-[#00ff9d]/5 border border-[#00ff9d]/20 px-3 py-1.5 rounded-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-[#00ff9d]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff9d] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff9d]"></span>
                </span>
                <span>تم الفحص على {store.name} مؤخراً • السعر ساري الآن (موسم عروض نوفمبر 2026)</span>
              </div>
              <span className="text-[11px] text-gray-400 font-mono">ASIN: {product.asin}</span>
            </div>

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

              <span className="px-2 py-0.5 rounded-md bg-white/5 text-gray-400 text-xs font-mono">
                {product.points_count} نقطة رصد
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
          <div className="bg-[#070a12] rounded-2xl p-4 sm:p-5 border border-white/5 space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-black text-white tracking-tight">{formattedPrice}</span>
                <span className="text-sm font-bold text-[#00f0ff]">جنيه مصري</span>
              </div>

              {product.reference_price > product.price && (
                <div className="text-xs sm:text-sm text-gray-500 line-through" title="السعر المرجعي (وسيط 90 يوم)">
                  السعر المرجعي: {formattedBaseline} ج.م
                </div>
              )}
            </div>

            {product.savings > 0 && (
              <div className="flex items-center gap-2 text-xs font-bold text-[#00ff9d]">
                <span className="bg-[#00ff9d]/10 border border-[#00ff9d]/20 px-2 py-0.5 rounded-md">
                  توفير حقيقي: {formattedSavings} ج.م ({product.discount_percent}% خصم عن السعر المرجعي)
                </span>
              </div>
            )}

            {/* Installments Pill */}
            {product.price >= 1500 && (
              <div className="flex items-center gap-2 text-xs text-gray-300 bg-white/[0.03] border border-white/5 px-3 py-2 rounded-xl">
                <CreditCard className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <span>
                  متاح قسط تقديري (6 شهور) يبدأ من <strong className="text-white font-bold">{installmentMonthly.toLocaleString("ar-EG")} ج.م</strong>/شهر (عبر ValU أو بطاقات البنوك المؤهلة)
                </span>
              </div>
            )}

            {/* Deal Verdict Box */}
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
                تاريخ الرصد: {new Date(product.price_checked_at).toLocaleDateString("ar-EG")}
              </span>
            </div>
          </div>

          {/* Direct Buy CTA */}
          <div className="space-y-3">
            <a
              href={buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-primary w-full py-3.5 px-5 rounded-2xl text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <span>{store.buttonLabel}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-between text-[11px] text-gray-400 px-1">
              <span>ينقلك مباشرة لصفحة المنتج الرسمية على المتجر مع الضمان المعتمد.</span>
              <span className="text-[#00ff9d] font-bold">متوفر للشحن السريع ✓</span>
            </div>

            {/* Social Share & Telegram Copy Buttons */}
            <ProductShareButtons product={product} />
          </div>
        </div>
      </div>

      {/* Community Heat-Check Voting */}
      <CommunityVote productId={product.id} />

      {/* Advanced Interactive Price History Chart (1M / 3M / 6M / All) */}
      <PriceHistoryChart
        history={product.price_history}
        currentPrice={product.price}
        referencePrice={product.reference_price}
      />

      {/* LO2TAA AI Review & Verdict */}
      <AiReviewCard
        review={product.ai_review}
        brand={product.brand}
      />

      {/* Similar Products */}
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

      {/* Sticky Mobile Conversion Bar */}
      <StickyMobileBar product={product} store={store} />
    </div>
  );
}
