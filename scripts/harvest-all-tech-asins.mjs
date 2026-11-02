import fs from 'node:fs';

const targetUrls = [
  'https://yestahil.cc/brands/asus',
  'https://yestahil.cc/brands/msi',
  'https://yestahil.cc/brands/logitech',
  'https://yestahil.cc/brands/logitech-g',
  'https://yestahil.cc/brands/corsair',
  'https://yestahil.cc/brands/razer',
  'https://yestahil.cc/brands/hyperx',
  'https://yestahil.cc/brands/redragon',
  'https://yestahil.cc/brands/samsung',
  'https://yestahil.cc/brands/lg',
  'https://yestahil.cc/brands/lenovo',
  'https://yestahil.cc/brands/hp',
  'https://yestahil.cc/brands/dell',
  'https://yestahil.cc/brands/kingston',
  'https://yestahil.cc/brands/sandisk',
  'https://yestahil.cc/brands/ugreen',
  'https://yestahil.cc/brands/anker',
  'https://yestahil.cc/brands/sony',
  'https://yestahil.cc/brands/tp-link',
  'https://yestahil.cc/categories/electronics',
  'https://yestahil.cc/categories/headphones',
  'https://yestahil.cc/amazon-deals',
  'https://yestahil.cc/amazon-deals/direct'
];

async function harvest() {
  const allAsins = new Set();
  const brandProducts = [];

  for (const url of targetUrls) {
    try {
      console.log(`Fetching ${url}...`);
      const res = await fetch(url);
      const html = await res.text();
      const asins = html.match(/B0[A-Z0-9]{8}/g) || [];
      asins.forEach(a => allAsins.add(a));
      console.log(`  -> Found ${asins.length} ASINs on ${url} (Total unique so far: ${allAsins.size})`);
    } catch (err) {
      console.error(`  -> Failed ${url}:`, err.message);
    }
  }

  console.log(`\n🎉 Total unique tech ASINs collected: ${allAsins.size}`);
  fs.writeFileSync('data/harvested-asins.json', JSON.stringify([...allAsins], null, 2));
}

harvest();
