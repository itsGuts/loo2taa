import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "لقطة LO2TAA // رادار صفقات مجتمع الديسكورد والجيمنج في مصر",
  description:
    "المنصة الأولى في مصر لرصد صفقات مجتمع الديسكورد، مايكات الستريم، سماعات الألعاب، كيبوردات ميكانيكال، إضاءة السيت أب، وهاردوير الـ PC على أمازون مصر مع سجل تاريخي حقيقي للأسعار.",
  keywords: [
    "عتاد ديسكورد وستريم",
    "عروض جيمنج أمازون مصر",
    "مايكات ديسكورد مصر",
    "كروت شاشة RTX 4060",
    "سعر بلايستيشن 5 سليم في مصر",
    "شاشات ألعاب 144Hz و 165Hz",
    "كيبورد ميكانيكال",
    "LO2TAA",
    "لقطة",
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
