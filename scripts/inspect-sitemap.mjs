// scripts/inspect-sitemap.mjs
async function checkSitemap() {
  for (const path of ['/robots.txt', '/sitemap.xml', '/api/search', '/api/products']) {
    try {
      const res = await fetch('https://yestahil.cc' + path, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      console.log(`${path} -> Status: ${res.status}, Type: ${res.headers.get('content-type')}`);
      if (res.ok) {
        const text = await res.text();
        console.log(`  Length: ${text.length}, Snippet: ${text.slice(0, 300).replace(/\n/g, ' ')}`);
      }
    } catch (e) {
      console.log(`${path} -> Error: ${e.message}`);
    }
  }
}
checkSitemap();
