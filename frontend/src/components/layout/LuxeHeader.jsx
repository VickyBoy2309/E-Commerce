import {
  Search,
  UserCircle,
  ChevronDown,
  ShoppingCart,
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

import logo from "../../assets/images/logo/logo.png";
import logoName from "../../assets/images/logo/logo-name.png";

import "../../styles/LuxeHeader.css";

function LuxeHeader() {
  return (
    <header className="luxe-header">
      <div className="luxe-header-container">
        {/* ========================================
            NAMMACART LOGO
        ======================================== */}

        <div className="luxe-header-brand">
          <NavLink to="/for-you" className="luxe-brand-link">
            <img src={logo} alt="NammaCart" className="luxe-brand-icon" />

            <img src={logoName} alt="NammaCart" className="luxe-brand-name" />
          </NavLink>
        </div>

        {/* ========================================
            SEARCH BAR
        ======================================== */}

        <form
          className="luxe-search-box"
          onSubmit={(event) => event.preventDefault()}
        >
          <Search size={23} className="luxe-search-icon" />

          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            aria-label="Search products and brands"
          />
        </form>

        {/* ========================================
            HEADER ACTIONS
        ======================================== */}

        <div className="luxe-header-actions">
          {/* LOGIN */}

          <div className="luxe-login-wrapper">
            <NavLink
              to="/login"
              className="luxe-header-action luxe-login-trigger"
            >
              <UserCircle size={23} />

              <span>Login</span>

              <ChevronDown size={15} />
            </NavLink>

            {/* LOGIN DROPDOWN */}

            <div className="luxe-login-dropdown">
              <div className="luxe-login-dropdown-header">
                <span>New customer?</span>

                <NavLink to="/login">Login</NavLink>
              </div>

              <NavLink to="/profile" className="luxe-dropdown-item">
                <UserCircle size={19} />
                <span>My Profile</span>
              </NavLink>

              <NavLink to="/plus" className="luxe-dropdown-item">
                <Sparkles size={19} />
                <span>NammaCart Plus Zone</span>
              </NavLink>

              <NavLink to="/orders" className="luxe-dropdown-item">
                <Package size={19} />
                <span>Orders</span>
              </NavLink>

              <NavLink to="/wishlist" className="luxe-dropdown-item">
                <Heart size={19} />
                <span>Wishlist</span>
              </NavLink>

              <NavLink to="/rewards" className="luxe-dropdown-item">
                <Gift size={19} />
                <span>Rewards</span>
              </NavLink>

              <NavLink to="/gift-cards" className="luxe-dropdown-item">
                <Gift size={19} />
                <span>Gift Cards</span>
              </NavLink>

              <NavLink to="/download-app" className="luxe-dropdown-item">
                <Download size={19} />
                <span>Download App</span>
              </NavLink>
            </div>
          </div>

          {/* MORE */}

          <div className="luxe-more-wrapper">
            <button
              type="button"
              className="luxe-header-action luxe-more-trigger"
            >
              <span>More</span>
              <ChevronDown size={15} />
            </button>

            {/* MORE DROPDOWN */}

            <div className="luxe-more-dropdown">
              <h3>More</h3>

              <button type="button" className="luxe-dropdown-item">
                <Store size={19} />
                <span>Become a Seller</span>
              </button>

              <button type="button" className="luxe-dropdown-item">
                <BellRing size={19} />
                <span>Notification Settings</span>
              </button>

              <button type="button" className="luxe-dropdown-item">
                <Headphones size={19} />
                <span>24x7 Customer Care</span>
              </button>

              <button type="button" className="luxe-dropdown-item">
                <Monitor size={19} />
                <span>Advertise on NammaCart</span>
              </button>
            </div>
          </div>

          {/* CART */}

          <NavLink to="/cart" className="luxe-header-action luxe-cart">
            <ShoppingCart size={24} />
            <span>Cart</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default LuxeHeader;
