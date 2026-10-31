"use client";

import React, { useState } from "react";
import { CATEGORIES, getUniqueBrands } from "@/lib/loo2taa-data";
import { FilterOptions } from "@/lib/types";
import {
  SlidersHorizontal,
  LayoutGrid,
  List,
  RotateCcw
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

  const handleStoreSelect = (storeKey: string) => {
    onFilterChange({
      ...filters,
      marketplace: filters.marketplace === storeKey ? undefined : storeKey,
    });
  };

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
    Boolean(filters.marketplace) ||
    Boolean(filters.minPrice) ||
    Boolean(filters.maxPrice);

  return (
    <div className="space-y-3.5">
      
      {/* Top Bar: Store Chips & View Mode / Sort */}
      <div className="cyber-card rounded-2xl p-2.5 flex flex-wrap items-center justify-between gap-3">
        
        {/* Store Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <button
            onClick={() => handleStoreSelect("all")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              !filters.marketplace || filters.marketplace === "all"
                ? "bg-[#00f0ff] text-[#05070c] shadow-sm shadow-[#00f0ff]/30 font-black"
                : "bg-[#070a12] text-[#94a3b8] hover:text-white border border-white/5"
            }`}
          >
            كل المتاجر ({totalResults})
          </button>

          <button
            onClick={() => handleStoreSelect("amazon")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
              filters.marketplace === "amazon"
                ? "bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/50 font-black"
                : "bg-[#070a12] text-gray-300 hover:text-white border border-white/5"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900]" />
            أمازون مصر
          </button>

          <button
            onClick={() => handleStoreSelect("noon")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
              filters.marketplace === "noon"
                ? "bg-[#ffd600]/20 text-[#ffd600] border border-[#ffd600]/50 font-black"
                : "bg-[#070a12] text-gray-300 hover:text-white border border-white/5"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffd600]" />
            نون
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

      {/* Category Pills Strip */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isSelected =
            (!filters.category && cat.id === "all") ||
            filters.category === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
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
              تصفية مخصصة
            </h4>
            {hasActiveFilters && (
              <button
                onClick={handleReset}
                className="text-xs text-[#ff007f] hover:underline flex items-center gap-1 font-bold"
              >
                <RotateCcw className="w-3 h-3" />
                إعادة ضبط
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-gray-300 mb-1">
                البراند
              </label>
              <select
                value={filters.brand || ""}
                onChange={(e) =>
                  onFilterChange({
                    ...filters,
                    brand: e.target.value || undefined,
                  })
                }
                className="w-full bg-[#070a12] border border-white/10 text-xs rounded-xl p-2 text-white focus:outline-hidden focus:border-[#00f0ff]"
              >
                <option value="">جميع البراندات</option>
                {brands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-300 mb-1">
                الحد الأدنى للسعر (ج.م)
              </label>
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
                className="w-full bg-[#070a12] border border-white/10 text-xs rounded-xl p-2 text-white focus:outline-hidden focus:border-[#00f0ff]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-300 mb-1">
                الحد الأقصى للسعر (ج.م)
              </label>
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
                className="w-full bg-[#070a12] border border-white/10 text-xs rounded-xl p-2 text-white focus:outline-hidden focus:border-[#00f0ff]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
