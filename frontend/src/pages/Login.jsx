import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css";

import loginImage from "../assets/images/banners/login.png";
import createAccImage from "../assets/images/banners/createAcc.png";

const API_BASE_URL = "http://localhost:5000";

export default function Login() {
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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
    setMode(nextMode);
    setShowPassword(false);
    setMessage("");
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
      {/* Top Header */}
      <header className="auth-header">
        <Link to="/" className="auth-header-logo">
          <span className="auth-header-logo-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="5" y="8" width="14" height="13" rx="2" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
          </span>

          <span className="auth-header-logo-text">
            Namma<span>Cart</span>
          </span>
        </Link>

        <Link to="/" className="auth-back-link">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>

          <span>Back to shopping</span>
        </Link>
      </header>
      <main className="auth-page">
        <section className="auth-card">
          {/* Left promotional image */}
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
              )}

              <div className="auth-field">
                <label htmlFor="auth-email">Email address</label>
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

              <div className="auth-field">
                <div className="auth-label-row">
                  <label htmlFor="auth-password">Password</label>

                  {!isRegister && (
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
                  )}
                </div>

                <div className="auth-password-wrap">
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
                    onClick={() => setShowPassword((previous) => !previous)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {isRegister && (
                <label className="auth-terms">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={form.terms}
                    onChange={handleChange}
                    required
                  />
                  <span>
                    I agree to the Terms of Service and Privacy Policy.
                  </span>
                </label>
              )}

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
                <span aria-hidden="true">→</span>
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
              ♢ Your account details are handled securely.
            </p>
          </section>
        </section>
      </main>
    </div>
  );
}
