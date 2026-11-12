import { Link } from "react-router-dom";

// Slideshow Banner Imports
import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";

import "../styles/Home.css";

// Category Navigation Imports
import CategoryNav from "../components/layout/CategoryNav.jsx";
import categoryNav from "../data/categoryNav.js";

import MobilesDeals from "../components/layout/MobilesDeals.jsx";
import mobilesDeals from "../data/mobilesDeals.js";

import luxeButton from "../assets/images/07-Home/luxe/Luxe Button.webp";

import budgetWonders from "../data/shopByBudget.js";

import TopDeals from "../components/layout/TopDeals";
import topDeals from "../data/topDeals";

import makeoverBackgroundBanner from "../assets/images/07-Home/homeFestiveMakeover/Background Banner.png";

import HomeData from "../components/layout/HomeData.jsx";
import homeData from "../data/homeData.js";

import giftsSaving from "../data/giftsSavings.js";
import topBanner from "../assets/images/07-Home/brandedPriceCuts/Top Banner.webp";
import bottomBanner from "../assets/images/07-Home/brandedPriceCuts/Bottom Banner.webp";

const brandsInSpotlight = [
  {
    id: 1,
    image: new URL(
      "../assets/images/07-Home/spotLight/01-Greenchef.webp",
      import.meta.url,
    ).href,
    alt: "Greenchef brand - Minimum 60% off",
    link: "#",
  },
  {
    id: 2,
    image: new URL(
      "../assets/images/07-Home/spotLight/02-Eveready.webp",
      import.meta.url,
    ).href,
    alt: "Eveready brand - Minimum 60% off",
    link: "#",
  },
  {
    id: 3,
    image: new URL(
      "../assets/images/07-Home/spotLight/03-Pigeon.webp",
      import.meta.url,
    ).href,
    alt: "Pigeon brand - Minimum 40% off",
    link: "#",
  },
];

export default function Home() {
  return (
    <main className="home-page">
      {/* Slideshow Banners */}
      <PromoSlider banners={promoBanners.home} />
      {/* Category Navigation */}
      <CategoryNav categories={categoryNav.home} />
      <MobilesDeals
        title="Price Drop"
        products={mobilesDeals.priceDrop}
        className="price-drop"
      />

      <section className="brands-in-spotlight">
        <h2 className="brands-in-spotlight-title">Brands in spotlight</h2>

        <div className="brands-in-spotlight-container">
          {brandsInSpotlight.map((brand) => (
            <a
              key={brand.id}
              href={brand.link}
              className="brands-in-spotlight-card"
            >
              <img
                src={brand.image}
                alt={brand.alt}
                className="brands-in-spotlight-image"
              />
            </a>
          ))}
        </div>
      </section>

      <section className="home-luxe-section">
        <Link to="/luxe" className="home-luxe-link">
          <img
            src={luxeButton}
            alt="Explore LUXE - Premium Shopping Experience"
            className="home-luxe-image"
          />
        </Link>
      </section>

      <section className="best-budget-wonders-section">
        <h2 className="best-budget-wonders-title">Best budget wonders</h2>

        <div className="best-budget-wonders-grid">
          {budgetWonders.bestBudgetWonders.map((item) => (
            <Link
              to={item.link}
              className="best-budget-wonders-card"
              key={item.id}
            >
              <img src={item.image} alt={item.alt} loading="lazy" />
            </Link>
          ))}
        </div>
      </section>

      <TopDeals
        title="Home Festive Makeover"
        backgroundImage={makeoverBackgroundBanner}
        products={topDeals.homeFestiveMakeover}
      />

      <MobilesDeals
        title="Festive Gifting"
        products={mobilesDeals.festiveGiftingFirst}
        className="festive-gifting-first"
      />
      <MobilesDeals
        products={mobilesDeals.festiveGiftingSecond}
        className="festive-gifting-second"
      />
      <MobilesDeals
        products={mobilesDeals.festiveGiftingThird}
        className="festive-gifting-third"
      />
      <MobilesDeals
        products={mobilesDeals.festiveGiftingFourth}
        className="festive-gifting-fourth"
      />
      <MobilesDeals
        products={mobilesDeals.festiveGiftingFifth}
        className="festive-gifting-fifth"
      />
      <MobilesDeals
        title="Light Up Your Home"
        products={mobilesDeals.lightUpYourHome}
        className="light-up-your-home"
      />
      <MobilesDeals
        title="Bathroom Essentials"
        products={mobilesDeals.bathroomEssentials}
        className="bathroom-essentials"
      />
      <MobilesDeals
        title="Winter Collection"
        products={mobilesDeals.winterCollection}
        className="winter-collection"
      />
      <MobilesDeals
        title="Explore What's Trending"
        products={mobilesDeals.exploreTrending}
        className="explore-trending"
      />
      <MobilesDeals
        title="Kitchen Essentials"
        products={mobilesDeals.kitchenEssentials}
        className="kitchen-essentials"
      />
      <MobilesDeals
        title="Furnishing"
        products={mobilesDeals.furnishing}
        className="furnishing"
      />
      {/* Home Decor Section */}
      <HomeData title="Home Decor" products={homeData.homeDecor} />
      <HomeData title="Hardware Range" products={homeData.hardwareRange} />
      <HomeData title="Furniture Picks" products={homeData.furniturePicks} />

      {/* Branded Price Cuts Section */}

      <section className="branded-price-cuts-section">
        <div className="branded-price-cuts-container">
          {/* Top Banner */}
          <div className="branded-price-cuts-header">
            <img src={topBanner} alt="Branded Price Cuts" />
          </div>

          {/* Brand Cards */}
          <div className="branded-price-cuts-grid">
            {giftsSaving.brandedPriceCuts.map((brand) => (
              <Link
                to={brand.link}
                key={brand.id}
                className="branded-price-cuts-card"
                aria-label={`Shop ${brand.alt}`}
              >
                <img src={brand.image} alt={brand.alt} />
              </Link>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="branded-price-cuts-footer">
            <img src={bottomBanner} alt="Diya Decoration" />
          </div>
        </div>
      </section>
    </main>
  );
}
