// Slideshow Banner Imports
import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";

import "../styles/Gaming.css";

// Category Navigation Imports
import CategoryNav from "../components/layout/CategoryNav.jsx";
import categoryNav from "../data/categoryNav.js";

export default function Gaming() {
  return (
    <main className="gaming-page">
      {/* Slideshow Banners */}
      <PromoSlider banners={promoBanners.gaming} />
      {/* Category Navigation */}
      <CategoryNav categories={categoryNav.gaming} />
    </main>
  );
}
