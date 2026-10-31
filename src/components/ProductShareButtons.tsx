"use client";

import React, { useState } from "react";
import { Product } from "@/lib/types";
import { getWhatsAppShareUrl, getTelegramPost } from "@/lib/sharing";
import { MessageCircle, Send, Check, Copy } from "lucide-react";

interface ProductShareButtonsProps {
  product: Product;
}

export default function ProductShareButtons({ product }: ProductShareButtonsProps) {
  const [tgCopied, setTgCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const handleWhatsApp = () => {
    window.open(getWhatsAppShareUrl(product), "_blank");
  };

  const handleTelegramCopy = async () => {
    const post = getTelegramPost(product);
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(post);
      setTgCopied(true);
      setTimeout(() => setTgCopied(false), 2500);
    }
  };

  const handleCopyLink = async () => {
    const shareUrl = `${window.location.origin}/products/${product.asin || product.id}`;
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(shareUrl);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 pt-2">
      <button
        onClick={handleWhatsApp}
        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25d366]/15 hover:bg-[#25d366]/25 border border-[#25d366]/30 text-[#25d366] text-xs font-bold transition-all"
        title="مشاركة الصفقة عبر واتساب"
      >
        <MessageCircle className="w-4 h-4" />
        <span>شير للصحاب على واتساب</span>
      </button>

      <button
        onClick={handleTelegramCopy}
        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0088cc]/15 hover:bg-[#0088cc]/25 border border-[#0088cc]/30 text-[#00f0ff] text-xs font-bold transition-all"
        title="نسخ بوست تليجرام جاهز للإرسال"
      >
        {tgCopied ? <Check className="w-4 h-4 text-[#00ff9d]" /> : <Send className="w-4 h-4" />}
        <span>{tgCopied ? "تم نسخ البوست! ✅" : "نسخ بوست تليجرام"}</span>
      </button>

      <button
        onClick={handleCopyLink}
        className="p-2.5 rounded-xl bg-[#0b101c] hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all text-xs flex items-center gap-1.5"
        title="نسخ رابط الصفحة"
      >
        {linkCopied ? <Check className="w-4 h-4 text-[#00ff9d]" /> : <Copy className="w-4 h-4" />}
        <span className="hidden sm:inline">{linkCopied ? "تم النسخ" : "نسخ الرابط"}</span>
      </button>
    </div>
  );
}
