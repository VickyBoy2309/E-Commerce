import { useEffect, useRef, useState } from "react";
import "../../styles/PromoSlider.css";

export default function PromoSlider({
  banners = [],
  autoPlay = true,
  interval = 4000,
  className = "",
}) {
  const hasMultipleBanners = banners.length > 1;
  const cloneCount = Math.min(3, banners.length);

  // Original slides start after the prepended clones.
  const [activeIndex, setActiveIndex] = useState(cloneCount);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [slideStep, setSlideStep] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const pointerStartX = useRef(0);
  const lastPointerX = useRef(0);
  const dragDistance = useRef(0);
  const didDrag = useRef(false);
  const dragSessionActive = useRef(false);
  const activeIndexRef = useRef(cloneCount);

  const slides = hasMultipleBanners
    ? [
        ...banners.slice(-cloneCount),
        ...banners,
        ...banners.slice(0, cloneCount),
      ]
    : banners;

  // Keep the current index available to event handlers.
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  /* ========================================
     MEASURE ACTUAL SLIDE WIDTH + GAP
  ======================================== */

  useEffect(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;

    if (!track || !viewport) return;

    const measure = () => {
      const first = track.children[0];
      const second = track.children[1];

      if (!first || !second) return;

      // Measure layout positions directly, without zoom correction.
      const step = second.offsetLeft - first.offsetLeft;

      setSlideStep(step);
    };

    measure();

    const observer = new ResizeObserver(measure);

    observer.observe(viewport);

    if (track.children[0]) {
      observer.observe(track.children[0]);
    }

    if (track.children[1]) {
      observer.observe(track.children[1]);
    }

    return () => observer.disconnect();
  }, [banners.length]);

  /* ========================================
     AUTOPLAY
  ======================================== */

  useEffect(() => {
    if (!autoPlay || !hasMultipleBanners || isDragging) return;

    const timer = setInterval(() => {
      setTransitionEnabled(true);
      setActiveIndex((current) => current + 1);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, hasMultipleBanners, interval, isDragging]);

  /* ========================================
     INFINITE LOOP RESET
  ======================================== */

  const handleTransitionEnd = (event) => {
    if (event.propertyName !== "transform") return;

    const current = activeIndexRef.current;

    let resetIndex = null;

    // Reached the first clone after the final original banner.
    if (current >= cloneCount + banners.length) {
      resetIndex = cloneCount;
    }

    // Reached the prepended clone before the first original banner.
    if (current < cloneCount) {
      resetIndex = cloneCount + banners.length - 1;
    }

    if (resetIndex === null) return;

    setTransitionEnabled(false);
    setActiveIndex(resetIndex);
    activeIndexRef.current = resetIndex;

    // Restore transitions after React commits the reset.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
    });
  };

  /* ========================================
     DRAG START
  ======================================== */

  const handlePointerDown = (event) => {
    if (!hasMultipleBanners || dragSessionActive.current) return;

    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    dragSessionActive.current = true;

    pointerStartX.current = event.clientX;
    lastPointerX.current = event.clientX;
    dragDistance.current = 0;
    didDrag.current = false;

    setDragOffset(0);
    setIsDragging(true);
    setTransitionEnabled(false);

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!dragSessionActive.current) return;

    const distance = event.clientX - pointerStartX.current;

    lastPointerX.current = event.clientX;
    dragDistance.current = distance;

    if (Math.abs(distance) > 5) {
      didDrag.current = true;
    }

    setDragOffset(distance);
  };

  const finishDragging = () => {
    if (!dragSessionActive.current) return;

    dragSessionActive.current = false;

    const distance = dragDistance.current;
    const threshold = Math.min(100, Math.max(35, slideStep * 0.12));

    setIsDragging(false);
    setDragOffset(0);
    setTransitionEnabled(true);

    if (Math.abs(distance) >= threshold) {
      setActiveIndex((current) => current + (distance < 0 ? 1 : -1));
    }
  };

  const handlePointerUp = (event) => {
    finishDragging();

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handlePointerCancel = () => {
    finishDragging();
  };

  /* ========================================
     PAGINATION
  ======================================== */

  const goToSlide = (index) => {
    setTransitionEnabled(true);
    setActiveIndex(cloneCount + index);
  };

  if (!banners.length) return null;

  const realIndex =
    (((activeIndex - cloneCount) % banners.length) + banners.length) %
    banners.length;

  return (
    <section className={`promo-slider ${className}`}>
      <div
        ref={viewportRef}
        className={`promo-slider-viewport ${isDragging ? "is-dragging" : ""}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onLostPointerCapture={handlePointerCancel}
      >
        <div
          ref={trackRef}
          className={`promo-slider-track ${
            transitionEnabled && !isDragging ? "" : "no-transition"
          }`}
          style={{
            transform: `translate3d(${
              -(activeIndex * slideStep) + dragOffset
            }px, 0, 0)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((banner, index) => (
            <div className="promo-slide" key={`${banner.id ?? index}-${index}`}>
              <img
                src={banner.image}
                alt={banner.alt ?? "Promotional banner"}
                className="promo-banner-image"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>

      {hasMultipleBanners && (
        <div className="promo-slider-dots">
          {banners.map((banner, index) => (
            <button
              key={banner.id ?? index}
              type="button"
              className={`promo-dot ${realIndex === index ? "active" : ""}`}
              onClick={() => {
                if (didDrag.current) {
                  didDrag.current = false;
                  return;
                }

                goToSlide(index);
              }}
              aria-label={`Go to banner ${index + 1}`}
              aria-current={realIndex === index ? "true" : undefined}
            />
          ))}
        </div>
      )}
    </section>
  );
}
