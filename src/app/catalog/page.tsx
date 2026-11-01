"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS } from "@/lib/loo2taa-data";
import { FilterOptions } from "@/lib/types";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import { Cpu, Crosshair } from "lucide-react";

function CatalogInner() {
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get("q") || "";
  const initialCategory = searchParams.get("category") || undefined;
  const initialBrand = searchParams.get("brand") || undefined;
  const initialMarketplace = searchParams.get("store") || undefined;
  const initialDropLevel = searchParams.get("drop") || undefined;
  const initialSort = searchParams.get("sort") || "record-low";

  const [filters, setFilters] = useState<FilterOptions>({
    query: initialQuery,
    category: initialCategory,
    brand: initialBrand,
    marketplace: initialMarketplace,
    dropLevel: initialDropLevel,
    sort: initialSort,
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

    if (filters.marketplace && filters.marketplace !== "all") {
      list = list.filter((p) => p.marketplace === filters.marketplace);
    }

    if (filters.dropLevel) {
      if (filters.dropLevel === "record_low") {
        list = list.filter((p) => p.is_record_low || p.drop_level === "record_low");
      } else if (filters.dropLevel === "steep") {
        list = list.filter((p) => p.drop_level === "steep" || p.discount_percent >= 20);
      } else if (filters.dropLevel === "medium") {
        list = list.filter((p) => p.drop_level === "medium" || (p.discount_percent >= 10 && p.discount_percent < 20));
      } else if (filters.dropLevel === "slight") {
        list = list.filter((p) => p.drop_level === "slight" || p.discount_percent < 10);
      }
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
      case "discount-desc":
        list.sort((a, b) => b.discount_percent - a.discount_percent);
        break;
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "price-changed":
      case "newest":
        list.sort((a, b) => new Date(b.price_checked_at).getTime() - new Date(a.price_checked_at).getTime());
        break;
      case "record-low":
      default:
        list.sort((a, b) => (b.is_record_low ? 1 : 0) - (a.is_record_low ? 1 : 0) || b.discount_percent - a.discount_percent);
        break;
    }

    return list;
  }, [filters]);

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
            onClick={() => setFilters({ sort: "record-low" })}
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
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} viewMode={viewMode} />
          ))}
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
