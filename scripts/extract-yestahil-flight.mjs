// scripts/extract-yestahil-flight.mjs
import fs from 'node:fs';

const html = fs.readFileSync('scripts/yestahil_product.html', 'utf8');
const scripts = [...html.matchAll(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
const target = scripts.find(s => s.includes('display_title'));

if (target) {
  const m = target.match(/\.rsc\.push\(([\s\S]*)\)$/);
  if (m) {
    const flightPayload = JSON.parse(m[1].trim());

    const jsonStart = flightPayload.indexOf('{"initial":');
    const jsonEnd = flightPayload.indexOf(',"productSummary"');
    const containerJson = flightPayload.slice(jsonStart, jsonEnd) + '}';
    const parsed = JSON.parse(containerJson);
    const initial = parsed.initial;
    const history = parsed.history || [];

    console.log('\n=============================================');
    console.log('🎯 EXACT REVERSE-ENGINEERED YESTAHIL PRODUCT');
    console.log('=============================================');
    console.log('ASIN:               ', initial.asin);
    console.log('Arabic Clean Title: ', initial.display_title);
    console.log('English Title:      ', initial.title);
    console.log('Brand:              ', initial.brand);
    console.log('Category:           ', initial.category);
    console.log('Current Price:      ', (initial.price / 100).toFixed(2), 'EGP');
    console.log('Previous Price:     ', (initial.previous_price / 100).toFixed(2), 'EGP');
    console.log('Real Discount:      ', Math.round(((initial.previous_price - initial.price) / initial.previous_price) * 100) + '%');
    console.log('Seller:             ', initial.seller);
    console.log('Availability:       ', initial.availability_status);
    console.log('Tracked Points:     ', history.length);
    console.log('\nPrice History Trail:');
    history.forEach(h => {
      console.log(`  📅 ${h.day}: ${h.price} EGP (at ${h.at})`);
    });
  }
}
