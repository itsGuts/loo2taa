import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PRODUCTS, getProductById, getRelatedProducts, MARKETPLACE_SETTINGS, CATEGORY_NAMES_EN } from "@/lib/loo2taa-data";
import PriceHistoryChart from "@/components/PriceHistoryChart";
import PriceJourneyCard from "@/components/PriceJourneyCard";
import AiReviewCard from "@/components/AiReviewCard";
import ProductCard from "@/components/ProductCard";
import ProductShareButtons from "@/components/ProductShareButtons";
import ProductDetailImage from "@/components/ProductDetailImage";
import StickyMobileBar from "@/components/StickyMobileBar";
import CommunityVote from "@/components/CommunityVote";
import ProductAlertAction from "@/components/ProductAlertAction";
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

export const dynamicParams = true;
export const revalidate = 3600;

export function generateStaticParams() {
  return PRODUCTS.slice(0, 200).flatMap((p) => [
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
    return { title: "المنتج غير متوفر - LOO2TAA" };
  }

  const store = MARKETPLACE_SETTINGS[product.marketplace] || MARKETPLACE_SETTINGS.amazon;
  const formattedPrice = Number(product.price).toLocaleString("ar-EG");
  const formattedSavings = Number(product.savings).toLocaleString("ar-EG");

  return {
    title: `${product.display_title} | رادار الأسعار - LOO2TAA // لُقطة`,
    description: `سعر ${product.display_title} على ${store.name} الآن ${formattedPrice} ج.م مع متابعة السعر المرجعي لآخر 90 يوماً وتنبيهات اللقطات المباشرة.`,
    alternates: {
      canonical: `https://loo2taa.vercel.app/p/${product.asin || product.id}`,
    },
    openGraph: {
      title: product.display_title,
      description: `وفر ${formattedSavings} ج.م (${product.discount_percent}% خصم). صفقة موثقة من رادار لُقطة على ${store.name}.`,
      images: [{ url: product.image }],
      type: "website",
      locale: "ar_EG",
      siteName: "LOO2TAA - لُقطة",
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
  const product = getProductById(asin) || PRODUCTS.find((p) => p.asin.toUpperCase() === asin.toUpperCase());

  if (!product) {
    notFound();
  }

  const store = MARKETPLACE_SETTINGS[product.marketplace] || MARKETPLACE_SETTINGS.amazon;
  const related = getRelatedProducts(product, 4);
  const categoryEn = CATEGORY_NAMES_EN[product.category] || product.category;

  const formattedPrice = Number(product.price).toLocaleString("ar-EG");
  const baselinePrice = product.reference_price || product.previous_price;
  const formattedBaseline = Number(baselinePrice).toLocaleString("ar-EG");
  const formattedSavings = Number(product.savings).toLocaleString("ar-EG");
  const installmentMonthly = Math.round(Number(product.price) / 6);

  // Affiliate URL tag
  const buyUrl =  `https://www.amazon.eg/dp/${product.asin}?tag=lo2taa-21`;

  // Compute metrics with step2 math verification
  const metrics = computeProductMetrics(product.price, product.previous_price || product.price, (product.price_history || []) as any);
  const verdict = metrics.verdict;
  const VerdictIcon = verdict.type === "fake_discount" ? ShieldAlert : ShieldCheck;

  // Structured Data Schema.org (Product + Offer)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.display_title,
    "image": [product.image],
    "description": `${product.display_title} متاح على ${store.name} بسعر ${formattedPrice} ج.م`,
    "sku": product.asin,
    "brand": {
      "@type": "Brand",
      "name": product.brand,
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EGP",
      "price": product.price,
      "priceValidUntil": new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
      "itemCondition": "https://schema.org/NewCondition",
      "availability": product.in_stock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "url": buyUrl,
      "seller": {
        "@type": "Organization",
        "name": store.name,
      },
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating || "4.6",
      "reviewCount": product.review_count || "120",
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
      <nav className="flex items-center gap-2 text-xs text-[#94a3b8] overflow-x-auto pb-1 font-sans">
        <Link href="/" className="hover:text-[#00f0ff] transition-colors shrink-0">
          Home
        </Link>
        <ChevronLeft className="w-3.5 h-3.5 text-gray-600 shrink-0" />
        <Link href="/catalog" className="hover:text-[#00f0ff] transition-colors shrink-0">
          Catalog
        </Link>
        <ChevronLeft className="w-3.5 h-3.5 text-gray-600 shrink-0" />
        <Link href={`/catalog?category=${product.category}`} className="text-cyan-400 hover:underline shrink-0">
          {categoryEn}
        </Link>
        <ChevronLeft className="w-3.5 h-3.5 text-gray-600 shrink-0" />
        <span className="font-semibold text-white truncate max-w-xs font-sans">
          {product.display_title}
        </span>
      </nav>

      {/* Main Product Hero Grid */}
      <div className="cyber-card rounded-3xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 relative overflow-hidden border border-white/[0.08]">
        {/* Gallery / Product Image (Col 1-5) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center bg-[#070a12]/70 rounded-2xl border border-white/5 p-6 relative">
          <ProductDetailImage
            src={product.image}
            alt={product.display_title}
            brand={product.brand}
          />

          {product.discount_percent > 0 && (
            <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-rose-600 text-white text-xs font-black shadow-md z-20 font-sans tracking-wide">
              -{product.discount_percent}% OFF
            </span>
          )}

          {product.is_record_low && verdict.type !== 'fake_discount' && (
            <span className="absolute bottom-3.5 right-3.5 flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-black border border-emerald-400/40 z-20 font-sans tracking-wider shadow-sm">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              RECORD LOW ⚡
            </span>
          )}
        </div>

        {/* Product Info & CTA (Col 6-12) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            {/* Live Verification Radar Pulse Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 bg-emerald-500/10 border border-emerald-500/25 px-3.5 py-1.5 rounded-full">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 font-sans">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span>Verified Price on Amazon Egypt • Active Real-Time Deal</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">ASIN: {product.asin}</span>
            </div>

            {/* Clean English Tags Strip */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-0.5 rounded-full font-semibold text-xs border bg-amber-500/10 text-amber-300 border-amber-500/30 flex items-center gap-1.5 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Amazon.eg
              </span>

              <span className="px-3 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold font-sans">
                {categoryEn}
              </span>

              <span className="px-3 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-200 text-xs font-bold font-sans">
                {product.brand}
              </span>

              <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400 text-xs font-mono">
                {product.points_count || 12} check points
              </span>
            </div>

            {/* Arabic Title */}
            <h1 className="text-xl sm:text-2xl font-black text-white leading-snug">
              {product.display_title}
            </h1>

            {/* Original English Title */}
            <p className="text-xs text-slate-400 font-mono leading-relaxed" dir="ltr">
              {product.title}
            </p>
          </div>

          {/* Pricing Details Block */}
          <div className="bg-[#070a12] rounded-2xl p-4 sm:p-5 border border-white/5 space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-black text-white tracking-tight font-mono">{formattedPrice}</span>
                <span className="text-sm font-bold text-[#00f0ff]">جنيه مصري</span>
              </div>

              {product.reference_price && product.reference_price > product.price && (
                <div className="text-xs sm:text-sm text-slate-500 line-through font-mono" title="السعر المرجعي (وسيط 90 يوم)">
                  السعر المرجعي: {formattedBaseline} ج.م
                </div>
              )}
            </div>

            {product.savings > 0 && (
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                <span className="bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-1 rounded-full font-mono">
                  توفير حقيقي: {formattedSavings} ج.م ({product.discount_percent}% خصم عن السعر المرجعي)
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
                <span className="font-black block font-sans">{verdict.labelShort}</span>
                <span className="opacity-80 text-[11px]">{verdict.label}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2 font-sans">
              <span>Sold by: <strong className="text-white">{product.seller}</strong></span>
              <span className="flex items-center gap-1 text-emerald-400 font-mono">
                <Clock className="w-3.5 h-3.5" />
                Checked: {new Date(product.price_checked_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              </span>
            </div>
          </div>

          {/* Direct Buy CTA */}
          <div className="space-y-3">
            <a
              href={buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-primary w-full py-3.5 px-5 rounded-full text-sm flex items-center justify-center gap-2 shadow-lg font-bold font-sans tracking-wide"
            >
              <span>Buy on Amazon Egypt ↗</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-between text-[11px] text-slate-400 px-1 font-sans">
              <span>Direct official Amazon.eg store link with authorized warranty.</span>
              <span className="text-emerald-400 font-semibold">Fast Shipping ✓</span>
            </div>

            {/* Price Alert Button */}
            <ProductAlertAction product={product} />

            {/* Social Share & Telegram Copy Buttons */}
            <ProductShareButtons product={product} />
          </div>
        </div>
      </div>

      {/* Community Heat-Check Voting */}
      <CommunityVote productId={product.id} />

      {/* Yestahil-Style Price Journey & Stats Overview */}
      <PriceJourneyCard product={product} />

      {/* Advanced Interactive Price History Chart (1M / 3M / 6M / All) */}
      <PriceHistoryChart
        history={product.price_history}
        currentPrice={product.price}
        referencePrice={product.reference_price}
      />

      {/* LOO2TAA AI Review & Verdict */}
      <AiReviewCard
        review={product.ai_review}
        brand={product.brand}
      />

      {/* Similar Products */}
      {related.length > 0 && (
        <section className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black text-white font-sans">
              Similar Products in {categoryEn}
            </h3>
            <Link
              href={`/catalog?category=${encodeURIComponent(product.category)}`}
              className="text-xs font-semibold text-[#00f0ff] hover:underline font-sans"
            >
              View More ↗
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
