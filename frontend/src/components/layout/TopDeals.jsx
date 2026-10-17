import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/TopDeals.css";

function TopDeals({ title, backgroundImage, products = [] }) {
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
  }, [updateArrows, products]);

  const scroll = (direction) => {
    const container = scrollRef.current;

    if (!container) return;

    const cards = container.querySelectorAll(".top-deals__card");

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
    <section className="top-deals-section">
      <h2 className="spotlight-title">{title}</h2>

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

          {canScrollLeft && (
            <button
              className="top-deals__arrow top-deals__arrow--left"
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous products"
            >
              &#8249;
            </button>
          )}

          {canScrollRight && (
            <button
              className="top-deals__arrow top-deals__arrow--right"
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next products"
            >
              &#8250;
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default TopDeals;
