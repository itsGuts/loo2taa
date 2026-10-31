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
import { TrendingDown, Crosshair, ShieldAlert, Zap } from "lucide-react";

interface PriceHistoryChartProps {
  history: PricePoint[];
  currentPrice: number;
}

export default function PriceHistoryChart({ history, currentPrice }: PriceHistoryChartProps) {
  const [selectedRange, setSelectedRange] = useState<"30" | "60" | "90">("90");

  if (!history || history.length === 0) {
    return (
      <div className="p-8 text-center bg-[#0d121f] rounded-2xl border border-white/10 text-sm text-gray-400">
        الرادار لا يمتلك بيانات أسعار كافية لهذا العتاد حالياً.
      </div>
    );
  }

  const data = history.map(item => ({
    ...item,
    formattedDate: new Date(item.date).toLocaleDateString("ar-EG", {
      month: "short",
      day: "numeric",
    }),
  }));

  const prices = data.map(d => d.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const formattedMin = minPrice.toLocaleString("ar-EG");
  const formattedMax = maxPrice.toLocaleString("ar-EG");

  return (
    <div className="cyber-card rounded-3xl p-6 space-y-6">
      
      {/* Chart Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <h3 className="text-lg font-black text-white flex items-center gap-2">
            <Crosshair className="w-5 h-5 text-[#00f0ff] animate-pulse" />
            رادار مسار السعر التاريخي
          </h3>
          <p className="text-xs text-[#94a3b8]">
            تتبع حركات السعر الفورية في السوق المصري لمنع عروض الفيك والأسعار المنفوخة
          </p>
        </div>

        {/* Range Buttons */}
        <div className="flex items-center gap-1.5 bg-[#07090e] p-1 rounded-xl border border-white/10 self-start sm:self-auto">
          <button
            onClick={() => setSelectedRange("30")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              selectedRange === "30"
                ? "bg-[#00f0ff] text-[#07090e] shadow-md shadow-[#00f0ff]/30"
                : "text-gray-400 hover:text-white"
            }`}
          >
            آخر ٣٠ يوم
          </button>
          <button
            onClick={() => setSelectedRange("60")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              selectedRange === "60"
                ? "bg-[#00f0ff] text-[#07090e] shadow-md shadow-[#00f0ff]/30"
                : "text-gray-400 hover:text-white"
            }`}
          >
            آخر ٦٠ يوم
          </button>
          <button
            onClick={() => setSelectedRange("90")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              selectedRange === "90"
                ? "bg-[#00f0ff] text-[#07090e] shadow-md shadow-[#00f0ff]/30"
                : "text-gray-400 hover:text-white"
            }`}
          >
            آخر ٩٠ يوم
          </button>
        </div>
      </div>

      {/* Min / Max Summary Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#00ff9d]/10 border border-[#00ff9d]/30 rounded-2xl p-4">
          <span className="text-xs text-[#00ff9d] font-bold block mb-1">
            أدنى قاع رصده الرادار
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-black text-white">{formattedMin}</span>
            <span className="text-xs font-bold text-[#00ff9d]">ج.م</span>
          </div>
          <span className="text-[11px] text-[#00ff9d] font-medium flex items-center gap-1 mt-1">
            <Zap className="w-3 h-3" />
            {minPrice === currentPrice ? "السعر الحالي هو الأرخص تاريخياً ⚡" : "أقل سعر موثق"}
          </span>
        </div>

        <div className="bg-[#ff007f]/10 border border-[#ff007f]/30 rounded-2xl p-4">
          <span className="text-xs text-[#ff007f] font-bold block mb-1">
            أعلى سعر مرصود للمنتج
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-black text-white">{formattedMax}</span>
            <span className="text-xs font-bold text-[#ff007f]">ج.م</span>
          </div>
          <span className="text-[11px] text-[#ff007f] font-medium block mt-1">
            قمة السعر قبل عاصفة الخصم
          </span>
        </div>
      </div>

      {/* Recharts Area Chart */}
      <div className="h-64 w-full pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="cyberGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#00f0ff" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis
              dataKey="formattedDate"
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
              tickLine={false}
            />
            <YAxis
              domain={[Math.floor(minPrice * 0.95), Math.ceil(maxPrice * 1.05)]}
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
                  return (
                    <div className="bg-[#07090e] border border-[#00f0ff]/50 text-white p-3 rounded-xl shadow-2xl text-xs space-y-1">
                      <div className="font-bold text-gray-400">{item.date}</div>
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
            <ReferenceLine
              y={minPrice}
              stroke="#00ff9d"
              strokeDasharray="4 4"
              label={{
                value: "اللقطة // أدنى سعر",
                fill: "#00ff9d",
                fontSize: 10,
                position: "insideBottomRight",
              }}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#00f0ff"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#cyberGradient)"
              activeDot={{ r: 6, fill: "#00f0ff", stroke: "#07090e", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Accuracy Disclaimer */}
      <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#07090e] border border-white/5 text-[11px] text-[#94a3b8]">
        <ShieldAlert className="w-4 h-4 text-[#ffb800] shrink-0" />
        <span>
          رادار لقطة السيبراني يحلل قراءات المتاجر الرسمية والتجار المعتمدين في مصر لضمان صحة التخفيض وعدم التلاعب بالأسعار قبل المواسم.
        </span>
      </div>
    </div>
  );
}
