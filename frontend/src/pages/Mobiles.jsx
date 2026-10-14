import PromoSlider from "../components/layout/PromoSlider.jsx";
import { promoBanners } from "../data/promoBanner.js";
import mobileTopBanner from "../assets/images/04-Mobiles/banners/Top Banner.png";
import "../styles/Mobiles.css";

export default function Mobiles() {
  return (
    <main className="for-you-page">
      {/* Mobile Promotional Banner Image */}
      <div className="mobile-banner">
        <img
          src={mobileTopBanner}
          alt="Mobile phone promotional banner"
        />
      </div>

      {/* Mobile Slideshow */}
      <PromoSlider banners={promoBanners.mobiles} />
    </main>
  );
}