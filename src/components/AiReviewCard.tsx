import React from "react";
import { AiReview } from "@/lib/types";
import { CheckCircle2, AlertTriangle, Cpu, Users } from "lucide-react";

interface AiReviewCardProps {
  review: AiReview;
  brand: string;
}

export default function AiReviewCard({ review, brand }: AiReviewCardProps) {
  if (!review) return null;

  return (
    <div className="cyber-card rounded-3xl p-6 space-y-5">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#00f0ff]/10 text-[#00f0ff] flex items-center justify-center">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-black text-white">تقييم العتاد والأداء</h3>
            <p className="text-xs text-[#94a3b8]">
              تحليل شامل لملاءمة المنتج لظروف الاستخدام والألعاب
            </p>
          </div>
        </div>

        <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20">
          مراجعة ذكية ⚡
        </span>
      </div>

      {/* Pros & Cons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        
        {/* Pros */}
        <div className="bg-[#00ff9d]/5 border border-[#00ff9d]/15 rounded-2xl p-4 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#00ff9d]">
            <CheckCircle2 className="w-4 h-4" />
            المميزات
          </div>
          <ul className="space-y-2 text-xs text-gray-300 leading-relaxed">
            {review.pros.map((pro, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="text-[#00ff9d] font-bold">•</span>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cons */}
        <div className="bg-[#ff007f]/5 border border-[#ff007f]/15 rounded-2xl p-4 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#ff007f]">
            <AlertTriangle className="w-4 h-4" />
            نقاط يجب الانتباه لها
          </div>
          <ul className="space-y-2 text-xs text-gray-300 leading-relaxed">
            {review.cons.map((con, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="text-[#ff007f] font-bold">•</span>
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Community Verdict */}
      {review.user_sentiment && (
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-gray-300">
            <Users className="w-3.5 h-3.5 text-[#00ff9d]" />
            ملخص تجارب المشترين في مصر
          </div>
          <p className="text-xs text-gray-300 leading-relaxed bg-[#05070c] p-3.5 rounded-xl border border-white/5">
            {review.user_sentiment}
          </p>
        </div>
      )}
    </div>
  );
}
