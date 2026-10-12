import { useState } from "react";
import LocationPickerModal from "../components/location/LocationPickerModal";
import { LocationContext } from "./LocationContextValue";

function readSavedLocation() {
  try {
    const saved = localStorage.getItem("nammacart-location");
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

export function LocationProvider({ children }) {
  const [location, setLocation] = useState(readSavedLocation);
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  function saveLocation(nextLocation) {
    setLocation(nextLocation);

    try {
      localStorage.setItem("nammacart-location", JSON.stringify(nextLocation));
    } catch {
      // The current selection still works if storage is unavailable.
    }

    setIsPickerOpen(false);
  }

  return (
    <LocationContext.Provider
      value={{
        location,
        openLocationPicker: () => setIsPickerOpen(true),
        closeLocationPicker: () => setIsPickerOpen(false),
        saveLocation,
      }}
    >
      {children}

      <LocationPickerModal
        open={isPickerOpen}
        initialLocation={location}
        onClose={() => setIsPickerOpen(false)}
        onConfirm={saveLocation}
      />
    </LocationContext.Provider>
  );
}
