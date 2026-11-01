"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS } from "@/lib/loo2taa-data";
import { FilterOptions } from "@/lib/types";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import { Cpu, Crosshair, ChevronLeft, ChevronRight } from "lucide-react";

const PAGE_SIZE = 24;

function matchesCategory(prodCategory: string, filterCat?: string): boolean {
  if (!filterCat || filterCat === "all") return true;
  if (filterCat === "gaming_pc") {
    return ["pc-hardware", "consoles-handheld", "laptops", "gaming_pc"].includes(prodCategory);
  }
  if (filterCat === "electronics") {
    return ["monitors", "keyboards-mice", "headsets", "streaming-voice", "electronics"].includes(prodCategory);
  }
  if (filterCat === "home_kitchen") {
    return ["setup-aesthetic", "home_kitchen", "home-kitchen"].includes(prodCategory);
  }
  if (filterCat === "tools_auto") {
    return ["tools_auto", "tools", "auto"].includes(prodCategory);
  }
  if (filterCat === "fashion") {
    return ["fashion", "apparel"].includes(prodCategory);
  }
  if (filterCat === "other") {
    return !["pc-hardware", "consoles-handheld", "laptops", "monitors", "keyboards-mice", "headsets", "streaming-voice"].includes(prodCategory);
  }
  return prodCategory === filterCat;
}

function CatalogInner() {
  const searchParams = useSearchParams();

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

  // Sync state to URL for shareable URLs
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

    if (filters.inStockOnly) {
      list = list.filter((p) => p.in_stock !== false);
    }

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

    if (filters.marketplace && filters.marketplace !== "all") {
      list = list.filter((p) => p.marketplace === filters.marketplace);
    }

    if (filters.category && filters.category !== "all") {
      list = list.filter((p) => matchesCategory(p.category, filters.category));
    }

    if (filters.brand) {
      list = list.filter((p) => p.brand.toLowerCase() === filters.brand!.toLowerCase());
    }

    if (filters.minDiscount !== undefined && filters.minDiscount > 0) {
      list = list.filter((p) => p.discount_percent >= filters.minDiscount!);
    }

    if (filters.minPrice !== undefined) {
      list = list.filter((p) => p.price >= filters.minPrice!);
    }

    if (filters.maxPrice !== undefined) {
      list = list.filter((p) => p.price <= filters.maxPrice!);
    }

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

  const currentPage = filters.page || 1;
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredProducts.slice(start, start + PAGE_SIZE);
  }, [filteredProducts, currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setFilters({ ...filters, page: newPage });
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="cyber-card rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
            <Cpu className="w-6 h-6 text-[#00f0ff]" />
            كتالوج عتاد الديسكورد والجيمنج في مصر
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            رصد هبوط الأسعار والخصومات الحقيقية عبر أكبر 6 متاجر مصرية معتمدة مع سجل السعر لآخر 90 يوم
          </p>
        </div>

        <div className="text-xs font-black px-3.5 py-1.5 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20 self-start sm:self-auto shadow-sm">
          {filteredProducts.length} صفقة متوفرة
        </div>
      </div>

      {/* Filter and View Bar */}
      <FilterBar
        filters={filters}
        onFilterChange={setFilters}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        totalResults={filteredProducts.length}
      />

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="cyber-card rounded-3xl p-12 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] flex items-center justify-center mx-auto border border-[#00f0ff]/20">
            <Crosshair className="w-6 h-6" />
          </div>
          <h3 className="text-sm font-bold text-white">لا توجد قطع مطابقة لاختياراتك</h3>
          <p className="text-xs text-gray-400 max-w-sm mx-auto">
            جرّب تغيير كلمات البحث أو إعادة ضبط الفلاتر لتصفح باقي الصفقات.
          </p>
          <button
            onClick={() => setFilters({ sort: "record-low", page: 1 })}
            className="mt-2 px-4 py-2 btn-cyber-primary text-xs rounded-xl"
          >
            إعادة تعيين الفلاتر
          </button>
        </div>
      ) : (
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
              : "space-y-4"
          }
        >
          {paginatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} viewMode={viewMode} />
          ))}
        </div>
      )}

      {/* Pagination Bar */}
      {totalPages > 1 && (
        <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage <= 1}
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#070a12] border border-white/10 text-gray-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
          >
            <ChevronRight className="w-4 h-4" />
            <span>السابق</span>
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => {
            const isCurr = pg === currentPage;
            return (
              <button
                key={pg}
                onClick={() => handlePageChange(pg)}
                className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
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
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#070a12] border border-white/10 text-gray-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
          >
            <span>التالي</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense
      fallback={
        <div className="cyber-card rounded-3xl p-12 text-center text-gray-400 text-xs animate-pulse">
          جاري تحميل الكتالوج...
        </div>
      }
    >
      <CatalogInner />
    </Suspense>
  );
}
