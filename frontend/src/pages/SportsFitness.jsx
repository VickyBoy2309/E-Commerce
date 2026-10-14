import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";

export default function SportsFitness() {
  return (
    <main className="for-you-page">
      {/* Slideshow Banners */}
      <PromoSlider banners={promoBanners.sportsFitness} />
    </main>
  );
}
