import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/HomeData.css";

function HomeData({
  title,
  products = [],
  className = "",
  visibleCards = 7,
  scrollCards = 4,
}) {
  const sliderRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Update Arrow Visibility
  const updateArrows = useCallback(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const maxScroll = Math.max(0, slider.scrollWidth - slider.clientWidth);

    setCanScrollLeft(slider.scrollLeft > 1);
    setCanScrollRight(slider.scrollLeft < maxScroll - 1);
  }, []);

  // Scroll and Resize Observer
  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    updateArrows();

    slider.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);

    const observer = new ResizeObserver(updateArrows);

    observer.observe(slider);

    if (slider.firstElementChild) {
      observer.observe(slider.firstElementChild);
    }

    return () => {
      slider.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
      observer.disconnect();
    };
  }, [products.length, updateArrows]);

  // Scroll Slider
  const scrollSlider = (direction) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const cards = slider.querySelectorAll(".home-data-card");

    if (!cards.length) return;

    const cardWidth = cards[0].getBoundingClientRect().width;

    const styles = window.getComputedStyle(slider);
    const gap = parseFloat(styles.columnGap) || 0;

    const cardStep = cardWidth + gap;

    const maxScroll = Math.max(0, slider.scrollWidth - slider.clientWidth);

    const scrollDistance = cardStep * scrollCards;

    const targetPosition =
      direction > 0
        ? Math.min(maxScroll, slider.scrollLeft + scrollDistance)
        : Math.max(0, slider.scrollLeft - scrollDistance);

    slider.scrollTo({
      left: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section className={`home-data-section ${className}`}>
      {/* Section Title */}
      {title && <h2 className="home-data-title">{title}</h2>}

      {/* Carousel */}
      <div className="home-data-carousel">
        {/* Slider Track */}
        <div className="home-data-track" ref={sliderRef}>
          {products.map((item) => (
            <article
              className="home-data-card"
              key={item.id}
              style={{
                "--visible-cards": visibleCards,
              }}
            >
              <Link
                to={item.link || "/"}
                className="home-data-link"
                aria-label={`View ${item.alt || "product"}`}
              >
                <img
                  src={item.image}
                  alt={item.alt || ""}
                  className="home-data-image"
                  loading="eager"
                  decoding="async"
                  onLoad={updateArrows}
                />
              </Link>
            </article>
          ))}
        </div>

        {/* Previous Arrow */}
        {canScrollLeft && (
          <button
            type="button"
            className="home-data-arrow home-data-prev"
            onClick={() => scrollSlider(-1)}
            aria-label="Previous products"
          >
            &#8249;
          </button>
        )}

        {/* Next Arrow */}
        {canScrollRight && (
          <button
            type="button"
            className="home-data-arrow home-data-next"
            onClick={() => scrollSlider(1)}
            aria-label="Next products"
          >
            &#8250;
          </button>
        )}
      </div>
    </section>
  );
}

export default HomeData;
