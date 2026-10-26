import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";

import CategoryNav from "../components/layout/CategoryNav.jsx";
import categoryNav from "../data/categoryNav.js";

import { Link } from "react-router-dom";

import { categoryAds } from "../data/categoryAds.js";
import CategoryAdBanner from "../components/layout/CategoryAdBanner.jsx";

import TopDeals from "../components/layout/TopDeals.jsx";
import topDeals from "../data/topDeals.js";

import FeaturedBrands from "../components/layout/FeaturedBrands.jsx";
import featuredBrands from "../data/featuredBrands.js";

import topTrendyBanner from "../assets/images/02-Fashion/topDealsTrendy/Top Deals Trendy Banner.webp";

import top50Banner from "../assets/images/02-Fashion/top50/Top Banner.png";

import watchShopBanner from "../assets/images/02-Fashion/banners/Watch & Shop Live!.jpg";

import "../styles/Fashion.css";

const fashionShowcase = [
  {
    id: 1,
    title: "Men",
    image: new URL(
      "../assets/images/02-Fashion/icons/Men.webp",
      import.meta.url,
    ).href,
    link: "/fashion/men",
  },
  {
    id: 2,
    title: "Women",
    image: new URL(
      "../assets/images/02-Fashion/icons/Women.webp",
      import.meta.url,
    ).href,
    link: "/fashion/women",
  },
  {
    id: 3,
    title: "Kids",
    image: new URL(
      "../assets/images/02-Fashion/icons/Kids.webp",
      import.meta.url,
    ).href,
    link: "/fashion/gen-z",
  },
];

export default function Fashion() {
  return (
    <main className="fashion-page">
      {/* Slideshow Banners */}
      <PromoSlider banners={promoBanners.fashion} />

      {/* Category Navigation */}
      <CategoryNav categories={categoryNav.fashion} />

      {/* Shop for Loved Ones */}
      <section className="fashion-loved-ones">
        <h2 className="fashion-loved-ones-title">Shop For Loved Ones!</h2>

        <div className="fashion-loved-ones-grid">
          {fashionShowcase.map((category) => (
            <a
              key={category.id}
              href={category.link}
              className="fashion-loved-ones-card"
            >
              <div className="fashion-loved-ones-image-wrapper">
                <img
                  src={category.image}
                  alt={category.title}
                  className="fashion-loved-ones-image"
                />
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className="top-50-section">
        <img
          src={top50Banner}
          alt="Top Deals on Trendy"
          className="top-trendy-banner"
        />
        <TopDeals title="" products={topDeals.top50} />
      </div>

      <section className="price-drop">
        <h2>Price Surprise Store</h2>
        <div className="price-drop-images">
          <Link to="/fashion/products?maxPrice=199" className="price-drop-card">
            <img
              src={
                new URL(
                  "../assets/images/02-Fashion/priceDrop/01-199.webp",
                  import.meta.url,
                ).href
              }
              alt="Shop fashion under ₹199"
            />
          </Link>
          <Link to="/fashion/products?maxPrice=299" className="price-drop-card">
            <img
              src={
                new URL(
                  "../assets/images/02-Fashion/priceDrop/02-299.webp",
                  import.meta.url,
                ).href
              }
              alt="Shop fashion under ₹299"
            />
          </Link>
          <Link to="/fashion/products?maxPrice=399" className="price-drop-card">
            <img
              src={
                new URL(
                  "../assets/images/02-Fashion/priceDrop/03-399.webp",
                  import.meta.url,
                ).href
              }
              alt="Shop fashion under ₹399"
            />
          </Link>
        </div>
      </section>

      <CategoryAdBanner ads={categoryAds.fashion} />

      <div className="womens-wear-section">
        <TopDeals title="Women's Wear" products={topDeals.fashionWomensWear} />
      </div>
      <div className="mens-wear-section">
        <TopDeals title="Men's Wear" products={topDeals.fashionMensWear} />
      </div>
      <div className="kids-wear-section">
        <TopDeals title="Kid's Wear" products={topDeals.fashionKidsWear} />
      </div>
      <div className="footwear-section">
        <TopDeals title="Footwear" products={topDeals.fashionFootwear} />
      </div>

      {/* Featured Brands */}
      <FeaturedBrands brands={featuredBrands.fashion} />

      <div className="under599-section">
        <TopDeals
          title="Top Brands Under ₹599"
          products={topDeals.fashionUnder599}
        />
      </div>

      <div className="top-trendy-section">
        <img
          src={topTrendyBanner}
          alt="Top Deals on Trendy"
          className="top-trendy-banner"
        />
        <TopDeals title="" products={topDeals.fashionTopTrendy} />
      </div>

      <div className="watchShop-section">
        <img
          src={watchShopBanner}
          alt="Watch And Shop Live!"
          className="watchShop-banner"
        />
      </div>
    </main>
  );
}
