import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";

import CategoryAdBanner from "../components/layout/CategoryAdBanner.jsx";
import { categoryAds } from "../data/categoryAds.js";

import Spotlight from "../components/layout/Spotlight.jsx";
import { spotlight } from "../data/spotlight.js";

import TopDeals from "../components/layout/TopDeals";
import topDeals from "../data/topDeals";

// Tech Top Deals Background
import techTopDealsBackground from "../assets/images/01-For You/techTopDeals/Top Deals Background.png";

// Appliances Top Deals Background
import appliancesTopDealsBackground from "../assets/images/01-For You/appliancesTopDeals/Appliances Top Deals Background.png";

// Fashion Top Deals Background
import fashionTopDealsBackground from "../assets/images/01-For You/fashionTopDeals/Fashion Top Deals Background.webp";

// Beauty Top Deals Background
import beautyTopDealsBackground from "../assets/images/01-For You/beautyTopDeals/Beauty Top Deals Background.png";

// Top Brands Showcase
import TopBrands from "../components/layout/TopBrands.jsx";
import topBrands from "../data/topBrands.js";

import FeaturedBrands from "../components/layout/FeaturedBrands.jsx";
import featuredBrands from "../data/featuredBrands.js";

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
      {/* Tech Top Deals Section */}
      <TopDeals
        title="Top deals on Tech"
        backgroundImage={techTopDealsBackground}
        products={topDeals.forYouTechTopDeals}
      />
      {/* Featured Brands */}
      <FeaturedBrands brands={featuredBrands} />
      {/* Appliances Top Deals Section */}
      <TopDeals
        title="Top deals on Appliances"
        backgroundImage={appliancesTopDealsBackground}
        products={topDeals.forYouAppliancesTopDeals}
      />
      {/* Fashion Top Deals Section */}
      <TopDeals
        title="Top deals on Fashion"
        backgroundImage={fashionTopDealsBackground}
        products={topDeals.forYouFashionTopDeals}
      />
      {/* Beauty Top Deals Section */}
      <TopDeals
        title="Top deals on Beauty & More"
        backgroundImage={beautyTopDealsBackground}
        products={topDeals.forYouBeautyTopDeals}
      />
      <TopBrands title="Top Brands & Best Deals" brands={topBrands} />
    </main>
  );
}
