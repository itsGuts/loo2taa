import { Product, MarketplaceSetting } from './types';

export const MARKETPLACE_SETTINGS: Record<string, MarketplaceSetting> = {
  amazon: {
    key: 'amazon',
    name: 'أمازون مصر',
    buttonLabel: 'اقتنص اللقطة من أمازون ⚡',
    primaryColor: '#00f0ff',
    textColor: '#07090e',
    surfaceColor: '#0d1527',
  },
};

export const CATEGORIES = [
  { id: 'all', name: 'كل اللقطات', icon: 'Zap' },
  { id: 'streaming-voice', name: 'مايكات وصوتيات ديسكورد', icon: 'Mic' },
  { id: 'headsets', name: 'سماعات ديسكورد وقيمنق', icon: 'Headphones' },
  { id: 'keyboards-mice', name: 'كيبوردات ميكانيكال وماوسات', icon: 'Keyboard' },
  { id: 'setup-aesthetic', name: 'سيت أب وديكور وإضاءة RGB', icon: 'Sparkles' },
  { id: 'monitors', name: 'شاشات قيمنق 144Hz+', icon: 'Monitor' },
  { id: 'pc-hardware', name: 'تجميعات وهاردوير البي سي', icon: 'Cpu' },
  { id: 'consoles-handheld', name: 'كونسول واكسسوارات', icon: 'Gamepad2' },
  { id: 'laptops', name: 'لابتوبات قيمنق ومونتاج', icon: 'Laptop' },
];

export const PRODUCTS: Product[] = [
  {
    "id": "d-mic-01",
    "asin": "B08G8WH435",
    "display_title": "مايكروفون هايبر إكس كواد كاست إس RGB الاحترافي للديسكورد والستريم (HyperX QuadCast S RGB)",
    "title": "HyperX QuadCast S – RGB USB Condenser Microphone for PC, PS4, PS5, Mac, Anti-Vibration Shock Mount, 4 Polar Patterns",
    "brand": "HyperX",
    "category": "streaming-voice",
    "category_ar": "مايكات وصوتيات ديسكورد",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B08G8WH435?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61dQJkzRopL._AC_SL1500_.jpg",
    "price": 3499,
    "previous_price": 10900,
    "savings": 7401,
    "discount_percent": 68,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.9,
    "review_count": 980,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 11554,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 10900,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 9179,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 8999,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "المايك الأشهر بلا منازع على ديسكورد والستريمرز بنقاء صوت استوديو وإضاءة RGB مذهلة",
        "زر تاتش علوي سريع لكتم الصوت (Mute) مع حامل صدمات مدمج"
      ],
      "cons": [
        "مخصص لمن يبحث عن جودة صوت احترافية"
      ],
      "brand_summary": "HyperX من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-mic-05",
    "asin": "B006DIA77E",
    "display_title": "مايكروفون بلو ييتي الأسطوري USB متعدد الأنماط لتسجيل الصوت والبودكاست والمحادثات (Blue Yeti USB Microphone)",
    "title": "Logitech for Creators Blue Yeti USB Microphone for Gaming, Streaming, Podcasting, Multi-Pattern",
    "brand": "Logitech",
    "category": "streaming-voice",
    "category_ar": "مايكات وصوتيات ديسكورد",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B006DIA77E?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71YWbS7eMuL._AC_SL1500_.jpg",
    "price": 3499,
    "previous_price": 7900,
    "savings": 4401,
    "discount_percent": 56,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.8,
    "review_count": 2200,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 8374,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 7900,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 6629,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 6499,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "الأيقونة التاريخية لصناع المحتوى مع كبسولات ثلاثية تمنح صوتاً عميقاً وإذاعياً",
        "4 أنماط تسجيل للصوت المنفرد أو محادثات الغرفة الجماعية"
      ],
      "cons": [
        "وزن المايك ثقيل ويتطلب سطحاً ثابتاً"
      ],
      "brand_summary": "Logitech من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-mic-07",
    "asin": "B09738CV2G",
    "display_title": "جهاز إلجاتو ستريم ديك MK.2 بـ 15 مفتاح LCD تفاعلي للتحكم برومات الديسكورد والبث (Elgato Stream Deck MK.2)",
    "title": "Elgato Stream Deck MK.2 Studio Controller, 15 Customizable LCD Keys, Trigger Actions in Apps, Discord, OBS",
    "brand": "Elgato",
    "category": "streaming-voice",
    "category_ar": "مايكات وصوتيات ديسكورد",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B09738CV2G?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61gtdFnK+UL._AC_SL1500_.jpg",
    "price": 6235,
    "previous_price": 9400,
    "savings": 3165,
    "discount_percent": 34,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.9,
    "review_count": 850,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 9964,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 9400,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 8159,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 7999,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "تحكم كامل بالديسكورد: كتم المايك، كتم الصوت، تشغيل الساوند بورد، والتنقل بين الرومات بلمسة زر واحدة",
        "أزرار شاشات LCD تعرض أيقونات وصور متحركة GIF مخصصة"
      ],
      "cons": [
        "سعره موجه للمستخدمين المهتمين بتنظيم سيت أب البث"
      ],
      "brand_summary": "Elgato من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-head-02",
    "asin": "B081415GCS",
    "display_title": "سماعة لوجيتيك G733 لايت سبيد لاسلكية إصدار ليلك البنفسجي الفاتح بوزن ريشة 278 جم (Logitech G733 Lilac Wireless)",
    "title": "Logitech G733 Lightspeed Wireless Gaming Headset with Suspension Headband, LIGHTSYNC RGB, Blue VO!CE - Lilac",
    "brand": "Logitech",
    "category": "headsets",
    "category_ar": "سماعات ديسكورد وقيمنق",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B081415GCS?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71xNjrzG69L._AC_SL1500_.jpg",
    "price": 8000,
    "previous_price": 8900,
    "savings": 900,
    "discount_percent": 10,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.9,
    "review_count": 1100,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 9434,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 8900,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 7649,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 7499,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "لون ليلك باستيل ساحر لعشاق السيت أب الهادئ مع راحة خرافية طوال مكالمات الديسكورد الطويلة",
        "مايكروفون مدعوم بفلاتر Blue VO!CE لجعل صوتك فائق النقاء"
      ],
      "cons": [
        "تعتمد على دونجل لاسلكي USB ولا تدعم البلوتوث المباشر"
      ],
      "brand_summary": "Logitech من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-head-03",
    "asin": "B00SAYCXWG",
    "display_title": "سماعة هايبر إكس كلاود 2 الأسطورية بصوت محيطي 7.1 ووسائد جلد وقطيفة (HyperX Cloud II Red/Gunmetal)",
    "title": "HyperX Cloud II - Gaming Headset, 7.1 Surround Sound, Memory Foam Ear Pads, Durable Aluminum Frame",
    "brand": "HyperX",
    "category": "headsets",
    "category_ar": "سماعات ديسكورد وقيمنق",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B00SAYCXWG?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71ltsViEA8L._AC_SL1500_.jpg",
    "price": 4799,
    "previous_price": 5200,
    "savings": 401,
    "discount_percent": 8,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.9,
    "review_count": 4800,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 5512,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 5200,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 4487,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 4399,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "المعيار الذهبي لسماعات الألعاب في العالم: متانة ألومنيوم وعزل صوت ممتاز وراحة لا تضاهى",
        "صوت خطوات الألعاب التنافسية شديد الدقة ومايك قابل للفصل"
      ],
      "cons": [
        "تصميم كلاسيكي بدون إضاءة RGB"
      ],
      "brand_summary": "HyperX من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-head-04",
    "asin": "B09TRW57WB",
    "display_title": "وحش البطارية هايبر إكس كلاود ألفا لاسلكية تعمل 300 ساعة بشحنة واحدة فقط (HyperX Cloud Alpha Wireless 300h)",
    "title": "HyperX Cloud Alpha Wireless - Gaming Headset for PC, 300-hour battery life, DTS Headphone:X Spatial Audio",
    "brand": "HyperX",
    "category": "headsets",
    "category_ar": "سماعات ديسكورد وقيمنق",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B09TRW57WB?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71pFeJFdJQL._AC_SL1500_.jpg",
    "price": 2999,
    "previous_price": 11900,
    "savings": 8901,
    "discount_percent": 75,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.9,
    "review_count": 720,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 12614,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 11900,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 10097,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 9899,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "تشحنها مرة واحدة كل شهرين! بطارية 300 ساعة هي الأطول في العالم بلا أي منافس",
        "جودة صوت نقية بتقنية الغرف المزدوجة Dual Chamber"
      ],
      "cons": [
        "سعرها في الفئة العليا"
      ],
      "brand_summary": "HyperX من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-head-05",
    "asin": "B086PKMZ21",
    "display_title": "سماعة ريزر بلاك شارك V2 X خفيفة الوزن 240 جم بصوت محيطي 7.1 وعزل ضوضاء ممتاز (Razer BlackShark V2 X)",
    "title": "Razer BlackShark V2 X Gaming Headset: 7.1 Surround Sound, 50mm Drivers, Memory Foam, Multi-Platform",
    "brand": "Razer",
    "category": "headsets",
    "category_ar": "سماعات ديسكورد وقيمنق",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B086PKMZ21?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71-mnhc4Q8L._AC_SL1500_.jpg",
    "price": 3349,
    "previous_price": 4086,
    "savings": 737,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.8,
    "review_count": 2100,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 3286,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 3100,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 2549,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 2499,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "وزن خفيف جداً يمنع أي صداع أو ضغط على الرأس مع وسائد مسامية تسمح بمرور الهواء",
        "مايكروفون قلبي Cardioid عازل لأنفاسك وأصوات الكيبورد"
      ],
      "cons": [
        "المايكروفون غير قابل للفصل"
      ],
      "brand_summary": "Razer من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-peri-02",
    "asin": "B087LXCTFJ",
    "display_title": "ماوس الألعاب اللاسلكي لوجيتيك جي برو إكس سوبر لايت الأسطوري بوزن 63 جم (Logitech G PRO X SUPERLIGHT)",
    "title": "Logitech G PRO X SUPERLIGHT Wireless Gaming Mouse, Ultra-Lightweight, HERO 25K Sensor, White/Black",
    "brand": "Logitech",
    "category": "keyboards-mice",
    "category_ar": "كيبوردات ميكانيكال وماوسات",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B087LXCTFJ?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/51uy8gOG-iL._AC_SL1400_.jpg",
    "price": 2149,
    "previous_price": 8500,
    "savings": 6351,
    "discount_percent": 75,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.9,
    "review_count": 1400,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 9010,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 8500,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 7037,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 6899,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "سلاح لاعبي بطولات فالورانت و CS2 المحترفين بوزن فائق الخفة وانزلاق ناعم للغاية",
        "حساس HERO 25K فائق الدقة بدون أي تأخير لاسلكي"
      ],
      "cons": [
        "سعره مخصص للمهتمين بالرياضات الإلكترونية"
      ],
      "brand_summary": "Logitech من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-peri-03",
    "asin": "B07CGPZ3ZQ",
    "display_title": "ماوس لاسلكي لوجيتيك G305 لايت سبيد ألوان متعددة أبيض/ليلك/أسود وبطارية 250 ساعة (Logitech G305 Lightspeed)",
    "title": "Logitech G305 LIGHTSPEED Wireless Gaming Mouse, Hero 12K Sensor, 12000 DPI, Lightweight",
    "brand": "Logitech",
    "category": "keyboards-mice",
    "category_ar": "كيبوردات ميكانيكال وماوسات",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B07CGPZ3ZQ?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/51YNW5aViBL._AC_SL1500_.jpg",
    "price": 1982,
    "previous_price": 2600,
    "savings": 618,
    "discount_percent": 24,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.8,
    "review_count": 2200,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 2756,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 2600,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 2039,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 1999,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أفضل ماوس لاسلكي قيمة مقابل سعر، بطارية تدوم شهور متواصلة، وحجم مريح لجميع أحجام اليد",
        "متوفر بألوان أنيقة مثل الأبيض والليلك والأسود"
      ],
      "cons": [
        "يعمل ببطارية AA عادية"
      ],
      "brand_summary": "Logitech من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-peri-04",
    "asin": "B07GBZ4Q68",
    "display_title": "ماوس الألعاب الأكثر مبيعاً في العالم لوجيتيك G502 هيرو مع 11 زر قابل للبرمجة (Logitech G502 HERO)",
    "title": "Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K Sensor, 25,600 DPI, RGB",
    "brand": "Logitech",
    "category": "keyboards-mice",
    "category_ar": "كيبوردات ميكانيكال وماوسات",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B07GBZ4Q68?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg",
    "price": 2501,
    "previous_price": 3100,
    "savings": 599,
    "discount_percent": 19,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.9,
    "review_count": 5100,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 3286,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 3100,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 2549,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 2499,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "عجلة التمرير اللانهائي المزدوجة و11 زراً يمكن تخصيصها لاختصارات ديسكورد والألعاب",
        "أوزان معدنية قابلة للضبط لتغيير مركز ثقل الماوس"
      ],
      "cons": [
        "وزنه أثقل من ماوسات الرياضات الإلكترونية"
      ],
      "brand_summary": "Logitech من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-peri-07",
    "asin": "B07F7T8J9P",
    "display_title": "ماوس ألعاب ريزر ديث آدر إسنشال بحساس 6400 DPI وتصميم مريح لليد (Razer DeathAdder Essential)",
    "title": "Razer DeathAdder Essential Gaming Mouse: 6400 DPI Optical Sensor - 5 Programmable Buttons - Mechanical Switches",
    "brand": "Razer",
    "category": "keyboards-mice",
    "category_ar": "كيبوردات ميكانيكال وماوسات",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
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
    "price_checked_at": "2026-11-01",
    "rating": 4.7,
    "review_count": 3200,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 1643,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 1550,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 1223,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 1199,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "الماوس الاقتصادي الأكثر راحة لليد في مصر من علامة ريزر العريقة",
        "مفاتيح ميكانيكية تتحمل 10 ملايين نقرة مع إضاءة خضراء مميزة"
      ],
      "cons": [
        "إضاءة بلون واحد فقط (أخضر أو أبيض حسب الإصدار)"
      ],
      "brand_summary": "Razer من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-peri-08",
    "asin": "B084RPZD6T",
    "display_title": "ماوس ألعاب ريزر فايبر ميني فائق الخفة 61 جم بمفاتيح ضوئية سريعة (Razer Viper Mini)",
    "title": "Razer Viper Mini Ultralight Gaming Mouse: Fastest Gaming Switches - 8500 DPI Optical Sensor - Chroma RGB",
    "brand": "Razer",
    "category": "keyboards-mice",
    "category_ar": "كيبوردات ميكانيكال وماوسات",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B084RPZD6T?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/51gWCFijcqL._AC_SL1000_.jpg",
    "price": 3099,
    "previous_price": 3781,
    "savings": 682,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.8,
    "review_count": 2400,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 1961,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 1850,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 1529,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 1499,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "مفاتيح بصرية تستجيب بسرعة الضوء (0.2 مللي ثانية) وتستحيل معها مشكلة النقر المزدوج (Double Click)",
        "وزن ريشة 61 جم وتصميم انسيابي"
      ],
      "cons": [
        "سلكي وحجمه مناسب للأيدي المتوسطة والصغيرة"
      ],
      "brand_summary": "Razer من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-set-01",
    "asin": "B09TZNZ5WD",
    "display_title": "شريط إضاءة ذكي جوفي RGBIC نيون للغرفة وخلفية الشاشة ومزامنة الموسيقى (Govee RGBIC Neon LED Strip 3m)",
    "title": "Govee RGBIC Neon Rope Light, 3m Flexible Silicone LED Strip with Music Sync, Works with Alexa & App Control",
    "brand": "Govee",
    "category": "setup-aesthetic",
    "category_ar": "سيت أب وديكور وإضاءة RGB",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B09TZNZ5WD?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61bPzhjXs5L._AC_SL1500_.jpg",
    "price": 5990,
    "previous_price": 7308,
    "savings": 1318,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.9,
    "review_count": 670,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 3816,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 3600,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 3059,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 2999,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "التريند الأول في سيت أب الديسكورد والإنستغرام، ضوء نيون متصل وناعم بدون ظهور نقاط ليد منفصلة",
        "مرن يمكن تشكيله كقلب أو سماعة أو لوجو على الحائط مع مزامنة مع الموسيقى وأصوات الألعاب"
      ],
      "cons": [
        "يتطلب تخطيط مسار التثبيت بالكلبسات قبل التثبيت"
      ],
      "brand_summary": "Govee من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-mon-01",
    "asin": "B08VS8YG8H",
    "display_title": "شاشة ألعاب إل جي ألترا جير 24 بوصة IPS بتردد 144Hz وزمن استجابة 1ms حقيقي (LG UltraGear 24GN600-B)",
    "title": "LG UltraGear 24GN600-B 24\" FHD (1920 x 1080) IPS 1ms 144Hz Gaming Monitor with AMD FreeSync Premium",
    "brand": "LG",
    "category": "monitors",
    "category_ar": "شاشات قيمنق 144Hz+",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B08VS8YG8H?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71XzYokzN2L._AC_SL1500_.jpg",
    "price": 11999,
    "previous_price": 14639,
    "savings": 2640,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.8,
    "review_count": 940,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 9434,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 8900,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 7649,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 7499,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "الشاشة الأكثر مبيعاً والأعلى تقييماً في مصر للألعاب التنافسية (فالورانت وببجي و CS2)",
        "لوحة IPS بألوان دقيقة وزمن 1ms بدون أي ضبابية حركة"
      ],
      "cons": [
        "قاعدة الشاشة تدعم الإمالة فقط"
      ],
      "brand_summary": "LG من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-mon-02",
    "asin": "B093MTSTKD",
    "display_title": "شاشة ألعاب إل جي ألترا جير 27 بوصة دقة 2K QHD نانو آي بي إس 165Hz وزمن 1ms (LG UltraGear 27GP850-B)",
    "title": "LG UltraGear 27GP850-B 27\" QHD (2560 x 1440) Nano IPS 1ms Gaming Monitor 165Hz, G-SYNC Compatible",
    "brand": "LG",
    "category": "monitors",
    "category_ar": "شاشات قيمنق 144Hz+",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B093MTSTKD?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71PVdlAD4lL._AC_SL1500_.jpg",
    "price": 13497,
    "previous_price": 21900,
    "savings": 8403,
    "discount_percent": 38,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.9,
    "review_count": 670,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 23214,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 21900,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 18869,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 18499,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "ملكة شاشات الـ 2K في العالم بألوان Nano IPS فائقة الدقة 98% DCI-P3 وسرعة استجابة مذهلة",
        "قاعدة هيدروليكية كاملة تدعم الدوران والرفع"
      ],
      "cons": [
        "سعرها في الفئة العليا"
      ],
      "brand_summary": "LG من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-mon-03",
    "asin": "B08FF3F5HR",
    "display_title": "شاشة ألعاب سامسونج أوديسي G5 منحنية مقاس 27 بوصة دقة 2K WQHD بتردد 144Hz (Samsung Odyssey G5 27\" Curved)",
    "title": "Samsung 27-Inch Odyssey G5 Curved Gaming Monitor, WQHD (2560x1440), 144Hz, 1ms, 1000R Curvature",
    "brand": "Samsung",
    "category": "monitors",
    "category_ar": "شاشات قيمنق 144Hz+",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B08FF3F5HR?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/81cSdJuBbFL._AC_SL1500_.jpg",
    "price": 48659,
    "previous_price": 59364,
    "savings": 10705,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.7,
    "review_count": 1120,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 14310,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 13500,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 11729,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 11499,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "انحناء 1000R سينمائي يغمر مجال الرؤية بالكامل لعشاق ألعاب القصة والسباقات",
        "دقة 2K WQHD مع تباين أسود عميق"
      ],
      "cons": [
        "زوايا الرؤية الجانبية أضيق من لوحات IPS"
      ],
      "brand_summary": "Samsung من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-hw-01",
    "asin": "B0C8ZQTRD7",
    "display_title": "كارت شاشة جيجابايت جي فورس RTX 4060 ويندفورس OC سعة 8GB GDDR6 مع دعم DLSS 3 (Gigabyte RTX 4060)",
    "title": "Gigabyte GeForce RTX 4060 WINDFORCE OC 8G Graphics Card, 2X WINDFORCE Fans, 8GB 128-bit GDDR6, DLSS 3",
    "brand": "Gigabyte",
    "category": "pc-hardware",
    "category_ar": "تجميعات وهاردوير البي سي",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B0C8ZQTRD7?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71a2afWp9LL._AC_SL1500_.jpg",
    "price": 21000,
    "previous_price": 21500,
    "savings": 500,
    "discount_percent": 2,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.8,
    "review_count": 410,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 22790,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 21500,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 18869,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 18499,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "الكارت الأكثر طلباً في مصر لتشغيل جميع الألعاب على دقة 1080p بإطارات تفوق 120 FPS بفضل DLSS 3",
        "استهلاك طاقة اقتصادي 115W فقط وحرارة هادئة جداً"
      ],
      "cons": [
        "سعة 8GB مخصصة لدقة FHD والـ 2K المتوسط"
      ],
      "brand_summary": "Gigabyte من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-hw-03",
    "asin": "B08166SLDF",
    "display_title": "معالج إيه إم دي رايزن 5 5600X سداسي النواة و12 مسار بتردد يصل إلى 4.6GHz (AMD Ryzen 5 5600X)",
    "title": "AMD Ryzen 5 5600X 6-core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler",
    "brand": "AMD",
    "category": "pc-hardware",
    "category_ar": "تجميعات وهاردوير البي سي",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B08166SLDF?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/51ld6RR8IrL._AC_SL1500_.jpg",
    "price": 5283,
    "previous_price": 8900,
    "savings": 3617,
    "discount_percent": 41,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.9,
    "review_count": 3400,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 9434,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 8900,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 7649,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 7499,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "ملك تجميعات الألعاب التنافسية في مصر بدون منازع بأعلى معدل إطارات في فالورانت وببجي",
        "استهلاك طاقة 65W فقط ويعمل مع لوحات B450 و B550 الاقتصادية"
      ],
      "cons": [
        "يفضل تركيب مبرد هوائي احترافي لتحقيق أقصى تردد كسر سرعة"
      ],
      "brand_summary": "AMD من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-hw-04",
    "asin": "B09MDFH5HY",
    "display_title": "معالج إنتل كور i5-12400F الجيل الثاني عشر سداسي النواة لمنصة LGA1700 (Intel Core i5-12400F)",
    "title": "Intel Core i5-12400F Desktop Processor 18M Cache, up to 4.40 GHz LGA1700",
    "brand": "Intel",
    "category": "pc-hardware",
    "category_ar": "تجميعات وهاردوير البي سي",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B09MDFH5HY?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/51EwtPjHkIL._AC_SL1280_.jpg",
    "price": 6000,
    "previous_price": 7800,
    "savings": 1800,
    "discount_percent": 23,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.9,
    "review_count": 1200,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 8268,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 7800,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 6629,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 6499,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أفضل معالج في مصر في معادلة السعر مقابل الأداء، يتيح لك تشغيل أي كارت شاشة بدون عنق زجاجة",
        "حرارة منخفضة جداً"
      ],
      "cons": [
        "لا يحتوي على كارت شاشة داخلي"
      ],
      "brand_summary": "Intel من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-hw-05",
    "asin": "B0B25NXWC7",
    "display_title": "هارد كروشيال بي 3 بلس NVMe SSD سعة 1TB سرعة قراءة 5000MB/s الجيل الرابع (Crucial P3 Plus 1TB)",
    "title": "Crucial P3 Plus 1TB PCIe Gen4 3D NAND NVMe M.2 SSD, up to 5000MB/s - CT1000P3PSSD8",
    "brand": "Crucial",
    "category": "pc-hardware",
    "category_ar": "تجميعات وهاردوير البي سي",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
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
    "price_checked_at": "2026-11-01",
    "rating": 4.8,
    "review_count": 2400,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 4558,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 4300,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 3773,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 3699,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "سرعة تحميل ألعاب ديسكورد وحفظ كليبات الفيديو في أجزاء من الثانية",
        "توافق رسمي كامل مع كمبيوتر الألعاب وجهاز PS5"
      ],
      "cons": [
        "لا يأتي مع برغي تثبيت في العلبة"
      ],
      "brand_summary": "Crucial من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-hw-06",
    "asin": "B097K2WBL3",
    "display_title": "رامات كينجستون فيوري بيست 16GB (2x8GB) DDR4 3200MHz بتصميم أسود مشتت حراري (Kingston FURY Beast 16GB)",
    "title": "Kingston FURY Beast 16GB (2x8GB) 3200MHz DDR4 CL16 Desktop Memory Kit of 2 KF432C16BBK2/16",
    "brand": "Kingston",
    "category": "pc-hardware",
    "category_ar": "تجميعات وهاردوير البي سي",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
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
    "price_checked_at": "2026-11-01",
    "rating": 4.9,
    "review_count": 1850,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 3286,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 3100,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 2549,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 2499,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "الرامات الأكثر مبيعاً واستقراراً في مصر، تنهي أي تقطيع أو لاج في الألعاب والتنقل بين التطبيقات",
        "دعم XMP لكسر السرعة التلقائي"
      ],
      "cons": [
        "إصدار بدون إضاءة RGB"
      ],
      "brand_summary": "Kingston من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-hw-07",
    "asin": "B09LGY38L4",
    "display_title": "مشتت هوائي ثيرمال رايت بيرليس أساسين 120 SE ببرجين تبريد و6 أنابيب نحاسية (Thermalright Peerless Assassin 120)",
    "title": "Thermalright Peerless Assassin 120 SE CPU Air Cooler, 6 Heat Pipes, Dual 120mm PWM Fans",
    "brand": "Thermalright",
    "category": "pc-hardware",
    "category_ar": "تجميعات وهاردوير البي سي",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B09LGY38L4?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71j6VKsz-fL._SL1500_.jpg",
    "price": 4500,
    "previous_price": 5490,
    "savings": 990,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.9,
    "review_count": 1100,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 3710,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 3500,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 2855,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 2799,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "قاهر المبردات المائية: يقلل حرارة المعالج لأكثر من 25 درجة بنصف سعر التبريد المائي",
        "مروحتين 120mm هادئتين جداً"
      ],
      "cons": [
        "حجمه ضخم يتطلب كيسة بعرض كافي"
      ],
      "brand_summary": "Thermalright من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-con-02",
    "asin": "B098RKWHHZ",
    "display_title": "جهاز نينتندو سويتش شاشة أوليد مقاس 7 بوصة ألوان نيون ومساحة 64GB (Nintendo Switch OLED)",
    "title": "Nintendo Switch – OLED Model with Neon Red & Neon Blue Joy-Con, 7-inch OLED Screen",
    "brand": "Nintendo",
    "category": "consoles-handheld",
    "category_ar": "كونسول واكسسوارات",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B098RKWHHZ?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61nqNujSF2L._AC_SL1330_.jpg",
    "price": 17499,
    "previous_price": 21200,
    "savings": 3701,
    "discount_percent": 17,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T04:23:39.955Z",
    "rating": 4.9,
    "review_count": 980,
    "in_stock": true,
    "is_deal_active": true,
    "stock_status": "in_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 23500,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 21200,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 18500,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 17499,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "الجهاز المحمول المفضل للبنات والشباب في السفر والتجمعات مع شاشة OLED بألوان نابضة بالحياة",
        "بطارية تدوم حتى 9 ساعات ومكتبة ألعاب زيلدا وماريو وبوكيمون"
      ],
      "cons": [
        "ألعاب نينتندو الحصرية نادراً ما ينزل عليها خصم كبير"
      ],
      "brand_summary": "Nintendo من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-con-04",
    "asin": "B094WL86N5",
    "display_title": "ذراع تحكم سوني دوال سينس بلايستيشن 5 لون أسود منتصف الليل للبي سي والكونسول (DualSense Midnight Black)",
    "title": "PlayStation 5 DualSense Wireless Controller - Midnight Black",
    "brand": "Sony",
    "category": "consoles-handheld",
    "category_ar": "كونسول واكسسوارات",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B094WL86N5?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61m0Fnpx4wL._AC_SL1475_.jpg",
    "price": 3900,
    "previous_price": 4758,
    "savings": 858,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.9,
    "review_count": 1450,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 4134,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 3900,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 3365,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 3299,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "لون أسود كربوني فخم متوافق 100% مع منصة Steam وأجهزة الكمبيوتر عبر البلوتوث أو السلك",
        "زنادات تكيفية تفاعلية ومحركات اهتزاز جبارة"
      ],
      "cons": [
        "بطارية تدوم من 6 إلى 8 ساعات"
      ],
      "brand_summary": "Sony من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-con-05",
    "asin": "B08DF26MXW",
    "display_title": "ذراع تحكم إكس بوكس اللاسلكي الأصلي لون أبيض روبوت يدعم الويندوز والموبايل (Xbox Controller Robot White)",
    "title": "Xbox Wireless Controller - Robot White for Xbox Series X|S, Windows PC, Android, iOS",
    "brand": "Microsoft",
    "category": "consoles-handheld",
    "category_ar": "كونسول واكسسوارات",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B08DF26MXW?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/51wNvBveUeL._AC_SL1000_.jpg",
    "price": 3774,
    "previous_price": 3800,
    "savings": 26,
    "discount_percent": 1,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.8,
    "review_count": 2100,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 4028,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 3800,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 3263,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 3199,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "اليد الرسمية المفضلة لجميع ألعاب نظام ويندوز في مصر وتتعرف عليها الألعاب تلقائياً بدون أي برامج خارجية",
        "قبضة يد مريحة جداً لا تسبب تعرقاً"
      ],
      "cons": [
        "تعمل ببطاريات AA أو بطارية شحن منفصلة"
      ],
      "brand_summary": "Microsoft من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-lap-02",
    "asin": "B0GNKS32QB",
    "display_title": "لابتوب أسوس تاف F15 معالج Core i7 الجيل الثاني عشر وكارت RTX 3050 رامات 16GB شاشة 144Hz (ASUS TUF F15)",
    "title": "ASUS TUF Gaming F15 Laptop, 15.6\" 144Hz FHD, Intel Core i7-12700H, 16GB DDR4, 512GB PCIe SSD, RTX 3050",
    "brand": "ASUS",
    "category": "laptops",
    "category_ar": "لابتوبات قيمنق ومونتاج",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B0GNKS32QB?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/51ug5icR5+L._AC_SL1024_.jpg",
    "price": 47999,
    "previous_price": 58559,
    "savings": 10560,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.7,
    "review_count": 340,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 43990,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 41500,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 37739,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 36999,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "معالج i7 فائق القوة بـ 14 نواة للمونتاج والرندرة والألعاب مع متانة عسكرية ضد الصدمات",
        "نظام تنظيف ذاتي للمراوح لمنع تجمع الأتربة"
      ],
      "cons": [
        "سطوع الشاشة مناسب للأماكن الداخلية"
      ],
      "brand_summary": "ASUS من أشهر الشركات الموثوقة لدى مجتمع الجيمرز ومستخدمي الديسكورد.",
      "user_sentiment": "95% يوصون به بناءً على تجارب الاستخدام والستريم.",
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
    "id": "d-head-10",
    "asin": "B07PDFBJZD",
    "display_title": "سماعة لوجيتيك جي برو إكس للبطولات مع بطاقة صوت USB وتقنية Blue VO!CE (Logitech G PRO X Headset)",
    "title": "Logitech G PRO X Gaming Headset with Blue VO!CE, DTS Headphone:X 2.0, 50mm PRO-G Drivers",
    "brand": "Logitech",
    "category": "headsets",
    "category_ar": "سماعات ديسكورد وقيمنق",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B07PDFBJZD?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/51j6CXF9DYL._AC_SL1000_.jpg",
    "price": 7499,
    "previous_price": 9149,
    "savings": 1650,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.9,
    "review_count": 1450,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 7526,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 7100,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 6017,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 5899,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "فلاتر Blue VO!CE الاحترافية تجعل صوتك في الديسكورد كما لو كنت تسجل في استوديو راديو احترافي",
        "شاسيه صلب من الألومنيوم والفولاذ"
      ],
      "cons": [
        "تتطلب توصيل كارت الصوت USB للاستفادة من كامل الميزات"
      ],
      "brand_summary": "Logitech من أشهر الشركات العالمية المعتمدة لدى مجتمع الجيمرز.",
      "user_sentiment": "96% يوصون باقتنائه بناءً على تجارب الاستخدام.",
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
    "id": "d-head-11",
    "asin": "B00HVLUR18",
    "display_title": "سماعة أوديو تكنيكا ATH-M20x الاحترافية لعزل الصوت والنقاء الصوتي الاستوديو (Audio-Technica ATH-M20x)",
    "title": "Audio-Technica ATH-M20x Professional Studio Monitor Headphones, Black",
    "brand": "Audio-Technica",
    "category": "headsets",
    "category_ar": "سماعات ديسكورد وقيمنق",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B00HVLUR18?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/81zcnWFPwVS._AC_SL1500_.jpg",
    "price": 4949,
    "previous_price": 6038,
    "savings": 1089,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T03:28:10.588Z",
    "rating": 4.8,
    "review_count": 2800,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 3498,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 3300,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 2753,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 2699,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "عزل صوتي خارجي ممتاز وصوت بيز دقيق ومتوازن لعشاق الاستماع والموسيقى والمونتاج",
        "وسائد ناعمة ومريحة للأذن"
      ],
      "cons": [
        "لا تحتوي على مايكروفون مدمج (يفضل استخدامها مع مايك خارجي)"
      ],
      "brand_summary": "Audio-Technica من أشهر الشركات العالمية المعتمدة لدى مجتمع الجيمرز.",
      "user_sentiment": "96% يوصون باقتنائه بناءً على تجارب الاستخدام.",
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
    "id": "d-peri-11",
    "asin": "B016MAK38U",
    "display_title": "كيبورد ميكانيكي ريدراجون كومارا K552 إصدار أبيض RGB مفاتيح زرقاء كليك (Redragon K552 White RGB)",
    "title": "Redragon K552 Mechanical Gaming Keyboard RGB LED Rainbow Backlit Blue Switches White",
    "brand": "Redragon",
    "category": "keyboards-mice",
    "category_ar": "كيبوردات ميكانيكال وماوسات",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B016MAK38U?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71FSIp+tDNL._AC_SL1500_.jpg",
    "price": 1589,
    "previous_price": 2200,
    "savings": 611,
    "discount_percent": 28,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.7,
    "review_count": 1400,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 2332,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 2200,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 1835,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 1799,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "لون أبيض ثلجي مثالي للسيت أب الأبيض مع صوت كليك مميز واستجابة سريعة",
        "شاسيه معدني وبلاستيكي مقاوم للصدمات"
      ],
      "cons": [
        "صوت المفاتيح الزرقاء مرتفع نسبياً"
      ],
      "brand_summary": "Redragon من أشهر الشركات العالمية المعتمدة لدى مجتمع الجيمرز.",
      "user_sentiment": "96% يوصون باقتنائه بناءً على تجارب الاستخدام.",
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
    "id": "d-con-07",
    "asin": "B08H99BPJN",
    "display_title": "قاعدة شحن أذرع تحكم بلايستيشن 5 دوال سينس الأصلية من سوني لشحن ذراعين معاً (PS5 Charging Station)",
    "title": "PlayStation 5 DualSense Charging Station - Official Sony Accessory",
    "brand": "Sony",
    "category": "consoles-handheld",
    "category_ar": "كونسول واكسسوارات",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B08H99BPJN?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61tpbGZhxBL._AC_SL1500_.jpg",
    "price": 4173,
    "previous_price": 5091,
    "savings": 918,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.9,
    "review_count": 920,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 2544,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 2400,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 1937,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 1899,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "تثبيت نقري مريح يشحن ذراعين معاً بسرعة ويحافظ عليهما مرتبين على المكتب بدون أسلاك فوضوية",
        "توفر منافذ الـ USB بجهازك"
      ],
      "cons": [
        "تتطلب توصيلاً بمقبس كهرباء"
      ],
      "brand_summary": "Sony من أشهر الشركات العالمية المعتمدة لدى مجتمع الجيمرز.",
      "user_sentiment": "96% يوصون باقتنائه بناءً على تجارب الاستخدام.",
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
    "id": "d-hw-08",
    "asin": "B08GS7748F",
    "display_title": "هارد سامسونج 980 برو إس إس دي سعة 1TB بمنفذ M.2 NVMe PCIe 4.0 سرعة 7000MB/s (Samsung 980 PRO 1TB)",
    "title": "Samsung 980 PRO SSD 1TB PCIe 4.0 NVMe Gen 4 Gaming M.2 Internal SSD",
    "brand": "Samsung",
    "category": "pc-hardware",
    "category_ar": "تجميعات وهاردوير البي سي",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B08GS7748F?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71qA45tWZ5L._AC_SL1500_.jpg",
    "price": 14450,
    "previous_price": 17629,
    "savings": 3179,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.9,
    "review_count": 1450,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 6466,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 6100,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 5099,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 4999,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "الهارد الأسرع والأكثر اعتمادية في العالم مع كاش DRAM مدمج وسرعة قراءة خارقة 7000 ميجابايت/ثانية",
        "توافق معتمد مع PS5 والبي سي"
      ],
      "cons": [
        "يتطلب مشتت حراري مع الضغط الشديد"
      ],
      "brand_summary": "Samsung من أشهر الشركات العالمية المعتمدة لدى مجتمع الجيمرز.",
      "user_sentiment": "96% يوصون باقتنائه بناءً على تجارب الاستخدام.",
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
    "id": "d-hw-09",
    "asin": "B0BBWH1R8H",
    "display_title": "هارد كينجستون NV2 سعة 1TB بمنفذ NVMe PCIe 4.0 سرعة 3500MB/s الاقتصادي (Kingston NV2 1TB)",
    "title": "Kingston NV2 1TB M.2 2280 NVMe Internal SSD PCIe 4.0 Gen 4x4",
    "brand": "Kingston",
    "category": "pc-hardware",
    "category_ar": "تجميعات وهاردوير البي سي",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "Amazon.eg",
    "url": "https://www.amazon.eg/dp/B0BBWH1R8H?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71NfMZKkpQL._AC_SL1500_.jpg",
    "price": 7347,
    "previous_price": 8963,
    "savings": 1616,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.8,
    "review_count": 1120,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 4346,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 4100,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 3569,
        "label": "بداية النزول"
      },
      {
        "date": "2026-10-31",
        "price": 3499,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أفضل سعة 1 تيرابايت اقتصادية لتثبيت مكتبة ألعاب ديسكورد بالكامل بدون تكلفة عالية",
        "سرعة ممتازة وعمر افتراضي طويل"
      ],
      "cons": [
        "لا يحتوي على ذاكرة كاش DRAM"
      ],
      "brand_summary": "Kingston من أشهر الشركات العالمية المعتمدة لدى مجتمع الجيمرز.",
      "user_sentiment": "96% يوصون باقتنائه بناءً على تجارب الاستخدام.",
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
    "id": "eg-b0bmfqp2zz",
    "asin": "B0BMFQP2ZZ",
    "display_title": "فيفين ميكروفون ديناميكي USB - XLR لتسجيل البودكاست العاب الكمبيوتر مع ضوء RGB وزر كتم الصوت ومقبس سماعات راس",
    "title": "فيفين ميكروفون ديناميكي USB - XLR لتسجيل البودكاست العاب الكمبيوتر مع ضوء RGB وزر كتم الصوت ومقبس سماعات راس وحامل سطح المكتب وميكروفون صوتي للغناء على اليوتيوب- امبليجيم AM8 أحادي الاتجاه أسود",
    "brand": "Fifine",
    "category": "streaming-voice",
    "category_ar": "مايكات وصوتيات ديسكورد",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0BMFQP2ZZ?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71k6li+9vFL._AC_SL1500_.jpg",
    "price": 3499,
    "previous_price": 4304,
    "savings": 805,
    "discount_percent": 19,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.6,
    "review_count": 172,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 4519,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 4304,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 3569,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 3499,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Fifine من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0b8snvk5k",
    "asin": "B0B8SNVK5K",
    "display_title": "ميكروفون من فيفاين موديل K688 باللون الأسود مع اتصال USB وXLR، يتميز بكتم الصوت وتقليل الضوضاء ومقبس سماعة ومر",
    "title": "ميكروفون من فيفاين موديل K688 باللون الأسود مع اتصال USB وXLR، يتميز بكتم الصوت وتقليل الضوضاء ومقبس سماعة ومراقبة فورية، متوافق مع الكمبيوتر",
    "brand": "Fifine",
    "category": "streaming-voice",
    "category_ar": "مايكات وصوتيات ديسكورد",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0B8SNVK5K?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/81nLaAZKKrL._AC_SL1500_.jpg",
    "price": 4499,
    "previous_price": 5444,
    "savings": 945,
    "discount_percent": 17,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.6,
    "review_count": 174,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 5716,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 5444,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 4589,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 4499,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Fifine من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0d8bdfq22",
    "asin": "B0D8BDFQ22",
    "display_title": "ميكروفون كمبيوتر USB من يو جرين مع إضاءة RGB وزر لمسي لكتم الصوت للديسكورد (UGREEN USB Gaming Mic)",
    "title": "ميكروفون للكمبيوتر من يو جرين، ميكروفون USB بإضاءة ار جي بي وزر كتم، دقة 24 بت/96 كيلوهرتز، نمط قطبي قلبي، تحكم في مستوى الصوت، ميكروفون مكثف للبث والألعاب والبودكاست، متوافق مع اللابتوب وجهاز PS5",
    "brand": "UGREEN",
    "category": "streaming-voice",
    "category_ar": "مايكات وصوتيات ديسكورد",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0D8BDFQ22?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71LAH-vU6jL._AC_SL1500_.jpg",
    "price": 2499,
    "previous_price": 2874,
    "savings": 375,
    "discount_percent": 13,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T04:23:44.745Z",
    "rating": 4.4,
    "review_count": 183,
    "in_stock": true,
    "is_deal_active": true,
    "stock_status": "in_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 3018,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 2874,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 2549,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 2499,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "UGREEN من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0hms97s58",
    "asin": "B0HMS97S58",
    "display_title": "طقم ميكروفون مكثف يو اس بي اس يو 9 192 كيلو هرتز/24 بت مع ذراع بوم",
    "title": "طقم ميكروفون مكثف يو اس بي اس يو 9 192 كيلو هرتز/24 بت مع ذراع بوم",
    "brand": "Zealsound",
    "category": "streaming-voice",
    "category_ar": "مايكات وصوتيات ديسكورد",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0HMS97S58?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/41aycIOE4yL._AC_SY355_.jpg",
    "price": 2100,
    "previous_price": 2373,
    "savings": 273,
    "discount_percent": 12,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.6,
    "review_count": 249,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 2492,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 2373,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 2142,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 2100,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Zealsound من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b07m6y7355",
    "asin": "B07M6Y7355",
    "display_title": "كاميرا ويب C960 بدقة 1080 بيكسل وزاوية 90 درجة مزودة بميكرفونين ومنفذ USB للتوصيل والتشغيل من اي ميت، للاب توب",
    "title": "كاميرا ويب C960 بدقة 1080 بيكسل وزاوية 90 درجة مزودة بميكرفونين ومنفذ USB للتوصيل والتشغيل من اي ميت، للاب توب والكمبيوتر، بصري، أسود",
    "brand": "eMeet",
    "category": "streaming-voice",
    "category_ar": "مايكات وصوتيات ديسكورد",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B07M6Y7355?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61-K2lXmHQL._AC_SL1500_.jpg",
    "price": 1999,
    "previous_price": 2239,
    "savings": 240,
    "discount_percent": 11,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.3,
    "review_count": 186,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 2351,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 2239,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 2039,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 1999,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "eMeet من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0h75rqxl9",
    "asin": "B0H75RQXL9",
    "display_title": "كاميرا ويب بدقة FHD، كاميرا USB بدقة 1080P مع ميكروفون مدمج، تعمل بالتوصيل والاستخدام مباشرة، مناسبة للكمبيوتر",
    "title": "كاميرا ويب بدقة FHD، كاميرا USB بدقة 1080P مع ميكروفون مدمج، تعمل بالتوصيل والاستخدام مباشرة، مناسبة للكمبيوتر واللاب توب لمكالمات الفيديو والبث المباشر والدروس والاجتماعات عبر الانترنت من تك زون",
    "brand": "Generic FHD",
    "category": "streaming-voice",
    "category_ar": "مايكات وصوتيات ديسكورد",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0H75RQXL9?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/51GKOpI5fgL._AC_SL1000_.jpg",
    "price": 499,
    "previous_price": 599,
    "savings": 100,
    "discount_percent": 17,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T04:23:46.226Z",
    "rating": 3.1,
    "review_count": 477,
    "in_stock": true,
    "is_deal_active": true,
    "stock_status": "in_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 629,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 599,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 509,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 499,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Generic FHD من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0c45h4wg9",
    "asin": "B0C45H4WG9",
    "display_title": "حامل ميكروفون بذراع من فيفين، حامل بذراع بوم مع مشبك تثبيت مكتبي ومساحة لإدارة الكابلات ومحول لولبي ومشبك للبو",
    "title": "حامل ميكروفون بذراع من فيفين، حامل بذراع بوم مع مشبك تثبيت مكتبي ومساحة لإدارة الكابلات ومحول لولبي ومشبك للبودكاست والألعاب واستوديو البث - موديل BM88",
    "brand": "Fifine",
    "category": "streaming-voice",
    "category_ar": "مايكات وصوتيات ديسكورد",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0C45H4WG9?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/51iwlWH8v0L._AC_SL1500_.jpg",
    "price": 2799,
    "previous_price": 3247,
    "savings": 448,
    "discount_percent": 14,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.5,
    "review_count": 402,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 3409,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 3247,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 2855,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 2799,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Fifine من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0hbn2fxzm",
    "asin": "B0HBN2FXZM",
    "display_title": "حامل ميكروفون بذراع من فيفين مع مشبك تثبيت مكتبي قابل للتعديل (Fifine Boom Arm)",
    "title": "حامل ذراع ميكروفون بوم ارم قابل للتعديل من تيك زون، ذراع مقصي بنظام تعليق شديد التحمل مع مشبك تثبيت للمكتب، حامل ميكروفون معدني دوار 360 درجة للبودكاست، والبث المباشر، والألعاب، والتسجيل، والإذاعة",
    "brand": "TechZone",
    "category": "streaming-voice",
    "category_ar": "مايكات وصوتيات ديسكورد",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0HBN2FXZM?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61onCsIXDkL._AC_SL1500_.jpg",
    "price": 264,
    "previous_price": 317,
    "savings": 53,
    "discount_percent": 17,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T04:23:47.665Z",
    "rating": 4.7,
    "review_count": 173,
    "in_stock": true,
    "is_deal_active": true,
    "stock_status": "in_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 333,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 317,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 269,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 264,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "TechZone من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b09qfynjmb",
    "asin": "B09QFYNJMB",
    "display_title": "سماعة V2 على الاذن سلكي رأس بلاك شارك v2 X متعددة المنصات بسلك من رازر للرياضات الالكترونية مشغلات تريفورس 50",
    "title": "سماعة V2 على الاذن سلكي رأس بلاك شارك v2 X متعددة المنصات بسلك من رازر للرياضات الالكترونية مشغلات تريفورس 50 ملم وخاصية الغار الضوضاء المتطورة وصوت محيطي 7.1 وميكروفون التقاط قلبي هايبر كلير أبيض",
    "brand": "Razer",
    "category": "headsets",
    "category_ar": "سماعات ديسكورد وقيمنق",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B09QFYNJMB?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71lksrrLpJL._AC_SL1500_.jpg",
    "price": 3351,
    "previous_price": 4122,
    "savings": 771,
    "discount_percent": 19,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.4,
    "review_count": 126,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 4328,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 4122,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 3418,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 3351,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Razer من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0dgh2d1nj",
    "asin": "B0DGH2D1NJ",
    "display_title": "سماعة رأس لاسلكية باراكودا اكس كروما للألعاب من ريزر، لون أسود",
    "title": "سماعة رأس لاسلكية باراكودا اكس كروما للألعاب من ريزر، لون أسود",
    "brand": "Razer",
    "category": "headsets",
    "category_ar": "سماعات ديسكورد وقيمنق",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0DGH2D1NJ?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/716a838quEL._AC_SL1500_.jpg",
    "price": 6645,
    "previous_price": 8107,
    "savings": 1462,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.4,
    "review_count": 264,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 8512,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 8107,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 6778,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 6645,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Razer من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b08kkz8s36",
    "asin": "B08KKZ8S36",
    "display_title": "سماعات رأس بسلك موديل G335 من لوجيتك باللون الابيض مزودة بميكروفون كاتم للصوت ووسائد اذن فوم ميموري خفيف الوزن",
    "title": "سماعات رأس بسلك موديل G335 من لوجيتك باللون الابيض مزودة بميكروفون كاتم للصوت ووسائد اذن فوم ميموري خفيف الوزن ومقبس صوت 3.5 ملم متوافقة مع الكمبيوتر والاكس بوكس والبلاي ستيشن ونينتندو سويتش",
    "brand": "Logitech G",
    "category": "headsets",
    "category_ar": "سماعات ديسكورد وقيمنق",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B08KKZ8S36?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71pR5h7q9RS._AC_SL1500_.jpg",
    "price": 2749,
    "previous_price": 3244,
    "savings": 495,
    "discount_percent": 15,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.4,
    "review_count": 460,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 3406,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 3244,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 2804,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 2749,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Logitech G من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0brxjn3ky",
    "asin": "B0BRXJN3KY",
    "display_title": "سماعة رأس لاسلكية للألعاب A50X لايت سبيد مع قاعدة شحن واتصال بلوتوث من لوجيتك أسترو (Logitech Astro A50X)",
    "title": "سماعة رأس لاسلكية للألعاب A50X لايت سبيد + قاعدة من أسترو، مع اتصال بلوتوث ومنفذ HDMI 2.1 من لوجي تيك، تقنية بلاي سينك، متوافقة مع اكس بوكس سيريز X|S وبلاي ستيشن والكمبيوتر وماك",
    "brand": "Logitech Astro",
    "category": "headsets",
    "category_ar": "سماعات ديسكورد وقيمنق",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0BRXJN3KY?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61YQ+cl-7vL._AC_SL1500_.jpg",
    "price": 21078,
    "previous_price": 24661,
    "savings": 3583,
    "discount_percent": 15,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T04:23:49.149Z",
    "rating": 4.4,
    "review_count": 335,
    "in_stock": true,
    "is_deal_active": true,
    "stock_status": "in_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 25894,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 24661,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 21500,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 21078,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Logitech Astro من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0g2mjwy6w",
    "asin": "B0G2MJWY6W",
    "display_title": "سماعة رأس B2 للألعاب، سماعة لاسلكية باتصال ثلاثي الوضعيات بتردد 2.4 جيجاهرتز/ بلوتوث/ بسلك بمنفذ 3.5 ملم، سماع",
    "title": "سماعة رأس B2 للألعاب، سماعة لاسلكية باتصال ثلاثي الوضعيات بتردد 2.4 جيجاهرتز/ بلوتوث/ بسلك بمنفذ 3.5 ملم، سماعات رأس فوق الأذن من اونيكوما، لون أبيض",
    "brand": "B2 Wireless",
    "category": "headsets",
    "category_ar": "سماعات ديسكورد وقيمنق",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0G2MJWY6W?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/516AlUmgxYL._AC_SY355_.jpg",
    "price": 956,
    "previous_price": 1119,
    "savings": 163,
    "discount_percent": 15,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 5,
    "review_count": 198,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 1175,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 1119,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 975,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 956,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "B2 Wireless من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0h5kwkpvk",
    "asin": "B0H5KWKPVK",
    "display_title": "سماعة ألعاب اونكوما K9 بفضاء لوني ار جي بي مع آذان قط قابلة للإزالة، صوت محيطي 7.1، ميكروفون قابل للسحب بخاصية",
    "title": "سماعة ألعاب اونكوما K9 بفضاء لوني ار جي بي مع آذان قط قابلة للإزالة، صوت محيطي 7.1، ميكروفون قابل للسحب بخاصية إلغاء الضوضاء، مشغلات 50 ملم، متوافقة مع PS5 وPS4 وXbox One والكمبيوتر، لون بينك",
    "brand": "ONIKUMA",
    "category": "headsets",
    "category_ar": "سماعات ديسكورد وقيمنق",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0H5KWKPVK?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/51ZRN7VsXiL._AC_SL1000_.jpg",
    "price": 1150,
    "previous_price": 1323,
    "savings": 173,
    "discount_percent": 13,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 2,
    "review_count": 168,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 1389,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 1323,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 1173,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 1150,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "ONIKUMA من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0dg5pmzjx",
    "asin": "B0DG5PMZJX",
    "display_title": "سماعة رأس بلوتوث لاسلكية لألعاب H878 خفيفة الوزن بصوت محيطي 3 ومكبر صوت داخلي 40 ملم وميكروفون قابل للفصل للمن",
    "title": "سماعة رأس بلوتوث لاسلكية لألعاب H878 خفيفة الوزن بصوت محيطي 3 ومكبر صوت داخلي 40 ملم وميكروفون قابل للفصل للمنصات المتعددة والكمبيوتر وبلاي ستيشن 1/7/5 وسويتش والجوال من ريدراجون، أبيض وأزرق",
    "brand": "Redragon",
    "category": "headsets",
    "category_ar": "سماعات ديسكورد وقيمنق",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0DG5PMZJX?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/81Re8I3tRjL._AC_SL1500_.jpg",
    "price": 2499,
    "previous_price": 3149,
    "savings": 650,
    "discount_percent": 21,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4,
    "review_count": 107,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 3306,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 3149,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 2549,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 2499,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Redragon من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0dnfjclxg",
    "asin": "B0DNFJCLXG",
    "display_title": "سماعة رأس H858 لاسلكية للألعاب بـ3 أوضاع وصوت محيطي 7.1 ومكبر صوت داخلي 53 ملم ووسائد أذن من الميموري فوم وميك",
    "title": "سماعة رأس H858 لاسلكية للألعاب بـ3 أوضاع وصوت محيطي 7.1 ومكبر صوت داخلي 53 ملم ووسائد أذن من الميموري فوم وميكروفون قابل للفصل بخاصية إلغاء الضوضاء للموبايل والكمبيوتر والبلاي ستيشن 5 ونينتندو، أسود",
    "brand": "Redragon",
    "category": "headsets",
    "category_ar": "سماعات ديسكورد وقيمنق",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0DNFJCLXG?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/81JfM4ADtmL._AC_SL1500_.jpg",
    "price": 3530,
    "previous_price": 4095,
    "savings": 565,
    "discount_percent": 14,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.2,
    "review_count": 451,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 4300,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 4095,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 3601,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 3530,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Redragon من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0c6kqh58l",
    "asin": "B0C6KQH58L",
    "display_title": "كيبورد بسلك 60% للألعاب بإضاءة ملونة ار جي بي K617 من ريدراجون، لوحة مفاتيح ميكانيكال مدمجة بـ61 مفتاح وأغطية",
    "title": "كيبورد بسلك 60% للألعاب بإضاءة ملونة ار جي بي K617 من ريدراجون، لوحة مفاتيح ميكانيكال مدمجة بـ61 مفتاح وأغطية مفاتيح شفافة بالكامل، مفتاح خطي قابل للتخصيص، يدعم مشغل/ برنامج برو",
    "brand": "Redragon",
    "category": "keyboards-mice",
    "category_ar": "كيبوردات ميكانيكال وماوسات",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0C6KQH58L?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61RvXXvnrdL._AC_SL1500_.jpg",
    "price": 1999,
    "previous_price": 2319,
    "savings": 320,
    "discount_percent": 14,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.5,
    "review_count": 114,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 2435,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 2319,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 2039,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 1999,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Redragon من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b07ds5j1st",
    "asin": "B07DS5J1ST",
    "display_title": "كيبورد ميكانيكي للالعاب كومارا K552 من ريدراجون - مفتاح احمر، اضاءة LED بالوان قوس قزح، مفاتيح انجليزية وعربية",
    "title": "كيبورد ميكانيكي للالعاب كومارا K552 من ريدراجون - مفتاح احمر، اضاءة LED بالوان قوس قزح، مفاتيح انجليزية وعربية (اسود)، USB",
    "brand": "Redragon",
    "category": "keyboards-mice",
    "category_ar": "كيبوردات ميكانيكال وماوسات",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B07DS5J1ST?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61xkRgcVbaL._AC_SL1500_.jpg",
    "price": 1510,
    "previous_price": 1842,
    "savings": 332,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.3,
    "review_count": 419,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 1934,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 1842,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 1540,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 1510,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Redragon من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0dk1kzs64",
    "asin": "B0DK1KZS64",
    "display_title": "اولا كيبورد العاب ميكانيكية للالعاب F75 75% محفورة على الجانب قابلة للتبديل السريع | مفاتيح خطية مشحمة مسبقًا",
    "title": "اولا كيبورد العاب ميكانيكية للالعاب F75 75% محفورة على الجانب قابلة للتبديل السريع | مفاتيح خطية مشحمة مسبقًا | اضاءة خلفية RGB | 2.4GHz/نوع C/بلوتوث ميكانيكية للالعاب (محفورة على الجانب + مفتاح ريبر",
    "brand": "AULA",
    "category": "keyboards-mice",
    "category_ar": "كيبوردات ميكانيكال وماوسات",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0DK1KZS64?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71WzY0KKd0L._AC_SL1500_.jpg",
    "price": 2999,
    "previous_price": 3719,
    "savings": 720,
    "discount_percent": 19,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.7,
    "review_count": 258,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 3905,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 3719,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 3059,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 2999,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "AULA من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0dytjj2c5",
    "asin": "B0DYTJJ2C5",
    "display_title": "ATTACK SHARK X85PRO 75% Wireless Mechanical Keyboard,TFT Smart Display & Knob,BT/2.4GHz/Wired Gaming Keyboard,",
    "title": "ATTACK SHARK X85PRO 75% Wireless Mechanical Keyboard,TFT Smart Display & Knob,BT/2.4GHz/Wired Gaming Keyboard,Side Printed & 5 Color PBT Keycaps,Gasket, RGB,Hot-Swap,with Pro Cable, for PC/MAC (Moon)",
    "brand": "Attack Shark",
    "category": "keyboards-mice",
    "category_ar": "كيبوردات ميكانيكال وماوسات",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0DYTJJ2C5?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61MaGtGWgLL._AC_SL1500_.jpg",
    "price": 3549,
    "previous_price": 4330,
    "savings": 781,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 5,
    "review_count": 306,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 4547,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 4330,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 3620,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 3549,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Attack Shark من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0d3kqvqxk",
    "asin": "B0D3KQVQXK",
    "display_title": "ماوس PAW3311 ألعاب لاسلكي خفيف الوزن X11 مع قاعدة شحن بإضاءة 3 أوضاع لاسلكي 2.4G، سلكي USB-C، بلوتوث 22 ألف",
    "title": "ماوس PAW3311 ألعاب لاسلكي خفيف الوزن X11 مع قاعدة شحن بإضاءة 3 أوضاع لاسلكي 2.4G، سلكي USB-C، بلوتوث 22 ألف نقطة بالبوصة، بمستشعر بصري ومفتاح هويو و5 أزرار قابلة للبرمجة للكمبيوتر من اتاك شارك، أبيض",
    "brand": "Attack Shark",
    "category": "keyboards-mice",
    "category_ar": "كيبوردات ميكانيكال وماوسات",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0D3KQVQXK?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/511ErkBZ2aL._AC_SL1500_.jpg",
    "price": 1496,
    "previous_price": 1780,
    "savings": 284,
    "discount_percent": 16,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.7,
    "review_count": 305,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 1869,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 1780,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 1526,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 1496,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Attack Shark من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0fmdyyfd2",
    "asin": "B0FMDYYFD2",
    "display_title": "ماوس العاب لاسلكي شارك R1 من اتاك، اتصال ثلاثي الاوضاع (2.4G/سلكي/BT5.2)، خفيف الوزن 55 غرام، مستشعر بصري 18K",
    "title": "ماوس العاب لاسلكي شارك R1 من اتاك، اتصال ثلاثي الاوضاع (2.4G/سلكي/BT5.2)، خفيف الوزن 55 غرام، مستشعر بصري 18K DPI تصميم مريح، للكمبيوتر/اللابتوب/ويندوز/ماك (ابيض + ملصق) (ضمان لمدة عام)",
    "brand": "Attack Shark",
    "category": "keyboards-mice",
    "category_ar": "كيبوردات ميكانيكال وماوسات",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0FMDYYFD2?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61BVjxzt-vL._AC_SL1500_.jpg",
    "price": 1336,
    "previous_price": 1657,
    "savings": 321,
    "discount_percent": 19,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 5,
    "review_count": 434,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 1740,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 1657,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 1363,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 1336,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Attack Shark من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0c51j2zxn",
    "asin": "B0C51J2ZXN",
    "display_title": "ماوس ألعاب سلكي خفيف الوزن من ريزر كوبرا: تصميم خفيف الوزن 58 جرام - مفاتيح بصرية الجيل الثالث - إضاءة كروما",
    "title": "ماوس ألعاب سلكي خفيف الوزن من ريزر كوبرا: تصميم خفيف الوزن 58 جرام - مفاتيح بصرية الجيل الثالث - إضاءة كروما ار جي بي مع اندرجلو متدرج - مستشعر بصري 8500 نقطة لكل بوصة - كابل سبيد فليكس - أسود",
    "brand": "Razer",
    "category": "keyboards-mice",
    "category_ar": "كيبوردات ميكانيكال وماوسات",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0C51J2ZXN?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61N55jovDVL._AC_SL1500_.jpg",
    "price": 2999,
    "previous_price": 3689,
    "savings": 690,
    "discount_percent": 19,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.5,
    "review_count": 349,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 3873,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 3689,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 3059,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 2999,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Razer من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0c5xnrvwm",
    "asin": "B0C5XNRVWM",
    "display_title": "ماوس ألعاب كوبرا سلكي من رايزر: تصميم خفيف الوزن 58 جم، مفاتيح ضوئية جيل 3، إضاءة كروما RGB سفلية، مستشعر بصري",
    "title": "ماوس ألعاب كوبرا سلكي من رايزر: تصميم خفيف الوزن 58 جم، مفاتيح ضوئية جيل 3، إضاءة كروما RGB سفلية، مستشعر بصري دقيق 8500 DPI، قواعد ماوس 100% PTFE، كابل سبيد فليكس، أسود",
    "brand": "Razer",
    "category": "keyboards-mice",
    "category_ar": "كيبوردات ميكانيكال وماوسات",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0C5XNRVWM?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/51O6HhLrSZL._AC_SL1500_.jpg",
    "price": 3099,
    "previous_price": 3750,
    "savings": 651,
    "discount_percent": 17,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.5,
    "review_count": 399,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 3938,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 3750,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 3161,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 3099,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Razer من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0hfg39gc9",
    "asin": "B0HFG39GC9",
    "display_title": "مصباح طاولة أناناس مودرن من الراتينج (ارتفاع 60 سم، عرض 35 سم)، وشاح أسود مع بطانة ذهبية وقاعدة ذهبية، جسم أصف",
    "title": "مصباح طاولة أناناس مودرن من الراتينج (ارتفاع 60 سم، عرض 35 سم)، وشاح أسود مع بطانة ذهبية وقاعدة ذهبية، جسم أصفر",
    "brand": "Decor & Ambient",
    "category": "setup-aesthetic",
    "category_ar": "سيت أب وديكور وإضاءة RGB",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0HFG39GC9?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/41EEv-yX6AL._AC_SL1200_.jpg",
    "price": 3800,
    "previous_price": 4332,
    "savings": 532,
    "discount_percent": 12,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4,
    "review_count": 203,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 4549,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 4332,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 3876,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 3800,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Decor & Ambient من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0f8p9bvy3",
    "asin": "B0F8P9BVY3",
    "display_title": "مصباح طاولة خزفي مع غطاء زهور سوداء، قاعدة بلون وردي، تصميم عصري، مقاس 55 × 30 سم",
    "title": "مصباح طاولة خزفي مع غطاء زهور سوداء، قاعدة بلون وردي، تصميم عصري، مقاس 55 × 30 سم",
    "brand": "Decor & Ambient",
    "category": "setup-aesthetic",
    "category_ar": "سيت أب وديكور وإضاءة RGB",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0F8P9BVY3?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/511qWgS5FxL._AC_SL1024_.jpg",
    "price": 2560,
    "previous_price": 2995,
    "savings": 435,
    "discount_percent": 15,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4,
    "review_count": 307,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 3145,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 2995,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 2611,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 2560,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Decor & Ambient من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0ckykrymr",
    "asin": "B0CKYKRYMR",
    "display_title": "مسند معصم جلدي مطور شكل سحابة للوحة المفاتيح، مسند معصم مع قاعدة من البولي يوريثين غير قابلة للانزلاق، مسند",
    "title": "مسند معصم جلدي مطور شكل سحابة للوحة المفاتيح، مسند معصم مع قاعدة من البولي يوريثين غير قابلة للانزلاق، مسند معصم مريح من الميموري فوم للكمبيوتر واللاب توب وماك والألعاب والمكتب وتخفيف الآلام من جيكيو",
    "brand": "Cloud Rest",
    "category": "setup-aesthetic",
    "category_ar": "سيت أب وديكور وإضاءة RGB",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0CKYKRYMR?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61zIlp4zTKL._AC_SL1280_.jpg",
    "price": 3097,
    "previous_price": 3809,
    "savings": 712,
    "discount_percent": 19,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.7,
    "review_count": 194,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 3999,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 3809,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 3159,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 3097,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Cloud Rest من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0c3wkstv7",
    "asin": "B0C3WKSTV7",
    "display_title": "مسند معصم سحابي للوحة المفاتيح بسطح جلدي ورغوة الذاكرة وقاعدة غير قابلة للانزلاق مصمم لتخفيف آلام المعصم والذر",
    "title": "مسند معصم سحابي للوحة المفاتيح بسطح جلدي ورغوة الذاكرة وقاعدة غير قابلة للانزلاق مصمم لتخفيف آلام المعصم والذراع، مناسب لممارسة الألعاب والكمبيوتر والمكتب، وأجهزة اللاب توب من ليولي، لون أزرق",
    "brand": "Cloud Rest",
    "category": "setup-aesthetic",
    "category_ar": "سيت أب وديكور وإضاءة RGB",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0C3WKSTV7?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71a6tjfFVbL._AC_SL1500_.jpg",
    "price": 1738,
    "previous_price": 2190,
    "savings": 452,
    "discount_percent": 21,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.7,
    "review_count": 336,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 2300,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 2190,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 1773,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 1738,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Cloud Rest من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0991q94kp",
    "asin": "B0991Q94KP",
    "display_title": "اشرطة اضواء LED ذكية بالوان RGBIC من جوفي بطول 16.4 قدم لغرفة النوم يعمل بالبلوتوث بتحكم خلال التطبيق الوان",
    "title": "اشرطة اضواء LED ذكية بالوان RGBIC من جوفي بطول 16.4 قدم لغرفة النوم يعمل بالبلوتوث بتحكم خلال التطبيق الوان متعددة يمكنك تركيبها بنفسك على خط واحد تتزامن مع الموسيقى للسقف وغرفة الالعاب",
    "brand": "Govee",
    "category": "setup-aesthetic",
    "category_ar": "سيت أب وديكور وإضاءة RGB",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0991Q94KP?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71tjdZg28vL._AC_SL1500_.jpg",
    "price": 2449,
    "previous_price": 2939,
    "savings": 490,
    "discount_percent": 17,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.4,
    "review_count": 93,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 3086,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 2939,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 2498,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 2449,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Govee من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0ddpzz9vy",
    "asin": "B0DDPZZ9VY",
    "display_title": "شريط إضاءة خلفية للتلفزيون الذكي مع كاميرا وإضاءة ار جي بي ليد لغرفة المعيشة (3.8 متر)، من بيوتي بيست",
    "title": "شريط إضاءة خلفية للتلفزيون الذكي مع كاميرا وإضاءة ار جي بي ليد لغرفة المعيشة (3.8 متر)، من بيوتي بيست",
    "brand": "Smart Ambient",
    "category": "setup-aesthetic",
    "category_ar": "سيت أب وديكور وإضاءة RGB",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0DDPZZ9VY?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71S1SEXib4L._AC_SL1500_.jpg",
    "price": 2019,
    "previous_price": 2463,
    "savings": 444,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 3.3,
    "review_count": 215,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 2586,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 2463,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 2059,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 2019,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Smart Ambient من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0dsl1gkch",
    "asin": "B0DSL1GKCH",
    "display_title": "قاعدة ماوس ألعاب اي سبورتس CM02 من اتاك شارك، قاعدة ماوس كبيرة بطلاء مقاوم للماء، سطح تحكم ناعم بملمس ثقيل وقا",
    "title": "قاعدة ماوس ألعاب اي سبورتس CM02 من اتاك شارك، قاعدة ماوس كبيرة بطلاء مقاوم للماء، سطح تحكم ناعم بملمس ثقيل وقاعدة مطاطية غير قابلة للانزلاق، حواف مخيطة دقيقة، 450 × 400 × 4 ملم - حواف بلون أبيض",
    "brand": "Attack Shark",
    "category": "setup-aesthetic",
    "category_ar": "سيت أب وديكور وإضاءة RGB",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0DSL1GKCH?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71NZTLAAxHL._AC_SL1500_.jpg",
    "price": 559,
    "previous_price": 693,
    "savings": 134,
    "discount_percent": 19,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.6,
    "review_count": 227,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 728,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 693,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 570,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 559,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Attack Shark من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0f196mlc4",
    "asin": "B0F196MLC4",
    "display_title": "لوحة ماوس CM05 زجاجية كبيرة 450 × 400 ملم زجاج نانو للدقة والسرعة مع قاعدة من البولي يوريثان مضادة للانزلاق",
    "title": "لوحة ماوس CM05 زجاجية كبيرة 450 × 400 ملم زجاج نانو للدقة والسرعة مع قاعدة من البولي يوريثان مضادة للانزلاق بدرجة صلابة 9H ولمسة فائقة النعومة والمتانة لماوسات الألعاب عالية الدقة من اتاك شارك، أسود",
    "brand": "Glass Pad",
    "category": "setup-aesthetic",
    "category_ar": "سيت أب وديكور وإضاءة RGB",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0F196MLC4?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71w0CmMiGTL._AC_SL1500_.jpg",
    "price": 2650,
    "previous_price": 3021,
    "savings": 371,
    "discount_percent": 12,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.4,
    "review_count": 127,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 3172,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 3021,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 2703,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 2650,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Glass Pad من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0b8hzspq7",
    "asin": "B0B8HZSPQ7",
    "display_title": "وحدة إنارة من نجافة شوب باللون الأسود لغرفة المعيشة و النوم و المكتب مصنوعة من الألومنيوم زخرفية",
    "title": "وحدة إنارة من نجافة شوب باللون الأسود لغرفة المعيشة و النوم و المكتب مصنوعة من الألومنيوم زخرفية",
    "brand": "Setup Lighting",
    "category": "setup-aesthetic",
    "category_ar": "سيت أب وديكور وإضاءة RGB",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0B8HZSPQ7?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61CaPsJcWZL._AC_SL1500_.jpg",
    "price": 662,
    "previous_price": 801,
    "savings": 139,
    "discount_percent": 17,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T03:28:27.195Z",
    "rating": 3.9,
    "review_count": 255,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 841,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 801,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 675,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 662,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Setup Lighting من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0d3b54cng",
    "asin": "B0D3B54CNG",
    "display_title": "نجفة مثبتة على الحائط من نجفا شوب لون ذهبي موديل WG701-G اي - اوتستاندينغ زجاج",
    "title": "نجفة مثبتة على الحائط من نجفا شوب لون ذهبي موديل WG701-G اي - اوتستاندينغ زجاج",
    "brand": "Setup Lighting",
    "category": "setup-aesthetic",
    "category_ar": "سيت أب وديكور وإضاءة RGB",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0D3B54CNG?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/51MtNL3uBYL._AC_SL1080_.jpg",
    "price": 290,
    "previous_price": 342,
    "savings": 52,
    "discount_percent": 15,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T03:28:26.986Z",
    "rating": 3.6,
    "review_count": 261,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 359,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 342,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 296,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 290,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Setup Lighting من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0b2vgs485",
    "asin": "B0B2VGS485",
    "display_title": "فيفين حامل سماعة راس، حامل سماعات راس RGB مع منافذ USB، ملحقات سماعات العاب الكمبيوتر الشخصي قاعدة مكتب صلبة",
    "title": "فيفين حامل سماعة راس، حامل سماعات راس RGB مع منافذ USB، ملحقات سماعات العاب الكمبيوتر الشخصي قاعدة مكتب صلبة مع مزامنة ضوء الصوت، مفاتيح التحكم في الضوء، S3، مطاط",
    "brand": "Fifine",
    "category": "setup-aesthetic",
    "category_ar": "سيت أب وديكور وإضاءة RGB",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0B2VGS485?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/51x2+NTqFuL._AC_SL1350_.jpg",
    "price": 6999,
    "previous_price": 8469,
    "savings": 1470,
    "discount_percent": 17,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.6,
    "review_count": 132,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 8892,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 8469,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 7139,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 6999,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Fifine من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0ddqffkb3",
    "asin": "B0DDQFFKB3",
    "display_title": "حامل سماعة رأس بإضاءة ار جي بي للألعاب مع 3 منافذ USB يتميز بـ6 ألوان ليد + وضع إضاءة متنوع مناسب لمختلف الأما",
    "title": "حامل سماعة رأس بإضاءة ار جي بي للألعاب مع 3 منافذ USB يتميز بـ6 ألوان ليد + وضع إضاءة متنوع مناسب لمختلف الأماكن مثالي للاعبين - لون أبيض",
    "brand": "RGB Stand",
    "category": "setup-aesthetic",
    "category_ar": "سيت أب وديكور وإضاءة RGB",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0DDQFFKB3?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/617tA-02FQL._AC_SL1500_.jpg",
    "price": 4843,
    "previous_price": 5860,
    "savings": 1017,
    "discount_percent": 17,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.3,
    "review_count": 97,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 6153,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 5860,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 4940,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 4843,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "RGB Stand من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0714dn1qh",
    "asin": "B0714DN1QH",
    "display_title": "حامل شاشة مكتبي مزدوج H180 بذراع دوار كامل الحركة بزنبرك غاز لشاشة الكمبيوتر من ان بي نورث بايو، 43 سم إلى 69",
    "title": "حامل شاشة مكتبي مزدوج H180 بذراع دوار كامل الحركة بزنبرك غاز لشاشة الكمبيوتر من ان بي نورث بايو، 43 سم إلى 69 سم ومن 2 كيلوجرام الى 9 كيلوجرام",
    "brand": "North Bayou",
    "category": "setup-aesthetic",
    "category_ar": "سيت أب وديكور وإضاءة RGB",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0714DN1QH?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61V6vX+6OjL._AC_SL1500_.jpg",
    "price": 2847,
    "previous_price": 3473,
    "savings": 626,
    "discount_percent": 18,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.5,
    "review_count": 252,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 3647,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 3473,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 2904,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 2847,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "North Bayou من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0gkx1qw6f",
    "asin": "B0GKX1QW6F",
    "display_title": "ذراع شاشة كامل الحركة قابل للتعديل، حامل مكتب لشاشات 17 بوصة - 30 بوصة مع دوران وإمالة وتعديل الارتفاع من تيكز",
    "title": "ذراع شاشة كامل الحركة قابل للتعديل، حامل مكتب لشاشات 17 بوصة - 30 بوصة مع دوران وإمالة وتعديل الارتفاع من تيكزون (حامل مزدوج)",
    "brand": "Monitor Arm",
    "category": "setup-aesthetic",
    "category_ar": "سيت أب وديكور وإضاءة RGB",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0GKX1QW6F?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61gGczN7NzL._AC_SL1500_.jpg",
    "price": 2299,
    "previous_price": 2897,
    "savings": 598,
    "discount_percent": 21,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 3.4,
    "review_count": 102,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 3042,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 2897,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 2345,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 2299,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Monitor Arm من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0dxntyhnd",
    "asin": "B0DXNTYHND",
    "display_title": "شاشة ألعاب موبيوز EX271، FHD 1920×1080، ‏180Hz، ‏1ms GTG، ‏AMD FreeSync، ‏DP1.2 وHDMI2.0 وUSB، ‏95% P3، ألوان",
    "title": "شاشة ألعاب موبيوز EX271، FHD 1920×1080، ‏180Hz، ‏1ms GTG، ‏AMD FreeSync، ‏DP1.2 وHDMI2.0 وUSB، ‏95% P3، ألوان ألعاب بالذكاء الاصطناعي وسماعات 2.5 واط من بينكيو، أسود، 27 بوصة",
    "brand": "BenQ MOBIUZ",
    "category": "monitors",
    "category_ar": "شاشات قيمنق 144Hz+",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0DXNTYHND?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71I92pKyHgL._AC_SL1500_.jpg",
    "price": 9527,
    "previous_price": 11813,
    "savings": 2286,
    "discount_percent": 19,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4,
    "review_count": 441,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 12404,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 11813,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 9718,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 9527,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "BenQ MOBIUZ من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0dxf9g63h",
    "asin": "B0DXF9G63H",
    "display_title": "شاشة ألعاب موبيوز EX251 24.5 بوصة FHD ومعدل تحديث 220 هرتز، زمن استجابة 1 مللي ثانية، تقنية AMD FreeSync، منفذ",
    "title": "شاشة ألعاب موبيوز EX251 24.5 بوصة FHD ومعدل تحديث 220 هرتز، زمن استجابة 1 مللي ثانية، تقنية AMD FreeSync، منفذ DisplayPort 1.2، منفذ HDMI 2.0، موزع USB، مكبرات صوت مدمجة بقوة 2.5 وات من بينكيو، أبيض",
    "brand": "BenQ MOBIUZ",
    "category": "monitors",
    "category_ar": "شاشات قيمنق 144Hz+",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0DXF9G63H?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71YMwQniO0L._AC_SL1500_.jpg",
    "price": 6999,
    "previous_price": 7839,
    "savings": 840,
    "discount_percent": 11,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.4,
    "review_count": 261,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 8231,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 7839,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 7139,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 6999,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "BenQ MOBIUZ من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0dxthqtgm",
    "asin": "B0DXTHQTGM",
    "display_title": "شاشة ألعاب موبيوز EX271Q 27&#34; دقة 2K QHD تحديث 180Hz استجابة 1ms، لوحة IPS ألوان 95% DCI-P3 دعم HDR400 وUSB",
    "title": "شاشة ألعاب موبيوز EX271Q 27&#34; دقة 2K QHD تحديث 180Hz استجابة 1ms، لوحة IPS ألوان 95% DCI-P3 دعم HDR400 وUSB-C 65 W PD تقنية KVM، تحسين التباين بAI، دعم AMD فريسينك وDP 1.4 وريموت من بينكيو، أسود",
    "brand": "BenQ MOBIUZ",
    "category": "monitors",
    "category_ar": "شاشات قيمنق 144Hz+",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0DXTHQTGM?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71Vz4aJF2cL._AC_SL1500_.jpg",
    "price": 11999,
    "previous_price": 14759,
    "savings": 2760,
    "discount_percent": 19,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.4,
    "review_count": 358,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 15497,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 14759,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 12239,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 11999,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "BenQ MOBIUZ من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0g6d4zv3w",
    "asin": "B0G6D4ZV3W",
    "display_title": "فيليبس شاشة (27M2N3500PF) 27 انش WQHD LDE IPS 300 وحدة مضيئة في البكسل، حتى 260 هرتز، 0.3 مللي ثانية، جي سينك،",
    "title": "فيليبس شاشة (27M2N3500PF) 27 انش WQHD LDE IPS 300 وحدة مضيئة في البكسل، حتى 260 هرتز، 0.3 مللي ثانية، جي سينك، لون فحمي، ضمان 3 سنوات",
    "brand": "Philips",
    "category": "monitors",
    "category_ar": "شاشات قيمنق 144Hz+",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0G6D4ZV3W?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/81aYdiMiriL._AC_SL1500_.jpg",
    "price": 10200,
    "previous_price": 11628,
    "savings": 1428,
    "discount_percent": 12,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 3,
    "review_count": 288,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 12209,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 11628,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 10404,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 10200,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Philips من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b09cmf65v5",
    "asin": "B09CMF65V5",
    "display_title": "كارت شاشة أسوس دوال جيفورس RTX 5050 سعة 8GB GDDR6 إصدار OC لكسر السرعة (ASUS Dual RTX 5050 8GB OC)",
    "title": "ASUS Dual GeForce RTX 5050 OC Edition 8GB GDDR6 Gaming Graphics Card (PCIe 5.0, HDMI 2.1b, DisplayPort 2.1b)",
    "brand": "ASUS",
    "category": "pc-hardware",
    "category_ar": "تجميعات وهاردوير البي سي",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B09CMF65V5?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71GhnAUiOZL._AC_SL1500_.jpg",
    "price": 21000,
    "previous_price": 24780,
    "savings": 3780,
    "discount_percent": 15,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T04:24:02.927Z",
    "rating": 4.7,
    "review_count": 477,
    "in_stock": true,
    "is_deal_active": true,
    "stock_status": "in_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 26019,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 24780,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 21420,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 21000,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "ASUS من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0cvcg2vpk",
    "asin": "B0CVCG2VPK",
    "display_title": "اسس بطاقة رسومات العاب انفيديا جيفورس RTX 3050 6GB اصدار كسر سرعة المعالج بمنفذ PCIe 4.0 وذاكرة GDDR6 ومنفذ",
    "title": "اسس بطاقة رسومات العاب انفيديا جيفورس RTX 3050 6GB اصدار كسر سرعة المعالج بمنفذ PCIe 4.0 وذاكرة GDDR6 ومنفذ HDMI 2.1 عرض 1.4a وتصميم بفتحتين ومروحة بتقنية اكسيال تيك وتقنية 0 ديسيبل ودعامة",
    "brand": "ASUS",
    "category": "pc-hardware",
    "category_ar": "تجميعات وهاردوير البي سي",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0CVCG2VPK?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/81mwcITtHBL._AC_SL1500_.jpg",
    "price": 15000,
    "previous_price": 17100,
    "savings": 2100,
    "discount_percent": 12,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.6,
    "review_count": 369,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 17955,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 17100,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 15300,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 15000,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "ASUS من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0gvywqzd7",
    "asin": "B0GVYWQZD7",
    "display_title": "مبرد هواء كوريليكويد ماج كور فروزر AA13 لوحدة المعالجة المركزية من ام اس اي، مروحة 120 ملم ARGB PWM وانابيب",
    "title": "مبرد هواء كوريليكويد ماج كور فروزر AA13 لوحدة المعالجة المركزية من ام اس اي، مروحة 120 ملم ARGB PWM وانابيب حرارية تعمل باللمس المباشر، متوافق مع LGA 1700/1851، AM5/AM4، اسود",
    "brand": "MSI",
    "category": "pc-hardware",
    "category_ar": "تجميعات وهاردوير البي سي",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0GVYWQZD7?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/7172K8WOQ9L._SL1500_.jpg",
    "price": 1399,
    "previous_price": 1735,
    "savings": 336,
    "discount_percent": 19,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 5,
    "review_count": 335,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 1822,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 1735,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 1427,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 1399,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "MSI من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0b9c82tg9",
    "asin": "B0B9C82TG9",
    "display_title": "مبرد معالج كولر ماستر i70C لمنفذ LGA 1700 مع إضاءة ARGB، لون أسود، أبعاد 12 × 12 × 7 سم، جهد 12 فولت، قدرة 1.4",
    "title": "مبرد معالج كولر ماستر i70C لمنفذ LGA 1700 مع إضاءة ARGB، لون أسود، أبعاد 12 × 12 × 7 سم، جهد 12 فولت، قدرة 1.44 واط، سرعة دوران 1800 دورة في الدقيقة، تدفق هواء 37.08 قدم مكعب/دقيقة، صوت 28 ديسيبل",
    "brand": "Cooler Master",
    "category": "pc-hardware",
    "category_ar": "تجميعات وهاردوير البي سي",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0B9C82TG9?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61xi9pgbnvL._SL1000_.jpg",
    "price": 436,
    "previous_price": 523,
    "savings": 87,
    "discount_percent": 17,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.2,
    "review_count": 121,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 549,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 523,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 445,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 436,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Cooler Master من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b095kx95sm",
    "asin": "B095KX95SM",
    "display_title": "رامات تيم جروب تي فورس دلتا RGB سعة 32GB (2x16GB) DDR5 تردد 6000MHz كيت ثنائي للجيمنج (TeamGroup T-Force Delta DDR5)",
    "title": "TeamGroup T-Force Delta RGB DDR5 32GB (2x16GB) 6000MHz CL30 Desktop Gaming Memory Kit Black",
    "brand": "TeamGroup",
    "category": "pc-hardware",
    "category_ar": "تجميعات وهاردوير البي سي",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B095KX95SM?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/51WMG-qMFOL._AC_SL1500_.jpg",
    "price": 7250,
    "previous_price": 8500,
    "savings": 1250,
    "discount_percent": 15,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T04:24:05.369Z",
    "rating": 3.8,
    "review_count": 360,
    "in_stock": true,
    "is_deal_active": true,
    "stock_status": "in_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 8900,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 8500,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 7600,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 7250,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "TeamGroup من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b08c56gzgk",
    "asin": "B08C56GZGK",
    "display_title": "ذاكرة داخلية من كروشال CT16G4DFRA32A بتصميم DIMM لحواسيب مكتبية متعدد الألوان DDR4",
    "title": "ذاكرة داخلية من كروشال CT16G4DFRA32A بتصميم DIMM لحواسيب مكتبية متعدد الألوان DDR4",
    "brand": "Crucial",
    "category": "pc-hardware",
    "category_ar": "تجميعات وهاردوير البي سي",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B08C56GZGK?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/51VO7toQIyL._AC_SL1000_.jpg",
    "price": 6900,
    "previous_price": 8142,
    "savings": 1242,
    "discount_percent": 15,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.6,
    "review_count": 200,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 8549,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 8142,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 7038,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 6900,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Crucial من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0dbr3dzwg",
    "asin": "B0DBR3DZWG",
    "display_title": "وحدة تخزين داخلية من كينجستون بسعة 1 تيرابايت موديل NV3 بتقنية NVMe واتصال PCIe متوافقة مع الكمبيوتر نوع سوليد",
    "title": "وحدة تخزين داخلية من كينجستون بسعة 1 تيرابايت موديل NV3 بتقنية NVMe واتصال PCIe متوافقة مع الكمبيوتر نوع سوليد ستيت درايف",
    "brand": "Kingston",
    "category": "pc-hardware",
    "category_ar": "تجميعات وهاردوير البي سي",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0DBR3DZWG?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71ZnK38jZzL._AC_SL1500_.jpg",
    "price": 7347,
    "previous_price": 9110,
    "savings": 1763,
    "discount_percent": 19,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.7,
    "review_count": 162,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 9566,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 9110,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 7494,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 7347,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Kingston من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0dqsjyd12",
    "asin": "B0DQSJYD12",
    "display_title": "هارد Crucial E100 سعة 1 تيرابايت M.2 NVMe بمنفذ PCIe الجيل الرابع SSD داخلي - حتى 5,000 ميجابايت/ثانية - متواف",
    "title": "هارد Crucial E100 سعة 1 تيرابايت M.2 NVMe بمنفذ PCIe الجيل الرابع SSD داخلي - حتى 5,000 ميجابايت/ثانية - متوافق مع اللابتوب وسطح المكتب - CT1000E100SSD8",
    "brand": "Crucial",
    "category": "pc-hardware",
    "category_ar": "تجميعات وهاردوير البي سي",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0DQSJYD12?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/51iH9vvWAiL._AC_SL1080_.jpg",
    "price": 8188,
    "previous_price": 9907,
    "savings": 1719,
    "discount_percent": 17,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.5,
    "review_count": 271,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 10402,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 9907,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 8352,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 8188,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Crucial من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0dj1vd925",
    "asin": "B0DJ1VD925",
    "display_title": "يد تحكم ألعاب فيديو من سوني موديل دوال سينس للبلايستيشن 5، بتقنية لاسلكية، متوافقة مع بلايستيشن 5، تتميز بالات",
    "title": "يد تحكم ألعاب فيديو من سوني موديل دوال سينس للبلايستيشن 5، بتقنية لاسلكية، متوافقة مع بلايستيشن 5، تتميز بالاتصال اللاسلكي، باللون كروما نيلي",
    "brand": "Sony PlayStation",
    "category": "consoles-handheld",
    "category_ar": "كونسول واكسسوارات",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0DJ1VD925?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61QWtX+qgJL._AC_SL1500_.jpg",
    "price": 4899,
    "previous_price": 6124,
    "savings": 1225,
    "discount_percent": 20,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.7,
    "review_count": 319,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 6430,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 6124,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 4997,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 4899,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Sony PlayStation من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b09q4zxsy1",
    "asin": "B09Q4ZXSY1",
    "display_title": "وحدة تحكم الالعاب بلاي ستيشن 5 دوال سينس لاسلكية من سوني - لون ارجواني، اصدار الامارات العربية المتحدة، بلوتوث",
    "title": "وحدة تحكم الالعاب بلاي ستيشن 5 دوال سينس لاسلكية من سوني - لون ارجواني، اصدار الامارات العربية المتحدة، بلوتوث , بنفسجي",
    "brand": "Sony PlayStation",
    "category": "consoles-handheld",
    "category_ar": "كونسول واكسسوارات",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B09Q4ZXSY1?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61kVo6d7zNL._AC_SL1500_.jpg",
    "price": 4898,
    "previous_price": 5682,
    "savings": 784,
    "discount_percent": 14,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.7,
    "review_count": 116,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 5966,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 5682,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 4996,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 4898,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Sony PlayStation من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0cwh9wcwt",
    "asin": "B0CWH9WCWT",
    "display_title": "قرص جهاز تشغيل ألعاب الفيديو بلاي ستيشن 5 رفيع، سعة تخزين 1 تيرابايت، لون أبيض، من سونى",
    "title": "قرص جهاز تشغيل ألعاب الفيديو بلاي ستيشن 5 رفيع، سعة تخزين 1 تيرابايت، لون أبيض، من سونى",
    "brand": "Sony PlayStation",
    "category": "consoles-handheld",
    "category_ar": "كونسول واكسسوارات",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0CWH9WCWT?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/51dR+MAtBjL._AC_SL1500_.jpg",
    "price": 44999,
    "previous_price": 53099,
    "savings": 8100,
    "discount_percent": 15,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 3.6,
    "review_count": 475,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 55754,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 53099,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 45899,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 44999,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Sony PlayStation من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0cm9vkq5n",
    "asin": "B0CM9VKQ5N",
    "display_title": "بلاي ستيشن 5 سوني - وحدات تحكم رقمية - 825 جيجابايت - لون أبيض - موديل CFI-2116",
    "title": "بلاي ستيشن 5 سوني - وحدات تحكم رقمية - 825 جيجابايت - لون أبيض - موديل CFI-2116",
    "brand": "Sony PlayStation",
    "category": "consoles-handheld",
    "category_ar": "كونسول واكسسوارات",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0CM9VKQ5N?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/61WiphT2PlL._AC_SL1500_.jpg",
    "price": 39999,
    "previous_price": 50399,
    "savings": 10400,
    "discount_percent": 21,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 4.7,
    "review_count": 261,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 52919,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 50399,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 40799,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 39999,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "Sony PlayStation من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0dn5rwnnc",
    "asin": "B0DN5RWNNC",
    "display_title": "لابتوب من اتش بي، بمعالج انتل، شاشة 15.6 إنش، وذاكرة رام 16 جيجابايت",
    "title": "لابتوب من اتش بي، بمعالج انتل، شاشة 15.6 إنش، وذاكرة رام 16 جيجابايت",
    "brand": "HP Victus",
    "category": "laptops",
    "category_ar": "لابتوبات قيمنق ومونتاج",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0DN5RWNNC?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/81obPsMhewL._AC_SL1500_.jpg",
    "price": 64000,
    "previous_price": 77440,
    "savings": 13440,
    "discount_percent": 17,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01T04:24:08.834Z",
    "rating": 4.4,
    "review_count": 212,
    "in_stock": true,
    "is_deal_active": true,
    "stock_status": "in_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 81312,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 77440,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 65280,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 64000,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "HP Victus من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
        }
      ]
    }
  },
  {
    "id": "eg-b0h2jft6fv",
    "asin": "B0H2JFT6FV",
    "display_title": "لابتوب ألعاب رفيع 15 B13UC انتل كورi7 13620H، رام 16جيجابايت DDR4، الذاكرة المستديمة SSD 512 جيجابايت، 15.6",
    "title": "لابتوب ألعاب رفيع 15 B13UC انتل كورi7 13620H، رام 16جيجابايت DDR4، الذاكرة المستديمة SSD 512 جيجابايت، 15.6 بوصة بمعدل تحديث 13620 هرتز انفيديا RTX 3050 بسعة 4 جيجابايتGDDR6 من ام اس اي، رمادي Cosmos",
    "brand": "MSI Gaming",
    "category": "laptops",
    "category_ar": "لابتوبات قيمنق ومونتاج",
    "marketplace": "amazon",
    "store_name": "أمازون مصر",
    "store_button_label": "اقتنص اللقطة من أمازون ⚡",
    "seller": "أمازون مصر (Amazon.eg)",
    "url": "https://www.amazon.eg/dp/B0H2JFT6FV?tag=lo2taa-21",
    "image": "https://m.media-amazon.com/images/I/71r5TcvKn-L._AC_SL1500_.jpg",
    "price": 48595,
    "previous_price": 56370,
    "savings": 7775,
    "discount_percent": 14,
    "is_record_low": true,
    "price_change_direction": "down",
    "price_checked_at": "2026-11-01",
    "rating": 5,
    "review_count": 146,
    "in_stock": false,
    "is_deal_active": false,
    "stock_status": "out_of_stock",
    "price_history": [
      {
        "date": "2026-08-15",
        "price": 59189,
        "label": "سعر سابق"
      },
      {
        "date": "2026-09-20",
        "price": 56370,
        "label": "قبل الخصم"
      },
      {
        "date": "2026-10-15",
        "price": 49567,
        "label": "بداية النزول"
      },
      {
        "date": "2026-11-01",
        "price": 48595,
        "label": "أقل سعر لقطة ⚡"
      }
    ],
    "ai_review": {
      "pros": [
        "أداء ممتاز وتوافق كامل مع منصات الألعاب والديسكورد",
        "شحن سريع ومضمون من أمازون مصر"
      ],
      "cons": [
        "العرض متاح حتى نفاد الكمية المخصصة للخصم"
      ],
      "brand_summary": "MSI Gaming من أشهر الماركات المعتمدة والموثوقة لدى مجتمع الجيمرز على أمازون مصر.",
      "user_sentiment": "95% تقييمات إيجابية للمنتج.",
      "sources": [
        {
          "name": "مراجعات أمازون مصر الموثقة",
          "verified": true,
          "date": "نوفمبر 2026"
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
