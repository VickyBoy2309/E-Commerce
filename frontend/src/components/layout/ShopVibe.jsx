import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { shopVibe } from "../../data/shopVibe";
import "../../styles/ShopVibe.css";

function ShopVibe() {
  const trackRef = useRef(null);

  const handleNext = () => {
    if (!trackRef.current) return;

    trackRef.current.scrollBy({
      left: 295,
      behavior: "smooth",
    });
  };

  return (
    <section className="shop-your-vibe">
      <h2 className="shop-your-vibe-title">Shop your Vibe</h2>

      <div className="shop-your-vibe-viewport">
        <div className="shop-your-vibe-track" ref={trackRef}>
          {shopVibe.map((item) => (
            <a key={item.id} href={item.link} className="shop-your-vibe-card">
              <img
                src={item.image}
                alt={item.alt}
                className="shop-your-vibe-image"
              />
            </a>
          ))}
        </div>

        <button
          type="button"
          className="shop-your-vibe-next"
          onClick={handleNext}
          aria-label="Show next cards"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
}

export default ShopVibe;
