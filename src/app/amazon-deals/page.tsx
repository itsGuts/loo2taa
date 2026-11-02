"use client";

import React, { useState, useMemo } from "react";
import { PRODUCTS } from "@/lib/loo2taa-data";
import { FilterOptions } from "@/lib/types";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import { ShieldCheck, Radio, ChevronLeft, ChevronRight } from "lucide-react";

const PAGE_SIZE = 24;

export default function AmazonDealsPage() {
  const [filters, setFilters] = useState<FilterOptions>({
    marketplace: "amazon",
    sort: "record-low",
    page: 1,
  });
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const amazonProducts = useMemo(() => {
    let list = PRODUCTS.filter((p) => p.marketplace === "amazon" && p.in_stock !== false && p.is_deal_active !== false);

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

  const currentPage = filters.page || 1;
  const totalPages = Math.ceil(amazonProducts.length / PAGE_SIZE) || 1;

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return amazonProducts.slice(start, start + PAGE_SIZE);
  }, [amazonProducts, currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setFilters({ ...filters, page: newPage });
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  return (
    <div className="space-y-6">
      
      {/* Banner */}
      <div className="cyber-card rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-white/10">
        <div className="relative z-10 max-w-2xl space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff9900]/10 border border-[#ff9900]/30 text-xs font-bold text-[#ff9900]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900] animate-pulse" />
            عروض أمازون مصر الرسمية (Amazon.eg)
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-white font-sans">
            تخفيضات وصفقات أمازون مصر الموثقة
          </h1>

          <p className="text-xs text-gray-300 leading-relaxed">
            جميع صفقات الأجهزة والإلكترونيات والمستلزمات المفحوصة آلياً بواسطة لقطة للتأكد من أن السعر يمثل انخفاضاً حقيقياً وموثوقاً.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-gray-400 font-sans">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00ff9d]" />
              بائعين معتمدين وضمان محلي
            </span>
            <span className="flex items-center gap-1.5">
              <Radio className="w-4 h-4 text-[#00f0ff]" />
              تتبع فوري للمخزون (4,644 منتج)
            </span>
          </div>
        </div>
      </div>

      {/* Filter and View Bar */}
      <FilterBar
        filters={filters}
        onFilterChange={setFilters}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        totalResults={amazonProducts.length}
      />

      {/* Products Grid */}
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            : "space-y-3"
        }
      >
        {paginatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            viewMode={viewMode}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6 pb-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage <= 1}
            className="px-4 py-2 rounded-full text-xs font-semibold bg-[#070a12] border border-white/10 text-gray-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 font-sans"
          >
            <ChevronRight className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <span className="text-xs text-slate-400 font-mono px-3">
            Page {currentPage} of {totalPages}
          </span>

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
    </div>
  );
}
