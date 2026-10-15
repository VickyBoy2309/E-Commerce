import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";

import "../styles/Gaming.css";

export default function Gaming() {
  return (
    <main className="gaming-page">
      {/* Slideshow Banners */}
      <PromoSlider banners={promoBanners.gaming} />
    </main>
  );
}
