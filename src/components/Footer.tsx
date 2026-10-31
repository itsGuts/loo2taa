import React from "react";
import Link from "next/link";
import { Gamepad2, Send, ShieldCheck, LineChart, Radio, Crosshair } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#07090e] border-t border-white/10 pt-12 pb-8 mt-16 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          
          {/* Brand & Mission */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00f0ff] to-[#ff007f] p-[1px]">
                <div className="w-full h-full bg-[#07090e] rounded-[11px] flex items-center justify-center text-[#00f0ff]">
                  <Gamepad2 className="w-5 h-5 -rotate-6" />
                </div>
              </div>
              <span className="text-xl font-black text-white">
                لقطة <span className="text-xs text-[#00f0ff] font-mono">[CYBER_RADAR]</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              المنصة السيبرانية الأولى في مصر المتخصصة في تتبع أسعار عتاد الجيمنج، تجميعات الـ PC، أجهزة الكونسول وشاشات الألعاب ومعدات الاستريمرز، لنساعدك تشتري بأقل سعر حقيقي.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://t.me/loo2taa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0d121f] border border-white/10 text-[#00f0ff] flex items-center justify-center hover:border-[#00f0ff] hover:bg-[#00f0ff]/10 transition-colors"
                title="تليجرام الجيمرز"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white flex items-center gap-1.5">
              <Crosshair className="w-4 h-4 text-[#00f0ff]" />
              رادار الصفقات
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#00f0ff] transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/catalog?sort=record-low" className="hover:text-[#00f0ff] transition-colors">
                  أقل أسعار الهاردوير تاريخياً
                </Link>
              </li>
              <li>
                <Link href="/catalog?sort=price-changed" className="hover:text-[#00f0ff] transition-colors">
                  أحدث نزول في الأسعار
                </Link>
              </li>
              <li>
                <Link href="/amazon-deals" className="hover:text-[#00f0ff] transition-colors">
                  عروض أمازون مصر الرسمية
                </Link>
              </li>
              <li>
                <Link href="/favorites" className="hover:text-[#ff007f] transition-colors">
                  العتاد المحفوظ
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white flex items-center gap-1.5">
              <Gamepad2 className="w-4 h-4 text-[#ff007f]" />
              أقسام الجيمنج
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/catalog?category=pc-hardware" className="hover:text-[#00f0ff] transition-colors">
                  كروت شاشة وهاردوير PC
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=monitors" className="hover:text-[#00f0ff] transition-colors">
                  شاشات ألعاب 144Hz و 165Hz
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=peripherals" className="hover:text-[#00f0ff] transition-colors">
                  ماوسات وكيبوردات ميكانيكال
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=audio-headsets" className="hover:text-[#00f0ff] transition-colors">
                  سماعات وهيدست محيطي
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=consoles" className="hover:text-[#00f0ff] transition-colors">
                  بلايستيشن 5 وأذرع تحكم
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & Transparency */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white flex items-center gap-1.5">
              <Radio className="w-4 h-4 text-[#00ff9d]" />
              مصداقية الرادار
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00ff9d] shrink-0 mt-0.5" />
                <span>رصد آلي محايد لأسعار المتاجر والتجار المعتمدين.</span>
              </div>
              <div className="flex items-start gap-2">
                <LineChart className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                <span>سجل أسعار تاريخي لآخر ٩٠ يوم لمنع العروض الوهمية.</span>
              </div>
            </div>
            <Link
              href="/about"
              className="inline-block text-xs font-black text-[#00f0ff] hover:underline pt-1"
            >
              اقرأ بروتوكول فحص الأسعار السيبراني ↗
            </Link>
          </div>
        </div>

        {/* Affiliate Disclaimer & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500 gap-4 text-center md:text-right font-medium">
          <p>
            تنويه الشفافية: منصة «لقطة» مستقلة تماماً وتهدف لخدمة مجتمع الجيمرز في مصر. قد نحصل على عمولة تسويقية رمزية عند الشراء من خلال روابطنا دون أي تكلفة إضافية عليك إطلاقاً.
          </p>
          <p className="shrink-0 font-mono text-gray-400">
            © 2026 LOO2TAA // EGYPTIAN GAMING RADAR. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
