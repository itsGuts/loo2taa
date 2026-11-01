"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  Heart,
  Menu,
  X,
  TrendingDown,
  Gamepad2,
  Cpu,
  Send,
  Zap
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
    <header className="sticky top-0 z-50 bg-[#05070c]/85 backdrop-blur-xl border-b border-white/[0.07] shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00f0ff] to-[#ff007f] p-[1px] shadow-lg shadow-[#00f0ff]/15 group-hover:shadow-[#00f0ff]/30 transition-all">
              <div className="w-full h-full bg-[#070a12] rounded-[11px] flex items-center justify-center text-[#00f0ff] group-hover:text-white transition-colors">
                <Gamepad2 className="w-5 h-5 -rotate-6" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-white tracking-tight flex items-center gap-1 font-mono">
                LO2TAA
                <span className="text-[11px] px-1.5 py-0.2 rounded bg-[#00f0ff]/10 text-[#00f0ff] font-sans border border-[#00f0ff]/30">لقطة</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
              </span>
              <span className="text-[10px] text-[#94a3b8] font-semibold -mt-0.5 tracking-wider">
                رادار صفقات الجيمنج
              </span>
            </div>
          </Link>

          {/* Desktop Clean Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex flex-1 max-w-md relative"
          >
            <input
              type="text"
              placeholder="ابحث عن كارت شاشة، كيبورد، PS5، هيدست..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0b101c] text-white placeholder-gray-400 border border-white/10 rounded-xl py-2 pr-10 pl-10 text-xs focus:outline-hidden focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff]/40 transition-all"
            />
            <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-2.5 pointer-events-none" />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute left-3 top-2 text-xs text-gray-400 hover:text-white px-1"
              >
                ✕
              </button>
            )}
          </form>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold">
            <Link
              href="/"
              className="text-white hover:text-[#00f0ff] transition-colors flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 text-[#00f0ff]" />
              الرئيسية
            </Link>
            <Link
              href="/catalog"
              className="text-[#94a3b8] hover:text-[#00f0ff] transition-colors flex items-center gap-1.5"
            >
              <Cpu className="w-3.5 h-3.5 text-[#ff007f]" />
              كل الصفقات
            </Link>
            <Link
              href="/amazon-deals"
              className="text-[#94a3b8] hover:text-[#00f0ff] transition-colors flex items-center gap-1.5"
            >
              <TrendingDown className="w-3.5 h-3.5 text-[#00ff9d]" />
              عروض أمازون مصر
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5">
            {/* Telegram Channel Pill */}
            <a
              href="https://t.me/lo2taa"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0088cc]/15 hover:bg-[#0088cc]/25 text-[#00f0ff] border border-[#0088cc]/30 text-xs font-bold transition-all"
              title="تليجرام الصفقات"
            >
              <Send className="w-3.5 h-3.5 text-[#0088cc]" />
              <span>تليجرام</span>
            </a>

            {/* Favorites Button */}
            <Link
              href="/favorites"
              className="relative p-2 rounded-xl bg-[#0b101c] border border-white/10 text-white hover:text-[#ff007f] hover:border-[#ff007f]/40 transition-all"
              title="المفضلة"
            >
              <Heart className="w-4 h-4" />
              {mounted && count > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#ff007f] text-white text-[9px] font-black rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 lg:hidden rounded-xl bg-[#0b101c] border border-white/10 text-white hover:text-[#00f0ff]"
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
                placeholder="ابحث عن منتج..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0b101c] border border-white/10 rounded-xl py-2 pr-10 pl-4 text-xs text-white"
              />
              <Search className="w-4 h-4 text-gray-400 absolute right-3 top-2.5" />
            </form>

            <div className="grid grid-cols-2 gap-2 pt-1 text-xs font-bold">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-[#0b101c] text-white hover:text-[#00f0ff] border border-white/5"
              >
                الرئيسية
              </Link>
              <Link
                href="/catalog"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-[#0b101c] text-white hover:text-[#00f0ff] border border-white/5"
              >
                كل الصفقات
              </Link>
              <Link
                href="/amazon-deals"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-[#0b101c] text-white hover:text-[#00f0ff] border border-white/5"
              >
                عروض أمازون
              </Link>
              <Link
                href="/favorites"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-[#0b101c] text-white hover:text-[#ff007f] border border-white/5"
              >
                المفضلة ({mounted ? count : 0})
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
