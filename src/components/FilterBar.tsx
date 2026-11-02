"use client";

import React, { useState, useMemo } from "react";
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
  Laptop,
  Keyboard,
  Headphones,
  Mic,
  Gamepad2,
  Package,
  Search,
  Check,
  Eye,
  ShieldCheck
} from "lucide-react";

interface FilterBarProps {
  filters: FilterOptions;
  onFilterChange: (newFilters: FilterOptions) => void;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
  totalResults: number;
}

// Clean English Category Tags with specific icons
export const CORE_CATEGORIES = [
  { id: "all", name: "All Deals", icon: Zap },
  { id: "pc-hardware", name: "PC Hardware", icon: Cpu },
  { id: "monitors", name: "Monitors", icon: Monitor },
  { id: "laptops", name: "Laptops", icon: Laptop },
  { id: "keyboards-mice", name: "Keyboards & Mice", icon: Keyboard },
  { id: "headsets", name: "Headsets & Audio", icon: Headphones },
  { id: "streaming-voice", name: "Streaming & Mics", icon: Mic },
  { id: "consoles-handheld", name: "Consoles", icon: Gamepad2 },
  { id: "setup-aesthetic", name: "Setup & Desk", icon: Sparkles },
];

// Clean English Sort Options
export const SORT_OPTIONS = [
  { id: "record-low", label: "Record Low ⚡", icon: Zap },
  { id: "discount-desc", label: "Top Discounts 🔥", icon: Flame },
  { id: "newest-drop", label: "Recent Drops 📉", icon: TrendingDown },
  { id: "price-asc", label: "Price: Low to High 💵", icon: ArrowUpDownIcon },
  { id: "most-tracked", label: "Most Tracked 👁️", icon: Eye },
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

  // Compute live category item counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: PRODUCTS.length };
    for (const p of PRODUCTS) {
      counts[p.category] = (counts[p.category] || 0) + 1;
    }
    return counts;
  }, []);

  // Active stores with verified deals
  const stores = [
    { key: "all", name: "All Deals", count: PRODUCTS.length, color: "#00f0ff" },
    { key: "amazon", name: "Amazon Egypt", count: PRODUCTS.filter(p => p.marketplace === "amazon").length, color: "#ff9900" },
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
      <div className="cyber-card rounded-2xl p-2.5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 shadow-lg border border-white/[0.08]">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-cyan-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search deals by name, model, GPU or brand (e.g. RTX 4070, Ryzen, HyperX, ASUS)..."
            value={filters.query || ""}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full bg-[#070a12] border border-white/10 text-white rounded-xl pr-10 pl-4 py-2 text-xs focus:outline-hidden focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff]/30 placeholder-gray-500 font-medium transition-all"
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
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none text-xs">
          {stores.map((st) => {
            const isSelected = (!filters.marketplace && st.key === "all") || filters.marketplace === st.key;
            return (
              <button
                key={st.key}
                onClick={() => handleStoreSelect(st.key)}
                className={`px-3 py-1.5 rounded-full transition-all shrink-0 flex items-center gap-2 text-xs font-semibold border ${
                  isSelected
                    ? "bg-white/15 text-white shadow-md border-white/30 font-bold"
                    : "bg-[#070a12] text-slate-400 hover:text-white border-white/[0.06] hover:border-white/20"
                }`}
                style={{
                  borderColor: isSelected ? st.color : undefined,
                  boxShadow: isSelected ? `0 0 12px ${st.color}35` : undefined,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: st.color }} />
                <span className="font-sans">{st.name}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/10 text-slate-300 font-mono">
                  {st.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Sort Tabs & Controls */}
      <div className="cyber-card rounded-2xl p-2.5 flex flex-wrap items-center justify-between gap-2.5 border border-white/[0.08]">
        
        {/* Sort Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-xs">
          {SORT_OPTIONS.map((opt) => {
            const isSelected = (filters.sort || "record-low") === opt.id;
            const Icon = opt.icon;
            return (
              <button
                key={opt.id}
                onClick={() => handleSortSelect(opt.id)}
                className={`px-3 py-1.5 rounded-full transition-all shrink-0 flex items-center gap-1.5 font-medium border ${
                  isSelected
                    ? "bg-[#00f0ff] text-[#05070c] shadow-md shadow-[#00f0ff]/25 font-bold border-transparent"
                    : "bg-[#070a12] text-slate-400 hover:text-white border-white/[0.06] hover:border-white/20"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="font-sans">{opt.label}</span>
              </button>
            );
          })}
        </div>

        {/* View Mode & Filter Drawer Toggle */}
        <div className="flex items-center gap-2 mr-auto sm:mr-0">
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className={`px-3 py-1.5 rounded-full border text-xs font-semibold flex items-center gap-1.5 transition-all ${
              hasActiveFilters || drawerOpen
                ? "bg-[#00f0ff]/20 border-[#00f0ff] text-[#00f0ff] shadow-sm shadow-[#00f0ff]/20"
                : "bg-[#070a12] border-white/10 text-slate-400 hover:text-white hover:border-white/20"
            }`}
            title="فلاتر متقدمة"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="font-sans">Filters</span>
            {hasActiveFilters && <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />}
          </button>

          <div className="hidden sm:flex items-center bg-[#070a12] border border-white/10 p-0.5 rounded-full">
            <button
              onClick={() => onViewModeChange("grid")}
              className={`p-1.5 rounded-full transition-colors ${
                viewMode === "grid"
                  ? "bg-[#00f0ff] text-[#05070c] shadow-xs"
                  : "text-gray-400 hover:text-white"
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onViewModeChange("list")}
              className={`p-1.5 rounded-full transition-colors ${
                viewMode === "list"
                  ? "bg-[#00f0ff] text-[#05070c] shadow-xs"
                  : "text-gray-400 hover:text-white"
              }`}
              title="List View"
            >
              <List className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Nine Clean English Category Tags (Enhanced UI/UX) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1.5 pt-0.5 scrollbar-none">
        {CORE_CATEGORIES.map((cat) => {
          const isSelected = (!filters.category && cat.id === "all") || filters.category === cat.id;
          const Icon = cat.icon;
          const count = categoryCounts[cat.id] || 0;

          return (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs transition-all shrink-0 flex items-center gap-2 border font-sans ${
                isSelected
                  ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-400/60 shadow-[0_0_18px_rgba(0,240,255,0.22)] font-bold scale-[1.02]"
                  : "bg-white/[0.04] text-slate-300 hover:text-white border-white/[0.08] hover:border-white/25 hover:bg-white/[0.08] font-medium"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-cyan-400" : "text-slate-400"}`} />
              <span className="tracking-wide">{cat.name}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isSelected
                    ? "bg-cyan-400/20 text-cyan-200 font-bold"
                    : "bg-white/10 text-slate-400"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 4. Advanced Filter Drawer */}
      {drawerOpen && (
        <div className="cyber-card rounded-2xl p-4 space-y-4 animate-in fade-in duration-200 border border-white/10">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <h4 className="text-xs font-bold text-white flex items-center gap-1.5 font-sans">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#00f0ff]" />
              Advanced Filters
            </h4>
            {hasActiveFilters && (
              <button
                onClick={handleReset}
                className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 font-semibold font-sans"
              >
                <RotateCcw className="w-3 h-3" />
                Reset All
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            {/* Brand Filter */}
            <div>
              <label className="block text-slate-400 mb-1 font-medium font-sans">Brand / Manufacturer</label>
              <select
                value={filters.brand || ""}
                onChange={(e) =>
                  onFilterChange({
                    ...filters,
                    brand: e.target.value || undefined,
                    page: 1,
                  })
                }
                className="w-full bg-[#070a12] border border-white/10 text-white rounded-xl px-3 py-2 text-xs focus:outline-hidden focus:border-[#00f0ff] font-sans"
              >
                <option value="">All Brands ({brands.length})</option>
                {brands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Min Discount % */}
            <div>
              <label className="block text-slate-400 mb-1 font-medium font-sans">Minimum Discount %</label>
              <select
                value={filters.minDiscount || ""}
                onChange={(e) =>
                  onFilterChange({
                    ...filters,
                    minDiscount: e.target.value ? Number(e.target.value) : undefined,
                    page: 1,
                  })
                }
                className="w-full bg-[#070a12] border border-white/10 text-white rounded-xl px-3 py-2 text-xs focus:outline-hidden focus:border-[#00f0ff] font-sans"
              >
                <option value="">Any Discount</option>
                <option value="10">10%+ Off</option>
                <option value="20">20%+ Off (Significant Drop)</option>
                <option value="30">30%+ Off</option>
                <option value="50">50%+ Off (Record Low Deals)</option>
              </select>
            </div>

            {/* Min Price */}
            <div>
              <label className="block text-slate-400 mb-1 font-medium font-sans">Min Price (EGP)</label>
              <input
                type="number"
                placeholder="e.g. 500"
                value={filters.minPrice || ""}
                onChange={(e) =>
                  onFilterChange({
                    ...filters,
                    minPrice: e.target.value ? Number(e.target.value) : undefined,
                    page: 1,
                  })
                }
                className="w-full bg-[#070a12] border border-white/10 text-white rounded-xl px-3 py-2 text-xs focus:outline-hidden focus:border-[#00f0ff] font-mono"
              />
            </div>

            {/* Max Price */}
            <div>
              <label className="block text-slate-400 mb-1 font-medium font-sans">Max Price (EGP)</label>
              <input
                type="number"
                placeholder="e.g. 25000"
                value={filters.maxPrice || ""}
                onChange={(e) =>
                  onFilterChange({
                    ...filters,
                    maxPrice: e.target.value ? Number(e.target.value) : undefined,
                    page: 1,
                  })
                }
                className="w-full bg-[#070a12] border border-white/10 text-white rounded-xl px-3 py-2 text-xs focus:outline-hidden focus:border-[#00f0ff] font-mono"
              />
            </div>
          </div>

          {/* In-Stock Only Toggle */}
          <div className="pt-2 border-t border-white/5 flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300 font-semibold font-sans">
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
              <span>In-Stock Only</span>
            </label>
            <span className="text-[11px] text-slate-400 font-mono">
              Results: {totalResults} deals
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
