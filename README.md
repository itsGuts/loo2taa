# ⚡ LO2TAA (لقطة) — رادار تتبع الأسعار وكشف الصفقات الحقيقية في مصر

منصة ذكية متخصصة في تتبع ومراقبة أسعار المنتجات وعتاد الجيمنج وهاردوير البي سي على **أمازون مصر (Amazon.eg)** والمتاجر المعتمدة. تعمل المنصة على كشف الخصومات الوهمية وتحديد اللقطات الحقيقية عبر مقارنة السعر الفعلي بالوسيط المرجعي لآخر 90 يوماً.

---

## 🎯 المميزات الرئيسية

1. **حساب السعر المرجعي الحقيقي (90-Day Median Reference Price):**
   - حساب وسيط السعر الحقيقي لآخر 90 يوماً لإفشال حيل التجار ومواسم التخفيضات التي يتم فيها رفع الأسعار قبل الخصم.
   - تحديد دقيق لنوع العرض: **لقطة حقيقية (Real Deal)**، **سعر جيد (Good Price)**، **خصم وهمي ⚠️ (Fake Discount)**، أو **سعر عادي (Normal)**.

2. **قوائم فرز وتصنيف متقدمة (Smart Listing & Filters):**
   - 6 خيارات فرز ذكية: أكبر نسبة توفير، انخفاض تاريخي قياسي (Record-Low)، أحدث هبوط، أعلى ارتفاع، السعر من الأقل للأعلى، والأكثر متابعة.
   - فلاتر دقيقة: الأقسام، نطاق السعر، الحد الأدنى للخصم، التوفر بالمخزون فقط، والماركة.
   - روابط قابلة للمشاركة تحتفظ بحالة الفلاتر والفرز تلقائياً (`?sort=record-low&category=gaming_pc`).

3. **صفحة المنتج ومنحنى الأسعار التفاعلي (`/p/[asin]`):**
   - رسم بياني تفاعلي (1 شهر / 3 أشهر / 6 أشهر / الكل) مدعوم بـ Recharts.
   - خطوط استرشادية للحد الأدنى (Record Low)، الحد الأقصى، المتوسط، والسعر المرجعي.
   - دعم كامل للـ SEO: Arabic Metadata, OpenGraph Cards, و Rich Snippets JSON-LD Product Schema.

4. **فاحص الصفقات الفوري (Deal Inspector):**
   - فحص أي رابط أو كود ASIN من أمازون مصر مباشرة؛ البحث في قاعدة البيانات أو جلبه حياً وحفظه وتفعيل تتبعه المستمر فوراً.

5. **تنبيهات هبوط الأسعار الذكية (Price Alerts):**
   - إشعار فوري عند وصول السعر للهدف المحدد عبر البريد الإلكتروني (Resend) أو قناة/بوت تليجرام.
   - رابط إلغاء اشتراك بنقرة واحدة (One-click token unsubscribe) مع حماية ضد السبام والفيضان.

6. **لوحة تحكم المشرف (Admin Dashboard - `/admin`):**
   - حماية بكلمة مرور مشفرة (`ADMIN_PASSWORD`).
   - إحصائيات حية: إجمالي المنتجات المتابعة، الصفقات النشطة، والتنبيهات المفعلة.
   - إضافة منتجات بالرابط فورياً، تثبيت الصفقات المميزة، ومتابعة سجلات الفحص المجدول (Vercel Cron Logs).

---

## 🧱 البنية التحتية والبيانات

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript.
- **Styling:** Tailwind CSS v4 مع نظام تصميم سايبر بانك داكن (Dark Cyber Aesthetic).
- **Database:** Supabase PostgreSQL مع نظام Fallback محلي مهيأ بـ 130 منتج موثق.
- **Data Providers:**
  - `AmazonPaApiProvider`: تكامل رسمي مع Amazon Creators / PA-API v5 عند توفر المفاتيح.
  - `AmazonScraperProvider`: موفر احتياطي مرن ومتوافق قانونياً عند غياب المفاتيح.
- **Scheduled Refresh:** Vercel Cron يعمل تلقائياً كل 4 ساعات (`0 */4 * * *`) لتحديث الأسعار وتدوين السجلات في `cron_logs` وإرسال التنبيهات المستحقة.

---

## ⚙️ متغيرات البيئة (Environment Variables)

قم بإنشاء ملف `.env.local` في مسار المشروع وضع المتغيرات التالية:

```env
# 1. قاعدة البيانات (Supabase PostgreSQL)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key-here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key-here

# 2. سر التحديث المجدول (Vercel Cron Secret)
CRON_SECRET=your-random-secure-cron-secret-here

# 3. معرف الإحالة الرسمي (Amazon Associates Tag)
AFFILIATE_TAG=lo2taa-21

# 4. واجهة برمجة تطبيقات أمازون الرسمية (اختياري)
AMAZON_PAAPI_KEY=
AMAZON_PAAPI_SECRET=
AMAZON_PAAPI_TAG=lo2taa-21
AMAZON_PAAPI_ENDPOINT=https://webservices.amazon.eg/paapi5/getitems

# 5. تنبيهات الأسعار
RESEND_API_KEY=re_your_resend_api_key_here
ALERT_FROM_EMAIL=alerts@lo2taa.com
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHANNEL_ID=@lo2taa

# 6. لوحة إدارة المشرف (/admin)
ADMIN_PASSWORD=your-secure-admin-password
```

---

## 🚀 التشغيل المحلي

```bash
# تثبيت الحزم
npm install

# تشغيل خادم التطوير
npm run dev

# اختبار سلامة الحسابات والتنبيهات
node scripts/test-step2-math.mjs
node scripts/test-step3-listing-filters.mjs
node scripts/test-step4-product-page.mjs
node scripts/test-step5-alerts-and-checker.mjs

# بناء نسخة الإنتاج
npm run build
```

---

## ⚖️ إخلاء مسؤولية قانوني

أسعار المنتجات وتوافرها دقيقة اعتباراً من تاريخ ووقت الرصد المعروض وتخضع للتغيير المستمر من المتاجر. بصفتنا شريكاً في برنامج Amazon Associates ومتاجر التجزئة المعتمدة في مصر، قد نربح عمولة عند إتمام عمليات شراء مؤهلة من خلال الروابط دون أي زيادة في التكلفة على المستخدم.
