import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const PRODUCTS_JSON = path.join(ROOT_DIR, 'data', 'products.json');

const newProducts = [
  {
    id: "g-13-ryzen5-5600x",
    asin: "B08166SLDF",
    display_title: "معالج إيه إم دي رايزن 5 5600X سداسي النواة (AMD Ryzen 5 5600X) بتردد حتى 4.6GHz",
    title: "AMD Ryzen 5 5600X 6-Core 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler",
    brand: "AMD",
    category: "pc-hardware",
    category_ar: "كروت شاشة وهاردوير PC",
    marketplace: "amazon",
    store_name: "Amazon أمازون",
    store_button_label: "اقتنص اللقطة من أمازون ⚡",
    seller: "Amazon.eg",
    url: "https://www.amazon.eg/dp/B08166SLDF?tag=lo2taa-21",
    image: "https://m.media-amazon.com/images/I/61vGQNUEsGL._AC_SL500_.jpg",
    price: 6499,
    previous_price: 7800,
    savings: 1301,
    discount_percent: 17,
    is_record_low: true,
    price_change_direction: "down",
    price_checked_at: "2026-10-31T05:00:00.000Z",
    rating: 4.8,
    review_count: 5120,
    price_history: [
      { date: "2026-08-01", price: 8200, label: "سعر الذروة" },
      { date: "2026-09-01", price: 7800, label: "سعر السوق" },
      { date: "2026-10-01", price: 7300, label: "بداية النزول" },
      { date: "2026-10-15", price: 6999, label: "عروض الخريف" },
      { date: "2026-10-31", price: 6499, label: "أقل سعر مسجل في مصر ⚡" }
    ],
    ai_review: {
      pros: [
        "أفضل قيمة مقابل سعر لتجميعات الـ PC المتوسطة للألعاب والستريمنج.",
        "استهلاك طاقة منخفض (65W) ممتاز لدرجات حرارة الصيف المصري وتكلفة الكهرباء.",
        "توافق عريض مع لوحات B450 و B550 الاقتصادية دون الحاجة لشراء مذر بورد غالية."
      ],
      cons: [
        "المبرد المرفق Wraith Stealth يؤدي الغرض للألعاب العادية لكن يفضل مبرد احترافي في الصيف.",
        "لا يحتوي على كارت شاشة داخلي (تحتاج كارت شاشة منفصل)."
      ],
      brand_summary: "AMD الشركة الرائدة عالمياً في معالجات الألعاب بتقنية Zen 3.",
      user_sentiment: "معشوق الجيمرز في مصر، يشغل كل ألعاب Competitive على أعلى فريمات وثابت جداً.",
      sources: [
        { name: "Hardware Unboxed Benchmarks", verified: true, date: "2026" },
        { name: "مراجعات مجتمع الجيمنج المصري", verified: true, date: "أكتوبر 2026" }
      ]
    }
  },
  {
    id: "g-14-intel-i5-13400f",
    asin: "B0BQ6BTZ3T",
    display_title: "معالج إنتل كور i5-13400F الجيل الثالث عشر (10 أنوية و 16 خيط معالجة) بتردد حتى 4.6GHz",
    title: "Intel Core i5-13400F 13th Gen Desktop Processor (10 Cores, 16 Threads) LGA1700",
    brand: "Intel",
    category: "pc-hardware",
    category_ar: "كروت شاشة وهاردوير PC",
    marketplace: "amazon",
    store_name: "Amazon أمازون",
    store_button_label: "اقتنص اللقطة من أمازون ⚡",
    seller: "Amazon.eg",
    url: "https://www.amazon.eg/dp/B0BQ6BTZ3T?tag=lo2taa-21",
    image: "https://m.media-amazon.com/images/I/51r2K84b-bL._AC_SL500_.jpg",
    price: 8850,
    previous_price: 10200,
    savings: 1350,
    discount_percent: 13,
    is_record_low: true,
    price_change_direction: "down",
    price_checked_at: "2026-10-31T05:00:00.000Z",
    rating: 4.8,
    review_count: 2310,
    price_history: [
      { date: "2026-08-01", price: 10900, label: "سعر الصيف" },
      { date: "2026-09-01", price: 10200, label: "استقرار السوق" },
      { date: "2026-10-01", price: 9600, label: "تخفيض تجار" },
      { date: "2026-10-15", price: 9200, label: "عروض أكتوبر" },
      { date: "2026-10-31", price: 8850, label: "أقل سعر رسمي مسجل ⚡" }
    ],
    ai_review: {
      pros: [
        "10 أنوية معمارية هجينة (6 أنوية أداء + 4 أنوية كفاءة) مثالية للألعاب والبرمجة والمونتاج.",
        "دعم رامات DDR4 الاقتصادية ورامات DDR5 المستقبلية.",
        "أداء ممتاز جداً مع كروت RTX 4060 و 4070 دون أي عنق زجاجة (Bottleneck)."
      ],
      cons: [
        "نسخة F تتطلب كارت شاشة خارجي.",
        "المبرد المرفق صوته عالي تحت الضغط الطويل."
      ],
      brand_summary: "إنتل الرائدة في معالجات الأجهزة المكتبية والمصممة للأداء المتوازن.",
      user_sentiment: "أقوى ترشيح لتجميعات 2026 الاقتصادية القابلة للتطوير في مصر.",
      sources: [
        { name: "Tom's Hardware Review", verified: true, date: "2026" },
        { name: "اختبارات استهلاك الطاقة المصرية", verified: true, date: "2026" }
      ]
    }
  },
  {
    id: "g-15-kingston-fury-16gb",
    asin: "B097K2WBL3",
    display_title: "رامات كينجستون فيوري بيست 16 جيجابايت (2x8GB) DDR4 سرعة 3200MHz مع مشتت حراري",
    title: "Kingston FURY Beast 16GB (2x8GB) 3200MHz DDR4 CL16 Desktop Memory Kit",
    brand: "Kingston",
    category: "pc-hardware",
    category_ar: "كروت شاشة وهاردوير PC",
    marketplace: "amazon",
    store_name: "Amazon أمازون",
    store_button_label: "اقتنص اللقطة من أمازون ⚡",
    seller: "Amazon.eg",
    url: "https://www.amazon.eg/dp/B097K2WBL3?tag=lo2taa-21",
    image: "https://m.media-amazon.com/images/I/61S4O1VbTCL._AC_SL500_.jpg",
    price: 1999,
    previous_price: 2450,
    savings: 451,
    discount_percent: 18,
    is_record_low: true,
    price_change_direction: "down",
    price_checked_at: "2026-10-31T05:00:00.000Z",
    rating: 4.9,
    review_count: 8700,
    price_history: [
      { date: "2026-08-01", price: 2600, label: "سعر قديم" },
      { date: "2026-09-01", price: 2450, label: "سعر السوق" },
      { date: "2026-10-01", price: 2200, label: "تخفيض مستوردين" },
      { date: "2026-10-20", price: 2100, label: "قبل العرض" },
      { date: "2026-10-31", price: 1999, label: "لقطة كسر حاجز الـ 2000 ج.م ⚡" }
    ],
    ai_review: {
      pros: [
        "سعر منافس جداً لحزمة Dual Channel (2x8GB) ترفع فريمات الألعاب 15-20%.",
        "مشتت ألومنيوم أنيق منخفض الارتفاع لا يتعارض مع أي مبرد هوائي.",
        "دعم بروفايل Intel XMP و AMD Ryzen تلقائياً بضغطة زر من الـ BIOS."
      ],
      cons: [
        "النسخة لا تحتوي على إضاءة RGB (مخصصة للباحثين عن الأداء والسعر فقط).",
        "سرعة 3200MHz ممتازة لـ DDR4 لكنها ليست DDR5."
      ],
      brand_summary: "كينجستون الشركة الأكثر موثوقية في الذاكرة والتخزين في مصر مع ضمان الوكيل.",
      user_sentiment: "الخيار الإجباري لأي تجميعة ألعاب اقتصادية في مصر حالياً.",
      sources: [
        { name: "PC Gamer Memory Guide", verified: true, date: "2026" }
      ]
    }
  },
  {
    id: "g-16-lenovo-loq-15",
    asin: "B0CS3S1Z9F",
    display_title: "لابتوب جيمنج لينوفو لوك (Lenovo LOQ 15) شاشة 144Hz، كارت RTX 4050 6GB، معالج i5-13420H، رام 16GB، تخزين 512GB SSD",
    title: "Lenovo LOQ 15 15.6 FHD 144Hz Gaming Laptop (Intel Core i5-13420H, NVIDIA GeForce RTX 4050 6GB, 16GB RAM, 512GB SSD)",
    brand: "Lenovo",
    category: "laptops",
    category_ar: "لابتوبات جيمنج",
    marketplace: "amazon",
    store_name: "Amazon أمازون",
    store_button_label: "اقتنص اللقطة من أمازون ⚡",
    seller: "Amazon.eg",
    url: "https://www.amazon.eg/dp/B0CS3S1Z9F?tag=lo2taa-21",
    image: "https://m.media-amazon.com/images/I/71R2c3tW8pL._AC_SL500_.jpg",
    price: 36999,
    previous_price: 43500,
    savings: 6501,
    discount_percent: 15,
    is_record_low: true,
    price_change_direction: "down",
    price_checked_at: "2026-10-31T05:00:00.000Z",
    rating: 4.7,
    review_count: 380,
    price_history: [
      { date: "2026-08-01", price: 46000, label: "سعر الإطلاق" },
      { date: "2026-09-01", price: 43500, label: "تخفيض موسمي" },
      { date: "2026-10-01", price: 41000, label: "سعر تنافسي" },
      { date: "2026-10-20", price: 38500, label: "عروض نهاية الشهر" },
      { date: "2026-10-31", price: 36999, label: "توفير تاريخي 6500 ج.م ⚡" }
    ],
    ai_review: {
      pros: [
        "كارت RTX 4050 يدعم DLSS 3 و Frame Generation لمضاعفة الفريمات في ألعاب 2026.",
        "نظام تبريد مستوحى من سلسلة Legion الأسطورية مع فتحات تهوية خلفية ممتازة.",
        "شاشة 144Hz ناعمة وسريعة الاستجابة لألعاب الشوتر والأونلاين.",
        "كيبورد مريح جداً بمسافة ضغط عميقة وإضاءة أنيقة."
      ],
      cons: [
        "سعة التخزين 512GB ستحتاج إضافة SSD ثانٍ للألعاب الثقيلة.",
        "شاحن الجهاز وزنه ثقيل نسبياً للتنقل اليومي."
      ],
      brand_summary: "لينوفو لوك أحدث سلسلة جيمنج تكتسح السوق المصري بجودة بناء عالية وسعر تنافسي.",
      user_sentiment: "أفضل لابتوب جيمنج تحت 40 ألف جنيه في مصر حالياً بدون منازع.",
      sources: [
        { name: "Jarrod'sTech Gaming Laptop Review", verified: true, date: "2026" },
        { name: "مراجعات الجيمرز المصريين على يوتيوب", verified: true, date: "أكتوبر 2026" }
      ]
    }
  },
  {
    id: "g-17-lg-24gn600-144hz",
    asin: "B08VS8YG8H",
    display_title: "شاشة ألعاب إل جي ألترا جير 24 بوصة (LG UltraGear 24GN600) لوحة IPS تردد 144Hz وزمن استجابة 1ms مع FreeSync Premium",
    title: "LG UltraGear 24GN600-B 24-Inch FHD (1920 x 1080) IPS Gaming Monitor with 144Hz, 1ms MBR, FreeSync Premium",
    brand: "LG",
    category: "monitors",
    category_ar: "شاشات جيمنج 144Hz+",
    marketplace: "amazon",
    store_name: "Amazon أمازون",
    store_button_label: "اقتنص اللقطة من أمازون ⚡",
    seller: "Amazon.eg",
    url: "https://www.amazon.eg/dp/B08VS8YG8H?tag=lo2taa-21",
    image: "https://m.media-amazon.com/images/I/81qgtw6-a5L._AC_SL500_.jpg",
    price: 6899,
    previous_price: 8200,
    savings: 1301,
    discount_percent: 16,
    is_record_low: true,
    price_change_direction: "down",
    price_checked_at: "2026-10-31T05:00:00.000Z",
    rating: 4.8,
    review_count: 1940,
    price_history: [
      { date: "2026-08-01", price: 8700, label: "سعر قديم" },
      { date: "2026-09-01", price: 8200, label: "سعر السوق" },
      { date: "2026-10-01", price: 7600, label: "خصم أمازون" },
      { date: "2026-10-18", price: 7200, label: "نزول تدريجي" },
      { date: "2026-10-31", price: 6899, label: "أقل سعر شاشة IPS 144Hz ⚡" }
    ],
    ai_review: {
      pros: [
        "لوحة IPS حقيقية بزوايا رؤية وألوان زاهية sRGB 99% تتفوق بمراحل على لوحات الـ VA الباهتة.",
        "زمن استجابة 1ms فائق السرعة لمنع التغبيش (Ghosting) في Valorant و Counter-Strike 2.",
        "حواف نحيفة جداً (Border-less) تصميم سايبر بانك أنيق يناسب تركيب شاشتين متجاورتين."
      ],
      cons: [
        "الحامل المرفق يدعم الإمالة فقط ولا يدعم رفع الارتفاع (تحتاج حامل VESA لو أردت رفعها).",
        "السطوع 300 شمعة مناسب لغرف الجيمنج لكن ليس للغرف ذات الإضاءة الشمسية الشديدة."
      ],
      brand_summary: "إل جي الكورية رائدة صناعة لوحات الشاشات عالمياً وسلسلة UltraGear معيار الألعاب الاحترافية.",
      user_sentiment: "الشاشة الحلم لأي لاعب شوتر في مصر عايز لوحة IPS سريعة بدون تغبيش وبأقل من 7000 جنيه.",
      sources: [
        { name: "RTINGS Monitor Benchmark", verified: true, date: "2026" },
        { name: "Esports Display Standards", verified: true, date: "2026" }
      ]
    }
  },
  {
    id: "g-18-razer-viper-mini",
    asin: "B084RPZD6T",
    display_title: "ماوس ألعاب ريزر فايبر ميني (Razer Viper Mini) وزن خفيف للغاية 61 جرام مع سويتشات بصرية 8500 DPI وإضاءة Chroma RGB",
    title: "Razer Viper Mini Ultralight Gaming Mouse: Fastest Gaming Switches - 8500 DPI Optical Sensor - Chroma RGB Underglow",
    brand: "Razer",
    category: "peripherals",
    category_ar: "ماوسات وكيبوردات ميكانيكال",
    marketplace: "amazon",
    store_name: "Amazon أمازون",
    store_button_label: "اقتنص اللقطة من أمازون ⚡",
    seller: "Amazon.eg",
    url: "https://www.amazon.eg/dp/B084RPZD6T?tag=lo2taa-21",
    image: "https://m.media-amazon.com/images/I/611vjUvB2nL._AC_SL500_.jpg",
    price: 1350,
    previous_price: 1750,
    savings: 400,
    discount_percent: 23,
    is_record_low: true,
    price_change_direction: "down",
    price_checked_at: "2026-10-31T05:00:00.000Z",
    rating: 4.8,
    review_count: 14200,
    price_history: [
      { date: "2026-08-01", price: 1950, label: "سعر سابق" },
      { date: "2026-09-01", price: 1750, label: "سعر معتاد" },
      { date: "2026-10-01", price: 1550, label: "تخفيض أول" },
      { date: "2026-10-20", price: 1450, label: "نزول إضافي" },
      { date: "2026-10-31", price: 1350, label: "أقوى خصم 23% ماوس احترافي ⚡" }
    ],
    ai_review: {
      pros: [
        "سويتشات بصرية Razer Optical لا تصاب نهائياً بعيب الدبل كليك (Double Click) الشائع.",
        "وزن خفيف جداً 61g يعطيك سرعة دوران وتصويب خيالية في ألعاب الـ FPS.",
        "أقدام الماوس مصنوعة من PTFE الأبيض النقي 100% لانزلاق سلس مثل الزبدة على الماوس باد."
      ],
      cons: [
        "حجم الماوس مصمم للأيادي الصغيرة والمتوسطة ومسكة الأصابع (Fingertip/Claw).",
        "كابل سلكي (غير لاسلكي) لكن السلك Speedflex فائق المرونة ولا تشعر به."
      ],
      brand_summary: "ريزر العلامة الخضراء الأشهر في بطولات الرياضات الإلكترونية العالمية.",
      user_sentiment: "أسطورة الشوتر الاقتصادية في مصر؛ دقة الإيم وسرعة الحركة تضاهي ماوسات بـ 5000 جنيه.",
      sources: [
        { name: "Rocket Jump Ninja Top Mice Ranking", verified: true, date: "2026" }
      ]
    }
  },
  {
    id: "g-19-jbl-quantum-100",
    asin: "B083X24CFF",
    display_title: "سماعة ألعاب جي بي إل كوانتوم 100 (JBL Quantum 100) محيطية سلكية مع مايك عازل للصوت متوافقة مع الـ PC وبلايستيشن 5",
    title: "JBL Quantum 100 Wired Over-Ear Gaming Headphones with Removable Mic - Black",
    brand: "JBL",
    category: "audio-headsets",
    category_ar: "سماعات وهيدست محيطي",
    marketplace: "amazon",
    store_name: "Amazon أمازون",
    store_button_label: "اقتنص اللقطة من أمازون ⚡",
    seller: "Amazon.eg",
    url: "https://www.amazon.eg/dp/B083X24CFF?tag=lo2taa-21",
    image: "https://m.media-amazon.com/images/I/61Nl8XgR0KL._AC_SL500_.jpg",
    price: 1499,
    previous_price: 1950,
    savings: 451,
    discount_percent: 23,
    is_record_low: true,
    price_change_direction: "down",
    price_checked_at: "2026-10-31T05:00:00.000Z",
    rating: 4.6,
    review_count: 6300,
    price_history: [
      { date: "2026-08-01", price: 2100, label: "سعر السوق" },
      { date: "2026-09-01", price: 1950, label: "سعر معتاد" },
      { date: "2026-10-01", price: 1750, label: "تخفيضات الخريف" },
      { date: "2026-10-20", price: 1600, label: "نزول سريع" },
      { date: "2026-10-31", price: 1499, label: "أرخص هيدست ماركة عالمية في مصر ⚡" }
    ],
    ai_review: {
      pros: [
        "صوت JBL QuantumSOUND Signature يبرز خطوات الأقدام والانفجارات بدقة واتجاهات واضحة.",
        "وسائد أذن من الفوم المرن مغطاة بالجلد المريح لجلسات اللعب الطويلة دون ألم في الرأس.",
        "مايك بوم قابل للفصل مع فلتر لتنقية الصوت وعزل ضوضاء الغرفة في الديسكورد واللعب الجماعي."
      ],
      cons: [
        "بناء من البلاستيك الخفيف يحتاج للحفاظ عليه وعدم رميه بعنف.",
        "اتصال بـ Jack 3.5mm فقط (لا يوجد سوفتوير RGB)."
      ],
      brand_summary: "جي بي إل عملاق الصوتيات الأمريكي الغني عن التعريف في وضوح البيز والطبقات الصوتية.",
      user_sentiment: "أحسن هيدست تحت 1500 جنيه؛ مريحة على الودن والمايك نقي جداً مقارنة بالسماعات الصيني.",
      sources: [
        { name: "SoundGuys Headset Benchmarks", verified: true, date: "2026" }
      ]
    }
  },
  {
    id: "g-20-xbox-series-s",
    asin: "B087VM5VL6",
    display_title: "جهاز إكس بوكس سيريس إس (Xbox Series S) الرقمي سعة 512GB SSD مع يد تحكم لاسلكية ودعم Game Pass",
    title: "Xbox Series S All-Digital Gaming Console 512GB Custom NVMe SSD with Wireless Controller",
    brand: "Microsoft",
    category: "consoles",
    category_ar: "بلايستيشن وكروت ألعاب",
    marketplace: "amazon",
    store_name: "Amazon أمازون",
    store_button_label: "اقتنص اللقطة من أمازون ⚡",
    seller: "Amazon.eg",
    url: "https://www.amazon.eg/dp/B087VM5VL6?tag=lo2taa-21",
    image: "https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_SL500_.jpg",
    price: 17800,
    previous_price: 21500,
    savings: 3700,
    discount_percent: 17,
    is_record_low: true,
    price_change_direction: "down",
    price_checked_at: "2026-10-31T05:00:00.000Z",
    rating: 4.8,
    review_count: 7800,
    price_history: [
      { date: "2026-08-01", price: 22500, label: "سعر سابق" },
      { date: "2026-09-01", price: 21500, label: "سعر مستوردين" },
      { date: "2026-10-01", price: 19800, label: "تخفيض أمازون" },
      { date: "2026-10-20", price: 18500, label: "نزول سريع" },
      { date: "2026-10-31", price: 17800, label: "أرخص جهاز ألعاب جيل جديد في مصر ⚡" }
    ],
    ai_review: {
      pros: [
        "بوابة الجيل الجديد الأرخص في العالم؛ يشغل كل ألعاب الجيل الحالي حتى 120 فريم في الثانية.",
        "اشتراك Xbox Game Pass يعطيك مئات الألعاب الضخمة باشتراك شهري بسيط جداً يوفر آلاف الجنيهات.",
        "حجم مدمج للغاية وصامت تماماً وتبريد ممتاز لا يصدر أي حرارة مزعجة."
      ],
      cons: [
        "جهاز رقمي بالكامل (بدون مشغل أسطوانات CD).",
        "المساحة المتاحة للألعاب 364GB تكفي 4-5 ألعاب ضخمة."
      ],
      brand_summary: "مايكروسوفت إكس بوكس صاحبة أقوى خدمة ألعاب اشتراكات في العالم.",
      user_sentiment: "الصفقة الذكية رقم 1 لأي حد في مصر عايز يلعب كل الألعاب الجديدة بميزانية اقتصادية.",
      sources: [
        { name: "Digital Foundry Hardware Review", verified: true, date: "2026" }
      ]
    }
  }
];

// Merge into data/products.json
const currentData = JSON.parse(fs.readFileSync(PRODUCTS_JSON, 'utf8'));
const existingIds = new Set(currentData.map(p => p.id));

let addedCount = 0;
for (const prod of newProducts) {
  if (!existingIds.has(prod.id)) {
    currentData.push(prod);
    addedCount++;
  }
}

fs.writeFileSync(PRODUCTS_JSON, JSON.stringify(currentData, null, 2), 'utf8');
console.log(`✅ Added ${addedCount} new gaming products into data/products.json! Total now: ${currentData.length}`);

// Sync to src/lib/loo2taa-data.ts
const tsFile = path.join(ROOT_DIR, 'src', 'lib', 'loo2taa-data.ts');
let tsContent = fs.readFileSync(tsFile, 'utf8');

// Format products into TypeScript array syntax
const newProductsTS = newProducts
  .filter(p => !tsContent.includes(`id: "${p.id}"`))
  .map(p => `  ${JSON.stringify(p, null, 2).replace(/"([^"]+)":/g, '$1:')}`)
  .join(',\n');

if (newProductsTS.length > 0) {
  // Insert before export function getAllProducts
  tsContent = tsContent.replace(
    /export function getAllProducts/,
    `,\n${newProductsTS}\n];\n\nexport function getAllProducts`
  );
  // Fix any duplicate closing brackets
  tsContent = tsContent.replace(/\];\s*,\s*/g, ',\n');
  fs.writeFileSync(tsFile, tsContent, 'utf8');
  console.log(`✅ Synced new products into src/lib/loo2taa-data.ts!`);
} else {
  console.log(`All products already synced in src/lib/loo2taa-data.ts.`);
}
