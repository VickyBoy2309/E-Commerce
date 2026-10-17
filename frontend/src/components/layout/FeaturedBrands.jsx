import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/FeaturedBrands.css";

function FeaturedBrands({ brands = [], title = "Featured Brands" }) {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = useCallback(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const maxScroll = Math.max(0, slider.scrollWidth - slider.clientWidth);

    setCanScrollLeft(slider.scrollLeft > 1);
    setCanScrollRight(slider.scrollLeft < maxScroll - 1);
  }, []);

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
  }, [brands.length, updateArrows]);

  const scrollSlider = (direction) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const cards = slider.querySelectorAll(".featured-brands__card");

    if (!cards.length) return;

    const cardWidth = cards[0].getBoundingClientRect().width;
    const styles = window.getComputedStyle(slider);
    const gap = parseFloat(styles.columnGap) || 0;
    const cardStep = cardWidth + gap;

    const maxScroll = Math.max(0, slider.scrollWidth - slider.clientWidth);

    const scrollDistance = cardStep * 4;

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
    <section className="featured-brands-section">
      <h2 className="featured-brands__title">{title}</h2>

      <div className="featured-brands__carousel">
        <div className="featured-brands__track" ref={sliderRef}>
          {brands.map((brand) => (
            <article className="featured-brands__card" key={brand.id}>
              <Link
                to={brand.link || "/"}
                className="featured-brands__link"
                aria-label={`View ${brand.alt || brand.name || "brand"}`}
              >
                <img
                  className="featured-brands__image"
                  src={brand.image}
                  alt={brand.alt || brand.name || ""}
                  loading="eager"
                  decoding="async"
                  onLoad={updateArrows}
                />
              </Link>
            </article>
          ))}
        </div>

        {canScrollLeft && (
          <button
            type="button"
            className="featured-brands__arrow featured-brands__arrow--prev"
            onClick={() => scrollSlider(-1)}
            aria-label="Previous featured brands"
          >
            &#8249;
          </button>
        )}

        {canScrollRight && (
          <button
            type="button"
            className="featured-brands__arrow featured-brands__arrow--next"
            onClick={() => scrollSlider(1)}
            aria-label="Next featured brands"
          >
            &#8250;
          </button>
        )}
      </div>
    </section>
  );
}

export default FeaturedBrands;
