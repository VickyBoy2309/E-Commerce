import { useEffect, useState } from "react";
import { LocateFixed, MapPin, X } from "lucide-react";
import { Map, MapControls } from "@/components/ui/map";
import "../../styles/LocationPickerModal.css";

const CHENNAI = [80.2707, 13.0827];

const INITIAL_VIEWPORT = {
  center: CHENNAI,
  zoom: 13,
  bearing: 0,
  pitch: 0,
};

function formatAddress(properties) {
  const street = [properties.housenumber, properties.street]
    .filter(Boolean)
    .join(" ");

  const parts = [
    street || properties.name,
    properties.neighbourhood,
    properties.suburb,
    properties.city || properties.town || properties.village,
    properties.state,
    properties.postcode,
  ];

  return [...new Set(parts.filter(Boolean))].join(", ");
}

export default function LocationPickerModal({ onClose, onConfirm }) {
  const [viewport, setViewport] = useState(INITIAL_VIEWPORT);
  const [resolvedLocation, setResolvedLocation] = useState(null);
  const [addressLookupError, setAddressLookupError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [locating, setLocating] = useState(false);

  const longitude = viewport.center[0];
  const latitude = viewport.center[1];

  const hasCurrentAddress =
    resolvedLocation?.latitude === latitude &&
    resolvedLocation?.longitude === longitude;

  const loadingAddress =
    !hasCurrentAddress || resolvedLocation?.status === "loading";

  const address =
    hasCurrentAddress && resolvedLocation?.status === "success"
      ? resolvedLocation.address
      : "";

  // Reverse-geocode the current map center.
  useEffect(() => {
    let cancelled = false;

    const timer = setTimeout(async () => {
      try {
        const url =
          `https://photon.komoot.io/reverse` +
          `?lat=${latitude}&lon=${longitude}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Address lookup failed.");
        }

        const data = await response.json();
        const properties = data.features?.[0]?.properties;

        if (!properties) {
          throw new Error("No address found.");
        }

        const formattedAddress = formatAddress(properties);

        if (!formattedAddress) {
          throw new Error("No readable address found.");
        }

        if (!cancelled) {
          setResolvedLocation({
            latitude,
            longitude,
            address: formattedAddress,
            status: "success",
          });

          setAddressLookupError("");
        }
      } catch {
        if (!cancelled) {
          setResolvedLocation({
            latitude,
            longitude,
            address: "",
            status: "error",
          });

          setAddressLookupError(
            "We couldn't find a street address here. You can still confirm the coordinates.",
          );
        }
      }
    }, 500);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [latitude, longitude]);

  // Move the map to the device's current location.
  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Your browser doesn't support location detection.");
      return;
    }

    setLocating(true);
    setLocationError("");
    setAddressLookupError("");

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setViewport((current) => ({
          ...current,
          center: [coords.longitude, coords.latitude],
          zoom: 16,
        }));

        setLocating(false);
      },
      (error) => {
        const message =
          error.code === error.PERMISSION_DENIED
            ? "Location permission was denied. Allow location access in your browser settings."
            : error.code === error.TIMEOUT
              ? "Finding your location took too long. Please try again."
              : "Unable to determine your location. Please try again.";

        setLocationError(message);
        setLocating(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      },
    );
  };

  // Confirm the location underneath the center pin.
  const confirmLocation = () => {
    if (loadingAddress || locating) return;

    onConfirm({
      address:
        address ||
        `Selected location (${latitude.toFixed(5)}, ${longitude.toFixed(5)})`,
      latitude,
      longitude,
    });
  };

  return (
    <div className="location-modal-backdrop" onClick={onClose}>
      <section
        className="location-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="location-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="location-modal-header">
          <h2 id="location-modal-title">Choose delivery location</h2>

          <button
            type="button"
            className="location-close-button"
            onClick={onClose}
            aria-label="Close location picker"
          >
            <X size={22} />
          </button>
        </div>

        {/* Selected address */}
        <div
          className="location-address-card"
          aria-live="polite"
          aria-busy={loadingAddress}
        >
          <div className="location-address-icon">
            <MapPin size={22} />
          </div>

          <div className="location-address-details">
            <strong>
              {loadingAddress
                ? "Finding address..."
                : "Selected delivery location"}
            </strong>

            <p>
              {loadingAddress
                ? "Please wait while we identify this place."
                : address ||
                  "Address unavailable. You can use the coordinates below."}
            </p>

            <small>
              {latitude.toFixed(5)}, {longitude.toFixed(5)}
            </small>
          </div>
        </div>

        {/* Interactive map */}
        <div className="location-map">
          <Map viewport={viewport} onViewportChange={setViewport}>
            <MapControls />
          </Map>

          {/* Fixed pin in the center of the map */}
          <div className="location-map-pin" aria-hidden="true">
            <MapPin size={40} fill="white" />
          </div>

          {/* My Location: bottom-left */}
          <button
            type="button"
            className="location-map-current-button"
            onClick={useCurrentLocation}
            disabled={locating}
            aria-label="Use my current location"
            title="Use my current location"
          >
            <LocateFixed size={19} />

            <span>{locating ? "Locating..." : "My Location"}</span>
          </button>
        </div>

        {/* Errors */}
        {(locationError || addressLookupError) && (
          <p className="location-error" role="status">
            {locationError || addressLookupError}
          </p>
        )}

        {/* Fixed footer */}
        <div className="location-modal-footer">
          <button
            type="button"
            className="location-confirm-button"
            onClick={confirmLocation}
            disabled={loadingAddress || locating}
          >
            {loadingAddress ? "Finding address..." : "Confirm location"}
          </button>
        </div>
      </section>
    </div>
  );
}
