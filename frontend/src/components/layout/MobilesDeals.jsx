import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import "../../styles/MobilesDeals.css";

function MobilesDeals({
  title = "Top Premium Deals",
  products = [],
  sectionId = "mobiles-premium-deals",
  className = "",
  showArrows = true,
}) {
  const sliderRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Check whether scrolling is possible in either direction.
  const updateArrows = useCallback(() => {
    const track = sliderRef.current;

    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const currentScroll = track.scrollLeft;

    setCanScrollLeft(currentScroll > 2);
    setCanScrollRight(maxScroll > 2 && currentScroll < maxScroll - 2);
  }, []);

  // Update arrow visibility after rendering products.
  useLayoutEffect(() => {
    updateArrows();
  }, [updateArrows, products.length]);

  // Keep arrow visibility updated on scroll, resize, and image loading.
  useEffect(() => {
    const track = sliderRef.current;

    if (!track) return;

    let animationFrame;

    const refreshArrows = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateArrows);
    };

    track.addEventListener("scroll", refreshArrows, {
      passive: true,
    });

    window.addEventListener("resize", refreshArrows);

    const observer = new ResizeObserver(refreshArrows);
    observer.observe(track);

    if (track.firstElementChild) {
      observer.observe(track.firstElementChild);
    }

    const images = track.querySelectorAll("img");

    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", refreshArrows);
        img.addEventListener("error", refreshArrows);
      }
    });

    refreshArrows();

    return () => {
      cancelAnimationFrame(animationFrame);

      track.removeEventListener("scroll", refreshArrows);
      window.removeEventListener("resize", refreshArrows);

      observer.disconnect();

      images.forEach((img) => {
        img.removeEventListener("load", refreshArrows);
        img.removeEventListener("error", refreshArrows);
      });
    };
  }, [updateArrows, products]);

  // Move exactly one product card per click.
  const scroll = (direction) => {
    const track = sliderRef.current;

    if (!track) return;

    const cards = track.querySelectorAll(".mobiles-deals-card");

    if (!cards.length) return;

    const trackStyles = window.getComputedStyle(track);
    const gap = parseFloat(trackStyles.columnGap) || 0;
    const cardWidth = cards[0].getBoundingClientRect().width;
    const cardStep = cardWidth + gap;

    const maxScroll = track.scrollWidth - track.clientWidth;

    const target = Math.max(
      0,
      Math.min(maxScroll, track.scrollLeft + direction * cardStep),
    );

    track.scrollTo({
      left: target,
      behavior: "smooth",
    });
  };

  return (
    <section className={`mobiles-deals-section ${className}`} id={sectionId}>
      <h2 className="mobiles-deals-title">{title}</h2>

      <div className="mobiles-deals-slider">
        {/* LEFT ARROW */}
        {showArrows && canScrollLeft && (
          <button
            type="button"
            className="mobiles-deals-prev"
            onClick={() => scroll(-1)}
            aria-label={`Previous ${title}`}
          >
            <svg
              viewBox="0 0 24 24"
              width="25"
              height="25"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M15 5l-7 7 7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        {/* PRODUCT SLIDER */}
        <div className="mobiles-deals-track" ref={sliderRef}>
          {products.map((product) => (
            <div className="mobiles-deals-card" key={product.id}>
              <Link
                to={product.link || "/"}
                className="mobiles-deals-link"
                aria-label={`View ${product.alt || "product"}`}
              >
                <img
                  className="mobiles-deals-image"
                  src={product.image}
                  alt={product.alt || ""}
                  draggable="false"
                  loading="lazy"
                />
              </Link>
            </div>
          ))}
        </div>

        {/* RIGHT ARROW */}
        {showArrows && canScrollRight && (
          <button
            type="button"
            className="mobiles-deals-next"
            onClick={() => scroll(1)}
            aria-label={`Next ${title}`}
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
        )}
      </div>
    </section>
  );
}

export default MobilesDeals;
