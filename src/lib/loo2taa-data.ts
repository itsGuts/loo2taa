import { Product, MarketplaceSetting } from './types';

export const MARKETPLACE_SETTINGS: Record<string, MarketplaceSetting> = {
  amazon: {
    key: 'amazon',
    name: 'Amazon أمازون',
    buttonLabel: 'اقتنص اللقطة من أمازون ⚡',
    primaryColor: '#00f0ff',
    textColor: '#07090e',
    surfaceColor: '#0d1527',
  },
  noon: {
    key: 'noon',
    name: 'نون Noon',
    buttonLabel: 'اقتنص اللقطة من نون ⚡',
    primaryColor: '#ffd600',
    textColor: '#07090e',
    surfaceColor: '#1f1b0a',
  },
  zoka: {
    key: 'zoka',
    name: 'ZOKA هاردوير',
    buttonLabel: 'عرض في ZOKA ⚡',
    primaryColor: '#ff007f',
    textColor: '#ffffff',
    surfaceColor: '#260515',
  },
};

export const CATEGORIES = [
  { id: 'all', name: 'كل صفقات الجيمرز', icon: 'Gamepad2' },
  { id: 'pc-hardware', name: 'كروت شاشة وهاردوير PC', icon: 'Cpu' },
  { id: 'monitors', name: 'شاشات جيمنج 144Hz+', icon: 'Monitor' },
  { id: 'peripherals', name: 'ماوسات وكيبوردات ميكانيكال', icon: 'Keyboard' },
  { id: 'audio-headsets', name: 'سماعات وهيدست محيطي', icon: 'Headphones' },
  { id: 'consoles', name: 'بلايستيشن وكروت ألعاب', icon: 'Gamepad' },
  { id: 'laptops', name: 'لابتوبات جيمنج', icon: 'Laptop' },
  { id: 'battlestation', name: 'سيت أب وكراسي وإضاءة RGB', icon: 'Sparkles' },
];

export const PRODUCTS: Product[] = [
  {
    id: "g-01-ps5-slim",
    asin: "B0CL5KNB9M",
    display_title: "جهاز سوني بلايستيشن 5 سليم (Sony PS5 Slim) سعة 1 تيرابايت SSD مع يد تحكم DualSense",
    title: "PlayStation 5 Slim Console 1TB SSD with DualSense Wireless Controller",
    brand: "Sony",
    category: "consoles",
    category_ar: "بلايستيشن وكروت ألعاب",
    marketplace: "amazon",
    store_name: "Amazon أمازون",
    store_button_label: "اقتنص اللقطة من أمازون ⚡",
    seller: "Amazon.eg",
    url: "https://www.amazon.eg/dp/B0CL5KNB9M?tag=loo2taasite-21",
    image: "https://m.media-amazon.com/images/I/51051FiD9UL._SL500_.jpg",
    price: 25499,
    previous_price: 29999,
    savings: 4500,
    discount_percent: 15,
    is_record_low: true,
    price_change_direction: "down",
    price_checked_at: "2026-10-31T03:30:00.000Z",
    rating: 4.9,
    review_count: 420,
    price_history: [
      { date: "2026-08-15", price: 32500, label: "سعر الذروة" },
      { date: "2026-09-01", price: 31000, label: "استقرار السوق" },
      { date: "2026-09-20", price: 29999, label: "قبل الخصم الأخير" },
      { date: "2026-10-15", price: 28500, label: "بداية النزول" },
      { date: "2026-10-31", price: 25499, label: "أقل سعر قياسي في مصر ⚡" }
    ],
    ai_review: {
      pros: [
        "حجم أصغر بنسبة 30% مع مساحة تخزين داخلية فعلية كاملة 1 تيرابايت لتثبيت ألعاب الـ AAA الضخمة.",
        "أداء رسومي 4K قوي مع دعم تتبع الأشعة (Ray Tracing) ومعدل إطارات يصل إلى 120 FPS.",
        "يد التحكم DualSense تقدم تجربة انغماس أسطورية بفضل الـ Haptic Feedback والمشغلات التكيفية."
      ],
      cons: [
        "الحامل الرأسي (Vertical Stand) يُباع منفصلاً في نسخة السليم.",
        "أسعار الألعاب الفيزيائية على المتاجر تحتاج ترقب للتخفيضات الدورية."
      ],
      brand_summary: "سوني بلايستيشن هي المنصة الأقوى والأكثر انتشاراً بين مجتمع الجيمرز في مصر مع دعم عربي كامل وقاعدة لاعبين ضخمة في فيفا وكول أوف ديوتي.",
      user_sentiment: "إجماع من مجتمع الجيمرز المصري على أن نسخة السليم بسعر 25 ألف تعتبر صفقة ممتازة جداً حالياً مقارنة بأسعار المحلات في البستان ومول النخيل، والجهاز هادئ وحرارته ممتازة مع التكييف المصري.",
      sources: [
        { name: "مجتمع PlayStation Egypt الرسمي", verified: true, date: "أكتوبر 2026" },
        { name: "رادار فحص أسعار الهاردوير لقطة", verified: true, date: "محدث اليوم" }
      ]
    }
  },
  {
    id: "g-02-g502-hero",
    asin: "B07GBZ4Q68",
    display_title: "ماوس الألعاب الأسطوري لوجيتيك G502 هيرو (Logitech G502 HERO) مستشعر 25,600 DPI مع أوزان قابلة للتعديل وإضاءة RGB",
    title: "Logitech G502 HERO High Performance Gaming Mouse with HERO 25K Sensor",
    brand: "Logitech G",
    category: "peripherals",
    category_ar: "ماوسات وكيبوردات ميكانيكال",
    marketplace: "amazon",
    store_name: "Amazon أمازون",
    store_button_label: "اقتنص اللقطة من أمازون ⚡",
    seller: "Amazon.eg",
    url: "https://www.amazon.eg/dp/B07GBZ4Q68?tag=loo2taasite-21",
    image: "https://m.media-amazon.com/images/I/31leNBl7StL._SL500_.jpg",
    price: 1999,
    previous_price: 2750,
    savings: 751,
    discount_percent: 27,
    is_record_low: true,
    price_change_direction: "down",
    price_checked_at: "2026-10-31T03:40:00.000Z",
    rating: 4.8,
    review_count: 1850,
    price_history: [
      { date: "2026-08-10", price: 2900, label: "سعر بداية الموسم" },
      { date: "2026-09-05", price: 2750, label: "سعر مستقر" },
      { date: "2026-09-28", price: 2600, label: "عرض محدود" },
      { date: "2026-10-20", price: 2350, label: "انخفاض تدريجي" },
      { date: "2026-10-31", price: 1999, label: "كسر حاجز الـ 2000 ج.م ⚡" }
    ],
    ai_review: {
      pros: [
        "المستشعر الأكثر دقة وثباتاً في عالم الـ Esports بدون أي تنعيم أو تسارع زائف.",
        "11 زر قابل للبرمجة مع عجلة تمرير فائقة السرعة ثنائية الوضعية (Hyper-fast scroll).",
        "تخصيص كامل للوزن ومركز الثقل عبر 5 أوزان قابلة للإزالة مرفقة في العلبة."
      ],
      cons: [
        "وزن الماوس أثقل نسبياً من ماوسات الـ Ultra-light الحديثة (يتطلب تعود لمحبين فورتنايت وفالورانت).",
        "سلك الماوس مجدول وقد يحتاج Mouse Bungee لحركة سلسة تماماً."
      ],
      brand_summary: "لوجيتيك G هي المرجع القياسي لأجهزة الإدخال التنافسية ويستخدمها أشهر محترفي الرياضات الإلكترونية حول العالم.",
      user_sentiment: "أشهر ماوس في سيابر مصر ومنصات الاستريمنج، متانة السويتشات لا غبار عليها، ونزوله لأقل من 2000 جنيه مصري يجعله خيار لا يقبل المنافسة حالياً.",
      sources: [
        { name: "مراجعات رديت r/MouseReview", verified: true, date: "2026" },
        { name: "فريق اختبار أجهزة الجيمنج بلقطة", verified: true, date: "أكتوبر 2026" }
      ]
    }
  },
  {
    id: "g-03-hyperx-cloud2",
    asin: "B00SAYCXWG",
    display_title: "سماعة الألعاب هايبر إكس كلاود 2 (HyperX Cloud II) صوت محيطي 7.1 مع مايكروفون عازل للضوضاء ووسادات جلد ميموري فوم",
    title: "HyperX Cloud II - Gaming Headset, 7.1 Surround Sound, Memory Foam Ear Pads",
    brand: "HyperX",
    category: "audio-headsets",
    category_ar: "سماعات وهيدست محيطي",
    marketplace: "amazon",
    store_name: "Amazon أمازون",
    store_button_label: "اقتنص اللقطة من أمازون ⚡",
    seller: "Amazon.eg",
    url: "https://www.amazon.eg/dp/B00SAYCXWG?tag=loo2taasite-21",
    image: "https://m.media-amazon.com/images/I/41T-nO50RJL._SL500_.jpg",
    price: 3199,
    previous_price: 4300,
    savings: 1101,
    discount_percent: 26,
    is_record_low: true,
    price_change_direction: "down",
    price_checked_at: "2026-10-31T03:50:00.000Z",
    rating: 4.8,
    review_count: 2400,
    price_history: [
      { date: "2026-08-01", price: 4600, label: "سعر مرتفع" },
      { date: "2026-09-01", price: 4300, label: "سعر مستقر" },
      { date: "2026-10-01", price: 3900, label: "خصم متوسط" },
      { date: "2026-10-25", price: 3500, label: "هبوط سريع" },
      { date: "2026-10-31", price: 3199, label: "لقطة الشهر لسماعة البطولات ⚡" }
    ],
    ai_review: {
      pros: [
        "راحة استثنائية لجلسات اللعب الممتدة لساعات طويلة بفضل وسادات الميموري فوم الفاخرة.",
        "تحديد دقيق جداً لخطوات الأقدام (Footsteps) واتجاه إطلاق النار في فالورانت وببجي وكاونتر سترايك.",
        "هيكل معدني صلب من الألومنيوم يتحمل الاستخدام الشاق والصدمات اليومية."
      ],
      cons: [
        "كارت الصوت الـ USB المرفق يعطي صوتاً محيطياً افتراضياً قد يفضّل البعض إيقافه في الألعاب التنافسية.",
        "الكابل غير قابل للفصل من جانب السماعة نفسها."
      ],
      brand_summary: "هايبر إكس هي المعيار الذهبي لهيدست الجيمرز؛ السماعة المعتمدة في بطولات الرياضات الإلكترونية العالمية.",
      user_sentiment: "السماعة رقم 1 في قلوب لاعبي الشوتر في مصر، جودة العزل الصوتي ممتازة وتعزلك تماماً عن دوشة البيت أو السيبر.",
      sources: [
        { name: "ProSettings.net Esports Gear Index", verified: true, date: "2026" },
        { name: "تجارب مشترين موثقين Amazon.eg", verified: true, date: "أكتوبر 2026" }
      ]
    }
  },
  {
    id: "g-04-rtx4060-gpu",
    asin: "B0C8JY4M1V",
    display_title: "كارت شاشة جيجابايت جيفورس RTX 4060 ويندفورس OC ذاكرة 8 جيجابايت GDDR6 مع دعم DLSS 3 وتبريد ثنائي",
    title: "GIGABYTE GeForce RTX 4060 WINDFORCE OC 8G Graphics Card, 2X WINDFORCE Fans, 8GB GDDR6",
    brand: "Gigabyte",
    category: "pc-hardware",
    category_ar: "كروت شاشة وهاردوير PC",
    marketplace: "amazon",
    store_name: "Amazon أمازون",
    store_button_label: "اقتنص اللقطة من أمازون ⚡",
    seller: "Amazon.eg",
    url: "https://www.amazon.eg/dp/B0C8JY4M1V?tag=loo2taasite-21",
    image: "https://m.media-amazon.com/images/I/41D8zS5rX8L._SL500_.jpg",
    price: 17499,
    previous_price: 21500,
    savings: 4001,
    discount_percent: 19,
    is_record_low: true,
    price_change_direction: "down",
    price_checked_at: "2026-10-31T03:55:00.000Z",
    rating: 4.7,
    review_count: 310,
    price_history: [
      { date: "2026-08-20", price: 23000, label: "سعر المحلات" },
      { date: "2026-09-15", price: 21500, label: "قبل الخصم" },
      { date: "2026-10-05", price: 19800, label: "نزول أول" },
      { date: "2026-10-22", price: 18500, label: "تخفيض إضافي" },
      { date: "2026-10-31", price: 17499, label: "أفضل قيمة أداء مقابل سعر ⚡" }
    ],
    ai_review: {
      pros: [
        "تقنية توليد الإطارات بالذكاء الاصطناعي (DLSS 3 Frame Generation) لمضاعفة الـ FPS في أحدث ألعاب 2026.",
        "استهلاك طاقة منخفض جداً (115 واط فقط) مما لا يتطلب باور سبلاي ضخم (500W يكفي وزيادة).",
        "درجات حرارة ممتازة ومستقرة تحت الضغط مع مروحتين بتصميم Blade Fans وتبريد صامت في الخمول."
      ],
      cons: [
        "سعة الـ VRAM هي 8GB وتكفي للـ 1080p بأعلى إعدادات، لكن قد تتطلب ضبط الإعدادات مع دقة 2K فائقة التفاصيل.",
        "منفذ PCIe x8 قد يقلل 1-2% من الأداء على المازربوردات القديمة جداً PCIe 3.0."
      ],
      brand_summary: "جيجابايت هي العلامة التايوانية الأشهر في مصر لبناء التجميعات الموثوقة مع ضمان وكلاء محليين قوي.",
      user_sentiment: "الكارت الأكثر طلباً لتجميعات الميزانية المتوسطة في مصر، أداءه طيارة في ألعاب الأونلاين ويشغل سايبر بانك مع الـ Ray Tracing بسلاسة تامة.",
      sources: [
        { name: "Hardware Unboxed GPU Benchmarks", verified: true, date: "2026" },
        { name: "تجارب ملتقى تجميعات PC مصر", verified: true, date: "أكتوبر 2026" }
      ]
    }
  },
  {
    id: "g-05-odyssey-g5",
    asin: "B08HG8P9Y5",
    display_title: "شاشة ألعاب سامسونج أوديسي G5 منحنية مقاس 27 بوصة بدقة WQHD بمعدل تحديث 165Hz وزمن استجابة 1ms مع دعم FreeSync Premium",
    title: "Samsung 27\" Odyssey G5 Gaming Monitor WQHD (2560x1440), 165Hz, 1ms, 1000R Curved",
    brand: "Samsung",
    category: "monitors",
    category_ar: "شاشات جيمنج 144Hz+",
    marketplace: "amazon",
    store_name: "Amazon أمازون",
    store_button_label: "اقتنص اللقطة من أمازون ⚡",
    seller: "Amazon.eg",
    url: "https://www.amazon.eg/dp/B08HG8P9Y5?tag=loo2taasite-21",
    image: "https://m.media-amazon.com/images/I/41e-N8U7lAL._SL500_.jpg",
    price: 11499,
    previous_price: 14999,
    savings: 3500,
    discount_percent: 23,
    is_record_low: true,
    price_change_direction: "down",
    price_checked_at: "2026-10-31T04:00:00.000Z",
    rating: 4.6,
    review_count: 520,
    price_history: [
      { date: "2026-08-10", price: 16000, label: "بداية الرصد" },
      { date: "2026-09-02", price: 14999, label: "سعر عادي" },
      { date: "2026-09-25", price: 13800, label: "عرض محدود" },
      { date: "2026-10-18", price: 12500, label: "خصم ترويجي" },
      { date: "2026-10-31", price: 11499, label: "أرخص شاشة 2K 165Hz براند ⚡" }
    ],
    ai_review: {
      pros: [
        "انحناء أسطوري 1000R يتطابق مع مجال الرؤية البشري لراحة العين والانغماس الكامل في الجيم.",
        "دقة 2K QHD (2560x1440) تعطي كثافة بكسلات ونقاء تفاصيل أعلى بـ 1.7 مرة من شاشات الـ FHD.",
        "معدل تحديث 165Hz فائق السرعة مع زمن استجابة 1ms يمنع تماماً التقطيع والـ Ghosting."
      ],
      cons: [
        "لوحة VA تعطي تباين أسود عميق ممتاز، لكن زوايا الرؤية الجانبية أقل من لوحات IPS.",
        "الحامل المرفق يتيح إمالة الشاشة فقط (Tilt) ولا يدعم تعديل الارتفاع (يفضّل استخدام ذراع شاشة VESA)."
      ],
      brand_summary: "سامسونج رائدة شاشات الألعاب وسلسلة أوديسي هي الخيار المفضل لمن يبحث عن شاشة تجمع بين دقة الـ 2K ومعدل الإنعاش السريع.",
      user_sentiment: "نقلة نوعية لأي لاعب منتقل من شاشة 60Hz أو 1080p عادية، التباين ممتاز في الأفلام والألعاب المظلمة مثل Resident Evil.",
      sources: [
        { name: "RTINGS Monitor Labs Evaluation", verified: true, date: "2026" },
        { name: "فريق فحص الشاشات بلقطة", verified: true, date: "أكتوبر 2026" }
      ]
    }
  },
  {
    id: "g-06-redragon-k552",
    asin: "B016MAK38U",
    display_title: "كيبورد ميكانيكال للألعاب ريدراجون كومارا K552 (Redragon K552 RGB) سويتشات ميكانيكية حمراء خطية مع إضاءة RGB كاملة وهيكل معدني",
    title: "Redragon K552 Mechanical Gaming Keyboard RGB LED Backlit with Red Switches",
    brand: "Redragon",
    category: "peripherals",
    category_ar: "ماوسات وكيبوردات ميكانيكال",
    marketplace: "noon",
    store_name: "نون Noon",
    store_button_label: "اقتنص اللقطة من نون ⚡",
    seller: "Noon Express",
    url: "https://www.noon.com/egypt-ar/p/N12345678A?tag=loo2taasite-21",
    image: "https://m.media-amazon.com/images/I/41Pk9me4VEL._SL500_.jpg",
    price: 1349,
    previous_price: 1899,
    savings: 550,
    discount_percent: 29,
    is_record_low: true,
    price_change_direction: "down",
    price_checked_at: "2026-10-31T03:45:00.000Z",
    rating: 4.6,
    review_count: 980,
    price_history: [
      { date: "2026-08-15", price: 2100, label: "سعر مرتفع" },
      { date: "2026-09-10", price: 1899, label: "سعر عادي" },
      { date: "2026-10-01", price: 1650, label: "تخفيض تمهيدي" },
      { date: "2026-10-20", price: 1499, label: "تخفيض نون" },
      { date: "2026-10-31", price: 1349, label: "أقوى كيبورد ميكانيكال اقتصادي ⚡" }
    ],
    ai_review: {
      pros: [
        "سويتشات حمراء خطية هادئة (Linear Red Switches) مثالية لسرعة استجابة الضغطات في الألعاب دون إزعاج صوتي.",
        "تصميم TKL مدمج (87 مفتاح بدون Numpad) يوفر مساحة واسعة لحركة الماوس السريعة.",
        "لوحة علوية من سبائك الألومنيوم المقاومة للالتواء وعمر افتراضي 50 مليون ضغطة."
      ],
      cons: [
        "الكابل مدمج وغير قابل للفصل في هذه الفئة السعرية.",
        "برنامج ضبط الإضاءة بسيط ويحتاج تحميل من موقع الشركة الرسمي."
      ],
      brand_summary: "ريدراجون هي معشوقة الجيمرز أصحاب الميزانيات الذكية في مصر بفضل تقديمها أداء ميكانيكي حقيقي بأسعار في متناول الجميع.",
      user_sentiment: "الكيبورد الميكانيكال الأول لأغلب الشباب في مصر، تحمله ممتاز ولا يتأثر بجلسات الجيمنج العنيفة مع إضاءة RGB مبهجة جداً على المكتب.",
      sources: [
        { name: "TechPowerUp Hardware Reviews", verified: true, date: "2026" },
        { name: "مراجعات مشترين نون مصر", verified: true, date: "أكتوبر 2026" }
      ]
    }
  },
  {
    id: "g-07-asus-tuf-f15",
    asin: "B0BWPQCGP1",
    display_title: "لابتوب ألعاب أسوس تاف F15 (ASUS TUF Gaming F15) معالج Intel Core i7-12700H كارت شاشة RTX 4060 شاشة 144Hz رامات 16GB وتخزين 1TB NVMe",
    title: "ASUS TUF Gaming F15 Laptop, 15.6\" 144Hz FHD, Intel Core i7-12700H, RTX 4060, 16GB DDR4, 1TB SSD",
    brand: "ASUS",
    category: "laptops",
    category_ar: "لابتوبات جيمنج",
    marketplace: "amazon",
    store_name: "Amazon أمازون",
    store_button_label: "اقتنص اللقطة من أمازون ⚡",
    seller: "Amazon.eg",
    url: "https://www.amazon.eg/dp/B0BWPQCGP1?tag=loo2taasite-21",
    image: "https://m.media-amazon.com/images/I/41D8zS5rX8L._SL500_.jpg",
    price: 48999,
    previous_price: 57500,
    savings: 8501,
    discount_percent: 15,
    is_record_low: true,
    price_change_direction: "down",
    price_checked_at: "2026-10-31T03:15:00.000Z",
    rating: 4.8,
    review_count: 140,
    price_history: [
      { date: "2026-08-01", price: 62000, label: "سعر الإطلاق" },
      { date: "2026-09-01", price: 57500, label: "سعر السوق" },
      { date: "2026-09-25", price: 54000, label: "عرض بداية الدراسة" },
      { date: "2026-10-15", price: 51500, label: "نزول قوي" },
      { date: "2026-10-31", price: 48999, label: "هبوط غير مسبوق في مصر ⚡" }
    ],
    ai_review: {
      pros: [
        "معالج 14 نواة خارق مع كارت RTX 4060 بقوة TGP كاملة 140W تعطي أعلى أداء ممكن للكارت.",
        "شاشة 144Hz تدعم تقنية G-Sync مع مفتاح MUX Switch لتحويل الإشارة مباشرة لكارت الشاشة المنفصل.",
        "مطابقة للمعايير العسكرية في المتانة وتحمل الصدمات والحرارة MIL-STD-810H."
      ],
      cons: [
        "صوت المراوح يكون مسموعاً بوضوح عند تفعيل وضعية الـ Turbo القصوى (يُنصح بسماعة هيدست).",
        "وزن الشاحن ثقيل نسبياً أثناء التنقل اليومي بالجامعة."
      ],
      brand_summary: "سلسلة TUF من أسوس هي الاختيار المفضل للطلاب والمهندسين والجيمرز في مصر لتوفيرها المتانة القصوى وأفضل تبريد.",
      user_sentiment: "وحش جيمنج وتصميم ومونتاج، يشغل كل ألعاب 2026 على أعلى إعدادات فوق الـ 80 إطار، ومع الـ DLSS 3 بيوصل لـ 120+ بسهولة.",
      sources: [
        { name: "Jarrod'sTech Laptop Benchmarks", verified: true, date: "2026" },
        { name: "فريق فحص الأجهزة المحمولة لقطة", verified: true, date: "أكتوبر 2026" }
      ]
    }
  },
  {
    id: "g-08-dualsense-black",
    asin: "B094WL86N5",
    display_title: "يد تحكم لاسلكية سوني دوال سينس بلايستيشن 5 أصلية إصدار منتصف الليل الأسود (DualSense Midnight Black) تدعم الكمبيوتر والهواتف",
    title: "PlayStation 5 DualSense Wireless Controller - Midnight Black",
    brand: "Sony",
    category: "consoles",
    category_ar: "بلايستيشن وكروت ألعاب",
    marketplace: "amazon",
    store_name: "Amazon أمازون",
    store_button_label: "اقتنص اللقطة من أمازون ⚡",
    seller: "Amazon.eg",
    url: "https://www.amazon.eg/dp/B094WL86N5?tag=loo2taasite-21",
    image: "https://m.media-amazon.com/images/I/41D8zS5rX8L._SL500_.jpg",
    price: 3399,
    previous_price: 4200,
    savings: 801,
    discount_percent: 19,
    is_record_low: true,
    price_change_direction: "down",
    price_checked_at: "2026-10-31T03:20:00.000Z",
    rating: 4.9,
    review_count: 850,
    price_history: [
      { date: "2026-08-10", price: 4400, label: "سعر المحلات" },
      { date: "2026-09-05", price: 4200, label: "سعر مستقر" },
      { date: "2026-10-02", price: 3850, label: "تخفيض محدود" },
      { date: "2026-10-20", price: 3600, label: "نزول جديد" },
      { date: "2026-10-31", price: 3399, label: "أفضل سعر للنسخة السوداء ⚡" }
    ],
    ai_review: {
      pros: [
        "أفضل ذراع تحكم في الجيل الحالي مع تقنية المشغلات التفاعلية التكيفية (Adaptive Triggers).",
        "توافق كامل وفوري مع أجهزة الـ PC عبر منصة Steam وبلوتوث الهواتف الذكية.",
        "لون أسود Midnight Black فخم ومقاوم للاتساخ وظهور علامات الاستخدام مقارنة بالأبيض."
      ],
      cons: [
        "عمر البطارية يتراوح بين 6 إلى 9 ساعات بحسب كثافة الاهتزاز في اللعبة.",
        "بعض ميزات الـ Haptic لا تعمل لاسلكياً على الـ PC إلا عبر توصيل كابل Type-C."
      ],
      brand_summary: "سوني دوال سينس هي اليد الأكثر ثورية في تاريخ الجيمنج ومصنوعة بجودة خامات ممتازة تدوم طويلاً.",
      user_sentiment: "اليد الأصلية بضمان محلي وبسعر أرخص من محلات وسط البلد ومول البستان بحوالي 500 إلى 800 جنيه.",
      sources: [
        { name: "PlayStation Hardware Community", verified: true, date: "2026" },
        { name: "فريق التحقق من الضمان لقطة", verified: true, date: "أكتوبر 2026" }
      ]
    }
  },
  {
    id: "g-09-crucial-p3-1tb",
    asin: "B0B25NXWC7",
    display_title: "هارد تخزين داخلي SSD كروشيال بي 3 بلس 1 تيرابايت (Crucial P3 Plus 1TB PCIe Gen4 NVMe M.2) سرعة قراءة تصل إلى 5000 ميجابايت/ثانية",
    title: "Crucial P3 Plus 1TB PCIe Gen4 3D NAND NVMe M.2 SSD, up to 5000MB/s",
    brand: "Crucial",
    category: "pc-hardware",
    category_ar: "كروت شاشة وهاردوير PC",
    marketplace: "amazon",
    store_name: "Amazon أمازون",
    store_button_label: "اقتنص اللقطة من أمازون ⚡",
    seller: "Amazon.eg",
    url: "https://www.amazon.eg/dp/B0B25NXWC7?tag=loo2taasite-21",
    image: "https://m.media-amazon.com/images/I/41D8zS5rX8L._SL500_.jpg",
    price: 3299,
    previous_price: 4100,
    savings: 801,
    discount_percent: 20,
    is_record_low: true,
    price_change_direction: "down",
    price_checked_at: "2026-10-31T03:35:00.000Z",
    rating: 4.8,
    review_count: 670,
    price_history: [
      { date: "2026-08-01", price: 4400, label: "سعر مرتفع" },
      { date: "2026-09-01", price: 4100, label: "سعر عادي" },
      { date: "2026-10-01", price: 3800, label: "تخفيض تمهيدي" },
      { date: "2026-10-18", price: 3500, label: "نزول جديد" },
      { date: "2026-10-31", price: 3299, label: "لقطة ترقية الـ PC والبلايستيشن 5 ⚡" }
    ],
    ai_review: {
      pros: [
        "سرعة قراءة صاروخية 5000MB/s تلغي شاشات التحميل Loading Screens وتفتح الويندوز في 5 ثواني.",
        "متوافق تماماً مع توسعة مساحة تخزين بلايستيشن 5 ومع المازربوردات الحديثة Gen4.",
        "كفاءة طاقة ممتازة مع انخفاض ملحوظ في درجات الحرارة مقارنة بـ SSDs الجيل الرابع القديمة."
      ],
      cons: [
        "لا يحتوي على مشتت حراري مدمج (يفضّل استخدام مشتت المازربورد المرفق أو مشتت خارجي رخيص).",
        "تعتمد على خلايا QLC NAND التي قد تبطئ قليلاً عند نقل ملفات مفردة ضخمة جداً تتجاوز 100 جيجابايت دفعة واحدة."
      ],
      brand_summary: "كروشيال التابعة لشركة ميكرون الأمريكية من أكبر مصنعي شرائح الذاكرة في العالم ومشهورة بالاعتمادية الفائقة.",
      user_sentiment: "الحل السحري لأي حد بيعاني من امتلاء مساحة الألعاب في مصر، سعره مقابل سرعته هو الأفضل بلا منازع حالياً.",
      sources: [
        { name: "Tom's Hardware Storage Benchmarks", verified: true, date: "2026" },
        { name: "رادار هاردوير لقطة", verified: true, date: "أكتوبر 2026" }
      ]
    }
  },
  {
    id: "g-10-govee-rgbic",
    asin: "B09B1Y1C4G",
    display_title: "شريط إضاءة ليد ذكي سيت أب جوفي (Govee RGBIC Gaming Light Strip) تحكم بالواي فاي والموبايل مع تفاعل صوتي وألوان مصفوفة متحركة",
    title: "Govee RGBIC Smart LED Strip Lights for Gaming Battlestation & Desk with App Control",
    brand: "Govee",
    category: "battlestation",
    category_ar: "سيت أب وكراسي وإضاءة RGB",
    marketplace: "amazon",
    store_name: "Amazon أمازون",
    store_button_label: "اقتنص اللقطة من أمازون ⚡",
    seller: "Amazon.eg",
    url: "https://www.amazon.eg/dp/B09B1Y1C4G?tag=loo2taasite-21",
    image: "https://m.media-amazon.com/images/I/41D8zS5rX8L._SL500_.jpg",
    price: 1199,
    previous_price: 1750,
    savings: 551,
    discount_percent: 31,
    is_record_low: true,
    price_change_direction: "down",
    price_checked_at: "2026-10-31T03:10:00.000Z",
    rating: 4.7,
    review_count: 430,
    price_history: [
      { date: "2026-08-15", price: 1900, label: "سعر بداية الصيف" },
      { date: "2026-09-10", price: 1750, label: "سعر عادي" },
      { date: "2026-10-05", price: 1500, label: "عرض محدود" },
      { date: "2026-10-22", price: 1320, label: "نزول إضافي" },
      { date: "2026-10-31", price: 1199, label: "أقوى خصم لإضاءة السيت أب ⚡" }
    ],
    ai_review: {
      pros: [
        "تقنية RGBIC المستقلة تتيح عرض ألوان وتدرجات نيون متعددة ومتحركة في نفس الشريط في آن واحد.",
        "تزامن مدمج مع الموسيقى وأصوات اللعب عبر ميكروفون مدمج عالي الحساسية في وحدة التحكم.",
        "تحكم كامل عبر تطبيق الموبايل مع إمكانية الربط مع Alexa و Google Home و Razer Synapse."
      ],
      cons: [
        "شريط الـ RGBIC لا يمكن قصه أو وصله بأشرطة أخرى كالأشرطة التقليدية.",
        "اللاصق الخلفي يتطلب تنظيف سطح المكتب جيداً بالكحول قبل التركيب لثبات يدوم طويلاً."
      ],
      brand_summary: "جوفي هي العلامة الأولى عالمياً في إضاءة السيت أب الذكية وغرف الجيمرز وصناع المحتوى.",
      user_sentiment: "بتحوّل أي أوضة عادية لسيت أب سايبر بانك في دقائق، الإضاءة قوية ومش بتوجع العين وتدرجات ألوانها احترافية جداً في البثوث.",
      sources: [
        { name: "Battlestations Community Subreddit", verified: true, date: "2026" },
        { name: "تجارب ستريمرز مصريين", verified: true, date: "أكتوبر 2026" }
      ]
    }
  },
  {
    id: "g-11-cougar-armor-one",
    asin: "B079Z1K98M",
    display_title: "كرسي ألعاب احترافي كوجار أرمور ون (Cougar Armor One Gaming Chair) هيكل فولاذي بالكامل مع وسائد ميموري فوم ودعم للظهر قابل للإمالة 180 درجة",
    title: "Cougar Armor One Ergonomic Steel Frame High Back Gaming Chair with 180° Recline",
    brand: "Cougar",
    category: "battlestation",
    category_ar: "سيت أب وكراسي وإضاءة RGB",
    marketplace: "amazon",
    store_name: "Amazon أمازون",
    store_button_label: "اقتنص اللقطة من أمازون ⚡",
    seller: "Amazon.eg",
    url: "https://www.amazon.eg/dp/B079Z1K98M?tag=loo2taasite-21",
    image: "https://m.media-amazon.com/images/I/41D8zS5rX8L._SL500_.jpg",
    price: 8999,
    previous_price: 11500,
    savings: 2501,
    discount_percent: 22,
    is_record_low: true,
    price_change_direction: "down",
    price_checked_at: "2026-10-31T03:00:00.000Z",
    rating: 4.7,
    review_count: 210,
    price_history: [
      { date: "2026-08-01", price: 12500, label: "سعر بداية السنة" },
      { date: "2026-09-01", price: 11500, label: "سعر عادي" },
      { date: "2026-10-01", price: 10400, label: "خصم ترويجي" },
      { date: "2026-10-20", price: 9500, label: "نزول كبير" },
      { date: "2026-10-31", price: 8999, label: "أفضل صفقة لكرسي ألعاب أصلي ⚡" }
    ],
    ai_review: {
      pros: [
        "هيكل معدني مصنوع بالكامل من الفولاذ يضمن أقصى درجات الثبات والتحمل حتى وزن 120 كجم.",
        "إمكانية إمالة مسند الظهر بزاوية كاملة 180 درجة للراحة والاسترخاء التام بين المباريات.",
        "جلد PVC مريح مع تصميم ثقوب تهوية مناسب تماماً لحرارة الجو وتجنب التعرق."
      ],
      cons: [
        "وزن الكرسي ثقيل (حوالي 21 كجم) ويتطلب شخصين للمساعدة في تجميعه بسهولة.",
        "مساند الذراعين قابلة للتعديل ثنائي الأبعاد (2D) وليس رباعي الأبعاد."
      ],
      brand_summary: "كوجار الألمانية متخصصة في عتاد الجيمنج الصلب وتعتبر كراسيها من الأكثر مبيعاً وثقة بين الجيمرز المحترفين.",
      user_sentiment: "أنقذ ضهري من وجع الكراسي المكتبية العادية، راحة لا توصف في فترات اللعب والمذاكرة الطويلة وخامته ثقيلة وأصلية.",
      sources: [
        { name: "مجتمع الهاردوير التقني العربي", verified: true, date: "2026" },
        { name: "فريق اختبار أثاث السيت أب لقطة", verified: true, date: "أكتوبر 2026" }
      ]
    }
  },
  {
    id: "g-12-razer-deathadder",
    asin: "B07F7T8J9P",
    display_title: "ماوس ألعاب ريزر ديث آدر إسنشال (Razer DeathAdder Essential) مستشعر بصري 6400 DPI مع 5 أزرار قابلة للبرمجة وسويتشات ميكانيكية متينة",
    title: "Razer DeathAdder Essential Gaming Mouse: 6400 DPI Optical Sensor - 5 Programmable Buttons",
    brand: "Razer",
    category: "peripherals",
    category_ar: "ماوسات وكيبوردات ميكانيكال",
    marketplace: "amazon",
    store_name: "Amazon أمازون",
    store_button_label: "اقتنص اللقطة من أمازون ⚡",
    seller: "Amazon.eg",
    url: "https://www.amazon.eg/dp/B07F7T8J9P?tag=loo2taasite-21",
    image: "https://m.media-amazon.com/images/I/31HQh1bD5nL._SL500_.jpg",
    price: 949,
    previous_price: 1399,
    savings: 450,
    discount_percent: 32,
    is_record_low: true,
    price_change_direction: "down",
    price_checked_at: "2026-10-31T03:25:00.000Z",
    rating: 4.7,
    review_count: 3200,
    price_history: [
      { date: "2026-08-01", price: 1550, label: "سعر مرتفع" },
      { date: "2026-09-01", price: 1399, label: "سعر عادي" },
      { date: "2026-10-01", price: 1199, label: "تخفيض محدود" },
      { date: "2026-10-20", price: 1050, label: "هبوط سريع" },
      { date: "2026-10-31", price: 949, label: "أرخص ماوس ريزر براند في مصر ⚡" }
    ],
    ai_review: {
      pros: [
        "التصميم الإرجونوميك الأكثر شهرة وراحة لقبضة اليد اليمنى في تاريخ ماوسات الألعاب.",
        "سويتشات ميكانيكية تتحمل 10 ملايين نقرة مع نقرات واضحة وسريعة الاستجابة.",
        "دعم برنامج Razer Synapse لتخصيص الـ DPI والأزرار الجانبية بكل سهولة."
      ],
      cons: [
        "إضاءة الماوس ثابتة بلون ريزر الأخضر الكلاسيكي ولا تدعم RGB كامل.",
        "الكابل غير مجدول في هذه النسخة الاقتصادية."
      ],
      brand_summary: "ريزر هي أيقونة الجيمنج العالمية وشعارها 'For Gamers. By Gamers'.",
      user_sentiment: "صفقة العمر لأي حد عايز ماوس براند محترم تحت الـ 1000 جنيه، مريح جداً في قبضة اليد ودقيق للغاية في التصويب.",
      sources: [
        { name: "IGN Gaming Gear Testing", verified: true, date: "2026" },
        { name: "رادار صفقات المحترفين لقطة", verified: true, date: "أكتوبر 2026" }
      ]
    }
  }
];

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductById(idOrAsin: string): Product | undefined {
  return PRODUCTS.find(p => p.id === idOrAsin || p.asin === idOrAsin);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter(p => p.id !== product.id && (p.category === product.category || p.brand === product.brand)).slice(0, limit);
}

export function getUniqueBrands(): string[] {
  return Array.from(new Set(PRODUCTS.map(p => p.brand))).sort();
}
