"use client";

import React from "react";
import Link from "next/link";
import { useFavorites } from "@/lib/favorites";
import { PRODUCTS } from "@/lib/loo2taa-data";
import ProductCard from "@/components/ProductCard";
import { Heart, Trash2, Gamepad2, Cpu } from "lucide-react";

export default function FavoritesPage() {
  const { favorites, mounted } = useFavorites();

  const favoriteProducts = PRODUCTS.filter((p) => favorites.includes(p.id));

  const handleClearAll = () => {
    if (confirm("هل ترغب في تفريغ قائمة العتاد المحفوظ؟")) {
      localStorage.removeItem("loo2taa_favorites");
      window.dispatchEvent(new Event("loo2taa_fav_change"));
    }
  };

  if (!mounted) {
    return (
      <div className="p-12 text-center text-xs text-gray-500 font-mono">
        SYS_LOADING_GEAR...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="cyber-card rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
            <Heart className="w-6 h-6 text-[#ff007f] fill-current" />
            العتاد وصفقات السيت أب المحفوظة
          </h1>
          <p className="text-xs sm:text-sm text-[#94a3b8]">
            قائمة أمنياتك الخاصة لمتابعة تغيرات أسعار القطع التي تخطط لشرائها
          </p>
        </div>

        {favoriteProducts.length > 0 && (
          <button
            onClick={handleClearAll}
            className="text-xs font-bold text-[#ff007f] hover:text-white flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#ff007f]/40 hover:bg-[#ff007f]/20 transition-colors self-start sm:self-auto"
          >
            <Trash2 className="w-4 h-4" />
            مسح القائمة
          </button>
        )}
      </div>

      {/* Grid or Empty */}
      {favoriteProducts.length === 0 ? (
        <div className="cyber-card rounded-3xl p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#ff007f]/10 text-[#ff007f] flex items-center justify-center mx-auto border border-[#ff007f]/30">
            <Gamepad2 className="w-8 h-8" />
          </div>
          <h2 className="text-lg font-bold text-white">
            لم تقم بحفظ أي عتاد بعد
          </h2>
          <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
            اضغط على علامة القلب في أي كارت شاشة، كيبورد، أو شاشة لإضافته هنا ومتابعة سعره وتنزيلاته فوراً.
          </p>
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#00a3ff] text-[#07090e] font-black text-xs hover:shadow-lg hover:shadow-[#00f0ff]/30 transition-all"
          >
            <Cpu className="w-4 h-4" />
            استكشف صفقات الجيمرز الآن
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {favoriteProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
