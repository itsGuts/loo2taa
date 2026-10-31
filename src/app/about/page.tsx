import React from "react";
import Link from "next/link";
import {
  Gamepad2,
  ShieldCheck,
  LineChart,
  HelpCircle,
  Send,
  CheckCircle2,
  Cpu
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      
      {/* Hero */}
      <div className="cyber-card rounded-3xl p-6 sm:p-10 shadow-2xl space-y-3 text-center sm:text-right border border-white/10 relative overflow-hidden">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00f0ff]/10 text-xs font-bold text-[#00f0ff] border border-[#00f0ff]/30">
          <Gamepad2 className="w-3.5 h-3.5" />
          عن منصة لقطة
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-white">
          أذكى متتبع لأسعار عتاد الجيمنج والبي سي في مصر
        </h1>

        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
          انطلقت منصة «لقطة» لتمنح المتسوق المصري أداة واضحة ومستقلة لمعرفة ما إذا كان التخفيض حقيقياً ويستحق الشراء، أم مجرد رفع مسبق للسعر قبل العروض الموسمية.
        </p>
      </div>

      {/* Problem & Solution */}
      <div className="cyber-card rounded-3xl p-6 sm:p-8 space-y-5">
        <div className="space-y-1.5">
          <h2 className="text-lg font-black text-white">
            ما المشكلة التي نحلها؟
          </h2>
          <p className="text-xs text-gray-400 leading-relaxed">
            في كثير من مواسم التخفيضات (الجمعة البيضاء، عروض نهاية الشهر)، يقوم بعض البائعين برفع الأسعار قبل أسبوع من العرض، ثم إعلان «خصم 30%» ليعود المنتج لسعره المعتاد!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div className="p-4 rounded-2xl bg-[#05070c] border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <LineChart className="w-4 h-4 text-[#00f0ff]" />
              سجل الـ 90 يوماً التاريخي
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              نقوم بمطابقة وأرشفة سعر كل قطعة يومياً، لتشاهد بعينك أدنى قاع وصل إليه السعر، وتتأكد هل التخفيض حقيقي أم وهمي.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#05070c] border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <ShieldCheck className="w-4 h-4 text-[#00ff9d]" />
              ختم «أقل سعر مرصود»
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              لا نطلق على المنتج كلمة «لقطة» إلا إذا نزل سعره لأدنى نقطة تاريخية مرصودة لدينا وتأكدنا من موثوقية البائع.
            </p>
          </div>
        </div>
      </div>

      {/* Methodology */}
      <div className="cyber-card rounded-3xl p-6 sm:p-8 space-y-3.5">
        <h2 className="text-lg font-black text-white flex items-center gap-2">
          <Cpu className="w-5 h-5 text-[#00f0ff]" />
          تحليل العتاد بالذكاء الاصطناعي
        </h2>
        <p className="text-xs text-gray-300 leading-relaxed">
          نحلل آلاف التقييمات وتجارب المشترين الفعلية، لنلخص لك أهم المميزات والعيوب بنقاط واضحة ومحايدة قبل أن تشتري.
        </p>

        <div className="space-y-2 pt-1">
          <div className="flex items-start gap-2 text-xs text-gray-300">
            <CheckCircle2 className="w-4 h-4 text-[#00ff9d] shrink-0 mt-0.5" />
            <span>كفاءة التبريد في الصيف وتحت ضغط ساعات اللعب الطويلة.</span>
          </div>
          <div className="flex items-start gap-2 text-xs text-gray-300">
            <CheckCircle2 className="w-4 h-4 text-[#00ff9d] shrink-0 mt-0.5" />
            <span>أفضل قيمة ممكنة لكل جنيه تدفعه مقارنة بالبدائل المتاحة.</span>
          </div>
        </div>
      </div>

      {/* Affiliate Transparency */}
      <div className="bg-[#05070c] rounded-3xl border border-white/10 p-6 sm:p-8 space-y-2.5">
        <h2 className="text-base font-black text-[#00f0ff] flex items-center gap-2">
          <HelpCircle className="w-4 h-4" />
          تنويه الشفافية ونموذج العمل
        </h2>
        <p className="text-xs text-gray-300 leading-relaxed">
          منصة لقطة مجانية 100% للمستخدمين في مصر. ولكي نتمكن من تغطية تكاليف الخوادم وتطوير خوارزميات رصد الأسعار، نشارك في برامج التسويق بالعمولة الرسمية (Amazon Associates وغيرها).
        </p>
        <p className="text-xs text-[#00ff9d] font-bold">
          عند نقرك على روابط الشراء وإتمام الطلب، قد نحصل على عمولة تسويقية بسيطة من المتجر دون أن تدفع أي مليم إضافي في سعر المنتج!
        </p>
      </div>

      {/* Telegram Link */}
      <div className="text-center space-y-3 pt-2">
        <h3 className="text-sm font-bold text-white">
          جاهز تتابع صفقات الهاردوير فور نزولها؟
        </h3>
        <a
          href="https://t.me/loo2taa"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cyber-primary inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs"
        >
          <Send className="w-4 h-4" />
          انضم لقناة لقطة على تليجرام
        </a>
      </div>
    </div>
  );
}
