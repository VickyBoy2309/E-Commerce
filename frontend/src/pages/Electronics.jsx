import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";
import electronicsTopBanner from "../assets/images/05-Electronics/banners/Top Banner.png";
import "../styles/Electronics.css";

export default function Electronics() {
  return (
    <main className="for-you-page">
      {/* Electronics Promotional Banner */}
      <div className="electronics-banner">
        <img src={electronicsTopBanner} alt="Electronics promotional offers" />
      </div>

      {/* Electronics Slideshow */}
      <PromoSlider banners={promoBanners.electronics} />
    </main>
  );
}
