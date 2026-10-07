import {
  Search,
  UserCircle,
  ChevronDown,
  ShoppingCart,
  MapPin,
} from "lucide-react";

import appliancesIcon from "../../assets/images/icons/appliances.svg";
import beautyIcon from "../../assets/images/icons/beauty.svg";
import booksIcon from "../../assets/images/icons/books.svg";
import electronicsIcon from "../../assets/images/icons/electronics.svg";
import forYouIcon from "../../assets/images/icons/for-you.svg";
import furnitureIcon from "../../assets/images/icons/furniture.svg";
import homeIcon from "../../assets/images/icons/home.svg";
import mobilesIcon from "../../assets/images/icons/mobiles.svg";
import sportsFitnessIcon from "../../assets/images/icons/sports-fitness.svg";
import toysBabyIcon from "../../assets/images/icons/toys-baby.svg";

import logo from "../../assets/images/logo/logo.png";
import logoName from "../../assets/images/logo/logo-name.png";

import "../../styles/Header.css";

function Header() {
  const categories = [
    {
      name: "For You",
      icon: forYouIcon,
    },
    {
      name: "Mobiles",
      icon: mobilesIcon,
    },
    {
      name: "Electronics",
      icon: electronicsIcon,
    },
    {
      name: "Beauty",
      icon: beautyIcon,
    },
    {
      name: "Home",
      icon: homeIcon,
    },
    {
      name: "Appliances",
      icon: appliancesIcon,
    },
    {
      name: "Toys & Baby",
      icon: toysBabyIcon,
    },
    {
      name: "Sports & Fitness",
      icon: sportsFitnessIcon,
    },
    {
      name: "Furniture",
      icon: furnitureIcon,
    },
    {
      name: "Books",
      icon: booksIcon,
    },
  ];

  return (
    <header className="header">
      {/* ================= TOP SECTION ================= */}

      <div className="header-top">
        {/* Left Side */}

        <div className="header-top-left">
          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="" className="logo-image" />

            <img src={logoName} alt="NammaCart" className="logo-name" />
          </div>

          {/* Groceries */}

          <div className="travel">
            <span>Groceries</span>
          </div>
        </div>

        {/* Right Side */}

        <div className="delivery-location">
          <MapPin size={18} />

          <span>Location not set</span>

          <button>Select delivery location</button>

          <span className="location-arrow">›</span>
        </div>
      </div>

      {/* ================= SEARCH SECTION ================= */}

      <div className="header-middle">
        {/* Search */}

        <div className="search-box">
          <Search size={23} />

          <input
            type="text"
            placeholder="Search for Products, Brands and More"
          />
        </div>

        {/* Navigation */}

        <div className="header-actions">
          {/* Login */}

          <div className="header-action">
            <UserCircle size={24} />

            <span>Login</span>

            <ChevronDown size={16} />
          </div>

          {/* More */}

          <div className="header-action">
            <span>More</span>

            <ChevronDown size={16} />
          </div>

          {/* Cart */}

          <div className="header-action cart">
            <ShoppingCart size={25} />

            <span>Cart</span>
          </div>
        </div>
      </div>

      {/* ================= CATEGORY SECTION ================= */}

      <nav className="category-bar">
        {categories.map((category, index) => (
          <div
            className={`category ${index === 0 ? "active" : ""}`}
            key={category.name}
          >
            <img
              src={category.icon}
              alt={category.name}
              className="category-icon"
            />

            <span>{category.name}</span>
          </div>
        ))}
      </nav>
    </header>
  );
}

export default Header;
