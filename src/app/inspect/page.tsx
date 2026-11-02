import React from "react";
import { Metadata } from "next";
import DealInspector from "@/components/DealInspector";
import Link from "next/link";
import { ChevronLeft, ShieldCheck, Zap, LineChart, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "فاحص صفقات أمازون مصر الذكي | كشف الخصومات الوهمية - LOO2TAA",
  description: "أداة فحص صفقات وعروض أمازون مصر المباشرة (مثل صفقة Safqa). الصق أي رابط منتج واكتشف فوراً هل السعر لقطة حقيقية أم خصم وهمي مع سجل الأسعار لآخر 90 يوم.",
};

export default function InspectPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto py-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#94a3b8]">
        <Link href="/" className="hover:text-[#00f0ff] transition-colors">
          الرئيسية
        </Link>
        <ChevronLeft className="w-3.5 h-3.5 text-gray-600" />
        <span className="text-white font-bold">فاحص صفقات أمازون مصر</span>
      </nav>

      {/* Main Inspector Tool */}
      <DealInspector />

      {/* Educational Guide */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
        <div className="cyber-card rounded-2xl p-4 space-y-2">
          <div className="w-8 h-8 rounded-xl bg-[#00ff9d]/10 border border-[#00ff9d]/30 text-[#00ff9d] flex items-center justify-center">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-black text-white">كشف الخصم الوهمي</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            نقارن السعر الحالي بمتوسط أسعار المنتج لآخر 90 يوماً للتأكد من أن التاجر لم يقم برفع السعر قبل إعلان الخصم.
          </p>
        </div>

        <div className="cyber-card rounded-2xl p-4 space-y-2">
          <div className="w-8 h-8 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] flex items-center justify-center">
            <LineChart className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-black text-white">رادار الأسعار الحية</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            يتم فحص صفحات أمازون مصر لحظياً واستخراج بيانات السعر والمخزون الحقيقي للشحن في مصر.
          </p>
        </div>

        <div className="cyber-card rounded-2xl p-4 space-y-2">
          <div className="w-8 h-8 rounded-xl bg-[#ffb703]/10 border border-[#ffb703]/30 text-[#ffb703] flex items-center justify-center">
            <Award className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-black text-white">أفضل قرار شراء</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            نوفر لك رابط الشراء المباشر مع التنبيه إذا كان المنتج عند أقل سعر تاريخي له أو متوقع هبوطه أكثر.
          </p>
        </div>
      </div>
    </div>
  );
}
