import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/TopBrands.css";

export default function TopBrands({ title = "Ace brands", brands = [] }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = useCallback(() => {
    const container = scrollRef.current;

    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;

    setCanScrollLeft(container.scrollLeft > 1);
    setCanScrollRight(container.scrollLeft < maxScroll - 1);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    container.scrollLeft = 0;
    updateArrows();

    container.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);

    const observer = new ResizeObserver(updateArrows);
    observer.observe(container);

    if (container.firstElementChild) {
      observer.observe(container.firstElementChild);
    }

    return () => {
      container.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
      observer.disconnect();
    };
  }, [updateArrows, brands]);

  const scroll = (direction) => {
    const container = scrollRef.current;

    if (!container) return;

    const cards = container.querySelectorAll(".top-brands__card");

    if (!cards.length) return;

    const cardWidth = cards[0].getBoundingClientRect().width;
    const styles = window.getComputedStyle(container);
    const gap = parseFloat(styles.columnGap) || 0;
    const cardStep = cardWidth + gap;

    const visibleCount = Math.max(
      1,
      Math.floor((container.clientWidth + gap + 1) / cardStep),
    );

    const maxStartIndex = Math.max(0, cards.length - visibleCount);
    const currentIndex = Math.max(
      0,
      Math.round(container.scrollLeft / cardStep),
    );

    const nextIndex = Math.max(
      0,
      Math.min(maxStartIndex, currentIndex + direction * visibleCount),
    );

    container.scrollTo({
      left: nextIndex * cardStep,
      behavior: "smooth",
    });
  };

  return (
    <section className="top-brands-section">
      <h2 className="top-brands__title">{title}</h2>

      <div className="top-brands">
        <div className="top-brands__slider">
          <div className="top-brands__track" ref={scrollRef}>
            {brands.map((brand) => (
              <article className="top-brands__card" key={brand.id}>
                <Link
                  to={brand.link || "/"}
                  className="top-brands__link"
                  aria-label={`View ${brand.alt}`}
                >
                  <img
                    className="top-brands__image"
                    src={brand.image}
                    alt={brand.alt}
                    loading="lazy"
                    draggable="false"
                  />
                </Link>
              </article>
            ))}
          </div>

          {canScrollLeft && (
            <button
              className="top-brands__arrow top-brands__arrow--left"
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous brands"
            >
              &#8249;
            </button>
          )}

          {canScrollRight && (
            <button
              className="top-brands__arrow top-brands__arrow--right"
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next brands"
            >
              &#8250;
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
