import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "لُقطة LOO2TAA // رادار صفقات وهاردوير أمازون مصر وتتبع الأسعار الحقيقية",
  description:
    "المنصة المتخصصة في رصد وتتبع صفقات وهاردوير الكمبيوتر والجيمنج على أمازون مصر مع سجل تاريخي حقيقي للأسعار وكشف الخصومات الحقيقية.",
  keywords: [
    "هاردوير كمبيوتر مصر",
    "عروض جيمنج أمازون مصر",
    "مايكات وسماعات",
    "كروت شاشة RTX",
    "معالجات رايزن",
    "شاشات ألعاب 144Hz",
    "كيبورد ميكانيكال",
    "LOO2TAA",
    "لُقطة",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#07090e] text-[#f1f5f9] antialiased min-h-screen flex flex-col font-sans selection:bg-[#00f0ff] selection:text-[#07090e]">
        <Navbar />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
