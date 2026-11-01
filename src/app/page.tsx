"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/lib/loo2taa-data";
import { FilterOptions } from "@/lib/types";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import {
  TrendingDown,
  Zap,
  Gamepad2,
  Flame,
  ChevronLeft,
  Mic,
  Headphones,
  Keyboard,
  Sparkles,
  Monitor,
  Cpu
} from "lucide-react";

export default function HomePage() {
  const [filters, setFilters] = useState<FilterOptions>({
    sort: "record-low",
  });
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = useMemo(() => {
    let list = PRODUCTS.filter((p) => p.in_stock !== false && p.is_deal_active !== false);

    if (filters.query) {
      const q = filters.query.toLowerCase();
      list = list.filter(
        (p) =>
          p.display_title.toLowerCase().includes(q) ||
          p.title.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category_ar.toLowerCase().includes(q)
      );
    }

    if (filters.category && filters.category !== "all") {
      list = list.filter((p) => p.category === filters.category);
    }

    if (filters.brand) {
      list = list.filter((p) => p.brand.toLowerCase() === filters.brand!.toLowerCase());
    }

    if (filters.minPrice !== undefined) {
      list = list.filter((p) => p.price >= filters.minPrice!);
    }

    if (filters.maxPrice !== undefined) {
      list = list.filter((p) => p.price <= filters.maxPrice!);
    }

    switch (filters.sort) {
      case "price-changed":
        list.sort((a, b) => new Date(b.price_checked_at).getTime() - new Date(a.price_checked_at).getTime());
        break;
      case "discount-desc":
        list.sort((a, b) => b.discount_percent - a.discount_percent);
        break;
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "record-low":
      default:
        list.sort((a, b) => (b.is_record_low ? 1 : 0) - (a.is_record_low ? 1 : 0) || b.discount_percent - a.discount_percent);
        break;
    }

    return list;
  }, [filters]);

  // Dynamic metrics
  const activeProducts = PRODUCTS.filter(p => p.in_stock !== false);
  const totalDeals = activeProducts.length;
  const maxSavings = Math.max(...activeProducts.map(p => p.savings), 0);
  const recordLowCount = activeProducts.filter(p => p.is_record_low).length;

  return (
    <div className="space-y-6">
      
      {/* Modern Discord-Centric Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a0f1d] via-[#070a14] to-[#140824] border border-white/[0.08] p-6 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#5865F2]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5865F2]/15 border border-[#5865F2]/40 text-xs font-bold text-[#8ea1ff]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse" />
            <span>رادار صفقات مجتمع الديسكورد والجيمنج في مصر</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            <span className="font-mono text-[#00f0ff]">LO2TAA</span> // عتاد الديسكورد والسيت أب <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#5865F2] to-[#ff007f]">بأقل سعر حقيقي</span>
          </h1>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
            مايكات ستريم، سماعات وايرلس مريحة، كيبوردات ميكانيكال، إضاءة وديكور سيت أب، شاشات 165Hz، وتجميعات البي سي على أمازون مصر. بنكشف الخصم الوهمي ونعرضلك سجل السعر التاريخي لحظة بلحظة.
          </p>

          {/* Quick Category Jump Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-bold">
            <button
              onClick={() => setFilters({ category: 'streaming-voice' })}
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 border border-white/5 flex items-center gap-1.5 transition-colors"
            >
              <Mic className="w-3.5 h-3.5 text-[#00f0ff]" />
              مايكات ستريم
            </button>
            <button
              onClick={() => setFilters({ category: 'headsets' })}
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 border border-white/5 flex items-center gap-1.5 transition-colors"
            >
              <Headphones className="w-3.5 h-3.5 text-[#ff007f]" />
              سماعات ديسكورد
            </button>
            <button
              onClick={() => setFilters({ category: 'keyboards-mice' })}
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 border border-white/5 flex items-center gap-1.5 transition-colors"
            >
              <Keyboard className="w-3.5 h-3.5 text-[#00ff9d]" />
              كيبوردات ميكانيكال
            </button>
            <button
              onClick={() => setFilters({ category: 'setup-aesthetic' })}
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 border border-white/5 flex items-center gap-1.5 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#ffd600]" />
              سيت أب وديكور
            </button>
          </div>

          {/* Clean Metric Counters */}
          <div className="grid grid-cols-3 gap-3 pt-3">
            <div className="bg-[#05070c]/80 rounded-2xl p-3 border border-white/5">
              <span className="text-[10px] text-gray-400 block font-medium">صفقات نشطة الآن</span>
              <span className="text-xl sm:text-2xl font-black text-[#00f0ff]">{totalDeals} لقطة</span>
            </div>
            <div className="bg-[#05070c]/80 rounded-2xl p-3 border border-white/5">
              <span className="text-[10px] text-gray-400 block font-medium">أعلى توفير مرصود</span>
              <span className="text-xl sm:text-2xl font-black text-[#00ff9d]">{maxSavings.toLocaleString("ar-EG")} ج.م</span>
            </div>
            <div className="bg-[#05070c]/80 rounded-2xl p-3 border border-white/5">
              <span className="text-[10px] text-gray-400 block font-medium">أقل سعر قياسي</span>
              <span className="text-lg sm:text-xl font-black text-white">{recordLowCount} منتج ⚡</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Filter & Explorer */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-[#ff007f]" />
            <h2 className="text-lg sm:text-xl font-black text-white">
              أقوى صفقات اليوم الحية
            </h2>
          </div>

          <Link
            href="/catalog"
            className="text-xs font-bold text-[#00f0ff] hover:underline flex items-center gap-0.5"
          >
            عرض الكل
            <ChevronLeft className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter Controls Bar */}
        <FilterBar
          filters={filters}
          onFilterChange={setFilters}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          totalResults={filteredProducts.length}
        />

        {/* Products Grid / List */}
        {filteredProducts.length === 0 ? (
          <div className="cyber-card rounded-3xl p-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] flex items-center justify-center mx-auto border border-[#00f0ff]/20">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">لا توجد عروض مطابقة للفلاتر الحالية</h3>
            <p className="text-xs text-gray-400 max-w-sm mx-auto">
              جرب تغيير خيارات التصفية أو إلغاء تحديد بعض الفئات للبحث في بقية العتاد.
            </p>
            <button
              onClick={() => setFilters({ sort: "record-low" })}
              className="px-4 py-2 rounded-xl bg-[#00f0ff] text-[#05070c] font-black text-xs hover:shadow-lg hover:shadow-[#00f0ff]/30 transition-all"
            >
              عرض كل العتاد
            </button>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} viewMode="grid" />
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} viewMode="list" />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
