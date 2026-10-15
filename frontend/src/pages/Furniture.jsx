// Slideshow Banner Imports
import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";

// Category Navigation Imports
import CategoryNav from "../components/layout/CategoryNav.jsx";
import categoryNav from "../data/categoryNav.js";

export default function Furniture() {
  return (
    <main className="furniture-page">
      {/* Slideshow Banners */}
      <PromoSlider banners={promoBanners.furniture} />
      {/* Category Navigation */}
      <CategoryNav categories={categoryNav.furniture} />
    </main>
  );
}
