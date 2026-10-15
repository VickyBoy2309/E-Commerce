// Slideshow Banner Imports
import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";

import "../styles/ToysBaby.css"

// Category Navigation Imports
import CategoryNav from "../components/layout/CategoryNav.jsx";
import categoryNav from "../data/categoryNav.js";

export default function ToysBaby() {
  return (
    <main className="toys-baby-page">
      {/* Slideshow Banners */}
      <PromoSlider banners={promoBanners.toysBaby} />
            {/* Category Navigation */}
      <CategoryNav categories={categoryNav.toysBaby} />
    </main>
  );
}
