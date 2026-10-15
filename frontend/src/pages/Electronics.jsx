// Slideshow Banner Imports
import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";

// Category Navigation Imports
import CategoryNav from "../components/layout/CategoryNav.jsx";
import categoryNav from "../data/categoryNav.js";

import electronicsTopBanner from "../assets/images/05-Electronics/banners/Top Banner.png";
import "../styles/Electronics.css";

export default function Electronics() {
  return (
    <main className="electronics-page">
      {/* Electronics Promotional Banner */}
      <div className="electronics-banner">
        <img src={electronicsTopBanner} alt="Electronics promotional offers" />
      </div>

      {/* Electronics Slideshow */}
      <PromoSlider banners={promoBanners.electronics} />
      {/* Category Navigation */}
      <CategoryNav categories={categoryNav.electronics} />
    </main>
  );
}
