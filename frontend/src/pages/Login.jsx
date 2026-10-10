import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  ShoppingCart,
  CircleCheck,
  Circle,
  Store,
  BellRing,
  Headphones,
  Monitor,
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Mail,
  Lock,
  UserRound,
  ShieldCheck,
} from "lucide-react";

import "../styles/Auth.css";
import loginImage from "../assets/images/banners/login.png";
import createAccImage from "../assets/images/banners/createAcc.png";
import logo from "../assets/images/logo/logo.png";
import logoName from "../assets/images/logo/logo-name.png";
import groceriesLogo from "../assets/images/logo/groceries.png";
import groceriesWhiteLogo from "../assets/images/logo/groceries-white.png";

const API_BASE_URL = "http://localhost:5000";

export default function Login() {
  const [mode, setMode] = useState("login");
  const [transitionPhase, setTransitionPhase] = useState("idle");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isGroceries = pathname.startsWith("/groceries");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });
  const isRegister = mode === "register";
  function handleChange(event) {
    const { name, value, checked, type } = event.target;
    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
    setMessage("");
  }
  function switchMode(nextMode) {
    if (nextMode === mode || transitionPhase !== "idle") return;
    setTransitionPhase(nextMode === "register" ? "cover" : "cover-reverse");
    window.setTimeout(() => {
      setMode(nextMode);
      setShowPassword(false);
      setMessage("");
      setTransitionPhase(nextMode === "register" ? "reveal" : "reveal-reverse");
      window.setTimeout(() => {
        setTransitionPhase("idle");
      }, 350);
    }, 350);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
    if (form.password.length < 8) {
      setMessage("Password must contain at least 8 characters.");
      return;
    }
    if (isRegister && !form.terms) {
      setMessage("Please accept the Terms and Privacy Policy.");
      return;
    }
    setLoading(true);
    try {
      const endpoint = isRegister ? "/register" : "/login";
      const payload = isRegister
        ? {
            name: form.name.trim(),
            email: form.email.trim(),
            password: form.password,
          }
        : {
            email: form.email.trim(),
            password: form.password,
          };
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.message || "Authentication failed.");
      }
      if (isRegister) {
        setMessage("Account created successfully! Please sign in.");
        setForm({
          name: "",
          email: "",
          password: "",
          terms: false,
        });
        setMode("login");
      } else {
        setMessage("Login successful!");
        // Change this destination to your desired page.
        window.location.assign("/");
      }
    } catch (error) {
      setMessage(
        error.message || "Unable to connect. Please check your backend.",
      );
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="auth-layout">
      <header className="auth-header">
        {/* Service Switcher */}
        <div className="auth-service-wrapper">
          <button
            type="button"
            className="auth-service-trigger"
            onClick={() => setServiceMenuOpen((previous) => !previous)}
            aria-expanded={serviceMenuOpen}
            aria-label="Switch shopping service"
          >
            {isGroceries ? (
              <img
                src={groceriesWhiteLogo}
                alt="Groceries"
                className="auth-service-current-grocery"
              />
            ) : (
              <span className="auth-service-current">
                <img src={logo} alt="" />
                <img src={logoName} alt="NammaCart" />
              </span>
            )}
            {serviceMenuOpen ? (
              <ChevronUp size={17} />
            ) : (
              <ChevronDown size={17} />
            )}
          </button>
          {serviceMenuOpen && (
            <div className="auth-service-dropdown">
              <NavLink
                to="/"
                end
                className={() =>
                  `auth-service-option ${!isGroceries ? "active" : ""}`
                }
                onClick={() => setServiceMenuOpen(false)}
              >
                <span className="auth-service-icon namma-service-icon">
                  <img src={logo} alt="" />
                </span>
                <span className="auth-service-details">
                  <strong>NammaCart</strong>
                  <span>Your one-stop shopping</span>
                </span>
                {!isGroceries ? (
                  <CircleCheck size={24} className="auth-service-selected" />
                ) : (
                  <Circle size={24} className="auth-service-unselected" />
                )}
              </NavLink>
              <NavLink
                to="/groceries"
                className={() =>
                  `auth-service-option ${isGroceries ? "active" : ""}`
                }
                onClick={() => setServiceMenuOpen(false)}
              >
                <span className="auth-service-icon groceries-service-icon">
                  <img src={groceriesLogo} alt="" />
                </span>
                <span className="auth-service-details">
                  <strong>Groceries</strong>
                  <span>Freshness at your doorstep</span>
                </span>
                {isGroceries ? (
                  <CircleCheck size={24} className="auth-service-selected" />
                ) : (
                  <Circle size={24} className="auth-service-unselected" />
                )}
              </NavLink>
            </div>
          )}
        </div>
        {/* Right-side Actions */}
        <nav className="auth-header-actions">
          <Link to="/" className="auth-back-shopping">
            <ArrowLeft size={19} />
            <span>Back to Shopping</span>
          </Link>
          <div className="auth-more-wrapper">
            <button
              type="button"
              className="auth-header-action auth-more-trigger"
              onClick={() => setMoreMenuOpen((previous) => !previous)}
              aria-expanded={moreMenuOpen}
            >
              <span>More</span>
              {moreMenuOpen ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>
            {moreMenuOpen && (
              <div className="auth-more-dropdown">
                <button type="button" className="auth-more-item">
                  <Store size={20} />
                  <span>Become a Seller</span>
                </button>
                <button type="button" className="auth-more-item">
                  <BellRing size={20} />
                  <span>Notification Settings</span>
                </button>
                <button type="button" className="auth-more-item">
                  <Headphones size={20} />
                  <span>24x7 Customer Care</span>
                </button>
                <button type="button" className="auth-more-item">
                  <Monitor size={20} />
                  <span>Advertise on NammaCart</span>
                </button>
              </div>
            )}
          </div>
          <Link to="/cart" className="auth-header-action auth-cart">
            <ShoppingCart size={25} />
            <span>Cart</span>
          </Link>
        </nav>
      </header>
      <main className="auth-page">
        <section
          className={[
            "auth-card",
            isRegister ? "auth-card-register" : "auth-card-login",
            transitionPhase !== "idle" ? "auth-transitioning" : "",
            transitionPhase !== "idle"
              ? `auth-transition-${transitionPhase}`
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
          aria-busy={transitionPhase !== "idle"}
        >
          <div className="auth-visual-panel">
            <img
              src={isRegister ? createAccImage : loginImage}
              alt={
                isRegister
                  ? "Create your NammaCart account"
                  : "Welcome back to NammaCart"
              }
              className="auth-visual-image"
            />
          </div>
          <section className="auth-form-panel">
            <Link to="/" className="auth-mobile-brand">
              Namma<span>Cart</span>
            </Link>
            <div className="auth-heading">
              <span className="auth-eyebrow">
                {isRegister ? "JOIN NAMMACART" : "WELCOME BACK"}
              </span>
              <h1>{isRegister ? "Create account" : "Sign in"}</h1>
              <p>
                {isRegister
                  ? "Create an account to get started."
                  : "Enter your details to access your account."}
              </p>
            </div>
            <form onSubmit={handleSubmit} className="auth-form">
              {isRegister && (
                <div className="auth-field">
                  <label htmlFor="auth-name">Full name</label>
                  <div className="auth-input-wrap">
                    <UserRound size={20} className="auth-input-icon" />
                    <input
                      id="auth-name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      minLength={2}
                      required
                    />
                  </div>
                </div>
              )}
              <div className="auth-field">
                <label htmlFor="auth-email">Email address</label>
                <div className="auth-input-wrap">
                  <Mail size={20} className="auth-input-icon" />
                  <input
                    id="auth-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="auth-field">
                <div className="auth-label-row">
                  <label htmlFor="auth-password">Password</label>
                </div>
                <div className="auth-password-wrap">
                  <Lock size={20} className="auth-input-icon" />
                  <input
                    id="auth-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder={
                      isRegister
                        ? "At least 8 characters"
                        : "Enter your password"
                    }
                    autoComplete={
                      isRegister ? "new-password" : "current-password"
                    }
                    minLength={8}
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="auth-show-password"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    title={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {!isRegister && (
                  <div className="auth-forgot-row">
                    <button
                      className="auth-text-button"
                      type="button"
                      onClick={() =>
                        setMessage(
                          "Password reset needs to be configured in your backend.",
                        )
                      }
                    >
                      Forgot password?
                    </button>
                  </div>
                )}
              </div>
              {message && (
                <p className="auth-message" role="status">
                  {message}
                </p>
              )}
              <button className="auth-submit" type="submit" disabled={loading}>
                {loading
                  ? "Please wait..."
                  : isRegister
                    ? "Create account"
                    : "Sign in"}
                <ArrowRight size={22} strokeWidth={2.8} aria-hidden="true" />
              </button>
            </form>
            <p className="auth-switch">
              {isRegister ? "Already have an account?" : "New to NammaCart?"}
              <button
                type="button"
                className="auth-text-button"
                onClick={() => switchMode(isRegister ? "login" : "register")}
              >
                {isRegister ? "Sign in" : "Create an account"}
              </button>
            </p>
            <p className="auth-security">
              <ShieldCheck size={16} className="auth-security-icon" />
              <span>Your account details are handled securely.</span>
            </p>
          </section>
        </section>
      </main>
    </div>
  );
}
