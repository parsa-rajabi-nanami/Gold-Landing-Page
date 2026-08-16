import React, { useState } from "react";

export function GoldSmartCalculators() {
  const [activeTab, setActiveTab] = useState("transparency");

  const [weight, setWeight] = useState(5.0);
  const [goldPricePerGram, setGoldPricePerGram] = useState(4850000);
  const [wagePercent, setWagePercent] = useState(12);
  const [profitPercent, setProfitPercent] = useState(7);
  const [taxPercent, setTaxPercent] = useState(9);

  const rawGoldCost = weight * goldPricePerGram;
  const wageAmount = rawGoldCost * (wagePercent / 100);
  const profitAmount = (rawGoldCost + wageAmount) * (profitPercent / 100);
  const taxAmount = (wageAmount + profitAmount) * (taxPercent / 100);
  const totalPayable = rawGoldCost + wageAmount + profitAmount + taxAmount;

  const rawShare = totalPayable > 0 ? ((rawGoldCost / totalPayable) * 100).toFixed(1) : "0";
  const wageShare = totalPayable > 0 ? ((wageAmount / totalPayable) * 100).toFixed(1) : "0";
  const profitShare = totalPayable > 0 ? ((profitAmount / totalPayable) * 100).toFixed(1) : "0";
  const taxShare = totalPayable > 0 ? ((taxAmount / totalPayable) * 100).toFixed(1) : "0";

  const [initialCapital, setInitialCapital] = useState(50000000);
  const [years, setYears] = useState(3);
  const [expectedAnnualGrowth, setExpectedAnnualGrowth] = useState(35);

  const futureValue = initialCapital * Math.pow(1 + expectedAnnualGrowth / 100, years);
  const netProfit = futureValue - initialCapital;
  const initialGoldGrams = goldPricePerGram > 0 ? (initialCapital / goldPricePerGram).toFixed(2) : "0";

  const formatToman = (num) => Math.round(num || 0).toLocaleString("fa-IR");

  return (
    <section className="w-full text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 py-8 sm:py-12 border-t border-slate-200 dark:border-slate-900">
        
        <div className="text-center space-y-3 sm:space-y-4">
          <span className="inline-block text-amber-600 dark:text-amber-400 text-xs font-semibold tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
            ابزارهای محاسباتی هوشمند
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
            محاسبه شفاف هزینه‌ها و پیش‌بینی سود
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            بدون هزینه‌های پنهان؛ جزئیات دقیق ساخت، سود فروشنده و مالیات را بررسی کنید یا بازدهی دارایی خود را بسنجید.
          </p>

          <div className="inline-flex bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 mt-2 max-w-full overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab("transparency")}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === "transparency"
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/10"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              ⚖️ محاسبه‌گر اجرت و فاکتور دقیق
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("investment")}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === "investment"
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/10"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              📈 پیش‌بینی سود سرمایه‌گذاری
            </button>
          </div>
        </div>

        {activeTab === "transparency" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-5 sm:space-y-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-amber-600 dark:text-amber-400 border-b border-slate-100 dark:border-slate-800 pb-3">
                اطلاعات خرید طلا
              </h3>

              <div>
                <div className="flex justify-between text-xs sm:text-sm mb-2">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">وزن طلا:</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold">{weight} گرم</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="100"
                  step="0.5"
                  value={weight}
                  onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
                  className="w-full accent-amber-500 cursor-pointer bg-slate-200 dark:bg-slate-800 h-2 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-2">
                  قیمت روز هر گرم طلای ۱۸ عیار (تومان):
                </label>
                <input
                  type="number"
                  value={goldPricePerGram}
                  onChange={(e) => setGoldPricePerGram(Number(e.target.value) || 0)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-slate-900 dark:text-slate-100 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs sm:text-sm mb-2">
                  <span className="text-slate-700 dark:text-slate-300">درصد اجرت ساخت:</span>
                  <span className="text-slate-900 dark:text-slate-100 font-bold">{wagePercent}٪</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="30"
                  step="1"
                  value={wagePercent}
                  onChange={(e) => setWagePercent(Number(e.target.value) || 0)}
                  className="w-full accent-amber-500 cursor-pointer bg-slate-200 dark:bg-slate-800 h-2 rounded-lg"
                />
                <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block leading-relaxed">
                  (طلاهای بدون اجرت: ۰٪ | النگو و مدال: ۵٪ تا ۱۲٪ | سرویس‌های خاص: بالای ۱۵٪)
                </span>
              </div>

              <div>
                <div className="flex justify-between text-xs sm:text-sm mb-2">
                  <span className="text-slate-700 dark:text-slate-300">سود فروشنده (طبق قانون اتحادیه):</span>
                  <span className="text-slate-900 dark:text-slate-100 font-bold">{profitPercent}٪</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="7"
                  step="1"
                  value={profitPercent}
                  onChange={(e) => setProfitPercent(Number(e.target.value) || 0)}
                  className="w-full accent-amber-500 cursor-pointer bg-slate-200 dark:bg-slate-800 h-2 rounded-lg"
                />
              </div>
            </div>

            <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-5 sm:space-y-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
                <span>پیش‌نمایش فاکتور رسمی</span>
                <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-950 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-800">
                  قانون جدید مالیات
                </span>
              </h3>

              <div className="space-y-1.5">
                <div className="flex text-xs justify-between text-slate-500 dark:text-slate-400 mb-1">
                  <span>ترکیب قیمت نهایی</span>
                  <span>۱۰۰٪</span>
                </div>
                <div className="h-3 w-full bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden flex">
                  <div style={{ width: `${rawShare}%` }} className="bg-amber-500 h-full" title="اصل طلا" />
                  <div style={{ width: `${wageShare}%` }} className="bg-sky-500 h-full" title="اجرت ساخت" />
                  <div style={{ width: `${profitShare}%` }} className="bg-emerald-500 h-full" title="سود فروشنده" />
                  <div style={{ width: `${taxShare}%` }} className="bg-rose-500 h-full" title="مالیات" />
                </div>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm pt-1">
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">قیمت اصل طلا ({weight} گرم):</span>
                  </div>
                  <span className="font-bold text-slate-900 dark:text-slate-100">{formatToman(rawGoldCost)} تومان</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">اجرت ساخت ({wagePercent}٪):</span>
                  </div>
                  <span className="font-bold text-sky-600 dark:text-sky-400">{formatToman(wageAmount)} تومان</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">سود فروشنده ({profitPercent}٪):</span>
                  </div>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">{formatToman(profitAmount)} تومان</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">مالیات ارزش افزوده (۹٪ از اجرت و سود):</span>
                  </div>
                  <span className="font-bold text-rose-600 dark:text-rose-400">{formatToman(taxAmount)} تومان</span>
                </div>
              </div>

              <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl flex justify-between items-center mt-4">
                <span className="text-xs sm:text-sm font-bold text-amber-700 dark:text-amber-300">مبلغ قابل پرداخت:</span>
                <div className="text-left">
                  <span className="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400">
                    {formatToman(totalPayable)}
                  </span>
                  <span className="text-xs text-amber-700 dark:text-amber-400/80 mr-1">تومان</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {activeTab === "investment" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-5 sm:space-y-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-amber-600 dark:text-amber-400 border-b border-slate-100 dark:border-slate-800 pb-3">
                پارامترهای سرمایه‌گذاری
              </h3>

              <div>
                <label className="block text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-2">
                  مبلغ سرمایه‌گذاری اولیه (تومان):
                </label>
                <input
                  type="number"
                  step="5000000"
                  value={initialCapital}
                  onChange={(e) => setInitialCapital(Number(e.target.value) || 0)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-slate-900 dark:text-slate-100 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-colors"
                />
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2.5">
                  {[10000000, 50000000, 100000000, 500000000].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setInitialCapital(val)}
                      className="text-[11px] bg-slate-100 dark:bg-slate-950 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                    >
                      {val / 1000000} میلیون
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs sm:text-sm mb-2">
                  <span className="text-slate-700 dark:text-slate-300">مدت زمان ماندگاری دارایی:</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold">{years} سال</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value) || 1)}
                  className="w-full accent-amber-500 cursor-pointer bg-slate-200 dark:bg-slate-800 h-2 rounded-lg"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs sm:text-sm mb-2">
                  <span className="text-slate-700 dark:text-slate-300">نرخ پیش‌بینی رشد سالانه طلا:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">{expectedAnnualGrowth}٪</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="80"
                  step="5"
                  value={expectedAnnualGrowth}
                  onChange={(e) => setExpectedAnnualGrowth(Number(e.target.value) || 0)}
                  className="w-full accent-emerald-500 cursor-pointer bg-slate-200 dark:bg-slate-800 h-2 rounded-lg"
                />
                <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block leading-relaxed">
                  (بر اساس میانگین تورم و بازدهی تاریخی طلا در سنوات گذشته)
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-5 sm:space-y-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                خروجی تخمینی سرمایه‌گذاری
              </h3>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-slate-50 dark:bg-slate-950 p-3.5 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 block mb-1">طلا خریداری شده در روز اول</span>
                  <span className="text-base sm:text-lg font-bold text-amber-600 dark:text-amber-400">
                    {initialGoldGrams} گرم
                  </span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-950 p-3.5 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 block mb-1">مدت زمان</span>
                  <span className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-200">{years} سال شمسی</span>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3.5">
                <div className="flex justify-between items-center text-xs sm:text-sm border-b border-slate-200 dark:border-slate-800/80 pb-3">
                  <span className="text-slate-600 dark:text-slate-400">اصل سرمایه اولیه:</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">{formatToman(initialCapital)} تومان</span>
                </div>

                <div className="flex justify-between items-center text-xs sm:text-sm border-b border-slate-200 dark:border-slate-800/80 pb-3">
                  <span className="text-slate-600 dark:text-slate-400">سود خالص پیش‌بینی‌شده:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                    +{formatToman(netProfit)} تومان
                  </span>
                </div>

                <div className="pt-1">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">ارزش کل دارایی پس از {years} سال:</span>
                  <div className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400">
                    {formatToman(futureValue)}
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-normal mr-2">تومان</span>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-950/40 p-3 rounded-xl border border-slate-200 dark:border-slate-800/40">
                💡 نکته: این محاسبه‌گر بر اساس مدل سود مرکب سالانه طراحی شده است. تغییرات بازار جهانی و تورم داخلی می‌تواند بازدهی واقعی را تغییر دهد.
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}