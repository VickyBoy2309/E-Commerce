import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";

import CategoryAdBanner from "../components/layout/CategoryAdBanner.jsx";
import { categoryAds } from "../data/categoryAds.js";

import Spotlight from "../components/layout/Spotlight.jsx";
import { spotlight } from "../data/spotlight.js";

import TopDeals from "../components/layout/TopDeals";
import topDeals from "../data/topDeals";

import topDealsBackground from "../assets/images/01-For You/topDeals/Top Deals Background.png";

import "../styles/ForYou.css";

export default function ForYou() {
  return (
    <main className="for-you-page">
      {/* Slideshow Banners */}
      <PromoSlider banners={promoBanners.forYou} />
      {/* Ads Banner */}
      <CategoryAdBanner ads={categoryAds.forYou} />
      {/* Spotlight Section */}
      <Spotlight spot={spotlight.forYou} />
      {/* Top Deals Section */}
      <TopDeals
        title="Top deals on tech"
        backgroundImage={topDealsBackground}
        products={topDeals.forYou}
      />
    </main>
  );
}
