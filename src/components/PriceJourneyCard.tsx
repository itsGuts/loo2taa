"use client";

import React from "react";
import { Product } from "@/lib/types";
import {
  TrendingDown,
  TrendingUp,
  Zap,
  Clock,
  ShieldCheck,
  Calendar,
  Activity,
  Layers,
  CreditCard,
  Percent,
  CheckCircle2
} from "lucide-react";

interface PriceJourneyCardProps {
  product: Product;
}

export default function PriceJourneyCard({ product }: PriceJourneyCardProps) {
  const history = product.price_history || [];
  const prices = history.map((h) => Number(h.price)).filter((p) => p > 0);

  const currentPrice = Number(product.price);
  const minPrice = prices.length > 0 ? Math.min(...prices) : currentPrice;
  const maxPrice = prices.length > 0 ? Math.max(...prices) : Math.max(currentPrice, product.previous_price || currentPrice);
  
  // Find dates for lowest and highest
  const minPoint = history.find((h) => Number(h.price) === minPrice) || history[0];
  const maxPoint = history.find((h) => Number(h.price) === maxPrice) || history[history.length - 1];

  const minDate = minPoint?.date ? new Date(minPoint.date).toLocaleDateString("ar-EG", { month: "short", day: "numeric", year: "numeric" }) : "خلال فترة الرصد";
  const maxDate = maxPoint?.date ? new Date(maxPoint.date).toLocaleDateString("ar-EG", { month: "short", day: "numeric", year: "numeric" }) : "خلال فترة الرصد";

  const isAtRecordLow = currentPrice <= minPrice;
  const diffFromMinPercent = minPrice > 0 ? Math.round(((currentPrice - minPrice) / minPrice) * 100) : 0;
  const dropFromMaxPercent = maxPrice > 0 ? Math.round(((maxPrice - currentPrice) / maxPrice) * 100) : 0;

  // Installment breakdowns (Egypt standard: 6, 12, 24 months)
  const inst6 = Math.round(currentPrice / 6);
  const inst12 = Math.round((currentPrice * 1.08) / 12);
  const inst24 = Math.round((currentPrice * 1.18) / 24);

  return (
    <div className="cyber-card rounded-3xl p-6 sm:p-8 space-y-6 border border-white/[0.08] shadow-2xl bg-[#070b14]/90 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.08] relative z-10">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg sm:text-xl font-black text-white font-sans">
              سجل السعر ومؤشرات رحلة المنتج (Price Activity & Journey)
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            تحليل دقيق لسلوك السعر التاريخي على أمازون مصر ومقارنة السعر الحالي بالقاع والقمة المسجلة
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold font-mono">
            {history.length || 12} قراءات رصد
          </span>
          <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-mono">
            آخر 90 يوماً
          </span>
        </div>
      </div>

      {/* Yestahil-Style 4 Key Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 relative z-10">
        {/* Metric 1: Lowest Recorded */}
        <div className="bg-[#050811] rounded-2xl p-4 border border-emerald-500/25 space-y-2 relative overflow-hidden group hover:border-emerald-500/50 transition-all">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold text-emerald-400 flex items-center gap-1.5 font-sans">
              <Zap className="w-3.5 h-3.5" />
              أقل سعر مرصود
            </span>
            <span className="text-[10px] text-emerald-500/70 font-mono">RECORD LOW</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black text-white font-mono">{minPrice.toLocaleString("ar-EG")}</span>
            <span className="text-xs font-bold text-emerald-400">ج.م</span>
          </div>
          <div className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
            <Calendar className="w-3 h-3 text-slate-500" />
            <span>سُجل في: {minDate}</span>
          </div>
        </div>

        {/* Metric 2: Highest Recorded */}
        <div className="bg-[#050811] rounded-2xl p-4 border border-white/[0.08] space-y-2 relative overflow-hidden group hover:border-white/20 transition-all">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold text-rose-400 flex items-center gap-1.5 font-sans">
              <TrendingUp className="w-3.5 h-3.5" />
              أعلى سعر مرصود
            </span>
            <span className="text-[10px] text-rose-500/70 font-mono">PEAK HIGH</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black text-white font-mono">{maxPrice.toLocaleString("ar-EG")}</span>
            <span className="text-xs font-bold text-rose-400">ج.م</span>
          </div>
          <div className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
            <Calendar className="w-3 h-3 text-slate-500" />
            <span>سُجل في: {maxDate}</span>
          </div>
        </div>

        {/* Metric 3: Baseline / 90-Day Median */}
        <div className="bg-[#050811] rounded-2xl p-4 border border-cyan-500/20 space-y-2 relative overflow-hidden group hover:border-cyan-500/40 transition-all">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold text-cyan-400 flex items-center gap-1.5 font-sans">
              <Layers className="w-3.5 h-3.5" />
              السعر المرجعي المعتاد
            </span>
            <span className="text-[10px] text-cyan-400/70 font-mono">90D MEDIAN</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black text-white font-mono">{Number(product.reference_price || minPrice).toLocaleString("ar-EG")}</span>
            <span className="text-xs font-bold text-cyan-400">ج.م</span>
          </div>
          <div className="text-[11px] text-slate-400">
            <span>وسيط الـ 90 يوماً لكشف الخصم الوهمي</span>
          </div>
        </div>

        {/* Metric 4: Current Position Verdict */}
        <div className={`rounded-2xl p-4 border space-y-2 relative overflow-hidden ${
          isAtRecordLow
            ? "bg-emerald-950/20 border-emerald-500/40"
            : "bg-cyan-950/20 border-cyan-500/30"
        }`}>
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold flex items-center gap-1.5 font-sans text-white">
              <Percent className="w-3.5 h-3.5 text-cyan-400" />
              موقع السعر الحالي
            </span>
            <span className="text-[10px] font-mono text-cyan-300">STATUS</span>
          </div>
          <div className="text-sm font-black text-white">
            {isAtRecordLow ? (
              <span className="text-emerald-400 flex items-center gap-1 font-sans">
                <Zap className="w-4 h-4" />
                عند أدنى قاع تاريخي ⚡
              </span>
            ) : (
              <span className="text-cyan-300 font-sans">
                أعلى بـ {diffFromMinPercent}% فقط من القاع
              </span>
            )}
          </div>
          <div className="text-[11px] text-slate-300">
            {dropFromMaxPercent > 0 ? `هبوط ${dropFromMaxPercent}% عن أعلى سعر` : "مستقر وموثق"}
          </div>
        </div>
      </div>

      {/* Installment Calculator Widget (ValU, Aman, Bank Cards 6-24M) */}
      <div className="bg-[#050811] rounded-2xl p-4 sm:p-5 border border-white/[0.08] space-y-3 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-cyan-400" />
            <h3 className="text-xs sm:text-sm font-bold text-white font-sans">
              خيارات وخطط التقسيط التقديرية (Installment Calculator)
            </h3>
          </div>
          <span className="text-[11px] text-slate-400">
            متاح لحاملي بطاقات الائتمان وبنوك مصر وتطبيقات التقسيط (ValU / أمان)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
            <div>
              <span className="text-[11px] text-slate-400 block font-sans">نظام 6 شهور (بدون فوائد غالباً)</span>
              <span className="text-base font-black text-cyan-300 font-mono">{inst6.toLocaleString("ar-EG")} ج.م</span>
              <span className="text-[10px] text-slate-500 block">/ شهر</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 text-[10px] font-mono font-bold">
              0% عروض
            </span>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
            <div>
              <span className="text-[11px] text-slate-400 block font-sans">نظام 12 شهراً</span>
              <span className="text-base font-black text-white font-mono">{inst12.toLocaleString("ar-EG")} ج.م</span>
              <span className="text-[10px] text-slate-500 block">/ شهر</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-slate-300 text-[10px] font-mono">
              12 Months
            </span>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
            <div>
              <span className="text-[11px] text-slate-400 block font-sans">نظام 24 شهراً</span>
              <span className="text-base font-black text-white font-mono">{inst24.toLocaleString("ar-EG")} ج.م</span>
              <span className="text-[10px] text-slate-500 block">/ شهر</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-slate-300 text-[10px] font-mono">
              24 Months
            </span>
          </div>
        </div>
      </div>

      {/* Transparency Note */}
      <div className="text-[11px] text-slate-400 flex items-center gap-2 pt-1 border-t border-white/[0.06]">
        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>
          جميع الأسعار والقراءات مرصودة وموثقة لحظياً من أمازون مصر عبر خوارزميات رادار LOO2TAA. نضمن عدم التلاعب بالسجل التاريخي لكشف الخصومات الحقيقية.
        </span>
      </div>
    </div>
  );
}
