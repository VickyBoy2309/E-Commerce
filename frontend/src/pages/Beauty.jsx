import { Link } from "react-router-dom";

// Slideshow Banner Imports
import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";

import "../styles/Beauty.css";

// Category Navigation Imports
import CategoryNav from "../components/layout/CategoryNav.jsx";
import categoryNav from "../data/categoryNav.js";

import CategoryAdBanner from "../components/layout/CategoryAdBanner.jsx";
import { categoryAds } from "../data/categoryAds.js";

import TopDeals from "../components/layout/TopDeals";
import topDeals from "../data/topDeals";

import giftHerBackgroundBanner from "../assets/images/06-Beauty/giftHer/Background Banner.png";
import giftHimBackgroundBanner from "../assets/images/06-Beauty/giftHim/Background Banner.png";

import preBestSell from "../data/preBestSell.js";

import MobilesDeals from "../components/layout/MobilesDeals.jsx";
import mobilesDeals from "../data/mobilesDeals.js";

import FeaturedBrands from "../components/layout/FeaturedBrands.jsx";
import featuredBrands from "../data/featuredBrands.js";

import newDealsBackgroundBanner from "../assets/images/06-Beauty/newDeals/Background Banner.png";

import shopByBudget from "../data/shopByBudget.js";

import giftsSavings from "../data/giftsSavings.js";

export default function Beauty() {
  return (
    <main className="beauty-page">
      {/* Slideshow Banners */}
      <PromoSlider banners={promoBanners.beauty} />
      {/* Category Navigation */}
      <CategoryNav categories={categoryNav.beauty} />
      {/* Ads Banner */}
      <CategoryAdBanner ads={categoryAds.beauty} />
      {/* Special Gifts For Her */}
      <TopDeals
        title="Special Gifts for Her"
        products={topDeals.giftHer}
        backgroundImage={giftHerBackgroundBanner}
        className="top-deals-gift-her"
      />
      <TopDeals
        title="Special Gifts for Him"
        products={topDeals.giftHim}
        backgroundImage={giftHimBackgroundBanner}
        className="top-deals-gift-him"
      />
      <img
        src={topDeals.beautyBanners[0].image}
        alt={topDeals.beautyBanners[0].alt}
        className="beauty-banner"
      />
      {/* Premium Bestsellers */}
      <section className="premium-bestsellers-section">
        <h2 className="premium-bestsellers-title">Premium Bestsellers</h2>

        <div className="premium-bestsellers-grid">
          {preBestSell.beautyPre.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              className="premium-bestsellers-card"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="premium-bestsellers-image"
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </section>
      <img
        src={topDeals.beautyBanners[1].image}
        alt={topDeals.beautyBanners[1].alt}
        className="beauty-banner"
      />
      {/* Big Beauty Brands */}
      <section className="big-beauty-brands-section">
        <h2 className="big-beauty-brands-title">Big Beauty Brands</h2>

        <div className="big-beauty-brands-grid">
          {preBestSell.bigBrands.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              className="big-beauty-brands-card"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="big-beauty-brands-image"
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </section>
      <img
        src={topDeals.beautyBanners[2].image}
        alt={topDeals.beautyBanners[2].alt}
        className="beauty-banner"
      />
      {/* Budget Buys */}
      <section className="budget-buys-section">
        <h2 className="budget-buys-title">Budget Buys</h2>

        <div className="budget-buys-grid">
          {preBestSell.budgetBuys.map((item) => (
            <Link to={item.link} key={item.id} className="budget-buys-card">
              <img
                src={item.image}
                alt={item.alt}
                className="budget-buys-image"
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </section>
      <MobilesDeals
        title="Brand New In Beauty"
        products={mobilesDeals.brandNewInBeauty}
        className="budget-deals"
      />
      {/* Featured Brands */}
      <FeaturedBrands brands={featuredBrands.beauty} />
      <TopDeals
        title="Say Bye to Dry"
        products={topDeals.sayByeToDry}
        className="top-deals-say-bye-to-dry"
      />
      {/* Ads Banner */}
      <CategoryAdBanner ads={categoryAds.beauty2} />
      {/* New Deals Everyday */}
      <TopDeals
        title="New Deals Everyday"
        products={topDeals.beautyNewDeals}
        backgroundImage={newDealsBackgroundBanner}
        className="top-deals-new-deals"
      />

      <section className="shop-by-budget-section">
        <h2 className="shop-by-budget-title">Shop By Budget</h2>

        <div className="shop-by-budget-grid">
          {shopByBudget.beauty.map((item) => (
            <Link to={item.link} className="shop-by-budget-card" key={item.id}>
              <img src={item.image} alt={item.alt} loading="lazy" />
            </Link>
          ))}
        </div>
      </section>

      <section className="beauty-budget-combos">
        {/* Top Banner */}
        <img
          src={giftsSavings.topBanner}
          alt="Great gifts, great savings"
          className="beauty-budget-top-banner"
        />

        {/* Six Promotional Images */}
        <div className="beauty-budget-combos-grid">
          {giftsSavings.products.map((product) => (
            <Link
              to={product.link}
              key={product.id}
              className="beauty-budget-combo-link"
            >
              <img
                src={product.image}
                alt={product.alt}
                className="beauty-budget-combo-image"
                loading="lazy"
              />
            </Link>
          ))}
        </div>

        {/* Bottom Banner */}
        <img
          src={giftsSavings.bottomBanner}
          alt=""
          aria-hidden="true"
          className="beauty-budget-bottom-banner"
        />
      </section>
    </main>
  );
}
