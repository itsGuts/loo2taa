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
  Gamepad2,
  Cpu,
  Monitor,
  Keyboard,
  Headphones,
  Gamepad,
  Laptop
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
    <div className="space-y-4">
      
      {/* Top Bar: Store Chips & View Mode / Sort */}
      <div className="cyber-card rounded-2xl p-3 flex flex-wrap items-center justify-between gap-3">
        
        {/* Marketplace Store Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <button
            onClick={() => handleStoreSelect("all")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all shrink-0 ${
              !filters.marketplace || filters.marketplace === "all"
                ? "bg-gradient-to-r from-[#00f0ff] to-[#00a3ff] text-[#07090e] shadow-md shadow-[#00f0ff]/25"
                : "bg-[#07090e] text-[#94a3b8] hover:text-white border border-white/10"
            }`}
          >
            جميع المتاجر ({totalResults})
          </button>

          <button
            onClick={() => handleStoreSelect("amazon")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all shrink-0 flex items-center gap-1.5 ${
              filters.marketplace === "amazon"
                ? "bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff] shadow-sm shadow-[#00f0ff]/30"
                : "bg-[#07090e] text-gray-300 hover:text-white border border-white/10"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#ff9900]" />
            Amazon أمازون مصر
          </button>

          <button
            onClick={() => handleStoreSelect("noon")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all shrink-0 flex items-center gap-1.5 ${
              filters.marketplace === "noon"
                ? "bg-[#ffd600]/20 text-[#ffd600] border border-[#ffd600] shadow-sm shadow-[#ffd600]/30"
                : "bg-[#07090e] text-gray-300 hover:text-white border border-white/10"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#ffd600]" />
            نون Noon
          </button>
        </div>

        {/* View Mode & Sort Dropdown & Filter Drawer Toggle */}
        <div className="flex items-center gap-2 mr-auto sm:mr-0">
          
          {/* Cyber Sort Selector */}
          <select
            value={filters.sort || "record-low"}
            onChange={(e) => handleSortSelect(e.target.value)}
            className="bg-[#07090e] border border-white/15 text-white text-xs font-bold rounded-xl px-3 py-2 focus:outline-hidden focus:border-[#00f0ff]"
          >
            <option value="record-low">⚡ لقطة // أقل سعر تاريخي</option>
            <option value="discount-desc">🏷️ أعلى نسبة خصم</option>
            <option value="price-changed">📉 أحدث نزول في الأسعار</option>
            <option value="price-asc">💵 السعر: من الأقل للأعلى</option>
            <option value="price-desc">💎 السعر: من الأعلى للأقل</option>
          </select>

          {/* Filter Drawer Button */}
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className={`p-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-colors ${
              hasActiveFilters || drawerOpen
                ? "bg-[#00f0ff]/20 border-[#00f0ff] text-[#00f0ff]"
                : "bg-[#07090e] border-white/10 text-[#94a3b8] hover:text-white"
            }`}
            title="فلاتر العتاد"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline">فلاتر</span>
          </button>

          {/* View Mode Toggle */}
          <div className="hidden sm:flex items-center bg-[#07090e] border border-white/10 p-0.5 rounded-xl">
            <button
              onClick={() => onViewModeChange("grid")}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === "grid"
                  ? "bg-[#00f0ff] text-[#07090e] shadow-xs"
                  : "text-gray-500 hover:text-white"
              }`}
              title="عرض شبكة"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => onViewModeChange("list")}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === "list"
                  ? "bg-[#00f0ff] text-[#07090e] shadow-xs"
                  : "text-gray-500 hover:text-white"
              }`}
              title="عرض قائمة"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Gaming Category Pills Strip */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isSelected =
            (!filters.category && cat.id === "all") ||
            filters.category === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-black transition-all shrink-0 flex items-center gap-1.5 ${
                isSelected
                  ? "bg-gradient-to-r from-[#00f0ff] to-[#00a3ff] text-[#07090e] shadow-md shadow-[#00f0ff]/30"
                  : "bg-[#0d121f] text-[#94a3b8] hover:text-white hover:border-[#00f0ff]/40 border border-white/10"
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Expandable Advanced Filter Drawer */}
      {drawerOpen && (
        <div className="cyber-card rounded-2xl p-5 shadow-2xl space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <h4 className="text-sm font-black text-white flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#00f0ff]" />
              تخصيص رادار العتاد
            </h4>
            {hasActiveFilters && (
              <button
                onClick={handleReset}
                className="text-xs text-[#ff007f] hover:underline flex items-center gap-1 font-bold"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                إعادة ضبط الرادار
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Brand Filter */}
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1">
                البراند المفضل
              </label>
              <select
                value={filters.brand || ""}
                onChange={(e) =>
                  onFilterChange({
                    ...filters,
                    brand: e.target.value || undefined,
                  })
                }
                className="w-full bg-[#07090e] border border-white/15 text-xs rounded-xl p-2.5 text-white focus:outline-hidden focus:border-[#00f0ff]"
              >
                <option value="">جميع الشركات</option>
                {brands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Min Price */}
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1">
                الحد الأدنى للميزانية (ج.م)
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
                className="w-full bg-[#07090e] border border-white/15 text-xs rounded-xl p-2.5 text-white focus:outline-hidden focus:border-[#00f0ff]"
              />
            </div>

            {/* Max Price */}
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-1">
                الحد الأقصى للميزانية (ج.م)
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
                className="w-full bg-[#07090e] border border-white/15 text-xs rounded-xl p-2.5 text-white focus:outline-hidden focus:border-[#00f0ff]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
