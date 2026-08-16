import React from "react";

export function HeroSection() {
  return (
    <section className="hero-section min-h-[50vh] lg:min-h-[80vh] flex items-start justify-center pt-8 sm:pt-12 lg:pt-16 px-4 sm:px-6 lg:px-8">
      <div className="hero-background">
        <div className="hero-background-word">
          <span>NASA</span>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">

        <div className="order-1 lg:order-2 lg:col-span-7 w-full">
          <h1 className="hero-title text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            سرمایه‌گذاری و معامله هوشمندانه طلا و سکه
          </h1>
        </div>

        <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-center w-full">
          <p className="hero-description text-sm sm:text-base leading-relaxed">
            پلتفرم ناسا گلد با ارائه قیمت‌های لحظه‌ای بازار، معامله آنلاین طلا را با فاکتور رسمی، ضمانت اصالت و تحویل ایمن برای شما فراهم می‌کند.
          </p>

          <div className="hero-actions flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-6 w-full">
            <a
              href="#products"
              className="hero-button hero-button-primary w-full sm:w-auto flex items-center justify-center text-center"
            >
              <span className="w-full text-center">مشاهده ویترین طلا</span>
            </a>

            <a
              href="#GoldPriceChartWidget"
              className="hero-button hero-button-secondary w-full sm:w-auto flex items-center justify-center text-center"
            >
              <span className="flex items-center justify-center gap-2 w-full">
                قیمت لحظه‌ای طلا
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M19 12H5" />
                  <path d="m12 19-7-7 7-7" />
                </svg>
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}