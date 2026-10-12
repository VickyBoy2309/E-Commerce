import { useMemo, useRef, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { MapPin, Search, LocateFixed, X } from "lucide-react";
import "../../styles/LocationPicker.css";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const DELIVERY_CENTER = {
  lat: Number(import.meta.env.VITE_DELIVERY_CENTER_LAT || 13.0827),
  lng: Number(import.meta.env.VITE_DELIVERY_CENTER_LNG || 80.2707),
};

const DELIVERY_RADIUS_KM = Number(
  import.meta.env.VITE_DELIVERY_RADIUS_KM || 10,
);

const MAP_CONTAINER_STYLE = {
  width: "100%",
  height: "360px",
};

const MAP_OPTIONS = {
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  clickableIcons: false,
};

function distanceInKm(a, b) {
  const toRadians = (degrees) => (degrees * Math.PI) / 180;
  const earthRadiusKm = 6371;

  const latDifference = toRadians(b.lat - a.lat);
  const lngDifference = toRadians(b.lng - a.lng);

  const value =
    Math.sin(latDifference / 2) ** 2 +
    Math.cos(toRadians(a.lat)) *
      Math.cos(toRadians(b.lat)) *
      Math.sin(lngDifference / 2) ** 2;

  return 2 * earthRadiusKm * Math.asin(Math.sqrt(Math.min(1, value)));
}

function sameLocation(a, b) {
  if (!a || !b) return false;

  return (
    Math.abs(a.lat - b.lat) < 0.000005 && Math.abs(a.lng - b.lng) < 0.000005
  );
}

// The wrapper controls the modal lifecycle.
// Closing the modal unmounts its content, so reopening initializes
// state from the latest saved location without a resetting useEffect.
export default function LocationPickerModal({
  open,
  initialLocation,
  onClose,
  onConfirm,
}) {
  if (!open) return null;

  const locationKey = initialLocation
    ? `${initialLocation.lat},${initialLocation.lng},${initialLocation.address || ""}`
    : "new-location";

  return (
    <LocationPickerContent
      key={locationKey}
      initialLocation={initialLocation}
      onClose={onClose}
      onConfirm={onConfirm}
    />
  );
}

function LocationPickerContent({ initialLocation, onClose, onConfirm }) {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "nammacart-google-maps",
    googleMapsApiKey: API_KEY || "",
  });

  const [position, setPosition] = useState(() =>
    initialLocation
      ? { lat: initialLocation.lat, lng: initialLocation.lng }
      : null,
  );

  const [address, setAddress] = useState(initialLocation?.address || "");

  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  const mapInstanceRef = useRef(null);
  const requestIdRef = useRef(0);

  const lastGeocodedRef = useRef(
    initialLocation?.address && initialLocation
      ? { lat: initialLocation.lat, lng: initialLocation.lng }
      : null,
  );

  const initialCenter = useMemo(
    () =>
      initialLocation
        ? { lat: initialLocation.lat, lng: initialLocation.lng }
        : DELIVERY_CENTER,
    [initialLocation],
  );

  const available = position
    ? distanceInKm(position, DELIVERY_CENTER) <= DELIVERY_RADIUS_KM
    : false;

  function reverseGeocode(coords) {
    const requestId = ++requestIdRef.current;

    lastGeocodedRef.current = coords;
    setPosition(coords);
    setAddress("");
    setMessage("");
    setBusy(true);

    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ location: coords }, (results, status) => {
      if (requestId !== requestIdRef.current) return;

      setBusy(false);

      if (status === "OK" && results?.[0]) {
        setAddress(results[0].formatted_address);
      } else {
        setAddress(`${coords.lat.toFixed(6)}, ${coords.lng.toFixed(6)}`);
        setMessage(
          "Address lookup failed. You can still use these coordinates.",
        );
      }
    });
  }

  function searchAddress(event) {
    event.preventDefault();

    if (!query.trim() || !isLoaded || busy) return;

    const requestId = ++requestIdRef.current;

    setBusy(true);
    setMessage("");

    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode(
      { address: query.trim(), region: "IN" },
      (results, status) => {
        if (requestId !== requestIdRef.current) return;

        setBusy(false);

        if (status !== "OK" || !results?.[0]) {
          setMessage(
            "Address not found. Try a more specific address or PIN code.",
          );
          return;
        }

        const result = results[0];
        const point = result.geometry.location;
        const coords = { lat: point.lat(), lng: point.lng() };

        lastGeocodedRef.current = coords;
        setPosition(coords);
        setAddress(result.formatted_address);
        setMessage("");

        if (mapInstanceRef.current) {
          mapInstanceRef.current.panTo(coords);
          mapInstanceRef.current.setZoom(16);
        }
      },
    );
  }

  function useCurrentLocation() {
    if (!navigator.geolocation) {
      setMessage("Your browser does not support location access.");
      return;
    }

    setMessage("");

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const location = {
          lat: coords.latitude,
          lng: coords.longitude,
        };

        if (mapInstanceRef.current) {
          mapInstanceRef.current.panTo(location);
          mapInstanceRef.current.setZoom(16);
        }

        reverseGeocode(location);
      },
      () => {
        setMessage(
          "Location access was denied or unavailable. Allow location permission and try again.",
        );
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      },
    );
  }

  function handleMapIdle() {
    const map = mapInstanceRef.current;
    if (!map) return;

    const center = map.getCenter();
    if (!center) return;

    const coords = {
      lat: center.lat(),
      lng: center.lng(),
    };

    if (sameLocation(lastGeocodedRef.current, coords)) return;

    reverseGeocode(coords);
  }

  function confirmLocation() {
    if (!position || !address || busy) return;

    onConfirm({
      lat: position.lat,
      lng: position.lng,
      address,
      available,
      checkedAt: new Date().toISOString(),
    });
  }

  return (
    <div
      className="location-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="location-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="location-title"
      >
        <div className="location-modal-header">
          <div>
            <h2 id="location-title">Choose delivery location</h2>
            <p>Move the map to position the pin.</p>
          </div>

          <button
            type="button"
            className="location-close"
            onClick={onClose}
            aria-label="Close location picker"
          >
            <X size={21} />
          </button>
        </div>

        <form className="location-search" onSubmit={searchAddress}>
          <Search size={19} />

          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search address, area or PIN code"
            aria-label="Search delivery address"
          />

          <button type="submit" disabled={busy || !query.trim()}>
            Search
          </button>
        </form>

        <button
          type="button"
          className="location-current-button"
          onClick={useCurrentLocation}
          disabled={busy}
        >
          <LocateFixed size={18} />
          Use my current location
        </button>

        {!API_KEY && (
          <p className="location-error">
            Add VITE_GOOGLE_MAPS_API_KEY to your .env file.
          </p>
        )}

        {loadError && (
          <p className="location-error">
            Google Maps could not load. Check your API key, enabled APIs,
            billing and website restrictions.
          </p>
        )}

        {!isLoaded && !loadError && API_KEY && (
          <div className="location-map-loading">Loading Google Maps...</div>
        )}

        {isLoaded && (
          <div className="location-map-wrapper">
            <GoogleMap
              mapContainerStyle={MAP_CONTAINER_STYLE}
              center={initialCenter}
              zoom={initialLocation ? 16 : 12}
              options={MAP_OPTIONS}
              onLoad={(map) => {
                mapInstanceRef.current = map;
              }}
              onIdle={handleMapIdle}
              onUnmount={() => {
                mapInstanceRef.current = null;
              }}
            />

            {/* Fixed pin overlay — never moves with the map */}
            <div className="location-center-pin" aria-hidden="true">
              <MapPin
                size={38}
                fill="#2874F0"
                color="#ffffff"
                strokeWidth={2.5}
              />
            </div>
          </div>
        )}

        <div className="location-selection">
          <div className="location-selection-heading">
            <MapPin size={20} />
            <strong>Selected address</strong>
          </div>

          <p>
            {address ||
              "Search for an address or move the map to select a location."}
          </p>

          {position && (
            <small>
              {position.lat.toFixed(6)}, {position.lng.toFixed(6)}
            </small>
          )}
        </div>

        {message && (
          <p className="location-notice" role="status">
            {message}
          </p>
        )}

        {position && address && !busy && (
          <div
            className={
              available
                ? "location-availability is-available"
                : "location-availability is-unavailable"
            }
            role="status"
          >
            {available
              ? "Delivery appears available in this area."
              : "This location is outside the configured delivery radius."}
          </div>
        )}

        <button
          type="button"
          className="location-confirm-button"
          onClick={confirmLocation}
          disabled={!position || !address || busy}
        >
          {busy ? "Finding address..." : "Confirm location"}
        </button>
      </section>
    </div>
  );
}
