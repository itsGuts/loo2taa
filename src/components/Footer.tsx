import React from "react";
import Link from "next/link";
import { Gamepad2, Send, ShieldCheck, LineChart, Flame, Store } from "lucide-react";

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
                <span className="font-mono text-[#00f0ff]">LO2TAA</span>
                <span className="text-xs text-gray-400 font-bold">لقطة</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              منصة تتبع ورصد هبوط الأسعار لعتاد الديسكورد والجيمنج وهاردوير البي سي عبر أكبر 6 متاجر مصرية معتمدة. نكشف الخصومات الوهمية ونحسب السعر الحقيقي مقارنة بسجل الـ 90 يوماً.
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
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">المتاجر والصفقات</h4>
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
                  عروض الجمعة البيضاء 11.11
                </Link>
              </li>
              <li>
                <Link href="/catalog?store=amazon" className="hover:text-[#ff9900] transition-colors">
                  أمازون مصر (Amazon.eg)
                </Link>
              </li>
              <li>
                <Link href="/catalog?store=btech" className="hover:text-[#0066cc] transition-colors">
                  بي تك مصر (B.TECH)
                </Link>
              </li>
              <li>
                <Link href="/catalog?store=twob" className="hover:text-[#7b2cbf] transition-colors">
                  2B مصر (2B Egypt)
                </Link>
              </li>
              <li>
                <Link href="/catalog?store=compughana" className="hover:text-[#10b981] transition-colors">
                  كمبيوجانا وسيجما (مول البستان)
                </Link>
              </li>
            </ul>
          </div>

          {/* 8 Categories Synchronized */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">أقسام العتاد</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
              <Link href="/catalog?category=streaming-voice" className="hover:text-[#00f0ff] transition-colors truncate">
                مايكات وصوتيات ديسكورد
              </Link>
              <Link href="/catalog?category=headsets" className="hover:text-[#00f0ff] transition-colors truncate">
                سماعات ديسكورد وقيمنق
              </Link>
              <Link href="/catalog?category=keyboards-mice" className="hover:text-[#00f0ff] transition-colors truncate">
                كيبوردات ميكانيكال وماوسات
              </Link>
              <Link href="/catalog?category=setup-aesthetic" className="hover:text-[#00f0ff] transition-colors truncate">
                سيت أب وديكور وإضاءة RGB
              </Link>
              <Link href="/catalog?category=monitors" className="hover:text-[#00f0ff] transition-colors truncate">
                شاشات قيمنق 144Hz+
              </Link>
              <Link href="/catalog?category=pc-hardware" className="hover:text-[#00f0ff] transition-colors truncate">
                تجميعات وهاردوير البي سي
              </Link>
              <Link href="/catalog?category=consoles-handheld" className="hover:text-[#00f0ff] transition-colors truncate">
                كونسول واكسسوارات
              </Link>
              <Link href="/catalog?category=laptops" className="hover:text-[#00f0ff] transition-colors truncate">
                لابتوبات قيمنق ومونتاج
              </Link>
            </div>
          </div>

          {/* Trust */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">الشفافية والتوثيق</h4>
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <Store className="w-4 h-4 text-[#ffd600] shrink-0 mt-0.5" />
                <span>رصد دوري للأسعار عبر 6 متاجر مصرية معتمدة.</span>
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
              عن لقطة وكيف نعمل ↗
            </Link>
          </div>
        </div>

        {/* Affiliate Disclaimer */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500 gap-3 text-center md:text-right">
          <p>
            تنويه: لقطة تشارك في برنامج التسويق بالعمولة لأمازون مصر (Amazon Associates) ومتاجر التجزئة المصرية المعتمدة. عند الشراء عبر روابطنا، نحصل على عمولة رسمية تدعم استمرار الخدمة مجاناً دون أي زيادة في السعر عليك.
          </p>
          <p className="shrink-0 font-medium font-mono">
            © 2026 LO2TAA (لقطة). جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
