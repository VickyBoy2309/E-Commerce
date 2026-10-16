import { Outlet, useLocation } from "react-router-dom";
import { useLayoutEffect, useRef, useState } from "react";

import Header from "./Header";
import CategorySkeleton from "./CategorySkeleton";
import AdRotationProvider from "./AdRotation";

function NammaCartLayout() {
  const location = useLocation();
  const isFirstRender = useRef(true);
  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setIsLoading(true);

    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AdRotationProvider>
      <Header />

      {isLoading ? <CategorySkeleton /> : <Outlet />}
    </AdRotationProvider>
  );
}

export default NammaCartLayout;
