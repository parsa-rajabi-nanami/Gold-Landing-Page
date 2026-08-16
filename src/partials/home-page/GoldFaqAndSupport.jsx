import React, { useState } from "react";

const FAQ_CATEGORIES = [
  { id: "all", label: "همه سوالات" },
  { id: "kyc", label: "احراز هویت (KYC)" },
  { id: "limits", label: "سقف معاملات" },
  { id: "payout", label: "تسویه و واریز" },
  { id: "security", label: "اصالت و امنیت" },
];

const FAQS = [
  {
    id: 1,
    category: "kyc",
    question: "فرآیند احراز هویت (KYC) به چه صورت است و چقدر زمان می‌برد؟",
    answer:
      "احراز هویت طبق قوانین پلیس فتا و بانک مرکزی کاملاً هوشمند و هویت‌سنجی در کمتر از ۵ دقیقه انجام می‌شود. کافی است شماره موبایل (به نام خودتان)، کد ملی و شماره کارت بانکی را وارد کنید. استعلام هویتی به‌صورت آنی انجام شده و حساب شما بلافاصله فعال می‌گردد.",
  },
  {
    id: 2,
    category: "limits",
    question: "سقف خرید و فروش روزانه طلا چقدر است؟",
    answer:
      "طبق قوانین درگاه‌های پرداخت درگاه بانکی، سقف خرید با هر کارت درگاه پرداخت اینترنتی روزانه ۲۵ تا ۵۰ میلیون تومان است. برای خریدهای با مبالغ بالاتر، می‌توانید از روش واریز به حساب (پایا / ساتنا) یا شناسه واریز اختصاصی بدون سقف محدودیت استفاده کنید. سقف فروش طلا به مجموعه نیز نامحدود است.",
  },
  {
    id: 3,
    category: "payout",
    question: "تسویه حساب ریالی و واریز به حساب بانکی چقدر زمان می‌برد؟",
    answer:
      "درخواست‌های برداشت ریالی پس از ثبت، در اولین سیکل پایا یا ساتنا بانک مرکزی (حداکثر ۲ تا ۶ ساعت کاری) به حساب شبا ثبت‌شده به نام کاربر واریز می‌شود. برای خریدهای طلای آنلاین نیز معادل طلایی دارایی بلافاصله در کیف پول شما بنشیند.",
  },
  {
    id: 4,
    category: "security",
    question: "چگونه از اصالت طلای خریداری‌شده یا تحویلی مطمئن شوم؟",
    answer:
      "تمامی طلای ارائه شده (آب‌شده، شمش یا سکه) دارای کد ری‌گیری (انگ) معتبر از آزمایشگاه‌های عیارسنجی زیر نظر اداره استاندارد است. هنگام تحویل فیزیکی، فاکتور رسمی صادرشده در سامانه مودیان به همراه مهر و کد رهگیری تحویل داده می‌شود که در تمامی طلافروشی‌های سراسر کشور قابل سنجش و استعلام است.",
  },
  {
    id: 5,
    category: "security",
    question: "آیا امکان تحویل فیزیکی طلا وجود دارد؟ شرایط آن چیست؟",
    answer:
      "بله! هر زمان که دارایی طلایی شما در کیف پول به حد نصاب تحویل (مثلاً ۱ گرم طلای آب‌شده یا شمش استاندارد) برسد، می‌توانید درخواست تحویل فیزیکی ثبت کنید. تحویل به‌صورت حضوری در دفتر مرکزی یا از طریق محموله امن و بیمه‌شده پست سفارشی به سراسر کشور انجام می‌شود.",
  },
  {
    id: 6,
    category: "payout",
    question: "آیا برای نگهداری طلا در کیف پول کارمزد یا هزینه خزانه‌داری دریافت می‌شود؟",
    answer:
      "خیر؛ نگهداری طلا در کیف پول امن دیجیتال سایت کاملاً رایگان است و هیچ‌گونه کارمزد روزانه، ماهانه یا هزینه خزانه‌داری از دارایی کاربران کسر نخواهد شد.",
  },
];

export function GoldFaqAndSupport() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openId, setOpenId] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.includes(searchQuery) || faq.answer.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full text-slate-900 dark:text-white font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 border-t border-slate-200 dark:border-slate-900 py-12 sm:py-16">
        
        <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
          <span className="inline-block text-amber-600 dark:text-amber-400 text-xs font-semibold tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
            پاسخ به دغدغه‌های شما
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
            سوالات متداول و پشتیبانی اختصاصی
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm lg:text-base leading-relaxed">
            پاسخ شفاف به تمامی سوالات امنیتی، احراز هویت، تسویه حساب و تضمین اصالت طلا
          </p>

          <div className="relative max-w-md mx-auto pt-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجو در سوالات (مثلاً: احراز هویت، سقف خرید، فاکتور...)"
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors shadow-inner"
            />
            <span className="absolute left-3.5 top-5 text-slate-400 dark:text-slate-500 text-sm pointer-events-none">🔍</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/15"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          <div className="lg:col-span-8 space-y-3 sm:space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-slate-50 dark:bg-slate-900 border-amber-500/50 dark:border-amber-500/40 shadow-sm dark:shadow-lg dark:shadow-amber-500/5"
                        : "bg-slate-50/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full p-4 sm:p-5 text-right flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
                    >
                      <span className="font-bold text-xs sm:text-sm lg:text-base text-slate-900 dark:text-slate-100 leading-snug">
                        {faq.question}
                      </span>
                      <span
                        className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-base sm:text-lg transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180 bg-amber-500 text-slate-950"
                            : "bg-slate-200 dark:bg-slate-950 text-amber-600 dark:text-amber-400"
                        }`}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-200 dark:border-slate-800/60 mt-1">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-slate-50 dark:bg-slate-900/40 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                هیچ سوالی متناسب با عبارت جستجو یافت نشد.
              </div>
            )}
          </div>

          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 space-y-5 sm:space-y-6 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
                  <span>پشتیبانی ۲۴ ساعته / ۷ روز هفته</span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">پاسخ سوال خود را نیافتید؟</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  کارشناسان حوزه طلا و پشتیبانان فنی ما در تمام ساعات شبانه‌روز آماده راهنمایی و پاسخگویی به شما هستند.
                </p>
              </div>

              <div className="space-y-3 pt-1">
                
                <button
                  type="button"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-md shadow-amber-500/10 cursor-pointer"
                >
                  <span>💬</span>
                  <span>شروع چت آنلاین با کارشناس</span>
                </button>

                <a
                  href="tel:02191000000"
                  className="w-full bg-white dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <span>📞</span>
                  <span>تماس تلفنی: ۰۲۱-۹۱۰۰۰۰۰۰</span>
                </a>

                <a
                  href="#"
                  className="w-full bg-sky-500/10 hover:bg-sky-500/20 text-sky-600 dark:text-sky-400 border border-sky-500/20 font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <span>✈️</span>
                  <span>پشتیبانی تلگرام</span>
                </a>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-800/80 pt-4 text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
                <div className="font-bold text-slate-900 dark:text-slate-300">مراجعه حضوری و تحویل طلا:</div>
                <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
                  تهران، بازار بزرگ، خیابان ۱۵ خرداد، مجتمع تجاری طلا، طبقه ۲، واحد ۲۰۴
                </p>
                <div className="text-[10px] text-amber-600 dark:text-amber-400/80 pt-1">
                  ⏰ ساعات پذیرش حضوری: شنبه تا چهارشنبه ۹:۳۰ الی ۱۷:۰۰
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}