// Slideshow Banner Imports
import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";

import "../styles/Books.css";

// Category Navigation Imports
import CategoryNav from "../components/layout/CategoryNav.jsx";
import categoryNav from "../data/categoryNav.js";

export default function Books() {
  return (
    <main className="books-page">
      {/* Slideshow Banners */}
      <PromoSlider banners={promoBanners.books} />
      {/* Category Navigation */}
      <CategoryNav categories={categoryNav.books} />
    </main>
  );
}
