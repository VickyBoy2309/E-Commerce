import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";

export default function ToysBaby() {
  return (
    <main className="for-you-page">
      {/* Slideshow Banners */}
      <PromoSlider banners={promoBanners.toysBaby} />
    </main>
  );
}
