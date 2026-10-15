import { Link } from "react-router-dom";
import "../../styles/CategoryNav.css";

export default function CategoryNav({ categories = [], className = "" }) {
  const handleCategoryClick = (event, category) => {
    if (!category.sectionId) return;

    // If this category targets a section on the current page,
    // scroll to that section instead of navigating elsewhere.
    event.preventDefault();

    document.getElementById(category.sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Update the URL hash without triggering a page reload.
    window.history.replaceState(null, "", `#${category.sectionId}`);
  };

  return (
    <nav
      className={`category-nav ${className}`.trim()}
      aria-label="Product categories"
    >
      {categories.map((category) => {
        const { id, name, image, path, sectionId } = category;

        const content = (
          <>
            <div className="category-nav-image">
              <img src={image} alt={name} loading="lazy" />
            </div>

            <span className="category-nav-label">{name}</span>
          </>
        );

        return sectionId ? (
          <a
            key={id}
            href={`#${sectionId}`}
            className="category-nav-item"
            onClick={(event) => handleCategoryClick(event, category)}
          >
            {content}
          </a>
        ) : (
          <Link
            key={id}
            to={path || "#"}
            className="category-nav-item"
            onClick={(event) => {
              if (!path) event.preventDefault();
            }}
          >
            {content}
          </Link>
        );
      })}
    </nav>
  );
}
