// Slideshow Banner Imports
import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";

import "../styles/Beauty.css";

// Category Navigation Imports
import CategoryNav from "../components/layout/CategoryNav.jsx";
import categoryNav from "../data/categoryNav.js";

export default function Beauty() {
  return (
    <main className="beauty-page">
      {/* Slideshow Banners */}
      <PromoSlider banners={promoBanners.beauty} />
      {/* Category Navigation */}
      <CategoryNav categories={categoryNav.beauty} />
    </main>
  );
}
