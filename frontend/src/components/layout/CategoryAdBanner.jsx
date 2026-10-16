import { useAdVisitIndex } from "./AdRotation";
import "../../styles/CategoryAdBanner.css";

function CategoryAdBanner({ ads }) {
  const visitIndex = useAdVisitIndex();

  if (!ads || ads.length === 0) {
    return null;
  }

  const ad = ads[visitIndex % ads.length];

  return (
    <div className="category-ad-banner">
      <img
        key={ad.image}
        src={ad.image}
        alt={ad.alt}
        className="category-ad-banner-image"
      />
    </div>
  );
}

export default CategoryAdBanner;
