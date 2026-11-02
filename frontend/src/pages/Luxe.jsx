import LuxeHeader from "../components/layout/LuxeHeader";
import "../styles/Luxe.css";

import luxe from "../data/luxe";

import topBanner from "../assets/images/07-Home/luxe/luxe/topBanner/Top Banner.webp";

import MobilesDeals from "../components/layout/MobilesDeals.jsx";
import mobilesDeals from "../data/mobilesDeals.js";

import TopDeals from "../components/layout/TopDeals";
import topDeals from "../data/topDeals";

import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";

function Luxe() {
  return (
    <div className="luxe-layout">
      {/* LUXE HEADER */}
      <LuxeHeader />

      {/* LUXE TOP BANNER */}
      <img src={topBanner} alt="Luxe Top Banner" className="luxe-top-banner" />

      {/* =================================
          LUXE HOME PICKS SECTION
      ================================= */}

      <section className="luxe-home-picks">
        <div className="luxe-home-picks-grid">
          {luxe.luxeHomePicks.map((item) => (
            <a href={item.link} className="luxe-home-pick-card" key={item.id}>
              <img src={item.image} alt={item.alt} loading="lazy" />
            </a>
          ))}
        </div>
      </section>

      <MobilesDeals
        title="Host In Style"
        products={mobilesDeals.luxeHostInStyle}
        className="luxe-host-in-style"
      />

      <TopDeals
        title="Glam Up Your Space"
        products={topDeals.luxeGlamUpYourSpace}
        className="luxe-glam-up-space"
      />

      {/* Slideshow Banners */}
      <PromoSlider
        banners={promoBanners.luxeSlideShow}
        className="for-you-promo-slider"
      />
      <TopDeals
        title="Furniture"
        products={topDeals.luxeFurniture}
        className="luxe-furniture"
      />
    </div>
  );
}

export default Luxe;
