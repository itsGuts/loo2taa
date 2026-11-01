/**
 * LO2TAA 1-Click Deal Hunter Bookmarklet
 * 
 * Drag or save this as a browser bookmark in Chrome, Edge, or Safari (Mobile / Desktop).
 * Whenever you are browsing Amazon Egypt or Noon and find a great deal:
 * 1. Click this bookmark.
 * 2. It instantly extracts the deal, injects your affiliate tag (lo2taa-21),
 *    and opens Telegram or copies the post ready for publishing!
 * 
 * Minified Bookmarklet Code:
 * javascript:(function(){const url=window.location.href;let asin='';const m=url.match(/\/dp\/([A-Z0-9]{10})/i);if(m)asin=m[1];const title=document.getElementById('productTitle')?.innerText?.trim()||document.title;const priceEl=document.querySelector('.a-price-whole');const price=priceEl?priceEl.innerText.replace(/[\n\r,]/g,''):'';const affiliateUrl=asin?`https://www.amazon.eg/dp/${asin}?tag=lo2taa-21`:url;const text=`🔥 لقطة اليوم من LO2TAA!%0A%0A🎮 ${encodeURIComponent(title.slice(0,55))}%0A💰 السعر: ${price} ج.م%0A%0A🛒 رابط الشراء:%0A${encodeURIComponent(affiliateUrl)}`;window.open(`https://t.me/share/url?url=${encodeURIComponent(affiliateUrl)}&text=${text}`,'_blank');})();
 */

const BOOKMARKLET_CODE = `javascript:(function(){
  const url = window.location.href;
  let asin = '';
  const m = url.match(/\\/dp\\/([A-Z0-9]{10})/i);
  if (m) asin = m[1];
  const title = document.getElementById('productTitle')?.innerText?.trim() || document.title;
  const priceEl = document.querySelector('.a-price-whole');
  const price = priceEl ? priceEl.innerText.replace(/[\\n\\r,]/g, '') : '';
  const affiliateUrl = asin ? \`https://www.amazon.eg/dp/\${asin}?tag=lo2taa-21\` : url;
  const text = \`🔥 لقطة اليوم للجيمرز من LO2TAA!%0A%0A🎮 \${encodeURIComponent(title.slice(0, 60))}%0A💰 السعر: \${price} ج.م%0A%0A🛒 رابط الشراء المباشر:%0A\${encodeURIComponent(affiliateUrl)}%0A%0A🎯 تابع @lo2taa لرصد الصفقات\`;
  window.open(\`https://t.me/share/url?url=\${encodeURIComponent(affiliateUrl)}&text=\${text}\`, '_blank');
})();`;

console.log('LO2TAA Hunter Bookmarklet generated:');
console.log(BOOKMARKLET_CODE);
