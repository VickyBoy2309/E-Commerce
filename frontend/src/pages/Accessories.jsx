// Slideshow Banner Imports
import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";

import "../styles/Accessories.css"

// Category Navigation Imports
import CategoryNav from "../components/layout/CategoryNav.jsx";
import categoryNav from "../data/categoryNav.js";

export default function Accessories() {
  return (
    <main className="accessories-page">
      {/* Slideshow Banners */}
      <PromoSlider banners={promoBanners.accessories} />
      {/* Category Navigation */}
      <CategoryNav categories={categoryNav.accessories} />
    </main>
  );
}
