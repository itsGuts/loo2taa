"use client";

import React, { useState } from "react";
import { CATEGORIES, getUniqueBrands, MARKETPLACE_SETTINGS, PRODUCTS } from "@/lib/loo2taa-data";
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
  Store,
  Tag,
  Clock,
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

  // Stores metadata with deal counts
  const stores = [
    { key: "all", name: "جميع المتاجر", count: PRODUCTS.length, color: "#00f0ff" },
    { key: "amazon", name: "أمازون مصر", count: PRODUCTS.filter(p => p.marketplace === "amazon").length, color: "#ff9900" },
    { key: "btech", name: "بي تك", count: PRODUCTS.filter(p => p.marketplace === "btech").length, color: "#0066cc" },
    { key: "twob", name: "2B مصر", count: PRODUCTS.filter(p => p.marketplace === "twob").length, color: "#7b2cbf" },
    { key: "rayashop", name: "راية شوب", count: PRODUCTS.filter(p => p.marketplace === "rayashop").length, color: "#e60000" },
    { key: "dream2000", name: "دريم 2000", count: PRODUCTS.filter(p => p.marketplace === "dream2000").length, color: "#f77f00" },
    { key: "compughana", name: "كمبيوجانا وسيجما", count: PRODUCTS.filter(p => p.marketplace === "compughana").length, color: "#10b981" },
  ];

  // Price Drop Filter definitions (Yestahil-Style)
  const priceDropFilters = [
    { id: "all_drops", label: "كل الهبوط", icon: Zap, level: undefined },
    { id: "record_low", label: "انخفاض تاريخي (Record Low) ⚡", icon: Zap, level: "record_low" },
    { id: "steep", label: "هبوط حاد (> 20%) 📉", icon: TrendingDown, level: "steep" },
    { id: "medium", label: "هبوط متوسط (10% - 20%) 🏷️", icon: Tag, level: "medium" },
    { id: "slight", label: "هبط اليوم / رصد حي ⏱️", icon: Clock, level: "slight" },
  ];

  const handleCategorySelect = (catId: string) => {
    onFilterChange({
      ...filters,
      category: catId === "all" ? undefined : catId,
    });
  };

  const handleStoreSelect = (storeKey: string) => {
    onFilterChange({
      ...filters,
      marketplace: storeKey === "all" ? undefined : storeKey,
    });
  };

  const handleDropLevelSelect = (level?: string) => {
    onFilterChange({
      ...filters,
      dropLevel: level,
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
      dropLevel: undefined,
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
    Boolean(filters.dropLevel) ||
    Boolean(filters.minPrice) ||
    Boolean(filters.maxPrice);

  return (
    <div className="space-y-3.5">
      
      {/* 1. Multi-Store Aggregator Bar (Top 6 Verified Egyptian Tech Retailers - NO Noon) */}
      <div className="cyber-card rounded-2xl p-2.5 flex items-center justify-between gap-2 overflow-hidden">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none w-full text-xs font-bold">
          <div className="flex items-center gap-1.5 text-gray-400 pl-2 shrink-0 border-l border-white/10 hidden sm:flex">
            <Store className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span className="text-[11px]">المتاجر المعتمدة:</span>
          </div>

          {stores.map((st) => {
            const isSelected = (!filters.marketplace && st.key === "all") || filters.marketplace === st.key;
            return (
              <button
                key={st.key}
                onClick={() => handleStoreSelect(st.key)}
                className={`px-3 py-1.5 rounded-xl transition-all shrink-0 flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-white/15 text-white shadow-md border font-black"
                    : "bg-[#070a12] text-gray-400 hover:text-white border border-white/5 hover:border-white/20"
                }`}
                style={{
                  borderColor: isSelected ? st.color : undefined,
                  boxShadow: isSelected ? `0 0 12px ${st.color}30` : undefined,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: st.color }}
                />
                <span>{st.name}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-md font-mono bg-white/10 text-gray-300">
                  {st.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Yestahil-Style Price Drop Service & White Friday Fast Chips */}
      <div className="cyber-card rounded-2xl p-2.5 flex flex-wrap items-center justify-between gap-3">
        
        {/* Price Drop Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-xs font-bold">
          
          <button
            onClick={() => handleSortSelect("discount-desc")}
            className={`px-3 py-1.5 rounded-xl transition-all shrink-0 flex items-center gap-1.5 ${
              filters.sort === "discount-desc"
                ? "bg-[#ff9900] text-black shadow-md shadow-[#ff9900]/30 font-black"
                : "bg-[#ff9900]/10 text-[#ff9900] hover:bg-[#ff9900]/20 border border-[#ff9900]/30"
            }`}
          >
            <Flame className="w-3.5 h-3.5 animate-pulse" />
            عروض الجمعة البيضاء 11.11
          </button>

          {priceDropFilters.map((df) => {
            const isSelected = (!filters.dropLevel && df.level === undefined) || filters.dropLevel === df.level;
            const Icon = df.icon;
            return (
              <button
                key={df.id}
                onClick={() => handleDropLevelSelect(df.level)}
                className={`px-3 py-1.5 rounded-xl transition-all shrink-0 flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[#00f0ff] text-[#05070c] shadow-sm shadow-[#00f0ff]/30 font-black"
                    : "bg-[#070a12] text-[#94a3b8] hover:text-white border border-white/5"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {df.label}
              </button>
            );
          })}
        </div>

        {/* View Mode & Sort Dropdown */}
        <div className="flex items-center gap-2 mr-auto sm:mr-0">
          
          <select
            value={filters.sort || "record-low"}
            onChange={(e) => handleSortSelect(e.target.value)}
            className="bg-[#070a12] border border-white/10 text-white text-xs font-bold rounded-xl px-3 py-1.5 focus:outline-hidden focus:border-[#00f0ff]"
          >
            <option value="record-low">⚡ انخفاض قياسي (Record Low)</option>
            <option value="discount-desc">🏷️ أعلى نسبة هبوط</option>
            <option value="price-changed">📉 أحدث نزول في السعر</option>
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

      {/* 3. Category Pills Strip */}
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

      {/* 4. Advanced Filter Drawer */}
      {drawerOpen && (
        <div className="cyber-card rounded-2xl p-4 space-y-3 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#00f0ff]" />
              تصفية دقيقة للعتاد والمتاجر
            </h4>
            {hasActiveFilters && (
              <button
                onClick={handleReset}
                className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 font-bold"
              >
                <RotateCcw className="w-3 h-3" />
                إعادة ضبط الفلاتر
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            {/* Store Filter */}
            <div>
              <label className="block text-gray-400 mb-1 font-medium">المتجر المصري</label>
              <select
                value={filters.marketplace || ""}
                onChange={(e) =>
                  onFilterChange({
                    ...filters,
                    marketplace: e.target.value || undefined,
                  })
                }
                className="w-full bg-[#070a12] border border-white/10 text-white rounded-xl px-3 py-2 text-xs focus:outline-hidden focus:border-[#00f0ff]"
              >
                <option value="">جميع المتاجر (أمازون، بي تك، 2B، راية، دريم، كمبيوجانا)</option>
                <option value="amazon">أمازون مصر (Amazon.eg)</option>
                <option value="btech">بي تك مصر (B.TECH)</option>
                <option value="twob">2B مصر (2B Egypt)</option>
                <option value="rayashop">راية شوب (Raya Shop)</option>
                <option value="dream2000">دريم 2000 (Dream 2000)</option>
                <option value="compughana">كمبيوجانا وسيجما (CompuGhana & Sigma)</option>
              </select>
            </div>

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
                placeholder="مثلاً: 35000"
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
