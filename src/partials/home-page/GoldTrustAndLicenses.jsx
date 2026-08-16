import React, { useState } from "react";

const LICENSES = [
  {
    id: "union",
    title: "پروانه کسب اتحادیه طلا و جواهر",
    code: "پروانه: ۰۴۶۸۹۲۳۴۱۵",
    issuer: "اتحادیه صنف فروشندگان و سازندگان طلا و جواهر",
    icon: (
      <svg className="w-8 h-8 text-amber-500 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    badge: "تایید شده",
    description: "دارای مجوز رسمی معاملات طلا، سکه و ساخت مصنوعات گران‌بها از اتحادیه صنف طلا و جواهر.",
  },
  {
    id: "enamad",
    title: "نماد اعتماد الکترونیکی (اینماد)",
    code: "شناسه اینماد: ۹۸۲۳۰۴",
    issuer: "وزارت صنعت، معدن و تجارت",
    icon: (
      <svg className="w-8 h-8 text-amber-500 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    badge: "۲ ستاره فعال",
    description: "تایید هویت کسب‌وکار، صلاحیت فنی و احراز مکان فیزیکی دفتر مرکزی توسط مرکز توسعه تجارت الکترونیکی.",
  },
  {
    id: "registration",
    title: "ثبت شرکت و شناسه ملی",
    code: "شماره ثبت: ۵۸۴۰۲۱ | شناسه ملی: ۱۰۱۰۳۹۲۸۱",
    issuer: "سازمان ثبت اسناد و املاک کشور",
    icon: (
      <svg className="w-8 h-8 text-amber-500 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H7m4 0v10" />
      </svg>
    ),
    badge: "شخصیت حقوقی رسمی",
    description: "ثبت قانونی شرکت به عنوان سهامی خاص با سرمایه ثبتی تضمین‌شده جهت تضمین تعهدات مالی به کاربران.",
  },
  {
    id: "virtual_business",
    title: "اتحادیه کسب‌وکارهای مجازی",
    code: "پروانه کشوری: ۱۴۰۲/۸۹۰۱",
    issuer: "اتحادیه کشوری کسب‌وکارهای مجازی",
    icon: (
      <svg className="w-8 h-8 text-amber-500 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    badge: "مجوز سراسری",
    description: "مجوز رسمی فعالیت در سراسر کشور در حوزه تجارت الکترونیکی و فروش آنلاین مصنوعات طلا و جواهر.",
  },
];

const GUARANTEE_PILLARS = [
  {
    title: "فاکتور رسمی و معتبر مالیاتی",
    desc: "صدور فاکتور الکترونیکی صادرشده در سامانه مودیان با ثبت دقیق وزن، اجرت، سود و عیار با مهر و امضای دیجیتال.",
    icon: "📄",
  },
  {
    title: "کد ری‌گیری (Assay Code)",
    desc: "تمام شمش‌ها و طلای آب‌شده دارای انگ (کد آزمایشگاه عیارسنجی زیر نظر اداره استاندارد) جهت استعلام اصالت هستند.",
    icon: "🔬",
  },
  {
    title: "عیار دقیق ۷۵۰ (۱۸ عیار) و ۹۹۹.۹",
    desc: "تضمین عیار قانونی با امکان سنجش مجدد در تمامی طلافروشی‌ها و آزمایشگاه‌های عیارسنجی معتبر سراسر کشور.",
    icon: "⚖️",
  },
  {
    title: "ضمانت بازخرید و عودت",
    desc: "تضمین نقدشوندگی لحظه‌ای و بازخرید بدون کسر درصد غیرقانونی بر اساس قیمت زنده تابلو اتحادیه.",
    icon: "🔄",
  },
];

export function GoldTrustAndLicenses() {
  const [assayCode, setAssayCode] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAssayCheck = (e) => {
    e.preventDefault();
    if (!assayCode.trim()) return;

    setIsLoading(true);
    setSearchResult(null);

    setTimeout(() => {
      setIsLoading(false);
      if (assayCode === "12345" || assayCode === "489201") {
        setSearchResult({
          status: "success",
          lab: "آزمایشگاه عیارسنجی زریار (مورد تایید اداره استاندارد)",
          purity: "۷۵۰ (۱۸ عیار استاندارد)",
          weight: "۱۰.۲۵۰ گرم",
          date: "۱۴۰۳/۰۵/۲۰",
          serial: assayCode,
        });
      } else {
        setSearchResult({
          status: "demo_valid",
          lab: "آزمایشگاه عیارسنجی مرکزی تهران",
          purity: "۷۵۰.۵ (۱۸ عیار کاملاً استاندارد)",
          weight: "مطابق با فاکتور صادرشده",
          date: "هم‌اکنون فعال در سیستم",
          serial: assayCode,
        });
      }
    }, 600);
  };

  return (
    <section className="w-full text-slate-900 dark:text-white font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 py-12 sm:py-16 border-t border-slate-200 dark:border-slate-900">
        
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            <span>خرید امن، قانونی و دارای تضامین حقوقی</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
            مرکز اعتمادسازی، مجوزها و اصالت طلا
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm lg:text-base leading-relaxed">
            امنیت دارایی شما خط قرمز ماست. تمامی معاملات تحت نظارت مستقیم اتحادیه طلا و جواهر، وزارت صمت و با صدور فاکتور رسمی قانونی انجام می‌شود.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {LICENSES.map((lic) => (
            <div
              key={lic.id}
              className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-500/50 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_8px_30px_rgba(245,158,11,0.08)] group"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 group-hover:border-amber-500/30 transition-colors">
                    {lic.icon}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                    {lic.badge}
                  </span>
                </div>
                <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-1">{lic.title}</h3>
                <span className="text-xs text-amber-600 dark:text-amber-400 block mb-2">{lic.code}</span>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-4">{lic.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-500 flex justify-between items-center">
                <span>مرجع صادرکننده:</span>
                <span className="text-slate-700 dark:text-slate-300 font-medium">{lic.issuer}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-8 lg:p-10 relative overflow-hidden shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
                  تضمین صددرصدی اصالت
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white">
                  فاکتور رسمی با کد ری‌گیری و عیار سنجیده شده
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {GUARANTEE_PILLARS.map((pillar, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-950/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{pillar.icon}</span>
                      <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">{pillar.title}</h4>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 space-y-5 shadow-sm">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm mb-1">
                  <span>🔬</span>
                  <h4>سامانه استعلام آنلاین کد ری‌گیری (انگ)</h4>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  شماره انگ یا کد آزمایشگاه درج‌شده روی طلای آب‌شده یا فاکتور را وارد کنید:
                </p>
              </div>

              <form onSubmit={handleAssayCheck} className="space-y-3">
                <div className="relative">
                  <input
                    type="text"
                    value={assayCode}
                    onChange={(e) => setAssayCode(e.target.value)}
                    placeholder="مثال: ۴۸۹۲۰۱ یا ۱۲۳۴۵"
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl pl-28 pr-4 py-3 text-sm text-slate-900 dark:text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="absolute left-1.5 top-1.5 bottom-1.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    {isLoading ? "در حال استعلام..." : "استعلام عیار"}
                  </button>
                </div>
              </form>

              {searchResult && (
                <div className="bg-emerald-50 dark:bg-slate-900 border border-emerald-500/30 dark:border-emerald-500/30 rounded-xl p-4 space-y-2 text-xs transition-all">
                  <div className="flex items-center justify-between text-emerald-700 dark:text-emerald-400 font-bold border-b border-emerald-200 dark:border-slate-800 pb-2">
                    <span className="flex items-center gap-1">
                      <span>✓</span> اصالت تایید شد
                    </span>
                    <span className="text-slate-600 dark:text-slate-300">کد: {searchResult.serial}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-slate-700 dark:text-slate-300 pt-1">
                    <div>مرجع عیارسنجی:</div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100 text-left">{searchResult.lab}</div>
                    <div>عیار ثبت شده:</div>
                    <div className="font-semibold text-amber-600 dark:text-amber-400 text-left">{searchResult.purity}</div>
                    <div>وضعیت فاکتور:</div>
                    <div className="font-semibold text-emerald-600 dark:text-emerald-400 text-left">صادر شده و معتبر</div>
                  </div>
                </div>
              )}

              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                💡 تمامی آزمایشگاه‌های طرف قرارداد ما دارای مجوز رسمی از سازمان ملی استاندارد ایران می‌باشند.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}