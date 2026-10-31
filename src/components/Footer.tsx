import React from "react";
import Link from "next/link";
import { Gamepad2, Send, ShieldCheck, LineChart } from "lucide-react";

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
              <span className="text-lg font-black text-white">
                لقطة <span className="text-xs text-[#00f0ff] font-bold">Loo2taa</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              منصة تتبع ورصد أسعار عتاد الجيمنج وهاردوير الـ PC في المتاجر المصرية. نساعدك في كشف الخصومات الحقيقية والتأكد من أدنى سعر قبل الشراء.
            </p>
            <div className="pt-1">
              <a
                href="https://t.me/loo2taa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0b101c] border border-white/10 text-xs font-bold text-[#00f0ff] hover:border-[#00f0ff]/40 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>انضم لقناة تليجرام</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">تصفح لقطة</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#00f0ff] transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/catalog?sort=record-low" className="hover:text-[#00f0ff] transition-colors">
                  أقل الأسعار المسجلة
                </Link>
              </li>
              <li>
                <Link href="/amazon-deals" className="hover:text-[#00f0ff] transition-colors">
                  عروض أمازون مصر
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
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">الأقسام</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/catalog?category=pc-hardware" className="hover:text-[#00f0ff] transition-colors">
                  كروت شاشة وهاردوير PC
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=monitors" className="hover:text-[#00f0ff] transition-colors">
                  شاشات جيمنج 144Hz+
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=peripherals" className="hover:text-[#00f0ff] transition-colors">
                  ماوسات وكيبوردات ميكانيكال
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=consoles" className="hover:text-[#00f0ff] transition-colors">
                  بلايستيشن وكروت ألعاب
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">الشفافية</h4>
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00ff9d] shrink-0 mt-0.5" />
                <span>رصد تلقائي للأسعار من المتاجر الرسمية المعتمدة.</span>
              </div>
              <div className="flex items-start gap-2">
                <LineChart className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                <span>سجل أسعار تاريخي لآخر 90 يوماً لمنع العروض الوهمية.</span>
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
            تنويه: لقطة تشارك في برامج التسويق بالعمولة (Amazon Associates وغيرها). عند الشراء من خلال روابطنا، قد نحصل على عمولة بسيطة تدعم استمرار الخدمة مجاناً دون أي تكلفة إضافية عليك.
          </p>
          <p className="shrink-0 font-medium">
            © 2026 لقطة Loo2taa. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
