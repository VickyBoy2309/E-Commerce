import { useContext } from "react";
import { LocationContext } from "./LocationContextValue";

export default function useNammaCartLocation() {
  const context = useContext(LocationContext);

  if (!context) {
    throw new Error(
      "useNammaCartLocation must be used inside LocationProvider",
    );
  }

  return context;
}
