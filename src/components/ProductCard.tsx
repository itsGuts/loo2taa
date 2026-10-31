"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product } from "@/lib/types";
import { MARKETPLACE_SETTINGS } from "@/lib/loo2taa-data";
import { useFavorites } from "@/lib/favorites";
import {
  ExternalLink,
  Heart,
  TrendingDown,
  Sparkles,
  Share2,
  Check,
  Clock,
  Zap,
  Cpu
} from "lucide-react";

interface ProductCardProps {
  product: Product;
  viewMode?: "grid" | "list";
}

export default function ProductCard({ product, viewMode = "grid" }: ProductCardProps) {
  const { isFavorite, toggle, mounted } = useFavorites();
  const [copied, setCopied] = useState(false);
  const isFav = mounted && isFavorite(product.id);

  const store = MARKETPLACE_SETTINGS[product.marketplace] || MARKETPLACE_SETTINGS.amazon;

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const shareUrl = `${window.location.origin}/products/${product.asin || product.id}`;
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const formattedPrice = Number(product.price).toLocaleString("ar-EG");
  const formattedOldPrice = Number(product.previous_price).toLocaleString("ar-EG");
  const formattedSavings = Number(product.savings).toLocaleString("ar-EG");

  if (viewMode === "list") {
    return (
      <div className="cyber-card rounded-2xl p-4 flex flex-col md:flex-row items-center gap-5 group relative overflow-hidden">
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f0ff]/5 rounded-full blur-2xl pointer-events-none" />

        {/* Product Image Area */}
        <div className="relative w-36 h-36 shrink-0 bg-[#070a12] border border-white/10 rounded-xl p-2 flex items-center justify-center overflow-hidden">
          <Link href={`/products/${product.asin || product.id}`} className="w-full h-full flex items-center justify-center">
            <img
              src={product.image}
              alt={product.display_title}
              className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </Link>
          {product.discount_percent > 0 && (
            <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-[#ff007f] text-white text-[10px] font-black shadow-lg shadow-[#ff007f]/40">
              {product.discount_percent}%-
            </span>
          )}
        </div>

        {/* Content Details */}
        <div className="flex-1 space-y-2 min-w-0 w-full">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {/* Store Pill */}
            <span
              className="px-2.5 py-0.5 rounded-md font-black text-[10px] uppercase tracking-wider"
              style={{
                backgroundColor: store.surfaceColor,
                color: store.primaryColor,
                border: `1px solid ${store.primaryColor}50`,
              }}
            >
              {store.name}
            </span>

            <span className="text-[#94a3b8] font-medium">{product.category_ar}</span>
            <span className="text-white/20">•</span>
            <span className="font-bold text-[#00f0ff]">{product.brand}</span>

            {product.is_record_low && (
              <span className="inline-flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-md bg-[#00ff9d]/10 text-[#00ff9d] border border-[#00ff9d]/30">
                <TrendingDown className="w-3 h-3" />
                أقل سعر رصده الرادار
              </span>
            )}
          </div>

          {/* Title */}
          <Link href={`/products/${product.asin || product.id}`}>
            <h3 className="font-bold text-sm text-white hover:text-[#00f0ff] transition-colors line-clamp-2 leading-relaxed">
              {product.display_title}
            </h3>
          </Link>

          {/* Metadata */}
          <div className="flex items-center gap-4 text-xs text-[#94a3b8]">
            <span>البائع: <strong className="text-white">{product.seller}</strong></span>
            <span>وفر: <strong className="text-[#00ff9d]">{formattedSavings} ج.م</strong></span>
          </div>
        </div>

        {/* Price & Actions */}
        <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto shrink-0 gap-3 border-t md:border-t-0 pt-3 md:pt-0 border-white/10">
          <div className="text-right">
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-black text-white tracking-tight">{formattedPrice}</span>
              <span className="text-xs font-bold text-[#00f0ff]">ج.م</span>
            </div>
            {product.previous_price > product.price && (
              <div className="text-xs text-gray-500 line-through">
                {formattedOldPrice} ج.م
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggle(product.id)}
              className={`p-2 rounded-xl border transition-colors ${
                isFav
                  ? "bg-[#ff007f]/20 border-[#ff007f] text-[#ff007f]"
                  : "border-white/10 text-gray-400 hover:text-[#ff007f] hover:border-[#ff007f]/50"
              }`}
              title="حفظ في العتاد"
            >
              <Heart className={`w-4 h-4 ${isFav ? "fill-current" : ""}`} />
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-xl border border-white/10 text-gray-400 hover:text-[#00f0ff] hover:border-[#00f0ff]/50 transition-colors"
              title="مشاركة الرابط"
            >
              {copied ? <Check className="w-4 h-4 text-[#00ff9d]" /> : <Share2 className="w-4 h-4" />}
            </button>

            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all shadow-md active:scale-95 bg-gradient-to-r from-[#00f0ff] to-[#00a3ff] text-[#07090e] hover:shadow-lg hover:shadow-[#00f0ff]/30"
            >
              <span>{store.buttonLabel}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Grid view (Default)
  return (
    <div className="cyber-card rounded-2xl overflow-hidden flex flex-col justify-between group relative">
      
      {/* Top Banner / Store & Low tag */}
      <div className="p-3 pb-0 flex items-center justify-between z-10">
        <span
          className="px-2.5 py-0.5 rounded-md font-black text-[10px] tracking-wider"
          style={{
            backgroundColor: store.surfaceColor,
            color: store.primaryColor,
            border: `1px solid ${store.primaryColor}50`,
          }}
        >
          {store.name}
        </span>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => toggle(product.id)}
            className={`p-1.5 rounded-lg border transition-colors ${
              isFav
                ? "bg-[#ff007f]/20 border-[#ff007f] text-[#ff007f]"
                : "border-white/10 text-gray-400 hover:text-[#ff007f] hover:border-[#ff007f]/40 bg-[#0d121f]"
            }`}
            title="حفظ"
          >
            <Heart className={`w-3.5 h-3.5 ${isFav ? "fill-current" : ""}`} />
          </button>

          <button
            onClick={handleShare}
            className="p-1.5 rounded-lg border border-white/10 text-gray-400 hover:text-[#00f0ff] hover:border-[#00f0ff]/40 bg-[#0d121f] transition-colors"
            title="مشاركة"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#00ff9d]" /> : <Share2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Product Image Area with Scanlines */}
      <div className="relative h-48 w-full p-4 flex items-center justify-center bg-[#07090e]/60 cyber-image-frame overflow-hidden">
        <Link href={`/products/${product.asin || product.id}`} className="w-full h-full flex items-center justify-center z-10">
          <img
            src={product.image}
            alt={product.display_title}
            className="max-h-full max-w-full object-contain group-hover:scale-108 transition-transform duration-300 drop-shadow-md"
            loading="lazy"
          />
        </Link>

        {/* Glowing Discount Badge */}
        {product.discount_percent > 0 && (
          <span className="absolute bottom-2 right-2 px-2.5 py-0.5 rounded-md bg-[#ff007f] text-white text-[11px] font-black shadow-lg shadow-[#ff007f]/40 z-20">
            خصم {product.discount_percent}%
          </span>
        )}

        {product.is_record_low && (
          <span className="absolute top-2 right-2 flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-md bg-[#00ff9d]/15 text-[#00ff9d] border border-[#00ff9d]/40 z-20">
            <Zap className="w-3 h-3 text-[#00ff9d]" />
            أقل سعر مرصود ⚡
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-[#94a3b8]">
            <span className="font-semibold text-gray-400">{product.category_ar}</span>
            <span className="font-bold text-[#00f0ff]">{product.brand}</span>
          </div>

          <Link href={`/products/${product.asin || product.id}`}>
            <h3 className="font-bold text-sm text-white hover:text-[#00f0ff] transition-colors line-clamp-2 leading-relaxed">
              {product.display_title}
            </h3>
          </Link>
        </div>

        {/* Price & Savings */}
        <div className="pt-2 border-t border-white/10">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black text-white">{formattedPrice}</span>
                <span className="text-xs font-bold text-[#00f0ff]">ج.م</span>
              </div>
              {product.previous_price > product.price && (
                <div className="text-xs text-gray-500 line-through">
                  {formattedOldPrice} ج.م
                </div>
              )}
            </div>

            {product.savings > 0 && (
              <div className="text-left">
                <span className="text-[10px] font-black text-[#00ff9d] bg-[#00ff9d]/10 border border-[#00ff9d]/20 px-2 py-0.5 rounded-md">
                  وفر {formattedSavings} ج.م
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-2 space-y-2">
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95 bg-gradient-to-r from-[#00f0ff] to-[#00a3ff] text-[#07090e] hover:shadow-lg hover:shadow-[#00f0ff]/25"
          >
            <span>{store.buttonLabel}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <Link
            href={`/products/${product.asin || product.id}`}
            className="w-full py-2 px-4 rounded-xl text-xs font-bold text-[#00f0ff] bg-[#00f0ff]/10 hover:bg-[#00f0ff]/20 border border-[#00f0ff]/30 flex items-center justify-center transition-colors"
          >
            رادار السعر وتحليل الأداء ↗
          </Link>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between text-[11px] text-[#94a3b8] pt-1">
          <span>البائع: {product.seller}</span>
          <span className="flex items-center gap-1 text-[#00ff9d]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse" />
            مرصود حديثاً
          </span>
        </div>
      </div>
    </div>
  );
}
