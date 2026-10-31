import React from "react";
import Link from "next/link";
import {
  Gamepad2,
  ShieldCheck,
  LineChart,
  Sparkles,
  HelpCircle,
  ExternalLink,
  Send,
  CheckCircle2,
  Cpu,
  Crosshair
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 py-4">
      
      {/* Hero */}
      <div className="cyber-card text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-4 text-center sm:text-right border border-[#00f0ff]/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#00f0ff]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00f0ff]/10 text-xs font-black text-[#00f0ff] border border-[#00f0ff]/30">
          <Gamepad2 className="w-3.5 h-3.5" />
          عن رادار لقطة السيبراني // LOO2TAA_ABOUT
        </div>

        <h1 className="text-3xl sm:text-4xl font-black">
          الرادار المستقل لحماية الجيمرز وعشاق الهاردوير في مصر
        </h1>

        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
          انطلقت منصة «لقطة» بصبغة سايبر بانك مصرية خالصة، لتضع حداً لمبالغات واستغلال أسعار الهاردوير والكونسول، وتمنحك أداة رصد ذكية ومستقلة لمعرفة هل السعر المعروض هو لقطة حقيقية أم سعر منفوخ قبل الخصم!
        </p>
      </div>

      {/* The Hardware Market Problem */}
      <div className="cyber-card rounded-3xl p-8 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <Crosshair className="w-5 h-5 text-[#ff007f]" />
            ما هي مشكلة سوق الجيمنج في مصر؟
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            يعاني مجتمع الجيمرز من تفاوت حاد في أسعار كروت الشاشة، الشاشات، وإكسسوارات الألعاب بين المحلات في مول البستان وسوق العصر وبين المتاجر الإلكترونية، بالإضافة إلى رفع الأسعار عمداً قبل مواسم التخفيضات (الجمعة البيضاء، عروض الباك تو سكول) ثم الادعاء بوجود خصم هائل!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-2xl bg-[#07090e] border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <LineChart className="w-4 h-4 text-[#00f0ff]" />
              سجل الـ 90 يوماً التاريخي
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              نقوم بمطابقة وأرشفة سعر كل قطعة يومياً، لتشاهد بعينك أدنى قاع وصل إليه السعر، وتتأكد هل التخفيض حقيقي أم وهمي.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#07090e] border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <ShieldCheck className="w-4 h-4 text-[#00ff9d]" />
              ختم «اللقطة القياسية»
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              لا نطلق على المنتج كلمة «لقطة» إلا إذا كسر أدنى سعر تاريخي له وكان البائع موثوقاً ويقدم ضماناً محلياً معتمداً.
            </p>
          </div>
        </div>
      </div>

      {/* Cyber AI Analysis */}
      <div className="cyber-card rounded-3xl p-8 space-y-4">
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          <Cpu className="w-5 h-5 text-[#00f0ff]" />
          تحليل العتاد بالذكاء السيبراني
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          نحلل آلاف التقييمات ومشاركات الجيمرز في السيرفرات والجروبات المتخصصة، لنستخلص تقييماً سريعاً يوضح:
        </p>

        <div className="space-y-2.5 pt-2">
          <div className="flex items-start gap-2.5 text-xs text-gray-300">
            <CheckCircle2 className="w-4 h-4 text-[#00ff9d] shrink-0 mt-0.5" />
            <span>كفاءة التبريد في درجات حرارة الصيف المصري وتحت ضغط ساعات اللعب الطويلة.</span>
          </div>
          <div className="flex items-start gap-2.5 text-xs text-gray-300">
            <CheckCircle2 className="w-4 h-4 text-[#00ff9d] shrink-0 mt-0.5" />
            <span>توافق القطع مع التجميعات المختلفة ومتطلبات الباور سبلاي والشاشات.</span>
          </div>
          <div className="flex items-start gap-2.5 text-xs text-gray-300">
            <CheckCircle2 className="w-4 h-4 text-[#00ff9d] shrink-0 mt-0.5" />
            <span>أفضل قيمة ممكنة لكل جنيه تدفعه مقارنة بالبدائل المتاحة في السوق.</span>
          </div>
        </div>
      </div>

      {/* Affiliate Transparency Disclosure */}
      <div className="bg-[#07090e] rounded-3xl border border-[#00f0ff]/30 p-8 space-y-3">
        <h2 className="text-lg font-black text-[#00f0ff] flex items-center gap-2">
          <HelpCircle className="w-5 h-5" />
          تنويه الشفافية ونموذج العمل
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          منصة لقطة مجانية 100% لجميع الجيمرز والشباب في مصر. ولكي نتمكن من تغطية تكاليف الخوادم وتطوير خوارزميات رصد الأسعار 24/7، نشارك في برامج التسويق بالعمولة الرسمية (Amazon Associates و Noon Partners).
        </p>
        <p className="text-xs text-[#00ff9d] leading-relaxed font-bold">
          عند نقرك على روابط الشراء وإتمام الطلب، قد نحصل على عمولة تسويقية صغيرة من المتجر دون أن تدفع أنت أي قرش زيادة في سعر المنتج!
        </p>
      </div>

      {/* Community */}
      <div className="text-center space-y-3 pt-4">
        <h3 className="text-base font-bold text-white">
          جاهز تنضم لأقوى مجتمع جيمنج صفقات في مصر؟
        </h3>
        <a
          href="https://t.me/loo2taa"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#00f0ff] to-[#0088cc] text-[#07090e] font-black text-xs shadow-lg shadow-[#00f0ff]/20 hover:shadow-[#00f0ff]/40 transition-all active:scale-95"
        >
          <Send className="w-4 h-4" />
          انضم لرادار لقطة على تليجرام
        </a>
      </div>
    </div>
  );
}
