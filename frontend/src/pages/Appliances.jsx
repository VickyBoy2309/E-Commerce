/* Slideshow Banner Imports */
import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";

import CategoryAdBanner from "../components/layout/CategoryAdBanner.jsx";
import { categoryAds } from "../data/categoryAds.js";

import HomeAppliances from "../components/layout/HomeAppliances.jsx";

import MobilesDeals from "../components/layout/MobilesDeals.jsx";
import mobilesDeals from "../data/mobilesDeals.js";

import TopDeals from "../components/layout/TopDeals";
import topDeals from "../data/topDeals";

import "../styles/Appliances.css";

/* Category Navigation Imports */
import CategoryNav from "../components/layout/CategoryNav.jsx";
import categoryNav from "../data/categoryNav.js";

export default function Appliances() {
  return (
    <main className="appliances-page">
      {/* Slideshow Banners */}
      <PromoSlider banners={promoBanners.appliances} />
      {/* Category Navigation */}
      <CategoryNav categories={categoryNav.appliances} />
      {/* Category Advertisement Banner */}
      <CategoryAdBanner ads={categoryAds.appliancesAds} />
      {/* Interactive Home Appliances Section */}
      <HomeAppliances />
      <HomeAppliances variant="kitchen" />

      <MobilesDeals
        title="For Everyday Living!"
        products={mobilesDeals.forEverydayLiving}
        className="price-drop"
      />

      <PromoSlider banners={promoBanners.applianceSlideshow} />

      <TopDeals
        title="Any To Any Exchange"
        products={topDeals.priceDropFestival}
        className="any-to-any-exchange"
      />

      <MobilesDeals
        title="Newly Launched!"
        products={mobilesDeals.newlyLaunched}
        className="price-drop"
      />
    </main>
  );
}
