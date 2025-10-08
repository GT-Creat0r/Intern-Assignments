import { createContext, useState, useEffect } from "react";

export const RouterContext = createContext();

export const RouterProvider = ({ children }) => {
  const [path, setPath] = useState(window.location.pathname);

  // Navigate to a new route
  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setPath(to);
  };

  // Listen for browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};
