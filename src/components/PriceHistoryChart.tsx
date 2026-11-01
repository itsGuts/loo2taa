"use client";

import React, { useState, useMemo } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
  ReferenceDot
} from "recharts";
import { PricePoint } from "@/lib/types";
import { TrendingDown, Zap, BarChart3, ShieldCheck, ArrowDown, ArrowUp, Star } from "lucide-react";
import { calculateMedian, calculateAverage } from "@/lib/deal-math";

interface PriceHistoryChartProps {
  history: PricePoint[];
  currentPrice: number;
  referencePrice?: number;
}

type TimeRange = "1M" | "3M" | "6M" | "all";

export default function PriceHistoryChart({
  history,
  currentPrice,
  referencePrice: propRefPrice
}: PriceHistoryChartProps) {
  const [selectedRange, setSelectedRange] = useState<TimeRange>("3M");

  const fullData = useMemo(() => {
    if (!history || history.length === 0) {
      return [{
        date: new Date().toISOString().slice(0, 10),
        price: currentPrice,
        label: "السعر الحالي",
        formattedDate: "اليوم",
        timestamp: Date.now(),
      }];
    }

    return history.map((item) => {
      const dateObj = new Date(item.date);
      return {
        ...item,
        price: Number(item.price),
        timestamp: dateObj.getTime(),
        formattedDate: dateObj.toLocaleDateString("ar-EG", {
          month: "short",
          day: "numeric",
        }),
      };
    }).sort((a, b) => a.timestamp - b.timestamp);
  }, [history, currentPrice]);

  // Filter based on selected time range
  const filteredData = useMemo(() => {
    if (selectedRange === "all" || fullData.length <= 1) return fullData;

    const now = Date.now();
    let daysCutoff = 90;
    if (selectedRange === "1M") daysCutoff = 30;
    if (selectedRange === "3M") daysCutoff = 90;
    if (selectedRange === "6M") daysCutoff = 180;

    const cutoffTimestamp = now - daysCutoff * 24 * 60 * 60 * 1000;
    const filtered = fullData.filter((d) => d.timestamp >= cutoffTimestamp);

    // If filtered window has too few points, take the last N points of fullData
    if (filtered.length < 3) {
      const sliceCount = selectedRange === "1M" ? 5 : selectedRange === "3M" ? 10 : 20;
      return fullData.slice(-Math.min(sliceCount, fullData.length));
    }
    return filtered;
  }, [fullData, selectedRange]);

  const prices = filteredData.map((d) => d.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const avgPrice = calculateAverage(prices);
  const refPrice = propRefPrice || calculateMedian(prices);

  // Find the exact point of record low to place marker
  const recordLowPoint = useMemo(() => {
    return filteredData.find((d) => d.price === minPrice) || filteredData[0];
  }, [filteredData, minPrice]);

  const formattedMin = minPrice.toLocaleString("ar-EG");
  const formattedMax = maxPrice.toLocaleString("ar-EG");
  const formattedAvg = avgPrice.toLocaleString("ar-EG");
  const formattedRef = refPrice.toLocaleString("ar-EG");
  const diffFromAvg = avgPrice - currentPrice;
  const isCurrentRecordLow = currentPrice <= minPrice;

  return (
    <div className="cyber-card rounded-3xl p-5 sm:p-6 space-y-5">
      {/* Header & Range Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/5">
        <div>
          <h3 className="text-base font-black text-white flex items-center gap-2">
            <TrendingDown className="w-4 h-4 text-[#00f0ff]" />
            منحنى رصد الأسعار التفاعلي
          </h3>
          <p className="text-xs text-[#94a3b8] mt-0.5">
            تتبع مسار السعر اليومي ومقارنته بالسعر المرجعي (وسيط 90 يوم) وأقل سعر مسجل
          </p>
        </div>

        {/* 1M / 3M / 6M / ALL Selector */}
        <div className="flex items-center gap-1 bg-[#05070c] p-1 rounded-xl border border-white/5 self-start sm:self-auto text-xs font-bold">
          <button
            onClick={() => setSelectedRange("1M")}
            className={`px-3 py-1 rounded-lg transition-all ${
              selectedRange === "1M"
                ? "bg-[#00f0ff] text-[#05070c] font-black shadow-xs"
                : "text-gray-400 hover:text-white"
            }`}
          >
            شهر (1M)
          </button>
          <button
            onClick={() => setSelectedRange("3M")}
            className={`px-3 py-1 rounded-lg transition-all ${
              selectedRange === "3M"
                ? "bg-[#00f0ff] text-[#05070c] font-black shadow-xs"
                : "text-gray-400 hover:text-white"
            }`}
          >
            ٣ شهور (3M)
          </button>
          <button
            onClick={() => setSelectedRange("6M")}
            className={`px-3 py-1 rounded-lg transition-all ${
              selectedRange === "6M"
                ? "bg-[#00f0ff] text-[#05070c] font-black shadow-xs"
                : "text-gray-400 hover:text-white"
            }`}
          >
            ٦ شهور (6M)
          </button>
          <button
            onClick={() => setSelectedRange("all")}
            className={`px-3 py-1 rounded-lg transition-all ${
              selectedRange === "all"
                ? "bg-[#00f0ff] text-[#05070c] font-black shadow-xs"
                : "text-gray-400 hover:text-white"
            }`}
          >
            الكل (All)
          </button>
        </div>
      </div>

      {/* 4-Card Statistical Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        {/* Record Low */}
        <div className="bg-[#00ff9d]/5 border border-[#00ff9d]/25 rounded-2xl p-3.5 space-y-1">
          <div className="flex items-center justify-between text-[#00ff9d] font-bold text-[11px]">
            <span>أقل سعر تاريخي</span>
            <Zap className="w-3.5 h-3.5" />
          </div>
          <div className="text-xl font-black text-white">
            {formattedMin} <span className="text-xs font-bold text-[#00ff9d]">ج.م</span>
          </div>
          <p className="text-[10px] text-gray-300">
            {isCurrentRecordLow ? "السعر الحالي هو الأرخص على الإطلاق ⚡" : "أدنى قاع رُصد للمنتج"}
          </p>
        </div>

        {/* Reference Price (90d Median) */}
        <div className="bg-[#00f0ff]/5 border border-[#00f0ff]/25 rounded-2xl p-3.5 space-y-1">
          <div className="flex items-center justify-between text-[#00f0ff] font-bold text-[11px]">
            <span>السعر المرجعي (وسيط السوق)</span>
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
          <div className="text-xl font-black text-white">
            {formattedRef} <span className="text-xs font-bold text-[#00f0ff]">ج.م</span>
          </div>
          <p className="text-[10px] text-gray-300">
            الوسيط الحقيقي لكشف الخصم الوهمي
          </p>
        </div>

        {/* Rolling Average */}
        <div className="bg-[#ffb703]/5 border border-[#ffb703]/25 rounded-2xl p-3.5 space-y-1">
          <div className="flex items-center justify-between text-[#ffb703] font-bold text-[11px]">
            <span>متوسط السعر</span>
            <BarChart3 className="w-3.5 h-3.5" />
          </div>
          <div className="text-xl font-black text-white">
            {formattedAvg} <span className="text-xs font-bold text-[#ffb703]">ج.م</span>
          </div>
          <p className="text-[10px] text-gray-300">
            {diffFromAvg > 0 ? (
              <span className="text-[#00ff9d]">أرخص بـ {diffFromAvg.toLocaleString("ar-EG")} ج.م من المتوسط!</span>
            ) : (
              <span>السعر حول المتوسط المعتاد</span>
            )}
          </p>
        </div>

        {/* Peak High */}
        <div className="bg-[#ff007f]/5 border border-[#ff007f]/25 rounded-2xl p-3.5 space-y-1">
          <div className="flex items-center justify-between text-[#ff007f] font-bold text-[11px]">
            <span>أعلى سعر مسجل</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </div>
          <div className="text-xl font-black text-white">
            {formattedMax} <span className="text-xs font-bold text-[#ff007f]">ج.م</span>
          </div>
          <p className="text-[10px] text-gray-400">
            سعر الذروة قبل بدء التخفيضات
          </p>
        </div>
      </div>

      {/* Recharts Area Chart */}
      <div className="h-72 w-full pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={filteredData} margin={{ top: 15, right: 10, left: 10, bottom: 5 }}>
            <defs>
              <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#00f0ff" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
            <XAxis
              dataKey="formattedDate"
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              axisLine={{ stroke: "rgba(255,255,255,0.08)" }}
              tickLine={false}
            />
            <YAxis
              domain={[Math.floor(minPrice * 0.90), Math.ceil(maxPrice * 1.10)]}
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
              orientation="right"
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const item = payload[0].payload;
                  const isLowest = item.price === minPrice;
                  return (
                    <div className="bg-[#05070c] border border-white/10 text-white p-3 rounded-2xl shadow-2xl text-xs space-y-1 min-w-[150px]">
                      <div className="text-gray-400 text-[10px] font-mono">{item.date}</div>
                      <div className="text-base font-black text-[#00f0ff]">
                        {item.price.toLocaleString("ar-EG")} ج.م
                      </div>
                      {isLowest && (
                        <div className="text-[10px] font-bold text-[#00ff9d] flex items-center gap-1">
                          <Zap className="w-2.5 h-2.5" />
                          <span>أقل سعر تاريخي مرصود! ⚡</span>
                        </div>
                      )}
                      {item.label && <div className="text-[10px] text-gray-300">{item.label}</div>}
                    </div>
                  );
                }
                return null;
              }}
            />

            {/* Reference Line: Min Price (Record Low) */}
            <ReferenceLine
              y={minPrice}
              stroke="#00ff9d"
              strokeDasharray="4 4"
              strokeWidth={1.5}
            />

            {/* Reference Line: Reference Price (90d Median) */}
            <ReferenceLine
              y={refPrice}
              stroke="#00f0ff"
              strokeDasharray="3 3"
              strokeWidth={1.5}
            />

            {/* Reference Line: Average Price */}
            <ReferenceLine
              y={avgPrice}
              stroke="#ffb703"
              strokeDasharray="2 2"
              strokeWidth={1.2}
            />

            {/* Reference Line: Peak Max Price */}
            <ReferenceLine
              y={maxPrice}
              stroke="#ff007f"
              strokeDasharray="4 4"
              strokeWidth={1}
            />

            {/* Record Low Marker Dot */}
            {recordLowPoint && (
              <ReferenceDot
                x={recordLowPoint.formattedDate}
                y={recordLowPoint.price}
                r={6}
                fill="#00ff9d"
                stroke="#05070c"
                strokeWidth={2}
              />
            )}

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

      {/* Chart Legend with Color Swatches */}
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-gray-400 pt-2 border-t border-white/5">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-1 bg-[#00f0ff] rounded" />
          <span>مسار السعر</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-0.5 bg-[#00ff9d] border-b border-dashed border-[#00ff9d]" />
          <span>أقل سعر (Record Low: {formattedMin} ج.م)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-0.5 bg-[#00f0ff] border-b border-dashed border-[#00f0ff]" />
          <span>السعر المرجعي (الوسيط: {formattedRef} ج.م)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-0.5 bg-[#ffb703] border-b border-dashed border-[#ffb703]" />
          <span>المتوسط ({formattedAvg} ج.م)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-0.5 bg-[#ff007f] border-b border-dashed border-[#ff007f]" />
          <span>الذروة ({formattedMax} ج.م)</span>
        </div>
      </div>
    </div>
  );
}
