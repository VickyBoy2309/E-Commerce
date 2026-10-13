import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";

export default function ForYou() {
  return (
    <main className="for-you-page">
      <PromoSlider banners={promoBanners.forYou} />

      {/* Your existing For You content */}
    </main>
  );
}
