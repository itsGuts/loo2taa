"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PRODUCTS } from "@/lib/loo2taa-data";
import { FilterOptions } from "@/lib/types";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import DealInspector from "@/components/DealInspector";
import {
  TrendingDown,
  Zap,
  Gamepad2,
  Flame,
  ChevronLeft,
  ChevronRight,
  Mic,
  Headphones,
  Keyboard,
  Sparkles,
  Monitor,
  Cpu,
  Laptop,
  Store,
  ArrowUpDown,
  Home,
  Wrench,
  Activity,
  Layers
} from "lucide-react";

const PAGE_SIZE = 24;

function matchesCategory(prodCategory: string, filterCat?: string): boolean {
  if (!filterCat || filterCat === "all") return true;
  if (prodCategory === filterCat) return true;
  if (filterCat === "mobile-phones") {
    return ["mobile-phones", "phone-accessories"].includes(prodCategory);
  }
  if (filterCat === "pc-hardware") {
    return ["pc-hardware", "gaming_pc"].includes(prodCategory);
  }
  if (filterCat === "electronics") {
    return ["electronics", "smart-tv", "monitors"].includes(prodCategory);
  }
  if (filterCat === "home-kitchen" || filterCat === "home_kitchen") {
    return ["home-kitchen", "home_kitchen"].includes(prodCategory);
  }
  if (filterCat === "tools-automotive" || filterCat === "tools_auto") {
    return ["tools-automotive", "tools_auto", "tools", "auto"].includes(prodCategory);
  }
  if (filterCat === "fashion") {
    return ["fashion", "apparel"].includes(prodCategory);
  }
  return false;
}

function HomePageContent() {
  const searchParams = useSearchParams();

  // Read initial filter state from URL query parameters (Shareable URLs)
  const initialQuery = searchParams.get("q") || undefined;
  const initialCategory = searchParams.get("category") || undefined;
  const initialBrand = searchParams.get("brand") || undefined;
  const initialMarketplace = searchParams.get("store") || undefined;
  const initialSort = searchParams.get("sort") || "record-low";
  const initialMinDiscount = searchParams.get("min_discount") ? Number(searchParams.get("min_discount")) : undefined;
  const initialMinPrice = searchParams.get("min_price") ? Number(searchParams.get("min_price")) : undefined;
  const initialMaxPrice = searchParams.get("max_price") ? Number(searchParams.get("max_price")) : undefined;
  const initialInStock = searchParams.get("in_stock") === "true";
  const initialPage = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  const [filters, setFilters] = useState<FilterOptions>({
    query: initialQuery,
    category: initialCategory,
    brand: initialBrand,
    marketplace: initialMarketplace,
    sort: initialSort,
    minDiscount: initialMinDiscount,
    minPrice: initialMinPrice,
    maxPrice: initialMaxPrice,
    inStockOnly: initialInStock,
    page: initialPage,
  });

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Sync state to URL for shareable URLs (?sort=record-low&category=pc-hardware)
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.sort && filters.sort !== "record-low") params.set("sort", filters.sort);
    if (filters.category && filters.category !== "all") params.set("category", filters.category);
    if (filters.query) params.set("q", filters.query);
    if (filters.brand) params.set("brand", filters.brand);
    if (filters.marketplace && filters.marketplace !== "all") params.set("store", filters.marketplace);
    if (filters.minDiscount) params.set("min_discount", String(filters.minDiscount));
    if (filters.minPrice) params.set("min_price", String(filters.minPrice));
    if (filters.maxPrice) params.set("max_price", String(filters.maxPrice));
    if (filters.inStockOnly) params.set("in_stock", "true");
    if (filters.page && filters.page > 1) params.set("page", String(filters.page));

    const newUrl = params.toString() ? `?${params.toString()}` : window.location.pathname;
    window.history.replaceState(null, "", newUrl);
  }, [filters]);

  const filteredProducts = useMemo(() => {
    let list = PRODUCTS.filter((p) => p.is_deal_active !== false);

    // In-stock only filter
    if (filters.inStockOnly) {
      list = list.filter((p) => p.in_stock !== false);
    }

    // Text Search
    if (filters.query) {
      const q = filters.query.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.display_title.toLowerCase().includes(q) ||
          p.title.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category_ar.toLowerCase().includes(q) ||
          p.asin.toLowerCase().includes(q)
      );
    }

    // Marketplace / Store
    if (filters.marketplace && filters.marketplace !== "all") {
      list = list.filter((p) => p.marketplace === filters.marketplace);
    }

    // Category with broad taxonomy support
    if (filters.category && filters.category !== "all") {
      list = list.filter((p) => matchesCategory(p.category, filters.category));
    }

    // Brand
    if (filters.brand) {
      list = list.filter((p) => p.brand.toLowerCase() === filters.brand!.toLowerCase());
    }

    // Min Discount %
    if (filters.minDiscount !== undefined && filters.minDiscount > 0) {
      list = list.filter((p) => p.discount_percent >= filters.minDiscount!);
    }

    // Price range
    if (filters.minPrice !== undefined) {
      list = list.filter((p) => p.price >= filters.minPrice!);
    }

    if (filters.maxPrice !== undefined) {
      list = list.filter((p) => p.price <= filters.maxPrice!);
    }

    // Six Sort options
    switch (filters.sort) {
      case "discount-desc":
        list.sort((a, b) => b.discount_percent - a.discount_percent);
        break;

      case "newest-drop":
        list.sort((a, b) => {
          const aDown = a.price_change_direction === "down" ? 1 : 0;
          const bDown = b.price_change_direction === "down" ? 1 : 0;
          if (bDown !== aDown) return bDown - aDown;
          return new Date(b.price_checked_at).getTime() - new Date(a.price_checked_at).getTime();
        });
        break;

      case "biggest-rise":
        list.sort((a, b) => {
          const aDiff = a.price - (a.reference_price || a.price);
          const bDiff = b.price - (b.reference_price || b.price);
          return bDiff - aDiff;
        });
        break;

      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;

      case "most-tracked":
        list.sort((a, b) => (b.points_count || 12) * (b.review_count || 100) - (a.points_count || 12) * (a.review_count || 100));
        break;

      case "record-low":
      default:
        list.sort((a, b) => (b.is_record_low ? 1 : 0) - (a.is_record_low ? 1 : 0) || b.discount_percent - a.discount_percent);
        break;
    }

    return list;
  }, [filters]);

  // Pagination calculations
  const currentPage = filters.page || 1;
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredProducts.slice(start, start + PAGE_SIZE);
  }, [filteredProducts, currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setFilters({ ...filters, page: newPage });
    window.scrollTo({ top: 750, behavior: "smooth" });
  };

  // Dynamic metrics
  const activeProducts = PRODUCTS.filter((p) => p.in_stock !== false);
  const totalDeals = activeProducts.length;
  const maxSavings = Math.max(...activeProducts.map((p) => p.savings), 0);
  const recordLowCount = activeProducts.filter((p) => p.is_record_low).length;

  return (
    <div className="space-y-6">
      {/* White Friday November 2026 Radar Alert Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#ff007f]/20 via-[#ff9900]/25 to-[#00f0ff]/20 border border-[#ff9900]/40 p-3.5 sm:p-4.5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#ff9900]/20 border border-[#ff9900]/50 flex items-center justify-center text-[#ff9900] shrink-0 shadow-[0_0_15px_rgba(255,153,0,0.3)]">
            <Flame className="w-5 h-5 animate-pulse" />
          </div>
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-black text-white">رادار عروض وتخفيضات نوفمبر 2026 ⚡</span>
              <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-[#ff007f] text-white shadow-sm font-sans">White Friday Live</span>
            </div>
            <p className="text-[11px] text-gray-300 leading-relaxed">
              تنبيه حماية المشترين: مع بداية نوفمبر، يلجأ بعض التجار لرفع الأسعار قبل التخفيضات لخلق خصم وهمي. خوارزمية لُقطة تكشف السعر الحقيقي فوراً وتقارن مع متوسط الـ 90 يوماً والقاع التاريخي على أمازون مصر.
            </p>
          </div>
        </div>
        <button
          onClick={() => setFilters({ ...filters, sort: "discount-desc", page: 1 })}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#ff9900] to-[#ffaa00] hover:from-[#ffaa00] hover:to-[#ffbb00] text-black text-xs font-black shrink-0 transition-transform active:scale-95 flex items-center gap-1.5 shadow-lg shadow-[#ff9900]/20 font-sans"
        >
          <Flame className="w-3.5 h-3.5" />
          <span>Top Verified Deals</span>
        </button>
      </div>

      {/* Modern Hardware-Centric Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a0f1d] via-[#070a14] to-[#140824] border border-white/[0.08] p-6 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#5865F2]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs font-semibold text-[#00f0ff] font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse" />
            <span>REAL-TIME TECH, MOBILES & MEGASTORE DEALS IN EGYPT</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            <span className="font-mono text-[#00f0ff]">LOO2TAA</span> // رادار صفقات <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#5865F2] to-[#ff007f]">أمازون مصر الشامل</span>
          </h1>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
            رصد لحظي وتتبع ذكي لأكثر من 4,600+ صفقة حقيقية على أمازون مصر: من الموبايلات واللابتوبات وقطع البي سي، إلى الأجهزة المنزلية، الساعات، العطور، والعدد الأصلية مع كشف الخصومات الوهمية وتنبيهات القاع التاريخي.
          </p>

          {/* Quick Category Jump Chips - Clean English Tags with Icons */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <button
              onClick={() => setFilters({ ...filters, category: "pc-hardware", page: 1 })}
              className="px-3.5 py-1.5 rounded-full bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-400/40 flex items-center gap-1.5 transition-all font-semibold font-sans shadow-sm"
            >
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>PC Hardware (333) 🔥</span>
            </button>
            <button
              onClick={() => setFilters({ ...filters, category: "monitors", page: 1 })}
              className="px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] hover:border-white/20 flex items-center gap-1.5 transition-all font-medium font-sans"
            >
              <Monitor className="w-3.5 h-3.5 text-emerald-400" />
              <span>Monitors (91)</span>
            </button>
            <button
              onClick={() => setFilters({ ...filters, category: "keyboards-mice", page: 1 })}
              className="px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] hover:border-white/20 flex items-center gap-1.5 transition-all font-medium font-sans"
            >
              <Keyboard className="w-3.5 h-3.5 text-amber-400" />
              <span>Keyboards & Mice (106)</span>
            </button>
            <button
              onClick={() => setFilters({ ...filters, category: "headsets", page: 1 })}
              className="px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] hover:border-white/20 flex items-center gap-1.5 transition-all font-medium font-sans"
            >
              <Headphones className="w-3.5 h-3.5 text-rose-400" />
              <span>Headsets (49)</span>
            </button>
            <button
              onClick={() => setFilters({ ...filters, category: "laptops", page: 1 })}
              className="px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] hover:border-white/20 flex items-center gap-1.5 transition-all font-medium font-sans"
            >
              <Laptop className="w-3.5 h-3.5 text-indigo-400" />
              <span>Laptops (22)</span>
            </button>
            <button
              onClick={() => setFilters({ ...filters, category: "streaming-voice", page: 1 })}
              className="px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] hover:border-white/20 flex items-center gap-1.5 transition-all font-medium font-sans"
            >
              <Mic className="w-3.5 h-3.5 text-cyan-400" />
              <span>Streaming & Mics (42)</span>
            </button>
            <button
              onClick={() => setFilters({ ...filters, category: "setup-aesthetic", page: 1 })}
              className="px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] hover:border-white/20 flex items-center gap-1.5 transition-all font-medium font-sans"
            >
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>Setup & Desk (39)</span>
            </button>
            <button
              onClick={() => setFilters({ ...filters, category: "consoles-handheld", page: 1 })}
              className="px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] hover:border-white/20 flex items-center gap-1.5 transition-all font-medium font-sans"
            >
              <Gamepad2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Consoles (18)</span>
            </button>
          </div>

          {/* Clean Metric Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
            <div className="bg-[#05070c]/80 rounded-2xl p-3 border border-white/5">
              <span className="text-[10px] text-gray-400 block font-medium font-sans">ACTIVE DEALS</span>
              <span className="text-xl sm:text-2xl font-black text-[#00f0ff] font-mono">{totalDeals}</span>
            </div>
            <div className="bg-[#05070c]/80 rounded-2xl p-3 border border-white/5">
              <span className="text-[10px] text-gray-400 block font-medium font-sans">VERIFIED STORE</span>
              <span className="text-lg sm:text-xl font-black text-[#ffd600] font-sans">Amazon.eg ⚡</span>
            </div>
            <div className="bg-[#05070c]/80 rounded-2xl p-3 border border-white/5">
              <span className="text-[10px] text-gray-400 block font-medium font-sans">MAX SAVINGS</span>
              <span className="text-xl sm:text-2xl font-black text-[#00ff9d] font-mono">{maxSavings.toLocaleString("ar-EG")} ج.م</span>
            </div>
            <div className="bg-[#05070c]/80 rounded-2xl p-3 border border-white/5">
              <span className="text-[10px] text-gray-400 block font-medium font-sans">RECORD LOWS</span>
              <span className="text-lg sm:text-xl font-black text-white font-mono">{recordLowCount} ⚡</span>
            </div>
          </div>
        </div>
      </section>

      {/* Instant Deal Inspector */}
      <DealInspector />

      {/* Main Filter & Explorer */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-[#ff007f]" />
            <h2 className="text-lg sm:text-xl font-black text-white">
              أقوى صفقات اليوم وهبوط الأسعار
            </h2>
          </div>

          <div className="text-xs text-gray-400 font-mono">
            {filteredProducts.length} deals available
          </div>
        </div>

        {/* Yestahil-Style Quick Discovery Presets Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs font-semibold font-sans">
          <button
            onClick={() => setFilters({ ...filters, sort: "record-low", minDiscount: undefined, page: 1 })}
            className={`px-4 py-2 rounded-full transition-all shrink-0 flex items-center gap-1.5 border ${
              (filters.sort === "record-low" && !filters.minDiscount)
                ? "bg-emerald-500/20 text-emerald-300 border-emerald-400/50 shadow-[0_0_15px_rgba(0,255,157,0.2)] font-bold scale-[1.02]"
                : "bg-white/[0.03] text-slate-400 hover:text-white border-white/[0.08] hover:border-white/20"
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>⚡ Record Lows (انخفاضات قياسية)</span>
          </button>

          <button
            onClick={() => setFilters({ ...filters, sort: "discount-desc", minDiscount: 20, page: 1 })}
            className={`px-4 py-2 rounded-full transition-all shrink-0 flex items-center gap-1.5 border ${
              (filters.sort === "discount-desc" && filters.minDiscount === 20)
                ? "bg-rose-500/20 text-rose-300 border-rose-400/50 shadow-[0_0_15px_rgba(255,0,127,0.2)] font-bold scale-[1.02]"
                : "bg-white/[0.03] text-slate-400 hover:text-white border-white/[0.08] hover:border-white/20"
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-rose-400" />
            <span>🔥 20%+ Drops (أقوى الخصومات)</span>
          </button>

          <button
            onClick={() => setFilters({ ...filters, sort: "newest-drop", minDiscount: undefined, page: 1 })}
            className={`px-4 py-2 rounded-full transition-all shrink-0 flex items-center gap-1.5 border ${
              filters.sort === "newest-drop"
                ? "bg-cyan-500/20 text-cyan-300 border-cyan-400/50 shadow-[0_0_15px_rgba(0,240,255,0.2)] font-bold scale-[1.02]"
                : "bg-white/[0.03] text-slate-400 hover:text-white border-white/[0.08] hover:border-white/20"
            }`}
          >
            <TrendingDown className="w-3.5 h-3.5 text-cyan-400" />
            <span>📉 Price Movements (تحركات الأسعار)</span>
          </button>

          <button
            onClick={() => setFilters({ ...filters, sort: "most-tracked", minDiscount: undefined, page: 1 })}
            className={`px-4 py-2 rounded-full transition-all shrink-0 flex items-center gap-1.5 border ${
              filters.sort === "most-tracked"
                ? "bg-purple-500/20 text-purple-300 border-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.2)] font-bold scale-[1.02]"
                : "bg-white/[0.03] text-slate-400 hover:text-white border-white/[0.08] hover:border-white/20"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>👁️ Most Tracked (الأكثر طلباً)</span>
          </button>
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
          <div className="cyber-card rounded-3xl p-12 text-center space-y-3 border border-white/10">
            <div className="w-12 h-12 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] flex items-center justify-center mx-auto border border-[#00f0ff]/20">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white font-sans">No matching deals found</h3>
            <p className="text-xs text-gray-400 max-w-sm mx-auto">
              Try adjusting your search keywords or switching category filters.
            </p>
            <button
              onClick={() => setFilters({ sort: "record-low", page: 1 })}
              className="px-5 py-2.5 rounded-full bg-[#00f0ff] text-[#05070c] font-bold text-xs hover:shadow-lg hover:shadow-[#00f0ff]/30 transition-all font-sans"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} viewMode="grid" />
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} viewMode="list" />
            ))}
          </div>
        )}

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage <= 1}
              className="px-4 py-2 rounded-full text-xs font-semibold bg-[#070a12] border border-white/10 text-gray-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 font-sans"
            >
              <ChevronRight className="w-4 h-4" />
              <span>Prev</span>
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => {
              const isCurr = pg === currentPage;
              return (
                <button
                  key={pg}
                  onClick={() => handlePageChange(pg)}
                  className={`w-9 h-9 rounded-full text-xs font-semibold transition-all font-mono ${
                    isCurr
                      ? "bg-[#00f0ff] text-[#05070c] font-black shadow-md shadow-[#00f0ff]/20"
                      : "bg-[#070a12] border border-white/10 text-gray-300 hover:text-white"
                  }`}
                >
                  {pg}
                </button>
              );
            })}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage >= totalPages}
              className="px-4 py-2 rounded-full text-xs font-semibold bg-[#070a12] border border-white/10 text-gray-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 font-sans"
            >
              <span>Next</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense
      fallback={
        <div className="cyber-card rounded-3xl p-12 text-center text-gray-400 text-xs animate-pulse">
          Loading deals...
        </div>
      }
    >
      <HomePageContent />
    </Suspense>
  );
}
