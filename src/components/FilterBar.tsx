"use client";

import React, { useState } from "react";
import { getUniqueBrands, MARKETPLACE_SETTINGS, PRODUCTS } from "@/lib/loo2taa-data";
import { FilterOptions } from "@/lib/types";
import {
  SlidersHorizontal,
  LayoutGrid,
  List,
  RotateCcw,
  Sparkles,
  Zap,
  TrendingDown,
  TrendingUp,
  Flame,
  Store,
  Tag,
  Clock,
  Cpu,
  Monitor,
  Home,
  Wrench,
  Shirt,
  Package,
  Search,
  Check,
  Eye
} from "lucide-react";

interface FilterBarProps {
  filters: FilterOptions;
  onFilterChange: (newFilters: FilterOptions) => void;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
  totalResults: number;
}

// 6 Core Categories required + All
export const CORE_CATEGORIES = [
  { id: "all", name: "كل الأقسام", icon: Zap },
  { id: "gaming_pc", name: "تجميعات وهاردوير الجيمنج", icon: Cpu },
  { id: "electronics", name: "إلكترونيات وشاشات", icon: Monitor },
  { id: "home_kitchen", name: "المنزل والمطبخ والسيت أب", icon: Home },
  { id: "tools_auto", name: "أدوات وسيارات وعدد", icon: Wrench },
  { id: "fashion", name: "أزياء واكسسوارات", icon: Shirt },
  { id: "other", name: "أقسام أخرى", icon: Package },
];

// 6 Core Sort Tabs required
export const SORT_OPTIONS = [
  { id: "record-low", label: "انخفاض تاريخي (Record-Low) ⚡", icon: Zap },
  { id: "discount-desc", label: "أعلى نسبة خصم (Biggest Discount) 🏷️", icon: Flame },
  { id: "newest-drop", label: "أحدث هبوط في السعر (Newest Drop) 📉", icon: TrendingDown },
  { id: "biggest-rise", label: "أكبر ارتفاع (Biggest Rise) 📈", icon: TrendingUp },
  { id: "price-asc", label: "السعر: الأقل للأعلى (Price Low to High) 💵", icon: ArrowUpDownIcon },
  { id: "most-tracked", label: "الأكثر متابعة وطلباً (Most Tracked) 👁️", icon: Eye },
];

function ArrowUpDownIcon(props: any) {
  return <TrendingUp {...props} />;
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

  const handleCategorySelect = (catId: string) => {
    onFilterChange({
      ...filters,
      category: catId === "all" ? undefined : catId,
      page: 1,
    });
  };

  const handleStoreSelect = (storeKey: string) => {
    onFilterChange({
      ...filters,
      marketplace: storeKey === "all" ? undefined : storeKey,
      page: 1,
    });
  };

  const handleSortSelect = (sortValue: string) => {
    onFilterChange({
      ...filters,
      sort: sortValue,
      page: 1,
    });
  };

  const handleSearchChange = (query: string) => {
    onFilterChange({
      ...filters,
      query: query || undefined,
      page: 1,
    });
  };

  const handleReset = () => {
    onFilterChange({
      query: undefined,
      category: undefined,
      brand: undefined,
      marketplace: undefined,
      dropLevel: undefined,
      sort: "record-low",
      minPrice: undefined,
      maxPrice: undefined,
      minDiscount: undefined,
      inStockOnly: false,
      page: 1,
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
    Boolean(filters.maxPrice) ||
    Boolean(filters.minDiscount) ||
    Boolean(filters.inStockOnly);

  return (
    <div className="space-y-3.5">
      
      {/* 1. Fast Search & Stores Bar */}
      <div className="cyber-card rounded-2xl p-2.5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="ابحث باسم المنتج، الموديل، أو الشركة (مثل: RTX 4070، HyperX، سامسونج)..."
            value={filters.query || ""}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full bg-[#070a12] border border-white/10 text-white rounded-xl pr-10 pl-4 py-2 text-xs focus:outline-hidden focus:border-[#00f0ff] placeholder-gray-500 font-medium"
          />
          {filters.query && (
            <button
              onClick={() => handleSearchChange("")}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs px-1"
            >
              ✕
            </button>
          )}
        </div>

        {/* Store Chips Strip */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none text-xs font-bold">
          {stores.map((st) => {
            const isSelected = (!filters.marketplace && st.key === "all") || filters.marketplace === st.key;
            return (
              <button
                key={st.key}
                onClick={() => handleStoreSelect(st.key)}
                className={`px-2.5 py-1.5 rounded-xl transition-all shrink-0 flex items-center gap-1.5 text-xs ${
                  isSelected
                    ? "bg-white/15 text-white shadow-md border font-black"
                    : "bg-[#070a12] text-gray-400 hover:text-white border border-white/5 hover:border-white/20"
                }`}
                style={{
                  borderColor: isSelected ? st.color : undefined,
                  boxShadow: isSelected ? `0 0 10px ${st.color}25` : undefined,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: st.color }} />
                <span>{st.name}</span>
                <span className="text-[10px] px-1 py-0.2 rounded bg-white/10 text-gray-300 font-mono">
                  {st.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Six Sort Tabs & Controls */}
      <div className="cyber-card rounded-2xl p-2.5 flex flex-wrap items-center justify-between gap-2.5">
        
        {/* Sort Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-xs font-bold">
          {SORT_OPTIONS.map((opt) => {
            const isSelected = (filters.sort || "record-low") === opt.id;
            const Icon = opt.icon;
            return (
              <button
                key={opt.id}
                onClick={() => handleSortSelect(opt.id)}
                className={`px-3 py-1.5 rounded-xl transition-all shrink-0 flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[#00f0ff] text-[#05070c] shadow-sm shadow-[#00f0ff]/30 font-black"
                    : "bg-[#070a12] text-[#94a3b8] hover:text-white border border-white/5"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>

        {/* View Mode & Filter Drawer Toggle */}
        <div className="flex items-center gap-2 mr-auto sm:mr-0">
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className={`p-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-colors ${
              hasActiveFilters || drawerOpen
                ? "bg-[#00f0ff]/20 border-[#00f0ff] text-[#00f0ff]"
                : "bg-[#070a12] border-white/10 text-[#94a3b8] hover:text-white"
            }`}
            title="فلاتر متقدمة"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline">فلاتر متقدمة</span>
            {hasActiveFilters && <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />}
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

      {/* 3. Six Core Categories Strip */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {CORE_CATEGORIES.map((cat) => {
          const isSelected = (!filters.category && cat.id === "all") || filters.category === cat.id;
          const Icon = cat.icon;

          return (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                isSelected
                  ? "bg-[#00f0ff] text-[#05070c] shadow-md shadow-[#00f0ff]/20 font-black"
                  : "bg-[#0b101c] text-[#94a3b8] hover:text-white hover:border-[#00f0ff]/30 border border-white/5"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* 4. Advanced Filter Drawer */}
      {drawerOpen && (
        <div className="cyber-card rounded-2xl p-4 space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#00f0ff]" />
              تصفية دقيقة للأسعار والخصومات
            </h4>
            {hasActiveFilters && (
              <button
                onClick={handleReset}
                className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 font-bold"
              >
                <RotateCcw className="w-3 h-3" />
                إعادة ضبط الكل
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            {/* Brand Filter */}
            <div>
              <label className="block text-gray-400 mb-1 font-medium">الشركة المصنعة</label>
              <select
                value={filters.brand || ""}
                onChange={(e) =>
                  onFilterChange({
                    ...filters,
                    brand: e.target.value || undefined,
                    page: 1,
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

            {/* Min Discount % */}
            <div>
              <label className="block text-gray-400 mb-1 font-medium">الحد الأدنى للخصم الحقيقي</label>
              <select
                value={filters.minDiscount || ""}
                onChange={(e) =>
                  onFilterChange({
                    ...filters,
                    minDiscount: e.target.value ? Number(e.target.value) : undefined,
                    page: 1,
                  })
                }
                className="w-full bg-[#070a12] border border-white/10 text-white rounded-xl px-3 py-2 text-xs focus:outline-hidden focus:border-[#00f0ff]"
              >
                <option value="">أي نسبة خصم</option>
                <option value="10">خصم 10%+ على الأقل</option>
                <option value="20">خصم 20%+ على الأقل (هبوط حاد)</option>
                <option value="30">خصم 30%+ على الأقل</option>
                <option value="50">خصم 50%+ (لقطات استثنائية)</option>
              </select>
            </div>

            {/* Min Price */}
            <div>
              <label className="block text-gray-400 mb-1 font-medium">الحد الأدنى للسعر (ج.م)</label>
              <input
                type="number"
                placeholder="مثلاً: 500"
                value={filters.minPrice || ""}
                onChange={(e) =>
                  onFilterChange({
                    ...filters,
                    minPrice: e.target.value ? Number(e.target.value) : undefined,
                    page: 1,
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
                    page: 1,
                  })
                }
                className="w-full bg-[#070a12] border border-white/10 text-white rounded-xl px-3 py-2 text-xs focus:outline-hidden focus:border-[#00f0ff]"
              />
            </div>
          </div>

          {/* In-Stock Only Toggle */}
          <div className="pt-2 border-t border-white/5 flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-300 font-bold">
              <input
                type="checkbox"
                checked={Boolean(filters.inStockOnly)}
                onChange={(e) =>
                  onFilterChange({
                    ...filters,
                    inStockOnly: e.target.checked,
                    page: 1,
                  })
                }
                className="w-4 h-4 rounded-md accent-[#00f0ff]"
              />
              <span>إظهار المنتجات المتوفرة في المخزن فقط (In-Stock Only)</span>
            </label>
            <span className="text-[11px] text-gray-400 font-mono">
              إجمالي النتائج: {totalResults}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
