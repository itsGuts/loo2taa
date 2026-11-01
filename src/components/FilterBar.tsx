"use client";

import React, { useState } from "react";
import { CATEGORIES, getUniqueBrands } from "@/lib/loo2taa-data";
import { FilterOptions } from "@/lib/types";
import {
  SlidersHorizontal,
  LayoutGrid,
  List,
  RotateCcw,
  Sparkles,
  Zap,
  TrendingDown,
  Flame,
  Check
} from "lucide-react";

interface FilterBarProps {
  filters: FilterOptions;
  onFilterChange: (newFilters: FilterOptions) => void;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
  totalResults: number;
}

export default function FilterBar({
  filters,
  onFilterChange,
  viewMode,
  onViewModeChange,
  totalResults,
}: FilterBarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const brands = getUniqueBrands();

  const handleCategorySelect = (catId: string) => {
    onFilterChange({
      ...filters,
      category: catId === "all" ? undefined : catId,
    });
  };

  const handleSortSelect = (sortValue: string) => {
    onFilterChange({
      ...filters,
      sort: sortValue,
    });
  };

  const handleReset = () => {
    onFilterChange({
      query: "",
      category: undefined,
      brand: undefined,
      marketplace: undefined,
      sort: "record-low",
      minPrice: undefined,
      maxPrice: undefined,
    });
    setDrawerOpen(false);
  };

  const hasActiveFilters =
    Boolean(filters.query) ||
    Boolean(filters.category) ||
    Boolean(filters.brand) ||
    Boolean(filters.minPrice) ||
    Boolean(filters.maxPrice);

  return (
    <div className="space-y-3">
      
      {/* Top Bar: Clean Action Strip & Sort */}
      <div className="cyber-card rounded-2xl p-2.5 flex flex-wrap items-center justify-between gap-3">
        
        {/* Fast Quick Filter Chips (shadcn style) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-xs font-bold">
          
          {/* Amazon Egypt Official Chip */}
          <div className="px-3 py-1.5 rounded-xl bg-[#ff9900]/10 text-[#ff9900] border border-[#ff9900]/30 shrink-0 flex items-center gap-1.5 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#ff9900] animate-pulse" />
            <span>أمازون مصر</span>
            <span className="text-[10px] bg-[#ff9900]/20 px-1.5 py-0.2 rounded text-white font-mono">
              {totalResults}
            </span>
          </div>

          <button
            onClick={() => handleSortSelect("discount-desc")}
            className={`px-3 py-1.5 rounded-xl transition-all shrink-0 flex items-center gap-1.5 ${
              filters.sort === "discount-desc"
                ? "bg-[#ff9900] text-black shadow-sm shadow-[#ff9900]/30 font-black"
                : "bg-[#ff9900]/10 text-[#ff9900] hover:bg-[#ff9900]/20 border border-[#ff9900]/30"
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            عروض الجمعة البيضاء 11.11
          </button>

          <button
            onClick={() => handleSortSelect("record-low")}
            className={`px-3 py-1.5 rounded-xl transition-all shrink-0 flex items-center gap-1.5 ${
              filters.sort === "record-low"
                ? "bg-[#00f0ff] text-[#05070c] shadow-sm shadow-[#00f0ff]/30 font-black"
                : "bg-[#070a12] text-[#94a3b8] hover:text-white border border-white/5"
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            أقل سعر تاريخي
          </button>

          <button
            onClick={() => handleSortSelect("discount-desc")}
            className={`px-3 py-1.5 rounded-xl transition-all shrink-0 flex items-center gap-1.5 ${
              filters.sort === "discount-desc"
                ? "bg-[#ff007f] text-white shadow-sm shadow-[#ff007f]/30 font-black"
                : "bg-[#070a12] text-[#94a3b8] hover:text-white border border-white/5"
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            أعلى نسبة خصم
          </button>

          <button
            onClick={() => handleSortSelect("price-changed")}
            className={`px-3 py-1.5 rounded-xl transition-all shrink-0 flex items-center gap-1.5 ${
              filters.sort === "price-changed"
                ? "bg-[#00ff9d] text-[#05070c] shadow-sm shadow-[#00ff9d]/30 font-black"
                : "bg-[#070a12] text-[#94a3b8] hover:text-white border border-white/5"
            }`}
          >
            <TrendingDown className="w-3.5 h-3.5" />
            أحدث هبوط
          </button>
        </div>

        {/* View Mode & Sort Dropdown */}
        <div className="flex items-center gap-2 mr-auto sm:mr-0">
          
          <select
            value={filters.sort || "record-low"}
            onChange={(e) => handleSortSelect(e.target.value)}
            className="bg-[#070a12] border border-white/10 text-white text-xs font-bold rounded-xl px-3 py-1.5 focus:outline-hidden focus:border-[#00f0ff]"
          >
            <option value="record-low">⚡ أقل سعر مرصود</option>
            <option value="discount-desc">🏷️ أعلى نسبة خصم</option>
            <option value="price-changed">📉 أحدث نزول في الأسعار</option>
            <option value="price-asc">💵 السعر: الأقل للأعلى</option>
            <option value="price-desc">💎 السعر: الأعلى للأقل</option>
          </select>

          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className={`p-1.5 rounded-xl border text-xs font-bold flex items-center gap-1 transition-colors ${
              hasActiveFilters || drawerOpen
                ? "bg-[#00f0ff]/20 border-[#00f0ff] text-[#00f0ff]"
                : "bg-[#070a12] border-white/10 text-[#94a3b8] hover:text-white"
            }`}
            title="فلاتر إضافية"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline">تصفية</span>
          </button>

          <div className="hidden sm:flex items-center bg-[#070a12] border border-white/10 p-0.5 rounded-xl">
            <button
              onClick={() => onViewModeChange("grid")}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === "grid"
                  ? "bg-[#00f0ff] text-[#05070c] shadow-xs"
                  : "text-gray-400 hover:text-white"
              }`}
              title="عرض شبكة"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onViewModeChange("list")}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === "list"
                  ? "bg-[#00f0ff] text-[#05070c] shadow-xs"
                  : "text-gray-400 hover:text-white"
              }`}
              title="عرض قائمة"
            >
              <List className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Pills Strip (Discord-Focused) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isSelected =
            (!filters.category && cat.id === "all") ||
            filters.category === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                isSelected
                  ? "bg-[#00f0ff] text-[#05070c] shadow-md shadow-[#00f0ff]/20 font-black"
                  : "bg-[#0b101c] text-[#94a3b8] hover:text-white hover:border-[#00f0ff]/30 border border-white/5"
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Advanced Filter Drawer */}
      {drawerOpen && (
        <div className="cyber-card rounded-2xl p-4 space-y-3 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#00f0ff]" />
              تصفية دقيقة للعتاد
            </h4>
            {hasActiveFilters && (
              <button
                onClick={handleReset}
                className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 font-bold"
              >
                <RotateCcw className="w-3 h-3" />
                إعادة ضبط
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            {/* Brand Filter */}
            <div>
              <label className="block text-gray-400 mb-1 font-medium">الشركة المصنعة</label>
              <select
                value={filters.brand || ""}
                onChange={(e) =>
                  onFilterChange({
                    ...filters,
                    brand: e.target.value || undefined,
                  })
                }
                className="w-full bg-[#070a12] border border-white/10 text-white rounded-xl px-3 py-2 text-xs focus:outline-hidden focus:border-[#00f0ff]"
              >
                <option value="">كل الشركات ({brands.length})</option>
                {brands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Min Price */}
            <div>
              <label className="block text-gray-400 mb-1 font-medium">الحد الأدنى للسعر (ج.م)</label>
              <input
                type="number"
                placeholder="مثلاً: 1000"
                value={filters.minPrice || ""}
                onChange={(e) =>
                  onFilterChange({
                    ...filters,
                    minPrice: e.target.value ? Number(e.target.value) : undefined,
                  })
                }
                className="w-full bg-[#070a12] border border-white/10 text-white rounded-xl px-3 py-2 text-xs focus:outline-hidden focus:border-[#00f0ff]"
              />
            </div>

            {/* Max Price */}
            <div>
              <label className="block text-gray-400 mb-1 font-medium">الحد الأقصى للسعر (ج.م)</label>
              <input
                type="number"
                placeholder="مثلاً: 25000"
                value={filters.maxPrice || ""}
                onChange={(e) =>
                  onFilterChange({
                    ...filters,
                    maxPrice: e.target.value ? Number(e.target.value) : undefined,
                  })
                }
                className="w-full bg-[#070a12] border border-white/10 text-white rounded-xl px-3 py-2 text-xs focus:outline-hidden focus:border-[#00f0ff]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
