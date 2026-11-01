"use client";

import React, { useState } from "react";
import { Product } from "@/lib/types";
import {
  Bell,
  X,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  TrendingDown,
  ShieldCheck
} from "lucide-react";

interface PriceAlertModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function PriceAlertModal({
  product,
  isOpen,
  onClose,
}: PriceAlertModalProps) {
  const currentPrice = Number(product.price) || 0;
  const defaultTarget = Math.round(currentPrice * 0.9); // 10% below current price

  const [targetPrice, setTargetPrice] = useState<number>(defaultTarget);
  const [channel, setChannel] = useState<"email" | "telegram">("email");
  const [email, setEmail] = useState("");
  const [telegramId, setTelegramId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const handlePresetSelect = (discountPct: number) => {
    setTargetPrice(Math.round(currentPrice * (1 - discountPct / 100)));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (targetPrice <= 0 || targetPrice >= currentPrice * 1.5) {
      setError("من فضلك حدد سعراً مستهدفاً منطقياً");
      return;
    }

    if (channel === "email" && (!email.trim() || !email.includes("@"))) {
      setError("من فضلك أدخل بريداً إلكترونياً صحيحاً");
      return;
    }

    if (channel === "telegram" && !telegramId.trim()) {
      setError("من فضلك أدخل معرف تليجرام أو Chat ID");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/alerts/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          asin: product.asin,
          productId: product.id,
          targetPrice,
          email: channel === "email" ? email.trim() : null,
          telegramChatId: channel === "telegram" ? telegramId.trim() : null,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.error || "تعذر تفعيل التنبيه، يرجى المحاولة مرة أخرى.");
      } else {
        setSuccess(data.message || "تم تفعيل التنبيه بنجاح!");
      }
    } catch {
      setError("حدث خطأ أثناء الاتصال بالخادم، يرجى التحقق من اتصالك.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg cyber-card rounded-3xl p-6 sm:p-7 bg-[#0b101c] border border-[#00f0ff]/30 shadow-2xl space-y-5">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff]">
            <Bell className="w-5 h-5 animate-bounce" />
          </div>
          <div>
            <h3 className="text-base font-black text-white">تفعيل تنبيه هبوط السعر</h3>
            <p className="text-xs text-gray-400">سنرسل لك إشعاراً فور وصول المنتج للسعر الذي تحدده</p>
          </div>
        </div>

        {/* Product Micro Preview */}
        <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#060810] border border-white/5">
          <div className="w-12 h-12 rounded-xl bg-[#070a12] p-1 flex items-center justify-center shrink-0 border border-white/5">
            <img src={product.image} alt={product.display_title} className="max-h-full max-w-full object-contain" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-bold text-white line-clamp-1">{product.display_title}</h4>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-sm font-black text-[#00f0ff]">{currentPrice.toLocaleString("ar-EG")} ج.م</span>
              <span className="text-[10px] text-gray-400">السعر الحالي الآن</span>
            </div>
          </div>
        </div>

        {/* Success State */}
        {success ? (
          <div className="p-6 rounded-2xl bg-[#00ff9d]/10 border border-[#00ff9d]/30 text-center space-y-3 animate-in zoom-in-95">
            <CheckCircle2 className="w-10 h-10 text-[#00ff9d] mx-auto" />
            <h4 className="text-sm font-black text-white">تم تفعيل التنبيه بنجاح! ⚡</h4>
            <p className="text-xs text-gray-300 leading-relaxed">{success}</p>
            <p className="text-[11px] text-gray-400">
              يمكنك إلغاء الاشتراك في أي وقت بنقرة واحدة عبر الرابط المرفق بالإشعار.
            </p>
            <button
              onClick={onClose}
              className="mt-2 px-5 py-2 rounded-xl bg-[#00ff9d] text-black font-black text-xs hover:bg-[#00ff9d]/90 transition-all"
            >
              تم، شكراً
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {/* Target Price Picker */}
            <div className="space-y-2">
              <label className="block font-bold text-gray-300">
                السعر المستهدف المطلوب للتنبيه (جنيه مصري):
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={targetPrice}
                  onChange={(e) => setTargetPrice(Number(e.target.value))}
                  className="w-full bg-[#050811] border border-white/10 focus:border-[#00f0ff] rounded-2xl py-3 px-4 text-sm font-black text-white placeholder-gray-500 focus:outline-hidden"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-[#00f0ff]">ج.م</span>
              </div>

              {/* Preset Quick Chips */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[11px] text-gray-400">اقتراحات سريعة:</span>
                <button
                  type="button"
                  onClick={() => handlePresetSelect(5)}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-[#00f0ff]/10 hover:text-[#00f0ff] border border-white/5 text-[10px] font-bold transition-colors"
                >
                  خصم 5%- ({Math.round(currentPrice * 0.95).toLocaleString("ar-EG")} ج.م)
                </button>
                <button
                  type="button"
                  onClick={() => handlePresetSelect(10)}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-[#00f0ff]/10 hover:text-[#00f0ff] border border-white/5 text-[10px] font-bold transition-colors"
                >
                  خصم 10%- ({Math.round(currentPrice * 0.9).toLocaleString("ar-EG")} ج.م)
                </button>
                <button
                  type="button"
                  onClick={() => handlePresetSelect(20)}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-[#00ff9d]/10 hover:text-[#00ff9d] border border-white/5 text-[10px] font-bold transition-colors"
                >
                  خصم 20%- ({Math.round(currentPrice * 0.8).toLocaleString("ar-EG")} ج.م)
                </button>
              </div>
            </div>

            {/* Notification Channel Selection */}
            <div className="space-y-2">
              <label className="block font-bold text-gray-300">طريقة استلام التنبيه:</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setChannel("email")}
                  className={`py-2.5 px-3 rounded-xl border flex items-center justify-center gap-2 font-bold transition-all ${
                    channel === "email"
                      ? "bg-[#00f0ff]/15 border-[#00f0ff] text-[#00f0ff]"
                      : "bg-[#070a12] border-white/5 text-gray-400 hover:text-white"
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span>البريد الإلكتروني</span>
                </button>

                <button
                  type="button"
                  onClick={() => setChannel("telegram")}
                  className={`py-2.5 px-3 rounded-xl border flex items-center justify-center gap-2 font-bold transition-all ${
                    channel === "telegram"
                      ? "bg-[#0088cc]/20 border-[#0088cc] text-[#00f0ff]"
                      : "bg-[#070a12] border-white/5 text-gray-400 hover:text-white"
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>تليجرام (Telegram)</span>
                </button>
              </div>
            </div>

            {/* Channel Input */}
            {channel === "email" ? (
              <div className="space-y-1">
                <label className="block text-[11px] text-gray-400">بريدك الإلكتروني:</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#050811] border border-white/10 focus:border-[#00f0ff] rounded-2xl py-2.5 px-4 text-xs text-white placeholder-gray-500 focus:outline-hidden"
                  dir="ltr"
                />
              </div>
            ) : (
              <div className="space-y-1">
                <label className="block text-[11px] text-gray-400">معرف تليجرام أو Chat ID:</label>
                <input
                  type="text"
                  placeholder="@yourusername أو 12345678"
                  value={telegramId}
                  onChange={(e) => setTelegramId(e.target.value)}
                  className="w-full bg-[#050811] border border-white/10 focus:border-[#00f0ff] rounded-2xl py-2.5 px-4 text-xs text-white placeholder-gray-500 focus:outline-hidden"
                  dir="ltr"
                />
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="btn-cyber-primary w-full py-3.5 px-4 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>جاري حفظ التنبيه...</span>
                  </>
                ) : (
                  <>
                    <Bell className="w-4 h-4" />
                    <span>تفعيل التنبيه المجاني 🔔</span>
                  </>
                )}
              </button>
              <div className="text-[10px] text-gray-500 text-center pt-2 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#00ff9d]" />
                <span>بدون إعلانات مزعجة • يمكنك إلغاء الاشتراك في أي وقت بنقرة واحدة.</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
