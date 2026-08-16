import React, { useState } from "react";

const GOLD_ASSETS = [
  {
    id: "18k",
    name: "طلای ۱۸ عیار",
    price: "۴,۸۵۰,۰۰۰",
    unit: "تومان / گرم",
    change: "+۱.۲٪",
    isPositive: true,
    high: "۴,۸۹۰,۰۰۰",
    low: "۴,۷۹۰,۰۰۰",
    buyPrice: "۴,۸۲۰,۰۰۰",
    chartData: [45, 52, 49, 62, 58, 75, 70, 88, 82, 95],
  },
  {
    id: "melted",
    name: "طلای آب‌شده (مظنه)",
    price: "۲۱,۰۰۰,۰۰۰",
    unit: "تومان / مثقال",
    change: "+۱.۸٪",
    isPositive: true,
    high: "۲۱,۱۵۰,۰۰۰",
    low: "۲۰,۷۵۰,۰۰۰",
    buyPrice: "۲۰,۹۰۰,۰۰۰",
    chartData: [30, 40, 35, 50, 65, 60, 80, 75, 90, 100],
  },
  {
    id: "coin_emami",
    name: "سکه امامی (طرح جدید)",
    price: "۵۴,۳۰۰,۰۰۰",
    unit: "تومان",
    change: "-۰.۵٪",
    isPositive: false,
    high: "۵۴,۸۰۰,۰۰۰",
    low: "۵۴,۱۰۰,۰۰۰",
    buyPrice: "۵۳,۹۰۰,۰۰۰",
    chartData: [85, 80, 75, 82, 70, 68, 72, 65, 60, 58],
  },
  {
    id: "half_coin",
    name: "نیم سکه",
    price: "۲۸,۶۰۰,۰۰۰",
    unit: "تومان",
    change: "+۰.۴٪",
    isPositive: true,
    high: "۲۸,۸۰۰,۰۰۰",
    low: "۲۸,۴۰۰,۰۰۰",
    buyPrice: "۲۸,۳۰۰,۰۰۰",
    chartData: [40, 42, 45, 43, 50, 52, 48, 55, 58, 60],
  },
  {
    id: "quarter_coin",
    name: "ربع سکه",
    price: "۱۸,۴۰۰,۰۰۰",
    unit: "تومان",
    change: "۰.۰٪",
    isPositive: true,
    high: "۱۸,۵۰۰,۰۰۰",
    low: "۱۸,۳۰۰,۰۰۰",
    buyPrice: "۱۸,۱۵۰,۰۰۰",
    chartData: [50, 50, 52, 51, 50, 53, 52, 50, 51, 50],
  },
  {
    id: "ounce",
    name: "انس جهانی طلا",
    price: "۲,۶۸۵.۵",
    unit: "دلار / انس",
    change: "+۲.۱٪",
    isPositive: true,
    high: "۲,۶۹۲.۰",
    low: "۲,۶۶۰.۰",
    buyPrice: "--",
    chartData: [20, 35, 45, 40, 55, 70, 65, 85, 80, 92],
  },
];

const TIMEFRAMES = [
  { id: "24h", label: "۲۴ ساعت" },
  { id: "7d", label: "۷ روز" },
  { id: "1m", label: "۱ ماه" },
  { id: "1y", label: "۱ سال" },
];

export function GoldPriceChartWidget() {
  const [activeAssetId, setActiveAssetId] = useState("18k");
  const [activeTimeframe, setActiveTimeframe] = useState("24h");

  const activeAsset = GOLD_ASSETS.find((a) => a.id === activeAssetId) || GOLD_ASSETS[0];

  const generateSvgPath = (data) => {
    const width = 500;
    const height = 180;
    const stepX = width / (data.length - 1);
    const maxY = Math.max(...data);
    const minY = Math.min(...data);
    const range = maxY - minY || 1;

    const points = data.map((val, idx) => {
      const x = idx * stepX;
      const y = height - ((val - minY) / range) * (height - 30) - 15;
      return `${x},${y}`;
    });

    const pathD = `M ${points.join(" L ")}`;
    const areaD = `${pathD} L ${width},${height} L 0,${height} Z`;

    return { pathD, areaD };
  };

  const { pathD, areaD } = generateSvgPath(activeAsset.chartData);

  return (
    <section className="w-full text-[var(--color-text)] transition-colors duration-300" id="GoldPriceChartWidget">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 py-8 sm:py-12">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-5">
          <div>
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-semibold tracking-wide mb-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>به‌روزرسانی زنده قیمت‌ها</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white">
              قیمت لحظه‌ای و نمودار تحلیلی طلا و سکه
            </h2>
          </div>
          <div className="self-start sm:self-auto text-xs bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-slate-200 dark:border-slate-800">
            آخرین استعلام: <span className="text-amber-600 dark:text-amber-400 font-bold">هم‌اکنون</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {GOLD_ASSETS.map((asset) => {
            const isSelected = asset.id === activeAssetId;
            return (
              <button
                key={asset.id}
                type="button"
                onClick={() => setActiveAssetId(asset.id)}
                className={`w-full text-right rounded-xl p-4 sm:p-5 border transition-all duration-200 cursor-pointer active:scale-[0.99] focus:outline-none ${
                  isSelected
                    ? "bg-amber-500/5 dark:bg-slate-900 border-amber-500 shadow-md dark:shadow-[0_0_20px_rgba(245,158,11,0.15)] ring-1 ring-amber-500/50"
                    : "bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900/80"
                }`}
              >
                <div className="flex justify-between items-center mb-2.5">
                  <span className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">{asset.name}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-xs font-bold dir-ltr ${
                      asset.isPositive
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                        : "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20"
                    }`}
                  >
                    {asset.change}
                  </span>
                </div>

                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                    {asset.price}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{asset.unit}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] sm:text-xs border-t border-slate-100 dark:border-slate-800/80 pt-2.5 text-slate-500 dark:text-slate-400">
                  <div>
                    خرید: <span className="text-slate-800 dark:text-slate-200 font-semibold">{asset.buyPrice}</span>
                  </div>
                  <div className="text-left">
                    بازه: <span className="text-slate-800 dark:text-slate-200 font-semibold">{asset.high}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-7 bg-amber-500 rounded-full" />
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">{activeAsset.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">روند تغییرات قیمت در بازه انتخابی</p>
              </div>
            </div>

            <div className="w-full sm:w-auto overflow-x-auto hide-scrollbar">
              <div className="flex bg-slate-100 dark:bg-slate-950 p-1 rounded-xl border border-slate-200 dark:border-slate-800 min-w-max">
                {TIMEFRAMES.map((tf) => (
                  <button
                    key={tf.id}
                    type="button"
                    onClick={() => setActiveTimeframe(tf.id)}
                    className={`flex-1 sm:flex-none px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                      activeTimeframe === tf.id
                        ? "bg-amber-500 text-slate-950 shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {tf.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative h-48 sm:h-64 w-full overflow-hidden">
            <svg
              viewBox="0 0 500 180"
              preserveAspectRatio="none"
              className="w-full h-full overflow-visible"
            >
              <defs>
                <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              <line x1="0" y1="30" x2="500" y2="30" className="stroke-slate-200 dark:stroke-slate-800" strokeDasharray="4 4" strokeWidth="0.8" />
              <line x1="0" y1="90" x2="500" y2="90" className="stroke-slate-200 dark:stroke-slate-800" strokeDasharray="4 4" strokeWidth="0.8" />
              <line x1="0" y1="150" x2="500" y2="150" className="stroke-slate-200 dark:stroke-slate-800" strokeDasharray="4 4" strokeWidth="0.8" />

              <path d={areaD} fill="url(#goldGradient)" />

              <path
                d={pathD}
                fill="none"
                stroke="#f59e0b"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 text-center">
            <div className="bg-slate-50 dark:bg-slate-950/60 p-2.5 sm:p-3 rounded-xl border border-slate-100 dark:border-slate-800/80">
              <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 block mb-1">کف قیمت بازه</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">{activeAsset.low}</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-950/60 p-2.5 sm:p-3 rounded-xl border border-slate-100 dark:border-slate-800/80">
              <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 block mb-1">سقف قیمت بازه</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">{activeAsset.high}</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-950/60 p-2.5 sm:p-3 rounded-xl border border-slate-100 dark:border-slate-800/80">
              <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 block mb-1">پیشنهاد خرید</span>
              <span className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">{activeAsset.buyPrice}</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-950/60 p-2.5 sm:p-3 rounded-xl border border-slate-100 dark:border-slate-800/80">
              <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 block mb-1">پیشنهاد فروش</span>
              <span className="text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400">{activeAsset.price}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}