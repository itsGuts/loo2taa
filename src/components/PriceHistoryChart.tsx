"use client";

import React, { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine
} from "recharts";
import { PricePoint } from "@/lib/types";
import { TrendingDown, Zap, BarChart3, ShieldCheck } from "lucide-react";

interface PriceHistoryChartProps {
  history: PricePoint[];
  currentPrice: number;
}

export default function PriceHistoryChart({ history, currentPrice }: PriceHistoryChartProps) {
  const [selectedRange, setSelectedRange] = useState<"30" | "60" | "90">("90");

  if (!history || history.length === 0) {
    return (
      <div className="p-8 text-center bg-[#070a12] rounded-2xl border border-white/5 text-xs text-gray-400">
        لا تتوفر قراءات تاريخية كافية لهذا المنتج حالياً.
      </div>
    );
  }

  const data = history.map((item) => ({
    ...item,
    formattedDate: new Date(item.date).toLocaleDateString("ar-EG", {
      month: "short",
      day: "numeric",
    }),
  }));

  const prices = data.map((d) => d.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const avgPrice = Math.round(prices.reduce((sum, p) => sum + p, 0) / prices.length);

  const formattedMin = minPrice.toLocaleString("ar-EG");
  const formattedMax = maxPrice.toLocaleString("ar-EG");
  const formattedAvg = avgPrice.toLocaleString("ar-EG");
  const diffFromAvg = avgPrice - currentPrice;

  return (
    <div className="cyber-card rounded-3xl p-6 space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/5">
        <div>
          <h3 className="text-base font-black text-white flex items-center gap-2">
            <TrendingDown className="w-4 h-4 text-[#00f0ff]" />
            سجل السعر التاريخي الموثق
          </h3>
          <p className="text-xs text-[#94a3b8]">
            رادار أسعار أمازون مصر بالجنيه لآخر ٩٠ يوماً (كشف الخصم الحقيقي)
          </p>
        </div>

        {/* Range Buttons */}
        <div className="flex items-center gap-1 bg-[#05070c] p-1 rounded-xl border border-white/5 self-start sm:self-auto">
          <button
            onClick={() => setSelectedRange("30")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              selectedRange === "30"
                ? "bg-[#00f0ff] text-[#05070c] font-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            آخر ٣٠ يوم
          </button>
          <button
            onClick={() => setSelectedRange("60")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              selectedRange === "60"
                ? "bg-[#00f0ff] text-[#05070c] font-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            آخر ٦٠ يوم
          </button>
          <button
            onClick={() => setSelectedRange("90")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              selectedRange === "90"
                ? "bg-[#00f0ff] text-[#05070c] font-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            آخر ٩٠ يوم
          </button>
        </div>
      </div>

      {/* 3-Column Statistical Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* All-time Low */}
        <div className="bg-[#00ff9d]/5 border border-[#00ff9d]/20 rounded-2xl p-3.5">
          <span className="text-[11px] text-[#00ff9d] font-bold block mb-1">
            أقل سعر مرصود
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl sm:text-2xl font-black text-white">{formattedMin}</span>
            <span className="text-xs font-bold text-[#00ff9d]">ج.م</span>
          </div>
          <span className="text-[10px] text-[#00ff9d] font-medium flex items-center gap-1 mt-1">
            <Zap className="w-2.5 h-2.5" />
            {minPrice === currentPrice ? "السعر الحالي هو الأرخص تاريخياً ⚡" : "أقل نقطة مسجلة"}
          </span>
        </div>

        {/* 90-Day Rolling Average */}
        <div className="bg-[#ffb703]/5 border border-[#ffb703]/20 rounded-2xl p-3.5">
          <span className="text-[11px] text-[#ffb703] font-bold block mb-1">
            متوسط آخر ٩٠ يوم
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl sm:text-2xl font-black text-white">{formattedAvg}</span>
            <span className="text-xs font-bold text-[#ffb703]">ج.م</span>
          </div>
          <span className="text-[10px] text-gray-300 font-medium flex items-center gap-1 mt-1">
            <BarChart3 className="w-2.5 h-2.5 text-[#ffb703]" />
            {diffFromAvg > 0 ? (
              <span className="text-[#00ff9d]">أرخص بـ {diffFromAvg.toLocaleString("ar-EG")} ج.م من المتوسط!</span>
            ) : (
              <span>قريب من المعدل الطبيعي</span>
            )}
          </span>
        </div>

        {/* Peak Price */}
        <div className="bg-[#ff007f]/5 border border-[#ff007f]/20 rounded-2xl p-3.5">
          <span className="text-[11px] text-[#ff007f] font-bold block mb-1">
            أعلى سعر مرصود
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl sm:text-2xl font-black text-white">{formattedMax}</span>
            <span className="text-xs font-bold text-[#ff007f]">ج.م</span>
          </div>
          <span className="text-[10px] text-gray-400 block mt-1">
            سعر الذروة قبل النزول
          </span>
        </div>
      </div>

      {/* Recharts Area Chart */}
      <div className="h-64 w-full pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#00f0ff" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
            <XAxis
              dataKey="formattedDate"
              tick={{ fontSize: 11, fill: "#64748b" }}
              axisLine={{ stroke: "rgba(255,255,255,0.05)" }}
              tickLine={false}
            />
            <YAxis
              domain={[Math.floor(minPrice * 0.92), Math.ceil(maxPrice * 1.08)]}
              tick={{ fontSize: 11, fill: "#64748b" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
              orientation="right"
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const item = payload[0].payload;
                  return (
                    <div className="bg-[#05070c] border border-white/10 text-white p-2.5 rounded-xl shadow-xl text-xs space-y-0.5">
                      <div className="text-gray-400 text-[10px]">{item.date}</div>
                      <div className="text-sm font-black text-[#00f0ff]">
                        {item.price.toLocaleString("ar-EG")} ج.م
                      </div>
                      <div className="text-[10px] text-[#00ff9d]">{item.label}</div>
                    </div>
                  );
                }
                return null;
              }}
            />
            {/* Reference Line: All-Time Low */}
            <ReferenceLine
              y={minPrice}
              stroke="#00ff9d"
              strokeDasharray="4 4"
              strokeWidth={1.5}
            />
            {/* Reference Line: 90-Day Rolling Average */}
            <ReferenceLine
              y={avgPrice}
              stroke="#ffb703"
              strokeDasharray="3 3"
              strokeWidth={1.5}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#00f0ff"
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#chartGlow)"
              activeDot={{ r: 5, fill: "#00f0ff", stroke: "#05070c", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Chart Legend */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-gray-400 pt-2 border-t border-white/5">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-0.5 bg-[#00f0ff] rounded" />
          <span>مسار السعر اليومي</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-0.5 bg-[#00ff9d] border-b border-dashed border-[#00ff9d]" />
          <span>أقل سعر تاريخي (All-Time Low)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-0.5 bg-[#ffb703] border-b border-dashed border-[#ffb703]" />
          <span>متوسط الـ 90 يوماً</span>
        </div>
      </div>
    </div>
  );
}
