"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product } from "@/lib/types";
import { MARKETPLACE_SETTINGS } from "@/lib/loo2taa-data";
import { useFavorites } from "@/lib/favorites";
import { getDealVerdict, getWhatsAppShareUrl, getTelegramPost } from "@/lib/sharing";
import {
  Heart,
  TrendingDown,
  Share2,
  Check,
  Zap,
  ArrowUpRight,
  MessageCircle,
  Send,
  Copy,
  ShieldCheck,
  ShieldAlert,
} from "lucide-react";

interface ProductCardProps {
  product: Product;
  viewMode?: "grid" | "list";
}

export default function ProductCard({ product, viewMode = "grid" }: ProductCardProps) {
  const { isFavorite, toggle, mounted } = useFavorites();
  const [copied, setCopied] = useState(false);
  const [tgCopied, setTgCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [imgError, setImgError] = useState(false);
  const isFav = mounted && isFavorite(product.id);
  const verdict = getDealVerdict(product);

  const store = MARKETPLACE_SETTINGS[product.marketplace] || MARKETPLACE_SETTINGS.amazon;

  const handleWhatsAppShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(getWhatsAppShareUrl(product), "_blank");
  };

  const handleTelegramCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const post = getTelegramPost(product);
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(post);
      setTgCopied(true);
      setTimeout(() => setTgCopied(false), 2500);
    }
  };

  const handleShareLink = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const shareUrl = `${window.location.origin}/products/${product.asin || product.id}`;
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const toggleShareMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowShareMenu(!showShareMenu);
  };

  const formattedPrice = Number(product.price).toLocaleString("ar-EG");
  const formattedOldPrice = Number(product.previous_price).toLocaleString("ar-EG");
  const formattedSavings = Number(product.savings).toLocaleString("ar-EG");

  // Deal verdict badge component
  const VerdictBadge = ({ compact = false }: { compact?: boolean }) => {
    const Icon = verdict.type === "genuine" ? ShieldCheck : verdict.type === "fake" ? ShieldAlert : ShieldCheck;
    return (
      <span
        className={`inline-flex items-center gap-1 font-bold rounded-md border ${compact ? "text-[9px] px-1.5 py-0.5" : "text-[10px] px-2 py-0.5"}`}
        style={{
          color: verdict.color,
          backgroundColor: verdict.bgColor,
          borderColor: verdict.borderColor,
        }}
        title={verdict.label}
      >
        <Icon className={compact ? "w-2.5 h-2.5" : "w-3 h-3"} />
        {compact ? verdict.labelShort : verdict.label}
      </span>
    );
  };

  // Share dropdown menu
  const ShareMenu = () => (
    showShareMenu ? (
      <div
        className="absolute z-20 top-full mt-1 left-0 bg-[#0b101c] border border-white/10 rounded-xl shadow-2xl p-1.5 space-y-0.5 min-w-[180px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleWhatsAppShare}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold text-white hover:bg-[#25d366]/15 hover:text-[#25d366] transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          شير على واتساب
        </button>
        <button
          onClick={handleTelegramCopy}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold text-white hover:bg-[#0088cc]/15 hover:text-[#00f0ff] transition-colors"
        >
          {tgCopied ? <Check className="w-3.5 h-3.5 text-[#00ff9d]" /> : <Send className="w-3.5 h-3.5" />}
          {tgCopied ? "تم نسخ البوست! ✅" : "انسخ بوست تليجرام"}
        </button>
        <button
          onClick={handleShareLink}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold text-white hover:bg-white/5 hover:text-[#00f0ff] transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-[#00ff9d]" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "تم نسخ الرابط! ✅" : "انسخ الرابط"}
        </button>
      </div>
    ) : null
  );

  if (viewMode === "list") {
    return (
      <div className="cyber-card rounded-2xl p-4 flex flex-col md:flex-row items-center gap-5 group relative">
        {/* Product Image Area */}
        <div className="relative w-32 h-32 shrink-0 bg-[#070a12] border border-white/5 rounded-xl p-3 flex items-center justify-center overflow-hidden">
          <Link href={`/products/${product.asin || product.id}`} className="w-full h-full flex items-center justify-center">
            {imgError ? (
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-2 rounded-lg bg-gradient-to-br from-[#0c1222] to-[#162035] border border-cyan-500/20">
                <Zap className="w-6 h-6 text-[#00f0ff] mb-1 opacity-80" />
                <span className="text-[10px] font-bold text-gray-300 line-clamp-1">{product.brand}</span>
              </div>
            ) : (
              <img
                src={product.image}
                alt={product.display_title}
                onError={() => setImgError(true)}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            )}
          </Link>
          {product.discount_percent > 0 && (
            <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-[#ff007f] text-white text-[10px] font-black">
              {product.discount_percent}%-
            </span>
          )}
        </div>

        {/* Content Details */}
        <div className="flex-1 space-y-1.5 min-w-0 w-full">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2 py-0.5 rounded-md font-bold text-[10px] bg-[#ff9900]/10 text-[#ff9900] border border-[#ff9900]/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900]" />
              أمازون مصر
            </span>

            <span className="text-[#94a3b8] font-medium text-[11px]">{product.category_ar}</span>
            <span className="text-white/20">•</span>
            <span className="font-bold text-[#00f0ff] text-[11px]">{product.brand}</span>

            {product.is_record_low && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#00ff9d]/10 text-[#00ff9d]">
                <TrendingDown className="w-3 h-3" />
                أقل سعر مسجل
              </span>
            )}

            <VerdictBadge compact />
          </div>

          <Link href={`/products/${product.asin || product.id}`}>
            <h3 className="font-bold text-sm text-white hover:text-[#00f0ff] transition-colors line-clamp-2 leading-relaxed">
              {product.display_title}
            </h3>
          </Link>

          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span>البائع: <strong className="text-gray-200">{product.seller}</strong></span>
            {product.savings > 0 && (
              <span>وفر: <strong className="text-[#00ff9d]">{formattedSavings} ج.م</strong></span>
            )}
          </div>
        </div>

        {/* Price & Actions */}
        <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto shrink-0 gap-3 border-t md:border-t-0 pt-3 md:pt-0 border-white/5">
          <div className="text-right">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-white">{formattedPrice}</span>
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
                  : "border-white/10 text-gray-400 hover:text-[#ff007f]"
              }`}
              title="حفظ"
            >
              <Heart className={`w-4 h-4 ${isFav ? "fill-current" : ""}`} />
            </button>

            <div className="relative">
              <button
                onClick={toggleShareMenu}
                className="p-2 rounded-xl border border-white/10 text-gray-400 hover:text-[#00f0ff] transition-colors"
                title="مشاركة"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <ShareMenu />
            </div>

            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-primary px-4 py-2 rounded-xl text-xs flex items-center gap-1.5"
            >
              <span>{store.buttonLabel}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Grid view (Default)
  return (
    <div className="cyber-card rounded-2xl overflow-hidden flex flex-col justify-between group">
      
      {/* Top Banner */}
      <div className="p-3 pb-0 flex items-center justify-between">
        <span className="px-2 py-0.5 rounded-md font-bold text-[10px] bg-[#ff9900]/10 text-[#ff9900] border border-[#ff9900]/30 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900]" />
          أمازون مصر
        </span>

        <div className="flex items-center gap-1">
          <button
            onClick={() => toggle(product.id)}
            className={`p-1.5 rounded-lg border transition-colors ${
              isFav
                ? "bg-[#ff007f]/20 border-[#ff007f] text-[#ff007f]"
                : "border-white/10 text-gray-400 hover:text-[#ff007f] hover:border-[#ff007f]/40 bg-[#070a12]"
            }`}
            title="حفظ"
          >
            <Heart className={`w-3.5 h-3.5 ${isFav ? "fill-current" : ""}`} />
          </button>

          <div className="relative">
            <button
              onClick={toggleShareMenu}
              className="p-1.5 rounded-lg border border-white/10 text-gray-400 hover:text-[#00f0ff] bg-[#070a12] transition-colors"
              title="مشاركة"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
            <ShareMenu />
          </div>
        </div>
      </div>

      {/* Product Image Area */}
      <div className="relative h-44 w-full p-4 flex items-center justify-center bg-[#070a12]/50">
        <Link href={`/products/${product.asin || product.id}`} className="w-full h-full flex items-center justify-center">
          {imgError ? (
            <div className="w-full h-full flex flex-col items-center justify-center text-center p-3 rounded-xl bg-gradient-to-br from-[#0c1222] to-[#162035] border border-cyan-500/20">
              <Zap className="w-8 h-8 text-[#00f0ff] mb-1.5 opacity-80" />
              <span className="text-xs font-bold text-gray-200 line-clamp-1">{product.brand}</span>
              <span className="text-[10px] text-cyan-400 font-mono tracking-wider mt-0.5">LO2TAA RADAR</span>
            </div>
          ) : (
            <img
              src={product.image}
              alt={product.display_title}
              onError={() => setImgError(true)}
              className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
              loading="lazy"
            />
          )}
        </Link>

        {product.discount_percent > 0 && (
          <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-[#ff007f] text-white text-[10px] font-black shadow-md">
            خصم {product.discount_percent}%
          </span>
        )}

        {product.is_record_low && (
          <span className="absolute top-2.5 right-2.5 flex items-center gap-1 text-[9px] font-black px-2 py-0.5 rounded-md bg-[#00ff9d]/15 text-[#00ff9d] border border-[#00ff9d]/30">
            <Zap className="w-2.5 h-2.5" />
            أقل سعر مرصود
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] text-[#94a3b8]">
            <span>{product.category_ar}</span>
            <span className="font-bold text-[#00f0ff]">{product.brand}</span>
          </div>

          <Link href={`/products/${product.asin || product.id}`}>
            <h3 className="font-bold text-sm text-white hover:text-[#00f0ff] transition-colors line-clamp-2 leading-snug">
              {product.display_title}
            </h3>
          </Link>

          {/* Deal Verdict Badge */}
          <VerdictBadge compact />
        </div>

        {/* Price & Savings */}
        <div className="pt-2 border-t border-white/5">
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
              <span className="text-[10px] font-bold text-[#00ff9d] bg-[#00ff9d]/10 border border-[#00ff9d]/20 px-2 py-0.5 rounded-md">
                وفر {formattedSavings} ج.م
              </span>
            )}
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-1 space-y-1.5">
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber-primary w-full py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5"
          >
            <span>{store.buttonLabel}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <div className="flex gap-1.5">
            <Link
              href={`/products/${product.asin || product.id}`}
              className="flex-1 py-2 px-3 rounded-xl text-[11px] font-bold text-gray-300 hover:text-[#00f0ff] bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 flex items-center justify-center transition-colors"
            >
              سجل السعر والتقييم ↗
            </Link>
            <button
              onClick={handleWhatsAppShare}
              className="p-2 rounded-xl bg-[#25d366]/10 border border-[#25d366]/20 text-[#25d366] hover:bg-[#25d366]/20 transition-colors"
              title="شير على واتساب"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
