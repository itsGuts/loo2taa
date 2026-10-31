"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Crosshair,
  Search,
  Heart,
  ExternalLink,
  Menu,
  X,
  TrendingDown,
  Gamepad2,
  Cpu,
  Send,
  Zap,
  Radio
} from "lucide-react";
import { useFavorites } from "@/lib/favorites";

export default function Navbar() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { count, mounted } = useFavorites();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/catalog?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#07090e]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Cyberpunk Egyptian Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00f0ff] to-[#ff007f] p-[1px] shadow-lg shadow-[#00f0ff]/20 group-hover:shadow-[#00f0ff]/40 transition-all">
              <div className="w-full h-full bg-[#07090e] rounded-[11px] flex items-center justify-center text-[#00f0ff] group-hover:text-white transition-colors">
                <Gamepad2 className="w-6 h-6 -rotate-6" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black text-white tracking-tight flex items-center">
                  لقطة
                  <span className="text-[#00f0ff] text-xl mr-0.5">.</span>
                </span>
                <span className="text-[10px] font-black px-1.5 py-0.5 rounded-md bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 tracking-wider">
                  LOO2TAA // CYBER
                </span>
              </div>
              <span className="text-[11px] text-[#94a3b8] font-medium flex items-center gap-1.5 -mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-ping" />
                رادار صفقات الجيمرز في مصر
              </span>
            </div>
          </Link>

          {/* Desktop Cyber Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex flex-1 max-w-md relative"
          >
            <input
              type="text"
              placeholder="ابحث: كارت شاشة، كيبورد، PS5، هيدست، ماوس..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0d121f] text-white placeholder-gray-500 border border-white/10 rounded-xl py-2.5 pr-10 pl-10 text-xs focus:outline-hidden focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff]/50 transition-all shadow-inner"
            />
            <Search className="w-4 h-4 text-[#00f0ff] absolute right-3.5 top-3 pointer-events-none" />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute left-3 top-2 text-xs text-gray-500 hover:text-white px-1 py-0.5"
              >
                ✕
              </button>
            )}
          </form>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold">
            <Link
              href="/"
              className="text-white hover:text-[#00f0ff] transition-colors flex items-center gap-1"
            >
              <Zap className="w-3.5 h-3.5 text-[#00f0ff]" />
              الرئيسية
            </Link>
            <Link
              href="/catalog"
              className="text-[#94a3b8] hover:text-[#00f0ff] transition-colors flex items-center gap-1"
            >
              <Cpu className="w-3.5 h-3.5 text-[#ff007f]" />
              كنز الهاردوير
            </Link>
            <Link
              href="/amazon-deals"
              className="text-[#94a3b8] hover:text-[#00f0ff] transition-colors flex items-center gap-1"
            >
              <TrendingDown className="w-3.5 h-3.5 text-[#00ff9d]" />
              عروض أمازون مصر
            </Link>
            <Link
              href="/about"
              className="text-[#94a3b8] hover:text-[#00f0ff] transition-colors flex items-center gap-1"
            >
              <Radio className="w-3.5 h-3.5 text-[#ffb800]" />
              عن الرادار
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Telegram Gamer Squad Pill */}
            <a
              href="https://t.me/loo2taa"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#0088cc]/20 to-[#00f0ff]/10 hover:from-[#0088cc]/30 hover:to-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/30 text-xs font-bold transition-all shadow-xs"
              title="انضم لقناة تليجرام صفقات الجيمنج والبي سي في مصر"
            >
              <Send className="w-3.5 h-3.5 text-[#0088cc]" />
              <span>قناة الصفقات</span>
            </a>

            {/* Wishlist / Favorites */}
            <Link
              href="/favorites"
              className="relative p-2.5 rounded-xl bg-[#0d121f] border border-white/10 text-white hover:text-[#ff007f] hover:border-[#ff007f]/50 transition-all"
              title="عتادك المحفوظ"
            >
              <Heart className="w-4 h-4" />
              {mounted && count > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#ff007f] text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-lg shadow-[#ff007f]/50">
                  {count}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 lg:hidden rounded-xl bg-[#0d121f] border border-white/10 text-white hover:text-[#00f0ff]"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 space-y-3">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="ابحث عن هاردوير أو كونسول..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0d121f] border border-white/10 rounded-xl py-2 pr-10 pl-4 text-xs text-white"
              />
              <Search className="w-4 h-4 text-[#00f0ff] absolute right-3 top-2.5" />
            </form>

            <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-bold">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-[#0d121f] text-white hover:text-[#00f0ff] border border-white/5"
              >
                الرئيسية
              </Link>
              <Link
                href="/catalog"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-[#0d121f] text-white hover:text-[#00f0ff] border border-white/5"
              >
                كنز الهاردوير
              </Link>
              <Link
                href="/amazon-deals"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-[#0d121f] text-white hover:text-[#00f0ff] border border-white/5"
              >
                عروض أمازون
              </Link>
              <Link
                href="/favorites"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-[#0d121f] text-white hover:text-[#ff007f] border border-white/5"
              >
                المفضلة ({mounted ? count : 0})
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="col-span-2 p-3 rounded-xl bg-[#0d121f] text-white hover:text-[#00f0ff] border border-white/5 text-center"
              >
                عن الرادار وكيف نكشف الأسعار الوهمية
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
