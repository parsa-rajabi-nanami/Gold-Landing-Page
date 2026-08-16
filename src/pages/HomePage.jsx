import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { HeroSection } from "../partials/home-page/HeroSection";
import { GoldPriceChartWidget } from "../partials/home-page/GoldPriceChartWidget";
import { GoldSmartCalculators } from "../partials/home-page/GoldSmartCalculators";
import { GoldTrustAndLicenses } from "../partials/home-page/GoldTrustAndLicenses";
import { GoldFaqAndSupport } from "../partials/home-page/GoldFaqAndSupport";

export function HomePage() {
    return (
        <div className="flex flex-col min-h-screen bg-[var(--color-bg,#000000)] text-[var(--color-text,#ffffff)] transition-colors duration-300">
            <Header />

            <main className="flex-grow flex flex-col items-center justify-start w-full px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 mt-6 sm:mt-10 mb-16">

                {/* Hero Section */}
                <HeroSection />

                {/* Live Gold Price Chart */}
                <GoldPriceChartWidget />

                {/* Smart Gold Calculators */}
                <GoldSmartCalculators />

                {/* Trust Badges & Licenses */}
                <GoldTrustAndLicenses />

                {/* Q/A Box */}
                <GoldFaqAndSupport />

            </main>

            <Footer />
        </div>
    );
}