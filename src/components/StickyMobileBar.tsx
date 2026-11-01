"use client";

import React, { useEffect, useState } from "react";
import { Product, MarketplaceSetting } from "@/lib/types";
import { ArrowUpRight, Zap } from "lucide-react";

interface StickyMobileBarProps {
  product: Product;
  store: MarketplaceSetting;
}

export default function StickyMobileBar({ product, store }: StickyMobileBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar once user scrolls down past 250px
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const formattedPrice = Number(product.price).toLocaleString("ar-EG");

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#070a12]/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] animate-in slide-in-from-bottom duration-200">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-black text-white">{formattedPrice}</span>
            <span className="text-xs font-bold text-[#00f0ff]">ج.م</span>
          </div>
          {product.discount_percent > 0 && (
            <span className="text-[10px] font-bold text-[#00ff9d] flex items-center gap-1">
              <Zap className="w-2.5 h-2.5" />
              وفرت {Number(product.savings).toLocaleString("ar-EG")} ج.م (-{product.discount_percent}%)
            </span>
          )}
        </div>

        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cyber-primary py-2.5 px-5 rounded-xl text-xs font-black flex items-center gap-1.5 shrink-0 shadow-lg"
        >
          <span>اقتنص اللقطة ⚡</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
