import { PriceProvider } from './types';
import { AmazonPaApiProvider } from './paapi';
import { AmazonScraperProvider } from './scraper';

export * from './types';
export { AmazonPaApiProvider } from './paapi';
export { AmazonScraperProvider } from './scraper';

const paApiInstance = new AmazonPaApiProvider();
const scraperInstance = new AmazonScraperProvider();

/**
 * Returns the active price provider based on configured environment variables.
 * Automatically prefers official PA-API when API credentials are provided;
 * otherwise gracefully falls back to the rate-limited Amazon Egypt HTTP scraper.
 */
export function getPriceProvider(): PriceProvider {
  if (paApiInstance.isAvailable) {
    return paApiInstance;
  }
  return scraperInstance;
}
