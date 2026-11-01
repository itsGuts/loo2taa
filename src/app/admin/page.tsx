"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Lock,
  RefreshCw,
  Plus,
  Trash2,
  Star,
  ExternalLink,
  Clock,
  AlertCircle,
  CheckCircle2,
  Database,
  Bell,
  Search,
  Zap,
  TrendingDown
} from "lucide-react";

interface AdminStats {
  totalProducts: number;
  realDealsCount: number;
  recordLowCount: number;
  activeAlertsCount: number;
  lastRefresh: string | null;
}

interface CronLog {
  id: string;
  source: string;
  products_checked: number;
  price_drops_detected: number;
  alerts_dispatched: number;
  duration_ms: number;
  status: string;
  created_at: string;
}

interface AdminProduct {
  id: string;
  asin: string;
  title: string;
  brand: string;
  category: string;
  price: number;
  reference_price: number;
  discount_percent: number;
  verdict: string;
  is_pinned: boolean;
  image_url: string;
  updated_at: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(false);

  // Dashboard Data
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [cronLogs, setCronLogs] = useState<CronLog[]>([]);
  const [products, setProducts] = useState<AdminProduct[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Add Product Form
  const [newUrlOrAsin, setNewUrlOrAsin] = useState("");
  const [addLoading, setAddLoading] = useState(false);
  const [addMessage, setAddMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Refresh Trigger
  const [refreshLoading, setRefreshLoading] = useState(false);
  const [refreshResult, setRefreshResult] = useState<string | null>(null);

  const loadDashboard = useCallback(async (token: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setIsAuthenticated(true);
        setStats(data.stats);
        setCronLogs(data.cronLogs || []);
        setProducts(data.products || []);
      } else {
        setIsAuthenticated(false);
        sessionStorage.removeItem("lo2taa_admin_secret");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Check saved session on mount
  useEffect(() => {
    const saved = typeof window !== "undefined" ? sessionStorage.getItem("lo2taa_admin_secret") : null;
    if (saved) {
      setPassword(saved);
      loadDashboard(saved);
    }
  }, [loadDashboard]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "verify_password", password }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        setAuthError(data.error || "كلمة المرور غير صحيحة");
        setLoading(false);
        return;
      }

      sessionStorage.setItem("lo2taa_admin_secret", password);
      setIsAuthenticated(true);
      await loadDashboard(password);
    } catch {
      setAuthError("حدث خطأ أثناء التحقق من الصلاحيات");
    } finally {
      setLoading(false);
    }
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUrlOrAsin.trim()) return;
    setAddLoading(true);
    setAddMessage(null);

    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify({
          action: "add_product",
          urlOrAsin: newUrlOrAsin.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "فشل إضافة المنتج");
      }

      setAddMessage({
        type: "success",
        text: `تمت إضافة المنتج بنجاح وتفعيل الرصد التلقائي: ${data.product.display_title || data.product.title}`,
      });
      setNewUrlOrAsin("");
      loadDashboard(password);
    } catch (err: any) {
      setAddMessage({ type: "error", text: err.message || "فشلت العملية" });
    } finally {
      setAddLoading(false);
    }
  };

  const handleTriggerRefresh = async () => {
    setRefreshLoading(true);
    setRefreshResult(null);

    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify({ action: "trigger_refresh" }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "فشل التحديث");

      setRefreshResult(
        `اكتمل التحديث بنجاح! تم فحص ${data.result.products_checked} منتج، رُصد ${data.result.price_drops_detected} هبوط سعر، وأُرسل ${data.result.alerts_dispatched} تنبيه.`
      );
      loadDashboard(password);
    } catch (err: any) {
      setRefreshResult(`خطأ: ${err.message}`);
    } finally {
      setRefreshLoading(false);
    }
  };

  const handleTogglePin = async (productId: string) => {
    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify({ action: "toggle_pin", productId }),
      });

      if (res.ok) {
        const data = await res.json();
        setProducts((prev) =>
          prev.map((p) => (p.id === productId ? { ...p, is_pinned: data.is_pinned } : p))
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteProduct = async (productId: string, title: string) => {
    if (!confirm(`هل أنت متأكد من حذف المنتج: "${title}" من الرادار؟`)) return;

    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify({ action: "delete_product", productId }),
      });

      if (res.ok) {
        setProducts((prev) => prev.filter((p) => p.id !== productId));
        if (stats) setStats({ ...stats, totalProducts: stats.totalProducts - 1 });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredProducts = products.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.asin.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 1. Password Entry Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4" dir="rtl">
        <div className="w-full max-w-md bg-[#0c1222] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[#00f0ff] via-[#00ff9d] to-[#ff007f]" />

          <div className="flex flex-col items-center text-center space-y-3 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff]">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="text-xl font-black text-white">لوحة تحكم رادار LO2TAA</h1>
            <p className="text-xs text-gray-400">
              أدخل كلمة مرور الإدارة للوصول إلى جداول الأسعار، سجلات التحديث والمهام المجدولة.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-2">كلمة مرور المشرف (ADMIN_PASSWORD)</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="أدخل كلمة المرور..."
                className="w-full bg-[#070a12] border border-white/10 focus:border-[#00f0ff] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors"
                required
              />
            </div>

            {authError && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-cyber-primary w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>جارٍ التحقق...</span>
                </>
              ) : (
                <span>دخول لوحة التحكم ↗</span>
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 2. Main Admin Dashboard
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8" dir="rtl">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-[#00ff9d] animate-pulse" />
            <h1 className="text-2xl font-black text-white">لوحة إدارة رادار الصفقات (LO2TAA Admin)</h1>
          </div>
          <p className="text-xs text-gray-400">
            مراقبة التحديث التلقائي للأسعار، إدارة المنتجات المرصودة، وفحص سجلات المهام المجدولة (Vercel Cron).
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleTriggerRefresh}
            disabled={refreshLoading}
            className="px-4 py-2.5 rounded-xl bg-[#00ff9d]/15 hover:bg-[#00ff9d]/25 border border-[#00ff9d]/30 text-[#00ff9d] text-xs font-bold transition-all flex items-center gap-2 shadow-sm"
          >
            <RefreshCw className={`w-4 h-4 ${refreshLoading ? "animate-spin" : ""}`} />
            <span>تشغيل فحص الأسعار فوراً ⚡</span>
          </button>

          <button
            onClick={() => {
              sessionStorage.removeItem("lo2taa_admin_secret");
              setIsAuthenticated(false);
            }}
            className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-xs font-bold transition-colors"
          >
            تسجيل الخروج
          </button>
        </div>
      </div>

      {/* Real-time Refresh Status Notice */}
      {refreshResult && (
        <div className="p-4 rounded-2xl bg-[#00ff9d]/10 border border-[#00ff9d]/30 text-[#00ff9d] text-xs font-bold flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>{refreshResult}</span>
        </div>
      )}

      {/* KPI Stats Grid */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#0c1222] border border-white/5 rounded-2xl p-4 sm:p-5">
            <div className="flex items-center justify-between text-gray-400 mb-2">
              <span className="text-xs font-bold">المنتجات المتابعة</span>
              <Database className="w-4 h-4 text-[#00f0ff]" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">{stats.totalProducts}</div>
            <span className="text-[11px] text-gray-400">منتج نشط في قاعدة البيانات</span>
          </div>

          <div className="bg-[#0c1222] border border-white/5 rounded-2xl p-4 sm:p-5">
            <div className="flex items-center justify-between text-gray-400 mb-2">
              <span className="text-xs font-bold">الصفقات الحقيقية</span>
              <Zap className="w-4 h-4 text-[#00ff9d]" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-[#00ff9d]">{stats.realDealsCount}</div>
            <span className="text-[11px] text-gray-400">سعرها أقل من وسيط 90 يوم</span>
          </div>

          <div className="bg-[#0c1222] border border-white/5 rounded-2xl p-4 sm:p-5">
            <div className="flex items-center justify-between text-gray-400 mb-2">
              <span className="text-xs font-bold">أدنى سعر قياسي</span>
              <TrendingDown className="w-4 h-4 text-[#ff007f]" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-[#ff007f]">{stats.recordLowCount}</div>
            <span className="text-[11px] text-gray-400">عند أو أقل من أدنى سعر تاريخي</span>
          </div>

          <div className="bg-[#0c1222] border border-white/5 rounded-2xl p-4 sm:p-5">
            <div className="flex items-center justify-between text-gray-400 mb-2">
              <span className="text-xs font-bold">تنبيهات الأسعار</span>
              <Bell className="w-4 h-4 text-[#ffd600]" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-[#ffd600]">{stats.activeAlertsCount}</div>
            <span className="text-[11px] text-gray-400">اشتراك نشط ينتظر الهبوط</span>
          </div>
        </div>
      )}

      {/* Add New Product Form */}
      <div className="bg-[#0c1222] border border-white/5 rounded-3xl p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Plus className="w-5 h-5 text-[#00f0ff]" />
          <h2 className="text-base font-black text-white">إضافة منتج أو رابط جديد للرادار الفوري</h2>
        </div>
        <p className="text-xs text-gray-400">
          ألصق رابط المنتج على أمازون مصر (Amazon.eg) أو كود ASIN مباشرة لجلب تفاصيله فورياً وبدء تتبع سجل أسعاره تلقائياً.
        </p>

        <form onSubmit={handleAddProduct} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={newUrlOrAsin}
            onChange={(e) => setNewUrlOrAsin(e.target.value)}
            placeholder="مثال: https://www.amazon.eg/dp/B09CMF65V5 أو B09CMF65V5"
            className="flex-1 bg-[#070a12] border border-white/10 focus:border-[#00f0ff] rounded-2xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 outline-none transition-colors"
            required
          />
          <button
            type="submit"
            disabled={addLoading}
            className="btn-cyber-primary py-3 px-6 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 shrink-0 shadow-md"
          >
            {addLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
            <span>إضافة وتتبع الآن</span>
          </button>
        </form>

        {addMessage && (
          <div
            className={`p-3 rounded-xl text-xs font-bold flex items-center gap-2 ${
              addMessage.type === "success"
                ? "bg-[#00ff9d]/10 border border-[#00ff9d]/30 text-[#00ff9d]"
                : "bg-red-500/10 border border-red-500/30 text-red-400"
            }`}
          >
            {addMessage.type === "success" ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
            <span>{addMessage.text}</span>
          </div>
        )}
      </div>

      {/* Cron Activity Logs Section */}
      <div className="bg-[#0c1222] border border-white/5 rounded-3xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#ffd600]" />
            <h2 className="text-base font-black text-white">سجلات الفحص المجدول (Vercel Cron Logs)</h2>
          </div>
          <span className="text-xs text-gray-400 font-mono">آخر 15 عملية فحص</span>
        </div>

        {cronLogs.length === 0 ? (
          <p className="text-xs text-gray-500 py-4 text-center">لا توجد سجلات فحص مسجلة حتى الآن.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs">
              <thead>
                <tr className="border-b border-white/10 text-gray-400 font-bold">
                  <th className="py-2.5 px-3">التوقيت</th>
                  <th className="py-2.5 px-3">المصدر</th>
                  <th className="py-2.5 px-3">المنتجات المفحوصة</th>
                  <th className="py-2.5 px-3">هبوطات مرصودة</th>
                  <th className="py-2.5 px-3">إشعارات مُرسلة</th>
                  <th className="py-2.5 px-3">المدة</th>
                  <th className="py-2.5 px-3">الحالة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {cronLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-white/[0.02]">
                    <td className="py-2.5 px-3 text-gray-300 font-mono text-[11px]">
                      {new Date(log.created_at).toLocaleString("ar-EG")}
                    </td>
                    <td className="py-2.5 px-3 font-semibold text-gray-400">{log.source}</td>
                    <td className="py-2.5 px-3 font-bold text-white">{log.products_checked}</td>
                    <td className="py-2.5 px-3 font-bold text-[#00ff9d]">{log.price_drops_detected}</td>
                    <td className="py-2.5 px-3 font-bold text-[#ffd600]">{log.alerts_dispatched}</td>
                    <td className="py-2.5 px-3 text-gray-400 font-mono">{log.duration_ms}ms</td>
                    <td className="py-2.5 px-3">
                      <span className="px-2 py-0.5 rounded-md bg-[#00ff9d]/10 text-[#00ff9d] font-bold text-[10px]">
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Tracked Products Management */}
      <div className="bg-[#0c1222] border border-white/5 rounded-3xl p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-[#00f0ff]" />
            <h2 className="text-base font-black text-white">إدارة المنتجات المرصودة ({products.length})</h2>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute right-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث بالاسم، الماركة أو ASIN..."
              className="w-full bg-[#070a12] border border-white/10 focus:border-[#00f0ff] rounded-xl pr-9 pl-3 py-2 text-xs text-white placeholder-gray-500 outline-none"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead>
              <tr className="border-b border-white/10 text-gray-400 font-bold">
                <th className="py-3 px-3">المنتج</th>
                <th className="py-3 px-3">ASIN</th>
                <th className="py-3 px-3">السعر الحالي</th>
                <th className="py-3 px-3">السعر المرجعي</th>
                <th className="py-3 px-3">الخصم</th>
                <th className="py-3 px-3">التقييم</th>
                <th className="py-3 px-3 text-center">إجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredProducts.map((p) => (
                <tr key={p.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#070a12] border border-white/10 p-1 flex items-center justify-center shrink-0">
                        {p.image_url ? (
                          <img src={p.image_url} alt={p.title} className="max-h-full max-w-full object-contain" />
                        ) : (
                          <Zap className="w-4 h-4 text-[#00f0ff]" />
                        )}
                      </div>
                      <div className="min-w-0 max-w-xs">
                        <span className="font-bold text-white block truncate">{p.title}</span>
                        <span className="text-[10px] text-gray-400">{p.brand} • {p.category}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-3 font-mono text-[11px] text-gray-400">{p.asin}</td>
                  <td className="py-3 px-3 font-black text-white">{p.price.toLocaleString("ar-EG")} ج.م</td>
                  <td className="py-3 px-3 text-gray-400 line-through">{p.reference_price.toLocaleString("ar-EG")} ج.م</td>
                  <td className="py-3 px-3 font-bold text-[#00ff9d]">
                    {p.discount_percent > 0 ? `${p.discount_percent}%-` : "—"}
                  </td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/5 text-gray-300 border border-white/10">
                      {p.verdict}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <div className="flex items-center justify-center gap-1.5">
                      <button
                        onClick={() => handleTogglePin(p.id)}
                        className={`p-1.5 rounded-lg border transition-colors ${
                          p.is_pinned
                            ? "bg-[#ffd600]/20 border-[#ffd600] text-[#ffd600]"
                            : "border-white/10 text-gray-500 hover:text-[#ffd600]"
                        }`}
                        title={p.is_pinned ? "مثبت في المقدمة" : "تثبيت كصفقة مميزة"}
                      >
                        <Star className={`w-3.5 h-3.5 ${p.is_pinned ? "fill-current" : ""}`} />
                      </button>

                      <Link
                        href={`/p/${p.asin}`}
                        target="_blank"
                        className="p-1.5 rounded-lg border border-white/10 text-gray-400 hover:text-[#00f0ff] transition-colors"
                        title="فتح صفحة المنتج والمنحنى"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>

                      <button
                        onClick={() => handleDeleteProduct(p.id, p.title)}
                        className="p-1.5 rounded-lg border border-white/10 text-gray-500 hover:text-red-400 hover:border-red-400/40 transition-colors"
                        title="حذف من الرادار"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
