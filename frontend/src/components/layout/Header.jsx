import {
  Search,
  UserCircle,
  ChevronDown,
  ShoppingCart,
  MapPin,
  Sparkles,
  Package,
  Heart,
  Store,
  Gift,
  BellRing,
  Monitor,
  Headphones,
  Download,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import appliancesIcon from "../../assets/images/icons/appliances.svg";
import beautyIcon from "../../assets/images/icons/beauty.svg";
import booksIcon from "../../assets/images/icons/books.svg";
import electronicsIcon from "../../assets/images/icons/electronics.svg";
import gamingIcon from "../../assets/images/icons/gaming.svg";
import fashionIcon from "../../assets/images/icons/fashion.svg";
import forYouIcon from "../../assets/images/icons/for-you.svg";
import furnitureIcon from "../../assets/images/icons/furniture.svg";
import homeIcon from "../../assets/images/icons/home.svg";
import mobilesIcon from "../../assets/images/icons/mobiles.svg";
import sportsFitnessIcon from "../../assets/images/icons/sports-fitness.svg";
import toysBabyIcon from "../../assets/images/icons/toys-baby.svg";
import assessoriesIcon from "../../assets/images/icons/accessories.svg";

import logo from "../../assets/images/logo/logo.png";
import logoName from "../../assets/images/logo/logo-name.png";
import groceriesLogo from "../../assets/images/logo/groceries.png";

import "../../styles/Header.css";

function Header() {
  const categories = [
    {
      name: "For You",
      icon: forYouIcon,
      path: "/for-you",
    },
    {
      name: "Fashion",
      icon: fashionIcon,
      path: "/fashion",
    },
    {
      name: "Accessories",
      icon: assessoriesIcon,
      path: "/accessories",
    },
    {
      name: "Mobiles",
      icon: mobilesIcon,
      path: "/mobiles",
    },
    {
      name: "Electronics",
      icon: electronicsIcon,
      path: "/electronics",
    },
    {
      name: "Beauty",
      icon: beautyIcon,
      path: "/beauty",
    },
    {
      name: "Home",
      icon: homeIcon,
      path: "/home",
    },
    {
      name: "Appliances",
      icon: appliancesIcon,
      path: "/appliances",
    },
    {
      name: "Toys & Baby",
      icon: toysBabyIcon,
      path: "/toys-baby",
    },
    {
      name: "Sports & Fitness",
      icon: sportsFitnessIcon,
      path: "/sports-fitness",
    },
    {
      name: "Furniture",
      icon: furnitureIcon,
      path: "/furniture",
    },
    {
      name: "Books",
      icon: booksIcon,
      path: "/books",
    },
    {
      name: "Gaming",
      icon: gamingIcon,
      path: "/gaming",
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
            <NavLink to="/for-you" className="logo">
              <img src={logo} alt="" className="logo-image" />

              <img src={logoName} alt="NammaCart" className="logo-name" />
            </NavLink>
          </div>

          {/* Groceries */}

          <div className="groceries">
            <NavLink to="/groceries" className="groceries">
              <img
                src={groceriesLogo}
                alt="Groceries"
                className="groceries-logo"
              />
            </NavLink>
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
          {/* =================== Login =================*/}

          <div className="login-wrapper">
            {/* Login Trigger */}

            <NavLink to="/login" className="header-action login-trigger">
              <UserCircle size={24} />

              <span>Login</span>

              <ChevronDown size={16} />
            </NavLink>

            {/* Login Dropdown */}

            <div className="login-dropdown">
              {/* New Customer */}

              <div className="login-dropdown-header">
                <span>New customer?</span>

                <NavLink to="/login">Login</NavLink>
              </div>

              {/* My Profile */}

              <NavLink to="/profile" className="login-dropdown-item">
                <UserCircle size={20} />

                <span>My Profile</span>
              </NavLink>

              {/* NammaCart Plus */}

              <NavLink to="/plus" className="login-dropdown-item">
                <Sparkles size={20} />

                <span>NammaCart Plus Zone</span>
              </NavLink>

              {/* Orders */}

              <NavLink to="/orders" className="login-dropdown-item">
                <Package size={20} />

                <span>Orders</span>
              </NavLink>

              {/* Wishlist */}

              <NavLink to="/wishlist" className="login-dropdown-item">
                <Heart size={20} />

                <span>Wishlist</span>
              </NavLink>

              {/* Rewards */}

              <NavLink to="/rewards" className="login-dropdown-item">
                <Gift size={20} />

                <span>Rewards</span>
              </NavLink>

              {/* Gift Cards */}

              <NavLink to="/gift-cards" className="login-dropdown-item">
                <Gift size={20} />

                <span>Gift Cards</span>
              </NavLink>

              {/* Download App */}

              <NavLink to="/download-app" className="login-dropdown-item">
                <Download size={20} />

                <span>Download App</span>
              </NavLink>
            </div>
          </div>

          {/* More */}
          <div className="more-wrapper">
            {/* More Trigger */}
            <div className="header-action more-trigger">
              <span>More</span>
              <ChevronDown size={16} />
            </div>

            {/* More Dropdown */}
            <div className="more-dropdown">
              <h3>More</h3>

              <button className="more-item">
                <Store size={20} />
                <span>Become a Seller</span>
              </button>

              <button className="more-item">
                <BellRing size={20} />
                <span>Notification Settings</span>
              </button>

              <button className="more-item">
                <Headphones size={20} />
                <span>24x7 Customer Care</span>
              </button>

              <button className="more-item">
                <Monitor size={20} />
                <span>Advertise on Flipkart</span>
              </button>
            </div>
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
        {categories.map((category) => (
          <NavLink
            key={category.name}
            to={category.path}
            end={category.path === "/for-you"}
            className={({ isActive }) => `category ${isActive ? "active" : ""}`}
          >
            <div className="category-icon-wrapper">
              <img
                src={category.icon}
                alt={category.name}
                className="category-icon"
              />
            </div>

            <span>{category.name}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
