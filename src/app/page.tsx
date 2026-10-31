"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/lib/loo2taa-data";
import { FilterOptions } from "@/lib/types";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import {
  TrendingDown,
  LineChart,
  Send,
  Zap,
  Gamepad2,
  Cpu,
  Flame,
  ChevronLeft
} from "lucide-react";

export default function HomePage() {
  const [filters, setFilters] = useState<FilterOptions>({
    sort: "record-low",
  });
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

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

    if (filters.marketplace && filters.marketplace !== "all") {
      list = list.filter((p) => p.marketplace === filters.marketplace);
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

  return (
    <div className="space-y-8">
      
      {/* Clean Cyberpunk Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c1222] via-[#070b16] to-[#12071f] border border-white/10 p-6 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#00f0ff]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ff007f]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs font-bold text-[#00f0ff]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse" />
            <span>رادار صفقات الألعاب والبي سي في مصر</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            لقطة.. عتاد الجيمنج والسيت أب <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#00a3ff]">بأقل سعر حقيقي</span>
          </h1>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            بنرصد أسعار كروت الشاشة، البلايستيشن، شاشات الـ 165Hz، وسماعات الألعاب على أمازون ونون. بنكشف الخصومات الوهمية ونعرضلك سجل السعر لآخر 90 يوم.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2.5 pt-2">
            <div className="bg-[#05070c]/70 rounded-2xl p-3 border border-white/5">
              <span className="text-[10px] text-gray-400 block font-medium">صفقات موثقة اليوم</span>
              <span className="text-xl sm:text-2xl font-black text-[#00f0ff]">١٢ صفقة</span>
            </div>
            <div className="bg-[#05070c]/70 rounded-2xl p-3 border border-white/5">
              <span className="text-[10px] text-gray-400 block font-medium">أعلى توفير</span>
              <span className="text-xl sm:text-2xl font-black text-[#00ff9d]">٨,٥٠٠ ج.م</span>
            </div>
            <div className="bg-[#05070c]/70 rounded-2xl p-3 border border-white/5">
              <span className="text-[10px] text-gray-400 block font-medium">تحديث السعر</span>
              <span className="text-lg sm:text-xl font-black text-white">يومي فوري</span>
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
              أقوى صفقات الهاردوير المسجلة
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
            <h3 className="text-sm font-bold text-white">لم يتم العثور على قطع تطابق بحثك</h3>
            <p className="text-xs text-gray-400 max-w-sm mx-auto">
              جرّب تغيير كلمات البحث أو إعادة ضبط الفلاتر لتصفح باقي الصفقات.
            </p>
            <button
              onClick={() => setFilters({ sort: "record-low" })}
              className="mt-2 px-4 py-2 btn-cyber-primary text-xs rounded-xl"
            >
              إعادة ضبط الفلاتر
            </button>
          </div>
        ) : (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                : "space-y-3"
            }
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                viewMode={viewMode}
              />
            ))}
          </div>
        )}
      </section>

      {/* Feature Highlights */}
      <section className="cyber-card rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-1.5">
          <h2 className="text-xl sm:text-2xl font-black text-white">
            ليه تشتري عن طريق لقطة؟
          </h2>
          <p className="text-xs text-gray-400">
            تسوّق بذكاء وتجنب العروض الوهمية في مواسم التخفيضات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          <div className="bg-[#05070c] rounded-2xl p-4 border border-white/5 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-[#00f0ff]/10 text-[#00f0ff] flex items-center justify-center border border-[#00f0ff]/20">
              <LineChart className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-sm text-white">سجل أسعار لآخر 90 يوم</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              شاهد بنفسك هل السعر منخفض حقيقةً أم تم رفعه قبل العرض لادعاء وجود خصم.
            </p>
          </div>

          <div className="bg-[#05070c] rounded-2xl p-4 border border-white/5 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-[#ff007f]/10 text-[#ff007f] flex items-center justify-center border border-[#ff007f]/20">
              <Cpu className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-sm text-white">تقييم عتاد الجيمنج</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              ملخص لأداء الـ FPS، كفاءة التبريد في الصيف، وتجارب اللاعبين الحقيقية.
            </p>
          </div>

          <div className="bg-[#05070c] rounded-2xl p-4 border border-white/5 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-[#00ff9d]/10 text-[#00ff9d] flex items-center justify-center border border-[#00ff9d]/20">
              <Zap className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-sm text-white">تنبيه فوري عند أدنى سعر</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              إشعارات لحظية عبر قناة التليجرام بمجرد تسجيل أي قطعة لأقل سعر في تاريخها.
            </p>
          </div>
        </div>
      </section>

      {/* Telegram Banner */}
      <section className="bg-gradient-to-r from-[#0088cc]/25 via-[#070b16] to-[#00f0ff]/15 border border-[#0088cc]/30 rounded-3xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="space-y-1.5 text-center md:text-right">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0088cc]/20 text-[#00f0ff] text-[11px] font-bold">
            <Send className="w-3 h-3" />
            قناة لقطة على تليجرام
          </div>
          <h3 className="text-lg sm:text-xl font-black">
            لا تفوّت دروبات الأسعار اللحظية في مصر
          </h3>
          <p className="text-xs text-gray-300">
            انضم لمجتمع الجيمرز وكن أول من يعرف بأقوى نزول في أسعار الهاردوير والكونسول.
          </p>
        </div>

        <a
          href="https://t.me/loo2taa"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cyber-primary px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 shrink-0"
        >
          <span>انضم مجاناً للقناة</span>
          <Send className="w-3.5 h-3.5" />
        </a>
      </section>
    </div>
  );
}
