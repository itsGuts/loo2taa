"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  ShieldAlert,
  Loader2,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ExternalLink
} from "lucide-react";
import { Product } from "@/lib/types";

export default function DealInspector() {
  const [inputUrl, setInputUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
    product: Product;
    verdict: { type: string; label: string; labelShort: string; color: string };
    cached: boolean;
  } | null>(null);

  const handleInspect = async (urlToTest?: string) => {
    const target = urlToTest || inputUrl;
    if (!target.trim()) {
      setError("من فضلك ضع رابط منتج أمازون مصر أولاً");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch(`/api/inspect?url=${encodeURIComponent(target.trim())}`);
      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || "تعذر فحص هذا الرابط، تأكد من صحة رابط أمازون مصر");
      } else {
        setResult({
          product: data.product,
          verdict: data.verdict,
          cached: data.cached,
        });
      }
    } catch (err: any) {
      setError("حدث خطأ أثناء الاتصال بسيرفر الفحص، يرجى المحاولة مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  const sampleUrls = [
    { label: "كارت شاشة RTX 4060", asin: "B0CSPNYB42" },
    { label: "مايك هايبر إكس QuadCast S", asin: "B08G8WH435" },
    { label: "ماوس جيمنج لوجيتيك G502", asin: "B07GBZ4Q68" },
    { label: "شاشة ألعاب BenQ 180Hz", asin: "B0DXNTYHND" },
  ];

  return (
    <div className="cyber-card rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#0c1322] via-[#070b14] to-[#120a22] border border-[#00f0ff]/20 shadow-2xl space-y-5">
      {/* Tool Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00ff9d] animate-pulse" />
            <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#00f0ff]" />
              <span>فاحص صفقات أمازون مصر الذكي (مثل صفقة Safqa)</span>
            </h2>
          </div>
          <p className="text-xs text-gray-300">
            الصق رابط أي منتج أو كود (ASIN) من أمازون مصر لنكشف لك فوراً: هل هو لقطة حقيقية أم خصم وهمي؟
          </p>
        </div>
        <div className="px-3 py-1 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] text-xs font-black self-start sm:self-auto shrink-0">
          فحص مجاني ومباشر ⚡
        </div>
      </div>

      {/* Input & Action Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleInspect();
        }}
        className="flex flex-col sm:flex-row items-center gap-2.5"
      >
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="الصق رابط المنتج هنا (مثال: https://www.amazon.eg/dp/B08G8WH435)..."
            className="w-full bg-[#050811] border border-white/10 focus:border-[#00f0ff] rounded-2xl py-3.5 pr-10 pl-4 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-hidden transition-all shadow-inner"
            dir="ltr"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-cyber-primary w-full sm:w-auto py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 shrink-0 shadow-lg"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>جاري الفحص المباشر...</span>
            </>
          ) : (
            <>
              <Zap className="w-4 h-4" />
              <span>افحص اللقطة الآن</span>
            </>
          )}
        </button>
      </form>

      {/* Quick Sample Links */}
      <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
        <span className="text-gray-400 text-[11px]">أو جرب فحص:</span>
        {sampleUrls.map((s) => (
          <button
            key={s.asin}
            type="button"
            onClick={() => {
              setInputUrl(s.asin);
              handleInspect(s.asin);
            }}
            className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-[#00f0ff] border border-white/5 text-[11px] font-bold transition-colors"
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-3.5 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2 animate-in fade-in">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Inspection Result Card */}
      {result && (
        <div className="p-5 rounded-2xl bg-[#060913] border border-white/10 space-y-4 animate-in slide-in-from-top-4 duration-300 shadow-xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
            {/* Image */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-[#070a12] p-2 border border-white/5 flex items-center justify-center shrink-0">
              <img
                src={result.product.image}
                alt={result.product.display_title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Details */}
            <div className="flex-1 space-y-2 text-center md:text-right min-w-0">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span
                  className="px-2.5 py-0.5 rounded-md font-bold text-xs"
                  style={{
                    backgroundColor: `${result.verdict.color}20`,
                    color: result.verdict.color,
                    border: `1px solid ${result.verdict.color}40`,
                  }}
                >
                  {result.verdict.labelShort}
                </span>

                <span className="text-[11px] font-bold text-gray-400">
                  {result.verdict.label}
                </span>

                {result.cached && (
                  <span className="text-[10px] bg-[#00f0ff]/10 text-[#00f0ff] px-2 py-0.5 rounded-md border border-[#00f0ff]/30 font-bold">
                    مسجل وموثق بالرادار ⚡
                  </span>
                )}
              </div>

              <h3 className="font-black text-sm sm:text-base text-white line-clamp-2 leading-snug">
                {result.product.display_title}
              </h3>

              {/* Price & Savings */}
              <div className="flex flex-wrap items-baseline justify-center md:justify-start gap-3 pt-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-white">
                    {Number(result.product.price).toLocaleString("ar-EG")}
                  </span>
                  <span className="text-xs font-bold text-[#00f0ff]">جنيه مصري</span>
                </div>

                {result.product.previous_price > result.product.price && (
                  <span className="text-xs text-gray-500 line-through">
                    السابق: {Number(result.product.previous_price).toLocaleString("ar-EG")} ج.م
                  </span>
                )}

                {result.product.savings > 0 && (
                  <span className="text-xs font-bold text-[#00ff9d] bg-[#00ff9d]/10 px-2 py-0.5 rounded-md border border-[#00ff9d]/20">
                    وفرت: {Number(result.product.savings).toLocaleString("ar-EG")} ج.م (-{result.product.discount_percent}%)
                  </span>
                )}
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col gap-2 w-full md:w-auto shrink-0 pt-2 md:pt-0">
              <a
                href={result.product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyber-primary py-3 px-6 rounded-xl text-xs font-black flex items-center justify-center gap-2 shadow-lg"
              >
                <span>اقتنص اللقطة من أمازون ⚡</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {result.cached && (
                <Link
                  href={`/products/${result.product.asin || result.product.id}`}
                  className="py-2 px-4 rounded-xl text-center text-xs font-bold text-gray-300 hover:text-[#00f0ff] bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
                >
                  شاهد الرسم البياني لـ 90 يوم ↗
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
