// Slideshow Banner Imports
import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";

import "../styles/Appliances.css"

// Category Navigation Imports
import CategoryNav from "../components/layout/CategoryNav.jsx";
import categoryNav from "../data/categoryNav.js";

export default function Appliances() {
  return (
    <main className="appliances-page">
      {/* Slideshow Banners */}
      <PromoSlider banners={promoBanners.appliances} />
            {/* Category Navigation */}
      <CategoryNav categories={categoryNav.appliances} />
    </main>
  );
}
