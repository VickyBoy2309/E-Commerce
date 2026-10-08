import {
  Search,
  UserCircle,
  ChevronDown,
  ShoppingCart,
  MapPin,
  Sparkles,
  Package,
  Heart,
  Gift,
  Store,
  BellRing,
  Monitor,
  Headphones,
  Download,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import logo from "../../assets/images/logo/logo.png";
import logoName from "../../assets/images/logo/logo-name.png";
import groceriesLogo from "../../assets/images/logo/groceries.png";
import groceriesWhiteLogo from "../../assets/images/logo/groceries-white.png";

import "../../styles/GroceryHeader.css";

function GroceryHeader() {
  return (
    <header className="grocery-header">
      {/* ================= TOP SECTION ================= */}

      <div className="grocery-header-top">
        {/* Left Side */}

        <div className="grocery-header-top-left">
          {/* NammaCart */}

          <NavLink to="/" className="grocery-logo">
            <img src={logo} alt="" className="grocery-logo-image" />

            <img src={logoName} alt="NammaCart" className="grocery-logo-name" />
          </NavLink>

          {/* Groceries */}

          <NavLink to="/groceries" className="grocery-brand">
            {({ isActive }) => (
              <img
                src={isActive ? groceriesWhiteLogo : groceriesLogo}
                alt="Groceries"
                className="grocery-brand-logo"
              />
            )}
          </NavLink>
        </div>

        {/* Delivery Location */}

        <div className="grocery-delivery-location">
          <MapPin size={18} />

          <span>Location not set</span>

          <button>Select delivery location</button>

          <span className="grocery-location-arrow">›</span>
        </div>
      </div>

      {/* ================= SEARCH SECTION ================= */}

      <div className="grocery-header-middle">
        {/* Search */}

        <div className="grocery-search-box">
          <Search size={23} />

          <input
            type="text"
            placeholder="Search for Groceries, Brands and More"
          />
        </div>

        {/* Navigation */}

        <div className="grocery-header-actions">
          {/* ================= LOGIN ================= */}

          <div className="grocery-login-wrapper">
            {/* Login Trigger */}

            <NavLink
              to="/login"
              className="grocery-header-action grocery-login-trigger"
            >
              <UserCircle size={24} />

              <span>Login</span>

              <ChevronDown size={16} />
            </NavLink>

            {/* Login Dropdown */}

            <div className="grocery-login-dropdown">
              {/* New Customer */}

              <div className="grocery-login-dropdown-header">
                <span>New customer?</span>

                <NavLink to="/login">Login</NavLink>
              </div>

              {/* My Profile */}

              <NavLink to="/profile" className="grocery-login-dropdown-item">
                <UserCircle size={20} />

                <span>My Profile</span>
              </NavLink>

              {/* NammaCart Plus */}

              <NavLink to="/plus" className="grocery-login-dropdown-item">
                <Sparkles size={20} />

                <span>NammaCart Plus Zone</span>
              </NavLink>

              {/* Orders */}

              <NavLink to="/orders" className="grocery-login-dropdown-item">
                <Package size={20} />

                <span>Orders</span>
              </NavLink>

              {/* Wishlist */}

              <NavLink to="/wishlist" className="grocery-login-dropdown-item">
                <Heart size={20} />

                <span>Wishlist</span>
              </NavLink>

              {/* Rewards */}

              <NavLink to="/rewards" className="grocery-login-dropdown-item">
                <Gift size={20} />

                <span>Rewards</span>
              </NavLink>

              {/* Gift Cards */}

              <NavLink to="/gift-cards" className="grocery-login-dropdown-item">
                <Gift size={20} />

                <span>Gift Cards</span>
              </NavLink>

              {/* Download App */}

              <NavLink
                to="/download-app"
                className="grocery-login-dropdown-item"
              >
                <Download size={20} />

                <span>Download App</span>
              </NavLink>
            </div>
          </div>

          {/* ================= MORE ================= */}

          <div className="grocery-more-wrapper">
            {/* More Trigger */}

            <div className="grocery-header-action grocery-more-trigger">
              <span>More</span>

              <ChevronDown size={16} />
            </div>

            {/* More Dropdown */}

            <div className="grocery-more-dropdown">
              <h3>More</h3>

              <button className="grocery-more-item">
                <Store size={20} />

                <span>Become a Seller</span>
              </button>

              <button className="grocery-more-item">
                <BellRing size={20} />

                <span>Notification Settings</span>
              </button>

              <button className="grocery-more-item">
                <Headphones size={20} />

                <span>24x7 Customer Care</span>
              </button>

              <button className="grocery-more-item">
                <Monitor size={20} />

                <span>Advertise on Flipkart</span>
              </button>
            </div>
          </div>

          {/* ================= CART ================= */}

          <div className="grocery-header-action grocery-cart">
            <ShoppingCart size={25} />

            <span>Cart</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default GroceryHeader;
