/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { useLocation } from "react-router-dom";

export const AdRotation = createContext(null);

export function useAdVisitIndex() {
  const context = useContext(AdRotation);

  if (!context) {
    throw new Error("useAdVisitIndex must be used inside AdRotationProvider.");
  }

  return context.visits[context.pathname] ?? 0;
}

export default function AdRotationProvider({ children }) {
  const { pathname } = useLocation();

  const previousPath = useRef(null);
  const [visits, setVisits] = useState({});

  useLayoutEffect(() => {
    const previous = previousPath.current;

    if (previous === null) {
      setVisits((current) => ({
        ...current,
        [pathname]: current[pathname] ?? 0,
      }));
    } else if (previous !== pathname) {
      setVisits((current) => ({
        ...current,
        [pathname]: (current[pathname] ?? -1) + 1,
      }));
    }

    previousPath.current = pathname;
  }, [pathname]);

  return (
    <AdRotation.Provider value={{ visits, pathname }}>
      {children}
    </AdRotation.Provider>
  );
}
