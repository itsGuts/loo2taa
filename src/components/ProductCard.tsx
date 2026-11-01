"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product } from "@/lib/types";
import { MARKETPLACE_SETTINGS } from "@/lib/loo2taa-data";
import PriceAlertModal from "./PriceAlertModal";
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
  Clock,
  Store,
  Bell
} from "lucide-react";

interface ProductCardProps {
  product: Product;
  viewMode?: "grid" | "list";
}

function getRelativeTimeAr(dateString?: string): string {
  if (!dateString) return "فُحص مؤخراً ⚡";
  try {
    const diffMs = Date.now() - new Date(dateString).getTime();
    if (isNaN(diffMs) || diffMs < 0) return "فُحص مؤخراً ⚡";
    const diffMins = Math.floor(diffMs / (1000 * 60));
    if (diffMins < 1) return "فُحص الآن ⚡";
    if (diffMins < 60) return `منذ ${diffMins} دقيقة`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours === 1) return "منذ ساعة";
    if (diffHours === 2) return "منذ ساعتين";
    if (diffHours <= 10) return `منذ ${diffHours} ساعات`;
    if (diffHours < 24) return `منذ ${diffHours} ساعة`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays === 1) return "منذ يوم";
    if (diffDays === 2) return "منذ يومين";
    return `منذ ${diffDays} أيام`;
  } catch {
    return "فُحص مؤخراً ⚡";
  }
}

export default function ProductCard({ product, viewMode = "grid" }: ProductCardProps) {
  const { isFavorite, toggle, mounted } = useFavorites();
  const [copied, setCopied] = useState(false);
  const [tgCopied, setTgCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [imgError, setImgError] = useState(false);
  const isFav = mounted && isFavorite(product.id);
  const verdict = getDealVerdict(product);

  const store = MARKETPLACE_SETTINGS[product.marketplace] || MARKETPLACE_SETTINGS.amazon;
  const pointsCount = product.points_count || 12;
  const relativeTime = getRelativeTimeAr(product.price_checked_at);

  // Clean product detail link (/p/[asin] or fallback)
  const productHref = `/p/${product.asin || product.id}`;

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
    const shareUrl = `${window.location.origin}${productHref}`;
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
  const baselinePrice = product.reference_price || product.previous_price;
  const formattedBaseline = Number(baselinePrice).toLocaleString("ar-EG");
  const formattedSavings = Number(product.savings).toLocaleString("ar-EG");

  // Deal verdict badge
  const VerdictBadge = ({ compact = false }: { compact?: boolean }) => {
    const Icon = verdict.type === "genuine" ? ShieldCheck : verdict.type === "fake" ? ShieldAlert : ShieldCheck;
    return (
      <span
        className={`inline-flex items-center gap-1 font-bold rounded-md border ${
          compact ? "text-[9px] px-1.5 py-0.5" : "text-[10px] px-2 py-0.5"
        }`}
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

  // Yestahil-Style Price Drop and Observation Points Badge
  const PriceDropChip = ({ compact = false }: { compact?: boolean }) => {
    if (product.is_record_low && verdict.type !== 'fake') {
      return (
        <span className={`inline-flex items-center gap-1 font-black rounded-lg bg-[#00ff9d]/15 text-[#00ff9d] border border-[#00ff9d]/30 ${
          compact ? "text-[9px] px-1.5 py-0.5" : "text-[10px] px-2 py-0.5"
        }`}>
          <Zap className="w-3 h-3" />
          <span>انخفاض تاريخي ⚡</span>
          <span className="opacity-75 font-normal">({pointsCount} نقطة رصد)</span>
        </span>
      );
    }

    if (product.discount_percent > 0) {
      return (
        <span className={`inline-flex items-center gap-1 font-bold rounded-lg bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/25 ${
          compact ? "text-[9px] px-1.5 py-0.5" : "text-[10px] px-2 py-0.5"
        }`}>
          <TrendingDown className="w-3 h-3 text-[#00ff9d]" />
          <span>هبوط {product.discount_percent}% عن المرجعي</span>
          <span className="opacity-75 font-mono text-[9px]">({pointsCount} نقطة)</span>
        </span>
      );
    }

    return null;
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
          <MessageCircle className="w-3.5 h-3.5 text-[#25d366]" />
          شير على واتساب
        </button>
        <button
          onClick={handleTelegramCopy}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold text-white hover:bg-[#0088cc]/15 hover:text-[#00f0ff] transition-colors"
        >
          {tgCopied ? <Check className="w-3.5 h-3.5 text-[#00ff9d]" /> : <Send className="w-3.5 h-3.5 text-[#0088cc]" />}
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

  // List View
  if (viewMode === "list") {
    return (
      <div className="cyber-card rounded-2xl p-4 flex flex-col md:flex-row items-center gap-5 group relative">
        {/* Product Image Area */}
        <div className="relative w-32 h-32 shrink-0 bg-[#070a12] border border-white/5 rounded-xl p-3 flex items-center justify-center overflow-hidden">
          <Link href={productHref} className="w-full h-full flex items-center justify-center">
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
            {/* Store Badge */}
            <span
              className="px-2 py-0.5 rounded-md font-bold text-[10px] flex items-center gap-1 border"
              style={{
                backgroundColor: `${store.primaryColor}15`,
                borderColor: `${store.primaryColor}40`,
                color: store.primaryColor,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: store.primaryColor }} />
              {store.name}
            </span>

            {/* Category Chip */}
            <span className="px-2 py-0.5 rounded-md bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20 text-[10px] font-bold">
              {product.category_ar}
            </span>

            <span className="text-white/20">•</span>
            <span className="font-bold text-gray-300 text-[11px]">{product.brand}</span>

            {/* Yestahil-Style Drop Chip */}
            <PriceDropChip compact />

            <VerdictBadge compact />
          </div>

          <Link href={productHref}>
            <h3 className="font-bold text-sm text-white hover:text-[#00f0ff] transition-colors line-clamp-2 leading-relaxed">
              {product.display_title}
            </h3>
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
            <span>البائع: <strong className="text-gray-200">{product.seller}</strong></span>
            {product.savings > 0 && (
              <span>وفر: <strong className="text-[#00ff9d]">{formattedSavings} ج.م</strong></span>
            )}
            <span className="text-gray-500 font-mono text-[10px] flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#00f0ff]" />
              {relativeTime}
            </span>
          </div>
        </div>

        {/* Price & Actions */}
        <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto shrink-0 gap-3 border-t md:border-t-0 pt-3 md:pt-0 border-white/5">
          <div className="text-right">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-white">{formattedPrice}</span>
              <span className="text-xs font-bold text-[#00f0ff]">ج.م</span>
            </div>
            {baselinePrice > product.price && (
              <div className="text-xs text-gray-500 line-through" title="السعر المرجعي (وسيط 90 يوم)">
                مرجعي: {formattedBaseline} ج.م
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowAlertModal(true);
              }}
              className="p-2 rounded-xl border border-white/10 text-gray-400 hover:text-[#00ff9d] hover:border-[#00ff9d]/40 transition-colors"
              title="نبهني عند انخفاض السعر 🔔"
            >
              <Bell className="w-4 h-4" />
            </button>

            <button
              onClick={() => toggle(product.id)}
              className={`p-2 rounded-xl border transition-colors ${
                isFav
                  ? "bg-[#ff007f]/20 border-[#ff007f] text-[#ff007f]"
                  : "border-white/10 text-gray-400 hover:text-[#ff007f]"
              }`}
              title="حفظ في المفضلة"
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

        {showAlertModal && (
          <PriceAlertModal
            product={product}
            isOpen={showAlertModal}
            onClose={() => setShowAlertModal(false)}
          />
        )}
      </div>
    );
  }

  // Grid view (Default)
  return (
    <div className="cyber-card rounded-2xl overflow-hidden flex flex-col justify-between group">
      
      {/* Top Banner: Store Tag & Live Status */}
      <div className="p-3 pb-0 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span
            className="px-2 py-0.5 rounded-md font-bold text-[10px] flex items-center gap-1 border"
            style={{
              backgroundColor: `${store.primaryColor}15`,
              borderColor: `${store.primaryColor}40`,
              color: store.primaryColor,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: store.primaryColor }} />
            {store.name}
          </span>

          <span className="px-1.5 py-0.5 rounded-md font-bold text-[9px] bg-[#00ff9d]/10 text-[#00ff9d] border border-[#00ff9d]/20 flex items-center gap-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff9d] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00ff9d]"></span>
            </span>
            <span>{relativeTime}</span>
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowAlertModal(true);
            }}
            className="p-1.5 rounded-lg border border-white/10 text-gray-400 hover:text-[#00ff9d] hover:border-[#00ff9d]/40 bg-[#070a12] transition-colors"
            title="نبهني عند انخفاض السعر 🔔"
          >
            <Bell className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => toggle(product.id)}
            className={`p-1.5 rounded-lg border transition-colors ${
              isFav
                ? "bg-[#ff007f]/20 border-[#ff007f] text-[#ff007f]"
                : "border-white/10 text-gray-400 hover:text-[#ff007f] hover:border-[#ff007f]/40 bg-[#070a12]"
            }`}
            title="حفظ في المفضلة"
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
        <Link href={productHref} className="w-full h-full flex items-center justify-center">
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

        {/* Top-Right Badge: Record low or points count */}
        {product.is_record_low && verdict.type !== 'fake' ? (
          <span className="absolute top-2.5 right-2.5 flex items-center gap-1 text-[9px] font-black px-2 py-0.5 rounded-md bg-[#00ff9d]/15 text-[#00ff9d] border border-[#00ff9d]/30">
            <Zap className="w-2.5 h-2.5" />
            أقل سعر تاريخي
          </span>
        ) : (
          <span className="absolute top-2.5 right-2.5 flex items-center gap-1 text-[9px] font-medium px-1.5 py-0.5 rounded-md bg-black/60 text-gray-300 border border-white/10 backdrop-blur-xs font-mono">
            {pointsCount} نقطة رصد
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] text-[#94a3b8]">
            <span className="px-2 py-0.5 rounded-md bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20 text-[10px] font-bold">
              {product.category_ar}
            </span>
            <span className="font-bold text-gray-300">{product.brand}</span>
          </div>

          <Link href={productHref}>
            <h3 className="font-bold text-sm text-white hover:text-[#00f0ff] transition-colors line-clamp-2 leading-snug">
              {product.display_title}
            </h3>
          </Link>

          {/* Yestahil-Style Drop Chip & Verdict Badge */}
          <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
            <PriceDropChip compact />
            <VerdictBadge compact />
          </div>

          <div className="text-[11px] text-gray-400">
            <span>البائع: <strong className="text-gray-300">{product.seller}</strong></span>
          </div>
        </div>

        {/* Price & Savings */}
        <div className="pt-2 border-t border-white/5">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black text-white">{formattedPrice}</span>
                <span className="text-xs font-bold text-[#00f0ff]">ج.م</span>
              </div>
              {baselinePrice > product.price && (
                <div className="text-xs text-gray-500 line-through" title="السعر المرجعي (وسيط 90 يوم)">
                  مرجعي: {formattedBaseline} ج.م
                </div>
              )}
            </div>

            {product.savings > 0 && (
              <span className="text-[10px] font-bold text-[#00ff9d] bg-[#00ff9d]/10 border border-[#00ff9d]/20 px-2 py-0.5 rounded-md">
                وفر {formattedSavings} ج.م
              </span>
            )}
          </div>
          {product.price >= 2000 && (
            <div className="text-[10px] text-gray-400 flex items-center gap-1 pt-1 font-mono">
              <span>💳 قسط تقديري (6 شهور): {Math.round(product.price / 6).toLocaleString('ar-EG')} ج.م/ش</span>
            </div>
          )}
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
              href={productHref}
              className="flex-1 py-2 px-3 rounded-xl text-[11px] font-bold text-gray-300 hover:text-[#00f0ff] bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 flex items-center justify-center transition-colors"
            >
              سجل السعر والمنحنى ↗
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

      {showAlertModal && (
        <PriceAlertModal
          product={product}
          isOpen={showAlertModal}
          onClose={() => setShowAlertModal(false)}
        />
      )}
    </div>
  );
}
