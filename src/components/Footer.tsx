import React from "react";
import Link from "next/link";
import { Gamepad2, Send, ShieldCheck, LineChart, Flame, Store, Search, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05070c] border-t border-white/[0.06] pt-10 pb-8 mt-16 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-white/[0.06]">
          
          {/* Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#00f0ff] to-[#ff007f] p-[1px]">
                <div className="w-full h-full bg-[#070a12] rounded-[11px] flex items-center justify-center text-[#00f0ff]">
                  <Gamepad2 className="w-4 h-4" />
                </div>
              </div>
              <span className="text-lg font-black text-white flex items-center gap-2">
                <span className="font-mono text-[#00f0ff]">LOO2TAA</span>
                <span className="text-xs text-gray-400 font-bold">لُقطة</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              منصة متخصصة في تتبع ورصد هبوط أسعار هاردوير وعتاد الكمبيوتر والجيمنج على أمازون مصر. نكشف الخصومات الوهمية ونحسب السعر الحقيقي مقارنة بسجل الـ 90 يوماً والقاع التاريخي.
            </p>
            <div className="pt-1">
              <a
                href="https://t.me/lo2taa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0b101c] border border-white/10 text-xs font-bold text-[#00f0ff] hover:border-[#00f0ff]/40 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>انضم لقناة تليجرام (@lo2taa)</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">روابط سريعة والصفقات</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#00f0ff] transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/catalog?drop=record_low" className="hover:text-[#00f0ff] transition-colors">
                  انخفاض تاريخي قياسي ⚡
                </Link>
              </li>
              <li>
                <Link href="/catalog?sort=discount-desc" className="hover:text-[#ff9900] transition-colors flex items-center gap-1">
                  <Flame className="w-3 h-3 text-[#ff9900]" />
                  أعلى نسبة خصم حقيقي
                </Link>
              </li>
              <li>
                <Link href="/amazon-deals" className="hover:text-[#ff9900] transition-colors">
                  عروض وتخفيضات أمازون مصر
                </Link>
              </li>
              <li>
                <Link href="/inspect" className="hover:text-[#00f0ff] transition-colors flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#00f0ff]" />
                  فاحص الصفقات الذكي 🔍
                </Link>
              </li>
              <li>
                <Link href="/favorites" className="hover:text-[#ff007f] transition-colors">
                  قائمة المفضلة
                </Link>
              </li>
            </ul>
          </div>

          {/* 8 Clean Categories */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">أقسام العتاد والهاردوير</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
              <Link href="/catalog?category=pc-hardware" className="hover:text-[#00f0ff] transition-colors truncate">
                قطع وهاردوير البي سي
              </Link>
              <Link href="/catalog?category=monitors" className="hover:text-[#00f0ff] transition-colors truncate">
                شاشات الكمبيوتر والألعاب
              </Link>
              <Link href="/catalog?category=laptops" className="hover:text-[#00f0ff] transition-colors truncate">
                أجهزة اللابتوب والقيمنق
              </Link>
              <Link href="/catalog?category=keyboards-mice" className="hover:text-[#00f0ff] transition-colors truncate">
                كيبوردات وماوسات
              </Link>
              <Link href="/catalog?category=headsets" className="hover:text-[#00f0ff] transition-colors truncate">
                سماعات وصوتيات
              </Link>
              <Link href="/catalog?category=streaming-voice" className="hover:text-[#00f0ff] transition-colors truncate">
                مايكات ومعدات بث
              </Link>
              <Link href="/catalog?category=consoles-handheld" className="hover:text-[#00f0ff] transition-colors truncate">
                أجهزة ألعاب وكونسول
              </Link>
              <Link href="/catalog?category=setup-aesthetic" className="hover:text-[#00f0ff] transition-colors truncate">
                إكسسوارات السيت أب
              </Link>
            </div>
          </div>

          {/* Trust */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">الشفافية والتوثيق</h4>
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <Store className="w-4 h-4 text-[#ffd600] shrink-0 mt-0.5" />
                <span>رصد دوري لأسعار أمازون مصر وتحديث فوري للصفقات.</span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00ff9d] shrink-0 mt-0.5" />
                <span>حساب نقاط الرصد وتحديد الهبوط الحقيقي عن أدنى سعر.</span>
              </div>
              <div className="flex items-start gap-2">
                <LineChart className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                <span>سجل أسعار تاريخي لآخر 90 يوماً لكشف الخصم الوهمي.</span>
              </div>
            </div>
            <Link
              href="/about"
              className="inline-block text-xs font-bold text-[#00f0ff] hover:underline pt-1"
            >
              عن لُقطة وكيف نعمل ↗
            </Link>
          </div>
        </div>

        {/* Legal & Affiliate Disclaimer */}
        <div className="pt-6 border-t border-white/[0.04] mt-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500 gap-3 text-center md:text-right">
          <p className="max-w-4xl leading-relaxed">
            إخلاء مسؤولية قانوني: أسعار المنتجات وتوافرها دقيقة اعتباراً من تاريخ ووقت الرصد المعروض وتخضع للتغيير المستمر من المتاجر. بصفتنا شريكاً في برنامج Amazon Associates ومتاجر التجزئة المعتمدة في مصر، قد نربح عمولة عند إتمام عمليات شراء مؤهلة من خلال الروابط دون أي تكلفة إضافية عليك. نحرص دائماً على عدم عرض أي أرقام غير موثقة، وفي حال غياب البيانات تظهر كـ &quot;غير متاح&quot;.
          </p>
          <div className="flex items-center gap-4 shrink-0 font-medium font-mono text-[11px]">
            <Link href="/admin" className="text-gray-600 hover:text-gray-400 transition-colors">
              لوحة الإدارة 🔒
            </Link>
            <span>© 2026 LOO2TAA (لُقطة). جميع الحقوق محفوظة.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
