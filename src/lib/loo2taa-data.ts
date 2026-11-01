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
    "id": "g-01-ps5-slim",
    "asin": "B08FC5L3RG",
    "display_title": "جهاز سوني بلايستيشن 5 القياسي (Sony PlayStation 5 Console) سعة 825GB SSD مع ذراع تحكم لاسلكي DualSense",
    "title": "Sony Playstation 5 Console Standard Edition - International Version",
    "brand": "Sony",
    "category": "consoles",
    "category_ar": "بلايستيشن وكروت ألعاب",
    "marketplace": "amazon",
    "store_name": "Amazon أمازون",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B08FC5L3RG?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71vWi5Iuz3L._AC_SL1500_.jpg",
    "price": 31499,
    "previous_price": 36999,
    "savings": 5500,
    "discount_percent": 15,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T02:02:17.187Z",
    "rating": 4.9,
    "review_count": 420,
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 32500,
        "label": "سعر الذروة"
      },
      {
        "date": "2026-09-01",
        "price": 31000,
        "label": "استقرار السوق"
      },
      {
        "date": "2026-09-20",
        "price": 29999,
        "label": "قبل الخصم الأخير"
      },
      {
        "date": "2026-10-15",
        "price": 28500,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 25499,
        "label": "أقل سعر قياسي في مصر ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وقيمة قوية مقابل السعر للألعاب التنافسية."
      ],
      "cons": [
        "الكميات قد تنفد سريعاً أثناء فترة العروض."
      ],
      "brand_summary": "Sony من أشهر الشركات الموثوقة في عتاد الجيمنج.",
      "user_sentiment": "95% من المشترين يوصون بهذا المنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "أكتوبر 2026"
        }
      ]
    }
  },
  {
    "id": "g-02-g502-hero",
    "asin": "B07GBZ4Q68",
    "display_title": "ماوس الألعاب الأسطوري لوجيتيك G502 هيرو (Logitech G502 HERO) مستشعر 25,600 DPI مع أوزان قابلة للتعديل وإضاءة RGB",
    "title": "Logitech G502 HERO High Performance Gaming Mouse\" )",
    "brand": "Logitech G",
    "category": "peripherals",
    "category_ar": "ماوسات وكيبوردات ميكانيكال",
    "marketplace": "amazon",
    "store_name": "Amazon أمازون",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B07GBZ4Q68?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg",
    "price": 2501,
    "previous_price": 3051,
    "savings": 550,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T02:02:18.796Z",
    "rating": 4.8,
    "review_count": 1850,
    "price_history": [
      {
        "date": "2026-08-10",
        "price": 2900,
        "label": "سعر بداية الموسم"
      },
      {
        "date": "2026-09-05",
        "price": 2750,
        "label": "سعر مستقر"
      },
      {
        "date": "2026-09-28",
        "price": 2600,
        "label": "عرض محدود"
      },
      {
        "date": "2026-10-20",
        "price": 2350,
        "label": "انخفاض تدريجي"
      },
      {
        "date": "2026-10-31",
        "price": 1999,
        "label": "كسر حاجز الـ 2000 ج.م ⚡"
      },
      {
        "date": "2026-10-31",
        "price": 2501,
        "label": "تحديث سعر"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وقيمة قوية مقابل السعر للألعاب التنافسية."
      ],
      "cons": [
        "الكميات قد تنفد سريعاً أثناء فترة العروض."
      ],
      "brand_summary": "Logitech G من أشهر الشركات الموثوقة في عتاد الجيمنج.",
      "user_sentiment": "95% من المشترين يوصون بهذا المنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "أكتوبر 2026"
        }
      ]
    }
  },
  {
    "id": "g-03-hyperx-cloud2",
    "asin": "B00SAYCXWG",
    "display_title": "سماعة الألعاب هايبر إكس كلاود 2 (HyperX Cloud II) صوت محيطي 7.1 مع مايكروفون عازل للضوضاء ووسادات جلد ميموري فوم",
    "title": "HyperX Cloud II Gaming Headset for PC & PS4 & Xbox One, Nintendo Switch, Red, Wired, One Size Headphones Headset",
    "brand": "HyperX",
    "category": "audio-headsets",
    "category_ar": "سماعات وهيدست محيطي",
    "marketplace": "amazon",
    "store_name": "Amazon أمازون",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B00SAYCXWG?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71ltsViEA8L._AC_SL1500_.jpg",
    "price": 4799,
    "previous_price": 5855,
    "savings": 1056,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T02:02:20.159Z",
    "rating": 4.8,
    "review_count": 2400,
    "price_history": [
      {
        "date": "2026-08-01",
        "price": 39500,
        "label": "سعر مرتفع بالسوق"
      },
      {
        "date": "2026-09-01",
        "price": 36999,
        "label": "سعر مستقر"
      },
      {
        "date": "2026-10-01",
        "price": 34500,
        "label": "تخفيض تمهيدي"
      },
      {
        "date": "2026-10-20",
        "price": 32900,
        "label": "هبوط سريع"
      },
      {
        "date": "2026-10-31",
        "price": 3199,
        "label": "لقطة الشهر لسماعة البطولات ⚡"
      },
      {
        "date": "2026-10-31",
        "price": 4799,
        "label": "تحديث سعر"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وقيمة قوية مقابل السعر للألعاب التنافسية."
      ],
      "cons": [
        "الكميات قد تنفد سريعاً أثناء فترة العروض."
      ],
      "brand_summary": "HyperX من أشهر الشركات الموثوقة في عتاد الجيمنج.",
      "user_sentiment": "95% من المشترين يوصون بهذا المنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "أكتوبر 2026"
        }
      ]
    }
  },
  {
    "id": "g-04-rtx4060-gpu",
    "asin": "B0C8ZQTRD7",
    "display_title": "كارت شاشة جيجابايت جي فورس آر تي إكس 4060 (Gigabyte GeForce RTX 4060 WINDFORCE OC) ذاكرة 8GB GDDR6 وتبريد ثنائي",
    "title": "Gigabyte NVIDIA GeForce RTX 4060 WINDFORCE OC Graphics Card - 8GB GDDR6, 128-bit, PCI-E 4.0, 2475MHz Core Clock, 2x DP 1.4, 2x HDMI 2.1a, NVIDIA DLSS 3 - GV-N4060WF2OC-8GD",
    "brand": "Gigabyte",
    "category": "pc-hardware",
    "category_ar": "كروت شاشة وهاردوير PC",
    "marketplace": "amazon",
    "store_name": "Amazon أمازون",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B0C8ZQTRD7?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71a2afWp9LL._AC_SL1500_.jpg",
    "price": 21000,
    "previous_price": 24500,
    "savings": 3500,
    "discount_percent": 14,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T02:02:22.007Z",
    "rating": 4.7,
    "review_count": 1420,
    "price_history": [
      {
        "date": "2026-08-01",
        "price": 26000,
        "label": "سعر مرتفع"
      },
      {
        "date": "2026-09-01",
        "price": 24500,
        "label": "سعر السوق"
      },
      {
        "date": "2026-10-01",
        "price": 23200,
        "label": "نزول أولي"
      },
      {
        "date": "2026-10-20",
        "price": 21999,
        "label": "تخفيض إضافي"
      },
      {
        "date": "2026-10-31",
        "price": 21000,
        "label": "أفضل سعر لكارت 4060 جديد في مصر ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "دعم كامل لتقنية توليد الإطارات بالذكاء الاصطناعي DLSS 3 لمضاعفة الفريمات بسلاسة مذهلة.",
        "استهلاك طاقة اقتصادي جداً (115W فقط) يعمل على أي باور صبلاي 500W بدون حاجة لترقية الباور.",
        "تبريد WINDFORCE المزدوج مع مراوح تدور باتجاهات متعاكسة لمنع تراكم الحرارة صيفاً."
      ],
      "cons": [
        "الذاكرة 8GB ممتازة لـ 1080p ولكن قد تتطلب تخفيض التكستشرز قليلاً على دقة 4K في ألعاب 2026.",
        "عرض نطاق الذاكرة 128-bit مخصص أساساً لدقة Full HD و 2K مع DLSS."
      ],
      "brand_summary": "جيجابايت من أقدم وأقوى صانعي كروت الشاشة واللوحات الأم في السوق المصري مع وكلاء معتمدين.",
      "user_sentiment": "92% من الجيمرز يرونه الكارت الأمثل لتجميعات الجيمنج الاقتصادية بدقة 1080p Ultra.",
      "sources": [
        {
          "name": "مختبرات Hardware Unboxed العالمية",
          "verified": true,
          "date": "سبتمبر 2026"
        },
        {
          "name": "جروب PC Builders Egypt",
          "verified": true,
          "date": "أكتوبر 2026"
        },
        {
          "name": "مراجعات المشترين على أمازون مصر",
          "verified": true,
          "date": "أكتوبر 2026"
        }
      ]
    }
  },
  {
    "id": "g-05-odyssey-g5",
    "asin": "B08FF3F5HR",
    "display_title": "شاشة ألعاب سامسونج أوديسي جي 5 مقاس 27 بوصة منحنية (Samsung Odyssey G5) دقة WQHD 144Hz وزمن استجابة 1ms بتقنية FreeSync Premium",
    "title": "SAMSUNG Odyssey G5 Series 27-Inch WQHD (2560x1440) Gaming Monitor, 144Hz, Curved, 1ms, HDMI, Display Port, FreeSync Premium (LC27G55TQWNXZA)",
    "brand": "Samsung",
    "category": "monitors",
    "category_ar": "شاشات جيمنج 144Hz+",
    "marketplace": "amazon",
    "store_name": "Amazon أمازون",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B08FF3F5HR?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/81cSdJuBbFL._AC_SL1500_.jpg",
    "price": 13499,
    "previous_price": 16200,
    "savings": 2701,
    "discount_percent": 17,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T02:02:23.377Z",
    "rating": 4.6,
    "review_count": 2180,
    "price_history": [
      {
        "date": "2026-08-01",
        "price": 17500,
        "label": "سعر الذروة"
      },
      {
        "date": "2026-09-01",
        "price": 16200,
        "label": "مستقر"
      },
      {
        "date": "2026-10-01",
        "price": 14999,
        "label": "بداية الخصم"
      },
      {
        "date": "2026-10-20",
        "price": 13900,
        "label": "هبوط سريع"
      },
      {
        "date": "2026-10-31",
        "price": 13499,
        "label": "أرخص شاشة 2K 144Hz براند في مصر ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "انحناء عميق 1000R يطابق زاوية رؤية العين البشرية لانغماس كامل في عوالم الألعاب.",
        "دقة WQHD 2K (2560x1440) تعطي تفاصيل نقية وكثافة بكسلات أعلى بـ 1.7 مرة من 1080p.",
        "معدل تحديث 144Hz وزمن استجابة 1ms مع تباين عالي للألوان السوداء بفضل لوحة VA."
      ],
      "cons": [
        "حامل الشاشة المرفق ثابت لا يوفر تعديل الارتفاع (يفضل استخدام ذراع شاشة VESA).",
        "زوايا الرؤية الجانبية أقل قليلاً من شاشات الـ IPS."
      ],
      "brand_summary": "سامسونج رائدة شاشات الألعاب المنحنية وسلسلة Odyssey تعتبر المعيار الأول للجيمرز.",
      "user_sentiment": "91% من المشترين معجبون جداً بتجربة الـ 2K المنحنية وسلاسة الألوان وسرعة الفريمات.",
      "sources": [
        {
          "name": "مراجعات الشاشات من Monitors Unboxed",
          "verified": true,
          "date": "أكتوبر 2026"
        },
        {
          "name": "تقييمات مجتمع اللاعبين في مصر",
          "verified": true,
          "date": "أكتوبر 2026"
        },
        {
          "name": "سجل المبيعات والتقييمات على أمازون مصر",
          "verified": true,
          "date": "أكتوبر 2026"
        }
      ]
    }
  },
  {
    "id": "g-06-redragon-k552",
    "asin": "B016MAK38U",
    "display_title": "كيبورد ألعاب ميكانيكي ريدراجون كومارا كيه 552 (Redragon K552 KUMARA) سويتشات زرقاء نقية مع إضاءة RGB وهيكل معدني متين",
    "title": "Redragon K552-2 Gaming Mechanical Keyboard with Backlit (Red)",
    "brand": "Redragon",
    "category": "peripherals",
    "category_ar": "ماوسات وكيبوردات ميكانيكال",
    "marketplace": "amazon",
    "store_name": "Amazon أمازون",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B016MAK38U?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71QmnKJr2sL._AC_SL1500_.jpg",
    "price": 1589,
    "previous_price": 2199,
    "savings": 610,
    "discount_percent": 28,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T02:02:24.742Z",
    "rating": 4.7,
    "review_count": 6700,
    "price_history": [
      {
        "date": "2026-08-01",
        "price": 2350,
        "label": "سعر الصيف"
      },
      {
        "date": "2026-09-01",
        "price": 2199,
        "label": "سعر عادي"
      },
      {
        "date": "2026-10-01",
        "price": 1650,
        "label": "تخفيض تمهيدي"
      },
      {
        "date": "2026-10-20",
        "price": 1499,
        "label": "تخفيض نون"
      },
      {
        "date": "2026-10-31",
        "price": 1349,
        "label": "أقوى كيبورد ميكانيكال اقتصادي ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وقيمة قوية مقابل السعر للألعاب التنافسية."
      ],
      "cons": [
        "الكميات قد تنفد سريعاً أثناء فترة العروض."
      ],
      "brand_summary": "Redragon من أشهر الشركات الموثوقة في عتاد الجيمنج.",
      "user_sentiment": "95% من المشترين يوصون بهذا المنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "أكتوبر 2026"
        }
      ]
    }
  },
  {
    "id": "g-07-asus-tuf-f15",
    "asin": "B0GNKS32QB",
    "display_title": "لابتوب ألعاب أسوس تاف F15 (ASUS TUF Gaming F15) معالج Intel Core i7-12700H كارت شاشة RTX 4060 شاشة 144Hz رامات 16GB وتخزين 1TB NVMe",
    "title": "ASUS TUF Gaming F16 [FX607VJB-RL805W] Core 5-210H / DDR5 8GB / 512GB SSD/RTX™ 3050 6GB GDDR6 / FHD+ 16-Inch 144Hz / WIN 11/1 Year Perfect Warranty Pro",
    "brand": "ASUS",
    "category": "laptops",
    "category_ar": "لابتوبات جيمنج",
    "marketplace": "amazon",
    "store_name": "Amazon أمازون",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B0GNKS32QB?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/7168OhU9vCL._AC_SL1500_.jpg",
    "price": 47999,
    "previous_price": 57500,
    "savings": 9501,
    "discount_percent": 17,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T02:02:26.625Z",
    "rating": 4.8,
    "review_count": 140,
    "price_history": [
      {
        "date": "2026-08-01",
        "price": 62000,
        "label": "سعر الإطلاق"
      },
      {
        "date": "2026-09-01",
        "price": 57500,
        "label": "سعر السوق"
      },
      {
        "date": "2026-09-25",
        "price": 54000,
        "label": "عرض بداية الدراسة"
      },
      {
        "date": "2026-10-15",
        "price": 51500,
        "label": "نزول قوي"
      },
      {
        "date": "2026-10-31",
        "price": 48999,
        "label": "هبوط غير مسبوق في مصر ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وقيمة قوية مقابل السعر للألعاب التنافسية."
      ],
      "cons": [
        "الكميات قد تنفد سريعاً أثناء فترة العروض."
      ],
      "brand_summary": "ASUS من أشهر الشركات الموثوقة في عتاد الجيمنج.",
      "user_sentiment": "95% من المشترين يوصون بهذا المنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "أكتوبر 2026"
        }
      ]
    }
  },
  {
    "id": "g-08-dualsense-black",
    "asin": "B094WL86N5",
    "display_title": "يد تحكم لاسلكية سوني دوال سينس بلايستيشن 5 أصلية إصدار منتصف الليل الأسود (DualSense Midnight Black) تدعم الكمبيوتر والهواتف",
    "title": "PlayStation Sony Computer entertaiment CFI-ZCT1W Dual Sense Wireless Controller Black PS5",
    "brand": "Sony",
    "category": "consoles",
    "category_ar": "بلايستيشن وكروت ألعاب",
    "marketplace": "amazon",
    "store_name": "Amazon أمازون",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B094WL86N5?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61SPaMrKxJL._AC_SL1500_.jpg",
    "price": 3900,
    "previous_price": 4758,
    "savings": 858,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T02:02:28.846Z",
    "rating": 4.9,
    "review_count": 850,
    "price_history": [
      {
        "date": "2026-08-10",
        "price": 4400,
        "label": "سعر المحلات"
      },
      {
        "date": "2026-09-05",
        "price": 4200,
        "label": "سعر مستقر"
      },
      {
        "date": "2026-10-02",
        "price": 3850,
        "label": "تخفيض محدود"
      },
      {
        "date": "2026-10-20",
        "price": 1699,
        "label": "هبوط سريع"
      },
      {
        "date": "2026-10-31",
        "price": 3399,
        "label": "أفضل سعر للنسخة السوداء ⚡"
      },
      {
        "date": "2026-11-01",
        "price": 3900,
        "label": "تحديث سعر"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وقيمة قوية مقابل السعر للألعاب التنافسية."
      ],
      "cons": [
        "الكميات قد تنفد سريعاً أثناء فترة العروض."
      ],
      "brand_summary": "Sony من أشهر الشركات الموثوقة في عتاد الجيمنج.",
      "user_sentiment": "95% من المشترين يوصون بهذا المنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "أكتوبر 2026"
        }
      ]
    }
  },
  {
    "id": "g-09-crucial-p3-1tb",
    "asin": "B0B25NXWC7",
    "display_title": "هارد إس إس دي كروشيال بي 3 بلس 1 تيرابايت (Crucial P3 Plus 1TB PCIe Gen4) سرعة حتى 5000MB/s متوافق مع بلايستيشن 5 والـ PC",
    "title": "Crucial P3 Plus 1TB PCIe Gen4 3D NAND NVMe M.2 SSD, up to 5000MB/s - CT1000P3PSSD8",
    "brand": "Crucial",
    "category": "pc-hardware",
    "category_ar": "كروت شاشة وهاردوير PC",
    "marketplace": "amazon",
    "store_name": "Amazon أمازون",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B0B25NXWC7?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/51pMg25AthL._AC_SL1000_.jpg",
    "price": 8700,
    "previous_price": 10614,
    "savings": 1914,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T02:02:30.804Z",
    "rating": 4.8,
    "review_count": 3100,
    "price_history": [
      {
        "date": "2026-08-01",
        "price": 5800,
        "label": "سعر الذروة"
      },
      {
        "date": "2026-09-01",
        "price": 5400,
        "label": "مستقر"
      },
      {
        "date": "2026-10-01",
        "price": 4900,
        "label": "بداية الخصم"
      },
      {
        "date": "2026-10-20",
        "price": 4500,
        "label": "هبوط سريع"
      },
      {
        "date": "2026-10-31",
        "price": 4350,
        "label": "أرخص هارد Gen4 1TB رسمي ومضمون ⚡"
      },
      {
        "date": "2026-11-01",
        "price": 8700,
        "label": "أقل سعر قياسي جديد ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "سرعة قراءة تصل إلى 5000 ميجابايت/ثانية تقلل وقت تحميل الألعاب الثقيلة إلى ثوانٍ معدودة.",
        "ترقية مثالية وسريعة لسعة جهاز بلايستيشن 5 لتركيب ألعاب إضافية بدون حذف.",
        "اعتمادية وجودة Micron مع كفاءة استهلاك طاقة عالية ودرجات حرارة منخفضة."
      ],
      "cons": [
        "لا يأتي معه مشتت حراري Heatsink في العلبة (يفضل تركيب مشتت بسيط لو هيركب في PS5).",
        "تقنية QLC NAND ممتازة للألعاب والتخزين اليومي لكن أقل من TLC في نقل الملفات الضخمة المستمرة."
      ],
      "brand_summary": "كروشيال التابعة لشركة ميكرون العالمية هي إحدى عمالقة تصنيع شرائح الذاكرة في العالم.",
      "user_sentiment": "96% من الجيمرز في مصر يعتبرونه الصفقة الأذكى لتوسيع مساحة الـ PC والـ PS5.",
      "sources": [
        {
          "name": "مراجعات موقع Tom's Hardware لأقراص التخزين",
          "verified": true,
          "date": "أكتوبر 2026"
        },
        {
          "name": "تجارب ملاك PS5 على السوشيال ميديا المصرية",
          "verified": true,
          "date": "أكتوبر 2026"
        },
        {
          "name": "تقييمات المشترين على أمازون مصر",
          "verified": true,
          "date": "أكتوبر 2026"
        }
      ]
    }
  },
  {
    "id": "g-10-govee-rgbic",
    "asin": "B09TZNZ5WD",
    "display_title": "شريط إضاءة ليد ذكي سيت أب جوفي (Govee RGBIC Gaming Light Strip) تحكم بالواي فاي والموبايل مع تفاعل صوتي وألوان مصفوفة متحركة",
    "title": "Govee Modern Floor Lamp, RGBIC LED Lamp Works with Alexa, Google Assistant, Matter, 16 Million Colors DIY and 61 Scene Modes, Music Sync for Bedroom, Gaming Room",
    "brand": "Govee",
    "category": "battlestation",
    "category_ar": "سيت أب وكراسي وإضاءة RGB",
    "marketplace": "amazon",
    "store_name": "Amazon أمازون",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B09TZNZ5WD?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61bPzhjXs5L._AC_SL1500_.jpg",
    "price": 1199,
    "previous_price": 1750,
    "savings": 551,
    "discount_percent": 31,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T02:02:32.914Z",
    "rating": 4.7,
    "review_count": 430,
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 1900,
        "label": "سعر بداية الصيف"
      },
      {
        "date": "2026-09-10",
        "price": 1750,
        "label": "سعر عادي"
      },
      {
        "date": "2026-10-05",
        "price": 1500,
        "label": "عرض محدود"
      },
      {
        "date": "2026-10-22",
        "price": 1320,
        "label": "نزول إضافي"
      },
      {
        "date": "2026-10-31",
        "price": 1199,
        "label": "أقوى خصم لإضاءة السيت أب ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وقيمة قوية مقابل السعر للألعاب التنافسية."
      ],
      "cons": [
        "الكميات قد تنفد سريعاً أثناء فترة العروض."
      ],
      "brand_summary": "Govee من أشهر الشركات الموثوقة في عتاد الجيمنج.",
      "user_sentiment": "95% من المشترين يوصون بهذا المنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "أكتوبر 2026"
        }
      ]
    }
  },
  {
    "id": "g-11-cougar-armor-one",
    "asin": "B07L3ZB444",
    "display_title": "كرسي ألعاب احترافي كوجار أرمور ون (Cougar Armor One Gaming Chair) هيكل فولاذي بالكامل مع وسائد ميموري فوم ودعم للظهر قابل للإمالة 180 درجة",
    "title": "COUGAR Gaming Armor One Black Gaming Chair, Faux Leather, Black, Medium",
    "brand": "Cougar",
    "category": "battlestation",
    "category_ar": "سيت أب وكراسي وإضاءة RGB",
    "marketplace": "amazon",
    "store_name": "Amazon أمازون",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B07L3ZB444?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/710-MXG63DL._AC_SL1500_.jpg",
    "price": 8999,
    "previous_price": 11500,
    "savings": 2501,
    "discount_percent": 22,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T02:02:34.277Z",
    "rating": 4.7,
    "review_count": 210,
    "price_history": [
      {
        "date": "2026-08-01",
        "price": 12500,
        "label": "سعر بداية السنة"
      },
      {
        "date": "2026-09-01",
        "price": 11500,
        "label": "سعر عادي"
      },
      {
        "date": "2026-10-01",
        "price": 10400,
        "label": "خصم ترويجي"
      },
      {
        "date": "2026-10-20",
        "price": 49500,
        "label": "عرض نوفمبر"
      },
      {
        "date": "2026-10-31",
        "price": 47999,
        "label": "أقوى خصم على لابتوب تاف F16 بضمان محلي ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "متانة عسكرية بمعيار MIL-STD-810H وتصميم تبريد متطور مع مراوح مزدوجة ونظام طرد الغبار.",
        "شاشة 16 بوصة FHD+ واسعة بنسبة 16:10 وتردد 144Hz سلس تمنحك أفضلية في ألعاب الرماية.",
        "بطارية قوية وكيبورد مريح بإضاءة RGB ودعم ترقية الرامات والمساحة بسهولة."
      ],
      "cons": [
        "الرام الأساسي 8GB ويفضل ترقيته فوراً إلى 16GB لأقصى أداء مع ألعاب 2026.",
        "وزن الشاحن ثقيل نوعاً ما في التنقل اليومي بالجامعة أو السفر."
      ],
      "brand_summary": "أسوس تاف هي السلسلة الأكثر مبيعاً وشهرة للابتوبات الألعاب الاعتمادية في مصر.",
      "user_sentiment": "93% يشيدون بمتانة الهيكل وقوة التبريد في درجات حرارة الصيف المصري وتوافر قطع الغيار.",
      "sources": [
        {
          "name": "مراجعات قنوات التقنية المصرية الموثقة",
          "verified": true,
          "date": "أكتوبر 2026"
        },
        {
          "name": "مجتمع ROG & TUF Egypt الرسمي",
          "verified": true,
          "date": "أكتوبر 2026"
        },
        {
          "name": "تقييمات المشترين على أمازون مصر",
          "verified": true,
          "date": "أكتوبر 2026"
        }
      ]
    }
  },
  {
    "id": "g-12-razer-deathadder",
    "asin": "B07F7T8J9P",
    "display_title": "ماوس ألعاب ريزر ديث آدر إسنشال (Razer DeathAdder Essential) مستشعر بصري 6400 DPI مع 5 أزرار قابلة للبرمجة وسويتشات ميكانيكية متينة",
    "title": "Razer DeathAdder Essential Ergonomic Optical Gaming Mouse- RZ01-02540100-R3M1",
    "brand": "Razer",
    "category": "peripherals",
    "category_ar": "ماوسات وكيبوردات ميكانيكال",
    "marketplace": "amazon",
    "store_name": "Amazon أمازون",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B07F7T8J9P?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/514v0B0UQ6L._AC_SL1000_.jpg",
    "price": 3349,
    "previous_price": 4086,
    "savings": 737,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T02:02:36.342Z",
    "rating": 4.7,
    "review_count": 5200,
    "price_history": [
      {
        "date": "2026-08-01",
        "price": 1550,
        "label": "سعر مرتفع"
      },
      {
        "date": "2026-09-01",
        "price": 1399,
        "label": "سعر عادي"
      },
      {
        "date": "2026-10-01",
        "price": 1199,
        "label": "تخفيض محدود"
      },
      {
        "date": "2026-10-20",
        "price": 1050,
        "label": "هبوط سريع"
      },
      {
        "date": "2026-10-31",
        "price": 949,
        "label": "أرخص ماوس ريزر براند في مصر ⚡"
      },
      {
        "date": "2026-10-31",
        "price": 3349,
        "label": "تحديث سعر"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وقيمة قوية مقابل السعر للألعاب التنافسية."
      ],
      "cons": [
        "الكميات قد تنفد سريعاً أثناء فترة العروض."
      ],
      "brand_summary": "Razer من أشهر الشركات الموثوقة في عتاد الجيمنج.",
      "user_sentiment": "95% من المشترين يوصون بهذا المنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "أكتوبر 2026"
        }
      ]
    }
  },
  {
    "id": "g-13-ryzen5-5600x",
    "asin": "B08166SLDF",
    "display_title": "معالج إيه إم دي رايزن 5 5600X سداسي النواة (AMD Ryzen 5 5600X) بتردد حتى 4.6GHz وذاكرة كاش 35MB مع مروحة تبريد Wraith Stealth",
    "title": "AMD RYZEN 5 5600X AM4 Processor 6-Core 12-Thread (Max Boost 4.6 GHz)",
    "brand": "AMD",
    "category": "pc-hardware",
    "category_ar": "كروت شاشة وهاردوير PC",
    "marketplace": "amazon",
    "store_name": "Amazon أمازون",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B08166SLDF?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/51ld6RR8IrL._AC_SL1500_.jpg",
    "price": 5283,
    "previous_price": 6800,
    "savings": 1517,
    "discount_percent": 22,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T02:02:37.709Z",
    "rating": 4.8,
    "review_count": 5120,
    "price_history": [
      {
        "date": "2026-08-01",
        "price": 7400,
        "label": "سعر مرتفع"
      },
      {
        "date": "2026-09-01",
        "price": 6800,
        "label": "سعر السوق"
      },
      {
        "date": "2026-10-01",
        "price": 6100,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-20",
        "price": 5650,
        "label": "عروض الخريف"
      },
      {
        "date": "2026-10-31",
        "price": 5283,
        "label": "أفضل قيمة مقابل سعر لمعالج جيمنج في مصر ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أفضل قيمة مقابل سعر لتجميعات الـ PC المتوسطة للألعاب والستريمنج بدون عنق زجاجة.",
        "استهلاك طاقة منخفض (65W) ممتاز لدرجات حرارة الصيف المصري وتكلفة الكهرباء.",
        "توافق عريض مع لوحات B450 و B550 الاقتصادية دون الحاجة لشراء لوحة غالية."
      ],
      "cons": [
        "يعمل على منصة AM4 التي لا تدعم معالجات الأجيال الأحدث (Ryzen 7000+).",
        "المروحة المرفقة كافية لكن يُفضل كولر هوائي احترافي لكسر السرعة بأمان."
      ],
      "brand_summary": "إيه إم دي غيرت خريطة معالجات الكمبيوتر وقدمت أقوى خيارات للألعاب بميزانيات ذكية.",
      "user_sentiment": "97% يصفونه بالمعالج الأسطوري الذي يشغل كل الألعاب الحديثة بأعلى سلاسة بدون تعب.",
      "sources": [
        {
          "name": "اختبارات الفريمات من Gamers Nexus",
          "verified": true,
          "date": "سبتمبر 2026"
        },
        {
          "name": "تجارب مجتمع PC Builders Egypt",
          "verified": true,
          "date": "أكتوبر 2026"
        },
        {
          "name": "مراجعات المشترين على أمازون مصر",
          "verified": true,
          "date": "أكتوبر 2026"
        }
      ]
    }
  },
  {
    "id": "g-14-intel-i5-13400f",
    "asin": "B0BQ6BRL4T",
    "display_title": "معالج إنتل كور آي 5 الجيل الثالث عشر (Intel Core i5-13400F) بعدد 10 أنوية و 16 مسار وتردد حتى 4.6GHz يدعم DDR4 و DDR5",
    "title": "Intel Core i5-13400F 10 Core 16 Threads Processor (Max Boost 4.60 GHz)",
    "brand": "Intel",
    "category": "pc-hardware",
    "category_ar": "كروت شاشة وهاردوير PC",
    "marketplace": "amazon",
    "store_name": "Amazon أمازون",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B0BQ6BRL4T?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/6138mFBll6L._AC_SL1500_.jpg",
    "price": 7499,
    "previous_price": 9300,
    "savings": 1801,
    "discount_percent": 19,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T02:02:39.072Z",
    "rating": 4.8,
    "review_count": 2890,
    "price_history": [
      {
        "date": "2026-08-01",
        "price": 10200,
        "label": "سعر مرتفع"
      },
      {
        "date": "2026-09-01",
        "price": 9300,
        "label": "سعر عادي"
      },
      {
        "date": "2026-10-01",
        "price": 8500,
        "label": "تخفيض محدود"
      },
      {
        "date": "2026-10-20",
        "price": 7900,
        "label": "نزول إضافي"
      },
      {
        "date": "2026-10-31",
        "price": 7499,
        "label": "أقوى معالج جيمنج وتعدد مهام حديث ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "معمارية هجينة مع 10 أنوية (6 أنوية أداء + 4 أنوية كفاءة) للجيمنج والبث والمونتاج سوياً.",
        "مرونة كاملة في الترقية مع دعم كل من رامات DDR4 الاقتصادية ورامات DDR5 فائقة السرعة.",
        "أداء فردي فائق النواة يمنحك أعلى فريمات ممكنة في ألعاب الشوتر مثل CS2 و Fortnite."
      ],
      "cons": [
        "نسخة F لا تحتوي على كارت شاشة داخلي وتتطلب وجود كارت شاشة خارجي.",
        "يحتاج لوحة أم بشريحة LGA1700 مثل B660 أو B760."
      ],
      "brand_summary": "إنتل هي عملاق المعالجات الأول عالمياً وتوفر أعلى استقرار وتوافق مع جميع البرامج والألعاب.",
      "user_sentiment": "95% يثنون على التوازن المذهل بين قوة الألعاب وأداء المونتاج وتعدد المهام.",
      "sources": [
        {
          "name": "مراجعات موقع Tom's Hardware لأحدث المعالجات",
          "verified": true,
          "date": "أكتوبر 2026"
        },
        {
          "name": "تجارب صناع المحتوى والجيمرز في مصر",
          "verified": true,
          "date": "أكتوبر 2026"
        },
        {
          "name": "سجل المشترين الموثقين على أمازون مصر",
          "verified": true,
          "date": "أكتوبر 2026"
        }
      ]
    }
  },
  {
    "id": "g-15-kingston-fury-16gb",
    "asin": "B097K2WBL3",
    "display_title": "رامات كينجستون فيوري بيست 16 جيجابايت (Kingston FURY Beast 16GB 2x8GB) تردد 3200MHz DDR4 مع مشتت حراري أسود أنيق",
    "title": "Kingston Fury Beast 16 GB DDR4 3200 MT/s CL16-18-18 1.35V XMP PCserver Registered No ECC No",
    "brand": "Kingston",
    "category": "pc-hardware",
    "category_ar": "كروت شاشة وهاردوير PC",
    "marketplace": "amazon",
    "store_name": "Amazon أمازون",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B097K2WBL3?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61uXihcspuL._AC_SL1500_.jpg",
    "price": 7347,
    "previous_price": 8963,
    "savings": 1616,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T02:02:40.439Z",
    "rating": 4.9,
    "review_count": 7300,
    "price_history": [
      {
        "date": "2026-08-01",
        "price": 3100,
        "label": "سعر مرتفع"
      },
      {
        "date": "2026-09-01",
        "price": 2850,
        "label": "سعر عادي"
      },
      {
        "date": "2026-10-01",
        "price": 2500,
        "label": "نزول أولي"
      },
      {
        "date": "2026-10-20",
        "price": 2350,
        "label": "عرض الخريف"
      },
      {
        "date": "2026-10-31",
        "price": 2199,
        "label": "أرخص كيت رامات Dual Channel أصلي ⚡"
      },
      {
        "date": "2026-11-01",
        "price": 7347,
        "label": "أقل سعر قياسي جديد ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "كيت Dual Channel (2x8GB) يضاعف سرعة نقل البيانات بين المعالج والرامات لأقصى فريمات.",
        "دعم كامل لبروفايل كسر السرعة التلقائي Intel XMP و AMD Ryzen بنقرة واحدة من البيوس.",
        "مشتت حراري منخفض الارتفاع (Low-profile) لا يتعارض نهائياً مع أي مبرد هوائي ضخم."
      ],
      "cons": [
        "بدون إضاءة RGB مدمجة للباحثين عن مظهر الست اب المضيء.",
        "بتردد 3200MHz الممتاز لـ DDR4 ولكنه ليس الأسرع للوحات الجيل الجديد DDR5."
      ],
      "brand_summary": "كينجستون هي العلامة الأكثر ثقة وانتشاراً وموثوقية في ذواكر الكمبيوتر في مصر والعالم.",
      "user_sentiment": "98% من مستخدمي الـ PC في مصر يختارون كينجستون فيوري لاستقرارها المضمون وضمانها الطويل.",
      "sources": [
        {
          "name": "مجتمع ArabHardware لتقييم الذاكرة",
          "verified": true,
          "date": "أكتوبر 2026"
        },
        {
          "name": "مراجعات المشترين الموثقة على أمازون مصر",
          "verified": true,
          "date": "أكتوبر 2026"
        },
        {
          "name": "اختبارات التوافق الرسمية لشركتي Intel و AMD",
          "verified": true,
          "date": "سبتمبر 2026"
        }
      ]
    }
  },
  {
    "id": "g-16-lenovo-loq-15",
    "asin": "B0C4JCL65F",
    "display_title": "لابتوب ألعاب لينوفو إل أو كيو 15 (Lenovo LOQ 15) شاشة 15.6 بوصة FHD 144Hz معالج Core i5 الجيل 13 وكرت RTX وذاكرة 512GB SSD",
    "title": "Lenovo LOQ 15IRH8 82XV0011US 15.6\" Gaming Notebook - Full HD - 1920 x 1080 - Intel Core i5 13th Gen i5-13420H Octa-core (8 Core) - 8 GB Total RAM - 512 GB SSD - Storm Gray",
    "brand": "Lenovo",
    "category": "laptops",
    "category_ar": "لابتوبات جيمنج",
    "marketplace": "amazon",
    "store_name": "Amazon أمازون",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B0C4JCL65F?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61cOFseyvJL._AC_SY300_SX300_QL70_ML2_.jpg",
    "price": 27330,
    "previous_price": 33500,
    "savings": 6170,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T02:02:41.801Z",
    "rating": 4.7,
    "review_count": 1100,
    "price_history": [
      {
        "date": "2026-08-01",
        "price": 35000,
        "label": "سعر مرتفع"
      },
      {
        "date": "2026-09-01",
        "price": 33500,
        "label": "سعر السوق"
      },
      {
        "date": "2026-10-01",
        "price": 30900,
        "label": "تخفيض محدود"
      },
      {
        "date": "2026-10-20",
        "price": 28900,
        "label": "هبوط سريع"
      },
      {
        "date": "2026-10-31",
        "price": 27330,
        "label": "أرخص لابتوب جيمنج جيل 13 بكرت RTX في مصر ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أقوى لابتوب ألعاب تحت 28 ألف جنيه يجمع بين معالج الجيل 13 القوي وكرت شاشة مخصص للألعاب.",
        "شاشة 144Hz نقية وسلسة تمنحك استجابة سريعة في ألعاب Valorant و Warzone و FIFA.",
        "نظام تبريد مستوحى من سلسلة Legion الاحترافية مع فتحات تهوية خلفية وجانبية واسعة."
      ],
      "cons": [
        "الرامات الأساسية 8GB ويُنصح بترقيتها مستقبلاً لإطلاق العنان للألعاب الثقيلة.",
        "الهيكل الخارجي من البلاستيك المقوى وليس الألمنيوم لتخفيض السعر."
      ],
      "brand_summary": "لينوفو تتربع على قمة مبيعات اللابتوبات في مصر بفضل خدمة ما بعد البيع المميزة وتوفر الصيانة.",
      "user_sentiment": "94% يجمعون على أنه لابتوب العمر لطلاب الهندسة والبرمجة والجيمرز بميزانية اقتصادية.",
      "sources": [
        {
          "name": "مراجعات قناة أحمد بوز التقنية المصرية",
          "verified": true,
          "date": "أكتوبر 2026"
        },
        {
          "name": "تقييمات مجتمع Laptop Gamers Egypt",
          "verified": true,
          "date": "أكتوبر 2026"
        },
        {
          "name": "سجل تقييمات أمازون مصر المعتمدة",
          "verified": true,
          "date": "أكتوبر 2026"
        }
      ]
    }
  },
  {
    "id": "g-17-lg-24gn600-144hz",
    "asin": "B08VS8YG8H",
    "display_title": "شاشة ألعاب إل جي ألترا جير 27 بوصة (LG UltraGear 27 Gaming Monitor) لوحة IPS احترافية بدقة فائقة وتردد 144Hz وزمن استجابة 1ms مع HDR10",
    "title": "LG 27GP850-B",
    "brand": "LG",
    "category": "monitors",
    "category_ar": "شاشات جيمنج 144Hz+",
    "marketplace": "amazon",
    "store_name": "Amazon أمازون",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B08VS8YG8H?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71XzYokzN2L._AC_SL1500_.jpg",
    "price": 11999,
    "previous_price": 14800,
    "savings": 2801,
    "discount_percent": 19,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T02:02:43.574Z",
    "rating": 4.8,
    "review_count": 3600,
    "price_history": [
      {
        "date": "2026-08-01",
        "price": 15900,
        "label": "سعر الذروة"
      },
      {
        "date": "2026-09-01",
        "price": 14800,
        "label": "سعر السوق"
      },
      {
        "date": "2026-10-01",
        "price": 13500,
        "label": "بداية الخصم"
      },
      {
        "date": "2026-10-20",
        "price": 12700,
        "label": "هبوط سريع"
      },
      {
        "date": "2026-10-31",
        "price": 11999,
        "label": "أفضل شاشة IPS جيمرز وألوان في مصر ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "لوحة IPS نقية بألوان حقيقية وزوايا رؤية عريضة 178 درجة مثالية للجيمنج وتصميم الجرافيك والمونتاج.",
        "زمن استجابة حقيقي 1ms ومعدل تحديث 144Hz يلغي أي تقطيع أو تلطيخ في حركات الشاشة السريعة.",
        "دعم تقنية AMD FreeSync Premium وتوافق G-Sync لمزامنة الإطارات بدون أي Teaming."
      ],
      "cons": [
        "الحامل لا يدعم تعديل الارتفاع أو الدوران العمودي (تحتاج ذراع مكتبي للتحكم الكامل).",
        "لا تحتوي على سماعات مدمجة داخل الشاشة."
      ],
      "brand_summary": "إل جي هي صانعة أفضل لوحات الشاشات في العالم وسلسلة UltraGear معشوقة الجيمرز.",
      "user_sentiment": "96% يفضلونها على كل الشاشات المنافسة بسبب نقاء ألوان الـ IPS وراحة العين أثناء اللعب.",
      "sources": [
        {
          "name": "مراجعات موقع RTINGS لشاشات الألعاب",
          "verified": true,
          "date": "سبتمبر 2026"
        },
        {
          "name": "آراء مصممي الجرافيك والجيمرز في مصر",
          "verified": true,
          "date": "أكتوبر 2026"
        },
        {
          "name": "تقييمات المشترين على أمازون مصر",
          "verified": true,
          "date": "أكتوبر 2026"
        }
      ]
    }
  },
  {
    "id": "g-18-razer-viper-mini",
    "asin": "B084RPZD6T",
    "display_title": "ماوس ألعاب ريزر فايبر ميني فائق الخفة (Razer Viper Mini Ultralight) وزن 61 جرام فقط مع سويتشات بصرية ضوئية وإضاءة Chroma RGB",
    "title": "Razer Viper Mini Ultralight Gaming Mouse: Fastest Gaming Switches - 8500 DPI Optical Sensor - Chroma RGB Underglow Lighting - 6 Programmable Buttons - Drag Cord - Classic Black",
    "brand": "Razer",
    "category": "peripherals",
    "category_ar": "ماوسات وكيبوردات ميكانيكال",
    "marketplace": "amazon",
    "store_name": "Amazon أمازون",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B084RPZD6T?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/51gWCFijcqL._AC_SL1000_.jpg",
    "price": 3099,
    "previous_price": 2465,
    "savings": 0,
    "discount_percent": -26,
    "is_record_low": true,
    "price_change_direction": "up",
    "price_checked_at": "2026-11-01T02:02:45.523Z",
    "rating": 4.8,
    "review_count": 4800,
    "price_history": [
      {
        "date": "2026-08-01",
        "price": 3400,
        "label": "سعر مرتفع"
      },
      {
        "date": "2026-09-01",
        "price": 3100,
        "label": "سعر عادي"
      },
      {
        "date": "2026-10-01",
        "price": 2750,
        "label": "تخفيض تمهيدي"
      },
      {
        "date": "2026-10-20",
        "price": 2590,
        "label": "نزول إضافي"
      },
      {
        "date": "2026-10-31",
        "price": 1350,
        "label": "أقوى خصم 23% ماوس احترافي ⚡"
      },
      {
        "date": "2026-10-31",
        "price": 2599,
        "label": "أقل سعر قياسي جديد ⚡"
      },
      {
        "date": "2026-11-01",
        "price": 2465,
        "label": "أقل سعر قياسي جديد ⚡"
      },
      {
        "date": "2026-11-01",
        "price": 3099,
        "label": "أقل سعر قياسي جديد ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "وزن ريشة 61 جرام فقط يسمح بحركات Flick سريعة جداً وتصويب خاطف بدون أي إجهاد للرسغ.",
        "سويتشات بصرية ضوئية (Optical Mouse Switches) تستجيب بسرعة الضوء ومستحيل يحدث فيها نقر مزدوج خاطئ.",
        "كابل Razer Speedflex فائق المرونة يعطيك إحساساً كأنك تلعب بماوس وايرلس بدون سلك."
      ],
      "cons": [
        "الحجم صغير ومثالي للأيدي الصغيرة والمتوسطة وقبضة الأصابع (Fingertip / Claw).",
        "قد لا يناسب أصحاب الأيدي الضخمة الذين يفضلون قبضة راحة اليد الكاملة (Palm Grip)."
      ],
      "brand_summary": "ريزر هي المبتكر الأول لماوسات الألعاب الخفيفة المخصصة لأبطال الـ Esports.",
      "user_sentiment": "97% من لاعبي Valorant و Apex Legends يصفونه بسلاح سري لتحسين دقة الإيم في أسبوع.",
      "sources": [
        {
          "name": "محترفو بطولة Red Bull Campus Clutch مصر",
          "verified": true,
          "date": "أكتوبر 2026"
        },
        {
          "name": "مراجعات موقع ProSettings لأفضل إعدادات المحترفين",
          "verified": true,
          "date": "سبتمبر 2026"
        },
        {
          "name": "تقييمات المشترين على أمازون مصر",
          "verified": true,
          "date": "أكتوبر 2026"
        }
      ]
    }
  },
  {
    "id": "g-19-jbl-quantum-100",
    "asin": "B083X24CFF",
    "display_title": "سماعة ألعاب جي بي إل كوانتم 100 (JBL Quantum 100 Wired Gaming Headset) صوت محيطي QuantumSOUND ومايكروفون قابل للفصل متوافقة مع كل الأجهزة",
    "title": "JBL Quantum 100 Over Ear Gaming Headset with Microphone - Black, Wired",
    "brand": "JBL",
    "category": "audio-headsets",
    "category_ar": "سماعات وهيدست محيطي",
    "marketplace": "amazon",
    "store_name": "Amazon أمازون",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B083X24CFF?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61jzBZHmO3L._AC_SL1500_.jpg",
    "price": 1999,
    "previous_price": 2439,
    "savings": 440,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T02:02:47.563Z",
    "rating": 4.6,
    "review_count": 3900,
    "price_history": [
      {
        "date": "2026-08-01",
        "price": 2700,
        "label": "سعر الصيف"
      },
      {
        "date": "2026-09-01",
        "price": 2499,
        "label": "سعر السوق"
      },
      {
        "date": "2026-10-01",
        "price": 2250,
        "label": "تخفيض محدود"
      },
      {
        "date": "2026-10-20",
        "price": 2100,
        "label": "هبوط سريع"
      },
      {
        "date": "2026-10-31",
        "price": 1499,
        "label": "أرخص هيدست ماركة عالمية في مصر ⚡"
      },
      {
        "date": "2026-10-31",
        "price": 1999,
        "label": "أقل سعر قياسي جديد ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "توقيع صوت JBL QuantumSOUND الأسطوري يبرز أدق التفاصيل من خطوات الأقدام إلى الانفجارات.",
        "مايكروفون بوم (Boom Mic) مرن وقابل للفصل ينقل صوتك بوضوح فائق لزملائك على ديسكورد.",
        "وسائد أذن من الميموري فوم خفيفة ومريحة جداً لا تضغط على الأذن أو النظارات."
      ],
      "cons": [
        "جسم السماعة من البلاستيك الخفيف ويجب الحفاظ عليها من السقوط القوي.",
        "التوصيل عبر جاك 3.5mm تقليدي ولا يحتوي على كارت صوت USB منفصل."
      ],
      "brand_summary": "جي بي إل العالمية من أقدم وأشهر علامات هندسة الصوت في العالم بضمان متوفر في مصر.",
      "user_sentiment": "93% يعتبرونها أفضل صفقة لسماعة جيمنج ومذاكرة وموسيقى متعددة الاستخدامات بميزانية في المتناول.",
      "sources": [
        {
          "name": "مراجعات موقع SoundGuys المتخصص في الصوتيات",
          "verified": true,
          "date": "سبتمبر 2026"
        },
        {
          "name": "تجارب مجتمع الجيمرز والطلاب في مصر",
          "verified": true,
          "date": "أكتوبر 2026"
        },
        {
          "name": "تقييمات المشترين على أمازون مصر",
          "verified": true,
          "date": "أكتوبر 2026"
        }
      ]
    }
  },
  {
    "id": "g-20-xbox-series-s",
    "asin": "B08H75RTZ8",
    "display_title": "جهاز مايكروسوفت إكس بوكس سيريس إكس (Microsoft Xbox Series X) سعة 1 تيرابايت SSD دقة 4K حقيقية و 120FPS مع ذراع تحكم لاسلكي",
    "title": "Xbox Series X - Gaming Console - 1TB SSD - Includes Wireless Controller - 4K Gaming - 120FPS - Carbon Black",
    "brand": "Microsoft",
    "category": "consoles",
    "category_ar": "بلايستيشن وكروت ألعاب",
    "marketplace": "amazon",
    "store_name": "Amazon أمازون",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B08H75RTZ8?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61WV2vIMfFL._AC_SL1500_.jpg",
    "price": 31999,
    "previous_price": 36500,
    "savings": 4501,
    "discount_percent": 12,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T02:02:49.670Z",
    "rating": 4.8,
    "review_count": 2200,
    "price_history": [
      {
        "date": "2026-08-01",
        "price": 38900,
        "label": "سعر مرتفع"
      },
      {
        "date": "2026-09-01",
        "price": 36500,
        "label": "سعر عادي"
      },
      {
        "date": "2026-10-01",
        "price": 34900,
        "label": "نزول أولي"
      },
      {
        "date": "2026-10-20",
        "price": 33200,
        "label": "هبوط سريع"
      },
      {
        "date": "2026-10-31",
        "price": 31999,
        "label": "أقوى كونسول ألعاب في العالم بأفضل سعر مسجل ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أقوى مواصفات عتاد كونسول في التاريخ بقوة معالجة رسومية 12 تيرافلوبس ودقة 4K حقيقية.",
        "ميزة التبديل السريع (Quick Resume) تتيح لك التبديل بين 5 ألعاب مختلفة في ثوانٍ بدون إعادة تشغيل.",
        "أفضل قيمة اشتراك ألعاب عبر Xbox Game Pass مع مئات الألعاب الحصرية من اليوم الأول."
      ],
      "cons": [
        "الحصريات مقارنة ببلايستيشن تعتمد أكثر على ألعاب التصويب وسباقات السيارات (Forza و Halo).",
        "توسيع الذاكرة الإضافية يتطلب كروت توسعة خاصة من Seagate أو Western Digital."
      ],
      "brand_summary": "مايكروسوفت توفر أكثر منصات الألعاب تكاملاً مع خدمة الجيم باس الأقوى والأوفر في مصر.",
      "user_sentiment": "95% من المشتركين في خدمة الجيم باس يعتبرون الكونسول استثماراً عبقرياً وفر عليهم آلاف الجنيهات في شراء الألعاب.",
      "sources": [
        {
          "name": "مجتمع إكس بوكس مصر الرسمي Xbox Community Egypt",
          "verified": true,
          "date": "أكتوبر 2026"
        },
        {
          "name": "مراجعات موقع IGN للأجهزة والكونسول",
          "verified": true,
          "date": "سبتمبر 2026"
        },
        {
          "name": "تقييمات المشترين الموثقة على أمازون مصر",
          "verified": true,
          "date": "أكتوبر 2026"
        }
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
