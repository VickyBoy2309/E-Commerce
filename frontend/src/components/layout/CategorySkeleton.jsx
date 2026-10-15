import "../../styles/CategorySkeleton.css";

function CategorySkeleton() {
  return (
    <main className="category-skeleton">
      {/* Promotional banner placeholders */}
      <section className="skeleton-banners">
        <div className="skeleton skeleton-banner" />
        <div className="skeleton skeleton-banner" />
        <div className="skeleton skeleton-banner" />
      </section>

      {/* First row of product placeholders */}
      <section className="skeleton-products">
        {Array.from({ length: 9 }, (_, index) => (
          <div className="skeleton-product" key={index}>
            <div className="skeleton skeleton-product-image" />
            <div className="skeleton skeleton-product-text" />
          </div>
        ))}
      </section>

      {/* Second row of product placeholders */}
      <section className="skeleton-products">
        {Array.from({ length: 9 }, (_, index) => (
          <div className="skeleton-product" key={index}>
            <div className="skeleton skeleton-product-image" />
            <div className="skeleton skeleton-product-text" />
          </div>
        ))}
      </section>
    </main>
  );
}

export default CategorySkeleton;
