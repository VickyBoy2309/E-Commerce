// Slideshow Banner Imports
import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";

import "../styles/Home.css";

// Category Navigation Imports
import CategoryNav from "../components/layout/CategoryNav.jsx";
import categoryNav from "../data/categoryNav.js";

export default function Home() {
  return (
    <main className="home-page">
      {/* Slideshow Banners */}
      <PromoSlider banners={promoBanners.home} />
      {/* Category Navigation */}
      <CategoryNav categories={categoryNav.home} />
    </main>
  );
}
