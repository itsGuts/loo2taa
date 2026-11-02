// scripts/extract-record-lows.mjs
async function extractRecordLows() {
  console.log('Fetching https://yestahil.cc/?sort=record-low ...');
  const res = await fetch('https://yestahil.cc/?sort=record-low', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  });

  const html = await res.text();

  // Find all product links
  const links = [...html.matchAll(/\/products\/([A-Z0-9]{10})/g)].map(m => m[1]);
  const uniqueAsins = [...new Set(links)];
  console.log(`Found ${uniqueAsins.length} record-low ASINs on Yestahil:`, uniqueAsins);

  // Inspect the first 3 products
  for (const asin of uniqueAsins.slice(0, 3)) {
    console.log(`\n--- Fetching Product ${asin} ---`);
    const pRes = await fetch(`https://yestahil.cc/products/${asin}`, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const pHtml = await pRes.text();

    // Look for the initial JSON block
    const m = pHtml.match(/"initial":\s*(\{[\s\S]*?"price_activity":[\s\S]*?\})/);
    if (m) {
      try {
        const initial = JSON.parse(m[1]);
        console.log('ASIN:', initial.asin);
        console.log('Display Title (AR):', initial.display_title);
        console.log('Title (EN):', initial.title);
        console.log('Brand:', initial.brand);
        console.log('Category:', initial.category);
        console.log('Price:', initial.price / 100, 'EGP');
        console.log('Seller:', initial.seller);
        console.log('Samples in history:', initial.price_activity?.samples);
      } catch (err) {
        console.log('Parse error:', err.message);
      }
    }
  }
}

extractRecordLows().catch(console.error);
