import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { LocationProvider } from "./context/LocationContext.jsx";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LocationProvider>
      <App />
    </LocationProvider>
  </StrictMode>,
);
