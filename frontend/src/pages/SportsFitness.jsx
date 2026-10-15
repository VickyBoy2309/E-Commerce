// Slideshow Banner Imports
import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";

import "../styles/SportsFitness.css";

// Category Navigation Imports
import CategoryNav from "../components/layout/CategoryNav.jsx";
import categoryNav from "../data/categoryNav.js";

export default function SportsFitness() {
  return (
    <main className="sport-fitness-page">
      {/* Slideshow Banners */}
      <PromoSlider banners={promoBanners.sportsFitness} />
      {/* Category Navigation */}
      <CategoryNav categories={categoryNav.sportsFitness} />
    </main>
  );
}
