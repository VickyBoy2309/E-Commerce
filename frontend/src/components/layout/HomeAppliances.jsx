import React, { useState, useRef, useEffect } from "react";
import homeAppliances from "../../data/homeAppliances";
import "../../styles/HomeAppliances.css";

const HomeAppliances = ({ variant = "home" }) => {
  // Select section data based on variant
  // ========================================
  // SELECT SECTION DATA
  // ========================================

  const sectionData =
    variant === "kitchen"
      ? {
          categoryIcons: homeAppliances.categoryIcons2,
          categories: homeAppliances.categories2,

          bestPicks: homeAppliances.bestPicks2,
          refrigerator: homeAppliances.refrigerator,
          mixerMore: homeAppliances.mixerMore,
          chimney: homeAppliances.chimney,
          airFryerMore: homeAppliances.airFryerMore,
        }
      : homeAppliances;

  // Default active category
  const [activeCategory, setActiveCategory] = useState(
    variant === "kitchen" ? "bestPicks" : "fansGeyser",
  );

  // References
  const categoryNavRef = useRef(null);
  const sliderRef = useRef(null);

  // Category scrolling controller
  const categoryScrollTarget = useRef(0);
  const categoryAnimationFrame = useRef(null);

  // Get selected category products
  const activeProducts = sectionData[activeCategory] || [];

  // ========================================
  // CATEGORY CHANGE
  // ========================================

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);

    // Reset product slider
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  // ========================================
  // SMOOTH CATEGORY SCROLLING
  // ========================================

  const handleCategoryWheel = (event) => {
    const navigation = categoryNavRef.current;

    if (!navigation) return;

    const maxScroll = navigation.scrollWidth - navigation.clientWidth;

    // No horizontal overflow
    if (maxScroll <= 1) return;

    // Normalize mouse wheel movement
    let deltaX = event.deltaX;
    let deltaY = event.deltaY;

    // Support different wheel delta modes
    if (event.deltaMode === 1) {
      deltaX *= 16;
      deltaY *= 16;
    } else if (event.deltaMode === 2) {
      deltaX *= navigation.clientWidth;
      deltaY *= navigation.clientWidth;
    }

    // Detect horizontal or vertical wheel movement
    const delta = Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : deltaY;

    if (delta === 0) return;

    // Prevent webpage scrolling
    event.preventDefault();

    // Scrolling sensitivity
    const scrollSpeed = 1.35;

    // Initialize target position
    if (categoryAnimationFrame.current === null) {
      categoryScrollTarget.current = navigation.scrollLeft;
    }

    // Update target position
    categoryScrollTarget.current = Math.max(
      0,
      Math.min(maxScroll, categoryScrollTarget.current + delta * scrollSpeed),
    );

    // Avoid creating multiple animation loops
    if (categoryAnimationFrame.current !== null) return;

    // Start smooth animation
    const animateScroll = () => {
      const element = categoryNavRef.current;

      if (!element) {
        categoryAnimationFrame.current = null;
        return;
      }

      const currentPosition = element.scrollLeft;

      const difference = categoryScrollTarget.current - currentPosition;

      // Finish animation when target is reached
      if (Math.abs(difference) < 0.5) {
        element.scrollLeft = categoryScrollTarget.current;
        categoryAnimationFrame.current = null;
        return;
      }

      // Smooth easing with minimum movement
      const movement =
        Math.sign(difference) * Math.max(1.5, Math.abs(difference) * 0.2);

      element.scrollLeft += movement;

      categoryAnimationFrame.current = requestAnimationFrame(animateScroll);
    };

    categoryAnimationFrame.current = requestAnimationFrame(animateScroll);
  };

  // ========================================
  // SYNCHRONIZE MANUAL SCROLLING
  // ========================================

  const handleCategoryScroll = () => {
    // Keep target synchronized with scrollbar dragging
    if (categoryAnimationFrame.current === null) {
      if (categoryNavRef.current) {
        categoryScrollTarget.current = categoryNavRef.current.scrollLeft;
      }
    }
  };

  // ========================================
  // PRODUCT SLIDER SCROLLING
  // ========================================

  const scrollProducts = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction * 100,
      behavior: "smooth",
    });
  };

  // ========================================
  // CLEANUP ANIMATIONS
  // ========================================

  useEffect(() => {
    return () => {
      if (categoryAnimationFrame.current !== null) {
        cancelAnimationFrame(categoryAnimationFrame.current);
        categoryAnimationFrame.current = null;
      }
    };
  }, []);

  // ========================================
  // RENDER
  // ========================================

  return (
    <section className={`home-appliances-section ${variant}`}>
      <h2 className="home-appliances-title">
        {variant === "kitchen"
          ? "Deals on kitchen appliances"
          : "Deals on home appliances"}
      </h2>
      {/* Main Gradient Background */}
      <div className="home-appliances-container">
        {/* Section Title */}

        {/* Category Navigation */}
        <div
          className="home-appliances-navigation"
          ref={categoryNavRef}
          onWheel={handleCategoryWheel}
          onScroll={handleCategoryScroll}
        >
          {sectionData.categories.map((category) => (
            <button
              type="button"
              key={category.id}
              className={`home-appliances-category ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => handleCategoryChange(category.id)}
              aria-pressed={activeCategory === category.id}
            >
              {/* Category Icon */}
              <div className="home-appliances-category-icon">
                <img src={sectionData.categoryIcons[category.icon]} alt="" />
              </div>

              {/* Category Title */}
              <span>{category.title}</span>

              {/* Active Underline */}
              <div className="home-appliances-active-line"></div>
            </button>
          ))}
        </div>

        {/* Product Showcase */}
        <div className="home-appliances-products-wrapper">
          {/* Left Arrow */}
          <button
            type="button"
            className="home-appliances-arrow home-appliances-arrow-left"
            onClick={() => scrollProducts(-1)}
            aria-label="Scroll products left"
          >
            &#8249;
          </button>

          {/* Product Slider */}
          <div className="home-appliances-products-slider" ref={sliderRef}>
            {activeProducts.map((product) => {
              // Complete promotional image
              const productImage = (
                <img
                  src={product.image}
                  alt={product.alt || product.name || "Home appliance"}
                  className="home-appliances-product-img"
                  loading="lazy"
                />
              );

              return product.link ? (
                <a
                  key={product.id}
                  href={product.link}
                  className="home-appliances-product-card"
                >
                  {productImage}
                </a>
              ) : (
                <div key={product.id} className="home-appliances-product-card">
                  {productImage}
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            className="home-appliances-arrow home-appliances-arrow-right"
            onClick={() => scrollProducts(1)}
            aria-label="Scroll products right"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeAppliances;
