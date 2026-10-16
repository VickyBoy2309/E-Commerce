import { useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/TopDeals.css";

function TopDeals({ backgroundImage, products = [] }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;

    if (!container) return;

    container.scrollBy({
      left: direction * container.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section className="top-deals-section">
      <h2 className="spotlight-title">Top Deals</h2>

      <div
        className="top-deals"
        style={{
          backgroundImage: backgroundImage
            ? `url("${backgroundImage}")`
            : "none",
        }}
      >
        <div className="top-deals__slider">
          <div className="top-deals__track" ref={scrollRef}>
            {products.map((product) => (
              <article className="top-deals__card" key={product.id}>
                <Link
                  to={product.link || "/"}
                  className="top-deals__link"
                  aria-label={`View ${product.alt}`}
                >
                  <img
                    className="top-deals__image"
                    src={product.image}
                    alt={product.alt}
                    loading="lazy"
                  />
                </Link>
              </article>
            ))}
          </div>

          <button
            className="top-deals__arrow top-deals__arrow--left"
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Scroll products left"
          >
            &#8249;
          </button>

          <button
            className="top-deals__arrow top-deals__arrow--right"
            type="button"
            onClick={() => scroll(1)}
            aria-label="Scroll products right"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}

export default TopDeals;
