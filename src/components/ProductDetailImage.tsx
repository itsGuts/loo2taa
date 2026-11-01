"use client";

import React, { useState } from "react";
import { Zap } from "lucide-react";

interface ProductDetailImageProps {
  src: string;
  alt: string;
  brand: string;
}

export default function ProductDetailImage({ src, alt, brand }: ProductDetailImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full h-64 sm:h-72 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-gradient-to-br from-[#0c1222] to-[#162035] border border-cyan-500/20 z-10">
        <Zap className="w-12 h-12 text-[#00f0ff] mb-2 opacity-80 animate-pulse" />
        <span className="text-base font-bold text-gray-200">{brand}</span>
        <span className="text-xs text-cyan-400 font-mono tracking-widest mt-1">LO2TAA CYBER RADAR</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className="max-h-72 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-md z-10"
    />
  );
}
