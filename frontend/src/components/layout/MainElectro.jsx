import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import "../../styles/MainElectro.css";

function MainElectro({
  title,
  products = [],
  cardWidth,
  cardGap,
  sectionPadding,
  titleSize,
  imageAspectRatio,
  imageFit = "cover",
  showArrows = true,
  scrollAmount = 6,
  className = "",
  containerClassName = "",
  maxProducts,
}) {
  const scrollRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const displayedProducts =
    maxProducts == null ? products : products.slice(0, maxProducts);

  // Update arrow visibility according to the current scroll position.
  const updateArrows = useCallback(() => {
    const track = scrollRef.current;

    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const currentScroll = track.scrollLeft;

    setCanScrollLeft(currentScroll > 2);
    setCanScrollRight(maxScroll > 2 && currentScroll < maxScroll - 2);
  }, []);

  useLayoutEffect(() => {
    updateArrows();
  }, [updateArrows, displayedProducts.length]);

  // Recalculate arrows when the track, images, or viewport changes.
  useEffect(() => {
    const track = scrollRef.current;

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
  }, [updateArrows, displayedProducts]);

  // Arrow navigation: card, number of cards, or page.
  const scroll = (direction) => {
    const track = scrollRef.current;

    if (!track) return;

    const cards = track.querySelectorAll(".main-electro__card");

    if (!cards.length) return;

    const trackStyles = window.getComputedStyle(track);
    const gap = parseFloat(trackStyles.columnGap) || 0;

    const cardWidthActual = cards[0].getBoundingClientRect().width;
    const cardStep = cardWidthActual + gap;

    let distance;

    if (scrollAmount === "card") {
      distance = cardStep;
    } else if (typeof scrollAmount === "number") {
      distance = cardStep * scrollAmount;
    } else {
      distance = track.clientWidth * 0.85;
    }

    const maxScroll = track.scrollWidth - track.clientWidth;

    const target = Math.max(
      0,
      Math.min(maxScroll, track.scrollLeft + direction * distance),
    );

    track.scrollTo({
      left: target,
      behavior: "smooth",
    });
  };

  // Customizable CSS properties for each section.
  const sectionStyle = {
    ...(sectionPadding !== undefined
      ? { "--main-electro-section-padding": sectionPadding }
      : {}),
    ...(titleSize !== undefined
      ? { "--main-electro-title-size": titleSize }
      : {}),
    ...(cardWidth !== undefined
      ? { "--main-electro-card-width": cardWidth }
      : {}),
    ...(cardGap !== undefined ? { "--main-electro-card-gap": cardGap } : {}),
    ...(imageAspectRatio !== undefined
      ? { "--main-electro-image-ratio": imageAspectRatio }
      : {}),
    "--main-electro-image-fit": imageFit,
  };

  const sectionClasses = ["main-electro-section", className]
    .filter(Boolean)
    .join(" ");

  const containerClasses = ["main-electro", containerClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClasses} style={sectionStyle}>
      {title && <h2 className="main-electro__title">{title}</h2>}

      <div className={containerClasses}>
        <div className="main-electro__slider">
          <div className="main-electro__track" ref={scrollRef}>
            {displayedProducts.map((product) => (
              <article className="main-electro__card" key={product.id}>
                <Link
                  to={product.link || "/"}
                  className="main-electro__link"
                  aria-label={`View ${product.alt || "product"}`}
                >
                  <img
                    className="main-electro__image"
                    src={product.image}
                    alt={product.alt || ""}
                    loading="lazy"
                    draggable="false"
                  />
                </Link>
              </article>
            ))}
          </div>

          {showArrows && canScrollLeft && (
            <button
              className="main-electro__arrow main-electro__arrow--left"
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous products"
            >
              &#8249;
            </button>
          )}

          {showArrows && canScrollRight && (
            <button
              className="main-electro__arrow main-electro__arrow--right"
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

export default MainElectro;
