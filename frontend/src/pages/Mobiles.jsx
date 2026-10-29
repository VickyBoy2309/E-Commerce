import { Link } from "react-router-dom";
// Slideshow Banner Imports
import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";
import mobileTopBanner from "../assets/images/04-Mobiles/banners/Top Banner.png";
import "../styles/Mobiles.css";

import { categoryAds } from "../data/categoryAds.js";
import CategoryAdBanner from "../components/layout/CategoryAdBanner.jsx";

// Category Navigation Imports
import CategoryNav from "../components/layout/CategoryNav.jsx";
import categoryNav from "../data/categoryNav.js";

import backgroundBanner from "../assets/images/04-Mobiles/topDeals/Background Banner.png";

import iphone15 from "../assets/images/04-Mobiles/topDeals/01-IPhone 15.jpg";
import phone4a from "../assets/images/04-Mobiles/topDeals/02-Phone 4a.jpg";
import galaxys25 from "../assets/images/04-Mobiles/topDeals/03-Galaxy S25.jpg";
import realmeP4x from "../assets/images/04-Mobiles/topDeals/04-Realme P4x 5G.jpg";
import hot60i from "../assets/images/04-Mobiles/topDeals/05-Hot 60i 5G+.jpg";
import oppoK14 from "../assets/images/04-Mobiles/topDeals/06-Oppo K14 Plus 5G.jpg";
import phone4b from "../assets/images/04-Mobiles/topDeals/07-Phone 4b.jpg";
import nova2Neo from "../assets/images/04-Mobiles/topDeals/08-Nova 2 Neo 5G.jpg";
import edge70Pro from "../assets/images/04-Mobiles/topDeals/09-Edge 70 Pro.jpg";

import FeaturedBrands from "../components/layout/FeaturedBrands.jsx";
import featuredBrands from "../data/featuredBrands.js";

import justLaunched from "../assets/images/04-Mobiles/slideShow/Top Banner.webp";

import topDeals from "../data/topDeals.js";
import TopDeals from "../components/layout/TopDeals.jsx";
import unmissTopBanner from "../assets/images/04-Mobiles/unmissDeals/Top Banner.png";

import ShopVibe from "../components/layout/ShopVibe.jsx";

import MobilesDeals from "../components/layout/MobilesDeals.jsx";
import mobilesDeals from "../data/mobilesDeals.js";

export default function Mobiles() {
  return (
    <main className="mobiles-page">
      {/* Mobile Promotional Banner Image */}
      <div className="mobile-banner">
        <img src={mobileTopBanner} alt="Mobile phone promotional banner" />
      </div>
      {/* Mobile Slideshow */}
      <PromoSlider banners={promoBanners.mobiles} />
      {/* Category Navigation */}
      <CategoryNav categories={categoryNav.mobiles} />
      <CategoryAdBanner ads={categoryAds.mobiles} />
      <div className="top-deals-mobiles">
        <img
          src={backgroundBanner}
          alt="Top Deals background"
          className="top-deals-background"
        />

        <div className="azure-blue-container">
          <Link to="/mobiles/iphone-15" className="top-deal-link">
            <img src={iphone15} alt="iPhone 15" className="iphone15" />
          </Link>

          <Link to="/mobiles/nothing-phone-4a" className="top-deal-link">
            <img src={phone4a} alt="Nothing Phone 4a" className="phone4a" />
          </Link>

          <Link to="/mobiles/samsung-galaxy-s25" className="top-deal-link">
            <img src={galaxys25} alt="Galaxy S25" className="galaxyS25" />
          </Link>

          <Link to="/mobiles/realme-p4x-5g" className="top-deal-link">
            <img src={realmeP4x} alt="Realme P4x 5G" className="realmeP4x" />
          </Link>
          <Link to="/mobiles/hot-60i-5g" className="top-deal-link">
            <img src={hot60i} alt="Hot 60i 5G+" className="hot60i" />
          </Link>

          <Link to="/mobiles/oppo-k14-plus-5g" className="top-deal-link">
            <img src={oppoK14} alt="Oppo K14 Plus 5G" className="oppoK14" />
          </Link>

          <Link to="/mobiles/phone-4b" className="top-deal-link">
            <img src={phone4b} alt="Phone 4b" className="phone4b" />
          </Link>

          <Link to="/mobiles/nova-2-neo-5g" className="top-deal-link">
            <img src={nova2Neo} alt="Nova 2 Neo 5G" className="nova2Neo" />
          </Link>

          <Link to="/mobiles/edge-70-pro" className="top-deal-link">
            <img src={edge70Pro} alt="Edge 70 Pro" className="edge70Pro" />
          </Link>
        </div>
      </div>
      {/* Featured Brands */}
      <div className="mobiles-featured">
        <FeaturedBrands brands={featuredBrands.mobiles} />
      </div>
      {/* Just Launched Slideshow */}
      <div className="just-launched-banner">
        <img
          className="just-launched-banner-image"
          src={justLaunched}
          alt="Just Launched"
        />
      </div>
      {/* Mobile Just Launched Slideshow */}
      <div className="just-launched-slider">
        <PromoSlider banners={promoBanners.justLaunched} />
      </div>
      <ShopVibe />
      <div className="mobiles-unmissable-deals-banner">
        <img
          src={unmissTopBanner}
          alt="Unmissable Deals Top Banner"
          className="mobiles-unmissable-deals-banner-image"
        />
      </div>

      <div className="unmiss-top-deals">
        <TopDeals products={topDeals.mobilesUnmissDeals} />
      </div>
      <MobilesDeals
        title="Top Premium Deals"
        products={mobilesDeals.premiumDeals}
      />
      <MobilesDeals
        title="Top Mid-Range Deals"
        products={mobilesDeals.midRangeDeals}
        className="mid-range-deals"
      />
      <MobilesDeals
        title="Top Budget Deals"
        products={mobilesDeals.budgetDeals}
        className="budget-deals"
      />
      <CategoryAdBanner ads={categoryAds.mobiles2} />
    </main>
  );
}
