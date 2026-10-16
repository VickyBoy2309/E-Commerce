import { useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/Spotlight.css";

function Spotlight({ spot = [] }) {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction * 334,
      behavior: "smooth",
    });
  };

  return (
    <section className="spotlight-section">
      <h2 className="spotlight-title">In The Spotlight</h2>

      <div className="spotlight-carousel">
        <div className="spotlight-track" ref={sliderRef}>
          {spot.map((ad) => (
            <article className="spotlight-card" key={ad.id}>
              <Link
                to={ad.link || "/"}
                className="spotlight-link"
                aria-label={`View ${ad.alt}`}
              >
                <img
                  className="spotlight-image"
                  src={ad.image}
                  alt={ad.alt}
                  loading="lazy"
                />
              </Link>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="spotlight-arrow"
          onClick={() => scrollSlider(1)}
          aria-label="Next advertisements"
        >
          &#8250;
        </button>

        <button
          type="button"
          className="spotlight-arrow spotlight-arrow-prev"
          onClick={() => scrollSlider(-1)}
          aria-label="Previous advertisements"
        >
          &#8249;
        </button>
      </div>
    </section>
  );
}

export default Spotlight;
