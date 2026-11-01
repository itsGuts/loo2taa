-- =========================================================================
-- LO2TAA (لقطة) - Initial Database Schema Migration
-- Designed for Supabase / PostgreSQL / Vercel Postgres
-- =========================================================================

-- 1. Products Table
CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    asin VARCHAR(20) UNIQUE NOT NULL,
    title TEXT NOT NULL,
    display_title TEXT NOT NULL,
    brand VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    category_ar VARCHAR(100) NOT NULL,
    image_url TEXT NOT NULL,
    url TEXT NOT NULL,
    seller VARCHAR(100) DEFAULT 'أمازون مصر',
    in_stock BOOLEAN DEFAULT true,
    price NUMERIC(10, 2) NOT NULL DEFAULT 0,
    list_price NUMERIC(10, 2) NOT NULL DEFAULT 0,
    is_pinned BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_products_asin ON products(asin);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_brand ON products(brand);
CREATE INDEX IF NOT EXISTS idx_products_in_stock ON products(in_stock);

-- 2. Price History Table
CREATE TABLE IF NOT EXISTS price_history (
    id BIGSERIAL PRIMARY KEY,
    product_id TEXT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    asin VARCHAR(20) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    list_price NUMERIC(10, 2) DEFAULT 0,
    seller VARCHAR(100) DEFAULT 'أمازون مصر',
    captured_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_price_history_product_id ON price_history(product_id);
CREATE INDEX IF NOT EXISTS idx_price_history_asin ON price_history(asin);
CREATE INDEX IF NOT EXISTS idx_price_history_captured_at ON price_history(captured_at DESC);

-- 3. Price Alerts Table
CREATE TABLE IF NOT EXISTS alerts (
    id BIGSERIAL PRIMARY KEY,
    product_id TEXT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    asin VARCHAR(20) NOT NULL,
    email VARCHAR(255),
    telegram_chat_id VARCHAR(100),
    target_price NUMERIC(10, 2) NOT NULL,
    active BOOLEAN DEFAULT true,
    unsubscribe_token VARCHAR(64) UNIQUE NOT NULL,
    last_notified_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_alerts_product_id_active ON alerts(product_id, active);
CREATE INDEX IF NOT EXISTS idx_alerts_unsubscribe_token ON alerts(unsubscribe_token);

-- 4. Cron & Job Logs Table
CREATE TABLE IF NOT EXISTS cron_logs (
    id BIGSERIAL PRIMARY KEY,
    job_name VARCHAR(100) NOT NULL,
    status VARCHAR(20) NOT NULL, -- 'success', 'partial', 'error'
    products_checked INTEGER DEFAULT 0,
    prices_updated INTEGER DEFAULT 0,
    alerts_triggered INTEGER DEFAULT 0,
    duration_ms INTEGER DEFAULT 0,
    error_message TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_cron_logs_created_at ON cron_logs(created_at DESC);
