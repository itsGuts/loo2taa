import fs from 'node:fs';

const products = JSON.parse(fs.readFileSync('data/products.json', 'utf8'));

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
  'Accept-Language': 'en-US,en;q=0.9',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
};

async function audit() {
  console.log(`Auditing all ${products.length} products against Amazon Egypt...\n`);

  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    console.log(`--------------------------------------------------`);
    console.log(`[${i+1}/${products.length}] ${p.id} (ASIN: ${p.asin})`);
    console.log(`  Site Title: ${p.display_title}`);
    console.log(`  Current Img: ${p.image}`);

    try {
      const res = await fetch(`https://www.amazon.eg/dp/${p.asin}?language=en_AE`, { headers });
      if (!res.ok) {
        console.log(`  ❌ Amazon HTTP ${res.status}`);
        continue;
      }
      const html = await res.text();
      const titleMatch = html.match(/<span id="productTitle"[^>]*>([^<]+)<\/span>/i);
      const amazonTitle = titleMatch ? titleMatch[1].trim() : 'NOT_FOUND';
      
      const landingMatch = html.match(/id="landingImage"[^>]*?src="([^"]+)"/i) || html.match(/src="([^"]+)"[^>]*?id="landingImage"/i);
      const slMatch = html.match(/https:\/\/m\.media-amazon\.com\/images\/I\/[A-Za-z0-9_\-\.]+?_(?:SL|AC_SL)(?:1500|1000|500|800)_[^"'\s><\\]*?\.jpg/);
      const amazonImg = slMatch ? slMatch[0] : (landingMatch ? landingMatch[1] : 'NOT_FOUND');

      console.log(`  🛒 Amazon.eg Real Title: ${amazonTitle}`);
      console.log(`  🖼️ Amazon.eg Real Img:   ${amazonImg}`);

      // Check match
      const imgMatch = p.image === amazonImg || (amazonImg !== 'NOT_FOUND' && p.image.includes(amazonImg.split('/I/')[1]?.split('.')[0]));
      console.log(`  Image Match: ${imgMatch ? '✅ MATCH' : '⚠️ DIFFERENT'}`);
    } catch (e) {
      console.log(`  ❌ Error: ${e.message}`);
    }

    await new Promise(r => setTimeout(r, 1200));
  }
}

audit();
