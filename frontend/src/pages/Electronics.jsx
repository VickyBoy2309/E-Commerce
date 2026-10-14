import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";

export default function Electronics() {
  return (
    <main className="for-you-page">
      {/* Slideshow Banners */}
      <PromoSlider banners={promoBanners.electronics} />
    </main>
  );
}
