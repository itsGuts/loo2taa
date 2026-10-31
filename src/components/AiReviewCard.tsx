import React from "react";
import { AiReview } from "@/lib/types";
import { Sparkles, CheckCircle2, AlertTriangle, Cpu, Users, ShieldCheck, Terminal } from "lucide-react";

interface AiReviewCardProps {
  review: AiReview;
  brand: string;
}

export default function AiReviewCard({ review, brand }: AiReviewCardProps) {
  if (!review) return null;

  return (
    <div className="cyber-card rounded-3xl p-6 space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] flex items-center justify-center">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              تقرير فحص العتاد السيبراني
              <span className="text-[10px] text-[#00f0ff] font-mono tracking-widest">[AI_VERDICT]</span>
            </h3>
            <p className="text-xs text-[#94a3b8]">
              تحليل عميق لأداء الهاردوير وتجارب الجيمرز في السوق المصري
            </p>
          </div>
        </div>

        <span className="text-[11px] font-black px-3 py-1 rounded-full bg-[#ff007f]/20 text-[#ff007f] border border-[#ff007f]/40">
          فحص السيت أب ⚡
        </span>
      </div>

      {/* Pros & Cons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Pros */}
        <div className="bg-[#00ff9d]/5 border border-[#00ff9d]/20 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-sm font-black text-[#00ff9d]">
            <CheckCircle2 className="w-4 h-4 text-[#00ff9d]" />
            نقاط القوة والأداء التنافسي
          </div>
          <ul className="space-y-2.5 text-xs text-gray-300 leading-relaxed">
            {review.pros.map((pro, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#00ff9d] font-bold text-sm leading-none">›</span>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cons */}
        <div className="bg-[#ff007f]/5 border border-[#ff007f]/20 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-sm font-black text-[#ff007f]">
            <AlertTriangle className="w-4 h-4 text-[#ff007f]" />
            تنبيهات قبل الشراء
          </div>
          <ul className="space-y-2.5 text-xs text-gray-300 leading-relaxed">
            {review.cons.map((con, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#ff007f] font-bold text-sm leading-none">›</span>
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Brand Context */}
      {review.brand_summary && (
        <div className="bg-[#07090e] rounded-2xl p-4 space-y-2 border border-white/5">
          <div className="flex items-center gap-2 text-xs font-bold text-white">
            <Cpu className="w-4 h-4 text-[#00f0ff]" />
            مكانة البراند في مجتمع الجيمنج ({brand})
          </div>
          <p className="text-xs text-[#94a3b8] leading-relaxed">
            {review.brand_summary}
          </p>
        </div>
      )}

      {/* Egyptian Gamers Community Verdict */}
      {review.user_sentiment && (
        <div className="space-y-2 pt-1">
          <div className="flex items-center gap-2 text-xs font-bold text-white">
            <Users className="w-4 h-4 text-[#00ff9d]" />
            نبض مجتمع الجيمرز المصري على السيرفرات والجروبات
          </div>
          <p className="text-xs text-gray-300 leading-relaxed bg-[#07090e] p-4 rounded-xl border border-[#00f0ff]/20">
            {review.user_sentiment}
          </p>
        </div>
      )}

      {/* Verified Sources */}
      {review.sources && review.sources.length > 0 && (
        <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#94a3b8]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00ff9d]" />
            <span>المصادر:</span>
            {review.sources.map((s, idx) => (
              <span key={idx} className="bg-white/5 px-2 py-0.5 rounded text-gray-300 font-medium border border-white/5">
                {s.name} ({s.date})
              </span>
            ))}
          </div>

          <span className="text-[10px] text-gray-500 font-mono">
            VERIFIED_GAMING_INDEX_v2.6
          </span>
        </div>
      )}
    </div>
  );
}
