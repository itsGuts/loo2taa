import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getPriceProvider } from "@/lib/providers";
import { computeProductMetrics } from "@/lib/deal-math";

export const dynamic = "force-dynamic";

function extractAsin(input: string): string | null {
  if (!input) return null;
  const trimmed = input.trim();
  // Direct ASIN (e.g. B08G8WH435)
  if (/^B[A-Z0-9]{9}$/i.test(trimmed)) {
    return trimmed.toUpperCase();
  }
  // URL matching /dp/ASIN or /gp/product/ASIN or raw 10-char
  const match =
    trimmed.match(/(?:dp|gp\/product)\/([A-Z0-9]{10})/i) ||
    trimmed.match(/([B][A-Z0-9]{9})/i);
  return match ? match[1].toUpperCase() : null;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("url") || searchParams.get("q") || "";

  if (!query) {
    return NextResponse.json(
      { error: "يرجى إدخال رابط أو كود منتج أمازون مصر (ASIN)" },
      { status: 400 }
    );
  }

  const asin = extractAsin(query);
  if (!asin) {
    return NextResponse.json(
      { error: "تعذر استخراج كود المنتج (ASIN) من الرابط المدخل، تأكد من صحة الرابط." },
      { status: 400 }
    );
  }

  // 1. Check if already in our database
  try {
    const existing = await db.getProductByAsin(asin);
    if (existing) {
      return NextResponse.json({
        success: true,
        cached: true,
        isNew: false,
        product: {
          id: existing.id,
          asin: existing.asin,
          title: existing.title,
          display_title: existing.display_title,
          brand: existing.brand,
          category: existing.category,
          category_ar: existing.category_ar,
          image: existing.image_url,
          url: existing.url,
          price: existing.price,
          previous_price: existing.list_price,
          reference_price: existing.metrics.reference_price,
          savings: existing.metrics.savings_vs_reference,
          discount_percent: existing.metrics.real_discount_percent,
          is_record_low: existing.metrics.is_record_low,
          seller: existing.seller,
          price_history: existing.history,
        },
        metrics: existing.metrics,
        verdict: existing.metrics.verdict,
        message: "تم العثور على سجل الأسعار الكامل لـ 90 يوماً في قاعدة البيانات!",
      });
    }

    // 2. Product not in DB: Fetch live using our pluggable provider
    const provider = getPriceProvider();
    const fetched = await provider.fetchProduct(asin);

    if (!fetched || fetched.price <= 0) {
      return NextResponse.json(
        {
          error: "لم نتمكن من الوصول للمنتج على أمازون مصر. قد يكون الرابط غير دقيق أو المنتج غير متاح حالياً.",
        },
        { status: 404 }
      );
    }

    // 3. Store in DB and start tracking
    const newProduct = await db.upsertProduct({
      asin: fetched.asin,
      title: fetched.title,
      display_title: fetched.displayTitle || fetched.title,
      brand: fetched.brand,
      category: fetched.category,
      category_ar: fetched.categoryAr,
      image_url: fetched.imageUrl,
      url: fetched.url,
      seller: fetched.seller,
      in_stock: fetched.inStock,
      price: fetched.price,
      list_price: fetched.listPrice,
    });

    // 4. Record the initial price observation point
    await db.addPricePoint(
      newProduct.id,
      newProduct.asin,
      fetched.price,
      fetched.listPrice,
      fetched.seller
    );

    // Compute initial deal verdict
    const metrics = computeProductMetrics(fetched.price, fetched.listPrice, []);

    return NextResponse.json({
      success: true,
      cached: false,
      isNew: true,
      product: {
        id: newProduct.id,
        asin: newProduct.asin,
        title: newProduct.title,
        display_title: newProduct.display_title,
        brand: newProduct.brand,
        category: newProduct.category,
        category_ar: newProduct.category_ar,
        image: newProduct.image_url,
        url: newProduct.url,
        price: newProduct.price,
        previous_price: newProduct.list_price,
        reference_price: metrics.reference_price,
        savings: metrics.savings_vs_reference,
        discount_percent: metrics.real_discount_percent,
        is_record_low: metrics.is_record_low,
        seller: newProduct.seller,
        price_history: [{
          date: new Date().toISOString().slice(0, 10),
          price: newProduct.price,
          label: "أول نقطة رصد",
        }],
      },
      metrics,
      verdict: metrics.verdict,
      message: "تمت إضافة المنتج بنجاح وبدء تتبعه تلقائياً بواسطة رادار لقطة! سيتراكم سجل الأسعار مع الفحص الدوري.",
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[API/Inspect] Error:", msg);
    return NextResponse.json(
      { error: "حدث خطأ أثناء فحص المنتج، يرجى المحاولة مرة أخرى لاحقاً." },
      { status: 500 }
    );
  }
}
