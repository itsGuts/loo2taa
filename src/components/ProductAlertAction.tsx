"use client";

import React, { useState } from "react";
import { Bell } from "lucide-react";
import { Product } from "@/lib/types";
import PriceAlertModal from "./PriceAlertModal";

export default function ProductAlertAction({ product }: { product: Product }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full py-3 px-4 rounded-2xl bg-[#00ff9d]/10 hover:bg-[#00ff9d]/20 border border-[#00ff9d]/30 text-[#00ff9d] text-xs font-black transition-all flex items-center justify-center gap-2 shadow-sm"
      >
        <Bell className="w-4 h-4" />
        <span>نبهني عند انخفاض السعر 🔔</span>
      </button>

      {isOpen && (
        <PriceAlertModal
          product={product}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
