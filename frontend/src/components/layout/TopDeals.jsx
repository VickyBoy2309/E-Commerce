import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import "../../styles/TopDeals.css";

function TopDeals({
  title,
  backgroundImage,
  products = [],
  variant = "default",
  showLabels = false,
  cardWidth,
  cardGap,
  sectionPadding,
  titleSize,
  imageAspectRatio,
  imageFit = "contain",
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

  const updateArrows = useCallback(() => {
    const track = scrollRef.current;

    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const currentScroll = track.scrollLeft;

    setCanScrollLeft(currentScroll > 2);
    setCanScrollRight(maxScroll > 2 && currentScroll < maxScroll - 2);
  }, []);

  // Recalculate arrows after the layout and product images update.
  useLayoutEffect(() => {
    updateArrows();
  }, [updateArrows, displayedProducts.length, variant]);

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

    // Image loading can change the track's scrollable width.
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
  }, [updateArrows, displayedProducts, variant]);

  const scroll = (direction) => {
    const track = scrollRef.current;

    if (!track) return;

    const cards = track.querySelectorAll(".top-deals__card");

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

  const sectionStyle = {
    ...(sectionPadding !== undefined
      ? { "--top-deals-section-padding": sectionPadding }
      : {}),
    ...(titleSize !== undefined ? { "--top-deals-title-size": titleSize } : {}),
    ...(cardWidth !== undefined ? { "--top-deals-card-width": cardWidth } : {}),
    ...(cardGap !== undefined ? { "--top-deals-card-gap": cardGap } : {}),
    ...(imageAspectRatio !== undefined
      ? { "--top-deals-image-ratio": imageAspectRatio }
      : {}),
    "--top-deals-image-fit": imageFit,
  };

  const sectionClasses = [
    "top-deals-section",
    `top-deals-section--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const containerClasses = [
    "top-deals",
    `top-deals--${variant}`,
    containerClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClasses} style={sectionStyle}>
      {title && <h2 className="spotlight-title">{title}</h2>}

      <div
        className={containerClasses}
        style={{
          backgroundImage:
            variant === "default" && backgroundImage
              ? `url("${backgroundImage}")`
              : "none",
        }}
      >
        <div className="top-deals__slider">
          <div className="top-deals__track" ref={scrollRef}>
            {displayedProducts.map((product) => (
              <article className="top-deals__card" key={product.id}>
                <Link
                  to={product.link || "/"}
                  className="top-deals__link"
                  aria-label={`View ${product.alt || "product"}`}
                >
                  <img
                    className="top-deals__image"
                    src={product.image}
                    alt={product.alt || ""}
                    loading="lazy"
                  />
                </Link>

                {showLabels && (
                  <p className="top-deals__label" title={product.alt || ""}>
                    {product.label || product.alt}
                  </p>
                )}
              </article>
            ))}
          </div>

          {showArrows && canScrollLeft && (
            <button
              className="top-deals__arrow top-deals__arrow--left"
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous products"
            >
              &#8249;
            </button>
          )}

          {showArrows && canScrollRight && (
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
