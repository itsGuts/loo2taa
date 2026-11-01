"use client";

import React, { useState, useEffect } from "react";
import { Flame, Skull, CheckCircle2 } from "lucide-react";

interface CommunityVoteProps {
  productId: string;
}

export default function CommunityVote({ productId }: CommunityVoteProps) {
  const [vote, setVote] = useState<"steal" | "skip" | null>(null);
  const [stealCount, setStealCount] = useState(24);
  const [skipCount, setSkipCount] = useState(3);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Generate deterministic baseline count based on product id
    let hash = 0;
    for (let i = 0; i < productId.length; i++) {
      hash = (hash << 5) - hash + productId.charCodeAt(i);
      hash |= 0;
    }
    const baseSteal = Math.abs(hash % 35) + 15; // 15 to 50
    const baseSkip = Math.abs((hash >> 3) % 6) + 1;  // 1 to 7

    const savedVote = localStorage.getItem(`lo2taa_vote_${productId}`);
    if (savedVote === "steal") {
      setVote("steal");
      setStealCount(baseSteal + 1);
      setSkipCount(baseSkip);
    } else if (savedVote === "skip") {
      setVote("skip");
      setStealCount(baseSteal);
      setSkipCount(baseSkip + 1);
    } else {
      setStealCount(baseSteal);
      setSkipCount(baseSkip);
    }
  }, [productId]);

  const handleVote = (type: "steal" | "skip") => {
    if (!mounted || vote) return;
    setVote(type);
    localStorage.setItem(`lo2taa_vote_${productId}`, type);
    if (type === "steal") {
      setStealCount((prev) => prev + 1);
    } else {
      setSkipCount((prev) => prev + 1);
    }
  };

  const total = stealCount + skipCount;
  const stealPercentage = Math.round((stealCount / total) * 100);

  return (
    <div className="bg-[#05070c]/80 rounded-2xl p-4 border border-white/5 space-y-3">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 font-bold text-white">
          <Flame className="w-4 h-4 text-[#ffb703]" />
          <span>تقييم مجتمع الجيمرز (Heat Check)</span>
        </div>
        <span className="text-[11px] text-[#00ff9d] font-bold">
          {stealPercentage}% يرونها لقطة حقيقية 🔥
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden flex">
        <div
          className="bg-gradient-to-r from-[#ff007f] via-[#ffb703] to-[#00ff9d] h-full transition-all duration-500"
          style={{ width: `${stealPercentage}%` }}
        />
        <div
          className="bg-gray-700 h-full transition-all duration-500"
          style={{ width: `${100 - stealPercentage}%` }}
        />
      </div>

      {/* Vote buttons */}
      <div className="grid grid-cols-2 gap-2.5 pt-1">
        <button
          onClick={() => handleVote("steal")}
          disabled={!!vote}
          className={`py-2 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-all ${
            vote === "steal"
              ? "bg-[#00ff9d]/20 border border-[#00ff9d] text-[#00ff9d] shadow-[0_0_15px_rgba(0,255,157,0.3)]"
              : vote
              ? "opacity-50 bg-white/5 text-gray-400 border border-white/5"
              : "bg-[#00ff9d]/10 hover:bg-[#00ff9d]/20 text-[#00ff9d] border border-[#00ff9d]/30 hover:border-[#00ff9d]"
          }`}
        >
          <Flame className="w-3.5 h-3.5 text-[#ffb703]" />
          <span>لقطة تستاهل ({stealCount})</span>
          {vote === "steal" && <CheckCircle2 className="w-3 h-3 text-[#00ff9d]" />}
        </button>

        <button
          onClick={() => handleVote("skip")}
          disabled={!!vote}
          className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
            vote === "skip"
              ? "bg-gray-800 border border-gray-600 text-gray-200"
              : vote
              ? "opacity-50 bg-white/5 text-gray-400 border border-white/5"
              : "bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5"
          }`}
        >
          <Skull className="w-3.5 h-3.5 text-gray-400" />
          <span>سعر عادي ({skipCount})</span>
          {vote === "skip" && <CheckCircle2 className="w-3 h-3 text-gray-300" />}
        </button>
      </div>
    </div>
  );
}
