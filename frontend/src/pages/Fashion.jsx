// Banner Slideshow Imports
import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";

import "../styles/Fashion.css"

// Category Navigation Imports
import CategoryNav from "../components/layout/CategoryNav.jsx";
import categoryNav from "../data/categoryNav.js";

export default function Fashion() {
  return (
    <main className="fashion-page">
      {/* Slideshow Banners */}
      <PromoSlider banners={promoBanners.fashion} />
      {/* Category Navigation */}
      <CategoryNav categories={categoryNav.fashion} />
    </main>
  );
}
