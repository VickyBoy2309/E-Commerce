import { useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/MobilesDeals.css";

function MobilesDeals({
  title = "Top Premium Deals",
  products = [],
  sectionId = "mobiles-premium-deals",
  className = "",
}) {
  const sliderRef = useRef(null);

  const handleNext = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: 324,
      behavior: "smooth",
    });
  };

  return (
    <section className={`mobiles-deals-section ${className}`} id={sectionId}>
      <h2 className="mobiles-deals-title">{title}</h2>

      <div className="mobiles-deals-slider">
        <div className="mobiles-deals-track" ref={sliderRef}>
          {products.map((product) => (
            <div className="mobiles-deals-card" key={product.id}>
              <Link
                to={product.link}
                className="mobiles-deals-link"
                aria-label={`View ${product.alt}`}
              >
                <img
                  className="mobiles-deals-image"
                  src={product.image}
                  alt={product.alt}
                  draggable="false"
                />
              </Link>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="mobiles-deals-next"
          onClick={handleNext}
          aria-label={`Show more ${title}`}
        >
          <svg
            viewBox="0 0 24 24"
            width="25"
            height="25"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M9 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default MobilesDeals;
