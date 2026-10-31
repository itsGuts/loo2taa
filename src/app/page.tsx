"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/lib/loo2taa-data";
import { FilterOptions, Product } from "@/lib/types";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import {
  TrendingDown,
  Sparkles,
  ShieldCheck,
  LineChart,
  Send,
  Zap,
  Gamepad2,
  Cpu,
  Monitor,
  Flame,
  Radio,
  ChevronLeft
} from "lucide-react";

export default function HomePage() {
  const [filters, setFilters] = useState<FilterOptions>({
    sort: "record-low",
  });
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter & sort logic
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

    // Sorting
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
    <div className="space-y-10">
      
      {/* Cyberpunk Egyptian Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#07090e] via-[#0d1527] to-[#12071f] border border-[#00f0ff]/30 p-6 sm:p-10 shadow-2xl">
        
        {/* Holographic background grid lines and glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff007f]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-4 left-6 text-[10px] font-mono text-[#00f0ff]/40 tracking-widest hidden sm:block">
          SYS_STATUS: RADAR_ONLINE // CAIRO_NODE_01
        </div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-xs font-black text-[#00f0ff] shadow-sm shadow-[#00f0ff]/20">
            <Radio className="w-3.5 h-3.5 animate-pulse text-[#00ff9d]" />
            <span>رادار الجيمرز السيبراني الأول في مصر // CAIRO GAMING RADAR</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            لقطة.. اقتنص عتاد الجيمنج والسيت أب <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#00ff9d] to-[#ff007f]">بأرخص سعر حقيقي في مصر</span>
          </h1>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
            نرصد لحظياً أسعار كروت الشاشة، البلايستيشن، شاشات الـ 165Hz، ولابتوبات الألعاب في أمازون مصر ونون. بنكشف الأسعار المنفوخة ونوفرلك سجل الأسعار لآخر 90 يوم مع تقارير أداء ومراجعات شبابية موثوقة.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
            <div className="bg-[#07090e]/80 rounded-2xl p-3.5 border border-[#00f0ff]/30 shadow-md">
              <span className="text-[11px] text-gray-400 block font-medium">عتاد سجل أدنى سعر</span>
              <span className="text-2xl font-black text-[#00f0ff]">١٢ صفقة نارية</span>
            </div>
            <div className="bg-[#07090e]/80 rounded-2xl p-3.5 border border-[#00ff9d]/30 shadow-md">
              <span className="text-[11px] text-gray-400 block font-medium">أعلى توفير مرصود</span>
              <span className="text-2xl font-black text-[#00ff9d]">٨,٥٠٠ ج.م</span>
            </div>
            <div className="hidden sm:block bg-[#07090e]/80 rounded-2xl p-3.5 border border-[#ff007f]/30 shadow-md">
              <span className="text-[11px] text-gray-400 block font-medium">معدل الفحص</span>
              <span className="text-xl font-black text-[#ff007f]">تتبع لحظي 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Filter & Explorer */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-black text-white flex items-center gap-2">
              <Flame className="w-5 h-5 text-[#ff007f] animate-pulse" />
              أقوى صفقات الهاردوير والجيمنج المرصودة حالياً
            </h2>
            <p className="text-xs text-[#94a3b8]">
              منتجات هبطت أسعارها وسجلت مستويات قياسية مقارنة بالشهور السابقة
            </p>
          </div>

          <Link
            href="/catalog"
            className="text-xs font-black text-[#00f0ff] hover:text-white flex items-center gap-1 self-start sm:self-auto transition-colors"
          >
            تصفح كنز الهاردوير بالكامل
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
            <div className="w-12 h-12 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] flex items-center justify-center mx-auto border border-[#00f0ff]/30">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">الرادار لم يعثر على قطع تطابق معاييرك</h3>
            <p className="text-xs text-gray-400 max-w-sm mx-auto">
              جرّب تغيير كلمات البحث أو مسح الفلاتر لاكتشاف صفقات جيمنج أخرى مسجلة لدينا.
            </p>
            <button
              onClick={() => setFilters({ sort: "record-low" })}
              className="mt-2 px-4 py-2 bg-gradient-to-r from-[#00f0ff] to-[#00a3ff] text-[#07090e] text-xs font-black rounded-xl hover:shadow-lg hover:shadow-[#00f0ff]/30"
            >
              إعادة ضبط الرادار
            </button>
          </div>
        ) : (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                : "space-y-4"
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

      {/* Why Egyptian Gamers Trust Loo2taa? */}
      <section className="cyber-card rounded-3xl p-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00ff9d]/10 text-[#00ff9d] text-xs font-bold border border-[#00ff9d]/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            شفافية مطلقة للجيمرز المصريين
          </div>
          <h2 className="text-2xl font-black text-white">
            ليه مجتمع الجيمرز في مصر بيعتمد على «لقطة»؟
          </h2>
          <p className="text-xs text-gray-400">
            وفر فلوسك وابني السيت أب اللي بتحلم بيه بأعلى مواصفات وأقل تكلفة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-[#07090e] rounded-2xl p-5 border border-white/5 space-y-3 text-center sm:text-right hover:border-[#00f0ff]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 text-[#00f0ff] flex items-center justify-center mx-auto sm:mr-0 border border-[#00f0ff]/20">
              <LineChart className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-white">كشف التخفيضات الوهمية</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              بنكشف التجار اللي بيرفعوا سعر كارت الشاشة أو الماوس قبل عروض الجمعة البيضاء عشان يوهموك بخصم كاذب، من خلال رسم بياني حقيقي لآخر ٩٠ يوم.
            </p>
          </div>

          <div className="bg-[#07090e] rounded-2xl p-5 border border-white/5 space-y-3 text-center sm:text-right hover:border-[#ff007f]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#ff007f]/10 text-[#ff007f] flex items-center justify-center mx-auto sm:mr-0 border border-[#ff007f]/20">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-white">تحليل العتاد بالذكاء السيبراني</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              تقييم سريع لملاءمة الهاردوير لظروف الاستخدام وصيف مصر، وقدرة التبريد ونقاط القوة والضعف المستخلصة من آلاف الجيمرز.
            </p>
          </div>

          <div className="bg-[#07090e] rounded-2xl p-5 border border-white/5 space-y-3 text-center sm:text-right hover:border-[#00ff9d]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#00ff9d]/10 text-[#00ff9d] flex items-center justify-center mx-auto sm:mr-0 border border-[#00ff9d]/20">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-white">تنبيهات فورية باللقطة</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              أول ما هيدست أسطورية أو شاشة 165Hz تنزل لسعر تاريخي، رادار لقطة بيبعت إشعار فوري على تليجرام عشان تلحق تطلبها قبل نفاذ الكمية.
            </p>
          </div>
        </div>
      </section>

      {/* Telegram Gamer Squad Banner */}
      <section className="bg-gradient-to-r from-[#0088cc]/30 via-[#07090e] to-[#ff007f]/20 border border-[#0088cc]/40 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-2 text-center md:text-right">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0088cc]/20 text-[#00f0ff] border border-[#0088cc]/40 text-xs font-bold">
            <Send className="w-3.5 h-3.5" />
            مجتمع لقطة على تليجرام // EGYPTIAN GAMERS SQUAD
          </div>
          <h3 className="text-xl sm:text-2xl font-black">
            لا تفوّت دروبات الهاردوير والصفقات الخاطفة!
          </h3>
          <p className="text-xs text-gray-300 max-w-xl leading-relaxed">
            انضم لأكبر تجمع للجيمرز وعشاق البي سي في مصر، وكن أول من يقتنص كروت الشاشة والكونسول بأقل سعر فور إعلانه.
          </p>
        </div>

        <a
          href="https://t.me/loo2taa"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#00f0ff] to-[#0088cc] text-[#07090e] hover:shadow-lg hover:shadow-[#00f0ff]/30 font-black text-xs shrink-0 transition-all active:scale-95 flex items-center gap-2"
        >
          <span>انضم مجاناً لرادار التليجرام</span>
          <Send className="w-4 h-4" />
        </a>
      </section>
    </div>
  );
}
