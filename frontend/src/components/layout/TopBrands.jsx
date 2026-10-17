import { Link } from "react-router-dom";
import { useAdVisitIndex } from "./AdRotation";
import "../../styles/TopBrands.css";

export default function TopBrands({
  title = "Top Brands & Best Deals",
  brands = [],
}) {
  const visitIndex = useAdVisitIndex();

  if (!brands.length) {
    return null;
  }

  const totalGroups = Math.ceil(brands.length / 6);
  const groupIndex = visitIndex % totalGroups;
  const startIndex = (groupIndex * 6) % brands.length;

  const displayedBrands = Array.from(
    { length: Math.min(6, brands.length) },
    (_, index) => brands[(startIndex + index) % brands.length],
  );

  return (
    <section className="top-brands-section">
      <h2 className="top-brands__title">{title}</h2>

      <div className="top-brands">
        <div className="top-brands__grid">
          {displayedBrands.map((brand) => (
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
      </div>
    </section>
  );
}
